import React, { useState } from 'react';
import Seo from '@/components/Seo';
import { Link, useLocation, useParams } from '@umijs/max';
import styles from './homeDesign.less';
import SiteShell from './SiteShell';
import { COMPANY, SERVICES, BLOGS, BlogPost } from '@/constants/company';
import {
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  WhatsAppIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  NetworkIcon,
  SettingsIcon,
  UsersIcon,
  LightbulbIcon,
  HeadsetIcon,
  BarChartIcon,
  TrophyIcon,
  FolderCheckIcon,
  TargetIcon,
  EyeIcon,
  DiamondIcon,
  FlameIcon,
  CameraIcon,
  KeyIcon,
  RadioIcon,
  MonitorIcon,
  ApertureIcon,
  BarrierIcon,
  MapPinIcon,
  HandshakeIcon,
  FileTextIcon,
  LinkedInIcon,
  TrendingUpIcon,
  ProjectorIcon,
  PrinterIcon,
  LaptopIcon,
  CpuIcon,
  UserCheckIcon,
  WrenchIcon,
  RupeeIcon,
  ActivityIcon,
  ServerIcon,
  IntercomIcon,
  HomeIcon,
  OfficeIcon,
  WarehouseIcon,
  SchoolIcon,
  BuildingIcon,
  MinusIcon,
  PlusIcon,
  InfoIcon,
  MoonIcon,
  MicIcon,
  HardDriveIcon,
  YouTubeIcon,
  SendIcon,
  MessageSquareIcon,
  LockIcon,
  LayersIcon,
  ServerStackIcon,
  RfidCardIcon,
  SchoolBusIcon,
  SparklesIcon,
  ShieldAlertIcon,
  CableIcon,
  CloudUploadIcon,
  QrCodeIcon,
  ZapIcon,
  CheckCircle2Icon,
  CalendarIcon,
  SearchIcon,
  ShoppingBagIcon,
  ArrowLeftIcon,
} from '@/components/Icons';
import ITProductGraphic from '@/components/ITProductGraphic';
import HosurMapCanvas from '@/components/HosurMapCanvas';
import {
  HikvisionLogo,
  DahuaLogo,
  CpPlusLogo,
  UniviewLogo,
  TpLinkLogo,
  TrustedBrandsBar,
  CctvCompleteSolutionsBanner,
} from '@/components/PartnerBrands';

