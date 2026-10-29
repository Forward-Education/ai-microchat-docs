---
layout: layouts/changelog.njk
title: Changelog
description: Notable changes, improvements, and fixes to MicroChat.
lastUpdated: 2026-10-29

permalink: /changelog/
---

## 2026-10-29 - Version 2.4.3

- Changed: messages a teacher sends in a student's session chat are labelled "Sent by Session Administrator"
- Changed: replaced the beta feedback message with separate messages for running out of credits and expired access
- Added: set up a distinct message for session users whose session manager's access has expired
- Changed: generated programs that fail to compile show an accurate error message and the failure is tracked
- Changed: the tutorial generator tells students to connect modules through the Breakout Board and to charge and switch it on
- Changed: session overview shows how many times each rejoin code was used, the last message column was removed, and the table is sorted by alias alphabetically
- Changed: chat title generation avoids personal information
- Added: improved security

## 2026-10-19 - Version 2.4.2
- Added: user avatars made from initials, moved account link from sidebar to topbar
- Added: the account page shows the access expiry date, is centered and has account controls
- Added: new chat layout for narrow screens
- Added: teachers can expand hidden text in user messages, for example in the explain code prompt
- Fixed: web type appearance in my chats table
- Added: improved security

## 2026-10-09 - Version 2.4.0
- Added: Web chat mode, builds web interfaces that receive micro:bit data
- Added: Improved security

## 2026-10-06 - Version 2.3.1
- Added: upgraded AI model
- Added: added CodeCTRL Apps to the launcher
- Added: modes share a combined My Sessions page, plus updates to session overview and new session pages
- Added: added daily animated doodles to the dashboard
- Added: updated tours and added new ones
- Added: added a back to dashboard button to the launcher chat
- Added: Apps mode has optional extensions
- Added: extension inclusion no longer carries a beta feature warning
- Added: fixed the workspace not resetting on logout
- Added: hid sidebar session info on short screens
- Added: fixed headings to align with accessibility standards
- Added: improved security

## 2026-09-29 - Version 2.1.0

- Added: CodeCTRL Apps as a supported target, building display shield apps with AI in chats and sessions
- Added: fixed session block view always using the micro:bit context and the MakeCode view breaking in sessions
- Added: chats get an AI-generated title based on the first message
- Added: centred the docs link in the sidebar

## 2026-09-24 - Version 2.1.0

- Added: Guided chats (used in email and support)
- Added: Improved loading of code and conversations
- Added: Various fixes, small improvements, and security fixes
  
## 2026-09-10 - Version 2.0.1

- Added: A session-wide rejoin code in addition to join code and alias
- Added: A session status panel in the sidebar
- Added: A tour system with tours for existing features / pages
- Added: Users can name their chats
- Fix: Listed Tutorial Builder under apps for teachers and refined Tutorial Builder UX
- Fix: Launcher scroll on short and narrow screens
- Added: help links at the live help centre
- Added: security controls to backend

## 2026-09-04 - Version 2.0.0

- Added MakeCode Arcade as a supported target
- Added a launcher page with it's own AI chat mode
- Added changes to sidebar menu
- Upgraded supporting AI model
- Added back button to return to session overview when viewing session chats
- Added language dropdown to public pages and moved it from sidebar to topbar
- Fixed buy now button
- Fixed numerous security issues and bugs

## 2026-08-21 - Version 1.7.0

- Added tutorial builder beta feature
- Added policy documents link to sidebar
- Added starter prompt option for sessions
- Synced blocks preview with language selection

## 2026-08-10 - Version 1.6.0

- Localization improvements (PT, ES, DE, FR)
- Fixes for Extensions
- Added new Forward modules

## 2026-08-04 - Version 1.5.1

- Added email verification step to registration
- Added new security controls in infrastructure
- Minor bug fixes


## 2026-07-24 - Version 1.5.0

- Extension inclusion determined by ui toggle
- Added security controls to backend infrastructure

## 2026-07-16 - Version 1.4.9
- Add extension infrastructure
- Added micro:bit radio and microphone extensions as core extensions (can't be turned off)
- Changed leave session redirect to /join instead of /login
- Security hardening
- Added awareness Forward Education products
- Improvements to OTP and SSO
- Added localization infrastructure
- Added download link for session information table
- Modified the welcome email
- Added security controls

## 2026-06-25 - Version 1.4.8
- Fix to payment platform
- Fixed data not reliably updating in sessions
- AI prompt optimizations

## 2026-06-24 - Version 1.4.7

### Added

- Improved makecode compilation handling
- Refined AI system prompt
- Fixed "new conversation" button not working
- Improved error handling
- Security fixes

## 2026-06-16 - Version 1.4.5

### Added
- Improved alerting/error messages
- Login page is now mobile friendly
- Warning messages for mobile and tablet users
- Fixed: promo codes
- Fixed: styling and copy
- Security and bug fixes
  
## 2026-06-04 - Version 1.4.4

### Added
- made micro:bit connection state global so that the connection is maintained during site navigation
- added an archive button as a column in the current sessions table
- added back pairing instruction images with proper responsiveness
- changed session join error to be more specific but still not divulgent
