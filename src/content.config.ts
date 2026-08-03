import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * PROJECTS COLLECTION
 * -------------------
 * Add a new project by dropping a `.md` (or `.mdx`) file into
 * `src/content/projects/`. The filename becomes the URL slug:
 *
 *   src/content/projects/agri-drone.md  ->  /projects/agri-drone
 *
 * Images live in `public/images/<slug>/` and are referenced as
 * `/images/<slug>/photo.jpg`.
 *
 * Everything below is optional except: title, summary, year, tags.
 */

const media = z.object({
  src: z.string(),
  alt: z.string().default(''),
  caption: z.string().optional(),
  /** 'wide' spans two columns in the gallery grid, 'tall' spans two rows */
  span: z.enum(['normal', 'wide', 'tall']).default('normal'),
});

const video = z.object({
  /** mp4 = self-hosted file in /public, youtube/vimeo = just paste the ID or URL */
  type: z.enum(['mp4', 'youtube', 'vimeo']),
  src: z.string(),
  title: z.string().default('Project video'),
  poster: z.string().optional(),
});

const link = z.object({
  label: z.string(),
  href: z.string(),
  /** lucide-ish key used to pick an icon; see LinkIcon.astro */
  icon: z.enum(['github', 'external', 'pdf', 'file', 'video', 'code']).default('external'),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Short punchy line under the title on the project hero */
    tagline: z.string().default(''),
    /** 1–2 sentences used on cards, meta tags and the projects index */
    summary: z.string(),
    /** e.g. "2024" or "2023 — 2024" */
    year: z.string(),
    /** Your role on the project */
    role: z.string().default(''),
    status: z.enum(['Shipped', 'In Progress', 'Prototype', 'Concept', 'Archived']).default('Shipped'),
    /** Grouping used by the filter bar on /projects */
    category: z.enum([
      'Embedded Systems',
      'Robotics',
      'UAV',
      'PCB Design',
      'Computer Vision',
      'Energy',
      'Instrumentation',
    ]),
    tags: z.array(z.string()).default([]),

    /** Featured projects get the large treatment on the home page */
    featured: z.boolean().default(false),
    /** Lower numbers sort first across the site */
    order: z.number().default(99),
    /** Hide from listings without deleting the file */
    draft: z.boolean().default(false),

    /** Card + hero image. Falls back to a generated gradient if omitted. */
    cover: z.string().optional(),
    /** Optional per-project accent (hex). Defaults to the site cyan. */
    accent: z.string().optional(),

    /** Series grouping — e.g. the three gaming console generations */
    series: z
      .object({
        name: z.string(),
        part: z.number(),
      })
      .optional(),

    /** Big numbers rendered as a stat strip under the hero */
    highlights: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),

    /** Rendered as the "Technologies Used" grid */
    stack: z
      .object({
        hardware: z.array(z.string()).default([]),
        software: z.array(z.string()).default([]),
        tools: z.array(z.string()).default([]),
      })
      .default({ hardware: [], software: [], tools: [] }),

    gallery: z.array(media).default([]),
    videos: z.array(video).default([]),
    downloads: z.array(link).default([]),
    links: z.array(link).default([]),
  }),
});

export const collections = { projects };
