/**
 * BEST TECHNOLOGY IT SOLUTION
 * Official Content from Brochure & Visual Banners Catalog
 */

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  items: string[];
  summary: string;
  hardwareItems: string[];
  specs?: { label: string; value: string }[];
  applications?: string[];
}

export type SolutionItem = ServiceItem;

export interface CameraProduct {
  id: string;
  name: string;
  model: string;
  category: 'Dome' | 'Bullet' | 'PTZ' | 'Thermal' | 'ANPR' | 'Solar 4G' | 'Explosion-Proof' | 'Fisheye';
  image: string;
  tagline: string;
  overview: string;
  resolution: string;
  sensor: string;
  lensFov: string;
  nightVision: string;
  compression: string;
  aiFeatures: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  keyHighlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
}

export const COMPANY = {
  name: 'Best Technology',
  shortName: 'Best Technology',
  tagline: 'Your Trusted Security Partner',
  slogan: 'Integrated Electronic Security Solutions — Experience security without compromise.',
  vision: 'To deliver intelligent, tailor-made electronic security and smart infrastructure systems that safeguard businesses, institutions, and communities with zero compromise.',
  mission: 'To engineer robust security ecosystems built upon thorough risk analysis, turnkey engineering documentation, rapid 4-hour SLA response, and certified long-term maintenance.',
  phone: '+91-8675248969',
  phoneRaw: '+918675248969',
  email: 'sales@besttechnologys.com',
  instagram: '@best_tech_4u',
  instagramUrl: 'https://www.instagram.com/best_tech_4u/',
  mapUrl: 'https://share.google/Ewg1Jd66W5yKnZFpe',
  address: 'Shop No 1, 78, Gokul Nagar, Hosur, Tamil Nadu 635109',
  addressLine1: 'Shop No 1, 78, Gokul Nagar',
  addressLine2: 'Hosur, Tamil Nadu 635109',
  addressCity: 'Hosur',
  addressState: 'Tamil Nadu',
  addressPincode: '635109',
  whatsappUrl: 'https://wa.me/918675248969',
  logoUrl: '/logo.png',
  experience: '5+ Years of Dedicated Security Excellence',

  aboutText: [
    'Best technology offers Integrated Electronic Security Solutions to various market segments in private as well as Government space. Best technology plans to offer a first in the market, combining Electronic Security Solutions with Professional Integration Services.',
    'Best technology offers quality solutions in the areas of Video Surveillance Systems, Access Control, Fire & Safety, Body, Baggage & Vehicle Scanners, Intrusion Detection & Alarm Solutions, Perimeter Security, Gate Control & Automation, RFID, and UHF based sensors.',
    'With more than 5 years of experience in electronic security and dedication to quality has gone into creating the most innovative range of products to deliver total door to cloud security solutions.',
    'We pay rigorous attention to solutions that protect as intended, yet are scalable to meet future needs. Best technology understands the risks you face and eliminates with our expertized solutions.',
  ],

  coreStrengths: [
    {
      id: '01',
      title: 'Tailor Made Solutions',
      desc: 'Customized as per specific site floorplan, risk profile, and operational requirement.',
      icon: 'tailor',
    },
    {
      id: '02',
      title: 'Risk & Threat Analysis',
      desc: 'Comprehensive blind-spot analysis and security perimeter gap assessment.',
      icon: 'shield',
    },
    {
      id: '03',
      title: 'Design and Documentation',
      desc: 'Engineering schematics, cable pathway maps, and bandwidth calculations.',
      icon: 'doc',
    },
    {
      id: '04',
      title: 'Installation & Project Completion',
      desc: 'Certified field installation, rigorous testing, and project completion reports.',
      icon: 'check',
    },
  ],

  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '500+', label: 'Sites Secured' },
    { value: '14+', label: 'Core Services' },
    { value: '4-Hr', label: 'Rapid SLA Support' },
  ],
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    slug: 'ip-ahd-surveillance',
    title: 'IP / AHD Surveillance Solutions',
    category: 'Video Surveillance',
    tagline: 'High-Definition 24/7 Visual Security for Every Facility',
    image: '/images/cctv-bullet.png',
    summary: 'High-definition AHD, IP, and wireless surveillance cameras with intelligent face recognition and remote monitoring.',
    items: [
      'AHD Cameras',
      'IP Cameras',
      'Wireless Cameras',
      'Face Recognition Cameras',
      'Long Range Wireless Cameras',
    ],
    hardwareItems: [
      'AHD Cameras',
      'IP Cameras',
      'Wireless Cameras',
      'Face Recognition Cameras',
      'Long Range Wireless Cameras',
    ],
    applications: ['Commercial Buildings', 'Manufacturing Plants', 'Retail Showrooms', 'Warehouses'],
    specs: [
      { label: 'Resolution', value: '2MP / 4MP / 8MP 4K Ultra HD' },
      { label: 'Connectivity', value: 'PoE IP / Coaxial AHD / Dual-band WiFi' },
      { label: 'Storage', value: 'NVR / Hybrid DVR / Cloud Backup' },
    ],
  },
  {
    id: 2,
    slug: 'special-cameras',
    title: 'Special Cameras',
    category: 'Special Surveillance',
    tagline: 'Advanced ANPR, Thermal, Solar & 360° Vision Cameras',
    image: '/images/cctv-ptz.png',
    summary: 'Specialized deep-learning cameras including high-speed vehicle license plate recognition, thermal heat mapping, and solar-powered off-grid units.',
    items: [
      'Automatic Number Plate Recognition Cameras',
      'Thermal Cameras',
      'Solar Cameras',
      'Fire Detection Cameras',
      'People Counting Cameras',
      'AI Enabled Cameras',
      'Perimeter Protection Cameras',
      '360° View Cameras',
    ],
    hardwareItems: [
      'Automatic Number Plate Recognition Cameras',
      'Thermal Cameras',
      'Solar Cameras',
      'Fire Detection Cameras',
      'People Counting Cameras',
      'AI Enabled Cameras',
      'Perimeter Protection Cameras',
      '360° View Cameras',
    ],
    applications: ['Gated Communities', 'Toll Plazas', 'Solar Farms', 'Industrial Yards', 'Large Foyers'],
    specs: [
      { label: 'ANPR Capture Speed', value: 'Up to 120 km/h with 99% accuracy' },
      { label: 'Thermal Sensor', value: 'Uncooled VOx microbolometer (-20°C to 550°C)' },
      { label: 'Solar Power', value: 'Independent 4G LTE with 60W solar battery unit' },
    ],
  },
  {
    id: 3,
    slug: 'time-attendance-access',
    title: 'Time & Attendance — Access Control',
    category: 'Biometrics & HR',
    tagline: 'Touchless 3D Face ID, Fingerprint, Iris & Vein Verification',
    image: '/images/biometric-terminal.webp',
    summary: 'Multi-biometric verification systems combining instant 3D face recognition, fingerprint sensors, iris scans, and seamless payroll ERP integration.',
    items: [
      'Fingerprint Machines',
      'Face ID Machines',
      'RFID Machines',
      'Vein ID Machines',
      'Iris ID Machines',
      'Temperature Recognition Biometrics',
    ],
    hardwareItems: [
      'Fingerprint Machines',
      'Face ID Machines',
      'RFID Machines',
      'Vein ID Machines',
      'Iris ID Machines',
      'Temperature Recognition Biometrics',
    ],
    applications: ['Corporate Offices', 'Factories & Mills', 'Educational Institutions', 'Hospitals'],
    specs: [
      { label: 'Recognition Speed', value: '< 0.2 seconds per user' },
      { label: 'Capacity', value: 'Up to 50,000 faces / 100,000 logs' },
      { label: 'ERP Sync', value: 'Real-time API sync with Tally, SAP, Zoho & Excel' },
    ],
  },
  {
    id: 4,
    slug: 'access-control',
    title: 'Access Control',
    category: 'Physical Security',
    tagline: 'Single/Multi Door Controllers, Smart Locks & Safes',
    image: '/images/rfid-uhf-system.webp',
    summary: 'End-to-end access restriction systems with multi-door controllers, electromagnetic locks, elevator access management, and secure smart safes.',
    items: [
      'Single Door Controller',
      'Multi Door Controller',
      'Elevator Controller',
      'Fingerprint Lock',
      'Hotel Lock',
      'EM Locks',
      'Hand held Scanners',
      'Hand held Scanners – Safes – Manual / Biometric',
    ],
    hardwareItems: [
      'Single Door Controller',
      'Multi Door Controller',
      'Elevator Controller',
      'Fingerprint Lock',
      'Hotel Lock',
      'EM Locks',
      'Hand held Scanners',
      'Hand held Scanners – Safes – Manual / Biometric',
    ],
    applications: ['Hotels & Resorts', 'Server Rooms', 'R&D Facilities', 'Executive Suites', 'Jewellery Stores'],
    specs: [
      { label: 'Lock Holding Force', value: '600 lbs / 1200 lbs magnetic holding force' },
      { label: 'Controllers', value: 'TCP/IP 1, 2, and 4-door network controllers' },
      { label: 'Emergency Override', value: 'Fire alarm break-glass automatic release' },
    ],
  },
  {
    id: 5,
    slug: 'entry-automation',
    title: 'Entry Automation',
    category: 'Perimeter Automation',
    tagline: 'Boom Barriers, Flap Barriers, Turnstiles & Automatic Gates',
    image: '/images/boom-barrier.webp',
    summary: 'Heavy-duty automatic gates, high-speed parking boom barriers, optical flap barriers, and pedestrian turnstiles with RFID integration.',
    items: [
      'Slide / Swing Gate Automation',
      'Customized Gate Automation',
      'Shutter Automation',
      'Boom Barriers',
      'Turnstiles',
      'Flap Barrier',
      'Parking Barrier',
      'Swing Barrier',
      'Road Blockers',
      'RFID / UHF Based Automatic Access Solutions',
    ],
    hardwareItems: [
      'Slide / Swing Gate Automation',
      'Customized Gate Automation',
      'Shutter Automation',
      'Boom Barriers',
      'Turnstiles',
      'Flap Barrier',
      'Parking Barrier',
      'Swing Barrier',
      'Road Blockers',
      'RFID / UHF Based Automatic Access Solutions',
    ],
    applications: ['Tech Parks', 'Apartment Communities', 'Logistics Hubs', 'Government Complexes'],
    specs: [
      { label: 'Boom Arm Length', value: '3m to 6m telescopic / articulated arms' },
      { label: 'Cycle Speed', value: '0.8s to 3.0s high-speed DC brushless motor' },
      { label: 'Safety', value: 'Infrared anti-crush loop detector + rubber bumper' },
    ],
  },
  {
    id: 6,
    slug: 'fire-intrusion-detection',
    title: 'Fire & Intrusion Detection',
    category: 'Life Safety & Alarms',
    tagline: 'Smoke & Fire Detectors, Perimeter Beam Alarms & Guard Patrol',
    image: '/images/smoke-detector.webp',
    summary: 'Certified addressable and wireless fire alarm setups paired with active infrared beam perimeter tripwires and digital guard patrol verification.',
    items: [
      'Wired / Wireless Fire Alarm System',
      'Smoke and Fire Detectors',
      'Perimeter Protection',
      'Guard Protectors Intrusion Detection',
      'Guard Patrol Systems',
    ],
    hardwareItems: [
      'Wired / Wireless Fire Alarm System',
      'Smoke and Fire Detectors',
      'Perimeter Protection',
      'Guard Protectors Intrusion Detection',
      'Guard Patrol Systems',
    ],
    applications: ['Warehouses', 'Chemical Factories', 'Commercial Complexes', 'Boundary Walls'],
    specs: [
      { label: 'Detection System', value: 'Addressable Multi-Sensor (Optical + Heat)' },
      { label: 'Perimeter Range', value: 'Dual/Quad active IR beams up to 100m' },
      { label: 'Alerting', value: 'GSM Auto-dialer to local emergency services & SMS' },
    ],
  },
  {
    id: 7,
    slug: 'school-solutions',
    title: 'School Solutions',
    category: 'Campus & Child Safety',
    tagline: 'Classroom CCTV, AIS 140 Bus GPS & Parent SMS Alerts',
    image: '/images/smart-school-safety.webp',
    summary: 'Turnkey educational safety suite including bus CCTV, AIS 140 location tracking, automated parent notification apps, and classroom surveillance.',
    items: [
      'Class Room Monitoring',
      'School Bus Tracking System',
      'Mobile APP / SMS Alerts – Parents / School Monitoring',
      'Attendance Reports',
      'School Bus Cameras',
      'Govt Certified GPS System',
      'Emergency Alarm System',
    ],
    hardwareItems: [
      'Class Room Monitoring',
      'School Bus Tracking System',
      'Mobile APP / SMS Alerts – Parents / School Monitoring',
      'Attendance Reports',
      'School Bus Cameras',
      'Govt Certified GPS System',
      'Emergency Alarm System',
    ],
    applications: ['K-12 Schools', 'Colleges & Universities', 'Daycare Centers', 'Student Hostels'],
    specs: [
      { label: 'GPS Compliance', value: 'AIS 140 ARAI certified with dual IP67 SIMs' },
      { label: 'Bus Video', value: '4-Ch shockproof Mobile NVR with panic button' },
      { label: 'Parent App', value: 'Live bus map, ETA notifications, and pickup geofencing' },
    ],
  },
  {
    id: 8,
    slug: 'gps-fleet-management',
    title: 'GPS & Fleet Management',
    category: 'Vehicle Telematics',
    tagline: 'AIS 140 Govt Certified GPS, Vehicle Tracking & Fuel Alerts',
    image: '/images/gps-fleet-trucks.webp',
    summary: 'Comprehensive vehicle tracking, fuel theft monitoring, speed restriction alerts, and digital trip inspection logs for commercial fleets.',
    items: [
      'GPS Devices',
      'AIS 140 Govt Certified GPS',
      'Vehicle Tracking',
      'Fleet Management Reports',
      'Alerts – Over speeding, Driver Behaviour, Fuel, Geo-fencing, Panic Button, Ignition',
      'Reports – Idle Alerts / Status',
      'Instant Location',
      'Reporting for Inspection',
    ],
    hardwareItems: [
      'GPS Devices',
      'AIS 140 Govt Certified GPS',
      'Vehicle Tracking',
      'Fleet Management Reports',
      'Alerts – Over speeding, Driver Behaviour, Fuel, Geo-fencing, Panic Button, Ignition',
      'Reports – Idle Alerts / Status',
      'Instant Location',
      'Reporting for Inspection',
    ],
    applications: ['Logistics Fleets', 'Taxi Services', 'Construction Vehicles', 'Ambulances'],
    specs: [
      { label: 'Update Frequency', value: 'Real-time 10-second polling interval' },
      { label: 'Sensors', value: 'Ultrasonic fuel sensor, ignition cut-off relay, SOS switch' },
      { label: 'Battery Backup', value: 'Internal rechargeable battery with tamper alarms' },
    ],
  },
  {
    id: 9,
    slug: 'control-room-solutions',
    title: 'Control Room Solutions',
    category: 'Command Centers',
    tagline: 'Video Walls, VMS, Smart Data Storage & Video Data Mirroring',
    image: '/images/control-room-banner.webp',
    summary: 'Industrial-grade command centers with narrow-bezel LED video walls, hierarchy-based VMS matrix systems, and fail-safe RAID mirrored storage.',
    items: [
      'Video Wall',
      'Video Management (VMS)',
      'Hierarchy Based Control System',
      'Smart Data Storage Solutions',
      'Video Data Mirroring',
    ],
    hardwareItems: [
      'Video Wall',
      'Video Management (VMS)',
      'Hierarchy Based Control System',
      'Smart Data Storage Solutions',
      'Video Data Mirroring',
    ],
    applications: ['City Surveillance', 'Plant Central Monitoring', 'Airport Security', 'Highway Tolls'],
    specs: [
      { label: 'Display Technology', value: 'Ultra-narrow 0.88mm bezel 55" 4K video wall panels' },
      { label: 'Storage Architecture', value: 'Enterprise SAN/NAS with RAID 5/6 + hot spares' },
      { label: 'Uptime', value: '24/7 continuous duty cycle with redundant power supplies' },
    ],
  },
  {
    id: 10,
    slug: 'network-consulting',
    title: 'Network Consulting',
    category: 'IT Networking',
    tagline: 'Data & Fiber Cabling, Managed Switches, Long Range APs & P2P',
    image: '/images/network-server-infrastructure.webp',
    summary: 'High-speed structured fiber optic cabling, PoE managed switching networks, long-range wireless APs, and point-to-point wireless bridges.',
    items: [
      'Network Consultancy',
      'Network Management',
      'Data Cabling',
      'Fiber cabling',
      'Managed / Unmanaged Switches',
      'Wireless Access Points / Long Range',
      'Hotspot Solutions',
      'Point to Point Solutions',
      'Point to Multipoint Solutions',
    ],
    hardwareItems: [
      'Network Consultancy',
      'Network Management',
      'Data Cabling',
      'Fiber cabling',
      'Managed / Unmanaged Switches',
      'Wireless Access Points / Long Range',
      'Hotspot Solutions',
      'Point to Point Solutions',
      'Point to Multipoint Solutions',
    ],
    applications: ['Multi-acre Campuses', 'Industrial Warehouses', 'Multi-Floor Offices', 'Smart Cities'],
    specs: [
      { label: 'Cabling Standards', value: 'Cat6A 10Gbps copper + Single-mode/Multi-mode fiber' },
      { label: 'P2P Distance', value: 'Up to 15km wireless line-of-sight bridge' },
      { label: 'PoE Capacity', value: 'PoE+ / PoE++ 802.3bt high power switching' },
    ],
  },
  {
    id: 11,
    slug: 'rfid-uhf-solutions',
    title: 'RFID / UHF / RFID',
    category: 'Retail Loss Prevention',
    tagline: 'EAS Anti-Theft for Shopping Centers, RFID Labels & Tags',
    image: '/images/rfid-uhf-system.webp',
    summary: 'Electronic Article Surveillance (EAS) pedestals for retail stores, long-range UHF antennas for vehicle tracking, and customized RFID tags.',
    items: [
      'Solutions',
      'EAS for Shopping Centers',
      'RFID Solutions',
      'RFID Labels & Tags',
    ],
    hardwareItems: [
      'Solutions',
      'EAS for Shopping Centers',
      'RFID Solutions',
      'RFID Labels & Tags',
    ],
    applications: ['Supermarkets & Malls', 'Garment Stores', 'Library Systems', 'Warehouse Pallets'],
    specs: [
      { label: 'Frequency Bands', value: 'AM 58kHz / RF 8.2MHz / UHF 865-868MHz' },
      { label: 'Read Range', value: 'Up to 12m long-range UHF windshield tag reading' },
      { label: 'Tag Types', value: 'Hard tags, lanyard pins, adhesive labels, ceramic tags' },
    ],
  },
  {
    id: 12,
    slug: 'epabx-intercoms',
    title: 'EPABX / Intercoms',
    category: 'Telecommunications',
    tagline: 'Analog EPABX, IP EPABX, GSM Gateways & VOIP Gateways',
    image: '/images/epabx-intercom-telecom.webp',
    summary: 'Unified voice communications with hybrid analog and IP PBX exchanges, GSM multi-SIM trunk gateways, and multi-extension intercoms.',
    items: [
      'Analog EPABX',
      'IP EPABX',
      'GSM Gateways',
      'VOIP Gateways',
    ],
    hardwareItems: [
      'Analog EPABX',
      'IP EPABX',
      'GSM Gateways',
      'VOIP Gateways',
    ],
    applications: ['Corporate Headquarters', 'Apartment Societies', 'Hospital Wards', 'Hotels'],
    specs: [
      { label: 'Extension Capacity', value: 'From 8 extensions up to 1000+ IP extensions' },
      { label: 'Trunk Support', value: 'PRI / SIP trunks, 4G GSM SIM channels, Analog CO lines' },
      { label: 'Features', value: 'IVR auto-attendant, call recording, voice-mail to email' },
    ],
  },
  {
    id: 13,
    slug: 'it-hardware-software',
    title: 'IT Hardware / Software / Desktops / Laptops',
    category: 'Hardware & Software',
    tagline: 'Commercial Computers, Projectors, Printers & VMS Software',
    image: '/images/it-hardware-suite.webp',
    summary: 'Commercial grade computers, conference room laser projectors, network printers, and specialized software for payroll, HRMS, and visitor passes.',
    items: [
      'Desktops / Laptops',
      'Projectors',
      'IP Printers',
      'Payroll Software',
      'HR Software',
      'Visitor Management',
      'VMS Software',
      'Access Management',
    ],
    hardwareItems: [
      'Desktops / Laptops',
      'Projectors',
      'IP Printers',
      'Payroll Software',
      'HR Software',
      'Visitor Management',
      'VMS Software',
      'Access Management',
    ],
    applications: ['Enterprise Offices', 'School Computer Labs', 'Government Offices', 'Boardrooms'],
    specs: [
      { label: 'Hardware Class', value: 'Commercial Grade Dell, HP, Lenovo & Epson' },
      { label: 'Software Licenses', value: 'Authentic Windows Pro, Office 365, Specialized ERP' },
      { label: 'Setup', value: 'On-site installation, domain setup & network sharing' },
    ],
  },
  {
    id: 14,
    slug: 'amc-services',
    title: 'AMC Services',
    category: 'Annual Maintenance',
    tagline: 'Comprehensive & Non-Comprehensive AMC for All Listed Services',
    image: '/images/amc-technician.webp',
    summary: 'Peace of mind service contracts covering preventive maintenance checks, lightning/surge protection, loaner standby units, and guaranteed 4-hour SLA.',
    items: [
      'AMC Services – For all the Listed Services',
      'Comprehensive and Non-Comprehensive',
      'Scheduled Preventive Maintenance Visits',
      'Emergency Breakdown Response (Under 4 Hours)',
      'Certified Spare Parts & Standby Hardware Support',
    ],
    hardwareItems: [
      'AMC Services – For all the Listed Services',
      'Comprehensive and Non-Comprehensive',
      'Scheduled Preventive Maintenance Visits',
      'Emergency Breakdown Response (Under 4 Hours)',
      'Certified Spare Parts & Standby Hardware Support',
    ],
    applications: ['All Client Facilities', 'Banks & Financial Institutions', 'Factories', 'Offices'],
    specs: [
      { label: 'SLA Response', value: 'Under 4 hours for critical emergency breakdowns' },
      { label: 'Preventive Visits', value: 'Monthly / Quarterly lens cleaning, voltage & backup audits' },
      { label: 'Coverage', value: 'All 14 security, network, and electronic hardware categories' },
    ],
  },
];

