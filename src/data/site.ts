/**
 * SITE CONFIG — edit everything about "you" from this one file.
 */

export const site = {
  name: 'Achyuthan Raghavan',
  shortName: 'Achyuthan',
  initials: 'AR',
  role: 'Robotics & Hardware Systems Engineer',
  tagline:
    'Engineering integrated hardware and robotic systems — from power electronics and PCB design to mechanical integration.',
  description:
    'Developing integrated electronics, power systems and physical hardware for autonomous robotic applications. Focused on practical motor control, sensor integration and rapid hardware prototyping.',
  location: 'India',
  url: 'https://achyuthan-portfolio.vercel.app',
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
  { label: 'Contact', href: '/contact' },
];

/** Short factual strip under the hero */
export const heroStats = [
  { value: '10+', label: 'Hardware systems built' },
  { value: '3', label: 'Console generations shipped' },
  { value: '650mm', label: 'Autonomous UAV platform' },
  { value: '2', label: 'Advisory positions' },
];
