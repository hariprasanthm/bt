import React, { useState } from 'react';
import Seo from '@/components/Seo';
import { Link, useParams } from '@umijs/max';
import NotFound from './404';
import SiteShell from './SiteShell';
import styles from './VerticalPage.module.less';
import { COMPANY, SERVICES, ServiceItem } from '@/constants/company';
import { SERVICE_DETAILS_MAP, ServiceDetailData } from '@/constants/serviceDetails';
import TrustedBrandsBar from '@/components/PartnerBrands';
import {
  WhatsAppIcon,
  PhoneIcon,
  BuildingIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CameraIcon,
  WrenchIcon,
  MonitorIcon,
  AwardIcon,
  SchoolBusIcon,
  FlameIcon,
  BarrierIcon,
  LockIcon,
  UsersIcon,
  CpuIcon,
  PlusIcon,
  MinusIcon,
  CheckCircle2Icon,
  HomeIcon,
  OfficeIcon,
  WarehouseIcon,
  SchoolIcon,
  RupeeIcon,
} from '@/components/Icons';

type TabType = 'overview' | 'hardware' | 'specs' | 'applications' | 'process' | 'faq';

export const VerticalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeArchIndex, setActiveArchIndex] = useState<number>(0);

  const currentService: ServiceItem | undefined = SERVICES.find(
    (s) => s.slug === slug
  );

  if (!currentService) {
    return <NotFound />;
  }

  // Get rich detailed data if available, or generate sensible defaults
  const details: ServiceDetailData = SERVICE_DETAILS_MAP[currentService.slug] || {
    heroBadge: `${currentService.category.toUpperCase()} • ENTERPRISE SECURITY SOLUTION`,
    heroVisualBadge: 'COMMERCIAL GRADE',
    heroVisualGrade: 'TIER-1 OEM HARDWARE',
    heroVisualNotes: 'High-reliability enterprise security architecture engineered for continuous 24/7 protection.',
    heroStats: [
      { value: '24-48 Hr', label: 'Quick Deployment', iconType: 'wrench' },
      { value: '2-3 Years', label: 'OEM Warranty', iconType: 'award' },
      { value: '100% BIS', label: 'Certified Standards', iconType: 'shield' },
      { value: '2-Hr', label: 'Rapid AMC Response', iconType: 'cpu' },
    ],
    detailedOverview: [
      currentService.summary,
      'Best Technology provides end-to-end turnkey implementation covering site inspection, CAD design, structured cabling, OEM hardware delivery, configuration, and continuous AMC maintenance.',
    ],
    configurator: {
      unitLabel: 'Equipment Units & Channels',
      defaultUnits: 4,
      minUnits: 1,
      maxUnits: 32,
      unitStep: 1,
      basePricePerUnit: 5500,
      tiers: [
        { id: 'standard', name: 'Commercial Standard', multiplier: 1.0, desc: 'Essential commercial grade hardware & certified installation' },
        { id: 'pro', name: 'Professional Pro AI', multiplier: 1.5, desc: 'Advanced AI analytics, high-resolution optics & mobile cloud sync' },
        { id: 'enterprise', name: 'Enterprise Multi-Site', multiplier: 2.2, desc: 'Full redundancy, central management console & priority AMC' },
      ],
      addons: [
        { id: 'amc', label: '1-Year Comprehensive Preventive Maintenance (AMC)', price: 4500, desc: 'Quarterly sensor checks, lens cleaning & rapid emergency callout' },
        { id: 'ups', label: 'Dedicated Online Battery Backup UPS Power Kit', price: 3800, desc: 'Guarantees uninterrupted operation through electricity cuts' },
      ],
    },
    architectureNodes: [
      { step: '01', title: 'Hardware Capture', subtitle: 'Sensor Input', desc: 'Front-end high-resolution sensors and optics capturing real-time environmental data.', iconType: 'camera' },
      { step: '02', title: 'Network Transmission', subtitle: 'Encrypted Pipe', desc: 'Shielded copper cabling or cellular transmission to centralized control units.', iconType: 'cpu' },
      { step: '03', title: 'Central Processing', subtitle: 'Rule Engine', desc: 'Real-time AI verification, credential lookup, and storage logging.', iconType: 'shield' },
      { step: '04', title: 'Command & Alerts', subtitle: 'Live Monitoring', desc: 'Local video wall display, automated physical triggers, and mobile cloud alerts.', iconType: 'award' },
    ],
    comparisonTable: [
      { parameter: 'Hardware Grade', standard: 'Standard Commercial', pro: 'Professional AI Series', enterprise: 'Industrial Ruggedized Matrix' },
      { parameter: 'Warranty Coverage', standard: '1 Year OEM Warranty', pro: '2 Years Comprehensive', enterprise: '3 Years Full Replacement' },
      { parameter: 'Support SLA', standard: 'Next Business Day', pro: 'Under 4-Hr Response', enterprise: 'Under 2-Hr Priority Support' },
    ],
    caseStudy: {
      title: 'Commercial Security Implementation & Turnkey Handover',
      clientType: 'Commercial Enterprise Facility',
      location: 'Hosur & Bangalore Region',
      challenge: 'Requirement for seamless 24/7 security oversight and unified compliance.',
      solution: 'Turnkey deployment of Tier-1 OEM security hardware with structured cabling and cloud live view.',
      outcome: '100% operational reliability and flawless audit compliance.',
      metric: 'Turnkey Implementation • 24/7 Monitored',
    },
    hardwareList: currentService.items.map((item, idx) => ({
      name: item,
      desc: `Industrial-grade ${item.toLowerCase()} configured for mission-critical facility security and seamless network integration.`,
      features: ['Tier-1 OEM', 'Industrial Grade', '24/7 Continuous Duty', 'Surge Protection'],
      tag: `Component #${idx + 1}`,
      iconType: 'shield',
    })),
    applicationsList: (currentService.applications || []).map((app) => ({
      title: app,
      desc: `Specialized engineering configuration tailored for the operational requirements and security challenges of ${app.toLowerCase()}.`,
      tags: ['Commercial', 'Turnkey', '24/7 Support'],
      iconType: 'building',
    })),
    processSteps: [
      { step: 1, title: 'On-Site Assessment', desc: 'Thorough evaluation of physical layout, cabling paths, power infrastructure, and security objectives.' },
      { step: 2, title: 'CAD Engineering Plan', desc: 'Detailed schematic layout, device coverage radius mapping, and itemized bill of materials.' },
      { step: 3, title: 'Installation & Splicing', desc: 'Professional installation, neat conduit routing, network termination, and device calibration.' },
      { step: 4, title: 'Testing & AMC Handover', desc: 'Full system commissioning, staff operator training, and comprehensive post-installation AMC support.' },
    ],
    faqs: [
      {
        question: `What makes Best Technology the preferred partner for ${currentService.title}?`,
        answer: 'We provide complete turnkey solutions backed by authorized Tier-1 OEM partnerships (Hikvision, Dahua, CP Plus, Matrix, ZKTeco), certified installation engineers, and a guaranteed rapid on-site response SLA across Tamil Nadu and Bangalore.',
      },
      {
        question: 'Do you offer comprehensive Annual Maintenance Contracts (AMC) for this system?',
        answer: 'Yes! We provide tailored Non-Comprehensive and Comprehensive AMC packages including quarterly preventive maintenance visits, camera lens cleaning, firmware security patches, and emergency breakdown callout support.',
      },
    ],
    compliance: [
      { standard: 'BIS IS 13252', description: 'Indian Bureau of Standards electronic safety compliance' },
      { standard: 'ISO 9001:2015', description: 'Certified quality management installation workflows' },
      { standard: 'CE & RoHS Compliant', description: 'Lead-free, low-emission electronic components' },
    ],
  };

  // Configurator Interactive State
  const [selectedTier, setSelectedTier] = useState<'standard' | 'pro' | 'enterprise'>('pro');
  const [units, setUnits] = useState<number>(details.configurator.defaultUnits);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['amc']);

  const currentTierObj =
    details.configurator.tiers.find((t) => t.id === selectedTier) ||
    details.configurator.tiers[1] ||
    details.configurator.tiers[0];

  // Calculate Indicative Estimate
  const unitRate = Math.round(details.configurator.basePricePerUnit * currentTierObj.multiplier);
  const baseTotal = units * unitRate;
  const addonsTotal = details.configurator.addons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const totalEstimate = baseTotal + addonsTotal;
  const formattedEstimate = `₹ ${totalEstimate.toLocaleString('en-IN')}`;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleUnitChange = (delta: number) => {
    setUnits((prev) => {
      const next = prev + delta * details.configurator.unitStep;
      if (next < details.configurator.minUnits) return details.configurator.minUnits;
      if (next > details.configurator.maxUnits) return details.configurator.maxUnits;
      return next;
    });
  };

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const renderIcon = (type?: string, size = 20, color = '#0066FF') => {
    switch (type) {
      case 'camera':
        return <CameraIcon size={size} color={color} />;
      case 'bus':
        return <SchoolBusIcon size={size} color={color} />;
      case 'flame':
        return <FlameIcon size={size} color={color} />;
      case 'barrier':
        return <BarrierIcon size={size} color={color} />;
      case 'lock':
        return <LockIcon size={size} color={color} />;
      case 'users':
        return <UsersIcon size={size} color={color} />;
      case 'cpu':
        return <CpuIcon size={size} color={color} />;
      case 'award':
        return <AwardIcon size={size} color={color} />;
      case 'wrench':
        return <WrenchIcon size={size} color={color} />;
      case 'building':
        return <BuildingIcon size={size} color={color} />;
      case 'office':
        return <OfficeIcon size={size} color={color} />;
      case 'warehouse':
        return <WarehouseIcon size={size} color={color} />;
      case 'school':
        return <SchoolIcon size={size} color={color} />;
      case 'home':
        return <HomeIcon size={size} color={color} />;
      default:
        return <ShieldCheckIcon size={size} color={color} />;
    }
  };

  // WhatsApp Message with Pre-filled Configurator Parameters
  const configWhatsAppMsg = `Hello Best Technology IT Solution, I generated a customized estimate on your website for ${currentService.title}:
- Package Tier: ${currentTierObj.name}
- Scope/Units: ${units} ${details.configurator.unitLabel}
- Selected Add-ons: ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None'}
- Indicative Estimate: ${formattedEstimate}
Please share an official quotation, hardware datasheet, and schedule a site survey.`;

  return (
    <SiteShell>
      <Seo
        title={`${currentService.title} | Best Technology IT Solution`}
        description={`${currentService.summary} Professional installation, Tier-1 OEM hardware, and 24/7 AMC across Tamil Nadu & Bangalore.`}
        path={`/services/${currentService.slug}`}
        keywords={`${currentService.title}, Best Technology, surveillance, security, ${currentService.items.join(', ')}`}
      />

      <div className={styles.pageWrapper}>
        {/* =========================================================================
            1. HERO BANNER
            ========================================================================= */}
        <section className={styles.serviceHero}>
          <div className={styles.heroContainer}>
            {/* Breadcrumbs */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services">Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.currentCrumb}>{currentService.title}</span>
            </nav>

            <div className={styles.heroContent}>
              {/* Left Column: Headlines & Actions */}
              <div>
                <div className={styles.heroBadge}>
                  <span className={styles.badgeDot} />
                  <span>{details.heroBadge}</span>
                </div>

                <h1 className={styles.heroTitle}>
                  {currentService.title.split(' ')[0]}{' '}
                  <span className={styles.accentText}>
                    {currentService.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>

                <p className={styles.heroSubtitle}>{currentService.tagline}</p>

                <div className={styles.heroActions}>
                  <Link to="/contact" className={styles.primaryQuoteBtn}>
                    <span>Request Solution Quote</span>
                    <ArrowRightIcon size={16} />
                  </Link>

                  <a
                    href={`https://wa.me/918675248969?text=${encodeURIComponent(
                      `Hello Best Technology, I need a detailed proposal and site assessment for your ${currentService.title}. Please connect me with a senior security consultant.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                  >
                    <WhatsAppIcon size={16} color="#25D366" />
                    <span>WhatsApp Specialist</span>
                  </a>

                  <a href={`tel:${COMPANY.phoneRaw}`} className={styles.callBtn}>
                    <PhoneIcon size={15} color="#38BDF8" />
                    <span>Call Engineer</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className={styles.heroVisualCard}>
                <div className={styles.heroVisualImgWrap}>
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    loading="eager"
                  />
                  <span className={styles.visualBadgeOem}>{details.heroVisualBadge}</span>
                  <span className={styles.visualBadgeGrade}>{details.heroVisualGrade}</span>
                </div>

                <div className={styles.heroVisualMeta}>
                  <div className={styles.visualMetaTitle}>
                    <ShieldCheckIcon size={16} color="#00E5FF" />
                    <span>COMMERCIAL SPECIFICATIONS & CERTIFICATION</span>
                  </div>
                  <p className={styles.visualMetaNotes}>{details.heroVisualNotes}</p>
                </div>
              </div>
            </div>

            {/* Bottom 4-Item Quick Stats Strip */}
            <div className={styles.heroStatsStrip}>
              {details.heroStats.map((st, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statIconWrap}>
                    {renderIcon(st.iconType, 18, '#00E5FF')}
                  </div>
                  <div className={styles.statCol}>
                    <span className={styles.statVal}>{st.value}</span>
                    <span className={styles.statLabel}>{st.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            BRAND PARTNERS BAR
            ========================================================================= */}
        <TrustedBrandsBar theme="light" />

        {/* =========================================================================
            2. INTERACTIVE TABS NAVIGATION BAR
            ========================================================================= */}
        <div className={styles.tabsNavWrapper}>
          <div className={styles.tabsNavContainer}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <ShieldCheckIcon size={16} color={activeTab === 'overview' ? '#0066FF' : '#64748B'} />
              <span>Overview & Highlights</span>
            </button>

            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'hardware' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('hardware')}
            >
              <CpuIcon size={16} color={activeTab === 'hardware' ? '#0066FF' : '#64748B'} />
              <span>Hardware Lineup ({details.hardwareList.length})</span>
            </button>

            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'specs' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              <WrenchIcon size={16} color={activeTab === 'specs' ? '#0066FF' : '#64748B'} />
              <span>Engineering Datasheet</span>
            </button>

            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'applications' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              <BuildingIcon size={16} color={activeTab === 'applications' ? '#0066FF' : '#64748B'} />
              <span>Facility Applications</span>
            </button>

            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'process' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('process')}
            >
              <CheckCircle2Icon size={16} color={activeTab === 'process' ? '#0066FF' : '#64748B'} />
              <span>Deployment Process</span>
            </button>

            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'faq' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              <AwardIcon size={16} color={activeTab === 'faq' ? '#0066FF' : '#64748B'} />
              <span>FAQs ({details.faqs.length})</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            3. MAIN CONTENT BODY CONTAINER
            ========================================================================= */}
        <main className={styles.mainContentSection}>
          {/* =========================================================================
              INTERACTIVE SOLUTION CONFIGURATOR & ESTIMATOR WIDGET (Always visible)
              ========================================================================= */}
          <section className={styles.configuratorWrapper} aria-label="Interactive Solution Configurator">
            <div className={styles.configuratorHeader}>
              <div className={styles.configBadge}>
                <RupeeIcon size={14} color="#38BDF8" />
                <span>INTERACTIVE SOLUTION CONFIGURATOR</span>
              </div>
              <h2 className={styles.configTitle}>Estimate Your Custom {currentService.title} Setup</h2>
              <p className={styles.configSubtitle}>
                Select your package tier, adjust unit scale, choose add-ons, and calculate an immediate indicative quotation.
              </p>
            </div>

            <div className={styles.configuratorGrid}>
              {/* Left Controls */}
              <div className={styles.configLeftControls}>
                {/* 1. Tier Selector */}
                <div>
                  <div className={styles.configLabel}>
                    <AwardIcon size={16} color="#00E5FF" />
                    <span>1. Select Service Package Tier:</span>
                  </div>
                  <div className={styles.tierSelectorGroup}>
                    {details.configurator.tiers.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        className={`${styles.tierBtn} ${selectedTier === tier.id ? styles.activeTier : ''}`}
                        onClick={() => setSelectedTier(tier.id)}
                      >
                        <span className={styles.tierBtnName}>{tier.name}</span>
                        <span className={styles.tierBtnDesc}>{tier.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Unit Counter */}
                <div>
                  <div className={styles.configLabel}>
                    <CpuIcon size={16} color="#00E5FF" />
                    <span>2. Number of {details.configurator.unitLabel}:</span>
                  </div>
                  <div className={styles.unitCounterRow}>
                    <button
                      type="button"
                      className={styles.counterBtn}
                      onClick={() => handleUnitChange(-1)}
                      disabled={units <= details.configurator.minUnits}
                      aria-label="Decrease Units"
                    >
                      −
                    </button>
                    <span className={styles.unitNumber}>{units}</span>
                    <button
                      type="button"
                      className={styles.counterBtn}
                      onClick={() => handleUnitChange(1)}
                      disabled={units >= details.configurator.maxUnits}
                      aria-label="Increase Units"
                    >
                      +
                    </button>
                    <span className={styles.unitText}>
                      Units (₹ {unitRate.toLocaleString('en-IN')}/unit)
                    </span>
                  </div>
                </div>

                {/* 3. Addons */}
                <div>
                  <div className={styles.configLabel}>
                    <ShieldCheckIcon size={16} color="#00E5FF" />
                    <span>3. Additional Engineering Add-Ons (Optional):</span>
                  </div>
                  <div className={styles.addonsList}>
                    {details.configurator.addons.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          className={`${styles.addonCard} ${isChecked ? styles.activeAddon : ''}`}
                          onClick={() => toggleAddon(addon.id)}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}} // handled by parent div
                            className={styles.addonCheckInput}
                            aria-label={addon.label}
                          />
                          <div className={styles.addonBody}>
                            <div className={styles.addonHeader}>
                              <span className={styles.addonLabel}>{addon.label}</span>
                              <span className={styles.addonPrice}>+₹ {addon.price.toLocaleString('en-IN')}</span>
                            </div>
                            <span className={styles.addonDesc}>{addon.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Output Card */}
              <div className={styles.estimateSummaryBox}>
                <span className={styles.estimateTopTag}>● INDICATIVE ESTIMATE</span>
                <h3 className={styles.estimateTitle}>Custom {currentTierObj.name}</h3>

                <div className={styles.estimatePriceWrap}>
                  <div className={styles.estimateLabel}>Estimated Setup Cost</div>
                  <div className={styles.estimateRupee}>{formattedEstimate}</div>
                  <div className={styles.estimateNotes}>*Final price based on on-site survey and cable run distance.</div>
                </div>

                <div className={styles.estimateIncludesList}>
                  <div className={styles.estimateIncItem}>
                    <CheckIcon size={14} color="#34D399" />
                    <span>{units} × {details.configurator.unitLabel}</span>
                  </div>
                  <div className={styles.estimateIncItem}>
                    <CheckIcon size={14} color="#34D399" />
                    <span>Tier-1 OEM Hardware with Full Warranty</span>
                  </div>
                  <div className={styles.estimateIncItem}>
                    <CheckIcon size={14} color="#34D399" />
                    <span>Pure Copper Shielded Structured Cabling</span>
                  </div>
                  <div className={styles.estimateIncItem}>
                    <CheckIcon size={14} color="#34D399" />
                    <span>Turnkey Testing, Splicing & Staff Training</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/918675248969?text=${encodeURIComponent(configWhatsAppMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.estimateWhatsAppBtn}
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" />
                  <span>Get Estimate on WhatsApp</span>
                </a>

                <Link to="/contact" className={styles.estimateQuoteBtn}>
                  <span>Request Exact Formal Quotation →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* =========================================================================
              INTERACTIVE SYSTEM TOPOLOGY / ARCHITECTURE EXPLORER
              ========================================================================= */}
          <section className={styles.architectureExplorer} aria-label="System Architecture Explorer">
            <div className={styles.subSectionHeader}>
              <div className={styles.subSectionEyebrow}>INTERACTIVE SIGNAL FLOW</div>
              <h3 className={styles.subSectionTitle}>System Architecture & Data Topology</h3>
              <p className={styles.subSectionDesc}>
                Click any node in the sequence to inspect how hardware, network transmission, cloud processing, and security command interact.
              </p>
            </div>

            <div className={styles.archGrid}>
              {details.architectureNodes.map((node, idx) => (
                <div
                  key={idx}
                  className={`${styles.archNodeCard} ${activeArchIndex === idx ? styles.activeArchNode : ''}`}
                  onClick={() => setActiveArchIndex(idx)}
                >
                  <span className={styles.archStepNum}>STAGE {node.step}</span>
                  <div className={styles.archNodeHeader}>
                    {renderIcon(node.iconType, 20, activeArchIndex === idx ? '#0066FF' : '#64748B')}
                    <h4 className={styles.archNodeTitle}>{node.title}</h4>
                  </div>
                  <div className={styles.archNodeSub}>{node.subtitle}</div>
                  <p className={styles.archNodeDesc}>{node.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              TAB CONTENT SWITCHER
              ========================================================================= */}

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div>
              <div className={styles.subSectionHeader}>
                <div className={styles.subSectionEyebrow}>SYSTEM OVERVIEW</div>
                <h2 className={styles.subSectionTitle}>Engineering Scope & Operational Excellence</h2>
                <p className={styles.subSectionDesc}>
                  Engineered to meet Indian climatic challenges, industrial electrical surges, and rigorous commercial duty cycles.
                </p>
              </div>

              <div className={styles.overviewGrid}>
                {/* Left Card: Detailed Narrative & Brochure Capabilities */}
                <div className={styles.overviewCard}>
                  {details.detailedOverview.map((p, idx) => (
                    <p key={idx} className={styles.overviewText}>
                      {p}
                    </p>
                  ))}

                  <h3 className={styles.keyHighlightsTitle}>Official Solution Scope (Brochure Deliverables)</h3>
                  <div className={styles.capabilitiesGrid}>
                    {currentService.items.map((item, idx) => (
                      <div key={idx} className={styles.capabilityPill}>
                        <CheckIcon size={15} color="#0066FF" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Card: Quick Spec Highlight Card */}
                <div className={styles.specsTableCard}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 16px' }}>
                    Quick Technical Benchmark
                  </h3>
                  <table className={styles.specsTable}>
                    <tbody>
                      {(currentService.specs || []).map((sp, idx) => (
                        <tr key={idx}>
                          <td className={styles.specKey}>{sp.label}</td>
                          <td className={styles.specValue}>{sp.value}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className={styles.specKey}>Installation SLA</td>
                        <td className={styles.specValue}>24 to 48 Hours Turnkey</td>
                      </tr>
                      <tr>
                        <td className={styles.specKey}>AMC Support</td>
                        <td className={styles.specValue}>24/7 Priority Emergency Callout</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Differentiators Grid: Why Choose Best Technology */}
              <div className={styles.subSectionHeader}>
                <div className={styles.subSectionEyebrow}>WHY BEST TECHNOLOGY</div>
                <h3 className={styles.subSectionTitle}>Built for Uncompromising Reliability</h3>
              </div>

              <div className={styles.differentiatorsGrid}>
                <div className={styles.diffCard}>
                  <div className={styles.diffIconWrap}>
                    <ShieldCheckIcon size={22} color="#0066FF" />
                  </div>
                  <h4 className={styles.diffTitle}>Tier-1 OEM Partnerships</h4>
                  <p className={styles.diffDesc}>
                    Directly sourced genuine hardware from Hikvision, Dahua, CP Plus, Matrix, ZKTeco, and eSSL with full manufacturer warranty.
                  </p>
                </div>

                <div className={styles.diffCard}>
                  <div className={styles.diffIconWrap}>
                    <WrenchIcon size={22} color="#0066FF" />
                  </div>
                  <h4 className={styles.diffTitle}>Precision Structured Cabling</h4>
                  <p className={styles.diffDesc}>
                    100% pure copper shielded cabling, labeled patch panels, and industrial surge arresters to eliminate video loss and lightning damage.
                  </p>
                </div>

                <div className={styles.diffCard}>
                  <div className={styles.diffIconWrap}>
                    <CpuIcon size={22} color="#0066FF" />
                  </div>
                  <h4 className={styles.diffTitle}>Smart AI & Cloud Integration</h4>
                  <p className={styles.diffDesc}>
                    Edge AI deep-learning analytics, automated ERP/Tally integration, and mobile cloud apps for 24/7 visibility on iOS & Android.
                  </p>
                </div>

                <div className={styles.diffCard}>
                  <div className={styles.diffIconWrap}>
                    <AwardIcon size={22} color="#0066FF" />
                  </div>
                  <h4 className={styles.diffTitle}>Under 2-Hr AMC Response</h4>
                  <p className={styles.diffDesc}>
                    Rapid on-site emergency support teams in Hosur, Krishnagiri, Bangalore, and Tamil Nadu ensuring near-zero system downtime.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HARDWARE LINEUP */}
          {activeTab === 'hardware' && (
            <div>
              <div className={styles.subSectionHeader}>
                <div className={styles.subSectionEyebrow}>DEVICE CATALOG</div>
                <h2 className={styles.subSectionTitle}>Commercial Hardware Lineup & System Components</h2>
                <p className={styles.subSectionDesc}>
                  Explore the enterprise-grade devices, sensors, controllers, and video recorders deployed in this solution.
                </p>
              </div>

              <div className={styles.hardwareGrid}>
                {details.hardwareList.map((hw, idx) => (
                  <div key={idx} className={styles.hardwareCard}>
                    <div>
                      <div className={styles.hwHeader}>
                        <div className={styles.hwIconWrap}>
                          {renderIcon(hw.iconType, 22, '#0066FF')}
                        </div>
                        <span className={styles.hwTag}>{hw.tag}</span>
                      </div>
                      <h3 className={styles.hwTitle}>{hw.name}</h3>
                      <p className={styles.hwDesc}>{hw.desc}</p>
                    </div>

                    <div className={styles.hwFeaturesList}>
                      {hw.features.map((feat, fIdx) => (
                        <span key={fIdx} className={styles.hwFeatureBadge}>
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SPECIFICATIONS */}
          {activeTab === 'specs' && (
            <div>
              <div className={styles.subSectionHeader}>
                <div className={styles.subSectionEyebrow}>ENGINEERING DATASHEET</div>
                <h2 className={styles.subSectionTitle}>Technical Specifications & Standards Compliance</h2>
                <p className={styles.subSectionDesc}>
                  Verified performance parameters, electrical ratings, communication protocols, and statutory compliance certifications.
                </p>
              </div>

              <div className={styles.specsContainer}>
                {/* Specs Table */}
                <div className={styles.specsTableCard}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 16px' }}>
                    Hardware Engineering Parameters
                  </h3>
                  <table className={styles.specsTable}>
                    <tbody>
                      {(currentService.specs || []).map((sp, idx) => (
                        <tr key={idx}>
                          <td className={styles.specKey}>{sp.label}</td>
                          <td className={styles.specValue}>{sp.value}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className={styles.specKey}>Operating Temperature</td>
                        <td className={styles.specValue}>-10°C to +60°C (Built for tropical heat)</td>
                      </tr>
                      <tr>
                        <td className={styles.specKey}>Power Input</td>
                        <td className={styles.specValue}>12V DC / 24V AC / 48V IEEE 802.3af PoE</td>
                      </tr>
                      <tr>
                        <td className={styles.specKey}>Enclosure Protection</td>
                        <td className={styles.specValue}>IP66 / IP67 Weatherproof & IK10 Vandal-Proof</td>
                      </tr>
                      <tr>
                        <td className={styles.specKey}>Network Interfaces</td>
                        <td className={styles.specValue}>RJ-45 10/100/1000 Mbps Ethernet, RS-485, Wiegand</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Compliance Card */}
                <div className={styles.complianceCard}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 16px' }}>
                    Statutory & Quality Certifications
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.6, margin: '0 0 16px' }}>
                    Every unit deployed by Best Technology adheres to national safety mandates and international protocols.
                  </p>

                  <div className={styles.complianceGrid}>
                    {details.compliance.map((c, i) => (
                      <div key={i} className={styles.complianceItem}>
                        <span className={styles.compBadge}>{c.standard}</span>
                        <span className={styles.compText}>{c.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: APPLICATIONS */}
          {activeTab === 'applications' && (
            <div>
              <div className={styles.subSectionHeader}>
                <div className={styles.subSectionEyebrow}>USE CASES</div>
                <h2 className={styles.subSectionTitle}>Recommended Facility Applications</h2>
                <p className={styles.subSectionDesc}>
                  Tailored security configurations engineered for diverse industrial, commercial, and residential operational environments.
                </p>
              </div>

              <div className={styles.applicationsGrid}>
                {details.applicationsList.map((app, idx) => (
                  <div key={idx} className={styles.appCard}>
                    <div className={styles.appIconWrap}>
                      {renderIcon(app.iconType, 22, '#0066FF')}
                    </div>
                    <h3 className={styles.appTitle}>{app.title}</h3>
                    <p className={styles.appDesc}>{app.desc}</p>
                    <div className={styles.appTagsRow}>
                      {app.tags.map((t, tIdx) => (
                        <span key={tIdx} className={styles.appTag}>
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PROCESS WORKFLOW */}
          {activeTab === 'process' && (
            <div>
              <div className={styles.subSectionHeader}>
                <div className={styles.subSectionEyebrow}>METHODOLOGY</div>
                <h2 className={styles.subSectionTitle}>Our 4-Step Engineering & Delivery Lifecycle</h2>
                <p className={styles.subSectionDesc}>
                  From initial site assessment to certified commissioning and continuous AMC support, we ensure zero operational disruptions.
                </p>
              </div>

              <div className={styles.processTimelineGrid}>
                {details.processSteps.map((st) => (
                  <div key={st.step} className={styles.processStepCard}>
                    <div className={styles.stepNumberBadge}>0{st.step}</div>
                    <h3 className={styles.stepTitle}>{st.title}</h3>
                    <p className={styles.stepDesc}>{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: FAQ ACCORDION */}
          {activeTab === 'faq' && (
            <div>
              <div className={styles.subSectionHeader}>
                <div className={styles.subSectionEyebrow}>FREQUENTLY ASKED QUESTIONS</div>
                <h2 className={styles.subSectionTitle}>Everything You Need to Know About {currentService.title}</h2>
                <p className={styles.subSectionDesc}>
                  Clear, authentic answers from our certified security consultants regarding installation, storage, power cuts, and warranty.
                </p>
              </div>

              <div className={styles.faqContainer}>
                {details.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}
                    >
                      <button
                        type="button"
                        className={styles.faqQuestionBtn}
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <MinusIcon size={18} color="#0066FF" />
                        ) : (
                          <PlusIcon size={18} color="#64748B" />
                        )}
                      </button>

                      {isOpen && (
                        <div className={styles.faqAnswer}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =========================================================================
              3-TIER HARDWARE COMPARISON MATRIX (Always visible)
              ========================================================================= */}
          <section className={styles.comparisonSection} aria-label="Package Comparison Matrix">
            <div className={styles.subSectionHeader}>
              <div className={styles.subSectionEyebrow}>TIER COMPARISON</div>
              <h3 className={styles.subSectionTitle}>Standard vs Professional AI vs Enterprise Matrix</h3>
              <p className={styles.subSectionDesc}>
                Compare technical capabilities across service tiers to choose the optimal setup for your facility.
              </p>
            </div>

            <div className={styles.compTableWrap}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Technical Feature</th>
                    <th>
                      <span className={styles.badgeStandard}>STANDARD</span>
                      <div>Commercial Baseline</div>
                    </th>
                    <th>
                      <span className={styles.badgePro}>PROFESSIONAL AI</span>
                      <div>Recommended Enterprise</div>
                    </th>
                    <th>
                      <span className={styles.badgeEnterprise}>INDUSTRIAL</span>
                      <div>Mission-Critical Matrix</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {details.comparisonTable.map((row, i) => (
                    <tr key={i}>
                      <td className={styles.compParamCol}>{row.parameter}</td>
                      <td>{row.standard}</td>
                      <td style={{ fontWeight: 600, color: '#0066FF' }}>{row.pro}</td>
                      <td style={{ fontWeight: 700, color: '#059669' }}>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* =========================================================================
              REGIONAL CASE STUDY SHOWCASE CARD (Always visible)
              ========================================================================= */}
          <section className={styles.caseStudyCard} aria-label="Customer Case Study">
            <div className={styles.caseStudyHeader}>
              <div className={styles.caseStudyBadge}>
                <CheckCircle2Icon size={14} color="#34D399" />
                <span>VERIFIED REGIONAL DEPLOYMENT</span>
              </div>
              <div className={styles.caseStudyMetricBadge}>{details.caseStudy.metric}</div>
            </div>

            <h3 className={styles.caseStudyTitle}>{details.caseStudy.title}</h3>
            <div className={styles.caseStudyClient}>
              <strong>Facility:</strong> {details.caseStudy.clientType} • {details.caseStudy.location}
            </div>

            <div className={styles.caseStudyGrid}>
              <div className={styles.caseCol}>
                <span className={styles.caseColLabel}>The Challenge</span>
                <p className={styles.caseColText}>{details.caseStudy.challenge}</p>
              </div>

              <div className={styles.caseCol}>
                <span className={styles.caseColLabel}>Best Technology Solution</span>
                <p className={styles.caseColText}>{details.caseStudy.solution}</p>
              </div>

              <div className={styles.caseCol}>
                <span className={styles.caseColLabel}>Measured Outcome</span>
                <p className={styles.caseColText}>{details.caseStudy.outcome}</p>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. BOTTOM ESTIMATE / CONSULTATION CTA BANNER
              ========================================================================= */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaLeft}>
              <h3 className={styles.ctaTitle}>
                Need a Custom Quotation or On-Site Survey for {currentService.title}?
              </h3>
              <p className={styles.ctaText}>
                Our senior security specialists are ready to inspect your premises, calculate exact camera focal lengths, and deliver an itemized quotation within 24 hours.
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <Link to="/cost-calculator" className={styles.ctaCalcBtn}>
                <WrenchIcon size={16} />
                <span>Calculate CCTV Cost</span>
              </Link>

              <Link to="/contact" className={styles.ctaSurveyBtn}>
                <span>Book Free Site Visit</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>

          {/* =========================================================================
              5. RELATED SOLUTIONS STRIP
              ========================================================================= */}
          <div className={styles.relatedSection}>
            <div className={styles.subSectionHeader}>
              <div className={styles.subSectionEyebrow}>COMPLEMENTARY SYSTEMS</div>
              <h3 className={styles.subSectionTitle}>Explore Related Electronic Security Solutions</h3>
            </div>

            <div className={styles.relatedGrid}>
              {otherServices.map((s) => (
                <div key={s.id} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrap}>
                    <img src={s.image} alt={s.title} loading="lazy" />
                    <span className={styles.relatedBadge}>{s.category}</span>
                  </div>
                  <div className={styles.relatedBody}>
                    <h4 className={styles.relatedTitle}>{s.title}</h4>
                    <p className={styles.relatedTagline}>{s.tagline}</p>
                    <Link to={`/services/${s.slug}`} className={styles.relatedLink}>
                      <span>Explore Specifications</span>
                      <ArrowRightIcon size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SiteShell>
  );
};

export default VerticalPage;
