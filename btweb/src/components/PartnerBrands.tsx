import styles from './PartnerBrands.module.less';
import React from 'react';
import {
  CameraIcon,
  WrenchIcon,
  MonitorIcon,
  ShieldCheckIcon,
  NetworkIcon,
  SettingsIcon,
} from '@/components/Icons';
import { Link } from '@umijs/max';

interface LogoProps {
  height?: number;
  className?: string;
  grayscale?: boolean;
}

/**
 * HIKVISION Authentic Logo
 */
export const HikvisionLogo: React.FC<LogoProps> = ({ height = 28, className = '', grayscale = false }) => {
  const redColor = grayscale ? '#64748B' : '#E60012';
  const darkColor = grayscale ? '#94A3B8' : '#2A2E35';

  return (
    <svg
      height={height}
      viewBox="0 0 210 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Hikvision"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <g transform="skewX(-10)">
        <text
          x="8"
          y="30"
          fill={redColor}
          fontFamily="'Arial Black', 'Impact', 'Segoe UI Black', sans-serif"
          fontWeight="900"
          fontSize="33"
          letterSpacing="0.5px"
        >
          HIK
        </text>
        <text
          x="80"
          y="30"
          fill={darkColor}
          fontFamily="'Arial Black', 'Impact', 'Segoe UI Black', sans-serif"
          fontWeight="900"
          fontSize="33"
          letterSpacing="0.8px"
        >
          VISION
        </text>
      </g>
    </svg>
  );
};

/**
 * DAHUA TECHNOLOGY Authentic Logo
 */
export const DahuaLogo: React.FC<LogoProps> = ({ height = 30, className = '', grayscale = false }) => {
  const red = grayscale ? '#64748B' : '#D71920';
  const black = grayscale ? '#94A3B8' : '#1C1F26';

  return (
    <svg
      height={height}
      viewBox="0 0 200 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Dahua Technology"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      {/* Red circle emblem with white stylized 'a' swoosh */}
      <circle cx="21" cy="21" r="19" fill={red} />
      <path
        d="M21 7C14.5 7 10 11.5 10 17.5C10 24.5 16 28 21 28C26 28 29.5 25.5 30 22C30 19 28 17 24 17C18.5 17 15.5 20.5 15.5 20.5"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="21" cy="20.5" r="2.8" fill="#FFFFFF" />

      {/* "alhua" text */}
      <text
        x="48"
        y="25"
        fill={black}
        fontFamily="'Arial Rounded MT Bold', 'Helvetica Neue', 'Segoe UI', Arial, sans-serif"
        fontWeight="800"
        fontSize="24"
        letterSpacing="-0.5px"
      >
        alhua
      </text>

      {/* "TECHNOLOGY" subtitle */}
      <text
        x="49"
        y="37"
        fill={black}
        fontFamily="'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="700"
        fontSize="8.5"
        letterSpacing="2.8px"
      >
        TECHNOLOGY
      </text>
    </svg>
  );
};

/**
 * CP PLUS Authentic Logo
 */
export const CpPlusLogo: React.FC<LogoProps> = ({ height = 28, className = '', grayscale = false }) => {
  const red = grayscale ? '#64748B' : '#E30613';

  return (
    <svg
      height={height}
      viewBox="0 0 180 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CP PLUS"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      {/* Emblem: stylized 4-point aperture cross */}
      <g transform="translate(4, 5)">
        <line x1="2" y1="2" x2="26" y2="26" stroke={red} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="26" y1="2" x2="2" y2="26" stroke={red} strokeWidth="2.2" strokeLinecap="round" />
        <polygon points="14,0 18,7 10,7" fill={red} />
        <polygon points="14,28 18,21 10,21" fill={red} />
        <polygon points="0,14 7,10 7,18" fill={red} />
        <polygon points="28,14 21,10 21,18" fill={red} />
        <circle cx="14" cy="14" r="3.2" fill={red} />
      </g>

      {/* CP PLUS bold text */}
      <text
        x="42"
        y="28"
        fill={red}
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="25"
        letterSpacing="1px"
      >
        CP PLUS
      </text>
    </svg>
  );
};

/**
 * UNIVIEW Authentic Logo
 */
