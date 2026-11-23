// Central place for site copy and images. Edit text here and every page updates.
//
// IMAGES: every picture on the site is listed in this file (look for `image:`).
// To use your own photo, drop it into /public/images (e.g. /public/images/my-meter.jpg)
// and change the path here. Or simply overwrite the existing file with the same name.

export const company = {
  name: 'CT Integrated Technologies',
  short: 'CTIT',
  email: 'cttechnologiesltd@gmail.com',
  location: 'Nigeria',
  tagline: 'Where hardware meets software.',
  description:
    'An engineering company that designs custom embedded systems and connects them to the apps, web platforms and electrical infrastructure they need to work in the real world.',
};

export const vision =
  'To be a leading tech company in Africa that leverages cutting-edge technologies to deliver immediate solutions to pressing issues, while creating sustainable job opportunities for the growing global youth population.';

export const mission =
  'We are an innovative tech organization dedicated to solving emerging problems by integrating homegrown and advanced technologies, including AI, while providing a platform for job creation to empower unemployed youth.';

export const values = [
  { name: 'Accountability', text: 'Full responsibility for our decisions and results.', icon: 'target' },
  { name: 'Integrity', text: 'Honest, ethical, and transparent practices.', icon: 'shield' },
  { name: 'Collaboration', text: 'Teamwork and partnerships for impact.', icon: 'users' },
  { name: 'Humility', text: 'Openness to learning and growth.', icon: 'leaf' },
  { name: 'Transparency', text: 'Clear communication and openness in operations.', icon: 'eye' },
  { name: 'Equality', text: 'An inclusive environment with equal opportunities.', icon: 'scale' },
  { name: 'Innovation', text: 'Continuous technological advancement.', icon: 'sparkles' },
  { name: 'Excellence', text: 'Delivering top-tier results in all we do.', icon: 'award' },
];

// The "full stack" we cover, from the wall socket to the phone screen.
// domain controls the colour: hardware = orange, software = blue, power = green.
export const stack = [
  { name: 'Mobile & web apps', text: 'Interfaces people actually use', icon: 'phone', domain: 'software' },
  { name: 'Cloud & dashboards', text: 'Data, alerts and remote control', icon: 'cloud', domain: 'software' },
  { name: 'Connectivity', text: 'Wi-Fi · BLE · GSM · LoRa · MQTT', icon: 'wifi', domain: 'embedded' },
  { name: 'Firmware', text: 'C/C++ on microcontrollers', icon: 'terminal', domain: 'embedded' },
  { name: 'Electronics & sensors', text: 'Custom PCBs and measurement', icon: 'cpu', domain: 'embedded' },
  { name: 'Power & installation', text: 'Electrical, solar and wiring', icon: 'bolt', domain: 'power' },
];

// Core offering first, supporting services after.
export const services = [
  {
    slug: 'embedded',
    core: true,
    name: 'Embedded Systems & IoT',
    short: 'Embedded & IoT',
    icon: 'cpu',
    color: 'accent',
    image: '/images/embedded.svg',
    summary:
      'Our core. We design custom electronic devices end-to-end: circuit, PCB, firmware and connectivity, from first prototype to working units in the field.',
    items: [
      { title: 'Custom electronics & PCB design', text: 'Schematics, layout and assembly for purpose-built devices.' },
      { title: 'Firmware development', text: 'Reliable C/C++ firmware for ESP32, STM32, AVR and more.' },
      { title: 'Sensors & data acquisition', text: 'Measuring voltage, current, temperature, moisture and more.' },
      { title: 'IoT connectivity', text: 'Wi-Fi, Bluetooth, GSM and LoRa links to the cloud.' },
      { title: 'Smart metering & energy monitoring', text: 'Measure, meter and protect power usage.' },
      { title: 'Prototyping to production', text: 'From breadboard proof-of-concept to small-batch builds.' },
    ],
  },
  {
    slug: 'software',
    name: 'Web & Mobile Development',
    short: 'Software',
    icon: 'code',
    color: 'brand',
    image: '/images/software.svg',
    summary:
      'Apps and platforms that put devices — and businesses — in people’s hands. Built by a team that understands the hardware underneath.',
    items: [
      { title: 'Mobile apps', text: 'Android and iOS apps, including device companion apps over BLE/Wi-Fi.' },
      { title: 'Websites & web platforms', text: 'Fast, modern websites and custom web applications.' },
      { title: 'IoT dashboards', text: 'Real-time monitoring, alerts and remote control for your devices.' },
      { title: 'APIs & integrations', text: 'Connecting devices, payments and third-party services.' },
    ],
  },
  {
    slug: 'engineering',
    name: 'Electrical Engineering Projects',
    short: 'Engineering',
    icon: 'bolt',
    color: 'leaf',
    image: '/images/engineering.svg',
    summary:
      'Hands-on electrical work done to standard — the physical foundation every smart system depends on.',
    items: [
      { title: 'Electrical installations', text: 'Residential, commercial and industrial wiring.' },
      { title: 'Solar PV systems', text: 'Design, installation and maintenance of solar power.' },
      { title: 'CCTV & security systems', text: 'Camera installation, recording and remote viewing.' },
      { title: 'Networking', text: 'Structured cabling and network setup.' },
      { title: 'Maintenance & troubleshooting', text: 'Diagnostics and repair for systems and equipment.' },
    ],
  },
  {
    slug: 'training',
    name: 'Training & Mentorship',
    short: 'Training',
    icon: 'cap',
    color: 'brand',
    image: '/images/training.svg',
    summary:
      'Practical, project-based training that turns young people into engineers — and grows the talent our industry needs.',
    items: [
      { title: 'Embedded systems & microcontrollers', text: 'Electronics, C programming and real hardware.' },
      { title: 'IoT development', text: 'Sensors, connectivity and cloud dashboards.' },
      { title: 'Solar & electrical installation', text: 'Safe, standard installation practice.' },
      { title: 'Web & mobile development', text: 'Build and ship real apps.' },
    ],
  },
];

