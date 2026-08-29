# Architecture

This document describes how the **MicroChat docs site** (`ai-microchat-docs`) is built, structured, and deployed. It's a living document — update it as the project evolves.

> **Scope:** This repo is *only* the public policy/legal/changelog site served at **docs.microchat.co**. It is not the MicroChat application (`app.microchat.co`) and contains no application code, user data, or backend.

---

## Overview

A static website generated from Markdown. Content authors edit Markdown files; a static site generator turns them into HTML; a push to `main` automatically deploys.

```
Markdown (src/**/*.md)
      │
      ▼
Eleventy (11ty) build  ──►  _site/  (static HTML/CSS/assets)
      │
      ▼
Git push to main  ──►  DigitalOcean App Platform  ──►  Cloudflare CDN  ──►  docs.microchat.co
```

**Design goals**
- **Content is Markdown.** Non-developers can edit policies directly on GitHub without touching templates or CSS.
- **No client-side app.** Output is plain HTML + one CSS file. No JS framework, no runtime, no database.
- **Push to publish.** No manual deploy step; `main` is the source of truth for the live site.

---

## Tech Stack

| Concern | Choice | Notes |
|---|---|---|
| Static site generator | [Eleventy (11ty) v3](https://www.11ty.dev/) | ES module config (`export default`) |
| Templating | Nunjucks (`.njk`) | Layouts + the index loop |
| Content format | Markdown | `markdown-it` + `markdown-it-anchor` for heading permalinks |
| Styling | Vanilla CSS with custom properties | Single stylesheet, design tokens in `:root` |
| Hosting | DigitalOcean App Platform (Static Site) | Free tier, native GitHub deploy-on-push |
| CDN / DNS | Cloudflare | Caches responses; cache must be purged for instant updates |
| Runtime (build only) | Node.js (`environment_slug: node-js`) | Only needed at build time; nothing runs in production |

---

## Repository Layout

```
ai-microchat-docs/
├── .do/
│   └── app.yaml                 # DigitalOcean App Platform spec
├── src/
│   ├── _data/
│   │   └── site.js              # Global site data (name, url, appUrl)
│   ├── _includes/
│   │   └── layouts/
│   │       ├── base.njk         # Outer HTML shell (header, footer, <head>)
│   │       ├── policy.njk       # Policy page layout (extends base)
│   │       └── changelog.njk    # Changelog layout (extends base)
│   ├── assets/
│   │   ├── css/main.css         # Single stylesheet (design tokens + all styles)
│   │   └── img/                 # logo.png, logo.svg
│   ├── policies/
│   │   ├── policies.json        # Directory data: applies layout + "policies" tag
│   │   ├── privacy-policy.md
│   │   ├── terms-and-conditions.md
│   │   ├── cookie-policy.md
│   │   ├── acceptable-use-policy.md
│   │   └── bug-bounty.md
│   ├── changelog.md             # Product changelog (own layout)
│   └── index.njk                # Home page — auto-lists everything tagged "policies"
├── eleventy.config.js           # Build config: plugins, collections, filters, dirs
├── package.json                 # Scripts + dependencies ("type": "module")
├── README.md
└── ARCHITECTURE.md              # This file
```

`_site/` (build output) and `node_modules/` are generated and git-ignored.

---

## How the Build Works

Configured in [`eleventy.config.js`](eleventy.config.js):

1. **Passthrough assets** — `src/assets` is copied verbatim to `_site/assets` (CSS, images).
2. **Markdown anchors** — `markdown-it-anchor` adds clickable `#` permalinks to `h2`/`h3` headings, using Eleventy's `slugify` for IDs.
3. **`policies` collection** — every file tagged `policies` is gathered and sorted alphabetically by title. The home page iterates this collection, so **new policy pages appear on the index automatically**.
4. **Filters** — `readableDate` (formats `lastUpdated` for display) and `currentYear` (footer copyright).
5. **Directories** — input `src/`, output `_site/`, includes `_includes/`, data `_data/`. Nunjucks is the template engine for both `.md` and `.html`.

### Layout chain

```
base.njk  (html/head/header/footer)
   ├── policy.njk    → renders title, description, lastUpdated badge, breadcrumb, {{ content }}
   └── changelog.njk → renders the changelog
index.njk → uses base.njk directly, loops collections.policies
```

---

## Content Model

Each content page is a Markdown file with YAML front matter:

```yaml
---
title: Privacy Policy
description: How MicroChat collects, uses, and protects your personal information.
lastUpdated: 2026-07-09
permalink: /privacy-policy/
---
```

- **`permalink`** is set explicitly so URLs stay stable regardless of filename.
- Files in `src/policies/` inherit `layout` and `tags: ["policies"]` from [`policies.json`](src/policies/policies.json) — authors never set those manually.
- In-page links to headings use the generated slug (e.g. `[Severity & Rewards](#severity-and-rewards)` — note `&` becomes `-and-`).

### Adding a new policy page

1. Create `src/policies/<name>.md` with front matter (`title`, `description`, `lastUpdated`, `permalink`).
2. Write the body in Markdown, starting at `##` (the layout renders the `#`/H1 from `title`).
3. That's it — the layout, tag, and index listing are automatic.

---

## URL Structure

| Page | URL |
|---|---|
| Home / index | `/` |
| Privacy Policy | `/privacy-policy/` |
| Terms & Conditions | `/terms-and-conditions/` |
| Cookie Policy | `/cookie-policy/` |
| Acceptable Use Policy | `/acceptable-use-policy/` |
| Security & Bug Bounty | `/bug-bounty/` |
| Changelog | `/changelog/` |

---

## Deployment

Defined in [`.do/app.yaml`](.do/app.yaml):

- **Type:** DigitalOcean App Platform **Static Site** (not a Web Service — nothing runs at request time).
- **Trigger:** `deploy_on_push: true` on the `main` branch of `Forward-Education/ai-microchat-docs`.
- **Build:** `npm install && npm run build` → serves the `_site/` directory.
- **Region:** `nyc`.

### Deploy flow

1. Push to `main`.
2. DigitalOcean runs the build command and publishes `_site/`.
3. **Cloudflare caches** the result. Because of CDN caching, a fresh deploy may not appear immediately — **purge the Cloudflare cache** (dashboard) to force an instant update. A browser hard-refresh alone is not enough.

### Custom domain

`docs.microchat.co` is configured in DigitalOcean → Settings → Domains, with a DNS record pointing at the App Platform endpoint (via Cloudflare).

---

## Local Development

Node.js is required (installed via Homebrew; may need `export PATH="/opt/homebrew/bin:$PATH"`).

```bash
npm install
npm run serve   # live-reloading dev server
npm run build   # one-off production build into _site/
```

Build scripts set `NODE_OPTIONS=--no-deprecation` to silence a harmless Eleventy v3 internal deprecation warning.

---

## Conventions & Gotchas

- **Front matter is mandatory.** A Markdown file with no front matter (undefined `title`) will break the `policies` collection sort. The sort is defensively coded (`(a.data.title || "")`), but every content file should still declare full front matter.
- **Design tokens live in `:root`** in [`main.css`](src/assets/css/main.css). Prefer editing CSS custom properties over hard-coding colors, spacing, or fonts. Brand follows Forward Education (Poppins, green/blue palette, pill buttons, rounded cards).
- **Cache, not code.** If a change deployed but isn't visible, suspect Cloudflare caching before debugging the build.
- **No secrets in this repo.** It's a public static site; never commit credentials or user data here.

---

## Future / Open Items

- Fill in remaining placeholders in the privacy policy (sub-processor details, retention timelines, breach-notification SLA).
- `app.microchat.co` links are referenced but the app is not part of this repo.
