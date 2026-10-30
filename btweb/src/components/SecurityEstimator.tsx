import React, { useState, useMemo } from 'react';
import styles from '../pages/homeDesign.less';
import { COMPANY } from '@/constants/company';

export interface EstimatorState {
  facilityType: string;
  camerasCount: number;
  cameraTier: 'standard' | '4k' | 'anpr-ai' | 'thermal';
  doorsCount: number;
  entryAutomation: 'none' | 'boom' | 'flap' | 'blockers';
  fireSafety: 'none' | 'conventional' | 'addressable';
  fleetGpsCount: number;
  wifiNetworking: boolean;
  videoWall: 'none' | '2x2' | '3x3';
  amcPlan: 'standard' | 'non-comprehensive' | 'comprehensive';
}

const FACILITY_OPTIONS = [
  { id: 'office', label: 'Commercial Office / IT Park', icon: '🏢' },
  { id: 'school', label: 'School / College Campus', icon: '🏫' },
  { id: 'factory', label: 'Factory / Industrial Plant', icon: '🏭' },
  { id: 'residential', label: 'Gated Township / Villa', icon: '🏡' },
  { id: 'retail', label: 'Retail Store / Shopping Mall', icon: '🛍️' },
  { id: 'govt', label: 'Government / Critical Infra', icon: '🏛️' },
];