// Example projects. Replace these with your real projects and photos.
export const projects = [
  {
    title: 'Smart prepaid energy meter',
    category: 'Embedded',
    image: '/images/projects/smart-meter.svg',
    text: 'Custom metering board with tamper detection, firmware and a Bluetooth companion app for top-ups and usage tracking.',
    tags: ['PCB design', 'Firmware', 'Mobile app'],
  },
  {
    title: 'Solar system monitor',
    category: 'Embedded',
    image: '/images/projects/solar-monitor.svg',
    text: 'A plug-in monitor that reports panel output, battery health and inverter status to a live dashboard.',
    tags: ['Sensors', 'IoT', 'Solar PV'],
  },
  {
    title: 'Smart farm sensor node',
    category: 'Embedded',
    image: '/images/projects/farm-sensor.svg',
    text: 'Solar-powered soil-moisture node that talks over LoRa and switches drip irrigation automatically.',
    tags: ['LoRa', 'Low power', 'Automation'],
  },
  {
    title: 'Home automation controller',
    category: 'Embedded',
    image: '/images/projects/home-automation.svg',
    text: 'In-wall controller that lets owners switch lights and appliances from their phone, with schedules and energy data.',
    tags: ['ESP32', 'Mobile app', 'Installation'],
  },
  {
    title: 'IoT monitoring platform',
    category: 'Software',
    image: '/images/projects/iot-platform.svg',
    text: 'A web platform that brings every connected device onto one map with charts, alerts and remote control.',
    tags: ['Web app', 'Cloud', 'Dashboards'],
  },
  {
    title: 'Solar PV & electrical installation',
    category: 'Engineering',
    image: '/images/engineering.svg',
    text: 'Load assessment, system sizing, panel, inverter and battery installation, with full building wiring and protection.',
    tags: ['Solar PV', 'Electrical', 'Maintenance'],
  },
  {
    title: 'CCTV & security installation',
    category: 'Engineering',
    image: '/images/projects/cctv-security.svg',
    text: 'Multi-camera surveillance with recording, remote phone viewing and a clean, protected cable installation.',
    tags: ['CCTV', 'Networking', 'Electrical'],
  },
];

export const industries = [
  { name: 'Energy & utilities', icon: 'bolt' },
  { name: 'Agriculture', icon: 'leaf' },
  { name: 'Homes & buildings', icon: 'home' },
  { name: 'Security', icon: 'camera' },
  { name: 'Health', icon: 'heart' },
  { name: 'Education', icon: 'cap' },
];

// Tools shown in the scrolling strip on the home page — edit to match what you use.
// domain sets the dot colour: software = blue, embedded = orange, power = green.
// They are listed mixed on purpose so the colours alternate as the strip scrolls.
export const tools = [
  { name: 'React', domain: 'software' },
  { name: 'ESP32', domain: 'embedded' },
  { name: 'Flutter', domain: 'software' },
  { name: 'STM32', domain: 'embedded' },
  { name: 'Solar PV', domain: 'power' },
  { name: 'Next.js', domain: 'software' },
  { name: 'Arduino', domain: 'embedded' },
  { name: 'Node.js', domain: 'software' },
  { name: 'KiCad', domain: 'embedded' },
  { name: 'Python', domain: 'software' },
  { name: 'C / C++', domain: 'embedded' },
  { name: 'Firebase', domain: 'software' },
  { name: 'Raspberry Pi', domain: 'embedded' },
  { name: 'MQTT', domain: 'embedded' },
  { name: 'FreeRTOS', domain: 'embedded' },
  { name: 'LoRa', domain: 'embedded' },
  { name: 'Bluetooth LE', domain: 'embedded' },
  { name: 'MicroPython', domain: 'embedded' },
];
export const training = {
  image: '/images/training.svg',
  tracks: [
    {
      title: 'Embedded Systems Foundations',
      icon: 'cpu',
      text: 'Electronics basics, microcontrollers, C programming, sensors and actuators — on real boards.',
      topics: ['Circuits & components', 'Microcontroller programming', 'Sensors & actuators', 'Final hardware project'],
    },
    {
      title: 'IoT & Connected Devices',
      icon: 'wifi',
      text: 'Take devices online: Wi-Fi, Bluetooth, MQTT, cloud dashboards and mobile control.',
      topics: ['Wi-Fi & BLE', 'MQTT & cloud', 'Dashboards', 'Device + app project'],
    },
    {
      title: 'Solar & Electrical Installation',
      icon: 'sun',
      text: 'Hands-on installation practice for solar PV and building wiring, with a strong focus on safety.',
      topics: ['Load assessment', 'PV sizing & design', 'Wiring & protection', 'Site installation'],
    },
    {
      title: 'Web & Mobile Development',
      icon: 'code',
      text: 'Build and ship modern websites and mobile apps from scratch.',
      topics: ['HTML, CSS & JavaScript', 'React / Next.js', 'Mobile apps', 'Portfolio project'],
    },
  ],
  audiences: [
    { title: 'Students', text: 'Hands-on skills and final-year project support.', icon: 'cap' },
    { title: 'Graduates & job seekers', text: 'Job-ready skills and a portfolio that proves them.', icon: 'target' },
    { title: 'Technicians', text: 'Upskill from installation into smart systems.', icon: 'wrench' },
    { title: 'Organisations', text: 'Custom training for your team.', icon: 'users' },
  ],
};
