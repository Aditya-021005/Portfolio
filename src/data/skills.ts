/**
 * SKILLS — rendered as the interactive grid on /about and the home page.
 * `icon` must match a key in src/components/Icon.astro.
 */

export type SkillDomain = {
  key: string;
  title: string;
  icon: string;
  blurb: string;
  items: string[];
};

export const skillDomains: SkillDomain[] = [
  {
    key: 'power',
    title: 'Power Electronics',
    icon: 'bolt',
    blurb:
      'Inverter hardware debugging and closed-loop motor control, through to battery systems and high-current distribution.',
    items: [
      'Inverter hardware debugging & testing',
      'Field-Oriented Control (FOC)',
      '3-phase BLDC / PMSM motor control',
      'Li-ion / LiPo battery systems',
      'BMS design',
      'Buck / boost regulation',
      'High-current distribution',
      'Power budgeting',
    ],
  },
  {
    key: 'pcb',
    title: 'PCB Design & EDA',
    icon: 'board',
    blurb:
      'Schematic capture through fabrication-ready layout, with a bias toward high-current and compact form factors.',
    items: [
      'Altium Designer',
      'KiCad',
      'Schematic design',
      'Power distribution',
      'Signal integrity',
      'Hardware bring-up & debug',
      
    ],
  },
  {
    key: 'robotics',
    title: 'Robotics',
    icon: 'robot',
    blurb:
      'Ground and aerial platforms: drivetrain, sensing, power architecture and the control that ties them together.',
    items: [
      'Autonomous navigation',
      'Differential drive',
      'Motor control',
      'Sensor fusion',
      'Wireless robotics',
      'Subsystem integration',
    ],
  },
  {
    key: 'sensors',
    title: 'Sensor Integration',
    icon: 'signal',
    blurb:
      'Getting real, trustworthy measurements out of hardware — interfacing, calibration and noise rejection.',
    items: [
      'Analog front-end design',
      'Optical & light-to-frequency sensing',
      'IMU / GPS / compass integration',
      'Precision frequency measurement',
      'Calibration against references',
      
    ],
  },
  {
    key: 'uav',
    title: 'UAV Systems',
    icon: 'drone',
    blurb: 'Full-stack multirotor work: sizing, build, tuning, mission planning and failsafe design.',
    items: [
      'Pixhawk',
      'ArduPilot',
      'Mission Planner',
      'MAVLink',
      'GPS navigation',
      'Telemetry',
      'Waypoint missions',
      'Failsafe configuration',
    ],
  },
  {
    key: 'programming',
    title: 'Applied Programming',
    icon: 'code',
    blurb:
      'Working knowledge of C++ and Python, used practically — including an AI-augmented rapid prototyping workflow.',
    items: [
      'C++',
      'Python',
      'AI-augmented development workflow',
      'Digital Image Processing (DIP)',
      'OpenCV',
      'MATLAB',
    ],
  },
  {
    key: 'vision',
    title: 'Computer Vision',
    icon: 'eye',
    blurb: 'Image pipelines for field data — from raw aerial capture to crop-health inference.',
    items: [
      'Digital Image Processing (DIP)',
      'OpenCV',
      'Orthomosaic generation',
      'Crop health analysis',
      'Thermal imaging',
      'Geotagging',
    ],
  },
  {
    key: 'embedded',
    title: 'Embedded Hardware',
    icon: 'chip',
    blurb:
      'Controller-level work across eight-bit AVRs through Jetson-class compute, close to the peripherals.',
    items: [
      'ESP32',
      'ATmega / bare-metal AVR',
      'Arduino',
    ],
  },
  {
    key: 'control',
    title: 'Control Systems',
    icon: 'wave',
    blurb: 'Closed-loop design, tuning and stability work on both mechanical and power-stage plants.',
    items: [
      'Closed-loop control',
      'PID tuning',
      'Field-Oriented Control',
      'Feedback sensing',
      'Flight tuning',
    ],
  },
  {
    key: 'cad',
    title: 'CAD & Mechanical',
    icon: 'cube',
    blurb:
      'Basic 3D modelling and component enclosures, sized for the electronics rather than the other way round.',
    items: [
      'Autodesk Fusion 360',
      'Component enclosure layout',
      '3D printing',
      'Tolerance & fit',
    ],
  },
  {
    key: 'wireless',
    title: 'Wireless Communication',
    icon: 'signal',
    blurb: 'Links that have to survive the field — telemetry, control and video.',
    items: ['Wi-Fi (ESP32)', 'MAVLink telemetry', 'RC / PPM & SBUS', 'FPV video links', 'Bluetooth'],
  },
];

/** Marquee strip of tool names on the home page */
export const toolStrip = [
  'Altium Designer', 'KiCad', 'Fusion 360', 'FOC', 'BLDC', 'Inverter debug',
  'ESP32', 'ATmega', 'Pixhawk', 'ArduPilot', 'MAVLink',
   'Python', 'Arduino', 'MATLAB', 'Mission Planner', 'Digital Image Processing'
];