export const UniviewLogo: React.FC<LogoProps> = ({ height = 26, className = '', grayscale = false }) => {
  const dark = grayscale ? '#64748B' : '#1C1F26';
  const red = grayscale ? '#94A3B8' : '#E60012';

  return (
    <svg
      height={height}
      viewBox="0 0 150 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Uniview"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <text
        x="4"
        y="27"
        fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-0.3px"
      >
        <tspan fill={dark}>uni</tspan>
        <tspan fill={red}>view</tspan>
      </text>
    </svg>
  );
};

/**
 * TP-LINK Authentic Logo
 */
export const TpLinkLogo: React.FC<LogoProps> = ({ height = 28, className = '', grayscale = false }) => {
  const teal = grayscale ? '#64748B' : '#00A3BE';
  const dark = grayscale ? '#94A3B8' : '#2C3038';

  return (
    <svg
      height={height}
      viewBox="0 0 170 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="TP-Link"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <g transform="translate(6, 4)">
        <path
          d="M15 6 A9 9 0 0 0 6 15 A9 9 0 0 0 15 24"
          fill="none"
          stroke={teal}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="21" cy="15" r="4.5" fill={teal} />
        <path
          d="M21 7 L21 23"
          stroke={teal}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      <text
        x="46"
        y="26"
        fill={dark}
        fontFamily="'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="23"
        letterSpacing="-0.5px"
      >
        tp-link
      </text>
    </svg>
  );
};

export interface BrandInfo {
  name: string;
  logo: React.ReactNode;
  tagline: string;
  popularFor: string;
}

/**
 * HONEYWELL Authentic Logo
 */
export const HoneywellLogo: React.FC<LogoProps> = ({ height = 26, className = '', grayscale = false }) => {
  const red = grayscale ? '#64748B' : '#ED1B24';
  return (
    <svg
      height={height}
      viewBox="0 0 170 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Honeywell"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <text
        x="4"
        y="26"
        fill={red}
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="26"
        letterSpacing="0.5px"
      >
        Honeywell
      </text>
    </svg>
  );
};

/**
 * BOSCH Authentic Logo
 */
export const BoschLogo: React.FC<LogoProps> = ({ height = 26, className = '', grayscale = false }) => {
  const red = grayscale ? '#64748B' : '#EA1C24';
  const dark = grayscale ? '#94A3B8' : '#1C2530';
  return (
    <svg
      height={height}
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Bosch"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <circle cx="18" cy="18" r="14" stroke={red} strokeWidth="3" fill="none" />
      <rect x="8" y="15" width="20" height="6" rx="2" fill={red} />
      <text
        x="40"
        y="26"
        fill={dark}
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="2px"
      >
        BOSCH
      </text>
    </svg>
  );
};

/**
 * MATRIX COMSEC Authentic Logo
 */
export const MatrixLogo: React.FC<LogoProps> = ({ height = 25, className = '', grayscale = false }) => {
  const red = grayscale ? '#64748B' : '#E31B23';
  const blue = grayscale ? '#94A3B8' : '#0B4A99';
  return (
    <svg
      height={height}
      viewBox="0 0 150 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Matrix Comsec"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <text
        x="4"
        y="26"
        fill={blue}
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="1px"
      >
        MATRIX
      </text>
      <circle cx="120" cy="18" r="5" fill={red} />
    </svg>
  );
};

/**
 * ZKTECO Authentic Logo
 */
export const ZkTecoLogo: React.FC<LogoProps> = ({ height = 26, className = '', grayscale = false }) => {
  const green = grayscale ? '#64748B' : '#7CB342';
  const dark = grayscale ? '#94A3B8' : '#37474F';
  return (
    <svg
      height={height}
      viewBox="0 0 155 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ZKTeco"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <text
        x="4"
        y="26"
        fill={green}
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="0.5px"
      >
        ZK
      </text>
      <text
        x="46"
        y="26"
        fill={dark}
        fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="23"
        letterSpacing="1px"
      >
        Teco
      </text>
    </svg>
  );
};

/**
 * WD PURPLE Authentic Logo
 */
export const WdPurpleLogo: React.FC<LogoProps> = ({ height = 26, className = '', grayscale = false }) => {
  const purple = grayscale ? '#64748B' : '#6A1B9A';
  const dark = grayscale ? '#94A3B8' : '#1E293B';
  return (
    <svg
      height={height}
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="WD Purple"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <rect x="4" y="6" width="30" height="24" rx="4" fill={purple} />
      <text x="9" y="23" fill="#FFFFFF" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="14">WD</text>
      <text x="42" y="25" fill={dark} fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.5px">
        Purple<tspan fontSize="12" fill={purple} fontWeight="700">™</tspan>
      </text>
    </svg>
  );
};