export const SOLUTIONS = SERVICES;

export const CAMERA_PRODUCTS: CameraProduct[] = [
  {
    id: 'cam-dome-4k',
    name: '4K Ultra HD Vandal-Proof Dome Camera',
    model: 'BT-D4K-AI',
    category: 'Dome',
    image: '/images/cctv-dome.png',
    tagline: 'Discrete 4K Indoor & Outdoor Surveillance with IK10 Vandal Resistance',
    overview: 'High-performance vandal dome camera equipped with smart IR up to 40 meters and dual-mic audio recording.',
    resolution: '4K (3840x2160) @ 30fps',
    sensor: '1/1.8" Progressive Scan CMOS',
    lensFov: '2.8mm - 12mm Motorized Varifocal (105° - 35°)',
    nightVision: 'Smart EXIR 2.0 IR up to 40m with True WDR 120dB',
    compression: 'H.265+ / H.265 / H.264+ / MJPEG',
    aiFeatures: ['Human & Vehicle Target Classification', 'Line Crossing Detection', 'Unattended Baggage Alert'],
    specs: [
      { label: 'Ingress Protection', value: 'IP67 Weatherproof & IK10 Vandal-Proof' },
      { label: 'Operating Temp', value: '-30°C to +60°C' },
      { label: 'Power Input', value: 'PoE (802.3af) or 12V DC' },
    ],
    applications: ['Office Lobbies', 'Elevator Lobbies', 'Retail Stores', 'School Corridors'],
    keyHighlights: ['Vandal Resistant IK10', 'Motorized Optical Zoom', 'Built-in Two-way Audio'],
  },
  {
    id: 'cam-bullet-8mp',
    name: 'Industrial Long-Range 4K AI Bullet Camera',
    model: 'BT-B8K-IR80',
    category: 'Bullet',
    image: '/images/cctv-bullet.png',
    tagline: 'Extreme Perimeter Defense with 80m Matrix Infrared and Deep Learning ANPR',
    overview: 'All-weather heavy duty bullet camera built for perimeter fencing, parking entrances, and industrial yards.',
    resolution: '8MP Ultra HD @ 25fps',
    sensor: '1/2" Ultra Low-Light Starlight CMOS',
    lensFov: '4.7mm - 47mm 10x Motorized Optical Zoom',
    nightVision: 'Starlight Color-at-Night + Matrix IR up to 80m',
    compression: 'Ultra H.265 Smart Codec',
    aiFeatures: ['Deep Learning ANPR (License Plate Recognition)', 'Perimeter Intrusion Detection', 'Directional Motion Tripwire'],
    specs: [
      { label: 'Ingress Protection', value: 'IP67 Heavy Industrial Waterproof' },
      { label: 'Surge Protection', value: '6KV Lightning and Voltage Surge Protection' },
      { label: 'Onboard Storage', value: 'MicroSD slot up to 512GB' },
    ],
    applications: ['Perimeter Boundaries', 'Logistics Gates', 'Parking Entry & Exit', 'Factory Yards'],
    keyHighlights: ['80m Night Vision', 'License Plate Recognition', 'Integrated Sunshield & Heater'],
  },
  {
    id: 'cam-ptz-36x',
    name: '36x Optical Zoom Speed Dome PTZ Camera',
    model: 'BT-PTZ36X-AI',
    category: 'PTZ',
    image: '/images/cctv-ptz.png',
    tagline: '360° Endless Pan-Tilt-Zoom with 250m Laser IR & Smart Auto-Tracking',
    overview: 'High-speed positioning dome camera capable of tracking moving suspects and vehicles across vast campuses.',
    resolution: '4MP @ 60fps High Frame Rate',
    sensor: '1/1.8" High Sensitivity CMOS',
    lensFov: '6.0mm - 216mm (36x Optical Zoom, 16x Digital)',
    nightVision: 'Laser Synchronized IR up to 250m',
    compression: 'H.265+ Smart Encoding',
    aiFeatures: ['Smart Target Auto-Tracking', 'Face Capture & Attribute Analytics', 'Loitering & Crowd Density Warning'],
    specs: [
      { label: 'Pan / Tilt Range', value: '360° Endless Pan, -20° to 90° Tilt with Auto-Flip' },
      { label: 'Pan Speed', value: 'Preset speed up to 400°/second' },
      { label: 'Weather Protection', value: 'IP67, IK10, Built-in Wiper and Defroster' },
    ],
    applications: ['Airport Runways', 'City Intersections', 'Industrial Mega-Sites', 'Stadiums'],
    keyHighlights: ['36x Optical Zoom', '250m Laser Night Vision', 'Intelligent Auto-Tracking'],
  },
  {
    id: 'cam-thermal-bi',
    name: 'Bi-Spectrum Radiometric Thermal & Optical Camera',
    model: 'BT-TH-FIRE24',
    category: 'Thermal',
    image: '/images/cctv-wireless.png',
    tagline: 'Early Fire Detection, Overheat Alarm & Zero-Light Perimeter Security',
    overview: 'Dual thermal and optical camera engineered to detect abnormal temperature rises before flames ignite.',
    resolution: 'Thermal: 640x512 | Optical: 4MP 2K',
    sensor: 'Vanadium Oxide Uncooled Focal Plane Arrays',
    lensFov: 'Thermal 15mm (42° FOV) + Optical 4mm (84° FOV)',
    nightVision: 'Thermal Radiometric Heat Mapping (Zero light required)',
    compression: 'H.265 / H.264',
    aiFeatures: ['Early Fire & Hotspot Alarm (-20°C to 550°C)', 'Smoking Detection', 'Zero-Light Camouflage Intrusion'],
    specs: [
      { label: 'Temperature Accuracy', value: '±2°C or ±2% of reading' },
      { label: 'Audio Alarm', value: 'Built-in 110dB Siren and White Strobe Flasher' },
      { label: 'Protection', value: 'IP66 Industrial Enclosure' },
    ],
    applications: ['Substations & Transformers', 'Chemical Storage', 'Timber & Waste Yards', 'Critical Infrastructure'],
    keyHighlights: ['Instant Early Fire Alert', 'Dual Optical + Thermal Stream', 'Active Sound & Light Deterrent'],
  },
];

