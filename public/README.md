# public/

Static files served from the site root.

## Drop-in slots

| Path | Used by | Notes |
| --- | --- | --- |
| `resume.pdf` | Nav, hero, about, contact, footer | **Replace the placeholder** with your real résumé. |
| `og.png` | Social preview cards | 1200×630. Regenerate with `npm run og`. |
| `favicon.svg` | Browser tab | Already set up. |
| `images/<project-slug>/` | Project covers and galleries | See below. |
| `videos/` | Self-hosted MP4s | Referenced as `/videos/clip.mp4`. |

## Project images

Create a folder named after the project's filename (its URL slug):

    public/images/agri-drone/hero.jpg
    public/images/agri-drone/frame.jpg

Then reference them in `src/content/projects/agri-drone.md`:

    cover: /images/agri-drone/hero.jpg
    gallery:
      - { src: /images/agri-drone/frame.jpg, alt: "Assembled 650mm frame", caption: "Arms folded", span: wide }

`span` is one of `normal`, `wide` (two columns) or `tall` (two rows).

Until a `cover` is set, the site renders a generated placeholder — nothing looks broken.