/**
 * SEAGATE SKYHAWK Authentic Logo
 */
export const SeagateSkyhawkLogo: React.FC<LogoProps> = ({ height = 26, className = '', grayscale = false }) => {
  const green = grayscale ? '#64748B' : '#00A389';
  const dark = grayscale ? '#94A3B8' : '#1E293B';
  return (
    <svg
      height={height}
      viewBox="0 0 175 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Seagate SkyHawk"
      style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}
    >
      <path d="M6 18C6 11 11 6 18 6C23 6 27 9 29 13L24 15C23 12 21 10 18 10C13 10 10 13 10 18C10 23 13 26 18 26C21 26 23 24 24 21L29 23C27 27 23 30 18 30C11 30 6 25 6 18Z" fill={green} />
      <text x="34" y="25" fill={dark} fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.5px">
        Sky<tspan fill={green}>Hawk</tspan>
      </text>
    </svg>
  );
};

export const AUTHORIZED_BRANDS: BrandInfo[] = [
  {
    name: 'Hikvision',
    logo: <HikvisionLogo height={28} />,
    tagline: 'World #1 Video Surveillance',
    popularFor: 'ColorVu, AcuSense, Ultra 4K NVRs',
  },
  {
    name: 'Dahua',
    logo: <DahuaLogo height={28} />,
    tagline: 'AI & Smart IoT Solutions',
    popularFor: 'WizSense, Full-Color, TiOC 3-in-1',
  },
  {
    name: 'CP PLUS',
    logo: <CpPlusLogo height={26} />,
    tagline: 'Securing India & Beyond',
    popularFor: 'EzyKam, Orange Series, HD Analog',
  },
  {
    name: 'Uniview',
    logo: <UniviewLogo height={25} />,
    tagline: 'Pioneer in IP Video Surveillance',
    popularFor: 'LightHunter, Tri-Guard, EasyStar',
  },
  {
    name: 'TP-Link',
    logo: <TpLinkLogo height={26} />,
    tagline: 'Reliable Networking & VIGI CCTV',
    popularFor: 'VIGI IP Cameras, Omada Switches, PoE',
  },
];

interface TrustedBrandsBarProps {
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'white' | 'dark' | 'glass';
  className?: string;
}

/**
 * Reusable full-width Brand Logos Strip with Divider Bars
 * matching the bottom strip in the user's banner
 */