export const BLOGS: BlogPost[] = [
  {
    id: 'how-to-choose-cctv-camera-home',
    title: 'How to Choose the Right CCTV Camera for Your Home',
    category: 'CCTV',
    date: 'October 28, 2026',
    readTime: '5 min read',
    image: '/images/smart-home-security.webp',
    summary:
      'A complete guide to selecting the best CCTV camera based on your security needs, budget and property size.',
    content: [
      'Choosing the right residential security camera is about striking the ideal balance between perimeter coverage, optical resolution, low-light visibility, and ease of mobile access.',
      'For home entrances and front porches, wide-angle 4MP dome or bullet cameras with color night vision ensure crystal-clear facial identification even under low ambient light. For backyards and driveway perimeters, long-range infrared cameras provide continuous surveillance up to 30 meters.',
      'Best Technology provides turnkey residential security packages with hybrid DVR/NVR storage, instant motion push alerts, and direct mobile live-viewing apps on iOS and Android.',
    ],
  },
  {
    id: 'dome-vs-bullet-camera-which-is-better',
    title: 'Dome vs Bullet Camera – Which is Better?',
    category: 'Buying Guide',
    date: 'October 25, 2026',
    readTime: '6 min read',
    image: '/images/cctv-bullet.png',
    summary:
      'Compare dome and bullet cameras based on design, features, use cases and installation requirements.',
    content: [
      'When planning a video surveillance system, understanding the distinction between dome and bullet form factors is crucial for maximizing coverage and durability.',
      'Dome cameras feature a discreet, vandal-resistant spherical casing (rated up to IK10). Because the orientation of the lens is concealed behind tinted glass, it acts as an effective psychological deterrent and is harder for intruders to tamper with or knock out of alignment.',
      'Bullet cameras, with their prominent cylindrical casing and sunshield, excel at long-range perimeter defense. Their extended lens focal lengths allow for dedicated vehicle license plate capture and perimeter fence monitoring.',
      'Best Technology engineers custom hybrid layouts combining discreet indoor dome cameras with heavy-duty outdoor bullet units for commercial and industrial facilities.',
    ],
  },
  {
    id: 'benefits-of-remote-monitoring-business',
    title: 'Benefits of Remote Monitoring for Your Business',
    category: 'IT Solutions',
    date: 'October 20, 2026',
    readTime: '4 min read',
    image: '/images/remote-cctv-monitoring-app.webp',
    summary:
      'Discover how remote monitoring improves security, reduces risks and gives you peace of mind.',
    content: [
      'Remote video surveillance has transitioned from an emergency audit tool to an active operational management asset for modern enterprise leadership.',
      'With secure P2P cloud connectivity and multi-device VMS applications, business owners and facility managers can view live feeds from multiple branches simultaneously on smartphones, tablets, and desktop workstations.',
      'Automated push alerts notify stakeholders of unauthorized perimeter breaches, intrusion after business hours, or cashier point-of-sale anomalies without requiring constant manual monitoring.',
      'Best Technology integrates enterprise VMS software with multi-tier role permissions and SSL-encrypted streaming for seamless multi-site visibility.',
    ],
  },
  {
    id: 'how-good-network-setup-improves-business',
    title: 'How a Good Network Setup Improves Your Business',
    category: 'Networking',
    date: 'October 28, 2026',
    readTime: '5 min read',
    image: '/images/network-server-infrastructure.webp',
    summary:
      'Learn how a reliable network infrastructure ensures better performance, security and productivity.',
    content: [
      'An enterprise network is the digital backbone that connects IP security cameras, biometric access control, VoIP telephony, ERP servers, and employee workstations.',
      'Unstructured cabling and unmanaged consumer switches frequently introduce packet drops, surveillance video stutter, and security vulnerabilities that disrupt day-to-day business operations.',
      'Deploying structured Cat6/fiber-optic backbones with gigabit managed PoE switches delivers dedicated VLAN isolation, Quality of Service (QoS) prioritization for voice and video, and 99.99% operational reliability.',
      'Best Technology delivers turnkey networking audits, rack patching, and managed switching solutions for commercial offices and manufacturing facilities.',
    ],
  },
  {
    id: 'types-of-access-control-systems',
    title: 'Types of Access Control Systems and Their Applications',
    category: 'Access Control',
    date: 'October 15, 2026',
    readTime: '6 min read',
    image: '/images/biometric-terminal.webp',
    summary:
      'Explore different access control solutions like RFID, biometric, and face recognition systems.',
    content: [
      'Restricting physical access to sensitive facilities while maintaining frictionless entry for authorized personnel is a fundamental security requirement.',
      'Access control technologies range from RFID smart card readers and multi-door controllers to biometric fingerprint scanners and touchless 3D face verification terminals with infrared liveness detection.',
      'For high-throughput employee turnstiles, optical flap barriers integrated with RFID/UHF long-range badges prevent tailgating while processing up to 40 individuals per minute.',
      'Best Technology integrates access controllers with time-and-attendance payroll software, visitor management systems, and fire alarm break-glass emergency release circuits.',
    ],
  },
  {
    id: 'why-regular-amc-is-important-security',
    title: 'Why Regular AMC is Important for Security Systems',
    category: 'Maintenance',
    date: 'October 10, 2026',
    readTime: '4 min read',
    image: '/images/amc-technician.webp',
    summary:
      'Understand the benefits of Annual Maintenance Contracts and how they ensure uninterrupted performance.',
    content: [
      'Electronic security hardware runs continuously under demanding environmental conditions including dust, voltage fluctuations, lightning surges, and temperature extremes.',
      'Without regular maintenance, camera lenses accumulate grime, hard drives experience unflagged sector errors, and battery backups deteriorate, leaving facilities vulnerable during critical incidents.',
      'An Annual Maintenance Contract (AMC) with Best Technology provides quarterly scheduled preventive maintenance visits, camera refocusing, firmware security patches, backup health checks, and guaranteed 4-hour emergency SLA response.',
      'Comprehensive AMC plans include 100% certified replacement spare parts and standby loaner units to guarantee zero downtime.',
    ],
  },
  {
    id: 'latest-trends-in-cctv-technology-2026',
    title: 'Latest Trends in CCTV Technology (2026)',
    category: 'Industry Updates',
    date: 'October 08, 2026',
    readTime: '5 min read',
    image: '/images/control-room-banner.webp',
    summary:
      'Explore the new innovations in AI, analytics, and cloud-based surveillance shaping the future of security.',
    content: [
      'The video surveillance landscape in 2026 is driven by on-edge artificial intelligence, ultra-high-definition optical sensors, and hybrid cloud video archiving.',
      'Deep learning algorithms embedded directly on camera chipsets now distinguish accurately between humans, vehicles, and benign environmental triggers such as wind or animals, reducing false alarms by over 95%.',
      'High-speed ANPR license plate recognition, thermal temperature anomaly mapping, and intelligent forensic search enable security teams to locate critical incidents within seconds across petabytes of recorded footage.',
      'Best Technology partners with industry leaders to deploy state-of-the-art AI camera networks and enterprise control room solutions.',
    ],
  },
  {
    id: 'cctv-installation-factories-warehouses',
    title: 'CCTV Installation for Factories and Warehouses – Key Considerations',
    category: 'CCTV',
    date: 'October 05, 2026',
    readTime: '5 min read',
    image: '/images/warehouse-enterprise-cctv.webp',
    summary:
      'Important factors to consider before installing CCTV in large industrial spaces.',
    content: [
      'Industrial environments present unique surveillance challenges including high ceilings, wide aisles, electromagnetic interference from machinery, and outdoor loading bay exposure.',
      'Key considerations include selecting motorized optical zoom PTZ cameras for high-bay mounting, high-amperage surge protectors for power spikes, and fiber-optic backbone trunking to overcome distance limitations exceeding 100 meters.',
      'Cameras deployed in production zones provide valuable oversight for machinery operation, inventory shrinkage prevention, and workplace occupational safety compliance.',
      'Best Technology provides specialized industrial surveillance architectures designed specifically for factories, assembly plants, and logistics hubs.',
    ],
  },
  {
    id: 'structured-cabling-guide-for-businesses',
    title: 'Structured Cabling – A Guide for Businesses',
    category: 'IT Solutions',
    date: 'September 28, 2026',
    readTime: '6 min read',
    image: '/images/network-server-infrastructure.webp',
    summary:
      'Learn how structured cabling improves network reliability, scalability and long-term cost efficiency.',
    content: [
      'Structured cabling is an organized, standards-based network cabling infrastructure that supports hardware systems including data networks, IP surveillance, access control, and telephony.',
      'By replacing disorganized point-to-point wiring with standardized patch panels, vertical cable managers, and certified Cat6/Cat6A cabling, businesses eliminate cable clutter and dramatically simplify troubleshooting.',
      'A professionally engineered structured cabling system provides high bandwidth headroom that accommodates future technology expansions without requiring disruptive rewiring.',
      'Best Technology delivers certified copper and fiber structured cabling installations with comprehensive cable pathway documentation and Fluke test verification reports.',
    ],
  },
];
