# Achyuthan Raghavan — Engineering Portfolio

An engineering portfolio for embedded systems, robotics, UAV, PCB design and computer-vision work.
Built with [Astro](https://astro.build), Tailwind CSS v4 and TypeScript. Statically generated —
deployable to Vercel, Netlify or GitHub Pages with no server.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run og` | Regenerate `public/og.png` (social preview card) |

> **Note:** Tailwind v4 scans source files at server start. If you add a *new* page or component
> and its utility classes don't appear, restart `npm run dev`.

## Adding a project

Every project is one Markdown file. Drop it in `src/content/projects/` — the filename becomes the
URL:

```
src/content/projects/my-project.md   ->   /projects/my-project
```

Minimum frontmatter:

```yaml
---
title: My Project
summary: One or two sentences used on cards and in search results.
year: '2025'
category: Robotics     # Embedded Systems | Robotics | UAV | PCB Design |
                       # Computer Vision | Energy | Instrumentation
tags: [Robotics, Motor Control]
---

## Overview

Markdown body goes here.
```

The full set of optional fields — `tagline`, `role`, `status`, `featured`, `order`, `cover`,
`highlights`, `stack`, `gallery`, `videos`, `downloads`, `links`, `series`, `draft` — is documented
inline in [`src/content.config.ts`](src/content.config.ts), which is also the schema that validates
them. A typo in frontmatter fails the build with a clear message rather than rendering wrong.

Copy an existing file to see the shape — [`agri-drone.md`](src/content/projects/agri-drone.md) uses
nearly every field.

### Images and video

Put images in `public/images/<slug>/` and reference them by absolute path:

```yaml
cover: /images/my-project/hero.jpg
gallery:
  - { src: /images/my-project/board.jpg, alt: "Assembled PCB", caption: "Rev B", span: wide }
```

`span` is `normal`, `wide` (two columns) or `tall` (two rows). Without a `cover`, a generated
placeholder is rendered — nothing looks broken before you have photos.

Video supports self-hosted MP4, YouTube and Vimeo. Embeds are click-to-load, so no third-party
request is made until the viewer presses play:

```yaml
videos:
  - { type: mp4,     src: /videos/test.mp4, title: "Field test", poster: /images/my-project/still.jpg }
  - { type: youtube, src: dQw4w9WgXcQ,      title: "Flight log" }
```

Paste either a bare ID or a full share URL — both are handled.

### Hiding a work in progress

Set `draft: true`. It stays visible in `npm run dev` and is excluded from production builds.
[`subass.md`](src/content/projects/subass.md) is a template stub set up this way.

## Editing the rest of the site

Content that isn't a project lives in plain TypeScript files, so there's no CMS to learn:

| File | Controls |
| --- | --- |
| [`src/data/site.ts`](src/data/site.ts) | Name, role, email, social links, nav, hero stats |
| [`src/data/skills.ts`](src/data/skills.ts) | Skill domains and the tool marquee |
| [`src/data/timeline.ts`](src/data/timeline.ts) | The engineering-journey timeline |
| [`src/styles/global.css`](src/styles/global.css) | Design tokens — colour, type, spacing, motion |

### Before going live

- [ ] Replace `public/resume.pdf` — it is currently a labelled placeholder
- [ ] Set the real `email`, GitHub and LinkedIn URLs in `src/data/site.ts`
- [ ] Set your real domain in `site:` in `astro.config.mjs` (used for canonical URLs and sitemap)
- [ ] Run `npm run og` after changing your name or role

## Design system

Dark, neutral and restrained: near-black surfaces, hairline rules, one desaturated cyan used as a
signal rather than decoration, and typography doing the structural work. All tokens are declared in
`@theme` at the top of `src/styles/global.css` — change them there and the whole site follows.

Motion is deliberately short: a 10px reveal on scroll, and press feedback (scale plus a ripple from
the contact point) on every actionable element. Everything is disabled under
`prefers-reduced-motion`.

## Deployment

Static output, so any host works.

**Vercel** — import the repo; the Astro preset is detected automatically (`npm run build` →
`dist/`). No configuration needed.

**GitHub Pages** — for a project repo served at `/<repo>`, set `base: '/<repo>'` in
`astro.config.mjs`, then build and publish `dist/`.

## Accessibility & performance

Zero client-side framework; the only JavaScript is a few inline progressive enhancements. Skip
link, keyboard-navigable lightbox, focus-visible outlines, semantic landmarks and reduced-motion
support are built in. Wide tables and code blocks scroll within themselves so the page never
scrolls sideways.