export const TrustedBrandsBar: React.FC<TrustedBrandsBarProps> = ({
  title = 'CCTV SOLUTIONS  |  SECURITY  |  PEACE OF MIND',
  subtitle = 'Authorized System Integrator & Solutions Partner for Industry-Leading Surveillance Brands',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark' || theme === 'glass';

  const BRANDS = [
    { name: 'Hikvision', logo: <HikvisionLogo height={32} />, tagline: 'World #1 Video Surveillance' },
    { name: 'Dahua Technology', logo: <DahuaLogo height={32} />, tagline: 'AI & Smart IoT Security' },
    { name: 'CP PLUS', logo: <CpPlusLogo height={30} />, tagline: 'Securing India & Beyond' },
    { name: 'Uniview', logo: <UniviewLogo height={28} />, tagline: 'Pioneer in IP Surveillance' },
    { name: 'TP-Link', logo: <TpLinkLogo height={30} />, tagline: 'Reliable Networking & VIGI CCTV' },
    { name: 'Honeywell', logo: <HoneywellLogo height={26} />, tagline: 'Enterprise Integrated Security' },
    { name: 'Bosch Security', logo: <BoschLogo height={26} />, tagline: 'High-Performance Security' },
    { name: 'Matrix Comsec', logo: <MatrixLogo height={25} />, tagline: 'Telecom & IP Surveillance' },
    { name: 'ZKTeco', logo: <ZkTecoLogo height={26} />, tagline: 'Biometrics & Smart Access' },
    { name: 'WD Purple', logo: <WdPurpleLogo height={26} />, tagline: 'Surveillance-Grade Storage' },
    { name: 'Seagate SkyHawk', logo: <SeagateSkyhawkLogo height={26} />, tagline: 'Smart AI Surveillance Storage' },
  ];

  return (
    <section className={`${styles.brandsSection} ${isDark ? styles.darkTheme : ''} ${className}`}>
      <div className={styles.brandsContainer}>
        {/* Top Tagline Badge */}
        <div className={styles.headerBadge}>
          <span className={styles.pulseDot} aria-hidden="true" />
          <span className={styles.badgeText}>{title}</span>
        </div>

        {/* Subtitle */}
        <p className={styles.subtitle}>{subtitle}</p>

        {/* Infinite Scrollable Marquee Card (matching reference design) */}
        <div className={styles.marqueeCard} title="Hover to pause • Drag or swipe horizontally">
          <div className={styles.marqueeTrack}>
            {/* 2 Sets rendered for seamless, uninterrupted infinite CSS scrolling */}
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <div key={`${brand.name}-${idx}`} className={styles.brandUnit}>
                <div className={styles.brandLogoBox} title={`${brand.name} - ${brand.tagline}`}>
                  {brand.logo}
                  <span className={styles.brandTooltip}>{brand.tagline}</span>
                </div>
                <div className={styles.brandDivider} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const CctvCompleteSolutionsBanner: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  const PILLARS = [
    { title: 'CCTV Installation', icon: <CameraIcon size={24} color="#FFFFFF" />, link: '/services/ip-ahd-surveillance' },
    { title: 'Service & Maintenance', icon: <WrenchIcon size={24} color="#FFFFFF" />, link: '/amc' },
    { title: 'Live Monitoring (Mobile/PC)', icon: <MonitorIcon size={24} color="#FFFFFF" />, link: '/services/control-room-solutions' },
    { title: 'Access Control Systems', icon: <ShieldCheckIcon size={24} color="#FFFFFF" />, link: '/services/access-control' },
    { title: 'Networking Solutions', icon: <NetworkIcon size={24} color="#FFFFFF" />, link: '/services/it-hardware-software' },
    { title: 'AMC Services', icon: <SettingsIcon size={24} color="#FFFFFF" />, link: '/amc' },
  ];

  const SECTORS = [
    {
      id: 'residential',
      title: 'RESIDENTIAL SOLUTIONS',
      image: '/images/smart-home-security.webp',
      desc: 'Apartments, villas, gated communities with 24/7 mobile monitoring',
      link: '/calculator',
    },
    {
      id: 'office',
      title: 'OFFICE SOLUTIONS',
      image: '/images/office-business-cctv.webp',
      desc: 'Corporate offices, commercial premises, multi-door biometric access',
      link: '/services/access-control',
    },
    {
      id: 'industrial',
      title: 'INDUSTRIAL SOLUTIONS',
      image: '/images/warehouse-enterprise-cctv.webp',
      desc: 'Factories, logistics warehouses, perimeter sensors & ANPR cameras',
      link: '/services/special-cameras',
    },
    {
      id: 'retail',
      title: 'RETAIL SOLUTIONS',
      image: '/images/retail-security-cctv.webp',
      desc: 'Showrooms, retail shops, POS cash desk view & footfall heatmaps',
      link: '/services/entry-automation',
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        background: isDark
          ? 'linear-gradient(180deg, #071530 0%, #0B1B3D 50%, #0F275A 100%)'
          : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        padding: '56px 20px 48px',
        boxSizing: 'border-box',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2E8F0',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2E8F0',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        {/* 1. Header Banner Strip */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              padding: '6px 24px',
              borderRadius: 30,
              background: isDark ? 'rgba(0, 102, 255, 0.15)' : '#EFF6FF',
              border: isDark ? '1px solid rgba(0, 102, 255, 0.35)' : '1.5px solid #BFDBFE',
              boxShadow: '0 4px 14px rgba(0, 102, 255, 0.08)',
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: '2px',
                color: isDark ? '#60A5FA' : '#0066FF',
                textTransform: 'uppercase',
              }}
            >
              CCTV SOLUTIONS &nbsp;|&nbsp; SECURITY &nbsp;|&nbsp; PEACE OF MIND
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 800,
              color: isDark ? '#FFFFFF' : '#0B1B3D',
              margin: '18px 0 8px',
              letterSpacing: '-0.5px',
            }}
          >
            Comprehensive Surveillance Ecosystem
          </h2>
          <p
            style={{
              fontSize: 16,
              color: isDark ? '#94A3B8' : '#64748B',
              margin: 0,
              maxWidth: 680,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            End-to-end security deployment, remote monitoring, and preventative maintenance across every sector.
          </p>
        </div>

        {/* 2. 6 Core Pillars (Circular blue icon badges) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 20,
            marginBottom: 44,
          }}
        >
          {PILLARS.map((pillar, idx) => (
            <Link
              key={idx}
              to={pillar.link}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #E2E8F0',
                borderRadius: 16,
                padding: '24px 14px 20px',
                transition: 'all 0.25s ease',
                boxShadow: isDark ? 'none' : '0 4px 12px rgba(11, 27, 61, 0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#0066FF';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 102, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0';
                e.currentTarget.style.boxShadow = isDark ? 'none' : '0 4px 12px rgba(11, 27, 61, 0.03)';
              }}
            >
              {/* Blue Circular Badge */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0066FF 0%, #0044CC 100%)',
                  border: '3px solid #E0ECFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                  boxShadow: '0 6px 16px rgba(0, 102, 255, 0.25)',
                }}
              >
                {pillar.icon}
              </div>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: isDark ? '#F1F5F9' : '#0B1B3D',
                  lineHeight: 1.35,
                }}
              >
                {pillar.title}
              </span>
            </Link>
          ))}
        </div>

        {/* 3. 4 Sector Solutions (Angled trapezoid panels with real photography) */}
        <div style={{ marginBottom: 44 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 18,
            }}
          >
            {SECTORS.map((sector) => (
              <Link
                key={sector.id}
                to={sector.link}
                style={{
                  position: 'relative',
                  height: 220,
                  borderRadius: 16,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  boxShadow: '0 8px 24px rgba(11, 27, 61, 0.08)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 102, 255, 0.18)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 27, 61, 0.08)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Background Image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(180deg, rgba(11, 27, 61, 0.15) 0%, rgba(11, 27, 61, 0.85) 75%, rgba(11, 27, 61, 0.95) 100%)',
                  }}
                />

                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 2, padding: '16px 18px' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(90deg, #0066FF 0%, #0044CC 100%)',
                      color: '#FFFFFF',
                      fontSize: 11.5,
                      fontWeight: 800,
                      letterSpacing: '1px',
                      padding: '4px 10px',
                      borderRadius: 6,
                      marginBottom: 8,
                      boxShadow: '0 2px 8px rgba(0, 102, 255, 0.3)',
                    }}
                  >
                    {sector.title}
                  </div>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: '#E2E8F0',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {sector.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. 5 Brand Logos Strip */}
        <div
          style={{
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E2E8F0',
            borderRadius: 16,
            padding: '20px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px 36px',
            boxShadow: isDark ? 'none' : '0 4px 16px rgba(11, 27, 61, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', minHeight: 38 }} title="Hikvision Official Partner">
            <HikvisionLogo height={30} />
          </div>

          <div
            className="brandLogoDivider"
            style={{
              width: 1.5,
              height: 26,
              background: isDark ? 'rgba(255, 255, 255, 0.18)' : '#CBD5E1',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', minHeight: 38 }} title="Dahua Technology Authorized Partner">
            <DahuaLogo height={32} />
          </div>

          <div
            className="brandLogoDivider"
            style={{
              width: 1.5,
              height: 26,
              background: isDark ? 'rgba(255, 255, 255, 0.18)' : '#CBD5E1',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', minHeight: 38 }} title="CP PLUS Premier Partner">
            <CpPlusLogo height={28} />
          </div>

          <div
            className="brandLogoDivider"
            style={{
              width: 1.5,
              height: 26,
              background: isDark ? 'rgba(255, 255, 255, 0.18)' : '#CBD5E1',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', minHeight: 38 }} title="Uniview System Integrator">
            <UniviewLogo height={26} />
          </div>

          <div
            className="brandLogoDivider"
            style={{
              width: 1.5,
              height: 26,
              background: isDark ? 'rgba(255, 255, 255, 0.18)' : '#CBD5E1',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', minHeight: 38 }} title="TP-Link Network & Surveillance">
            <TpLinkLogo height={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsBar;
