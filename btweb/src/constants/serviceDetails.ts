export interface ServiceHardwareItem {
  name: string;
  desc: string;
  features: string[];
  tag: string;
  iconType?: 'camera' | 'shield' | 'lock' | 'barrier' | 'bus' | 'flame' | 'cpu' | 'users' | 'wrench' | 'building';
}

export interface ServiceApplicationItem {
  title: string;
  desc: string;
  tags: string[];
  iconType?: 'building' | 'office' | 'warehouse' | 'school' | 'home';
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ArchitectureNode {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  iconType: string;
}

export interface TierComparisonRow {
  parameter: string;
  standard: string;
  pro: string;
  enterprise: string;
}

export interface ServiceCaseStudy {
  title: string;
  clientType: string;
  location: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
}

export interface ServiceConfiguratorOption {
  unitLabel: string;
  defaultUnits: number;
  minUnits: number;
  maxUnits: number;
  unitStep: number;
  tiers: Array<{
    id: 'standard' | 'pro' | 'enterprise';
    name: string;
    multiplier: number;
    desc: string;
  }>;
  basePricePerUnit: number;
  addons: Array<{
    id: string;
    label: string;
    price: number;
    desc: string;
  }>;
}

export interface ServiceDetailData {
  heroBadge: string;
  heroVisualBadge: string;
  heroVisualGrade: string;
  heroVisualNotes: string;
  heroStats: Array<{ value: string; label: string; iconType: string }>;
  detailedOverview: string[];
  hardwareList: ServiceHardwareItem[];
  applicationsList: ServiceApplicationItem[];
  processSteps: Array<{ step: number; title: string; desc: string }>;
  faqs: ServiceFaqItem[];
  compliance: Array<{ standard: string; description: string }>;
  configurator: ServiceConfiguratorOption;
  architectureNodes: ArchitectureNode[];
  comparisonTable: TierComparisonRow[];
  caseStudy: ServiceCaseStudy;
}

export const SERVICE_DETAILS_MAP: Record<string, ServiceDetailData> = {
  // 1. School Solutions
  'school-solutions': {
    heroBadge: 'CAMPUS & CHILD SAFETY • AIS 140 CERTIFIED • REAL-TIME PARENT APP',
    heroVisualBadge: 'GOVT CERTIFIED AIS-140',
    heroVisualGrade: 'SCHOOL FLEET GRADE',
    heroVisualNotes: 'Dual SIM 4G Telematics | Panic SOS Buttons | 4-Ch Anti-Vibration Bus NVR',
    heroStats: [
      { value: 'AIS-140', label: 'ARAI Govt Certified', iconType: 'award' },
      { value: 'Live ETA', label: 'Parent Mobile App', iconType: 'bus' },
      { value: '100% Coverage', label: 'Classrooms & Corridors', iconType: 'camera' },
      { value: '2-Hr', label: 'On-Site School AMC', iconType: 'shield' },
    ],
    detailedOverview: [
      'Best Technology provides an integrated educational security and tracking ecosystem designed specifically for CBSE, ICSE, Matriculation schools, and college campuses across Tamil Nadu and South India.',
      'Our solutions unite AIS-140 certified school bus GPS trackers with interior/exterior anti-vibration mobile CCTV, student RFID punch notifications, parent smartphone live transit tracking, and high-definition classroom surveillance.',
      'School administrators receive a centralized digital command console to monitor bus transit speed, geofenced campus arrival times, driver driving behavior, and real-time corridor/classroom safety.',
    ],
    configurator: {
      unitLabel: 'School Buses & Fleet Vehicles',
      defaultUnits: 6,
      minUnits: 1,
      maxUnits: 50,
      unitStep: 1,
      basePricePerUnit: 8500,
      tiers: [
        { id: 'standard', name: 'AIS 140 GPS Only', multiplier: 1.0, desc: 'Govt Certified ARAI Tracker, Dual SIM, Panic Buttons & State Server Sync' },
        { id: 'pro', name: 'GPS + In-Cabin CCTV', multiplier: 1.85, desc: 'AIS 140 GPS + 2-Camera Anti-Vibration Mobile CCTV + Parent Live ETA App' },
        { id: 'enterprise', name: 'Complete Safe Campus Suite', multiplier: 2.6, desc: '4-Ch Bus MDVR + RFID Attendance Tap + Campus Classroom CCTV + Master Console' },
      ],
      addons: [
        { id: 'amc', label: '1-Year Comprehensive Bus AMC (Under 2-Hr Response)', price: 3500, desc: 'Quarterly sensor recalibration, wiring checks & priority emergency callouts' },
        { id: 'rfid', label: 'Automated Student RFID Attendance Module', price: 4200, desc: 'Sends instant "Child Boarded Bus" SMS alerts directly to parent phones' },
        { id: 'cloud', label: 'Cloud Video Storage & Live Streaming Server', price: 2800, desc: '30-day cloud video retention with simultaneous multi-admin remote live monitoring' },
      ],
    },
    architectureNodes: [
      {
        step: '01',
        title: 'On-Bus Sensors & MDVR',
        subtitle: 'Hardware Capture',
        desc: 'AIS-140 GPS telematics unit, in-cabin shockproof cameras, driver dashcam, and passenger SOS panic buttons.',
        iconType: 'bus',
      },
      {
        step: '02',
        title: 'Encrypted 4G Cellular',
        subtitle: 'ARAI Telemetry Protocol',
        desc: 'Dual network eSIMs transmit encrypted location coordinates, vehicle speed, and G-sensor telemetry every 10 seconds.',
        iconType: 'cpu',
      },
      {
        step: '03',
        title: 'Cloud Processing Engine',
        subtitle: 'Geofencing & Alerts',
        desc: 'Automated cloud backend calculates accurate bus ETAs, detects speed limit violations, and triggers arrival proximity alerts.',
        iconType: 'shield',
      },
      {
        step: '04',
        title: 'Parent App & Command Wall',
        subtitle: 'Real-Time Visibility',
        desc: 'Parents view live bus movements on Google Maps while principals monitor the entire fleet on a central video wall.',
        iconType: 'users',
      },
    ],
    comparisonTable: [
      { parameter: 'GPS Telematics', standard: 'AIS-140 Certified (Dual SIM)', pro: 'AIS-140 Certified (Dual SIM)', enterprise: 'AIS-140 + CAN Bus Telemetry' },
      { parameter: 'Video Surveillance', standard: 'Optional Add-on', pro: '2-Ch Full HD Anti-Vibration', enterprise: '4-Ch Shockproof MDVR with Audio' },
      { parameter: 'Parent App Integration', standard: 'Web Portal Access', pro: 'Live Google Maps App (iOS/Android)', enterprise: 'App + Instant SMS + RFID Tap Logs' },
      { parameter: 'Panic SOS Buttons', standard: '2 Emergency Buttons', pro: 'Driver + Conductor SOS Units', enterprise: 'Every Second Passenger Row SOS' },
      { parameter: 'Campus Integration', standard: 'Standalone Fleet', pro: 'Fleet + Gate Intercom', enterprise: 'Unified Campus CCTV + Fleet Command' },
      { parameter: 'AMC & Response Time', standard: 'Next Business Day', pro: 'Under 4-Hr Response', enterprise: 'Under 2-Hr Priority Support' },
    ],
    caseStudy: {
      title: '42-Bus Integrated Fleet Tracking & Campus Surveillance Rollout',
      clientType: 'Leading Matriculation Higher Secondary School',
      location: 'Hosur & Krishnagiri, Tamil Nadu',
      challenge: 'Parent anxiety regarding unpredictable bus delays, rash driving complaints, and lack of accountability at remote student pickup points across 18 rural routes.',
      solution: 'Deployed AIS-140 ARAI certified GPS units, dual-camera shockproof MDVRs, automated RFID boarding taps, and configured custom parent geofence notifications.',
      outcome: 'Achieved 100% on-time parent alert dispatches, completely eliminated route dispute calls, reduced bus fuel idling by 18%, and earned top safety commendations from the regional transport office.',
      metric: '42 Buses • 2,400+ Students Protected Daily',
    },
    hardwareList: [
      {
        name: 'Govt Certified AIS 140 GPS Vehicle Tracker',
        desc: 'ARAI and ICAT certified dual-SIM GPS telematics unit featuring emergency SOS panic buttons, battery backup, and direct state transport server sync.',
        features: ['Dual 4G eSIM', 'Panic Emergency Buttons', 'IRNSS/GPS Tracking', 'Ignition & Fuel Sensor'],
        tag: 'Mandatory Telematics',
        iconType: 'bus',
      },
      {
        name: 'Mobile Digital Video Recorder (MDVR) Bus CCTV',
        desc: 'Heavy-duty 4-channel anti-vibration mobile NVR with dual SD card / 2TB SSD storage, recording high-resolution interior student seating and road views.',
        features: ['4-Ch Full HD', 'Anti-Vibration Shockproof', 'G-Sensor Gyroscope', 'Night Vision IR Domes'],
        tag: 'In-Cabin Safety',
        iconType: 'camera',
      },
      {
        name: 'Parent Real-Time Mobile App & SMS Gateway',
        desc: 'Intuitive smartphone app for parents providing live bus location on Google Maps, proximity arrival alerts, delay notifications, and attendance logs.',
        features: ['iOS & Android App', 'Automated SMS Alerts', 'Geofence Stop Alarms', 'ETA Countdown'],
        tag: 'Parent Communication',
        iconType: 'users',
      },
      {
        name: 'RFID Student Bus & Gate Attendance Readers',
        desc: 'Contactless smart card readers installed at bus entry doors and school turnstiles that dispatch instant arrival and boarding timestamps to parents.',
        features: ['Instant SMS Dispatch', 'Mifare 13.56MHz', 'Audio Beep Confirmation', 'Offline Storage Buffer'],
        tag: 'Attendance Automation',
        iconType: 'shield',
      },
      {
        name: 'Wide-Angle Campus & Classroom IP Cameras',
        desc: 'Discreet 4MP Full HD dome cameras providing crystal-clear surveillance of classrooms, science labs, stairwells, and sports playgrounds.',
        features: ['Audio Recording Mic', 'Wide 110° FOV', 'IR 30m Night Vision', 'Privacy Masking Zones'],
        tag: 'Campus Security',
        iconType: 'camera',
      },
      {
        name: 'Campus Public Address & Emergency Alarm System',
        desc: 'IP-based centralized PA announcement system with programmable class bell sirens and emergency lockdown audio broadcast.',
        features: ['Zone-wise Paging', 'Emergency Strobe Alarms', 'High-Decibel Horns', 'Central Microphone Console'],
        tag: 'Emergency Evacuation',
        iconType: 'flame',
      },
    ],
    applicationsList: [
      {
        title: 'K-12 Schools & International Academies',
        desc: 'Comprehensive pupil safety from morning bus pickup to evening dismissal with live parent reassurance.',
        tags: ['Bus Fleets', 'Classrooms', 'Entry Gates', 'Playgrounds'],
        iconType: 'school',
      },
      {
        title: 'Colleges & University Campuses',
        desc: 'Wide-area surveillance covering multi-acre campuses, hostels, libraries, parking bays, and examination halls.',
        tags: ['Hostel Corridors', 'Exam Centers', 'Laboratories', 'Vehicle Entry'],
        iconType: 'building',
      },
      {
        title: 'Kindergartens & Daycare Centers',
        desc: 'Ultra-clear indoor monitoring with authorized parent live streaming during activity and resting hours.',
        tags: ['Play Areas', 'Sleeping Rooms', 'Pick-up Verification', 'Dining Hall'],
        iconType: 'home',
      },
    ],
    processSteps: [
      { step: 1, title: 'Fleet & Campus Audit', desc: 'Detailed on-site survey of school buses, route maps, gate flow, and campus blind spots.' },
      { step: 2, title: 'AIS-140 & Cable Wiring', desc: 'Anti-vibration wiring on buses with conceal conduit and certified SOS emergency button installation.' },
      { step: 3, title: 'Platform & App Deployment', desc: 'Configuration of school admin control dashboard and parent mobile app onboarding.' },
      { step: 4, title: 'Driver Training & AMC Support', desc: 'Driver orientation on panic buttons, staff drill training, and proactive periodic maintenance.' },
    ],
    faqs: [
      {
        question: 'Is your school bus GPS tracker officially approved under the AIS-140 standard?',
        answer: 'Yes, our telematics devices are 100% compliant with Ministry of Road Transport and Highways (MoRTH) AIS-140 specifications, tested and certified by ARAI / ICAT, equipped with dual telecom eSIMs and emergency SOS panic buttons.',
      },
      {
        question: 'How do parents receive notifications when the school bus is approaching their stop?',
        answer: 'Parents download the dedicated mobile app (iOS & Android). As the bus crosses the school-configured virtual geofence (e.g. 1 km or 5 minutes away), an automatic push notification and SMS alert is dispatched to the parents smartphone.',
      },
      {
        question: 'Can the school principal view both bus video streams and classroom cameras simultaneously?',
        answer: 'Yes. Our centralized Video Management System (VMS) allows the administrative office to view active bus location maps, in-cabin bus video feeds, and on-campus classroom CCTV simultaneously from a single master command screen.',
      },
      {
        question: 'What happens if a child presses the SOS panic button inside the bus?',
        answer: 'Pressing the panic button immediately sends an audible and visual high-priority alarm to the school transport dashboard, flashes SMS alerts with exact GPS coordinates to designated school officials, and triggers emergency live video transmission.',
      },
    ],
    compliance: [
      { standard: 'MoRTH AIS-140', description: 'Certified by ARAI / ICAT for passenger public transport safety' },
      { standard: 'BIS IS 13252', description: 'Indian national safety standard for electronic campus surveillance' },
      { standard: 'POCSO Guidelines', description: 'Adheres to statutory child protection surveillance norms in educational institutions' },
    ],
  },

  // 2. Fire & Intrusion Detection
  'fire-intrusion-detection': {
    heroBadge: 'LIFE SAFETY & ALARMS • EN54 / UL CERTIFIED • ACTIVE IR PERIMETER TRIPWIRES',
    heroVisualBadge: 'DUAL-CHAMBER OPTICAL SENSOR',
    heroVisualGrade: 'INDUSTRIAL LIFE SAFETY',
    heroVisualNotes: 'EN54-2/4 Certified | 100m Active Quad IR Beams | GSM Auto-Dialer Communicator',
    heroStats: [
      { value: 'EN54 / UL', label: 'Certified Standards', iconType: 'award' },
      { value: '< 10 Sec', label: 'Early Fire Warning', iconType: 'flame' },
      { value: '100m Range', label: 'Perimeter IR Beams', iconType: 'shield' },
      { value: '24/7 Dial', label: 'GSM Emergency Alert', iconType: 'cpu' },
    ],
    detailedOverview: [
      'Early detection of smoke, combustion heat, and unauthorized boundary breaches is critical to saving lives and safeguarding multi-crore industrial investments.',
      'Best Technology engineers compliant addressable and conventional fire alarm networks paired with outdoor pulsed active infrared perimeter tripwires and digital security guard patrol verification.',
      'Our systems automatically command motorized exit doors to unlock upon fire triggers, activate high-decibel acoustic strobes, and place prioritized GSM phone calls and SMS alerts to plant safety officers.',
    ],
    configurator: {
      unitLabel: 'Detection Zones & Perimeter Points',
      defaultUnits: 8,
      minUnits: 2,
      maxUnits: 64,
      unitStep: 2,
      basePricePerUnit: 6200,
      tiers: [
        { id: 'standard', name: 'Conventional Multi-Zone', multiplier: 1.0, desc: 'Zoned Panel, Optical Smoke + Rate-of-Rise Heat Detectors, Manual Call Points & 105dB Hooters' },
        { id: 'pro', name: 'Addressable Smart Fire Network', multiplier: 1.75, desc: 'LCD Loop Panel with Point Pinpointing, Addressable Sensors + 100m Quad Active IR Perimeter Beams' },
        { id: 'enterprise', name: 'Hazardous Complex & BMS Tie-in', multiplier: 2.5, desc: 'Flame-Proof Sensors, Guard Tour Wand, Auto Emergency Door Release & Multi-SIM GSM Auto-Dialer' },
      ],
      addons: [
        { id: 'dialer', label: 'Cellular GSM Auto-Dialer (Calls 8 Emergency Numbers)', price: 4800, desc: 'Broadcasts recorded voice messages & urgent SMS to fire officers upon trigger' },
        { id: 'interlock', label: 'Fire Alarm to Access Control Emergency Interlock', price: 3800, desc: 'Instantly de-energizes all electromagnetic door locks for immediate safe evacuation' },
        { id: 'amc', label: 'Quarterly Certified Fire Audit & Smoke Aerosol Testing', price: 5500, desc: 'Comprehensive calibration, battery health checks, sounder tests & statutory audit report' },
      ],
    },
    architectureNodes: [
      {
        step: '01',
        title: 'Multi-Criteria Sensing',
        subtitle: 'Dual-Chamber Detection',
        desc: 'Optical smoke chambers, rate-of-rise thermal sensors, and quad pulsed active IR perimeter tripwires.',
        iconType: 'flame',
      },
      {
        step: '02',
        title: 'Class-A Fire Loop',
        subtitle: 'Fault-Tolerant Cabling',
        desc: 'Twisted-pair fire-resistant cabling with loop isolators ensuring detection continues even if a wire cuts.',
        iconType: 'shield',
      },
      {
        step: '03',
        title: 'Addressable Control Panel',
        subtitle: 'Pinpoint Location Engine',
        desc: 'Microprocessor FACP pinpoints exact detector address (e.g. "Loop 1, Detector 14: Server Rack 3").',
        iconType: 'cpu',
      },
      {
        step: '04',
        title: 'Emergency Response Matrix',
        subtitle: 'Sounders & Evacuation',
        desc: 'Triggers 105dB strobe horns, unlocks fire exit EM locks, and auto-dials emergency contacts via GSM.',
        iconType: 'award',
      },
    ],
    comparisonTable: [
      { parameter: 'Detection System', standard: 'Conventional Zoned (Zone 1-8)', pro: 'Addressable (Exact Detector Pinpoint)', enterprise: 'Multi-Loop Addressable + BMS' },
      { parameter: 'Perimeter Security', standard: 'Optional Add-on', pro: 'Dual Active IR Beams (50m)', enterprise: 'Quad Pulsed Active IR Beams (100m)' },
      { parameter: 'Emergency Override', standard: 'Manual Break-Glass', pro: 'Fire Relay to Access Control', enterprise: 'Full HVAC Damper & Access Auto-Release' },
      { parameter: 'Remote Notification', standard: 'Local Audio Siren Only', pro: 'GSM SMS Dialer (4 Numbers)', enterprise: 'GSM Voice Call + SMS (8 Numbers) + Cloud' },
      { parameter: 'Guard Patrolling', standard: 'Manual Log Sheet', pro: 'RFID Checkpoint Tokens', enterprise: 'Rugged Stainless Steel Patrol Wand Audit' },
      { parameter: 'Compliance Standard', standard: 'IS 2189 Commercial', pro: 'EN54-2/4 & IS 2189 Certified', enterprise: 'NBC Part 4 / UL Listed / FM Approved' },
    ],
    caseStudy: {
      title: 'Addressable Fire Network & Perimeter Tripwires for Auto Ancillary Plant',
      clientType: 'Tier-1 Automotive Component Manufacturing Facility',
      location: 'SIPCOT Industrial Park, Hosur, Tamil Nadu',
      challenge: 'High ceiling height (9 meters), fine airborne metallic dust causing false alarms on generic sensors, and extensive 600-meter exposed boundary wall prone to perimeter intrusions.',
      solution: 'Engineered an addressable dual-chamber optical network with drift compensation, beam detectors for high-bay warehousing, and installed 100-meter quad pulsed active IR tripwires along the boundary.',
      outcome: 'Achieved 100% statutory fire safety compliance, zero false-alarm shutdowns in 18 months of operation, and immediate detection of 2 attempted perimeter boundary breaches.',
      metric: '128 Addressable Detectors • 600m Perimeter Protected',
    },
    hardwareList: [
      {
        name: 'Addressable Fire Alarm Control Panel (FACP)',
        desc: 'Advanced microprocessor-based FACP supporting 2 to 8 loops, up to 2,032 addressable detectors, graphical LCD display, and event log memory.',
        features: ['254 Devices/Loop', 'EN54-2/4 Approved', 'Battery Backup 48h', 'BMS / Modbus Output'],
        tag: 'Central Brain',
        iconType: 'cpu',
      },
      {
        name: 'Multi-Criteria Optical Smoke & Heat Detectors',
        desc: 'Dual-chamber photoelectric smoke sensors combined with rate-of-rise thermal thermistors for rapid detection with superior false-alarm immunity.',
        features: ['Self-Diagnostic Drift', '360° Viewing LED', 'Insect-Resistant Mesh', 'Rotary Address Switches'],
        tag: 'Early Detection',
        iconType: 'flame',
      },
      {
        name: 'Active Photoelectric Infrared Perimeter Beams',
        desc: 'Pulsed dual and quad active IR beam towers for boundary walls up to 100 meters, triggering alarms immediately upon intruder beam interruption.',
        features: ['100m Outdoor Range', 'Quad Pulsed Beams', 'Anti-Frost Heating', 'IP65 Weatherproof'],
        tag: 'Boundary Security',
        iconType: 'shield',
      },
      {
        name: 'Manual Call Points (MCP) & Acoustic Sounder Strobes',
        desc: 'Heavy-duty resettable manual pull stations combined with 105dB acoustic sounder strobes with high-intensity xenon flash.',
        features: ['Resettable Key', '105dB at 1 Meter', 'Bright Red Xenon Strobe', 'Impact Resistant ABS'],
        tag: 'Evacuation Alert',
        iconType: 'flame',
      },
      {
        name: 'Electronic Guard Tour / Patrol Wand System',
        desc: 'Durable stainless steel handheld RFID wand verifying that security guards complete scheduled boundary rounds on time.',
        features: ['Waterproof IP67 Wand', 'RFID Checkpoint Discs', 'Tamper Audit Log', 'Shift Report Software'],
        tag: 'Patrol Compliance',
        iconType: 'shield',
      },
      {
        name: 'Cellular GSM / PSTN Auto-Dialer Communicator',
        desc: 'Standalone multi-network dialer that broadcasts recorded voice messages and SMS alerts to 8 emergency contact numbers when alarms trip.',
        features: ['Voice Message Broadcast', 'Instant SMS Dispatch', 'Dual SIM Redundancy', 'Power Cut Alerts'],
        tag: 'Emergency Telephony',
        iconType: 'cpu',
      },
    ],
    applicationsList: [
      {
        title: 'Industrial Warehouses & Storage Yards',
        desc: 'Critical protection for combustible inventory, raw materials, pallet racking, and loading docks.',
        tags: ['High Ceilings', 'Beam Detectors', 'Perimeter Walls', 'Sprinkler Ties'],
        iconType: 'warehouse',
      },
      {
        title: 'Manufacturing & Chemical Facilities',
        desc: 'Flame-proof and explosion-proof detection for processing floors, chemical storage, and transformer yards.',
        tags: ['Heat Sensors', 'Emergency Strobes', 'MCP Points', 'Auto Dialing'],
        iconType: 'building',
      },
      {
        title: 'Commercial Tech Parks & Hospitals',
        desc: 'Zone-specific addressable pinpointing to enable phased evacuation without unnecessary panic.',
        tags: ['Corridors', 'Server Rooms', 'Patient Wings', 'Fire Doors'],
        iconType: 'office',
      },
    ],
    processSteps: [
      { step: 1, title: 'Risk & Hazard Survey', desc: 'Evaluating combustible loads, ceiling heights, airflow patterns, and perimeter vulnerable points.' },
      { step: 2, title: 'CAD Fire & Beam Layout', desc: 'Formulating code-compliant loop wiring diagrams and active IR beam sighting angles.' },
      { step: 3, title: 'Wiring & Sensor Calibration', desc: 'Installation using certified fire-rated cables, addressing detectors, and testing smoke aerosol response.' },
      { step: 4, title: 'Evacuation Drills & Certification', desc: 'Testing sounders, sounder strobe sync, GSM dialing verification, and statutory handover.' },
    ],
    faqs: [
      {
        question: 'What is the advantage of an Addressable Fire Alarm over a Conventional system?',
        answer: 'In a conventional system, an alarm only identifies a general zone (e.g. "Zone 2 Fire"). An Addressable system communicates the exact detector, room, and rack location (e.g. "Loop 1, Sensor 14: Server Room Rack 3"), enabling pinpoint response within seconds.',
      },
      {
        question: 'How do your perimeter beams avoid false alarms caused by birds or falling leaves?',
        answer: 'Our outdoor perimeter barriers utilize synchronized quad-beam technology. An alarm is only generated when all four parallel infrared beams are broken simultaneously by a human-sized intruder, completely filtering out small birds, rodents, or wind-blown leaves.',
      },
      {
        question: 'What happens to access doors when a fire alarm is activated?',
        answer: 'Best Technology integrates the FACP directly with all building electromagnetic access control locks. As soon as a confirmed fire signal is received, power to all fail-safe door locks is instantly removed, ensuring free emergency evacuation.',
      },
      {
        question: 'Does the system notify fire services and management if the plant is unmanned at night?',
        answer: 'Yes, our integrated GSM communicator immediately places automated emergency phone calls with custom recorded voice messages and sends urgent SMS alerts with exact detector locations to up to 8 pre-programmed manager and fire officer phone numbers.',
      },
    ],
    compliance: [
      { standard: 'IS 2189', description: 'Indian standard code of practice for selection, installation and maintenance of automatic fire detection' },
      { standard: 'EN 54 Part 2 & 4', description: 'European standard for fire detection and fire alarm systems control equipment' },
      { standard: 'National Building Code (NBC)', description: 'Full compliance with Part 4 life safety mandates for industrial and commercial structures' },
    ],
  },

  // 3. Entry Automation
  'entry-automation': {
    heroBadge: 'PERIMETER AUTOMATION • HIGH-SPEED BOOM BARRIERS • UHF RFID • SLIDING GATES',
    heroVisualBadge: 'BRUSHLESS DC MOTOR',
    heroVisualGrade: 'HEAVY-DUTY COMMERCIAL',
    heroVisualNotes: '0.9s to 3s Fast Cycle | 100% Continuous Duty | Hands-Free UHF Windshield RFID',
    heroStats: [
      { value: '0.9 Sec', label: 'Rapid Opening Speed', iconType: 'barrier' },
      { value: '5 Million', label: 'MCBF Cycle Life', iconType: 'award' },
      { value: '12m Range', label: 'Hands-Free UHF RFID', iconType: 'shield' },
      { value: '100% Duty', label: 'Continuous Operation', iconType: 'cpu' },
    ],
    detailedOverview: [
      'Controlling vehicular and pedestrian access at property perimeters prevents security breaches, eliminates vehicle queues, and maintains an unalterable digital log of all movements.',
      'Best Technology supplies, installs, and commissions heavy-duty automatic boom barriers, sliding and swing gate gearmotors, optical pedestrian flap turnstiles, and long-range UHF RFID windshield access systems.',
      'Engineered with commercial 24V DC brushless motors, our barriers deliver whisper-quiet operation, rapid 0.9s to 3s cycle speeds, and 100% continuous duty cycles suitable for high-frequency IT tech parks and toll gates.',
    ],
    configurator: {
      unitLabel: 'Automated Vehicle & Pedestrian Lanes',
      defaultUnits: 2,
      minUnits: 1,
      maxUnits: 16,
      unitStep: 1,
      basePricePerUnit: 38000,
      tiers: [
        { id: 'standard', name: 'Commercial Push / Remote Barrier', multiplier: 1.0, desc: 'DC Brushless Barrier, 4m Telescopic Arm, Dual Push Buttons & Long-Range Wireless Remotes' },
        { id: 'pro', name: 'Hands-Free UHF RFID Fast Track', multiplier: 1.55, desc: 'High-Speed 1.5s Barrier + 12m UHF Windshield RFID Reader + Inductive Ground Loop Detector' },
        { id: 'enterprise', name: 'ANPR Integrated Security Gate', multiplier: 2.3, desc: '0.9s Barrier + 4K ANPR Number Plate Camera + Pedestrian Flap Turnstile + Traffic Light System' },
      ],
      addons: [
        { id: 'battery', label: 'Internal 24V DC Battery Backup (500 Automatic Cycles)', price: 6500, desc: 'Guarantees continuous motorized operation during grid electricity blackouts' },
        { id: 'loop', label: 'Dual Safety Inductive Loop & Anti-Crush Photocell', price: 4200, desc: 'Underground magnetic metal sensor ensuring zero arm descend on passing vehicles' },
        { id: 'amc', label: '1-Year Comprehensive Preventive AMC (Mechanical & Motor)', price: 7500, desc: 'Quarterly spring balancing, gearbox lubrication, motor testing & emergency support' },
      ],
    },
    architectureNodes: [
      {
        step: '01',
        title: 'Vehicle Approach Detection',
        subtitle: 'UHF RFID / ANPR',
        desc: 'Overhead long-range UHF antenna reads windshield tag or 4K ANPR camera recognizes license plate at 12 meters.',
        iconType: 'barrier',
      },
      {
        step: '02',
        title: 'Access Authorization Check',
        subtitle: 'Whitelist Validation',
        desc: 'Controller verifies authorization against valid registered resident/employee database in under 0.05 seconds.',
        iconType: 'shield',
      },
      {
        step: '03',
        title: 'Brushless DC Actuation',
        subtitle: 'Rapid Motor Rise',
        desc: 'High-torque 24V DC brushless motor smoothly raises the boom arm in 0.9 to 1.5 seconds with soft deceleration.',
        iconType: 'cpu',
      },
      {
        step: '04',
        title: 'Anti-Crush Safety & Auto-Close',
        subtitle: 'Dual Failsafe Protection',
        desc: 'Underground inductive loop and infrared photo-beam ensure the arm will never drop until the vehicle has cleared.',
        iconType: 'award',
      },
    ],
    comparisonTable: [
      { parameter: 'Motor Technology', standard: 'AC Induction Motor', pro: '24V DC Brushless Motor', enterprise: 'High-Speed Torque Brushless DC' },
      { parameter: 'Cycle Speed', standard: '3.0 to 4.5 Seconds', pro: '1.5 to 2.5 Seconds Fast', enterprise: '0.9 to 1.5 Seconds High Speed' },
      { parameter: 'Duty Cycle', standard: '70% Intermittent', pro: '100% Continuous Duty', enterprise: '100% Continuous 5M MCBF' },
      { parameter: 'Access Validation', standard: 'Wireless Remote Keyfob', pro: 'Long-Range UHF Windshield Tag', enterprise: 'ANPR Number Plate + UHF RFID' },
      { parameter: 'Safety Protections', standard: 'Single IR Photocell', pro: 'Ground Loop + Dual IR Photocell', enterprise: 'Loop + Photocell + Arm Rubber Bumper' },
      { parameter: 'Power Cut Fallback', standard: 'Manual Clutch Key', pro: 'Key + 24V Battery Backup', enterprise: 'Key + Auto-Open on Cut + Dual UPS' },
    ],
    caseStudy: {
      title: 'Dual-Lane Hands-Free UHF Vehicle Access Automation',
      clientType: 'Premium 350-Villa Gated Township & Corporate Park',
      location: 'Bangalore Road & Hosur, Tamil Nadu',
      challenge: 'Long peak-hour queues of cars waiting for manual security guards to log vehicle numbers, creating gate congestion and unauthorized visitor tailgating.',
      solution: 'Installed two high-speed brushless boom barriers with long-range UHF RFID antennas, tamper-proof windshield tags, and underground anti-crush inductive loops.',
      outcome: 'Reduced gate transit time from 45 seconds to 1.5 seconds per car, completely eliminated morning congestion, and logged 1,800+ automated entries daily with zero gate collisions.',
      metric: '4 Automated Lanes • 1,800+ Daily Vehicles Logged',
    },
    hardwareList: [
      {
        name: 'High-Speed DC Brushless Boom Barrier',
        desc: 'Industrial-grade 24V DC brushless barrier with telescopic aluminum arm (3m to 6m), variable speed control, and 5 million Mean Cycles Between Failures.',
        features: ['0.9s - 3s Speed', '100% Duty Cycle', 'Telescopic/Articulated Arm', 'Manual Release Key'],
        tag: 'Traffic Control',
        iconType: 'barrier',
      },
      {
        name: 'Long-Range UHF RFID Windshield Reader',
        desc: 'Circularly polarized 9dBi antenna reading passive windshield RFID tags up to 12 meters away, allowing authorized vehicles to pass without stopping.',
        features: ['8m - 12m Read Range', 'Wiegand / TCP/IP Output', 'IP67 Weatherproof', 'Anti-Collision Protocol'],
        tag: 'Hands-Free Access',
        iconType: 'shield',
      },
      {
        name: 'Heavy-Duty Automatic Sliding Gate Motors',
        desc: 'Oil-bath gearmotor designed to effortlessly automate heavy industrial sliding gates weighing from 800 kg up to 2,500 kg with soft start/stop.',
        features: ['Up to 2500 kg Gate', 'Remote Control Keyfobs', 'Mechanical Limit Switches', 'Battery Backup Ready'],
        tag: 'Heavy Perimeter',
        iconType: 'barrier',
      },
      {
        name: 'Pedestrian Optical Flap Barriers & Turnstiles',
        desc: 'SUS304 stainless steel optical flap turnstiles with infrared anti-tailgating sensors, bi-directional throughput, and LED directional passage indicators.',
        features: ['Anti-Tailgating IR', 'SUS304 Stainless Steel', '35 Persons/Min Flow', 'Face ID / RFID Ready'],
        tag: 'Pedestrian Flow',
        iconType: 'users',
      },
      {
        name: 'Dual Ground Loop Detector & Anti-Crush Photocells',
        desc: 'Magnetic vehicle mass presence loop embedded under asphalt paired with active infrared safety photo-beams to guarantee zero arm drop on vehicles.',
        features: ['Underground Inductive Loop', 'Active Safety Photo-beam', 'Auto-Reverse on Obstacle', 'Rubber Bumper Strip'],
        tag: 'Anti-Crush Safety',
        iconType: 'shield',
      },
      {
        name: 'Hydraulic Road Blockers & Automatic Bollards',
        desc: 'K4/K12 impact rated crash-tested hydraulic road bollards and tire killers for high-security defense installations, embassies, and data centers.',
        features: ['Impact Rated Steel', '1.5s Emergency Rise', 'Hydraulic Drive Unit', 'Integrated LED Flasher'],
        tag: 'High Security',
        iconType: 'barrier',
      },
    ],
    applicationsList: [
      {
        title: 'IT Tech Parks & Corporate Campuses',
        desc: 'High-speed hands-free employee vehicle entry paired with sleek lobby turnstiles for badge/face access.',
        tags: ['Boom Barriers', 'UHF Windshield', 'Flap Barriers', 'Visitor Logs'],
        iconType: 'office',
      },
      {
        title: 'Gated Residential Townships & Apartments',
        desc: 'Secured resident car lanes, visitor intercom screening, and automated sliding gates for community perimeters.',
        tags: ['Resident RFID', 'Guest Verification', 'Boom Barriers', 'Swing Gates'],
        iconType: 'home',
      },
      {
        title: 'Logistics Depots & Factory Gates',
        desc: 'Heavy-duty barriers managing multi-axle freight trucks, container chassis, and automated weighbridge integration.',
        tags: ['6m Barrier Arms', 'Truck Sensors', 'Sliding Gates', 'ANPR Cameras'],
        iconType: 'warehouse',
      },
    ],
    processSteps: [
      { step: 1, title: 'Traffic Flow & Civil Assessment', desc: 'Surveying road width, vehicle queuing volume, civil foundation depth, and power supply points.' },
      { step: 2, title: 'Civil Foundation & Loop Cutting', desc: 'Concrete plinth casting, underground inductive loop slotting, and protective PVC conduit routing.' },
      { step: 3, title: 'Barrier Mounting & Calibration', desc: 'Bolting barrier chassis, spring tension balancing, speed fine-tuning, and UHF antenna alignment.' },
      { step: 4, title: 'Tag Issuance & Safety Testing', desc: 'Vehicle RFID windshield tag assignment, anti-crush obstacle testing, and operational handover.' },
    ],
    faqs: [
      {
        question: 'How does hands-free UHF RFID vehicle entry work for residential and tech park gates?',
        answer: 'A passive adhesive UHF RFID tag is applied to the inside of the vehicle windshield. As the car approaches within 8-12 meters, the high-gain overhead antenna detects the valid tag code, validates authorization, and opens the boom barrier before the vehicle comes to a stop.',
      },
      {
        question: 'What happens if a vehicle stops right under the boom barrier arm?',
        answer: 'The barrier arm will never descend while a vehicle is underneath. Every installation integrates dual failsafe protections: an inductive ground loop detector sensing the metal chassis and an active infrared photoelectric safety beam. The barrier only closes once the vehicle has completely cleared the zone.',
      },
      {
        question: 'Can the barrier be operated during power outages?',
        answer: 'Yes. All our boom barriers feature an emergency mechanical clutch release with a dedicated key allowing instantaneous manual operation. Furthermore, we offer continuous 24V DC battery backup packs that provide up to 500 automatic cycles during power cuts.',
      },
      {
        question: 'Can your turnstiles and flap barriers integrate with our existing employee ID cards?',
        answer: 'Yes. Our turnstile controller interfaces natively with all standard formats including Mifare 13.56MHz, EM 125kHz, HID iClass, QR codes, and visible-light Face Recognition readers via Wiegand and TCP/IP protocols.',
      },
    ],
    compliance: [
      { standard: 'IP65 Outdoor Rated', description: 'Chassis sealed against torrential monsoon rain, dust, and coastal humidity' },
      { standard: 'CE Machinery Directive', description: 'Certified compliance with European safety standards for automatic industrial doors and barriers' },
      { standard: '5-Million MCBF', description: 'Tested for continuous heavy-duty operation without motor overheating or gear degradation' },
    ],
  },

  // 4. Access Control
  'access-control': {
    heroBadge: 'PHYSICAL SECURITY • TCP/IP MULTI-DOOR CONTROLLERS • 1200 LBS EM LOCKS • ELEVATOR ACCESS',
    heroVisualBadge: 'FAIL-SAFE MAGNETIC LOCKS',
    heroVisualGrade: 'ENTERPRISE PHYSICAL ACCESS',
    heroVisualNotes: '600 / 1200 lbs Holding Force | Elevator Control (32 Floors) | Fire Interlock Auto-Release',
    heroStats: [
      { value: '1200 lbs', label: 'Magnetic Holding Force', iconType: 'lock' },
      { value: '32 Floors', label: 'Elevator Floor Access', iconType: 'building' },
      { value: '< 0.1s', label: 'Door Unlock Response', iconType: 'cpu' },
      { value: '100% Fail-Safe', label: 'Fire Alarm Auto-Release', iconType: 'shield' },
    ],
    detailedOverview: [
      'Physical access control is the cornerstone of facility security, establishing who can enter specific doors, server rooms, executive offices, and floors, and precisely when they are permitted.',
      'Best Technology delivers enterprise-grade physical access architecture utilizing TCP/IP multi-door controllers, heavy-duty 600 lbs and 1200 lbs electromagnetic (EM) locks, smart RFID hotel locks, elevator floor restrictors, and high-security safes.',
      'All door installations are integrated with building fire alarm panels for automatic emergency unlocking, anti-passback rules, multi-door interlocking, and centralized web-based cardholder management.',
    ],
    configurator: {
      unitLabel: 'Secured Doors & Access Points',
      defaultUnits: 4,
      minUnits: 1,
      maxUnits: 32,
      unitStep: 1,
      basePricePerUnit: 14500,
      tiers: [
        { id: 'standard', name: 'Standalone Card + 600 lbs EM Lock', multiplier: 1.0, desc: 'Mifare Contactless Reader, 600 lbs Lock, Stainless Push-to-Exit & 12V 5A Battery Supply' },
        { id: 'pro', name: 'Network Multi-Door Panel (TCP/IP)', multiplier: 1.6, desc: 'Centralized 2/4-Door TCP/IP Controller, 1200 lbs EM Lock, Anti-Passback & Fire Alarm Release' },
        { id: 'enterprise', name: 'Biometric + Elevator Access Suite', multiplier: 2.4, desc: '3D Face ID Door Reader, 1200 lbs EM Locks, Elevator Floor Restrictor (up to 32 floors) & Airlock' },
      ],
      addons: [
        { id: 'fire', label: 'Fire Alarm Interlock Relays (Emergency Auto-Unlock)', price: 3200, desc: 'Mandatory life-safety relay that instantly de-energizes all locks when fire alarm sounds' },
        { id: 'elevator', label: 'Elevator Floor Controller Board (8 to 32 Floors)', price: 18500, desc: 'Restricts elevator floor button access to authorized smart card or face scan holders' },
        { id: 'amc', label: '1-Year Comprehensive Lock & Controller AMC', price: 4500, desc: 'Quarterly lock alignment checks, power supply battery tests, firmware updates & rapid fixes' },
      ],
    },
    architectureNodes: [
      {
        step: '01',
        title: 'Credential Verification',
        subtitle: 'Card / Face / PIN',
        desc: 'Mifare 13.56MHz encrypted RFID reader, touchless 3D Face ID, or high-security dual-custody PIN.',
        iconType: 'users',
      },
      {
        step: '02',
        title: 'TCP/IP Door Controller',
        subtitle: 'Authorization Rules',
        desc: '32-bit ARM processor panel validates time-zone privileges, door schedules, and anti-passback in < 0.05s.',
        iconType: 'cpu',
      },
      {
        step: '03',
        title: 'Electromagnetic Holding Lock',
        subtitle: '1200 lbs Holding Force',
        desc: 'Heavy-duty anodized magnetic lock secures door with zero residual magnetism and door status monitoring.',
        iconType: 'lock',
      },
      {
        step: '04',
        title: 'Life Safety Fire Override',
        subtitle: 'Fail-Safe Auto-Release',
        desc: 'Connected to building Fire Alarm Panel and emergency break-glass to immediately drop power during fire.',
        iconType: 'shield',
      },
    ],
    comparisonTable: [
      { parameter: 'Lock Holding Force', standard: '600 lbs (280 kg) Force', pro: '1200 lbs (500 kg) Force', enterprise: '1200 lbs Dual Magnetic Locks' },
      { parameter: 'Controller Topology', standard: 'Standalone Single-Door', pro: 'TCP/IP 4-Door Network Panel', enterprise: 'Central Multi-Site Server Cluster' },
      { parameter: 'Elevator Floor Control', standard: 'Not Included', pro: 'Optional Add-on Module', enterprise: 'Up to 32 Floors per Elevator Car' },
      { parameter: 'Fire Alarm Release', standard: 'Manual Break-Glass Box', pro: 'Auto-Relay from Fire Alarm Panel', enterprise: 'Dual Failsafe: Panel + Break Glass' },
      { parameter: 'Anti-Passback Logic', standard: 'Not Supported', pro: 'Single Door In/Out Antipassback', enterprise: 'Global Area-Wide Antipassback' },
      { parameter: 'Audit Trail Storage', standard: '5,000 Local Logs', pro: '100,000 Network Logs', enterprise: 'Unlimited SQL Server Real-Time Audit' },
    ],
    caseStudy: {
      title: 'Enterprise 18-Door Access & Server Room Airlock Interlocking',
      clientType: 'FinTech Software Development Center & Data Facility',
      location: 'Electronics City, Bangalore',
      challenge: 'Strict regulatory data compliance requiring multi-factor authentication into server areas, anti-tailgating prevention, and elevator floor isolation for different client teams.',
      solution: 'Configured centralized TCP/IP multi-door controllers, 1200 lbs EM locks with door status sensors, elevator floor restriction modules, and two-door interlocking airlocks for server vaults.',
      outcome: 'Achieved 100% compliance during ISO 27001 audit, prevented all unauthorized cross-floor visits, and delivered seamless integration with building life-safety fire systems.',
      metric: '18 Secured Doors • 450 Staff • 32 Elevator Floors',
    },
    hardwareList: [
      {
        name: 'Multi-Door TCP/IP Network Access Controller',
        desc: 'Centralized 2-Door, 4-Door, or 8-Door network controller panel housed in a lockable metal cabinet with built-in battery charging power supply.',
        features: ['TCP/IP & RS485', 'Wiegand 26/34 / OSDP', '100,000 Card Capacity', 'Anti-Passback Logic'],
        tag: 'Control Center',
        iconType: 'cpu',
      },
      {
        name: 'Heavy-Duty 600 lbs & 1200 lbs EM Locks',
        desc: 'Fail-safe electromagnetic locks with anodized aluminum casing, zero residual magnetism, door status sensor relay, and bi-color LED indicator.',
        features: ['280kg / 500kg Holding Force', 'Fail-Safe (Power to Lock)', 'Door Status Sensor', 'UL Listed Magnetics'],
        tag: 'Door Locking',
        iconType: 'lock',
      },
      {
        name: 'Elevator Floor Access Management Controller',
        desc: 'Restricts elevator cabin button presses to authorized cardholders, unlocking only their permitted floors (scalable up to 32 floors per car).',
        features: ['Up to 32 Floors/Car', 'Floor-wise Permissions', 'Visitor Floor Passes', 'Fire Override Relay'],
        tag: 'Vertical Transit',
        iconType: 'building',
      },
      {
        name: 'Commercial Smart Hotel Keycard Door Locks',
        desc: 'Sleek stainless steel RFID contactless hotel locks with emergency mechanical key, audit trail log, and seamless PMS integration.',
        features: ['Mifare 13.56MHz', 'Anti-Friction Latch', 'Emergency Key Override', 'PMS Hotel Software'],
        tag: 'Hospitality',
        iconType: 'lock',
      },
      {
        name: 'Emergency Break-Glass & Stainless Steel Exit Buttons',
        desc: 'Green emergency break-glass boxes for manual power cut to EM locks, paired with illuminated stainless steel push-to-exit buttons.',
        features: ['Double Pole Microswitch', 'Protective Flip Cover', 'Illuminated Exit Touch', 'Surface/Flush Mount'],
        tag: 'Life Safety',
        iconType: 'shield',
      },
      {
        name: 'Biometric & Electronic High-Security Safes',
        desc: 'Heavy-gauge reinforced solid steel safes equipped with motorized locking bolts, fingerprint biometric access, and dual-custody audit keys.',
        features: ['Laser Cut Solid Steel', 'Biometric / PIN Access', 'Internal LED Light', 'Floor/Wall Anchor Holes'],
        tag: 'Valuables Protection',
        iconType: 'lock',
      },
    ],
    applicationsList: [
      {
        title: 'IT Data Centers & Server Rooms',
        desc: 'Strict multi-factor authentication (Card + Fingerprint/Face) with dual-custody access and door-ajar alarms.',
        tags: ['Server Racks', '1200 lbs EM Locks', 'Anti-Passback', 'Audit Trails'],
        iconType: 'office',
      },
      {
        title: 'Hotels, Resorts & Premium Hospitality',
        desc: 'Keycard access across guest rooms, staff service corridors, elevators, spa areas, and back-of-house storage.',
        tags: ['RFID Door Locks', 'Elevator Passes', 'Master Keying', 'Guest PMS'],
        iconType: 'building',
      },
      {
        title: 'Pharmaceutical & Cleanroom Labs',
        desc: 'Two-door interlocking (airlock) systems ensuring one door must close and seal before the next door can open.',
        tags: ['Airlock Interlocking', 'Touchless Wave Exit', 'Magnehelic Ties', 'EM Locks'],
        iconType: 'warehouse',
      },
    ],
    processSteps: [
      { step: 1, title: 'Door & Hardware Audit', desc: 'Surveying door materials (wood, glass, metal, fire doors), frame headers, and swing direction.' },
      { step: 2, title: 'Controller & Bracket Mount', desc: 'Installing Z&L brackets for glass/wood doors, mounting EM locks, and housing controller cabinets.' },
      { step: 3, title: 'Cabling & Fire Interlock Wiring', desc: 'Running Cat6 and 12V multi-core copper cables and tying into the building fire alarm master relay.' },
      { step: 4, title: 'Access Privilege Configuration', desc: 'Programming user card numbers, setting door schedules, testing emergency release, and handover.' },
    ],
    faqs: [
      {
        question: 'What happens to electromagnetic (EM) door locks during a power failure or fire emergency?',
        answer: 'Our EM locks operate on a fail-safe principle (they require electric power to remain locked). During a power outage or when the fire alarm is triggered, power to the lock is automatically interrupted, instantaneously unlocking all doors so occupants can evacuate safely.',
      },
      {
        question: 'Can you install electromagnetic locks on frameless glass doors?',
        answer: 'Yes! We use specialized architectural U-brackets and glass clamp hardware designed specifically for 10mm to 12mm frameless tempered glass doors, providing clean aesthetics without drilling through the glass.',
      },
      {
        question: 'What is anti-passback and why is it important in access control?',
        answer: 'Anti-passback prevents an employee from scanning their card to enter a door and then handing the card back to a colleague behind them. The system requires an "out" punch before that card can be used for another "in" punch.',
      },
      {
        question: 'Can one smart card work for both door access, elevator access, and canteen/attendance?',
        answer: 'Yes. We utilize standardized Mifare 13.56MHz contactless smart cards with multiple encrypted sectors. A single card can unlock your office door, operate your permitted elevator floor, record your attendance, and handle cashless canteen payments.',
      },
    ],
    compliance: [
      { standard: 'UL 294 Listed', description: 'Underwriters Laboratories standard for access control system units and components' },
      { standard: 'Fail-Safe Fire Code', description: 'Mandatory automatic release upon fire alarm trigger per Indian NBC guidelines' },
      { standard: 'OSDP v2 Certified', description: 'Open Supervised Device Protocol ensuring encrypted bidirectional communication between readers and panels' },
    ],
  },

  // 5. Time & Attendance - Access Control
  'time-attendance-access': {
    heroBadge: 'BIOMETRICS & HRMS • TOUCHLESS 3D FACE ID • REAL-TIME PAYROLL ERP SYNC',
    heroVisualBadge: 'VISIBLE LIGHT 3D FACE RECOGNITION',
    heroVisualGrade: 'MULTI-BIOMETRIC TERMINAL',
    heroVisualNotes: '< 0.2s Verification | Anti-Spoof Dual Lens | Auto Sync with Tally, SAP & Zoho',
    heroStats: [
      { value: '< 0.2s', label: 'Face Recognition Speed', iconType: 'cpu' },
      { value: '50,000', label: 'Face User Capacity', iconType: 'users' },
      { value: 'Zero', label: 'Buddy Punching Risk', iconType: 'shield' },
      { value: '100% Sync', label: 'Real-Time ERP Integration', iconType: 'award' },
    ],
    detailedOverview: [
      'Eliminate buddy punching, manual muster rolls, and inaccurate overtime calculations with modern multi-biometric attendance and workforce management solutions from Best Technology.',
      'Our systems combine visible light 3D facial recognition, optical fingerprint scanners, palm vein sensors, and smart RFID cards with instant real-time synchronization to Tally Prime, SAP, Zoho People, GreytHR, and custom ERP databases.',
      'Designed with deep-learning AI algorithms, our touchless terminals verify employees in under 0.2 seconds even in complete darkness, with face masks on, or in harsh factory workshop lighting conditions.',
    ],
    configurator: {
      unitLabel: 'Biometric Attendance Terminals',
      defaultUnits: 2,
      minUnits: 1,
      maxUnits: 20,
      unitStep: 1,
      basePricePerUnit: 16500,
      tiers: [
        { id: 'standard', name: 'High-Precision Fingerprint & RFID', multiplier: 1.0, desc: '500 DPI Optical Sensor, Scratch-Resistant Prism, 3,000 Users, USB & LAN Software' },
        { id: 'pro', name: 'Touchless Visible Light 3D Face ID', multiplier: 1.6, desc: '0.2s AI Face Recognition, Anti-Spoofing Dual Cameras, Mask Detection & Cloud Server Sync' },
        { id: 'enterprise', name: 'Multi-Biometric + ERP Auto-Sync', multiplier: 2.3, desc: '50,000 Faces, Palm Vein + Face ID, Automated Tally/SAP/Zoho REST API Sync & Mobile App' },
      ],
      addons: [
        { id: 'erp', label: 'Automated Tally Prime / SAP / Zoho Real-Time Sync Utility', price: 6500, desc: 'Background service automatically pushing daily punch records directly to payroll' },
        { id: 'ups', label: 'Dedicated 4-Hour Battery Backup UPS for Terminals', price: 3200, desc: 'Ensures uninterrupted punch logging during shift changes and power cuts' },
        { id: 'amc', label: '1-Year Annual Maintenance & Payroll Support Contract', price: 4500, desc: 'Shift roster updates, biometric template backups, software upgrades & rapid support' },
      ],
    },
    architectureNodes: [
      {
        step: '01',
        title: '3D Face & Palm Capture',
        subtitle: 'Dual Camera Optics',
        desc: 'Dual stereoscopic visible light + infrared cameras capture 300+ facial vectors in under 0.2 seconds.',
        iconType: 'users',
      },
      {
        step: '02',
        title: 'AI Anti-Spoof Liveness',
        subtitle: 'Fraud Elimination',
        desc: 'Deep learning verifies real human skin texture and pupillary reflections, rejecting printed photos or videos.',
        iconType: 'shield',
      },
      {
        step: '03',
        title: 'Local Flash Memory Buffer',
        subtitle: '100% Offline Capability',
        desc: 'Stores up to 100,000 punch records locally in non-volatile memory with battery backup during network cuts.',
        iconType: 'cpu',
      },
      {
        step: '04',
        title: 'Automated Payroll Injection',
        subtitle: 'Tally, SAP & Zoho Sync',
        desc: 'Real-time background utility injects punch logs into your payroll ERP, computing late penalties and overtime.',
        iconType: 'award',
      },
    ],
    comparisonTable: [
      { parameter: 'Verification Technology', standard: 'Optical Fingerprint (500 DPI)', pro: 'Visible Light 3D Face ID', enterprise: '3D Face ID + Palm Vein + RFID' },
      { parameter: 'Verification Speed', standard: '0.8 to 1.2 Seconds', pro: '< 0.3 Seconds Touchless', enterprise: '< 0.2 Seconds Walkthrough' },
      { parameter: 'User Template Capacity', standard: '3,000 Fingerprints', pro: '10,000 Face Models', enterprise: '50,000 Face & 100,000 Card Capacity' },
      { parameter: 'Mask & Lighting Tolerance', standard: 'Not Applicable', pro: 'Works with Masks & Low Light', enterprise: 'Mask, Specs, Pitch Darkness & Direct Sun' },
      { parameter: 'Payroll Software Sync', standard: 'Manual Excel / USB Export', pro: 'Automated LAN Auto-Push', enterprise: 'Real-Time REST API (Tally, SAP, Zoho)' },
      { parameter: 'Mobile Attendance', standard: 'Not Included', pro: 'Optional Mobile Punch', enterprise: 'Included GPS Geofenced Selfie Mobile App' },
    ],
    caseStudy: {
      title: 'Touchless Multi-Shift Face ID Deployment for 1,200 Factory Workers',
      clientType: 'Precision Automotive Engineering Plant',
      location: 'Hosur Industrial Estate, Tamil Nadu',
      challenge: 'Manual fingerprint machines caused queues of 25 minutes during 3 rotating shift changes; workers with oil, grease, and metal shavings on hands experienced frequent punch failures.',
      solution: 'Replaced fingerprint units with 6 high-speed visible-light 3D Face Recognition terminals at turnstiles and deployed automated background Tally/SAP payroll middleware.',
      outcome: 'Shift changeover queuing dropped from 25 minutes to under 3 minutes; buddy punching was 100% eliminated; and HR payroll monthly reconciliation time reduced from 4 days to 2 hours.',
      metric: '6 Terminals • 1,200 Workers • 3 Rotating Shifts',
    },
    hardwareList: [
      {
        name: 'Visible Light 3D Face Recognition Terminal',
        desc: 'High-speed AI terminal with dual stereoscopic cameras, 5-inch IPS touch screen, and live face detection that rejects printed photos and digital screens.',
        features: ['< 0.2s Recognition', '50,000 Face Capacity', 'Anti-Spoofing Liveness', 'Works in Complete Darkness'],
        tag: 'Touchless Face ID',
        iconType: 'users',
      },
      {
        name: 'Heavy-Duty Optical Fingerprint & RFID Terminal',
        desc: 'Industrial biometric terminal featuring a 500 DPI scratch-resistant optical prism that easily reads dry, moist, or rough artisan fingertips.',
        features: ['500 DPI Optical Sensor', '100,000 Log Buffer', 'Mifare / EM Card Slot', 'Built-in Door Relay'],
        tag: 'Fingerprint Biometrics',
        iconType: 'shield',
      },
      {
        name: 'Touchless Palm Vein & Iris Recognition Terminal',
        desc: 'Subdermal vascular pattern and iris scanner designed for medical sterile operating theatres, food processing plants, and cleanrooms.',
        features: ['Zero Contact Hygiene', 'Vascular Pattern Sensor', 'Immune to Skin Damage', 'High Accuracy 0.0001% FAR'],
        tag: 'Sterile Environments',
        iconType: 'cpu',
      },
      {
        name: 'Cloud Attendance & Roster Management Software',
        desc: 'Comprehensive web-based HR portal handling complex 24/7 rotating shifts, auto-shift assignment, late-punch rules, and overtime calculations.',
        features: ['Multi-Shift Rosters', 'Automated Late Deductions', 'Overtime Hours Tracking', 'Leave & Holiday Calendar'],
        tag: 'HR Management',
        iconType: 'award',
      },
      {
        name: 'Automated ERP & Payroll Sync Utility',
        desc: 'Seamless middleware that pushes punch records in real time into Tally Prime, SAP ECC/S4HANA, Zoho People, Keka, and SQL databases.',
        features: ['Real-Time Auto Push', 'Direct Tally XML Sync', 'REST API Support', 'Custom Excel Summaries'],
        tag: 'Payroll Integration',
        iconType: 'cpu',
      },
      {
        name: 'Mobile Attendance App with GPS Geofencing',
        desc: 'Smartphone app enabling sales teams and field workers to clock in with geo-tagged and timestamped selfie verification.',
        features: ['GPS Geofence Radius', 'Selfie Face Verification', 'Offline Punch Caching', 'Manager Approval Flow'],
        tag: 'Field Workforce',
        iconType: 'users',
      },
    ],
    applicationsList: [
      {
        title: 'Corporate Offices & IT Organizations',
        desc: 'Fast, touchless walkthrough face recognition at reception turnstiles with seamless automated payroll sync.',
        tags: ['Touchless Face ID', 'Shift Management', 'Zoho Sync', 'Mobile App'],
        iconType: 'office',
      },
      {
        title: 'Manufacturing Plants & Textile Mills',
        desc: 'Durable terminals supporting thousands of worker punches within short shift changes without bottlenecks.',
        tags: ['Rugged Terminals', 'Fingerprint', 'Multi-Shift Rosters', 'Overtime Auditing'],
        iconType: 'warehouse',
      },
      {
        title: 'Hospitals & Medical Laboratories',
        desc: 'Touchless palm vein and masked face verification ensuring sterile hygiene protocols are maintained.',
        tags: ['Mask Recognition', 'Touchless Hygiene', '24/7 Doctors Roster', 'Door Access'],
        iconType: 'building',
      },
    ],
    processSteps: [
      { step: 1, title: 'Shift Policy & Roster Study', desc: 'Analyzing plant shift rules, grace periods, lunch breaks, overtime criteria, and payroll export formats.' },
      { step: 2, title: 'Terminal Mounting & Network Setup', desc: 'Installing terminals at optimal eye-level height with dedicated Cat6 PoE or Wi-Fi and power backup.' },
      { step: 3, title: 'Employee Enrollment & Face Capture', desc: 'Batch enrolling employees with high-resolution 3D face models, fingerprints, and designated ID numbers.' },
      { step: 4, title: 'Payroll Sync Testing & Go-Live', desc: 'Verifying punch accuracy, testing automated Tally/Excel sync schedules, and training HR staff.' },
    ],
    faqs: [
      {
        question: 'Can an employee fool the face recognition terminal using a printed photograph or smartphone picture?',
        answer: 'No. Our visible-light face recognition terminals utilize dual stereoscopic RGB and infrared cameras with active AI liveness detection. The system inspects skin micro-texture, pupillary light reflections, and 3D facial depth contours, immediately rejecting printed 2D photos, tablets, or recorded video screens.',
      },
      {
        question: 'Does the facial recognition terminal work if an employee is wearing a face mask or glasses?',
        answer: 'Yes. The deep-learning neural network algorithm evaluates 300+ facial landmark points predominantly in the ocular, forehead, and nasal bridge zones, delivering instantaneous accurate recognition in under 0.3 seconds even when wearing surgical masks, safety helmets, or spectacles.',
      },
      {
        question: 'How does the attendance system push daily punch records to our payroll software?',
        answer: 'Best Technology supplies an automated background sync service that runs continuously on your local server or in the cloud. It converts punch timestamps directly into your required payroll format (e.g. Tally XML, SQL ODBC, Excel, or direct REST API payloads to Zoho / SAP / Keka) without manual export effort.',
      },
      {
        question: 'What happens if our factory loses its internet connection during shift change?',
        answer: 'The terminals function completely offline. Each device has an internal non-volatile flash memory that stores up to 100,000 punch records. Once internet connectivity is restored, the terminal automatically uploads all queued records to the cloud server with zero data loss.',
      },
    ],
    compliance: [
      { standard: 'ISO 27001 Data Privacy', description: 'All biometric templates are stored as irreversible cryptographic hash models' },
      { standard: 'CE & RoHS Certified', description: 'Certified lead-free eco-friendly electronics with industrial electromagnetic immunity' },
      { standard: 'Indian Labor Law Audit', description: 'Generates tamper-proof Form 25 / Form 28 attendance registers required for statutory factory audits' },
    ],
  },

  // 6. Special Cameras
  'special-cameras': {
    heroBadge: 'SPECIAL SURVEILLANCE • ANPR / LPR • RADIOMETRIC THERMAL • SOLAR 4G • 360° FISHEYE',
    heroVisualBadge: 'BI-SPECTRUM RADIOMETRIC THERMAL',
    heroVisualGrade: 'ENTERPRISE SPECIALIZED VISION',
    heroVisualNotes: '99.2% ANPR OCR Accuracy | -20°C to 550°C Fire Flare Detection | 4G Solar Off-Grid Ready',
    heroStats: [
      { value: '99.2%', label: 'ANPR Capture Accuracy', iconType: 'award' },
      { value: '-20°C–550°C', label: 'Radiometric Thermal', iconType: 'flame' },
      { value: '120 km/h', label: 'Max Vehicle Speed', iconType: 'camera' },
      { value: '100% Off-Grid', label: 'Solar 4G Autonomy', iconType: 'cpu' },
    ],
    detailedOverview: [
      'Standard CCTV cameras cannot meet the rigorous demands of automatic vehicle license plate recognition at speed, early thermal fire warning in warehouses, or off-grid monitoring where power and network cables do not exist.',
      'Best Technology deploys specialized deep-learning computer vision systems including Automatic Number Plate Recognition (ANPR / LPR), bi-spectrum radiometric thermal cameras, off-grid 4G solar PTZs, 360° fisheye panoramic units, and AI people-counting systems.',
      'Engineered with onboard edge GPU processors, these specialized cameras analyze video streams directly on the camera hardware in real time, delivering instantaneous automated actions such as barrier opening or fire alarms.',
    ],
    configurator: {
      unitLabel: 'Specialized AI Camera Nodes',
      defaultUnits: 2,
      minUnits: 1,
      maxUnits: 16,
      unitStep: 1,
      basePricePerUnit: 32000,
      tiers: [
        { id: 'standard', name: '4K Deep-Learning ANPR / LPR', multiplier: 1.0, desc: 'Vehicle License Plate Capture up to 120 km/h, Indian Plate OCR, Motorized Varifocal Lens & Relay' },
        { id: 'pro', name: '12MP 360° Panoramic Fisheye + AI People Count', multiplier: 1.55, desc: 'Ceiling Zero-Blindspot Fisheye, Client Dewarping & 3D Stereoscopic Retail Footfall Analytics' },
        { id: 'enterprise', name: 'Bi-Spectrum Thermal / 4G Solar PTZ', multiplier: 2.4, desc: 'Radiometric -20°C–550°C Early Fire Detection or Autonomous 80W Solar 4G PTZ with 150m IR' },
      ],
      addons: [
        { id: 'relay', label: 'Barrier Relay Integration Module for ANPR Whitelists', price: 4500, desc: 'Automatically triggers boom barrier open on recognized white-listed vehicle plates' },
        { id: 'solar', label: 'Heavy-Duty 80W Solar Kit with 30Ah LiFePO4 Battery', price: 14500, desc: 'Guarantees 5 days of uninterrupted camera operation through heavy monsoon clouds' },
        { id: 'amc', label: '1-Year AI Algorithm Calibration & Maintenance AMC', price: 6500, desc: 'Periodic OCR font updates, thermal sensor recalibration & lens cleaning service' },
      ],
    },
    architectureNodes: [
      {
        step: '01',
        title: 'Specialized Optical Capture',
        subtitle: 'Sensor Core',
        desc: 'Starlight ANPR lens with fast shutter (up to 1/100,000s), VOx radiometric thermal sensor, or 12MP fisheye lens.',
        iconType: 'camera',
      },
      {
        step: '02',
        title: 'Onboard Edge GPU Inference',
        subtitle: 'Deep-Learning OCR',
        desc: 'Embedded AI GPU processes raw frames in 20 milliseconds, recognizing license plate characters or heat spikes.',
        iconType: 'cpu',
      },
      {
        step: '03',
        title: 'Hardware Trigger Action',
        subtitle: 'Instant Physical Automation',
        desc: 'Triggers barrier opening relay, fires high-decibel acoustic siren strobes, or signals industrial FACP panels.',
        iconType: 'shield',
      },
      {
        step: '04',
        title: 'VMS Database & Cloud',
        subtitle: 'Audit & Telemetry',
        desc: 'Vehicle plate query logs, timestamped snapshot proofs, and thermal trend graphs streamed to central servers.',
        iconType: 'award',
      },
    ],
    comparisonTable: [
      { parameter: 'Target Application', standard: 'Vehicle ANPR / LPR Capture', pro: 'Retail People Count & 360° Room', enterprise: 'Industrial Thermal Fire / Solar 4G' },
      { parameter: 'Sensor Resolution', standard: '4K Ultra-HD (8MP) Starlight', pro: '12MP Panoramic Dewarp Sensor', enterprise: 'Bi-Spectrum Thermal (400x300 VOx + 4K)' },
      { parameter: 'AI Analytic Engine', standard: 'Indian State Plate OCR (120 km/h)', pro: '3D Binocular Human Footfall Depth', enterprise: 'Radiometric Thermal Flare Detection' },
      { parameter: 'Power & Connectivity', standard: 'PoE+ (IEEE 802.3at) / 12V DC', pro: 'Gigabit PoE+ Network Port', enterprise: '80W Solar Panel + 4G LTE SIM Slot' },
      { parameter: 'Direct Relay Trigger', standard: '1x Built-in Barrier Output Relay', pro: 'Audio I/O & Alarm In/Out', enterprise: 'Dual Dry Contact Relay + Modbus' },
      { parameter: 'Weather Resistance', standard: 'IP67 Outdoor Weatherproof', pro: 'IK10 Vandal + IP66 Ceiling', enterprise: 'IP67 Ruggedized Anti-Corrosion NEMA 4X' },
    ],
    caseStudy: {
      title: 'High-Speed ANPR Vehicle Tracking & 4G Solar Perimeter Monitoring',
      clientType: 'Large Logistics Warehousing Hub & Solar Power Park',
      location: 'NH-44 Highway Corridor & Krishnagiri, Tamil Nadu',
      challenge: 'Long highway vehicle queues at cargo gates; and frequent copper cable theft along a 3.5 km remote perimeter fence where running power lines was economically unfeasible.',
      solution: 'Installed 4 high-speed ANPR bullet cameras with automated barrier integration, and 6 standalone 4G solar-powered PTZ cameras equipped with AI line-crossing sirens along the remote fence.',
      outcome: 'Truck gate check-in time dropped from 3 minutes to under 4 seconds; and perimeter theft incidents dropped to absolute zero following automated sounder strobe warnings.',
      metric: '4 ANPR Lanes • 6 Solar 4G PTZs • 3.5 km Fence',
    },
    hardwareList: [
      {
        name: 'Deep-Learning ANPR / LPR Vehicle Cameras',
        desc: 'Specialized 4K Starlight bullet with motorized 8-32mm optical zoom lens and embedded OCR engine trained on Indian vehicle number plate formats.',
        features: ['Captures up to 120 km/h', 'Indian State Plate OCR', 'Vehicle Color & Make Recognition', 'Direct Barrier Trigger'],
        tag: 'Vehicle Intelligence',
        iconType: 'camera',
      },
      {
        name: 'Bi-Spectrum Radiometric Thermal Cameras',
        desc: 'Combines an uncooled VOx microbolometer thermal sensor with a high-res optical camera to detect early temperature spikes before flames appear.',
        features: ['-20°C to 550°C Detection', 'Early Fire Flare Alarm', 'VOx 400x300 Thermal Core', 'Bi-Spectrum Picture-in-Picture'],
        tag: 'Thermal Fire Guard',
        iconType: 'flame',
      },
      {
        name: 'Off-Grid 4G Solar-Powered PTZ Cameras',
        desc: 'Autonomous surveillance unit with an 80W monocrystalline solar panel, 30Ah lithium battery, 4G LTE SIM slot, and full 360° motorized pan-tilt-zoom.',
        features: ['Zero Wiring Needed', '5-Day Rainy Day Battery', '4G SIM Connectivity', '150m Night IR Distance'],
        tag: 'Off-Grid Standalone',
        iconType: 'cpu',
      },
      {
        name: '12MP 360° Fisheye Panoramic Panoramic Cameras',
        desc: 'Ceiling-mounted ultra-high-resolution panoramic camera providing complete 360° hemispherical room coverage with zero blind spots.',
        features: ['12MP Sensor Ultra HD', '360° Hemispheric View', 'Hardware Dewarping Modes', 'Built-in Mic & Speaker'],
        tag: 'Panoramic Coverage',
        iconType: 'camera',
      },
      {
        name: 'AI People Counting & Heat-Mapping Cameras',
        desc: 'Dual-lens 3D stereoscopic depth cameras accurately counting footfall and generating retail shopper heat maps while filtering out carts and children.',
        features: ['3D Binocular Vision', '98%+ Counting Accuracy', 'Retail Dwell Time Heatmap', 'Directional In/Out Filter'],
        tag: 'Business Analytics',
        iconType: 'users',
      },
      {
        name: 'AI DeepinView Perimeter Line-Crossing Cameras',
        desc: 'Edge-AI cameras with human/vehicle false-alarm filtering that reliably trigger alarms on boundary wall climbing and perimeter breaches.',
        features: ['Human / Vehicle Target Filter', 'Tripwire & Intrusion Zone', 'Acoustic Siren Strobe', 'Two-Way Audio Warning'],
        tag: 'Perimeter Defense',
        iconType: 'shield',
      },
    ],
    applicationsList: [
      {
        title: 'Toll Plazas & Gated Communities',
        desc: 'High-speed ANPR camera lanes that identify vehicles, check whitelist databases, and automate boom barrier opening.',
        tags: ['ANPR / LPR', 'White/Black List', 'Boom Barriers', 'Vehicle Audits'],
        iconType: 'building',
      },
      {
        title: 'Chemical Plants, Grain Silos & Battery Storage',
        desc: 'Continuous radiometric thermal monitoring to prevent spontaneous combustion in coal yards, silos, and battery energy storage (BESS).',
        tags: ['Radiometric Thermal', 'Overheat Alerts', 'Early Fire Warning', 'Hazardous Areas'],
        iconType: 'warehouse',
      },
      {
        title: 'Agricultural Farms, Solar Plants & Remote Sites',
        desc: 'Completely off-grid 4G solar cameras protecting solar installations, farm boundaries, and construction sites with zero grid power.',
        tags: ['Solar Powered', '4G LTE SIM', 'Remote Phone View', 'Anti-Theft PTZ'],
        iconType: 'home',
      },
    ],
    processSteps: [
      { step: 1, title: 'Optics & Environment Study', desc: 'Evaluating vehicle approach angles, thermal focal distance, ambient solar radiation, and field of view.' },
      { step: 2, title: 'Specialized Hardware Mounting', desc: 'Mounting ANPR cameras at optimal 15° to 30° angles and installing solar panel tilts facing true south.' },
      { step: 3, title: 'AI Algorithm Tuning & Whitelists', desc: 'Calibrating plate OCR confidence levels, temperature anomaly alarm thresholds, and line-crossing rules.' },
      { step: 4, title: 'System Integration & Testing', desc: 'Connecting ANPR outputs to barrier relays and tying thermal fire triggers into the master security console.' },
    ],
    faqs: [
      {
        question: 'Can the ANPR camera accurately read Indian vehicle number plates with customized fonts and dirt?',
        answer: 'Yes! Our ANPR cameras incorporate specialized deep-learning neural networks trained specifically on diverse Indian state vehicle plates (including standard white plates, yellow commercial, green EV plates, high-security HSRP, and non-standard fonts) with an accuracy exceeding 99%.',
      },
      {
        question: 'How early does a radiometric thermal camera detect an impending fire?',
        answer: 'Traditional smoke detectors only activate after visible smoke reaches the sensor. Radiometric thermal cameras detect microscopic temperature rises (down to 0.05°C increments) on equipment surfaces or combustible piles, sounding alarms minutes or even hours before actual combustion occurs.',
      },
      {
        question: 'How long will a 4G solar camera operate during consecutive rainy or cloudy days?',
        answer: 'Our solar camera systems are engineered with high-efficiency monocrystalline PV panels and high-capacity Lithium-iron phosphate (LiFePO4) battery packs designed for a 5-day continuous autonomy reserve, ensuring uninterrupted operation through monsoons and overcast weather.',
      },
      {
        question: 'What is client-side dewarping in a 360° fisheye camera?',
        answer: 'A fisheye lens captures a circular warped image. Client dewarping mathematically flattens this circular stream into natural panoramic, 4-split, or PTZ virtual camera views on your phone or PC monitor, letting operators look in any direction without any moving mechanical parts.',
      },
    ],
    compliance: [
      { standard: 'IP67 & IK10 Weather/Vandal Rated', description: 'Certified for harsh outdoor monsoon conditions and physical impact resistance' },
      { standard: 'ONVIF Profile S/G/T', description: 'Universal interoperability with all major third-party Video Management Systems (VMS)' },
      { standard: 'NDAA Compliant Sensors', description: 'Surveillance hardware utilizing certified high-security semiconductor silicon' },
    ],
  },

  // 7. IP / AHD Surveillance Solutions
  'ip-ahd-surveillance': {
    heroBadge: 'VIDEO SURVEILLANCE • 4K ULTRA HD • 24/7 FULL-COLOR NIGHT VISION • H.265+ ZIPSTREAM',
    heroVisualBadge: '4K ULTRA-HD SONY SENSOR',
    heroVisualGrade: 'ENTERPRISE SURVEILLANCE',
    heroVisualNotes: 'Sony STARVIS™ 8MP | EXIR 80m Night Vision | Smart H.265+ Storage Compression',
    heroStats: [
      { value: '4K UHD', label: 'Crystal-Clear 8MP Resolution', iconType: 'camera' },
      { value: '24/7 Color', label: 'ColorVu Day-Like Night Vision', iconType: 'award' },
      { value: '70% Savings', label: 'H.265+ Storage Compression', iconType: 'cpu' },
      { value: 'Instant', label: 'Mobile Cloud Live Streaming', iconType: 'shield' },
    ],
    detailedOverview: [
      'Reliable, crystal-clear visual surveillance is the first line of defense for any commercial facility, industrial complex, retail store, or residential property.',
      'Best Technology provides turnkey engineering for high-definition IP network cameras, 4K Ultra-HD systems, cost-effective Analog High-Definition (AHD/TVI), long-range wireless links, and intelligent 24/7 full-color night vision cameras.',
      'Our systems incorporate next-generation H.265+ smart video compression to reduce bandwidth and storage consumption by up to 70%, paired with enterprise NVRs, surveillance-grade hard drives, and encrypted mobile apps for live viewing from anywhere in the world.',
    ],
    configurator: {
      unitLabel: 'Camera Points & Channels',
      defaultUnits: 8,
      minUnits: 2,
      maxUnits: 64,
      unitStep: 2,
      basePricePerUnit: 4800,
      tiers: [
        { id: 'standard', name: 'Full HD 1080P Commercial (AHD/IP)', multiplier: 1.0, desc: '2MP High-Def Cameras, Smart IR 30m, 8-Ch Hybrid NVR/DVR, 1TB Seagate SkyHawk & Mobile App' },
        { id: 'pro', name: '4K Ultra-HD 24/7 ColorVu IP', multiplier: 1.65, desc: '4MP/8MP 4K IP Bullets & Domes, F1.0 Full-Color Night Vision, H.265+ PoE NVR, 2TB HDD & Audio' },
        { id: 'enterprise', name: 'Enterprise Multi-Building Matrix', multiplier: 2.35, desc: '4K Starlight Bullets, IK10 Domes, 32-Ch NVR with RAID Redundancy, 4TB HDD & Central CMS Wall' },
      ],
      addons: [
        { id: 'ups', label: 'Dedicated Online CCTV UPS Power Backup (4 Hours)', price: 4800, desc: 'Seamless battery backup ensuring recording continues during electricity cuts and power surges' },
        { id: 'amc', label: '1-Year Comprehensive Preventive AMC (Under 2-Hr Response)', price: 3800, desc: 'Quarterly lens cleaning, angle realignment, NVR health checks & free emergency visits' },
        { id: 'hdd', label: 'Upgraded Storage to 4TB HDD (60+ Days Retention)', price: 5800, desc: 'Surveillance-grade 24/7 continuous writing drive with AllFrame anti-vibration technology' },
      ],
    },
    architectureNodes: [
      {
        step: '01',
        title: 'Sony STARVIS™ 4K Capture',
        subtitle: 'Optical Front-End',
        desc: '3840x2160 Ultra-HD resolution with 120dB True WDR for perfect clarity against bright glare and shadows.',
        iconType: 'camera',
      },
      {
        step: '02',
        title: 'Pure Copper Cat6 PoE',
        subtitle: 'Structured Transmission',
        desc: 'Transmits power, digitized 4K video, and audio over a single Cat6 copper cable up to 250 meters.',
        iconType: 'wrench',
      },
      {
        step: '03',
        title: 'Smart H.265+ Compression',
        subtitle: 'Storage Optimization',
        desc: 'Next-gen Zipstream codec cuts storage and network bandwidth by 70%, maximizing hard drive retention.',
        iconType: 'cpu',
      },
      {
        step: '04',
        title: 'Dual 4K HDMI & Mobile App',
        subtitle: '24/7 Multi-Device View',
        desc: 'Ultra-low latency HDMI display on security control room monitors + encrypted P2P cloud streaming to smartphones.',
        iconType: 'shield',
      },
    ],
    comparisonTable: [
      { parameter: 'Camera Resolution', standard: '2MP Full HD (1920x1080)', pro: '4MP / 8MP 4K Ultra HD', enterprise: '8MP 4K Sony STARVIS™ Sensor' },
      { parameter: 'Night Vision Mode', standard: 'Black & White Smart IR (30m)', pro: '24/7 ColorVu Full-Color (40m)', enterprise: 'ColorVu + EXIR Laser IR (80m)' },
      { parameter: 'Storage Compression', standard: 'Standard H.264', pro: 'H.265+ Smart Zipstream', enterprise: 'H.265+ with Dual-Stream Encryption' },
      { parameter: 'Audio Recording', standard: 'Optional Microphone', pro: 'Built-in High Sensitivity Mic', enterprise: 'Two-Way Audio with Noise Cancellation' },
      { parameter: 'Storage Retention', standard: '15 to 20 Days (1TB HDD)', pro: '30 to 45 Days (2TB HDD)', enterprise: '60 to 90 Days (RAID Mirrored Array)' },
      { parameter: 'Vandal Protection', standard: 'IP66 Weatherproof', pro: 'IP67 + IK10 Vandal-Proof', enterprise: 'IP67 + IK10 + Lightning Surge 6kV' },
    ],
    caseStudy: {
      title: '64-Channel 4K IP Surveillance & Centralized Control Room',
      clientType: 'Major Commercial Showroom & Manufacturing Plant',
      location: 'Bangalore Highway, Hosur, Tamil Nadu',
      challenge: 'Sprawling 80,000 sq.ft facility with blind spots in raw material yards, high daytime sunlight contrast washing out entrances, and nighttime trespassers.',
      solution: 'Designed and installed a 64-channel 4K PoE network system with 24/7 ColorVu night vision cameras, pure copper shielded cabling, and a dual-display control room console.',
      outcome: 'Zero recorded blind spots, 45-day continuous 4K video retention, instantaneous vehicle plate identification at gates, and remote live viewing for top executives.',
      metric: '64 4K IP Cameras • 32TB Storage • 24/7 Control Room',
    },
    hardwareList: [
      {
        name: '4K Ultra-HD IP Network Bullet Cameras',
        desc: 'Industrial outdoor bullet cameras equipped with Sony STARVIS sensors, 80-meter EXIR infrared illumination, and 120dB True WDR for high-contrast sunlight.',
        features: ['8MP 4K Ultra-HD', 'Sony STARVIS CMOS', '80m Smart EXIR Night Vision', '120dB True WDR'],
        tag: 'Outdoor Perimeter',
        iconType: 'camera',
      },
      {
        name: 'IK10 Vandal-Proof Indoor/Outdoor Dome Cameras',
        desc: 'Discreet high-impact vandal-resistant dome cameras with built-in microphone for synchronized audio and wide 105° field of view.',
        features: ['IK10 Vandal-Resistant', 'Integrated Audio Mic', 'Wide 105° Viewing Angle', 'MicroSD Local Storage'],
        tag: 'Indoor & Corridors',
        iconType: 'shield',
      },
      {
        name: '24/7 ColorVu / Starlight Full-Color Night Cameras',
        desc: 'Revolutionary F1.0 super-aperture lenses capturing vibrant full-color video even in pitch-black midnight darkness without grainy infrared black & white.',
        features: ['F1.0 Super Aperture', '24/7 Vivid Color Video', 'Warm Supplementary Light', 'Target Human/Vehicle Filter'],
        tag: 'Night Vision',
        iconType: 'camera',
      },
      {
        name: 'Enterprise 4K PoE Network Video Recorders (NVR)',
        desc: 'Centralized 8, 16, 32, or 64-channel 4K NVRs with built-in Power over Ethernet (PoE+) ports, dual 4K HDMI outputs, and RAID-5 hard drive redundancy.',
        features: ['8 to 64 Channel PoE+', '4K Ultra-HD HDMI Display', 'H.265+ Compression', 'P2P Cloud Mobile View'],
        tag: 'Recording Hub',
        iconType: 'cpu',
      },
      {
        name: 'Cost-Effective High-Definition AHD / TVI Cameras',
        desc: 'High-definition 2MP to 5MP cameras transmitting uncompressed video over existing coaxial wiring, perfect for upgrading older analog setups.',
        features: ['Plug-and-Play Coaxial', 'Zero Network Latency', 'Up to 500m Transmission', 'Budget-Friendly Upgrade'],
        tag: 'Coaxial Retrofit',
        iconType: 'camera',
      },
      {
        name: 'Long-Range Wireless Bridge & Dual-Band Wi-Fi Cameras',
        desc: 'Outdoor 5GHz point-to-point wireless transmission links spanning up to 3 km, eliminating costly trenching across roadways and parking lots.',
        features: ['Up to 3 km Wireless Link', '5GHz Anti-Interference', 'Weatherproof IP67 Enclosure', 'Gigabit Throughput'],
        tag: 'Wireless Links',
        iconType: 'shield',
      },
    ],
    applicationsList: [
      {
        title: 'Corporate Offices & IT Workspaces',
        desc: 'High-definition coverage of reception areas, server rooms, workstation floors, and executive conference rooms.',
        tags: ['Vandal Domes', 'Audio Recording', 'PoE Structured Cabling', 'Mobile Cloud App'],
        iconType: 'office',
      },
      {
        title: 'Manufacturing Plants & Industrial Warehouses',
        desc: 'Rugged 4K bullet cameras with long-range night vision monitoring perimeter fences, loading bays, and machine lines.',
        tags: ['4K Bullets', 'Perimeter IR 80m', 'Loading Docks', 'Dust/Water Resistant'],
        iconType: 'warehouse',
      },
      {
        title: 'Retail Showrooms & Commercial Malls',
        desc: 'Discreet aesthetic cameras monitoring billing counters, customer aisles, inventory stockrooms, and customer parking.',
        tags: ['ColorVu Night Vision', 'Billing Audio Mics', 'Anti-Shoplifting', 'People Counting'],
        iconType: 'building',
      },
    ],
    processSteps: [
      { step: 1, title: 'Free On-Site Survey & Lens Mapping', desc: 'Inspecting lighting conditions, calculating focal lengths, identifying blind spots, and measuring cable pathways.' },
      { step: 2, title: 'Precision Structured Cabling', desc: 'Pulling 100% pure copper Cat6 network cables inside fire-retardant PVC conduits with proper patch panel terminations.' },
      { step: 3, title: 'Camera Mounting & Angle Focusing', desc: 'Rigid mounting, weather-sealed junction boxes, fine-tuning pan/tilt angles, and configuring H.265+ NVR bitrates.' },
      { step: 4, title: 'Mobile App Setup & Hands-On Training', desc: 'Connecting client smartphones and office PCs for cloud live viewing, configuring motion alerts, and handing over manuals.' },
    ],
    faqs: [
      {
        question: 'What is the main difference between IP cameras and AHD (coaxial) cameras?',
        answer: 'IP cameras are mini-computers that encode video digitally onboard and transmit it over Cat6 Ethernet cables with resolutions up to 4K (8MP) and smart AI analytics. AHD cameras transmit uncompressed analog signals over RG59 coaxial cables, which is extremely cost-effective when upgrading an older existing building without re-wiring.',
      },
      {
        question: 'How many days of CCTV recording will my hard drive store?',
        answer: 'With modern H.265+ smart compression, a standard 4-camera 2MP setup on a 2TB surveillance-grade hard drive stores approximately 25-30 days of continuous 24/7 video. By enabling smart motion-triggered recording, storage retention easily extends beyond 60 days.',
      },
      {
        question: 'Can I view the CCTV camera live video on my phone when I am traveling away from the office?',
        answer: 'Yes! All our installations include lifetime free P2P cloud mobile application access for both iOS and Android. You can view live video, play back past recorded footage, zoom in on details, and receive real-time push alerts on your phone from anywhere in the world.',
      },
      {
        question: 'What happens to the CCTV system during power outages and electricity cuts?',
        answer: 'We integrate dedicated CCTV online UPS power systems equipped with sealed lead-acid or lithium-ion batteries. These systems provide 2 to 8 hours of seamless battery backup, guaranteeing 100% uninterrupted recording through power blackouts and voltage fluctuations.',
      },
    ],
    compliance: [
      { standard: 'BIS IS 13252 (Part 1)', description: 'Mandatory Indian Bureau of Standards certification for electronic safety and video processing equipment' },
      { standard: 'IP67 & IK10 Ingress / Impact', description: 'Certified dust-tight, heavy rain monsoon immersion resistance, and vandal impact protection' },
      { standard: 'H.265+ / HEVC Compression', description: 'Compliant with ITU-T and ISO/IEC international video encoding standards' },
    ],
  },
};
