import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All published projects, sorted by `order` then title. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getFeatured(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.featured);
}

/** Category list in a stable, human order — only those actually in use. */
export function categoriesOf(projects: Project[]): string[] {
  const ORDER = [
    'Embedded Systems',
    'Robotics',
    'UAV',
    'PCB Design',
    'Computer Vision',
    'Energy',
    'Instrumentation',
  ];
  const used = new Set(projects.map((p) => p.data.category));
  return ORDER.filter((c) => used.has(c as Project['data']['category']));
}

/** Previous/next in display order, wrapping around. */
export function siblings(projects: Project[], id: string) {
  const i = projects.findIndex((p) => p.id === id);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

/** Other entries belonging to the same series, ordered by part. */
export function seriesOf(projects: Project[], project: Project): Project[] {
  const name = project.data.series?.name;
  if (!name) return [];
  return projects
    .filter((p) => p.data.series?.name === name)
    .sort((a, b) => (a.data.series?.part ?? 0) - (b.data.series?.part ?? 0));
}

/** Deterministic hue from a slug — drives the generated cover gradients. */
export function hueFor(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) % 360;
  // Bias into the cyan → blue → violet arc so covers stay on-brand.
  return 170 + (h % 90);
}

/** Icon key per category, used on cards and generated covers. */
export const categoryIcon: Record<string, string> = {
  'Embedded Systems': 'chip',
  Robotics: 'robot',
  UAV: 'drone',
  'PCB Design': 'board',
  'Computer Vision': 'eye',
  Energy: 'bolt',
  Instrumentation: 'wave',
};