export const SecurityEstimator: React.FC = () => {
  const [facility, setFacility] = useState('office');
  const [camerasCount, setCamerasCount] = useState(16);
  const [cameraTier, setCameraTier] = useState<'standard' | '4k' | 'anpr-ai' | 'thermal'>('4k');
  const [doorsCount, setDoorsCount] = useState(4);
  const [entryAutomation, setEntryAutomation] = useState<'none' | 'boom' | 'flap' | 'blockers'>('boom');
  const [fireSafety, setFireSafety] = useState<'none' | 'conventional' | 'addressable'>('addressable');
  const [fleetGpsCount, setFleetGpsCount] = useState(0);
  const [wifiNetworking, setWifiNetworking] = useState(true);
  const [videoWall, setVideoWall] = useState<'none' | '2x2' | '3x3'>('none');
  const [amcPlan, setAmcPlan] = useState<'standard' | 'non-comprehensive' | 'comprehensive'>('comprehensive');
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  // Auto-adjust default fleet GPS if school is selected
  const handleSelectFacility = (id: string) => {
    setFacility(id);
    if (id === 'school' && fleetGpsCount === 0) {
      setFleetGpsCount(8);
    } else if (id === 'factory' && camerasCount < 16) {
      setCamerasCount(32);
    }
  };

  // Hardware Bill of Materials calculation
  const billOfMaterials = useMemo(() => {
    const items: { category: string; description: string; qty: string }[] = [];

    // Cameras & Storage
    const tierNames = {
      standard: 'Full HD 1080p Smart IR Cameras',
      '4k': 'Ultra-HD 4K Starlight AI IP Cameras',
      'anpr-ai': 'AI ANPR & Deep-Learning Face Recognition Cameras',
      thermal: 'Bi-Spectrum Radiometric Thermal & Early Fire Hazard Cameras',
    };
    items.push({
      category: 'Surveillance',
      description: `${tierNames[cameraTier]} (PoE+, IP67 Weatherproof)`,
      qty: `${camerasCount} Units`,
    });

    const nvrChannels = camerasCount <= 8 ? 8 : camerasCount <= 16 ? 16 : camerasCount <= 32 ? 32 : 64;
    const storageTb = Math.ceil((camerasCount * 30 * 25) / 1000); // 30 days retention estimate
    items.push({
      category: 'Surveillance NVR',
      description: `${nvrChannels}-Channel Enterprise 4K NVR with RAID & Video Mirroring`,
      qty: `${Math.ceil(camerasCount / 64)} Unit(s)`,
    });
    items.push({
      category: 'Storage',
      description: `Surveillance Surveillance HDD (${Math.max(4, storageTb)} TB total capacity, 30 days retention)`,
      qty: `${Math.ceil(Math.max(4, storageTb) / 8)} x Enterprise Disks`,
    });

    // Access Control
    if (doorsCount > 0) {
      items.push({
        category: 'Access Control',
        description: 'Multi-Biometric 3D Face ID & Optical Fingerprint Reader Terminals',
        qty: `${doorsCount} Terminals`,
      });
      items.push({
        category: 'Locks & Hardware',
        description: 'Heavy-Duty 600lbs Fail-Safe Electromagnetic (EM) Locks with Exit Buttons',
        qty: `${doorsCount} Doors`,
      });
    }

    // Physical Automation
    if (entryAutomation === 'boom') {
      items.push({
        category: 'Vehicle Gate',
        description: 'High-Speed Brushless DC Boom Barrier with UHF Long-Range RFID Reader',
        qty: '1 Ingress + 1 Egress',
      });
    } else if (entryAutomation === 'flap') {
      items.push({
        category: 'Pedestrian Gate',
        description: 'Optical Glass Flap Barrier Speed Gates with Integrated Biometric Turnstiles',
        qty: '2 Lanes',
      });
    } else if (entryAutomation === 'blockers') {
      items.push({
        category: 'Heavy Automation',
        description: 'Hydraulic Anti-Crash Road Blockers / Automated Heavy Sliding Gate Motors',
        qty: 'Turnkey System',
      });
    }

    // Fire Safety
    if (fireSafety === 'addressable') {
      items.push({
        category: 'Fire Alarm',
        description: 'Intelligent Addressable Fire Control Panel with Photoelectric Smoke Detectors & Sounders',
        qty: `${Math.max(8, Math.round(camerasCount * 1.5))} Detectors`,
      });
    } else if (fireSafety === 'conventional') {
      items.push({
        category: 'Fire Alarm',
        description: 'Multi-Zone Conventional Fire Alarm Panel with Manual Call Points & Beams',
        qty: 'Turnkey Network',
      });
    }

    // Fleet GPS
    if (fleetGpsCount > 0) {
      items.push({
        category: 'Fleet GPS',
        description: 'AIS 140 Govt Certified GPS Trackers with Live App, SOS Button & Fuel Sensors',
        qty: `${fleetGpsCount} Vehicles`,
      });
    }

    // Networking
    if (wifiNetworking) {
      items.push({
        category: 'Network',
        description: 'Gigabit Managed PoE+ Switches & Cat6 Armored Outdoor Cabling Infrastructure',
        qty: 'Complete Backbone',
      });
    }

    // Video Wall
    if (videoWall !== 'none') {
      items.push({
        category: 'Command Center',
        description: `${videoWall} Ultra-Narrow Bezel 55" Commercial IPS Video Wall Array & Matrix Controller`,
        qty: `${videoWall === '2x2' ? 4 : 9} Panels`,
      });
    }

    // AMC
    items.push({
      category: 'Maintenance Care',
      description:
        amcPlan === 'comprehensive'
          ? 'Comprehensive AMC (100% Free Parts Replacement + Guaranteed 4-Hour On-Site SLA)'
          : amcPlan === 'non-comprehensive'
          ? 'Non-Comprehensive AMC (Preventive Quarterly Service + Priority Breakdown Support)'
          : 'Standard 1-Year Manufacturer Warranty & Project Commissioning Handover',
      qty: 'Annual Plan',
    });

    return items;
  }, [facility, camerasCount, cameraTier, doorsCount, entryAutomation, fireSafety, fleetGpsCount, wifiNetworking, videoWall, amcPlan]);

  // Turnaround timeframe
  const estimatedTimeline = useMemo(() => {
    if (camerasCount <= 8 && doorsCount <= 2) return '2 to 3 Business Days';
    if (camerasCount <= 32 && videoWall === 'none') return '5 to 7 Business Days';
    return '10 to 14 Business Days';
  }, [camerasCount, doorsCount, videoWall]);

  // Pre-formatted WhatsApp text
  const whatsappUrl = useMemo(() => {
    const facilityLabel = FACILITY_OPTIONS.find((f) => f.id === facility)?.label || facility;
    const msg = [
      `*INQUIRY: BEST TECHNOLOGY SECURITY ESTIMATOR*`,
      `Facility Type: ${facilityLabel}`,
      `Cameras: ${camerasCount} Units (${cameraTier.toUpperCase()})`,
      `Biometric Doors: ${doorsCount} Doors`,
      `Gate Automation: ${entryAutomation.toUpperCase()}`,
      `Fire Safety: ${fireSafety.toUpperCase()}`,
      `Fleet GPS: ${fleetGpsCount} Vehicles`,
      `Structured Network/WiFi: ${wifiNetworking ? 'YES' : 'NO'}`,
      `Control Video Wall: ${videoWall.toUpperCase()}`,
      `AMC Plan: ${amcPlan.toUpperCase()}`,
      `Expected Turnaround: ${estimatedTimeline}`,
      `Please provide an official quotation and schedule a site survey.`,
    ].join('\n');

    return `https://wa.me/918675248969?text=${encodeURIComponent(msg)}`;
  }, [facility, camerasCount, cameraTier, doorsCount, entryAutomation, fireSafety, fleetGpsCount, wifiNetworking, videoWall, amcPlan, estimatedTimeline]);

  return (
    <div className={styles.estimatorWrapper}>
      <div className={styles.estimatorHeader}>
        <div className={styles.estimatorEyebrow}>INTERACTIVE SOLUTION & SCOPE BUILDER</div>
        <h2 className={styles.estimatorTitle}>Configure Your Custom Security Infrastructure</h2>
        <p className={styles.estimatorSubtitle}>
          Select your facility parameters to instantly generate a tailored hardware bill of materials, deployment timeline, and one-click proposal directly on WhatsApp.
        </p>
      </div>

      <div className={styles.estimatorGrid}>
        {/* Left Column: Interactive Controls */}
        <div className={styles.estimatorControls}>
          {/* 1. Facility Selector */}
          <div className={styles.estimatorCard}>
            <label className={styles.estimatorFieldLabel}>
              <span className={styles.stepNum}>1</span> Select Facility Profile
            </label>
            <div className={styles.facilityButtonsGrid}>
              {FACILITY_OPTIONS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`${styles.facilityBtn} ${facility === f.id ? styles.facilityBtnActive : ''}`}
                  onClick={() => handleSelectFacility(f.id)}
                >
                  <span className={styles.facilityBtnIcon}>{f.icon}</span>
                  <span className={styles.facilityBtnText}>{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Surveillance Cameras */}
          <div className={styles.estimatorCard}>
            <div className={styles.fieldRowHeader}>
              <label className={styles.estimatorFieldLabel}>
                <span className={styles.stepNum}>2</span> Video Surveillance Cameras
              </label>
              <span className={styles.badgeVal}>{camerasCount} Channels</span>
            </div>

            <div className={styles.pillRow}>
              {[4, 8, 16, 32, 64, 128].map((qty) => (
                <button
                  key={qty}
                  type="button"
                  className={`${styles.pillBtn} ${camerasCount === qty ? styles.pillBtnActive : ''}`}
                  onClick={() => setCamerasCount(qty)}
                >
                  {qty} Cams
                </button>
              ))}
            </div>

            <div style={{ marginTop: '14px' }}>
              <span className={styles.subFieldLabel}>Camera Technology Tier:</span>
              <div className={styles.tierGrid}>
                {[
                  { id: 'standard', name: '1080p Smart IR', desc: 'Standard business security' },
                  { id: '4k', name: '4K Ultra Starlight', desc: 'High-detail pitch-dark clarity' },
                  { id: 'anpr-ai', name: 'AI ANPR + Face ID', desc: 'License plates & facial tags' },
                  { id: 'thermal', name: 'Thermal + Fire', desc: 'Early electrical & fire warnings' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    className={`${styles.tierCard} ${cameraTier === tier.id ? styles.tierCardActive : ''}`}
                    onClick={() => setCameraTier(tier.id as any)}
                  >
                    <div className={styles.tierName}>{tier.name}</div>
                    <div className={styles.tierDesc}>{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Access Control & Biometrics */}
          <div className={styles.estimatorCard}>
            <div className={styles.fieldRowHeader}>
              <label className={styles.estimatorFieldLabel}>
                <span className={styles.stepNum}>3</span> Biometric Doors & Turnstiles
              </label>
              <span className={styles.badgeVal}>{doorsCount} Door(s)</span>
            </div>
            <div className={styles.pillRow}>
              {[0, 2, 4, 8, 16, 24].map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  className={`${styles.pillBtn} ${doorsCount === cnt ? styles.pillBtnActive : ''}`}
                  onClick={() => setDoorsCount(cnt)}
                >
                  {cnt === 0 ? 'None' : `${cnt} Doors`}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Entry Automation */}
          <div className={styles.estimatorCard}>
            <label className={styles.estimatorFieldLabel}>
              <span className={styles.stepNum}>4</span> Perimeter & Gate Automation
            </label>
            <div className={styles.optionGrid4}>
              {[
                { id: 'none', label: 'Manual Gate', icon: '🚪' },
                { id: 'boom', label: 'Boom Barrier + UHF', icon: '🚧' },
                { id: 'flap', label: 'Speed Flap Barrier', icon: '🛂' },
                { id: 'blockers', label: 'Hydraulic Road Blocker', icon: '🛡️' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`${styles.optionBtn} ${entryAutomation === opt.id ? styles.optionBtnActive : ''}`}
                  onClick={() => setEntryAutomation(opt.id as any)}
                >
                  <span>{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Fire, Fleet GPS & Video Wall */}
          <div className={styles.estimatorCard}>
            <label className={styles.estimatorFieldLabel}>
              <span className={styles.stepNum}>5</span> Specialized Modules & Life Safety
            </label>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
              {/* Fire Safety */}
              <div className={styles.subModuleRow}>
                <div>
                  <div className={styles.subModuleTitle}>Fire & Intrusion Detection</div>
                  <div className={styles.subModuleDesc}>Smoke detectors, alarm panel & emergency sounders</div>
                </div>
                <div className={styles.miniBtnGroup}>
                  {[
                    { id: 'none', label: 'None' },
                    { id: 'conventional', label: 'Conventional' },
                    { id: 'addressable', label: 'Addressable EN-54' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      className={`${styles.miniBtn} ${fireSafety === btn.id ? styles.miniBtnActive : ''}`}
                      onClick={() => setFireSafety(btn.id as any)}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* School / Fleet GPS */}
              <div className={styles.subModuleRow}>
                <div>
                  <div className={styles.subModuleTitle}>GPS Fleet Telematics (AIS 140)</div>
                  <div className={styles.subModuleDesc}>School buses, trucks or company vehicles</div>
                </div>
                <div className={styles.miniBtnGroup}>
                  {[0, 4, 10, 25].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      className={`${styles.miniBtn} ${fleetGpsCount === cnt ? styles.miniBtnActive : ''}`}
                      onClick={() => setFleetGpsCount(cnt)}
                    >
                      {cnt === 0 ? 'None' : `${cnt} GPS`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Command Center Video Wall */}
              <div className={styles.subModuleRow}>
                <div>
                  <div className={styles.subModuleTitle}>Command Center Video Wall</div>
                  <div className={styles.subModuleDesc}>Zero-bezel 55" commercial IPS matrix displays</div>
                </div>
                <div className={styles.miniBtnGroup}>
                  {[
                    { id: 'none', label: 'None' },
                    { id: '2x2', label: '2x2 Array (4 Panels)' },
                    { id: '3x3', label: '3x3 Array (9 Panels)' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      className={`${styles.miniBtn} ${videoWall === btn.id ? styles.miniBtnActive : ''}`}
                      onClick={() => setVideoWall(btn.id as any)}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AMC Plan */}
              <div className={styles.subModuleRow}>
                <div>
                  <div className={styles.subModuleTitle}>Maintenance Service Plan (AMC)</div>
                  <div className={styles.subModuleDesc}>Guaranteed 4-hour SLA response & scheduled audits</div>
                </div>
                <div className={styles.miniBtnGroup}>
                  {[
                    { id: 'standard', label: '1-Yr Warranty' },
                    { id: 'non-comprehensive', label: 'Non-Comp. AMC' },
                    { id: 'comprehensive', label: 'Comprehensive AMC' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      className={`${styles.miniBtn} ${amcPlan === btn.id ? styles.miniBtnActive : ''}`}
                      onClick={() => setAmcPlan(btn.id as any)}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Bill of Materials & Proposal Card */}
        <div className={styles.estimatorSummaryWrap}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryBadge}>PROPOSAL SUMMARY</div>
            <h3 className={styles.summaryTitle}>Engineered Turnkey Solution</h3>
            <p className={styles.summaryDesc}>
              Tailored for <strong style={{ color: '#06B6D4' }}>{FACILITY_OPTIONS.find((f) => f.id === facility)?.label}</strong>. Fully compliant with enterprise security standards.
            </p>

            <div className={styles.timelineBox}>
              <span className={styles.timelineIcon}>⏱️</span>
              <div>
                <div className={styles.timelineLabel}>Estimated Project Commissioning</div>
                <div className={styles.timelineVal}>{estimatedTimeline}</div>
              </div>
            </div>

            {/* Bill of Materials list */}
            <div className={styles.bomHeader}>
              <span>RECOMMENDED HARDWARE & SCOPE</span>
              <span>{billOfMaterials.length} Modules</span>
            </div>
            <div className={styles.bomList}>
              {billOfMaterials.map((item, idx) => (
                <div key={idx} className={styles.bomItem}>
                  <div className={styles.bomItemCategory}>{item.category}</div>
                  <div className={styles.bomItemDesc}>{item.description}</div>
                  <div className={styles.bomItemQty}>{item.qty}</div>
                </div>
              ))}
            </div>

            {/* Turnkey Assurance Badges */}
            <div className={styles.assuranceBadges}>
              <span>✓ Certified Engineers</span>
              <span>✓ 4-Hour SLA Support</span>
              <span>✓ CAD Wire Diagrams Included</span>
            </div>

            {/* Action Buttons */}
            <div className={styles.summaryActions}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappQuoteBtn}
              >
                <span style={{ fontSize: '18px' }}>💬</span>
                <span>Get Official Quote on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className={styles.directCallBtn}
              >
                <span>📞 Call Specialist: {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityEstimator;
