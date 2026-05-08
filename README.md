# MicroChat Docs

Static policy pages for [MicroChat](https://app.microchat.co), hosted at `docs.microchat.co`.

Built with [Eleventy](https://www.11ty.dev/) and deployed automatically to [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform) on every push to `main`.

## Pages

| Page | URL |
|---|---|
| Index | `/` |
| Privacy Policy | `/privacy-policy/` |
| Terms and Conditions | `/terms-and-conditions/` |
| Cookie Policy | `/cookie-policy/` |
| Acceptable Use Policy | `/acceptable-use-policy/` |

## Updating content

All policy content lives in [`src/policies/`](src/policies/). Each page is a markdown file with front matter:

```yaml
---
title: Privacy Policy
description: How MicroChat collects, uses, and protects your personal information.
lastUpdated: 2026-05-07
permalink: /privacy-policy/
---

## Section heading

Policy content here...
```

Edit a file directly on GitHub (or in any editor) and push to `main` — the site redeploys automatically within ~2 minutes.

## Local development

Requires [Node.js](https://nodejs.org/) v18+.

```sh
npm install
npm run serve
```

Open [http://localhost:8080](http://localhost:8080).

## Deployment

Hosted on DigitalOcean App Platform. The app spec is at [`.do/app.yaml`](.do/app.yaml).

Build command: `npm install && npm run build`  
Output directory: `_site`

To connect a new DigitalOcean app, create an app in the DO dashboard, select this GitHub repo, and DO will detect the app spec automatically.

### Custom domain

Add `docs.microchat.co` in the DigitalOcean App Platform → **Settings → Domains**, then add a CNAME record in your DNS:

```
docs  CNAME  <your-do-app>.ondigitalocean.app
```

## Styling

Styles are in [`src/assets/css/main.css`](src/assets/css/main.css). Design tokens (colors, fonts, spacing) are defined as CSS custom properties in `:root` at the top of the file — update them there to restyle the entire site.

The palette is based on [forwardedu.com](https://forwardedu.com):

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#0097A7` | Teal — links, accents |
| `--color-accent` | `#43A047` | Green accent |
| `--color-text` | `#1a1a1a` | Body text |
| `--font-sans` | Inter | All text |
