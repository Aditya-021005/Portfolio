/**
 * SITE CONFIG — edit everything about "you" from this one file.
 */

export const site = {
  name: 'Achyuthan Raghavan',
  shortName: 'Achyuthan',
  initials: 'AR',
  role: 'Electronics & Robotics Engineer',
  tagline: 'I build complete engineering systems — silicon to airframe.',
  description:
    'Electronics and Robotics Engineer working across embedded systems, autonomous robotics, UAVs, high-current PCB design and AI-assisted computer vision.',
  location: 'India',
  url: 'https://achyuthanraghavan.com',
  email: 'achyuthan.raghavan@example.com',
  resume: '/resume.pdf',
  ogImage: '/og.png',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/your-handle', icon: 'github' as const },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle', icon: 'linkedin' as const },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' as const },
];

export const nav = [
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Journey', href: '/about#timeline' },
  { label: 'Contact', href: '/contact' },
];

/** Rotating words in the hero headline */
export const heroRotation = [
  'embedded systems',
  'autonomous rovers',
  'agricultural UAVs',
  'high-current PCBs',
  'computer vision',
  'handheld hardware',
];

/** Short factual strip under the hero */
export const heroStats = [
  { value: '10+', label: 'Systems built end-to-end' },
  { value: '3', label: 'Hardware generations shipped' },
  { value: '650mm', label: 'Autonomous UAV platform' },
  { value: '2', label: 'Leadership positions' },
];
