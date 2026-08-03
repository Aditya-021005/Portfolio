/**
 * ENGINEERING JOURNEY — rendered by components/Timeline.astro
 * Newest first. `kind` drives the icon + accent colour.
 */

export type TimelineKind =
  | 'leadership'
  | 'project'
  | 'internship'
  | 'competition'
  | 'achievement'
  | 'education';

export type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  kind: TimelineKind;
  detail: string;
  points?: string[];
  /** link to a project page, e.g. '/projects/agri-drone' */
  href?: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: '2025 — Present',
    title: 'Precision Agricultural Drone & Mapping GUI',
    org: 'Independent',
    kind: 'project',
    detail:
      'Designed, built and tuned a 650mm autonomous multirotor for field surveying, alongside a custom ground-station GUI for telemetry, mission control and logging.',
    points: [
      'Thrust, payload and power budgeting from first principles',
      'Full ArduPilot configuration: flight modes, calibration, failsafes',
      'Live telemetry dashboard with waypoint visualisation and FPV feed',
    ],
    href: '/projects/agri-drone',
  },
  {
    period: '2025',
    title: 'Electrical Subsystem Lead',
    org: 'CRISS Robotics',
    kind: 'leadership',
    detail:
      'Owned the electrical architecture of a large multidisciplinary rover programme — battery systems, power distribution, PCB reviews, integration and test.',
    points: [
      'Specified and validated the battery management and power distribution architecture',
      'Ran schematic and layout reviews for every board on the platform',
      'Mentored junior members and authored the subsystem documentation',
    ],
    href: '/projects/criss-rover',
  },
  {
    period: '2025',
    title: 'President',
    org: 'Renewable Energy Club',
    kind: 'leadership',
    detail:
      'Led club operations, ran technical workshops and events, coordinated student build teams and drove sustainable-engineering initiatives on campus.',
  },
  {
    period: '2024 — 2025',
    title: 'Handheld Gaming Console — Generation III',
    org: 'Personal R&D',
    kind: 'project',
    detail:
      'Third hardware revision: colour TFT, rotary-encoder navigation and a rebuilt embedded UI layer over SPI graphics.',
    href: '/projects/gaming-console-v3',
  },
  {
    period: '2024',
    title: 'Turbidity Measurement System',
    org: 'IGCAR',
    kind: 'internship',
    detail:
      'Built a bare-metal AVR instrument for fluid turbidity: custom PCB, TSL235R light-to-frequency front end, precision LED emitter and calibrated frequency-measurement firmware.',
    points: [
      'Register-level ATmega firmware with hardware timer capture',
      'Optical path and analog front-end design for low-noise measurement',
      'Sensor calibration against reference standards',
    ],
    href: '/projects/igcar-turbidity',
  },
  {
    period: '2024',
    title: 'Freelance Hardware Engineering',
    org: 'Migraine-relief wearable',
    kind: 'project',
    detail:
      'Client-driven schematic capture and compact PCB layout for a portable medical device — tight form factor, careful placement and routing.',
    href: '/projects/migraine-pcb',
  },
  {
    period: '2023 — 2024',
    title: 'Handheld Gaming Console — Generations I & II',
    org: 'Personal R&D',
    kind: 'project',
    detail:
      'First two revisions of the console: ESP32 + OLED with haptics and original games, then a full mechanical redesign to a magnetic snap-fit enclosure with no battery bulge.',
    href: '/projects/gaming-console-v1',
  },
  {
    period: '2023',
    title: 'Auto-Rotating Solar Panel Array',
    org: 'Renewable Energy Club',
    kind: 'project',
    detail:
      'Closed-loop dual-axis sun tracker using LDR differential sensing to maximise photovoltaic yield across the day.',
    href: '/projects/solar-tracker',
  },
  {
    period: '2023',
    title: 'Mini Rover',
    org: 'Personal R&D',
    kind: 'project',
    detail:
      'Compact Wi-Fi controlled differential-drive rover built as a reusable platform for wireless-control and motor-control experiments.',
    href: '/projects/mini-rover',
  },
];