export const SectionPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const { id } = useParams<{ id?: string }>();

  // Services tab state
  const [serviceTab, setServiceTab] = useState<'all' | 'security' | 'it' | 'automation' | 'tracking'>('all');

  // Blog page states
  const [blogCategory, setBlogCategory] = useState<string>('All Posts');
  const [blogSearchQuery, setBlogSearchQuery] = useState<string>('');
  const [blogPageNum, setBlogPageNum] = useState<number>(1);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  // Contact form state
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formType, setFormType] = useState('IP/AHD Surveillance Solutions');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // CCTV Cost Calculator state
  const [calcSystem, setCalcSystem] = useState<'analog' | 'ip'>('analog');
  const [calcProperty, setCalcProperty] = useState<'home' | 'office' | 'warehouse' | 'school'>('home');
  const [calcCameras, setCalcCameras] = useState<number>(4);
  const [calcResolution, setCalcResolution] = useState<'2mp' | '4mp' | '5mp' | '8mp'>('2mp');
  const [calcCameraType, setCalcCameraType] = useState<'dome' | 'bullet' | 'ptz'>('dome');
  const [calcBrand, setCalcBrand] = useState<string>('Hikvision');
  const [calcStorage, setCalcStorage] = useState<'nohdd' | '1tb' | '2tb' | '4tb'>('1tb');
  const [calcFeatures, setCalcFeatures] = useState<string[]>(['night-vision']);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `*WEBSITE CONSULTATION INQUIRY*`,
      `Full Name: ${formName}`,
      `Company: ${formCompany || 'N/A'}`,
      `Phone: ${formPhone}`,
      `Email: ${formEmail || 'Not provided'}`,
      `Service Interested In: ${formType}`,
      `Message: ${formMessage || 'Interested in consultation and pricing.'}`,
    ].join('\n');

    window.open(`https://wa.me/918675248969?text=${encodeURIComponent(text)}`, '_blank');
    setFormSubmitted(true);
  };

  // =========================================================================
  // 1. ABOUT US PAGE (Matching media_1793191841447_e12807dc.jpg Mockup)
  // =========================================================================
    // =========================================================================
  // 1. ABOUT US PAGE (ENHANCED MODERN ENTERPRISE AESTHETIC & 100% RESPONSIVE)
  // =========================================================================
  if (path === '/about-us') {
    return (
      <SiteShell>
        <Seo
          title="About Us | Best Technologies - Your Trusted Security Partner"
          description="Learn about Best Technology IT Solution: 5+ years of electronic security excellence, turnkey CCTV integration, 4-hour breakdown SLA, and door-to-cloud security systems."
          path="/about-us"
        />

        {/* 1. Enhanced Hero Banner with Live Metrics */}
        <section className={styles.aboutPageHero}>
          <div className={styles.aboutHeroGrid}>
            <div className={styles.aboutHeroLeft}>
              <div className={styles.aboutHeroKicker}>
                <span className={styles.kickerDot} />
                <span>BEST TECHNOLOGY IT SOLUTION • ESTD. 2019</span>
              </div>

              <h1 className={styles.aboutHeroTitle}>
                Engineering Tomorrow's <br />
                <span className={styles.cyanHighlight}>Electronic Security & IT Solutions</span>
              </h1>

              <div className={styles.aboutHeroAccentLine} />

              <p className={styles.aboutHeroSubtitle}>
                Best Technology bridges next-generation surveillance engineering, smart access control, fire detection, and IT systems with certified turnkey integration. Protecting over 500+ commercial, industrial, educational, and government facilities across Tamil Nadu & Karnataka.
              </p>

              {/* 5-Pillar Metric Strip */}
              <div className={styles.aboutHeroBadgesRow}>
                <div className={styles.aboutHeroBadgeItem}>
                  <div className={styles.badgeVal}>5+</div>
                  <div className={styles.badgeLbl}>Years in Field</div>
                </div>
                <div className={styles.aboutHeroBadgeItem}>
                  <div className={styles.badgeVal}>500+</div>
                  <div className={styles.badgeLbl}>Sites Secured</div>
                </div>
                <div className={styles.aboutHeroBadgeItem}>
                  <div className={styles.badgeVal}>14+</div>
                  <div className={styles.badgeLbl}>Turnkey Services</div>
                </div>
                <div className={styles.aboutHeroBadgeItem}>
                  <div className={styles.badgeVal}>4-Hr</div>
                  <div className={styles.badgeLbl}>Emergency SLA</div>
                </div>
                <div className={styles.aboutHeroBadgeItem}>
                  <div className={styles.badgeVal}>100%</div>
                  <div className={styles.badgeLbl}>Genuine OEM</div>
                </div>
              </div>

              {/* CTAs */}
              <div className={styles.aboutHeroActionsRow}>
                <Link
                  to="/services"
                  className={styles.aboutHeroPrimaryBtn}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span>Explore Our 14 Services</span>
                  <ArrowRightIcon size={16} />
                </Link>

                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.aboutHeroWhatsAppBtn}
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp Consultation</span>
                </a>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className={styles.aboutHeroCallBtn}
                >
                  <PhoneIcon size={16} />
                  <span>{COMPANY.phone}</span>
                </a>
              </div>
            </div>

            <div className={styles.aboutHeroRight}>
              <div className={styles.aboutHeroDomeStage}>
                <img
                  src="/images/about-hero-camera.webp"
                  alt="Best Technologies Starlight Optical Dome Camera"
                  className={styles.aboutHeroDomeImg}
                />
                <div className={styles.floatingSlaBadge}>
                  <span className={styles.liveDotPulse} />
                  <span>4-Hour Rapid Response SLA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Who We Are & The Best Technology Difference */}
        <section className={styles.aboutMainSection}>
          <div className={styles.aboutTwoColStoryGrid}>
            {/* Left Story Column */}
            <div className={styles.aboutStoryCol}>
              <div className={styles.whoWeAreKicker}>
                <ShieldCheckIcon size={16} color="#0066FF" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className={styles.whoWeAreHeading}>
                Total Door-to-Cloud Security Integration with <span className={styles.cyanText}>Zero Compromise</span>
              </h2>

              <p className={styles.whoWeAreParagraph}>
                Founded in the industrial hub of Hosur, Best Technology IT Solution was born to solve a critical challenge: facilities were struggling with fragmented security contractors, tangled unshielded wiring, and unverified grey-market hardware. We pioneered a turnkey engineering model combining enterprise-grade electronic security products with certified low-voltage integration services.
              </p>

              <p className={styles.whoWeAreParagraph}>
                Today, our certified deployment teams operate across the Hosur and Bangalore industrial corridors (including SIPCOT, Bommasandra, Electronic City, and Attibele), securing heavy manufacturing plants, corporate tech parks, educational campuses, and logistics warehouses.
              </p>

              {/* Strategic Highlights */}
              <div className={styles.aboutHighlightsList}>
                <div className={styles.aboutHighlightItem}>
                  <div className={styles.highlightIconWrap}>
                    <CheckCircle2Icon size={16} />
                  </div>
                  <div className={styles.highlightContent}>
                    <strong>Scientific Threat Modeling:</strong> 3D CAD modeling, lux level analysis, and camera Field of View (FoV) calculations before laying a single cable.
                  </div>
                </div>

                <div className={styles.aboutHighlightItem}>
                  <div className={styles.highlightIconWrap}>
                    <CheckCircle2Icon size={16} />
                  </div>
                  <div className={styles.highlightContent}>
                    <strong>Enterprise Compliance:</strong> ISO-standard structured cabling, flame-retardant conduits, and NFPA-compliant fire alarm integration.
                  </div>
                </div>

                <div className={styles.aboutHighlightItem}>
                  <div className={styles.highlightIconWrap}>
                    <CheckCircle2Icon size={16} />
                  </div>
                  <div className={styles.highlightContent}>
                    <strong>Total Door-to-Cloud Ecosystem:</strong> On-premise hardened NVR storage synced with high-speed, encrypted remote live monitoring on iOS, Android, and PC.
                  </div>
                </div>
              </div>

              <Link
                to="/solutions"
                className={styles.ourJourneyBtn}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span>Explore All Solutions</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Right Visual Stage */}
            <div className={styles.aboutVisualCol}>
              <div className={styles.visualImgCard}>
                <img
                  src="/images/cctv-amc-inspection.webp"
                  alt="Certified Best Technologies Field Technician Inspecting Surveillance Camera"
                  loading="lazy"
                />
                <div className={styles.visualCardOverlay}>
                  <h3 className={styles.overlayTitle}>Certified Field Engineering</h3>
                  <p className={styles.overlaySub}>Trained & OEM-certified technicians for precision calibration and clean installation.</p>
                </div>
              </div>

              <div className={styles.floatingHubBadge}>
                <MapPinIcon size={16} color="#00E5FF" />
                <span>Hosur & Bangalore Hubs</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Turnkey 4-Stage Engineering Process */}
        <section className={styles.aboutProcessSection}>
          <div className={styles.processInner}>
            <div className={styles.sectionHeaderCenter}>
              <div className={styles.sectionKicker}>DISCIPLINED METHODOLOGY</div>
              <h2 className={styles.sectionTitle}>Our 4-Stage Turnkey Engineering Lifecycle</h2>
              <p className={styles.sectionSubtitle}>
                From initial blind-spot threat assessment to certified field commissioning and guaranteed 4-hour breakdown SLA support.
              </p>
            </div>

            <div className={styles.processCardsGrid}>
              <div className={styles.processCard}>
                <div className={styles.processStepPill}>STAGE 01</div>
                <h3 className={styles.processCardTitle}>Site Survey & Threat Mapping</h3>
                <p className={styles.processCardDesc}>
                  On-site perimeter walk, entrance/exit risk mapping, ambient lux level check, and cable run distance measurements to eliminate blind spots.
                </p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.processStepPill}>STAGE 02</div>
                <h3 className={styles.processCardTitle}>Architecture & Bandwidth Sizing</h3>
                <p className={styles.processCardDesc}>
                  CAD schematics, Cat6/fiber pathways, NVR storage retention days, UPS load sizing, and camera lens focal length calculations.
                </p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.processStepPill}>STAGE 03</div>
                <h3 className={styles.processCardTitle}>Certified Field Deployment</h3>
                <p className={styles.processCardDesc}>
                  Weatherproof IP67 conduit installation, camera angle calibration, rack cable management, and cybersecurity firmware hardening.
                </p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.processStepPill}>STAGE 04</div>
                <h3 className={styles.processCardTitle}>Commissioning & 4-Hr SLA AMC</h3>
                <p className={styles.processCardDesc}>
                  Mobile app setup (Android/iOS), multi-screen CMS training, formal handover documentation, and proactive quarterly AMC inspections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Enterprise Strengths (6 Capabilities) */}
        <section className={styles.aboutStrengthsSection}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionKicker}>WHY CHOOSE BEST TECHNOLOGY</div>
            <h2 className={styles.sectionTitle}>Engineered for Reliability, Built for Trust</h2>
            <p className={styles.sectionSubtitle}>
              Why commercial facilities, manufacturing plants, and educational institutions rely on Best Technology as their single security partner.
            </p>
          </div>

          <div className={styles.strengthsCardsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconCircle}>
                <SettingsIcon size={24} />
              </div>
              <h3 className={styles.strengthTitle}>Tailor-Made Solutions</h3>
              <p className={styles.strengthDesc}>
                Customized specifically for your floorplan, operational risks, and regulatory requirements rather than rigid one-size-fits-all packages.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconCircle}>
                <ShieldCheckIcon size={24} />
              </div>
              <h3 className={styles.strengthTitle}>Direct OEM Partnerships</h3>
              <p className={styles.strengthDesc}>
                Authorized installation partner for Hikvision, Dahua, CP Plus, Uniview, and TP-Link with full manufacturer warranty and verified serials.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconCircle}>
                <ActivityIcon size={24} />
              </div>
              <h3 className={styles.strengthTitle}>Guaranteed 4-Hour SLA</h3>
              <p className={styles.strengthDesc}>
                Rapid emergency response with local standby technicians stationed in Hosur for zero-downtime camera, NVR, and network restoration.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconCircle}>
                <CloudUploadIcon size={24} />
              </div>
              <h3 className={styles.strengthTitle}>Door-to-Cloud Scalability</h3>
              <p className={styles.strengthDesc}>
                Centralized multi-branch VMS management with zero static IP headaches, allowing authorized managers to view live feeds securely from anywhere.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconCircle}>
                <CableIcon size={24} />
              </div>
              <h3 className={styles.strengthTitle}>Fluke-Tested Clean Cabling</h3>
              <p className={styles.strengthDesc}>
                Neat structured cabling with flame-retardant conduits, labeled patch panels, and zero rat nests, ensuring reliable high-speed data transmission.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconCircle}>
                <LayersIcon size={24} />
              </div>
              <h3 className={styles.strengthTitle}>Single-SLA Integrated Ecosystem</h3>
              <p className={styles.strengthDesc}>
                One trusted partner for CCTV surveillance, biometric access, fire alarms, boom barriers, EPABX intercom, and GPS fleet telematics.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Industries & Facilities We Protect */}
        <section className={styles.aboutIndustriesSection}>
          <div className={styles.industriesInner}>
            <div className={styles.sectionHeaderDark}>
              <div className={styles.sectionKickerDark}>SECTORS & MARKET SEGMENTS</div>
              <h2 className={styles.sectionTitleDark}>Tailored Protection for Diverse Environments</h2>
              <p className={styles.sectionSubtitleDark}>
                Proven architectures customized for the distinct security, safety, and compliance demands of each industry.
              </p>
            </div>

            <div className={styles.industriesCardsGrid}>
              <div className={styles.industryCard}>
                <img
                  src="/images/warehouse-enterprise-cctv.webp"
                  alt="Industrial & Manufacturing CCTV Solutions"
                  loading="lazy"
                />
                <div className={styles.industryCardOverlay}>
                  <div className={styles.industryCardTag}>MANUFACTURING</div>
                  <h4 className={styles.industryCardTitle}>Factories & Industrial Plants</h4>
                </div>
              </div>

              <div className={styles.industryCard}>
                <img
                  src="/images/office-business-cctv.webp"
                  alt="Corporate Office & IT Park Access Control"
                  loading="lazy"
                />
                <div className={styles.industryCardOverlay}>
                  <div className={styles.industryCardTag}>ENTERPRISE</div>
                  <h4 className={styles.industryCardTitle}>Corporate Offices & IT Parks</h4>
                </div>
              </div>

              <div className={styles.industryCard}>
                <img
                  src="/images/smart-school-safety.webp"
                  alt="School Safety CCTV & Bus GPS Tracking"
                  loading="lazy"
                />
                <div className={styles.industryCardOverlay}>
                  <div className={styles.industryCardTag}>EDUCATION</div>
                  <h4 className={styles.industryCardTitle}>Schools & Campuses</h4>
                </div>
              </div>

              <div className={styles.industryCard}>
                <img
                  src="/images/warehouse-enterprise-cctv.webp"
                  alt="Logistics & Warehouse Surveillance"
                  loading="lazy"
                />
                <div className={styles.industryCardOverlay}>
                  <div className={styles.industryCardTag}>LOGISTICS</div>
                  <h4 className={styles.industryCardTitle}>Warehouses & Hubs</h4>
                </div>
              </div>

              <div className={styles.industryCard}>
                <img
                  src="/images/smart-home-security.webp"
                  alt="Residential Villa & Gated Community Security"
                  loading="lazy"
                />
                <div className={styles.industryCardOverlay}>
                  <div className={styles.industryCardTag}>RESIDENTIAL</div>
                  <h4 className={styles.industryCardTitle}>Gated Communities & Villas</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Purpose, Vision & Core Values */}
        <section className={styles.ourPurposeSection}>
          <div className={styles.ourPurposeBanner}>
            <div className={styles.purposeLeft}>
              <div className={styles.purposeKicker}>OUR PURPOSE</div>
              <h2 className={styles.purposeHeadline}>
                Building Safer Spaces <br />
                with Smarter Technology
              </h2>
              <p className={styles.purposeSubtext}>
                We envision a secure, connected, and resilient world where businesses, institutions, and families can operate with absolute peace of mind.
              </p>
            </div>

            <div className={styles.purposeRightCardsGrid}>
              <div className={styles.purposeCard}>
                <div className={styles.purposeIconCircle}>
                  <EyeIcon size={24} />
                </div>
                <h4 className={styles.purposeCardTitle}>Our Vision</h4>
                <p className={styles.purposeCardText}>
                  To be South India's premier integrated electronic security and smart infrastructure partner, recognized for engineering excellence and rapid local support.
                </p>
              </div>

              <div className={styles.purposeCard}>
                <div className={styles.purposeIconCircle}>
                  <TargetIcon size={24} />
                </div>
                <h4 className={styles.purposeCardTitle}>Our Mission</h4>
                <p className={styles.purposeCardText}>
                  To engineer dependable, zero-blind-spot security ecosystems backed by thorough risk analysis, turnkey documentation, and certified long-term maintenance.
                </p>
              </div>

              <div className={styles.purposeCard}>
                <div className={styles.purposeIconCircle}>
                  <DiamondIcon size={24} />
                </div>
                <h4 className={styles.purposeCardTitle}>Our Values</h4>
                <p className={styles.purposeCardText}>
                  Absolute Integrity, Technical Precision, Transparent OEM Pricing, and Uncompromising Customer Safety across every installation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Brand Logos Bar */}
        <TrustedBrandsBar
          theme="light"
          title="AUTHORIZED SYSTEM INTEGRATOR  |  PREMIER SECURITY PARTNERS"
          subtitle="Deploying genuine, enterprise-grade hardware from the world's most trusted security leaders"
        />

        {/* 8. Bottom Consultation CTA Banner */}
        <section className={styles.aboutCtaBanner}>
          <div className={styles.aboutCtaInner}>
            <div className={styles.aboutCtaLeft}>
              <div className={styles.ctaKicker}>GET IN TOUCH</div>
              <h2 className={styles.ctaTitle}>Ready to Protect What Matters Most?</h2>
              <p className={styles.ctaSubtitle}>
                Schedule a complimentary site survey, risk analysis, and engineering estimate with our certified security specialists today.
              </p>
            </div>

            <div className={styles.aboutCtaActions}>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWhatsAppBtn}
              >
                <WhatsAppIcon size={18} />
                <span>Schedule WhatsApp Survey</span>
              </a>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className={styles.ctaCallBtn}
              >
                <PhoneIcon size={16} />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </SiteShell>
    );
  }
  if (path === '/solutions') {
    const SOLUTIONS_CARDS = [
      {
        id: 1,
        title: 'IP/AHD Surveillance Solutions',
        image: '/images/cctv-bullet.png',
        icon: <CameraIcon size={20} color="#FFFFFF" />,
        link: '/services/cctv-surveillance',
        items: [
          'AHD Cameras',
          'IP Cameras',
          'Wireless Cameras',
          'Face Recognition Cameras',
          'Long Range Wireless Cameras',
        ],
      },
      {
        id: 2,
        title: 'Fire & Intrusion Detection',
        image: '/images/smoke-detector.webp',
        icon: <FlameIcon size={20} color="#FFFFFF" />,
        link: '/services/fire-alarm',
        items: [
          'Wired/Wireless Fire Alarm System',
          'Smoke and Fire Detectors',
          'Perimeter Protection',
          'Guard Protectors Intrusion Detection',
          'Guard Patrol Systems',
        ],
      },
      {
        id: 3,
        title: 'Access Control Solutions',
        image: '/images/biometric-terminal.webp',
        icon: <KeyIcon size={20} color="#FFFFFF" />,
        link: '/services/access-control',
        items: [
          'Single Door Controller',
          'Multi Door Controller',
          'Elevator Controller',
          'Fingerprint Lock',
          'Hotel Lock',
          'EM Locks',
          'Hand held Scanners',
          'Hand held Scanners – Sales – Manual Manual',
          'Biometric',
        ],
      },
      {
        id: 4,
        title: 'RFID / UHF / RFID Solutions',
        image: '/images/rfid-uhf-system.webp',
        icon: <RfidCardIcon size={20} color="#FFFFFF" />,
        link: '/services/rfid-uhf-solutions',
        items: [
          'EAS for Shopping Centers',
          'RFID Solutions',
          'RFID Labels & Tags',
        ],
      },
      {
        id: 5,
        title: 'Control Room Solutions',
        image: '/images/control-room-banner.webp',
        icon: <MonitorIcon size={20} color="#FFFFFF" />,
        link: '/services/cctv-surveillance',
        items: [
          'Video Wall',
          'Video Management',
          'Hierarchy Based Control System',
          'Smart Data Storage Solutions',
          'Video Data Mirroring',
        ],
      },
      {
        id: 6,
        title: 'Special Cameras',
        image: '/images/cctv-ptz.png',
        icon: <ApertureIcon size={20} color="#FFFFFF" />,
        link: '/services/ai-camera-analytics',
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
      },
      {
        id: 7,
        title: 'Entry Automation',
        image: '/images/boom-barrier.webp',
        icon: <BarrierIcon size={20} color="#FFFFFF" />,
        link: '/services/boom-barrier',
        items: [
          'Slide/Swing Gate Automation',
          'Customized Gate Automation',
          'Shutter Automation',
          'Boom Barriers',
          'Turnstiles',
          'Flap Barrier',
          'Parking Barrier',
          'Swing Barrier',
          'Road Blockers',
          'RFID/UHF Based Automatic Access Solutions',
        ],
      },
      {
        id: 8,
        title: 'GPS & Fleet Management',
        image: '/images/gps-fleet-trucks.webp',
        icon: <MapPinIcon size={20} color="#FFFFFF" />,
        link: '/services/gps-tracking',
        items: [
          'GPS Devices',
          'AIS 140 Govt Certified GPS',
          'Vehicle Tracking',
          'Fleet Management Reports',
          'Alerts – Over speeding, Driver Behaviour, Fuel, Geo-fencing, Panic Button, Ignition',
          'Reports – Idle Alerts/Status',
          'Reporting for Inspection',
        ],
      },
    ];

    const IT_HARDWARE_ITEMS = [
      {
        id: 'desktop-laptop',
        type: 'desktop-laptop' as const,
        title: 'Desktops & Laptops',
        icon: <LaptopIcon size={18} color="#0066FF" />,
      },
      {
        id: 'projector',
        type: 'projector' as const,
        title: 'Projectors',
        icon: <ProjectorIcon size={18} color="#0066FF" />,
      },
      {
        id: 'printer',
        type: 'printer' as const,
        title: 'IP Printers',
        icon: <PrinterIcon size={18} color="#0066FF" />,
      },
      {
        id: 'payroll',
        type: 'payroll' as const,
        title: 'Payroll Software',
        icon: <BarChartIcon size={18} color="#0066FF" />,
      },
      {
        id: 'hr',
        type: 'hr' as const,
        title: 'HR Software',
        icon: <UsersIcon size={18} color="#0066FF" />,
      },
      {
        id: 'visitor',
        type: 'visitor' as const,
        title: 'Visitor Management',
        icon: <UserCheckIcon size={18} color="#0066FF" />,
      },
      {
        id: 'vms',
        type: 'vms' as const,
        title: 'VMS Software',
        icon: <MonitorIcon size={18} color="#0066FF" />,
      },
      {
        id: 'access',
        type: 'access' as const,
        title: 'Access Management',
        icon: <KeyIcon size={18} color="#0066FF" />,
      },
    ];

    return (
      <SiteShell>
        <Seo
          title="Solutions | Best Technologies - Complete Security & IT Solutions"
          description="Explore Best Technologies' complete security ecosystem: IP/AHD surveillance, fire detection, access control, RFID, control room video walls, special AI cameras, entry automation, and GPS fleet tracking."
          path="/solutions"
        />

        {/* 1. Hero Banner */}
        <section className={styles.solutionsPageHero}>
          <div className={styles.solutionsHeroGrid}>
            <div className={styles.solutionsHeroLeft}>
              <div className={styles.solutionsHeroKicker}>OUR SOLUTIONS</div>
              <h1 className={styles.solutionsHeroTitle}>
                Complete Security <br />
                & IT Solutions
              </h1>
              <div className={styles.solutionsHeroAccentLine} />
              <p className={styles.solutionsHeroSubtitle}>
                Advanced technology solutions for safer, smarter and more connected businesses, institutions and communities.
              </p>
              <div className={styles.solutionsHeroBadgesRow}>
                <div className={styles.solutionsHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <ShieldCheckIcon size={18} />
                  </span>
                  <span className={styles.badgeLabel}>Reliable Solutions</span>
                </div>
                <div className={styles.solutionsHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <HeadsetIcon size={18} />
                  </span>
                  <span className={styles.badgeLabel}>Expert Support</span>
                </div>
                <div className={styles.solutionsHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <TrendingUpIcon size={18} />
                  </span>
                  <span className={styles.badgeLabel}>Scalable Technology</span>
                </div>
                <div className={styles.solutionsHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <HandshakeIcon size={18} />
                  </span>
                  <span className={styles.badgeLabel}>Trusted Partner</span>
                </div>
              </div>
            </div>

            <div className={styles.solutionsHeroRight}>
              <div className={styles.solutionsDomeStage}>
                <img
                  src="/images/about-hero-camera.webp"
                  alt="Best Technologies Ceiling Surveillance Camera"
                  className={styles.solutionsDomeImg}
                />
              </div>
              <div className={styles.solutionsScriptCaption}>
                Integrated Security Solutions for a Safer Tomorrow.
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Solutions (8 Cards in 4x2 Grid) */}
        <section className={styles.solutionsCatalogSection}>
          <div className={styles.solutionsSectionHeader}>
            <div className={styles.headerLeft}>
              <h2 className={styles.solutionsSectionTitle}>Our Solutions</h2>
              <div className={styles.solutionsTitleAccent} />
            </div>
            <p className={styles.solutionsSectionDesc}>
              Explore our wide range of electronic security and IT solutions designed to meet the unique needs of your business.
            </p>
          </div>

          <div className={styles.solutionsEightGrid}>
            {SOLUTIONS_CARDS.map((card) => (
              <div key={card.id} className={styles.solutionCard}>
                <div className={styles.solutionCardImgWrap}>
                  <img src={card.image} alt={card.title} loading="lazy" />
                </div>
                <div className={styles.solutionCardIconCircle}>{card.icon}</div>
                <div className={styles.solutionCardBody}>
                  <h3 className={styles.solutionCardTitle}>{card.title}</h3>
                  <ul className={styles.solutionCardList}>
                    {card.items.map((item, idx) => (
                      <li key={idx}>
                        <span className={styles.bulletCheck}>
                          <CheckIcon size={14} color="#0066FF" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={card.link} className={styles.solutionCardLink}>
                    <span>Learn More</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. IT Hardware & Software Solutions (8 Items Row) */}
        <section className={styles.itSolutionsSection}>
          <div className={styles.itHeaderRow}>
            <div className={styles.itTitleWrap}>
              <h2 className={styles.itSectionTitle}>IT Hardware & Software Solutions</h2>
              <div className={styles.itTitleAccent} />
            </div>
            <p className={styles.itSectionDesc}>
              Reliable IT products and software solutions to keep your business running efficiently.
            </p>
          </div>

          <div className={styles.itProductsGrid}>
            {IT_HARDWARE_ITEMS.map((item) => (
              <div key={item.id} className={styles.itProductCard}>
                <div className={styles.itProductImgBox}>
                  <ITProductGraphic type={item.type} />
                </div>
                <div className={styles.itProductIconWrap}>{item.icon}</div>
                <h4 className={styles.itProductTitle}>{item.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Logos Bar */}
        <TrustedBrandsBar
          theme="light"
          title="AUTHORIZED BRANDS  |  GLOBAL TECHNOLOGY PARTNERS"
          subtitle="Certified installations and genuine manufacturer warranty support across all leading surveillance brands"
        />

        {/* 4. Why Choose Our Solutions (Dark Textured Strip) */}
        <section className={styles.whyChooseSolutionsStrip}>
          <div className={styles.whyChooseInner}>
            <div className={styles.whyChooseLeft}>
              <h2 className={styles.whyChooseTitle}>Why Choose Our Solutions</h2>
              <div className={styles.whyChooseAccent} />
            </div>

            <div className={styles.whyChooseNodesGrid}>
              <div className={styles.whyChooseNode}>
                <div className={styles.whyChooseNodeIcon}>
                  <SettingsIcon size={24} />
                </div>
                <div className={styles.whyChooseNodeText}>
                  <div className={styles.nodeTitle}>Tailor Made Solutions</div>
                  <div className={styles.nodeSub}>as per Requirement</div>
                </div>
              </div>

              <div className={styles.whyChooseNode}>
                <div className={styles.whyChooseNodeIcon}>
                  <ShieldCheckIcon size={24} />
                </div>
                <div className={styles.whyChooseNodeText}>
                  <div className={styles.nodeTitle}>Risk & Threat Analysis</div>
                </div>
              </div>

              <div className={styles.whyChooseNode}>
                <div className={styles.whyChooseNodeIcon}>
                  <FileTextIcon size={24} />
                </div>
                <div className={styles.whyChooseNodeText}>
                  <div className={styles.nodeTitle}>Design and Documentation</div>
                </div>
              </div>

              <div className={styles.whyChooseNode}>
                <div className={styles.whyChooseNodeIcon}>
                  <BarChartIcon size={24} />
                </div>
                <div className={styles.whyChooseNodeText}>
                  <div className={styles.nodeTitle}>Installation and Project Completion Reports</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Angled Multi-Image Banner (Turnkey Facility Architecture) */}
        <section className={styles.angledSlicesBanner}>
          <div className={styles.angledSlicesInner}>
            <div className={styles.angledLeftBlock}>
              <h2 className={styles.angledLeftTitle}>
                Engineering Turnkey Security <br />
                for Complex Facilities
              </h2>
              <div className={styles.angledLeftAccent} />
              <Link to="/contact" className={styles.angledQuoteBtn}>
                <span>Get a Solution Blueprint</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className={styles.slicesRow}>
              <div className={styles.sliceItem}>
                <img src="/images/contact-slice-camera.webp" alt="CCTV Starlight Dome Camera" loading="lazy" />
              </div>
              <div className={styles.sliceItem}>
                <img src="/images/smoke-detector.webp" alt="Fire & Smoke Detector" loading="lazy" />
              </div>
              <div className={styles.sliceItem}>
                <img src="/images/biometric-terminal.webp" alt="Access Control Terminal" loading="lazy" />
              </div>
              <div className={styles.sliceItem}>
                <img src="/images/boom-barrier.webp" alt="Boom Barrier Entry Automation" loading="lazy" />
              </div>
            </div>

            <div className={styles.angledRightBlock}>
              <h3 className={styles.angledRightTitle}>
                Integrated <br />
                Electronic <br />
                Security <br />
                Solutions
              </h3>
              <div className={styles.angledRightAccent} />
            </div>
          </div>
        </section>


      </SiteShell>
    );
  }
  // =========================================================================
  // 3. AMC PAGE (/amc - Matching media_1793192913567_651d3670.jpg Mockup)
  // =========================================================================
  if (path === '/amc') {
    const AMC_SECURITY_ITEMS = [
      {
        id: 1,
        title: 'CCTV & IP Surveillance Systems',
        image: '/images/cctv-amc-inspection.webp',
        icon: <CameraIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 2,
        title: 'Access Control Systems',
        image: '/images/biometric-terminal.webp',
        icon: <KeyIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 3,
        title: 'Fire Alarm & Intrusion Detection',
        image: '/images/smoke-detector.webp',
        icon: <FlameIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 4,
        title: 'EPABX / Intercom Systems',
        image: '/images/epabx-intercom-telecom.webp',
        icon: <IntercomIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 5,
        title: 'Gate & Entry Automation',
        image: '/images/boom-barrier.webp',
        icon: <BarrierIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 6,
        title: 'RFID / UHF Solutions',
        image: '/images/rfid-uhf-system.webp',
        icon: <RfidCardIcon size={18} color="#FFFFFF" />,
      },
    ];

    const AMC_IT_ITEMS = [
      {
        id: 1,
        title: 'Desktops & Laptops',
        graphicType: 'desktop-laptop' as const,
        icon: <LaptopIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 2,
        title: 'Projectors',
        graphicType: 'projector' as const,
        icon: <ProjectorIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 3,
        title: 'IP Printers',
        graphicType: 'printer' as const,
        icon: <PrinterIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 4,
        title: 'Software Solutions (Payroll / HR / VMS etc.)',
        graphicType: 'vms' as const,
        icon: <CpuIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 5,
        title: 'Visitor Management Systems',
        graphicType: 'visitor' as const,
        icon: <UserCheckIcon size={18} color="#FFFFFF" />,
      },
      {
        id: 6,
        title: 'Network & IT Infrastructure',
        image: '/images/network-server-infrastructure.webp',
        icon: <ServerStackIcon size={18} color="#FFFFFF" />,
      },
    ];

    const AMC_PROCESS_STEPS = [
      {
        num: 1,
        title: '1. Requirement Assessment',
        desc: 'Understand your systems and service needs.',
        icon: <SettingsIcon size={24} />,
      },
      {
        num: 2,
        title: '2. Customized Plan',
        desc: 'Comprehensive or Non-Comprehensive AMC options.',
        icon: <FileTextIcon size={24} />,
      },
      {
        num: 3,
        title: '3. Scheduled Maintenance',
        desc: 'Periodic inspection and servicing.',
        icon: <RupeeIcon size={24} />,
      },
      {
        num: 4,
        title: '4. Quick Support',
        desc: 'On-site or remote assistance when needed.',
        icon: <HeadsetIcon size={24} />,
      },
      {
        num: 5,
        title: '5. Performance Monitoring',
        desc: 'Continuous system health tracking.',
        icon: <ClockIcon size={24} />,
      },
    ];

    return (
      <SiteShell>
        <Seo
          title="AMC Services | Best Technologies - Keep Your Systems Running Without Worry"
          description="Comprehensive and Non-Comprehensive Annual Maintenance Contracts (AMC) for CCTV surveillance, access control, fire alarms, boom barriers, and IT infrastructure."
          path="/amc"
        />

        {/* 1. Hero Banner */}
        <section className={styles.amcPageHero}>
          <div className={styles.amcHeroGrid}>
            <div className={styles.amcHeroLeft}>
              <div className={styles.amcHeroKicker}>AMC SERVICES</div>
              <h1 className={styles.amcHeroTitle}>
                Keep Your <br />
                Systems Running <br />
                <span className={styles.amcHeroCyan}>Without Worry</span>
              </h1>
              <div className={styles.amcHeroAccentLine} />
              <p className={styles.amcHeroSubtitle}>
                Comprehensive AMC services for all your security and IT infrastructure – ensuring uninterrupted performance and peace of mind.
              </p>

              <Link to="/contact" className={styles.amcQuoteBtn}>
                <span>Get AMC Quote</span>
                <ArrowRightIcon size={16} />
              </Link>

              <div className={styles.amcHeroBadgesRow}>
                <div className={styles.amcHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <ShieldCheckIcon size={16} />
                  </span>
                  <span className={styles.badgeLabel}>Preventive Maintenance</span>
                </div>
                <div className={styles.amcHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <ClockIcon size={16} />
                  </span>
                  <span className={styles.badgeLabel}>Reduced Downtime</span>
                </div>
                <div className={styles.amcHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <SettingsIcon size={16} />
                  </span>
                  <span className={styles.badgeLabel}>Better Performance</span>
                </div>
                <div className={styles.amcHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <RupeeIcon size={16} />
                  </span>
                  <span className={styles.badgeLabel}>Cost Efficiency</span>
                </div>
              </div>
            </div>

            <div className={styles.amcHeroRight}>
              <div className={styles.amcTechnicianStage}>
                <img
                  src="/images/amc-technician.webp"
                  alt="Best Technologies Field Engineer Inspecting Security System"
                />
                <div className={styles.amcFloatingCards}>
                  <div className={styles.amcFloatingCard}>
                    <span className={styles.cardIcon}>
                      <WrenchIcon size={18} />
                    </span>
                    <span className={styles.cardText}>Regular Maintenance</span>
                  </div>
                  <div className={styles.amcFloatingCard}>
                    <span className={styles.cardIcon}>
                      <SettingsIcon size={18} />
                    </span>
                    <span className={styles.cardText}>Quick Support</span>
                  </div>
                  <div className={styles.amcFloatingCard}>
                    <span className={styles.cardIcon}>
                      <ActivityIcon size={18} />
                    </span>
                    <span className={styles.cardText}>System Health Monitoring</span>
                  </div>
                  <div className={styles.amcFloatingCard}>
                    <span className={styles.cardIcon}>
                      <ShieldCheckIcon size={18} />
                    </span>
                    <span className={styles.cardText}>Extended Lifespan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our AMC Coverage */}
        <section className={styles.amcCoverageSection}>
          <div className={styles.coverageLeft}>
            <h2 className={styles.coverageTitle}>Our AMC Coverage</h2>
            <div className={styles.coverageAccent} />
            <p className={styles.coverageDesc}>
              We provide AMC services for all the listed electronic security and IT solutions with both Comprehensive and Non-Comprehensive options.
            </p>
          </div>

          <div className={styles.coverageCardsGrid}>
            <div className={`${styles.coverageCard} ${styles.comprehensiveCard}`}>
              <div className={styles.cardIconCircle}>
                <ShieldCheckIcon size={24} color="#FFFFFF" />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Comprehensive AMC</h3>
                <p className={styles.cardDesc}>
                  Complete coverage including parts, labor and regular maintenance.
                </p>
              </div>
            </div>

            <div className={`${styles.coverageCard} ${styles.nonComprehensiveCard}`}>
              <div className={styles.cardIconCircle}>
                <WrenchIcon size={24} color="#FFFFFF" />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Non-Comprehensive AMC</h3>
                <p className={styles.cardDesc}>
                  Service and maintenance support with separate charges for parts (if required).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AMC for Electronic Security Systems */}
        <section className={styles.amcSixColSection}>
          <div className={styles.amcSectionHeader}>
            <h2 className={styles.sectionTitle}>AMC for Electronic Security Systems</h2>
            <div className={styles.sectionAccent} />
          </div>

          <div className={styles.amcSixGrid}>
            {AMC_SECURITY_ITEMS.map((item) => (
              <div key={item.id} className={styles.amcItemCard}>
                <div className={styles.itemImgBox}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" />
                  ) : (
                    <ITProductGraphic type={item.graphicType!} />
                  )}
                  <div className={styles.itemIconCircle}>{item.icon}</div>
                </div>
                <div className={styles.itemCardBody}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. AMC for IT Infrastructure */}
        <section className={styles.amcSixColSection}>
          <div className={styles.amcSectionHeader}>
            <h2 className={styles.sectionTitle}>AMC for IT Infrastructure</h2>
            <div className={styles.sectionAccent} />
          </div>

          <div className={styles.amcSixGrid}>
            {AMC_IT_ITEMS.map((item) => (
              <div key={item.id} className={styles.amcItemCard}>
                <div className={styles.itemImgBox}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" />
                  ) : (
                    <ITProductGraphic type={item.graphicType!} />
                  )}
                  <div className={styles.itemIconCircle}>{item.icon}</div>
                </div>
                <div className={styles.itemCardBody}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Why Choose Our AMC? */}
        <section className={styles.whyChooseAmcStrip}>
          <div className={styles.whyChooseAmcInner}>
            <div className={styles.stripLeft}>
              <div className={styles.stripHeader}>
                <h2 className={styles.stripTitle}>Why Choose Our AMC?</h2>
                <div className={styles.stripAccent} />
              </div>

              <div className={styles.amcPointsGrid}>
                <div className={styles.amcPoint}>
                  <div className={styles.pointIconCircle}>
                    <SettingsIcon size={24} />
                  </div>
                  <div className={styles.pointText}>
                    <h4 className={styles.pointTitle}>Preventive Maintenance</h4>
                    <p className={styles.pointDesc}>
                      Regular inspection and servicing to avoid issues before they occur.
                    </p>
                  </div>
                </div>

                <div className={styles.amcPoint}>
                  <div className={styles.pointIconCircle}>
                    <BarChartIcon size={24} />
                  </div>
                  <div className={styles.pointText}>
                    <h4 className={styles.pointTitle}>Reduced Downtime</h4>
                    <p className={styles.pointDesc}>
                      Minimizes system failure and ensures business continuity.
                    </p>
                  </div>
                </div>

                <div className={styles.amcPoint}>
                  <div className={styles.pointIconCircle}>
                    <RupeeIcon size={24} />
                  </div>
                  <div className={styles.pointText}>
                    <h4 className={styles.pointTitle}>Cost Efficiency</h4>
                    <p className={styles.pointDesc}>
                      Better planning and lower long-term maintenance cost.
                    </p>
                  </div>
                </div>

                <div className={styles.amcPoint}>
                  <div className={styles.pointIconCircle}>
                    <HandshakeIcon size={24} />
                  </div>
                  <div className={styles.pointText}>
                    <h4 className={styles.pointTitle}>Expert Support</h4>
                    <p className={styles.pointDesc}>
                      Trained and certified engineers for quick on-site or remote support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.amcHologramRight}>
              <div className={styles.hologramTabletWrap}>
                <div className={styles.holoRing} />
                <div className={styles.holoShieldCenter}>
                  <ShieldCheckIcon size={38} color="#00C2FF" />
                  <div className={styles.shieldLabel}>AMC SUPPORT</div>
                </div>
                <div className={`${styles.holoSat} ${styles.sat1}`}>
                  <KeyIcon size={16} />
                </div>
                <div className={`${styles.holoSat} ${styles.sat2}`}>
                  <WrenchIcon size={16} />
                </div>
                <div className={`${styles.holoSat} ${styles.sat3}`}>
                  <SettingsIcon size={16} />
                </div>
                <div className={`${styles.holoSat} ${styles.sat4}`}>
                  <FileTextIcon size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Our AMC Process */}
        <section className={styles.amcProcessSection}>
          <div className={styles.processHeader}>
            <h2 className={styles.processTitle}>Our AMC Process</h2>
            <div className={styles.processAccent} />
          </div>

          <div className={styles.processStepsRow}>
            {AMC_PROCESS_STEPS.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className={styles.processStep}>
                  <div className={styles.stepIconCircle}>{step.icon}</div>
                  <div className={styles.stepTextWrap}>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
                {idx < AMC_PROCESS_STEPS.length - 1 && (
                  <div className={styles.stepArrow}>→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 7. Bottom Banner ("Keep Your Business Running Smoothly") */}
        <section className={styles.amcBottomBanner}>
          <div className={styles.amcBottomInner}>
            <div className={styles.bottomLeft}>
              <h2 className={styles.bottomTitle}>
                Keep Your Business <br />
                Running Smoothly
              </h2>
              <p className={styles.bottomSub}>
                Choose our AMC services for reliable performance and long-term peace of mind.
              </p>
              <Link to="/contact" className={styles.bottomBtn}>
                <span>Get AMC Quote</span>
                <ArrowRightIcon size={15} />
              </Link>
            </div>

            <div className={styles.bottomDomeVisual}>
              <img
                src="/images/amc-banner-camera.webp"
                alt="Best Technologies 360 Starlight Surveillance Camera"
              />
            </div>

            <div className={styles.bottomBadgesGrid}>
              <div className={styles.bottomBadgeCard}>
                <span className={styles.badgeIcon}>
                  <ShieldCheckIcon size={22} />
                </span>
                <span className={styles.badgeLabel}>Reliable Service</span>
              </div>
              <div className={styles.bottomBadgeCard}>
                <span className={styles.badgeIcon}>
                  <UsersIcon size={22} />
                </span>
                <span className={styles.badgeLabel}>Expert Engineers</span>
              </div>
              <div className={styles.bottomBadgeCard}>
                <span className={styles.badgeIcon}>
                  <MapPinIcon size={22} />
                </span>
                <span className={styles.badgeLabel}>Pan India Support</span>
              </div>
              <div className={styles.bottomBadgeCard}>
                <span className={styles.badgeIcon}>
                  <ClockIcon size={22} />
                </span>
                <span className={styles.badgeLabel}>Longer System Life</span>
              </div>
            </div>
          </div>
        </section>


      </SiteShell>
    );
  }

  // =========================================================================
  // 4. CCTV COST CALCULATOR PAGE (/cost-calculator & /cctv-cost-calculator)
  // =========================================================================
  if (path === '/cost-calculator' || path === '/cctv-cost-calculator') {
    // Dynamic Pricing Calculation
    const calculateEstimate = () => {
      let camMin = 2200;
      let camMax = 2800;

      if (calcSystem === 'analog') {
        if (calcResolution === '4mp') { camMin = 2800; camMax = 3500; }
        else if (calcResolution === '5mp') { camMin = 3400; camMax = 4200; }
        else if (calcResolution === '8mp') { camMin = 4800; camMax = 5800; }
      } else {
        camMin = 3500; camMax = 4500;
        if (calcResolution === '4mp') { camMin = 4500; camMax = 5600; }
        else if (calcResolution === '5mp') { camMin = 5600; camMax = 7000; }
        else if (calcResolution === '8mp') { camMin = 8200; camMax = 10500; }
      }

      if (calcCameraType === 'bullet') {
        camMin += 250;
        camMax += 400;
      } else if (calcCameraType === 'ptz') {
        camMin += 6000;
        camMax += 9000;
      }

      // Recorder (DVR / NVR)
      let recMin = 3500;
      let recMax = 4500;
      if (calcCameras > 16) {
        recMin = calcSystem === 'analog' ? 16000 : 25000;
        recMax = calcSystem === 'analog' ? 22000 : 32000;
      } else if (calcCameras > 8) {
        recMin = calcSystem === 'analog' ? 9000 : 14000;
        recMax = calcSystem === 'analog' ? 12000 : 18000;
      } else if (calcCameras > 4) {
        recMin = calcSystem === 'analog' ? 5500 : 8500;
        recMax = calcSystem === 'analog' ? 7000 : 11000;
      } else {
        recMin = calcSystem === 'analog' ? 3500 : 5500;
        recMax = calcSystem === 'analog' ? 4500 : 7000;
      }

      // Storage
      let hddMin = 0;
      let hddMax = 0;
      if (calcStorage === '1tb') { hddMin = 3800; hddMax = 4500; }
      else if (calcStorage === '2tb') { hddMin = 5800; hddMax = 6800; }
      else if (calcStorage === '4tb') { hddMin = 9500; hddMax = 11500; }

      // Features
      let featMin = 0;
      let featMax = 0;
      if (calcFeatures.includes('audio')) { featMin += calcCameras * 400; featMax += calcCameras * 600; }
      if (calcFeatures.includes('ai')) { featMin += 1500; featMax += 3000; }
      if (calcFeatures.includes('amc')) { featMin += 2500; featMax += 4500; }

      const installMin = 2500 + calcCameras * 400;
      const installMax = 3500 + calcCameras * 600;

      const totalMin = Math.round((camMin * calcCameras + recMin + hddMin + featMin + installMin) / 500) * 500;
      const totalMax = Math.round((camMax * calcCameras + recMax + hddMax + featMax + installMax) / 500) * 500;

      return { min: totalMin, max: totalMax };
    };

    const estimate = calculateEstimate();

    const generateWhatsAppLink = () => {
      const text = [
        `*BEST TECHNOLOGIES - CCTV COST ESTIMATE*`,
        `----------------------------------------`,
        `System Type: ${calcSystem === 'analog' ? 'Analog HD System' : 'IP Network System'}`,
        `Property Type: ${calcProperty.toUpperCase()}`,
        `Cameras: ${calcCameras} Cameras (${calcCameraType === 'dome' ? 'Dome' : calcCameraType === 'bullet' ? 'Bullet' : 'PTZ'} Camera)`,
        `Resolution: ${calcResolution.toUpperCase()} (${calcResolution === '2mp' ? 'Full HD' : calcResolution === '4mp' ? 'Higher Clarity' : calcResolution === '5mp' ? 'Better Detail' : 'Ultra HD'})`,
        `Brand: ${calcBrand}`,
        `Storage: ${calcStorage === 'nohdd' ? 'No HDD' : calcStorage.toUpperCase()}`,
        `Features: ${calcFeatures.join(', ') || 'Standard Night Vision'}`,
        `Indicative Estimate: ₹ ${estimate.min.toLocaleString('en-IN')} – ${estimate.max.toLocaleString('en-IN')}`,
        `----------------------------------------`,
        `Hello Best Technologies, I configured this on your website CCTV Cost Calculator. Please share a detailed quote and schedule a site survey.`,
      ].join('\n');

      return `https://wa.me/918675248969?text=${encodeURIComponent(text)}`;
    };

    const toggleFeature = (feat: string) => {
      setCalcFeatures((prev) =>
        prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
      );
    };

    const applyPackage = (pkg: 'home' | 'office' | 'enterprise') => {
      if (pkg === 'home') {
        setCalcSystem('analog');
        setCalcProperty('home');
        setCalcCameras(4);
        setCalcResolution('2mp');
        setCalcCameraType('dome');
        setCalcStorage('1tb');
        setCalcFeatures(['night-vision']);
      } else if (pkg === 'office') {
        setCalcSystem('ip');
        setCalcProperty('office');
        setCalcCameras(8);
        setCalcResolution('4mp');
        setCalcCameraType('bullet');
        setCalcStorage('2tb');
        setCalcFeatures(['night-vision', 'audio', 'ai']);
      } else {
        setCalcSystem('ip');
        setCalcProperty('warehouse');
        setCalcCameras(16);
        setCalcResolution('5mp');
        setCalcCameraType('bullet');
        setCalcStorage('4tb');
        setCalcFeatures(['night-vision', 'audio', 'ai', 'amc']);
      }

      window.scrollTo({ top: 350, behavior: 'smooth' });
    };

    return (
      <SiteShell>
        <Seo
          title="CCTV Cost Calculator | Best Technologies - Plan Your Security & Estimate Cost"
          description="Build your custom CCTV system in minutes. Calculate real-time estimated costs for Analog HD and IP Network security cameras, recorders, and hard drives."
          path="/cost-calculator"
        />

        {/* 1. Hero Banner */}
        <section className={styles.calcHero}>
          <div className={styles.calcHeroGrid}>
            <div className={styles.calcHeroLeft}>
              <div className={styles.calcHeroKicker}>CCTV COST CALCULATOR</div>
              <h1 className={styles.calcHeroTitle}>
                Plan Your Security. <br />
                <span className={styles.calcHeroCyan}>Estimate Your Cost.</span>
              </h1>
              <div className={styles.calcHeroAccentLine} />
              <div className={styles.calcHeroSubtitle}>
                <strong>Build your CCTV system in minutes.</strong>
                Get an indicative cost for your CCTV installation based on your requirements. Customize, compare and request a detailed quote from our team.
              </div>

              <div className={styles.calcHeroBadgesRow}>
                <div className={styles.calcHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <ClockIcon size={16} />
                  </span>
                  <span className={styles.badgeLabel}>Quick & Easy Estimation</span>
                </div>
                <div className={styles.calcHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <SettingsIcon size={16} />
                  </span>
                  <span className={styles.badgeLabel}>Customized For Your Needs</span>
                </div>
                <div className={styles.calcHeroBadgeItem}>
                  <span className={styles.badgeIconWrap}>
                    <TargetIcon size={16} />
                  </span>
                  <span className={styles.badgeLabel}>Get Expert Recommendation</span>
                </div>
              </div>
            </div>

            <div className={styles.calcHeroRight}>
              <div className={styles.calcCamerasCluster}>
                <img
                  src="/images/cctv-bullet.png"
                  alt="Best Technologies Wall Mount Surveillance Cameras"
                />
              </div>
              <div className={styles.calcScriptCaption}>
                Safer Spaces Smarter Choices
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive Calculator Section */}
        <section className={styles.calcMainSection}>
          {/* Step Progress Header */}
          <div className={styles.calcStepsProgress}>
            <div className={`${styles.stepProgressItem} ${styles.stepActive}`}>
              <span className={styles.stepNumCircle}>1</span>
              <span className={styles.stepLabel}>Configuration</span>
            </div>
            <div className={styles.stepDivider} />
            <div className={styles.stepProgressItem}>
              <span className={styles.stepNumCircle}>2</span>
              <span className={styles.stepLabel}>Add-ons</span>
            </div>
            <div className={styles.stepDivider} />
            <div className={styles.stepProgressItem}>
              <span className={styles.stepNumCircle}>3</span>
              <span className={styles.stepLabel}>Estimate</span>
            </div>
          </div>

          <div className={styles.calcTwoColGrid}>
            {/* Left Column: Form Controls */}
            <div className={styles.calcControlsCol}>
              {/* 1. Select System Type */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>1. Select System Type</h3>
                  <button type="button" className={styles.infoTooltipBtn} title="Analog HD uses coaxial cables and DVR; IP Network uses Ethernet cables, NVR, and supports advanced AI.">
                    <InfoIcon size={14} />
                  </button>
                </div>

                <div className={styles.systemTypeRow}>
                  <div
                    className={`${styles.systemTypeCard} ${calcSystem === 'analog' ? styles.systemSelected : ''}`}
                    onClick={() => setCalcSystem('analog')}
                  >
                    <div className={styles.radioCircle} />
                    <div className={styles.systemImgBox}>
                      <ITProductGraphic type="analog-system" />
                    </div>
                    <div className={styles.systemInfo}>
                      <div className={styles.systemTitle}>Analog HD System</div>
                      <div className={styles.systemSub}>Cost-effective solution for basic security needs</div>
                    </div>
                  </div>

                  <div
                    className={`${styles.systemTypeCard} ${calcSystem === 'ip' ? styles.systemSelected : ''}`}
                    onClick={() => setCalcSystem('ip')}
                  >
                    <div className={styles.radioCircle} />
                    <div className={styles.systemImgBox}>
                      <ITProductGraphic type="ip-system" />
                    </div>
                    <div className={styles.systemInfo}>
                      <div className={styles.systemTitle}>IP Network System</div>
                      <div className={styles.systemSub}>High quality, scalable solution with advanced features</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Select Property Type */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>2. Select Property Type</h3>
                  <button type="button" className={styles.infoTooltipBtn} title="Helps tailor camera angles, lenses, and cabling estimates.">
                    <InfoIcon size={14} />
                  </button>
                </div>

                <div className={styles.propertyTypeRow}>
                  <div
                    className={`${styles.propertyCard} ${calcProperty === 'home' ? styles.propertySelected : ''}`}
                    onClick={() => setCalcProperty('home')}
                  >
                    <span className={styles.propIcon}><HomeIcon size={24} /></span>
                    <span className={styles.propLabel}>Home</span>
                  </div>

                  <div
                    className={`${styles.propertyCard} ${calcProperty === 'office' ? styles.propertySelected : ''}`}
                    onClick={() => setCalcProperty('office')}
                  >
                    <span className={styles.propIcon}><OfficeIcon size={24} /></span>
                    <span className={styles.propLabel}>Office</span>
                  </div>

                  <div
                    className={`${styles.propertyCard} ${calcProperty === 'warehouse' ? styles.propertySelected : ''}`}
                    onClick={() => setCalcProperty('warehouse')}
                  >
                    <span className={styles.propIcon}><WarehouseIcon size={24} /></span>
                    <span className={styles.propLabel}>Warehouse</span>
                  </div>

                  <div
                    className={`${styles.propertyCard} ${calcProperty === 'school' ? styles.propertySelected : ''}`}
                    onClick={() => setCalcProperty('school')}
                  >
                    <span className={styles.propIcon}><SchoolIcon size={24} /></span>
                    <span className={styles.propLabel}>School</span>
                  </div>
                </div>
              </div>

              {/* 3. Number of Cameras */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>3. Number of Cameras</h3>
                </div>

                <div className={styles.stepperRow}>
                  <div className={styles.stepperBox}>
                    <button
                      type="button"
                      className={styles.stepBtn}
                      disabled={calcCameras <= 1}
                      onClick={() => setCalcCameras((c) => Math.max(1, c - 1))}
                    >
                      <MinusIcon size={16} />
                    </button>
                    <span className={styles.stepVal}>{calcCameras}</span>
                    <button
                      type="button"
                      className={styles.stepBtn}
                      disabled={calcCameras >= 32}
                      onClick={() => setCalcCameras((c) => Math.min(32, c + 1))}
                    >
                      <PlusIcon size={16} />
                    </button>
                  </div>

                  <div className={styles.stepperTip}>
                    <CameraIcon size={16} />
                    <span>Select the number of cameras you want to install</span>
                  </div>
                </div>
              </div>

              {/* 4. Choose Camera Resolution */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>4. Choose Camera Resolution</h3>
                  <button type="button" className={styles.infoTooltipBtn} title="Higher resolution provides crisper facial details and license plate recognition.">
                    <InfoIcon size={14} />
                  </button>
                </div>

                <div className={styles.pillsGrid}>
                  <div
                    className={`${styles.pillOptionBtn} ${calcResolution === '2mp' ? styles.pillSelected : ''}`}
                    onClick={() => setCalcResolution('2mp')}
                  >
                    <span className={styles.pillMain}>2 MP</span>
                    <span className={styles.pillSub}>(Full HD)</span>
                  </div>

                  <div
                    className={`${styles.pillOptionBtn} ${calcResolution === '4mp' ? styles.pillSelected : ''}`}
                    onClick={() => setCalcResolution('4mp')}
                  >
                    <span className={styles.pillMain}>4 MP</span>
                    <span className={styles.pillSub}>(Higher Clarity)</span>
                  </div>

                  <div
                    className={`${styles.pillOptionBtn} ${calcResolution === '5mp' ? styles.pillSelected : ''}`}
                    onClick={() => setCalcResolution('5mp')}
                  >
                    <span className={styles.pillMain}>5 MP</span>
                    <span className={styles.pillSub}>(Better Detail)</span>
                  </div>

                  <div
                    className={`${styles.pillOptionBtn} ${calcResolution === '8mp' ? styles.pillSelected : ''}`}
                    onClick={() => setCalcResolution('8mp')}
                  >
                    <span className={styles.pillMain}>8 MP</span>
                    <span className={styles.pillSub}>(Ultra HD)</span>
                  </div>
                </div>
              </div>

              {/* 5. Choose Camera Type */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>5. Choose Camera Type</h3>
                  <button type="button" className={styles.infoTooltipBtn} title="Dome cameras are compact for ceilings; Bullet cameras are weatherproof for outdoors; PTZ rotates 360 degrees.">
                    <InfoIcon size={14} />
                  </button>
                </div>

                <div className={styles.cameraTypeGrid}>
                  <div
                    className={`${styles.camTypeCard} ${calcCameraType === 'dome' ? styles.camTypeSelected : ''}`}
                    onClick={() => setCalcCameraType('dome')}
                  >
                    <div className={styles.camTypeImgBox}>
                      <img src="/images/about-hero-camera.webp" alt="Dome Camera" />
                    </div>
                    <span className={styles.camTypeName}>Dome Camera</span>
                  </div>

                  <div
                    className={`${styles.camTypeCard} ${calcCameraType === 'bullet' ? styles.camTypeSelected : ''}`}
                    onClick={() => setCalcCameraType('bullet')}
                  >
                    <div className={styles.camTypeImgBox}>
                      <img src="/images/cctv-bullet.png" alt="Bullet Camera" />
                    </div>
                    <span className={styles.camTypeName}>Bullet Camera</span>
                  </div>

                  <div
                    className={`${styles.camTypeCard} ${calcCameraType === 'ptz' ? styles.camTypeSelected : ''}`}
                    onClick={() => setCalcCameraType('ptz')}
                  >
                    <div className={styles.camTypeImgBox}>
                      <img src="/images/cctv-ptz.png" alt="PTZ Camera" />
                    </div>
                    <span className={styles.camTypeName}>PTZ Camera</span>
                  </div>
                </div>
              </div>

              {/* 6. Select Brand (Optional) */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>6. Select Brand (Optional)</h3>
                </div>

                <div className={styles.brandsRow}>
                  {[
                    { id: 'Hikvision', name: 'Hikvision', logo: <HikvisionLogo height={20} /> },
                    { id: 'Dahua', name: 'Dahua', logo: <DahuaLogo height={22} /> },
                    { id: 'CP PLUS', name: 'CP PLUS', logo: <CpPlusLogo height={19} /> },
                    { id: 'Uniview', name: 'Uniview', logo: <UniviewLogo height={18} /> },
                    { id: 'TP-Link', name: 'TP-Link', logo: <TpLinkLogo height={20} /> },
                    { id: 'Other', name: 'Other', logo: <span style={{ fontWeight: 800, fontSize: 13, color: '#475569' }}>Other</span> },
                  ].map((b) => (
                    <div
                      key={b.id}
                      className={`${styles.brandPillBtn} ${calcBrand === b.id ? styles.brandSelected : ''}`}
                      onClick={() => setCalcBrand(b.id)}
                      title={`Select ${b.name}`}
                    >
                      {b.logo}
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Storage (HDD) */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>7. Storage (HDD)</h3>
                </div>

                <div className={styles.storageRow}>
                  {[
                    { id: 'nohdd', label: 'No HDD' },
                    { id: '1tb', label: '1 TB' },
                    { id: '2tb', label: '2 TB' },
                    { id: '4tb', label: '4 TB' },
                  ].map((s) => (
                    <div
                      key={s.id}
                      className={`${styles.storageBtn} ${calcStorage === s.id ? styles.storageSelected : ''}`}
                      onClick={() => setCalcStorage(s.id as any)}
                    >
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* 8. Additional Features (Optional) */}
              <div className={styles.calcFormGroup}>
                <div className={styles.groupLabelRow}>
                  <h3 className={styles.groupTitle}>8. Additional Features (Optional)</h3>
                  <button type="button" className={styles.infoTooltipBtn} title="Select optional high-performance add-ons.">
                    <InfoIcon size={14} />
                  </button>
                </div>

                <div className={styles.featuresGrid}>
                  <div
                    className={`${styles.featureCard} ${calcFeatures.includes('night-vision') ? styles.featureSelected : ''}`}
                    onClick={() => toggleFeature('night-vision')}
                  >
                    <div className={styles.featCheck} />
                    <span className={styles.featIcon}><MoonIcon size={20} /></span>
                    <div className={styles.featTitle}>Night Vision</div>
                    <div className={styles.featSub}>(Recommended)</div>
                  </div>

                  <div
                    className={`${styles.featureCard} ${calcFeatures.includes('audio') ? styles.featureSelected : ''}`}
                    onClick={() => toggleFeature('audio')}
                  >
                    <div className={styles.featCheck} />
                    <span className={styles.featIcon}><MicIcon size={20} /></span>
                    <div className={styles.featTitle}>Audio</div>
                    <div className={styles.featSub}>(Built-in Mic)</div>
                  </div>

                  <div
                    className={`${styles.featureCard} ${calcFeatures.includes('ai') ? styles.featureSelected : ''}`}
                    onClick={() => toggleFeature('ai')}
                  >
                    <div className={styles.featCheck} />
                    <span className={styles.featIcon}><CpuIcon size={20} /></span>
                    <div className={styles.featTitle}>AI Detection</div>
                    <div className={styles.featSub}>(Human/Vehicle)</div>
                  </div>

                  <div
                    className={`${styles.featureCard} ${calcFeatures.includes('amc') ? styles.featureSelected : ''}`}
                    onClick={() => toggleFeature('amc')}
                  >
                    <div className={styles.featCheck} />
                    <span className={styles.featIcon}><WrenchIcon size={20} /></span>
                    <div className={styles.featTitle}>AMC Support</div>
                    <div className={styles.featSub}>(Annual Contract)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Estimate Summary Card */}
            <div className={styles.calcSummaryCol}>
              <div className={styles.estimateCard}>
                <div className={styles.summaryHeader}>
                  <div className={styles.summaryKicker}>ESTIMATE SUMMARY</div>
                  <h3 className={styles.summaryTitle}>Your Custom CCTV Setup</h3>
                </div>

                <div className={styles.bundleVisualBox}>
                  <ITProductGraphic type="cctv-bundle" />
                </div>

                <div className={styles.summarySpecsList}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><MonitorIcon size={14} /> System Type</span>
                    <span className={styles.specVal}>{calcSystem === 'analog' ? 'Analog HD System' : 'IP Network System'}</span>
                  </div>

                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><HomeIcon size={14} /> Property Type</span>
                    <span className={styles.specVal}>{calcProperty.charAt(0).toUpperCase() + calcProperty.slice(1)}</span>
                  </div>

                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><CameraIcon size={14} /> Number of Cameras</span>
                    <span className={styles.specVal}>{calcCameras} Cameras</span>
                  </div>

                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><EyeIcon size={14} /> Resolution</span>
                    <span className={styles.specVal}>{calcResolution.toUpperCase()} ({calcResolution === '2mp' ? 'Full HD' : calcResolution === '4mp' ? 'Higher Clarity' : calcResolution === '5mp' ? 'Better Detail' : 'Ultra HD'})</span>
                  </div>

                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><ApertureIcon size={14} /> Camera Type</span>
                    <span className={styles.specVal}>{calcCameraType === 'dome' ? 'Dome Camera' : calcCameraType === 'bullet' ? 'Bullet Camera' : 'PTZ Camera'}</span>
                  </div>

                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><DiamondIcon size={14} /> Brand</span>
                    <span className={styles.specVal}>{calcBrand}</span>
                  </div>

                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><HardDriveIcon size={14} /> Storage (HDD)</span>
                    <span className={styles.specVal}>{calcStorage === 'nohdd' ? 'No HDD' : calcStorage.toUpperCase()}</span>
                  </div>

                  <div className={styles.specItem}>
                    <span className={styles.specLabel}><SettingsIcon size={14} /> Additional Features</span>
                    <span className={styles.specVal}>
                      {calcFeatures.length > 0
                        ? calcFeatures
                            .map((f) => (f === 'night-vision' ? 'Night Vision' : f === 'audio' ? 'Audio' : f === 'ai' ? 'AI Detection' : 'AMC Support'))
                            .join(', ')
                        : 'None'}
                    </span>
                  </div>
                </div>

                <div className={styles.priceBox}>
                  <div className={styles.priceLabel}>Indicative Estimate</div>
                  <div className={styles.priceAmount}>
                    ₹ {estimate.min.toLocaleString('en-IN')} – {estimate.max.toLocaleString('en-IN')}
                  </div>
                  <div className={styles.priceDisclaimer}>
                    *This is an estimated cost. Final pricing may vary based on site survey and exact requirements.
                  </div>
                </div>

                <div className={styles.summaryActions}>
                  <Link to="/contact" className={styles.btnQuotePrimary}>
                    <span>Request Exact Quote</span>
                    <ArrowRightIcon size={15} />
                  </Link>

                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnWhatsAppEstimate}
                  >
                    <WhatsAppIcon size={18} color="#25D366" />
                    <span>Get Estimate on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Popular CCTV Packages Section */}
        <section className={styles.calcPackagesSection}>
          <div className={styles.packagesHeader}>
            <div className={styles.headerLeft}>
              <h2 className={styles.packagesTitle}>Popular CCTV Packages</h2>
              <div className={styles.packagesAccent} />
            </div>
            <p className={styles.packagesDesc}>
              Pre-configured solutions for different needs. You can also customize using the calculator above.
            </p>
          </div>

          <div className={styles.packagesGrid}>
            {/* Package 1: Home Security */}
            <div className={styles.packageCard}>
              <div className={styles.packageImgBox}>
                <img src="/images/smart-home-security.webp" alt="Home Security CCTV Setup" loading="lazy" />
                <div className={styles.packageIconBadge}>
                  <HomeIcon size={20} color="#FFFFFF" />
                </div>
              </div>
              <div className={styles.packageBody}>
                <h3 className={styles.pkgTitle}>Home Security</h3>
                <p className={styles.pkgSub}>Ideal for apartments, villas and independent houses.</p>
                <ul className={styles.pkgChecklist}>
                  <li><span className={styles.checkDot}>✓</span> Entry / Exit Monitoring</li>
                  <li><span className={styles.checkDot}>✓</span> Indoor & Outdoor Coverage</li>
                  <li><span className={styles.checkDot}>✓</span> Mobile Viewing</li>
                </ul>
                <button type="button" className={styles.pkgBtn} onClick={() => applyPackage('home')}>
                  <span>Customize Now</span>
                  <ArrowRightIcon size={13} />
                </button>
              </div>
            </div>

            {/* Package 2: Business Security */}
            <div className={styles.packageCard}>
              <div className={styles.packageImgBox}>
                <img src="/images/office-business-cctv.webp" alt="Business Security CCTV Setup" loading="lazy" />
                <div className={styles.packageIconBadge}>
                  <OfficeIcon size={20} color="#FFFFFF" />
                </div>
              </div>
              <div className={styles.packageBody}>
                <h3 className={styles.pkgTitle}>Business Security</h3>
                <p className={styles.pkgSub}>Perfect for offices, shops and commercial spaces.</p>
                <ul className={styles.pkgChecklist}>
                  <li><span className={styles.checkDot}>✓</span> Multiple Area Monitoring</li>
                  <li><span className={styles.checkDot}>✓</span> Employee & Asset Safety</li>
                  <li><span className={styles.checkDot}>✓</span> Remote Access</li>
                </ul>
                <button type="button" className={styles.pkgBtn} onClick={() => applyPackage('office')}>
                  <span>Customize Now</span>
                  <ArrowRightIcon size={13} />
                </button>
              </div>
            </div>

            {/* Package 3: Enterprise Surveillance */}
            <div className={styles.packageCard}>
              <div className={styles.packageImgBox}>
                <img src="/images/warehouse-enterprise-cctv.webp" alt="Enterprise Surveillance Setup" loading="lazy" />
                <div className={styles.packageIconBadge}>
                  <WarehouseIcon size={20} color="#FFFFFF" />
                </div>
              </div>
              <div className={styles.packageBody}>
                <h3 className={styles.pkgTitle}>Enterprise Surveillance</h3>
                <p className={styles.pkgSub}>Suitable for factories, warehouses, schools and large facilities.</p>
                <ul className={styles.pkgChecklist}>
                  <li><span className={styles.checkDot}>✓</span> Wide Area Coverage</li>
                  <li><span className={styles.checkDot}>✓</span> Advanced Features (AI, Analytics)</li>
                  <li><span className={styles.checkDot}>✓</span> Scalable Solutions</li>
                </ul>
                <button type="button" className={styles.pkgBtn} onClick={() => applyPackage('enterprise')}>
                  <span>Customize Now</span>
                  <ArrowRightIcon size={13} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Analog HD vs IP Network Comparison */}
        <section className={styles.calcCompareSection}>
          <div className={styles.compareHeader}>
            <div className={styles.headerLeft}>
              <h2 className={styles.compareTitle}>Analog HD vs IP Network System</h2>
              <p className={styles.compareSub}>Choose the right technology for your security needs.</p>
            </div>
            <Link to="/contact" className={styles.helpChooseBtn}>
              <span>Help Me Choose</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className={styles.compareGrid}>
            <div className={styles.compareCard}>
              <div className={styles.compareVisual}>
                <ITProductGraphic type="analog-system" />
              </div>
              <div className={styles.compareContent}>
                <h3 className={styles.cmpTitle}>Analog HD System</h3>
                <ul className={styles.cmpList}>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Cost effective</li>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Ideal for small to medium spaces</li>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Good video quality (up to 2MP/5MP)</li>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Simple installation</li>
                </ul>
              </div>
            </div>

            <div className={styles.compareCard}>
              <div className={styles.compareVisual}>
                <ITProductGraphic type="ip-system" />
              </div>
              <div className={styles.compareContent}>
                <h3 className={styles.cmpTitle}>IP Network System</h3>
                <ul className={styles.cmpList}>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Higher video quality (4MP, 8MP+)</li>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Advanced features (AI, analytics)</li>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Scalable for large projects</li>
                  <li><span className={styles.checkIco}><CheckIcon size={14} color="#0066FF" /></span> Better for future expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Why Choose Best Technology? 4 Badges */}
        <section className={styles.calcWhyUsSection}>
          <h2 className={styles.whyUsTitle}>Why Choose Best Technology?</h2>
          <div className={styles.whyUsAccent} />

          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIconWrap}>
                <ShieldCheckIcon size={24} />
              </div>
              <div className={styles.whyUsText}>
                <h4 className={styles.whyUsHeading}>Customized Solutions</h4>
                <p className={styles.whyUsSub}>as per your requirement</p>
              </div>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIconWrap}>
                <CameraIcon size={24} />
              </div>
              <div className={styles.whyUsText}>
                <h4 className={styles.whyUsHeading}>Wide Range of</h4>
                <p className={styles.whyUsSub}>Brands & Products</p>
              </div>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIconWrap}>
                <UsersIcon size={24} />
              </div>
              <div className={styles.whyUsText}>
                <h4 className={styles.whyUsHeading}>Expert Installation</h4>
                <p className={styles.whyUsSub}>& Support</p>
              </div>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIconWrap}>
                <WrenchIcon size={24} />
              </div>
              <div className={styles.whyUsText}>
                <h4 className={styles.whyUsHeading}>AMC & Post Installation</h4>
                <p className={styles.whyUsSub}>Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* CCTV Solutions & Brand Showcase Banner */}
        <CctvCompleteSolutionsBanner theme="light" />

        {/* 6. On-Premise Site Survey & Precision BOQ */}
        <section className={styles.calcConsultationBanner}>
          <div className={styles.consultationInner}>
            <div className={styles.consultationLeft}>
              <h2 className={styles.consultTitle}>
                Need a Precision On-Premise <br />
                <span className={styles.cyanHighlight}>Site Survey & BOQ?</span>
              </h2>
              <p className={styles.consultDesc}>
                Our senior security architects conduct blind-spot risk assessments and provide line-item transparent BOQ estimates within 24 hours.
              </p>
              <div className={styles.consultPillsRow}>
                <a href="tel:+918675248969" className={styles.consultPillBtn}>
                  <PhoneIcon size={16} color="#FFFFFF" />
                  <span>+91-8675248969</span>
                </a>
                <a href="mailto:sales@besttechnologys.com" className={styles.consultPillBtn}>
                  <MailIcon size={16} color="#FFFFFF" />
                  <span>sales@besttechnologys.com</span>
                </a>
              </div>
            </div>

            <div className={styles.consultationDome}>
              <img src="/images/about-hero-camera.webp" alt="Surveillance Camera Consultation" />
            </div>
          </div>
        </section>

        
      </SiteShell>
    );
  }

  // =========================================================================
  // 2. SERVICES PAGE (/services - Matching media_1793250505323_bcb2ec87.jpg Mockup)
  // =========================================================================
  if (path === '/services') {
    const SERVICES_DATA = [
      {
        id: 'cctv',
        title: 'IP/AHD Surveillance Solutions',
        categories: ['all', 'security'],
        image: '/images/cctv-bullet.png',
        badgeBg: '#0066FF',
        badgeIcon: <CameraIcon size={22} color="#FFFFFF" />,
        desc: 'AHD, IP, Wireless, Face Recognition, Long Range Wireless Cameras and more.',
        link: '/services/cctv-surveillance',
      },
      {
        id: 'fire',
        title: 'Fire & Intrusion Detection',
        categories: ['all', 'security'],
        image: '/images/smoke-detector.webp',
        badgeBg: '#EF4444',
        badgeIcon: <FlameIcon size={22} color="#FFFFFF" />,
        desc: 'Wired/Wireless Fire Alarm System, Smoke & Fire Detectors, Perimeter Protection, Guard Patrol Systems and more.',
        link: '/services/fire-alarm',
      },
      {
        id: 'access',
        title: 'Access Control Solutions',
        categories: ['all', 'security', 'automation'],
        image: '/images/biometric-terminal.webp',
        badgeBg: '#0EA5E9',
        badgeIcon: <LockIcon size={22} color="#FFFFFF" />,
        desc: 'Single/Multi Door Controller, Elevator Controller, Fingerprint Lock, Hotel Lock, EM Locks, Handheld Scanners and more.',
        link: '/services/access-control',
      },
      {
        id: 'rfid',
        title: 'RFID / UHF / RFID Solutions',
        categories: ['all', 'security'],
        image: '/images/rfid-uhf-system.webp',
        badgeBg: '#8B5CF6',
        badgeIcon: <RfidCardIcon size={22} color="#FFFFFF" />,
        desc: 'EAS for Shopping Centers, RFID Solutions, RFID Labels & Tags.',
        link: '/services/rfid-uhf-solutions',
      },
      {
        id: 'control-room',
        title: 'Control Room Solutions',
        categories: ['all', 'security', 'it'],
        image: '/images/control-room-banner.webp',
        badgeBg: '#2563EB',
        badgeIcon: <ServerStackIcon size={22} color="#FFFFFF" />,
        desc: 'Video Wall, Video Management, Hierarchy Based Control System, Smart Data Storage Solutions and Video Data Mirroring.',
        link: '/services/cctv-surveillance',
      },
      {
        id: 'entry-automation',
        title: 'Entry Automation',
        categories: ['all', 'automation'],
        image: '/images/boom-barrier.webp',
        badgeBg: '#F59E0B',
        badgeIcon: <BarrierIcon size={22} color="#FFFFFF" />,
        desc: 'Slide/Swing Gate Automation, Customized Gate Automation, Shutter Automation, Boom Barriers, Turnstiles, Parking & Road Blockers.',
        link: '/services/boom-barrier',
      },
      {
        id: 'gps',
        title: 'GPS & Fleet Management',
        categories: ['all', 'tracking'],
        image: '/images/gps-fleet-trucks.webp',
        badgeBg: '#0284C7',
        badgeIcon: <MapPinIcon size={22} color="#FFFFFF" />,
        desc: 'GPS Devices, AIS 140 Govt Certified GPS, Vehicle Tracking, Fleet Management Reports, Driver Behaviour Alerts and more.',
        link: '/services/gps-tracking',
      },
      {
        id: 'it-hardware',
        title: 'IT Hardware & Software Solutions',
        categories: ['all', 'it'],
        image: '/images/it-hardware-suite.webp',
        badgeBg: '#1E40AF',
        badgeIcon: <SettingsIcon size={22} color="#FFFFFF" />,
        desc: 'Desktops / Laptops, Projectors, IP Printers, Payroll Software, HR Software, Visitor Management, VMS Software and more.',
        link: '/services/it-hardware-software',
      },
      {
        id: 'school',
        title: 'School Solutions',
        categories: ['all', 'it', 'tracking'],
        image: '/images/smart-school-safety.webp',
        badgeBg: '#EC4899',
        badgeIcon: <SchoolBusIcon size={22} color="#FFFFFF" />,
        desc: 'Class Room Monitoring, School Bus Tracking System, Mobile App/SMS Alerts – Parents/School, Attendance Reports and more.',
        link: '/services/school-safety',
      },
    ];

    const visibleServices = SERVICES_DATA.filter((s) => s.categories.includes(serviceTab));

    return (
      <SiteShell>
        <Seo
          title="Integrated Security & IT Services | Best Technology IT Solution"
          description="End-to-end solutions to protect, connect and empower your business. Video surveillance, fire alarms, access control, IT systems, gate automation, and GPS tracking."
          path="/services"
        />

        <div className={styles.servicesPageWrap}>
          {/* 1. Hero Section */}
          <section className={styles.servicesPageHero}>
            <div className={styles.servicesHeroInner}>
              <div className={styles.servicesHeroLeft}>
                <div className={styles.servicesHeroKicker}>OUR SERVICES</div>
                <h1 className={styles.servicesHeroTitle}>
                  Integrated Security <br />
                  & IT <span className={styles.servicesCyanHighlight}>Services</span>
                </h1>
                <p className={styles.servicesHeroSubtitle}>
                  End-to-end solutions to protect, connect and empower your business.
                </p>

                <div className={styles.servicesHeroPills}>
                  <div className={styles.servicesHeroPill}>
                    <ShieldCheckIcon size={16} color="#00C2FF" />
                    <span>Trusted Expertise</span>
                  </div>
                  <div className={styles.servicesHeroPill}>
                    <LayersIcon size={16} color="#00C2FF" />
                    <span>End-to-End Solutions</span>
                  </div>
                  <div className={styles.servicesHeroPill}>
                    <TrendingUpIcon size={16} color="#00C2FF" />
                    <span>Scalable Technology</span>
                  </div>
                  <div className={styles.servicesHeroPill}>
                    <HeadsetIcon size={16} color="#00C2FF" />
                    <span>Support You Can Rely On</span>
                  </div>
                </div>
              </div>

              <div className={styles.servicesHeroRight}>
                <div className={styles.servicesHeroImgWrap}>
                  <img
                    src="/images/hero-security-banner.webp"
                    alt="Best Technology Modern Facility"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2. Filter Tabs Strip */}
          <div className={styles.servicesFilterStrip}>
            <div className={styles.servicesFilterTabs}>
              {[
                { id: 'all', label: 'All Services' },
                { id: 'security', label: 'Security Solutions' },
                { id: 'it', label: 'IT Solutions' },
                { id: 'automation', label: 'Automation' },
                { id: 'tracking', label: 'Tracking & Management' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.servicesFilterBtn} ${
                    serviceTab === tab.id ? styles.activeFilterBtn : ''
                  }`}
                  onClick={() => setServiceTab(tab.id as any)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={styles.servicesFilterNote}>
              <LayersIcon size={16} color="#0066FF" />
              <span>Explore all our services designed for a safer and smarter tomorrow.</span>
            </div>
          </div>

          {/* 3. Catalog Grid (9 Service Cards) */}
          <section className={styles.servicesCatalogGrid}>
            {visibleServices.map((service) => (
              <div key={service.id} className={styles.serviceMockupCard}>
                <div className={styles.cardImgWrap}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div
                  className={styles.cardFloatingBadge}
                  style={{ background: service.badgeBg }}
                >
                  {service.badgeIcon}
                </div>

                <div className={styles.cardBodyWrap}>
                  <div className={styles.cardTitleRow}>
                    <h3 className={styles.cardTitleText}>{service.title}</h3>
                    <Link
                      to={service.link}
                      className={styles.cardArrowBtn}
                      aria-label={`View ${service.title}`}
                    >
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                  <p className={styles.cardDescText}>{service.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Brand Logos Bar */}
          <TrustedBrandsBar
            theme="light"
            title="CCTV SOLUTIONS  |  SECURITY  |  PEACE OF MIND"
            subtitle="Authorized installation, integration and AMC support for all leading CCTV & networking brands"
          />

          {/* 4. Maintenance & Support Curved Section */}
          <section className={styles.servicesAmcBanner}>
            <div className={styles.amcBannerImgCol}>
              <img
                src="/images/amc-technician.webp"
                alt="Reliable AMC Support Engineer"
                loading="lazy"
              />
              <div className={styles.amcImgFadeOverlay} />
            </div>

            <div className={styles.amcBannerCenterCol}>
              <div className={styles.amcBannerKicker}>MAINTENANCE & SUPPORT</div>
              <h2 className={styles.amcBannerHeading}>
                Reliable Service <br />
                <span className={styles.amcCyanHighlight}>Beyond Installation</span>
              </h2>
              <p className={styles.amcBannerSubtitle}>
                Comprehensive AMC services to ensure uninterrupted performance and peace of mind.
              </p>
              <Link to="/amc" className={styles.amcBannerExploreBtn}>
                <span>Explore AMC</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            <div className={styles.amcBannerRightCol}>
              <div className={styles.amcFeatureRow}>
                <div className={styles.amcFeatureIconCircle}>
                  <WrenchIcon size={18} color="#00C2FF" />
                </div>
                <span>Regular Maintenance</span>
              </div>

              <div className={styles.amcFeatureRow}>
                <div className={styles.amcFeatureIconCircle}>
                  <HeadsetIcon size={18} color="#00C2FF" />
                </div>
                <span>Quick Support</span>
              </div>

              <div className={styles.amcFeatureRow}>
                <div className={styles.amcFeatureIconCircle}>
                  <MonitorIcon size={18} color="#00C2FF" />
                </div>
                <span>System Health Monitoring</span>
              </div>

              <div className={styles.amcFeatureRow}>
                <div className={styles.amcFeatureIconCircle}>
                  <ShieldCheckIcon size={18} color="#00C2FF" />
                </div>
                <span>Reduced Downtime</span>
              </div>
            </div>
          </section>

          {/* 5. Bottom CTA Strip */}
          <section className={styles.servicesCtaStrip}>
            <div className={styles.ctaLeftHeading}>
              <h2 className={styles.ctaTitle}>
                Empower Your Security & IT Operations Today
              </h2>
              <div className={styles.ctaUnderlineBar} />
            </div>

            <div className={styles.ctaRightActions}>
              <a href="tel:+918675248969" className={styles.ctaContactPill}>
                <div className={styles.ctaPillIconCircle}>
                  <PhoneIcon size={16} />
                </div>
                <div className={styles.ctaPillInfo}>
                  <span className={styles.ctaPillValue}>+91-8675248969</span>
                  <span className={styles.ctaPillSub}>Call Us</span>
                </div>
              </a>

              <a
                href="mailto:sales@besttechnologys.com"
                className={styles.ctaContactPill}
              >
                <div className={styles.ctaPillIconCircle}>
                  <MailIcon size={16} />
                </div>
                <div className={styles.ctaPillInfo}>
                  <span className={styles.ctaPillValue}>
                    sales@besttechnologys.com
                  </span>
                  <span className={styles.ctaPillSub}>Email Us</span>
                </div>
              </a>

              <Link to="/contact" className={styles.ctaQuoteBtn}>
                <span>Get a Quote</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </section>


        </div>
      </SiteShell>
    );
  }

  // =========================================================================
  // 3. BLOGS LIST PAGE (/blogs & /blog - Matching media_1793252956543_b7b2cf7c.jpg Mockup)
  // =========================================================================
  if (path === '/blogs' || path === '/blog') {
    const BLOG_CATEGORIES = [
      { id: 'All Posts', label: 'All Posts', count: 24, icon: <FileTextIcon size={15} /> },
      { id: 'CCTV', label: 'CCTV', count: 8, icon: <CameraIcon size={15} /> },
      { id: 'Access Control', label: 'Access Control', count: 5, icon: <LockIcon size={15} /> },
      { id: 'Networking', label: 'Networking', count: 4, icon: <NetworkIcon size={15} /> },
      { id: 'IT Solutions', label: 'IT Solutions', count: 4, icon: <MonitorIcon size={15} /> },
      { id: 'Maintenance', label: 'Maintenance', count: 3, icon: <WrenchIcon size={15} /> },
      { id: 'Buying Guide', label: 'Buying Guide', count: 6, icon: <ShoppingBagIcon size={15} /> },
      { id: 'Industry Updates', label: 'Industry Updates', count: 4, icon: <TrendingUpIcon size={15} /> },
    ];

    const ALL_BLOG_POSTS = [
      {
        id: 'how-to-choose-cctv-camera-home',
        title: 'How to Choose the Right CCTV Camera for Your Home',
        category: 'CCTV',
        image: '/images/smart-home-security.webp',
        desc: 'A complete guide to selecting the best CCTV camera based on your security needs, budget and property size.',
        date: 'Oct 28, 2026',
        readTime: '5 min read',
      },
      {
        id: 'dome-vs-bullet-camera-which-is-better',
        title: 'Dome vs Bullet Camera – Which is Better?',
        category: 'Buying Guide',
        image: '/images/cctv-bullet.png',
        desc: 'Compare dome and bullet cameras based on design, features, use cases and installation requirements.',
        date: 'Oct 25, 2026',
        readTime: '6 min read',
      },
      {
        id: 'benefits-of-remote-monitoring-business',
        title: 'Benefits of Remote Monitoring for Your Business',
        category: 'IT Solutions',
        image: '/images/remote-cctv-monitoring-app.webp',
        desc: 'Discover how remote monitoring improves security, reduces risks and gives you peace of mind.',
        date: 'Oct 20, 2026',
        readTime: '4 min read',
      },
      {
        id: 'how-good-network-setup-improves-business',
        title: 'How a Good Network Setup Improves Your Business',
        category: 'Networking',
        image: '/images/network-server-infrastructure.webp',
        desc: 'Learn how a reliable network infrastructure ensures better performance, security and productivity.',
        date: 'Oct 28, 2026',
        readTime: '5 min read',
      },
      {
        id: 'types-of-access-control-systems',
        title: 'Types of Access Control Systems and Their Applications',
        category: 'Access Control',
        image: '/images/biometric-terminal.webp',
        desc: 'Explore different access control solutions like RFID, biometric, and face recognition systems.',
        date: 'Oct 15, 2026',
        readTime: '6 min read',
      },
      {
        id: 'why-regular-amc-is-important-security',
        title: 'Why Regular AMC is Important for Security Systems',
        category: 'Maintenance',
        image: '/images/amc-technician.webp',
        desc: 'Understand the benefits of Annual Maintenance Contracts and how they ensure uninterrupted performance.',
        date: 'Oct 10, 2026',
        readTime: '4 min read',
      },
      {
        id: 'latest-trends-in-cctv-technology-2026',
        title: 'Latest Trends in CCTV Technology (2026)',
        category: 'Industry Updates',
        image: '/images/control-room-banner.webp',
        desc: 'Explore the new innovations in AI, analytics, and cloud-based surveillance shaping the future of security.',
        date: 'Oct 08, 2026',
        readTime: '5 min read',
      },
      {
        id: 'cctv-installation-factories-warehouses',
        title: 'CCTV Installation for Factories and Warehouses – Key Considerations',
        category: 'CCTV',
        image: '/images/warehouse-enterprise-cctv.webp',
        desc: 'Important factors to consider before installing CCTV in large industrial spaces.',
        date: 'Oct 05, 2026',
        readTime: '5 min read',
      },
      {
        id: 'structured-cabling-guide-for-businesses',
        title: 'Structured Cabling – A Guide for Businesses',
        category: 'IT Solutions',
        image: '/images/structured-cabling-rack.webp',
        desc: 'Learn how structured cabling improves network reliability, scalability and long-term cost efficiency.',
        date: 'Sep 28, 2026',
        readTime: '6 min read',
      },
    ];

    const POPULAR_POSTS = [
      {
        id: 'how-to-choose-cctv-camera-home',
        title: 'How to Choose the Right CCTV Camera for Your Home',
        image: '/images/smart-home-security.webp',
        date: 'Oct 28, 2026',
      },
      {
        id: 'dome-vs-bullet-camera-which-is-better',
        title: 'Dome vs Bullet Camera – Which is Better?',
        image: '/images/cctv-bullet.png',
        date: 'Oct 25, 2026',
      },
      {
        id: 'benefits-of-remote-monitoring-business',
        title: 'Benefits of Remote Monitoring for Your Business',
        image: '/images/remote-cctv-monitoring-app.webp',
        date: 'Oct 20, 2026',
      },
      {
        id: 'types-of-access-control-systems',
        title: 'Types of Access Control Systems',
        image: '/images/biometric-terminal.webp',
        date: 'Oct 15, 2026',
      },
    ];

    const filteredPosts = ALL_BLOG_POSTS.filter((post) => {
      const matchesCat = blogCategory === 'All Posts' || post.category === blogCategory;
      const matchesSearch =
        !blogSearchQuery.trim() ||
        post.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
        post.desc.toLowerCase().includes(blogSearchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    return (
      <SiteShell>
        <Seo
          title="Security Insights, Guides & Technology Updates | Best Technology IT Solution"
          description="Stay informed with the latest trends, tips and expert advice on CCTV, security systems, biometric access, networking, and IT solutions."
          path="/blogs"
        />

        <div className={styles.blogPageWrap}>
          {/* 1. Hero Section */}
          <section className={styles.blogHeroSection}>
            <div className={styles.blogHeroInner}>
              <div className={styles.blogHeroLeft}>
                <div className={styles.blogHeroKicker}>BLOG</div>
                <h1 className={styles.blogHeroTitle}>
                  Insights, Guides & <br />
                  <span className={styles.blogCyanHighlight}>Security Updates</span>
                </h1>
                <p className={styles.blogHeroSubtitle}>
                  Stay informed with the latest trends, tips and expert advice on CCTV, security systems and IT solutions.
                </p>
              </div>

              <div className={styles.blogHeroRight}>
                <div className={styles.blogHeroImgWrap}>
                  <img
                    src="/images/cctv-bullet.png"
                    alt="High-Definition Surveillance Camera Column"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2. Category Filter Pills Strip */}
          <div className={styles.blogFilterStrip}>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.blogFilterPill} ${
                  blogCategory === cat.id ? styles.activeFilterPill : ''
                }`}
                onClick={() => setBlogCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* 3. Main 2-Column Section */}
          <div className={styles.blogMainContainer}>
            {/* Left Column: 9 Cards & Pagination */}
            <div className={styles.blogLeftColumn}>
              <div className={styles.blogCardsGrid}>
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blogs/${post.id}`}
                    className={styles.blogGridCard}
                  >
                    <div className={styles.blogCardImgBox}>
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <span className={styles.blogCardCategoryBadge}>{post.category}</span>
                    </div>

                    <div className={styles.blogCardContent}>
                      <div>
                        <h3 className={styles.blogCardTitle}>{post.title}</h3>
                        <p className={styles.blogCardDesc}>{post.desc}</p>
                      </div>

                      <div className={styles.blogCardMetaRow}>
                        <div className={styles.metaItemsLeft}>
                          <span className={styles.metaItem}>
                            <CalendarIcon size={13} />
                            <span>{post.date}</span>
                          </span>
                          <span className={styles.metaItem}>
                            <ClockIcon size={13} />
                            <span>{post.readTime}</span>
                          </span>
                        </div>

                        <div className={styles.blogCardArrowBtn}>
                          <ArrowRightIcon size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className={styles.blogPaginationRow}>
                <button
                  type="button"
                  className={styles.paginationBtn}
                  disabled={blogPageNum === 1}
                  onClick={() => setBlogPageNum((p) => Math.max(1, p - 1))}
                  aria-label="Previous Page"
                >
                  <ArrowLeftIcon size={14} />
                </button>

                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`${styles.paginationBtn} ${
                      blogPageNum === page ? styles.activePageBtn : ''
                    }`}
                    onClick={() => setBlogPageNum(page)}
                  >
                    {page}
                  </button>
                ))}

                <span style={{ padding: '0 4px', color: '#94A3B8' }}>...</span>

                <button
                  type="button"
                  className={`${styles.paginationBtn} ${
                    blogPageNum === 8 ? styles.activePageBtn : ''
                  }`}
                  onClick={() => setBlogPageNum(8)}
                >
                  8
                </button>

                <button
                  type="button"
                  className={styles.paginationBtn}
                  disabled={blogPageNum === 8}
                  onClick={() => setBlogPageNum((p) => Math.min(8, p + 1))}
                  aria-label="Next Page"
                >
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <aside className={styles.blogSidebar}>
              {/* Widget 1: Search Articles */}
              <div className={styles.sidebarWidgetCard}>
                <h3 className={styles.sidebarWidgetTitle}>Search Articles</h3>
                <form
                  className={styles.sidebarSearchForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search blogs, topics..."
                    value={blogSearchQuery}
                    onChange={(e) => setBlogSearchQuery(e.target.value)}
                    className={styles.sidebarSearchInput}
                  />
                  <button
                    type="submit"
                    className={styles.sidebarSearchBtn}
                    aria-label="Search"
                  >
                    <SearchIcon size={16} />
                  </button>
                </form>
              </div>

              {/* Widget 2: Categories */}
              <div className={styles.sidebarWidgetCard}>
                <h3 className={styles.sidebarWidgetTitle}>Categories</h3>
                <div className={styles.sidebarCategoryList}>
                  {BLOG_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`${styles.sidebarCategoryItem} ${
                        blogCategory === cat.id ? styles.activeCategoryItem : ''
                      }`}
                      onClick={() => setBlogCategory(cat.id)}
                    >
                      <div className={cat.label ? styles.categoryLeftWrap : ''}>
                        {cat.icon}
                        <span>{cat.label}</span>
                      </div>
                      <span className={styles.categoryCountBadge}>{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Widget 3: Popular Posts */}
              <div className={styles.sidebarWidgetCard}>
                <h3 className={styles.sidebarWidgetTitle}>Popular Posts</h3>
                <div className={styles.sidebarPopularPosts}>
                  {POPULAR_POSTS.map((pop) => (
                    <Link
                      key={pop.id}
                      to={`/blogs/${pop.id}`}
                      className={styles.popularPostItem}
                    >
                      <img
                        src={pop.image}
                        alt={pop.title}
                        className={styles.popularPostThumb}
                        loading="lazy"
                      />
                      <div className={styles.popularPostInfo}>
                        <h4 className={styles.popularPostTitle}>{pop.title}</h4>
                        <span className={styles.popularPostDate}>{pop.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget 4: Subscribe to Our Blog */}
              <div className={styles.sidebarSubscribeCard}>
                <div className={styles.subscribeIconCircle}>
                  <MailIcon size={22} color="#00C2FF" />
                </div>
                <h3 className={styles.subscribeTitle}>Subscribe to Our Blog</h3>
                <p className={styles.subscribeSubtext}>
                  Get the latest updates, security tips and technology insights directly to your inbox.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) {
                      setNewsletterSubscribed(true);
                      setTimeout(() => {
                        setNewsletterEmail('');
                      }, 3000);
                    }
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={styles.subscribeInput}
                  />
                  <button type="submit" className={styles.subscribeSubmitBtn}>
                    <span>Subscribe</span>
                    <ArrowRightIcon size={14} />
                  </button>
                </form>

                {newsletterSubscribed && (
                  <div className={styles.subscribeSuccessMsg}>
                    ✓ Thank you for subscribing! Check your inbox soon.
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* 4. Bottom Consultation Advice Banner */}
          <section className={styles.blogAdviceBanner}>
            <div className={styles.adviceLeftText}>
              <h2 className={styles.adviceTitle}>
                Need Expert Advice on Your Security Needs?
              </h2>
              <p className={styles.adviceSubtitle}>
                Our team is here to help you with the right solutions.
              </p>
              <Link to="/contact" className={styles.adviceConsultBtn}>
                <span>Get a Free Consultation</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            <div className={styles.adviceRightImgBox}>
              <img
                src="/images/cctv-bullet.png"
                alt="Expert Security Consultation"
                loading="lazy"
              />
            </div>
          </section>


        </div>
      </SiteShell>
    );
  }

  // =========================================================================
  // 4. BLOG DETAIL PAGE (/blogs/:id & /blog/:id)
  // =========================================================================
  if ((path.startsWith('/blogs/') || path.startsWith('/blog/')) && id) {
    const post: BlogPost | undefined = BLOGS.find((b) => b.id === id);

    if (!post) {
      return (
        <SiteShell>
          <div className={styles.section} style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h2>Article Not Found</h2>
            <p>The requested blog post could not be located.</p>
            <Link to="/blogs" className={styles.heroPrimaryBtn}>Back to Blogs</Link>
          </div>
        </SiteShell>
      );
    }

    return (
      <SiteShell>
        <Seo
          title={`${post.title} | Best Technologies Blog`}
          description={post.summary}
          path={`/blogs/${post.id}`}
        />

        <div className={styles.innerHero}>
          <span className={styles.innerBadge}>{post.category}</span>
          <h1 className={styles.innerTitle}>{post.title}</h1>
          <p className={styles.innerSubtitle}>
            Published on {post.date} • {post.readTime}
          </p>
        </div>

        <section className={styles.section} style={{ maxWidth: '860px' }}>
          {/* Featured Image */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', boxShadow: '0 4px 14px rgba(11,27,61,0.08)' }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Article Summary Box */}
          <div style={{ background: '#EFF6FF', borderLeft: '4px solid #0066FF', padding: '20px 24px', borderRadius: '0 8px 8px 0', marginBottom: '32px', fontSize: '16px', fontStyle: 'italic', color: '#1E293B', lineHeight: 1.6 }}>
            {post.summary}
          </div>

          {/* Article Content Paragraphs */}
          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#334155' }}>
            {post.content.map((p, idx) => (
              <p key={idx} style={{ marginBottom: '22px' }}>
                {p}
              </p>
            ))}
          </div>

          {/* Inquiry Box */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '28px', marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: 800, color: '#0B1B3D' }}>
                Want to implement this solution at your property?
              </h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748B' }}>
                Our specialists provide free design schematics and equipment proposals.
              </p>
            </div>
            <a
              href={`https://wa.me/918675248969?text=${encodeURIComponent(`Hello Best Technologies, I read your article "${post.title}" and would like to discuss implementing this solution.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroPrimaryBtn}
            >
              <WhatsAppIcon size={16} />
              <span>Consult on WhatsApp</span>
            </a>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link to="/blogs" style={{ color: '#0066FF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              ← Back to All Articles
            </Link>
          </div>
        </section>
      </SiteShell>
    );
  }

  // =========================================================================
  // 5. CONTACT PAGE (/contact - Matching media_1793249388498_d3afeaac.jpg Mockup)
  // =========================================================================
  return (
    <SiteShell>
      <Seo
        title="Contact Us | Best Technologies - Let's Build a Safer Tomorrow Together"
        description="Get in touch with Best Technologies for enquiries, quotations, or 24/7 technical support. Call +91-8675248969 or email sales@besttechnologys.com."
        path="/contact"
      />

      {/* 1. Hero Banner */}
      <section className={styles.contactPageHero}>
        <div className={styles.contactHeroGrid}>
          <div className={styles.contactHeroLeft}>
            <div className={styles.contactHeroKicker}>CONTACT US</div>
            <h1 className={styles.contactHeroTitle}>
              Let’s Build a <br />
              Safer Tomorrow <br />
              <span className={styles.contactHeroCyan}>Together</span>
            </h1>
            <div className={styles.contactHeroAccentLine} />
            <p className={styles.contactHeroSubtitle}>
              Get in touch with us for enquiries, quotations or support. We’re here to help you with the right security and IT solutions for your needs.
            </p>
          </div>

          <div className={styles.contactHeroRight}>
            <div className={styles.contactDomeStage}>
              <img
                src="/images/about-hero-camera.webp"
                alt="Best Technologies Ceiling Surveillance Camera"
              />
            </div>
            <div className={styles.contactFrostedCard}>
              <div className={styles.frostedRow}>
                <span className={styles.frostedIcon}><HeadsetIcon size={18} /></span>
                <span className={styles.frostedText}>Quick Response</span>
              </div>
              <div className={styles.frostedRow}>
                <span className={styles.frostedIcon}><SettingsIcon size={18} /></span>
                <span className={styles.frostedText}>Expert Support</span>
              </div>
              <div className={styles.frostedRow}>
                <span className={styles.frostedIcon}><ShieldCheckIcon size={18} /></span>
                <span className={styles.frostedText}>Custom Solutions</span>
              </div>
              <div className={styles.frostedRow}>
                <span className={styles.frostedIcon}><UsersIcon size={18} /></span>
                <span className={styles.frostedText}>For Businesses, Institutions & Government</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top 4 Contact Info Cards Strip */}
      <section className={styles.contactInfoCardsStrip}>
        <div className={styles.cardsRowGrid}>
          {/* Card 1: Call Us */}
          <div className={styles.infoStripCard}>
            <div className={styles.infoCardIconWrap}>
              <PhoneIcon size={20} color="#FFFFFF" />
            </div>
            <div className={styles.infoCardContent}>
              <div className={styles.cardLabel}>Call Us</div>
              <a href="tel:+918675248969" className={styles.cardMainVal}>
                +91-8675248969
              </a>
              <div className={styles.cardSubVal}>Mon - Sat, 9:00 AM - 6:00 PM</div>
            </div>
          </div>

          {/* Card 2: Email Us */}
          <div className={styles.infoStripCard}>
            <div className={styles.infoCardIconWrap}>
              <MailIcon size={20} color="#FFFFFF" />
            </div>
            <div className={styles.infoCardContent}>
              <div className={styles.cardLabel}>Email Us</div>
              <a href="mailto:sales@besttechnologys.com" className={styles.cardMainVal}>
                sales@besttechnologys.com
              </a>
              <div className={styles.cardSubVal}>We reply within 24 hours</div>
            </div>
          </div>

          {/* Card 3: Our Address */}
          <div className={styles.infoStripCard}>
            <div className={styles.infoCardIconWrap}>
              <MapPinIcon size={20} color="#FFFFFF" />
            </div>
            <div className={styles.infoCardContent}>
              <div className={styles.cardLabel}>Our Address</div>
              <span className={styles.cardMainVal}>{COMPANY.addressLine1}</span>
              <div className={styles.cardSubVal}>{COMPANY.addressLine2}</div>
            </div>
          </div>

          {/* Card 4: Working Hours */}
          <div className={styles.infoStripCard}>
            <div className={styles.infoCardIconWrap}>
              <ClockIcon size={20} color="#FFFFFF" />
            </div>
            <div className={styles.infoCardContent}>
              <div className={styles.cardLabel}>Working Hours</div>
              <span className={styles.cardMainVal}>Mon - Sat</span>
              <div className={styles.cardSubVal}>9:00 AM - 6:00 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main 2-Column Section (Form + Map) */}
      <section className={styles.contactMainSection}>
        <div className={styles.contactTwoColGrid}>
          {/* Left Column: Consultation Form Card */}
          <div className={styles.consultationFormCard}>
            <div className={styles.formKicker}>SEND US A MESSAGE</div>
            <h2 className={styles.formHeading}>
              Get a <span className={styles.formHeadingCyan}>Free Consultation</span>
            </h2>
            <p className={styles.formSubtext}>
              Fill in the details and our team will get back to you shortly.
            </p>

            {formSubmitted ? (
              <div style={{ padding: '28px', background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '12px', color: '#166534', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#22C55E', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                  <CheckIcon size={24} color="#FFFFFF" />
                </div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 800 }}>Inquiry Dispatched!</h3>
                <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: 1.5 }}>
                  Thank you, <strong>{formName}</strong>. Your consultation request was delivered to our team on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    background: '#166534',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className={styles.formInputsGrid}>
                {/* Row 1: Full Name & Company Name */}
                <div className={styles.inputsRowTwoCol}>
                  <div className={styles.formItem}>
                    <label>Full Name *</label>
                    <div className={styles.inputWithIcon}>
                      <span className={styles.inputIcon}><UsersIcon size={16} /></span>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formItem}>
                    <label>Company Name</label>
                    <div className={styles.inputWithIcon}>
                      <span className={styles.inputIcon}><OfficeIcon size={16} /></span>
                      <input
                        type="text"
                        placeholder="Enter company name"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email Address & Phone Number */}
                <div className={styles.inputsRowTwoCol}>
                  <div className={styles.formItem}>
                    <label>Email Address *</label>
                    <div className={styles.inputWithIcon}>
                      <span className={styles.inputIcon}><MailIcon size={16} /></span>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formItem}>
                    <label>Phone Number *</label>
                    <div className={styles.inputWithIcon}>
                      <span className={styles.inputIcon}><PhoneIcon size={16} /></span>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your number"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Service Interested In */}
                <div className={styles.formItem}>
                  <label>Service Interested In</label>
                  <div className={styles.inputWithIcon}>
                    <span className={styles.inputIcon}><SettingsIcon size={16} /></span>
                    <select value={formType} onChange={(e) => setFormType(e.target.value)}>
                      <option value="IP/AHD Surveillance Solutions">IP/AHD Surveillance Solutions</option>
                      <option value="Access Control Solutions">Access Control Solutions</option>
                      <option value="Fire & Intrusion Detection">Fire & Intrusion Detection</option>
                      <option value="Gate & Entry Automation">Gate & Entry Automation</option>
                      <option value="GPS & Fleet Management">GPS & Fleet Management</option>
                      <option value="RFID / UHF Solutions">RFID / UHF Solutions</option>
                      <option value="IT Hardware & Software Solutions">IT Hardware & Software Solutions</option>
                      <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                      <option value="Other Security Requirements">Other Security Requirements</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Your Message */}
                <div className={styles.formItem}>
                  <label>Your Message *</label>
                  <div className={styles.inputWithIcon}>
                    <span className={styles.inputIcon} style={{ top: '16px' }}>
                      <MessageSquareIcon size={16} />
                    </span>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your requirement..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className={styles.sendBtnRow}>
                  <button type="submit" className={styles.btnSendMessage}>
                    <SendIcon size={18} color="#FFFFFF" />
                    <span>Send Message</span>
                    <ArrowRightIcon size={15} color="#FFFFFF" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Map & Quick Actions */}
          <div className={styles.contactRightCol}>
            {/* Interactive Location Map Box */}
            <div className={styles.contactMapContainer}>
              <HosurMapCanvas />

              {/* Floating Location Card over map */}
              <div className={styles.floatingLocationCard}>
                <div className={styles.locBadgeHeader}>
                  <span className={styles.locShieldIcon}><ShieldCheckIcon size={18} /></span>
                  <span className={styles.locTitle}>Our Location</span>
                </div>
                <p className={styles.locAddress}>
                  {COMPANY.addressLine1} <br />
                  {COMPANY.addressLine2}
                </p>
                <a
                  href="https://share.google/Ewg1Jd66W5yKnZFpe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnGetDirections}
                >
                  <span>Get Directions</span>
                  <ArrowRightIcon size={12} color="#FFFFFF" />
                </a>
              </div>

              {/* Map Zoom Controls Overlay */}
              <div className={styles.mapControlsOverlay}>
                <button type="button" className={styles.mapControlBtn} aria-label="Center location" onClick={() => window.open('https://share.google/Ewg1Jd66W5yKnZFpe', '_blank')}>
                  <TargetIcon size={16} />
                </button>
                <button type="button" className={styles.mapControlBtn} aria-label="Zoom in">+</button>
                <button type="button" className={styles.mapControlBtn} aria-label="Zoom out">-</button>
              </div>
            </div>

            {/* Quick Action Cards Below Map */}
            <div className={styles.mapActionCardsRow}>
              <a href="tel:+918675248969" className={styles.mapActionCard}>
                <div className={styles.actionIconWrap}>
                  <HeadsetIcon size={22} />
                </div>
                <div className={styles.actionText}>
                  <div className={styles.actionLabel}>Sales Enquiry</div>
                  <div className={styles.actionValueRow}>
                    <span>+91-8675248969</span>
                    <span className={styles.actionArrow}>→</span>
                  </div>
                </div>
              </a>

              <a href="mailto:sales@besttechnologys.com" className={styles.mapActionCard}>
                <div className={styles.actionIconWrap}>
                  <MailIcon size={22} />
                </div>
                <div className={styles.actionText}>
                  <div className={styles.actionLabel}>Email Support</div>
                  <div className={styles.actionValueRow}>
                    <span>sales@besttechnologys.com</span>
                    <span className={styles.actionArrow}>→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Contact Us? 4 Cards */}
      <section className={styles.whyContactUsSection}>
        <h2 className={styles.whyContactTitle}>Why Contact Us?</h2>
        <div className={styles.whyContactAccent} />

        <div className={styles.whyContactGrid}>
          <div className={styles.whyContactCard}>
            <div className={styles.cardCircleIcon}>
              <MessageSquareIcon size={22} />
            </div>
            <div className={styles.cardText}>
              <h4 className={styles.cardHeading}>Expert Consultation</h4>
              <p className={styles.cardSub}>Get the right solution for your needs</p>
            </div>
          </div>

          <div className={styles.whyContactCard}>
            <div className={styles.cardCircleIcon}>
              <FileTextIcon size={22} />
            </div>
            <div className={styles.cardText}>
              <h4 className={styles.cardHeading}>Customized Quotations</h4>
              <p className={styles.cardSub}>Tailored as per your requirements</p>
            </div>
          </div>

          <div className={styles.whyContactCard}>
            <div className={styles.cardCircleIcon}>
              <UsersIcon size={22} />
            </div>
            <div className={styles.cardText}>
              <h4 className={styles.cardHeading}>Dedicated Support</h4>
              <p className={styles.cardSub}>Pre & post installation assistance</p>
            </div>
          </div>

          <div className={styles.whyContactCard}>
            <div className={styles.cardCircleIcon}>
              <ShieldCheckIcon size={22} />
            </div>
            <div className={styles.cardText}>
              <h4 className={styles.cardHeading}>Trusted Partner</h4>
              <p className={styles.cardSub}>For businesses, institutions and government</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Angled Multi-Image Banner ("HAVE A PROJECT IN MIND?") */}
      <section className={styles.contactBottomBanner}>
        <div className={styles.bottomBannerInner}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerKicker}>HAVE A PROJECT IN MIND?</div>
            <h2 className={styles.bannerHeadline}>
              We’re Ready to Support <br />
              Your <span className={styles.cyanHighlight}>Security Needs</span>
            </h2>
            <Link to="/cost-calculator" className={styles.bannerQuoteBtn}>
              <span>Get a Quote</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className={styles.bannerSlicesRow}>
            <div className={styles.bannerSlice}>
              <img src="/images/contact-slice-camera.webp" alt="CCTV Starlight Dome Camera" loading="lazy" />
            </div>
            <div className={styles.bannerSlice}>
              <img src="/images/smoke-detector.webp" alt="Fire & Smoke Alarm Detector" loading="lazy" />
            </div>
            <div className={styles.bannerSlice}>
              <img src="/images/biometric-terminal.webp" alt="Biometric Card Access Terminal" loading="lazy" />
            </div>
            <div className={styles.bannerSlice}>
              <img src="/images/boom-barrier.webp" alt="Entry Automation Boom Barrier" loading="lazy" />
            </div>
          </div>
        </div>
      </section>


    </SiteShell>
  );
};

export default SectionPage;
