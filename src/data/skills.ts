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
    key: 'embedded',
    title: 'Embedded Systems',
    icon: 'chip',
    blurb: 'Bare-metal to RTOS-adjacent firmware on eight-bit AVRs through Jetson-class compute.',
    items: [
      'ESP32',
      'STM32',
      'SAMD21',
      'ATmega / bare-metal AVR',
      'Arduino',
      'TI C2000 LaunchPad',
      'Jetson Nano',
      'Jetson Orin Nano',
    ],
  },
  {
    key: 'pcb',
    title: 'PCB Design',
    icon: 'board',
    blurb: 'Schematic capture through fabrication-ready layout, with a bias toward high-current and compact form factors.',
    items: [
      'KiCad',
      'Cadence Allegro',
      'High-current layout',
      'Schematic design',
      'Power distribution',
      'Battery management',
      'Signal integrity',
      'DFM / assembly prep',
    ],
  },
  {
    key: 'micro',
    title: 'Microcontrollers',
    icon: 'cpu',
    blurb: 'Register-level control of peripherals — timers, ADCs, SPI, I²C, UART, PWM and interrupt architecture.',
    items: [
      'Register-level programming',
      'Timers & capture units',
      'SPI / I²C / UART',
      'ADC & DAC',
      'PWM generation',
      'Interrupt design',
      'Low-power modes',
    ],
  },
  {
    key: 'vision',
    title: 'Computer Vision',
    icon: 'eye',
    blurb: 'Image pipelines for field data — from raw aerial capture to crop-health inference.',
    items: [
      'OpenCV',
      'Image processing',
      'Orthomosaic generation',
      'Crop health analysis',
      'Thermal imaging',
      'Geotagging',
      'AI integration',
    ],
  },
  {
    key: 'robotics',
    title: 'Robotics',
    icon: 'robot',
    blurb: 'Ground platforms: drivetrain, sensing, power architecture and the firmware that ties them together.',
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
    key: 'control',
    title: 'Control Systems',
    icon: 'wave',
    blurb: 'Closed-loop design, tuning and stability work on both mechanical and power-stage plants.',
    items: [
      'Closed-loop control',
      'PID tuning',
      'Feedback sensing',
      'Flight tuning',
      'Trajectory following',
      'MATLAB modelling',
    ],
  },
  {
    key: 'programming',
    title: 'Programming',
    icon: 'code',
    blurb: 'Firmware in C/C++, tooling and analysis in Python, modelling in MATLAB.',
    items: ['C', 'C++', 'Embedded C', 'Python', 'MATLAB'],
  },
  {
    key: 'cad',
    title: 'CAD & Mechanical',
    icon: 'cube',
    blurb: 'Enclosure design, packaging efficiency and print-ready mechanical iteration.',
    items: [
      'Enclosure design',
      '3D printing / DFM',
      'Packaging optimisation',
      'Tolerance & fit',
      'Assembly design',
    ],
  },
  {
    key: 'wireless',
    title: 'Wireless Communication',
    icon: 'signal',
    blurb: 'Links that have to survive the field — telemetry, control and video.',
    items: ['Wi-Fi (ESP32)', 'MAVLink telemetry', 'RC / PPM & SBUS', 'FPV video links', 'Bluetooth'],
  },
  {
    key: 'power',
    title: 'Power Electronics',
    icon: 'bolt',
    blurb: 'From cell chemistry and BMS through regulation, distribution and thermal budgeting.',
    items: [
      'Li-ion / LiPo systems',
      'BMS design',
      'Buck / boost regulation',
      'High-current distribution',
      'Charging circuits (TP4056)',
      'Power budgeting',
    ],
  },
];

/** Marquee strip of tool names on the home page */
export const toolStrip = [
  'ESP32', 'STM32', 'ATmega', 'SAMD21', 'Jetson Orin', 'Pixhawk', 'ArduPilot', 'MAVLink',
  'KiCad', 'Cadence Allegro', 'OpenCV', 'Python', 'Embedded C', 'C++', 'MATLAB',
  'Mission Planner', 'TI C2000', 'TP4056', 'BLHeli', 'FreeCAD',
];
