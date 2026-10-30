import React, { useState, useEffect } from 'react';
import styles from '../pages/homeDesign.less';

type FeedMode = 'anpr' | 'thermal' | 'biometric' | 'perimeter';

interface DetectionLog {
  id: string;
  time: string;
  feed: string;
  event: string;
  status: 'info' | 'success' | 'warning' | 'alert';
}

export const SurveillanceSimulator: React.FC = () => {
  const [activeFeed, setActiveFeed] = useState<FeedMode>('anpr');
  const [showGrid, setShowGrid] = useState(true);
  const [showAiBoxes, setShowAiBoxes] = useState(true);
  const [nightVision, setNightVision] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [fps, setFps] = useState(60);
  const [radarAngle, setRadarAngle] = useState(0);
  const [simulatedAlert, setSimulatedAlert] = useState<string | null>(null);

  // Live time ticker
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toTimeString().split(' ')[0] + '.' + String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0')
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 60);
    return () => clearInterval(interval);
  }, []);

  // Radar sweep animation for perimeter
  useEffect(() => {
    const radar = setInterval(() => {
      setRadarAngle((prev) => (prev + 3) % 360);
    }, 40);
    return () => clearInterval(radar);
  }, []);

  // Trigger test anomaly
  const handleTriggerAnomaly = () => {
    const alertMessages: Record<FeedMode, string> = {
      anpr: 'VEHICLE LOGGED: Plate TN-45-AZ-8969 [PASS VALID] — Gate Trigger Sent',
      thermal: 'TEMPERATURE WARNING: Sector B Transformer Core @ 84.6°C (Threshold: 75°C)',
      biometric: 'ACCESS GRANTED: User #BT-8969 [Alok Kumar - Enterprise Admin] Confidence 99.8%',
      perimeter: 'PERIMETER TRIPWIRE BREACH: Zone North-04 Target Vector Detected',
    };
    setSimulatedAlert(alertMessages[activeFeed]);
    setTimeout(() => {
      setSimulatedAlert(null);
    }, 4500);
  };

  return (
    <div className={styles.simContainer}>
      {/* Top HUD Control Bar */}
      <div className={styles.simHeader}>
        <div className={styles.simStatusPill}>
          <span className={styles.simRecDot} />
          <span className={styles.simRecText}>LIVE 4K HUD</span>
          <span className={styles.simDivider}>|</span>
          <span className={styles.simTime}>{timeStr || '12:00:00.00'}</span>
          <span className={styles.simDivider}>|</span>
          <span className={styles.simFps}>{fps} FPS</span>
        </div>

        {/* Feed switchers */}
        <div className={styles.simFeedTabs} role="tablist">
          <button
            type="button"
            className={`${styles.simTabBtn} ${activeFeed === 'anpr' ? styles.simTabActive : ''}`}
            onClick={() => setActiveFeed('anpr')}
          >
            <span className={styles.simTabIcon}>🚘</span>
            <span>AI ANPR Vision</span>
          </button>
          <button
            type="button"
            className={`${styles.simTabBtn} ${activeFeed === 'thermal' ? styles.simTabActive : ''}`}
            onClick={() => setActiveFeed('thermal')}
          >
            <span className={styles.simTabIcon}>🌡️</span>
            <span>Thermal & Fire</span>
          </button>
          <button
            type="button"
            className={`${styles.simTabBtn} ${activeFeed === 'biometric' ? styles.simTabActive : ''}`}
            onClick={() => setActiveFeed('biometric')}
          >
            <span className={styles.simTabIcon}>👤</span>
            <span>3D Biometric HUD</span>
          </button>
          <button
            type="button"
            className={`${styles.simTabBtn} ${activeFeed === 'perimeter' ? styles.simTabActive : ''}`}
            onClick={() => setActiveFeed('perimeter')}
          >
            <span className={styles.simTabIcon}>📡</span>
            <span>360° Radar Tripwire</span>
          </button>
        </div>

        {/* Feature Toggles */}
        <div className={styles.simControlsGroup}>
          <button
            type="button"
            className={`${styles.simToggleBtn} ${showGrid ? styles.simToggleActive : ''}`}
            onClick={() => setShowGrid(!showGrid)}
            title="Toggle Tactical Reticle Grid"
          >
            Grid
          </button>
          <button
            type="button"
            className={`${styles.simToggleBtn} ${showAiBoxes ? styles.simToggleActive : ''}`}
            onClick={() => setShowAiBoxes(!showAiBoxes)}
            title="Toggle AI Neural Bounding Boxes"
          >
            AI HUD
          </button>
          <button
            type="button"
            className={`${styles.simToggleBtn} ${nightVision ? styles.simToggleActive : ''}`}
            onClick={() => setNightVision(!nightVision)}
            title="Toggle Night Vision / Infrared Mode"
          >
            IR
          </button>
          <button
            type="button"
            className={styles.simTriggerAlertBtn}
            onClick={handleTriggerAnomaly}
            title="Simulate Real-Time Trigger Event"
          >
            ⚡ Test Event
          </button>
        </div>
      </div>

      {/* Main Viewport Screen */}
      <div className={`${styles.simViewport} ${nightVision ? styles.simNightVision : ''}`}>
        {/* Tactical Crosshair / Corner brackets */}
        <div className={styles.simBracketTL} />
        <div className={styles.simBracketTR} />
        <div className={styles.simBracketBL} />
        <div className={styles.simBracketBR} />

        {/* Grid Overlay */}
        {showGrid && (
          <div className={styles.simGridOverlay}>
            <div className={styles.simCenterCross} />
          </div>
        )}

        {/* Simulated Alert Banner */}
        {simulatedAlert && (
          <div className={styles.simAlertBanner}>
            <span className={styles.simAlertIcon}>⚠️</span>
            <span>{simulatedAlert}</span>
          </div>
        )}

        {/* 1. ANPR FEED */}
        {activeFeed === 'anpr' && (
          <div className={styles.feedAnpr}>
            <svg viewBox="0 0 800 450" className={styles.simSvg} preserveAspectRatio="xMidYMid slice">
              {/* Perspective Road & Gate */}
              <defs>
                <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0B132B" />
                  <stop offset="100%" stopColor="#1E293B" />
                </linearGradient>
                <linearGradient id="anprBoxGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Background facility horizon */}
              <rect x="0" y="0" width="800" height="200" fill="#070D1B" />
              <polygon points="50,200 750,200 800,450 0,450" fill="url(#roadGrad)" />
              {/* Lane Markings */}
              <line x1="400" y1="200" x2="400" y2="450" stroke="#38BDF8" strokeWidth="2" strokeDasharray="16,12" opacity="0.4" />
              <line x1="260" y1="200" x2="80" y2="450" stroke="#06B6D4" strokeWidth="1" opacity="0.3" />
              <line x1="540" y1="200" x2="720" y2="450" stroke="#06B6D4" strokeWidth="1" opacity="0.3" />

              {/* Security Barrier & Booth */}
              <rect x="620" y="160" width="110" height="150" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" />
              <rect x="640" y="180" width="70" height="50" fill="#1E293B" />
              {/* Boom Barrier Arm */}
              <line x1="580" y1="290" x2="350" y2="290" stroke="#EF4444" strokeWidth="6" strokeDasharray="24,18" />

              {/* Vehicle Silhouette */}
              <g transform="translate(240, 180)">
                {/* Car Body */}
                <path
                  d="M40 90 L80 40 L240 40 L280 90 L310 110 L310 160 L10 160 L10 110 Z"
                  fill="#1E293B"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />
                {/* Windshield */}
                <polygon points="90,48 230,48 260,88 60,88" fill="rgba(6, 182, 212, 0.25)" stroke="#22D3EE" strokeWidth="1" />
                {/* Wheels */}
                <circle cx="70" cy="160" r="28" fill="#0F172A" stroke="#64748B" strokeWidth="4" />
                <circle cx="250" cy="160" r="28" fill="#0F172A" stroke="#64748B" strokeWidth="4" />
                {/* Headlights */}
                <ellipse cx="295" cy="115" rx="12" ry="6" fill="#FEF08A" opacity="0.8" />
                <ellipse cx="25" cy="115" rx="12" ry="6" fill="#FEF08A" opacity="0.8" />

                {/* AI Bounding Box & License Plate Tag */}
                {showAiBoxes && (
                  <>
                    <rect x="0" y="30" width="320" height="150" fill="url(#anprBoxGrad)" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="6,4" />
                    {/* License Plate HUD */}
                    <g transform="translate(100, 125)">
                      <rect x="0" y="0" width="120" height="32" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                      <text x="60" y="22" textAnchor="middle" fill="#0F172A" fontFamily="monospace" fontWeight="900" fontSize="14" letterSpacing="1.5">
                        TN 45 AZ 8969
                      </text>
                      {/* Detection Target Box */}
                      <rect x="-6" y="-6" width="132" height="44" rx="6" fill="none" stroke="#10B981" strokeWidth="2" />
                    </g>
                  </>
                )}
              </g>

              {/* ANPR Telemetry Overlay Card */}
              {showAiBoxes && (
                <g transform="translate(30, 40)">
                  <rect x="0" y="0" width="230" height="120" rx="8" fill="rgba(11, 19, 43, 0.88)" stroke="#06B6D4" strokeWidth="1.5" />
                  <text x="16" y="24" fill="#22D3EE" fontSize="12" fontWeight="700" letterSpacing="1">
                    AI OCR ENGINE // ACTIVE
                  </text>
                  <text x="16" y="48" fill="#F8FAFC" fontSize="13" fontWeight="600">
                    Plate: <tspan fill="#38BDF8" fontWeight="800">TN-45-AZ-8969</tspan>
                  </text>
                  <text x="16" y="70" fill="#94A3B8" fontSize="12">
                    Class: <tspan fill="#F8FAFC">SUV Commercial</tspan>
                  </text>
                  <text x="16" y="90" fill="#94A3B8" fontSize="12">
                    Speed: <tspan fill="#F8FAFC">24 km/h</tspan> | Conf: <tspan fill="#10B981">99.4%</tspan>
                  </text>
                  <text x="16" y="108" fill="#10B981" fontSize="11" fontWeight="700">
                    STATUS: AUTHORIZED INGRESS
                  </text>
                </g>
              )}
            </svg>
          </div>
        )}

        {/* 2. THERMAL & FIRE FEED */}
        {activeFeed === 'thermal' && (
          <div className={styles.feedThermal}>
            <svg viewBox="0 0 800 450" className={styles.simSvg} preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="thermalHeatHot" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="25%" stopColor="#FACC15" />
                  <stop offset="55%" stopColor="#EA580C" />
                  <stop offset="85%" stopColor="#7C2D12" />
                  <stop offset="100%" stopColor="#311042" />
                </radialGradient>
                <radialGradient id="thermalAmbient" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#7E22CE" />
                  <stop offset="50%" stopColor="#3B0764" />
                  <stop offset="100%" stopColor="#0F172A" />
                </radialGradient>
              </defs>

              {/* Thermal Room Background */}
              <rect x="0" y="0" width="800" height="450" fill="url(#thermalAmbient)" />

              {/* Industrial Server Rack & Transformer Machinery */}
              <rect x="80" y="100" width="160" height="280" fill="#2E1065" stroke="#A855F7" strokeWidth="1.5" />
              <rect x="280" y="80" width="240" height="300" fill="#3B0764" stroke="#C084FC" strokeWidth="2" />
              <rect x="560" y="120" width="160" height="260" fill="#2E1065" stroke="#A855F7" strokeWidth="1.5" />

              {/* Hotspot Core (Electrical Panel) */}
              <ellipse cx="400" cy="220" rx="90" ry="70" fill="url(#thermalHeatHot)" />

              {/* Radiometric Temperature Measurement Points */}
              <g transform="translate(400, 220)">
                <circle cx="0" cy="0" r="24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="-12" y1="0" x2="12" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
                <rect x="28" y="-18" width="115" height="36" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#EA580C" strokeWidth="1" />
                <text x="36" y="-2" fill="#FACC15" fontSize="12" fontWeight="700">MAX: 78.4°C</text>
                <text x="36" y="12" fill="#F87171" fontSize="10">HOTSPOT ALERT</text>
              </g>

              {/* Normal Temp Point 1 */}
              <g transform="translate(160, 240)">
                <line x1="-8" y1="0" x2="8" y2="0" stroke="#A855F7" strokeWidth="1.5" />
                <line x1="0" y1="-8" x2="0" y2="8" stroke="#A855F7" strokeWidth="1.5" />
                <rect x="14" y="-14" width="85" height="24" rx="4" fill="rgba(15, 23, 42, 0.85)" />
                <text x="20" y="2" fill="#E2E8F0" fontSize="11">RACK 1: 26.2°C</text>
              </g>

              {/* Normal Temp Point 2 */}
              <g transform="translate(640, 240)">
                <line x1="-8" y1="0" x2="8" y2="0" stroke="#A855F7" strokeWidth="1.5" />
                <line x1="0" y1="-8" x2="0" y2="8" stroke="#A855F7" strokeWidth="1.5" />
                <rect x="14" y="-14" width="85" height="24" rx="4" fill="rgba(15, 23, 42, 0.85)" />
                <text x="20" y="2" fill="#E2E8F0" fontSize="11">RACK 3: 28.1°C</text>
              </g>

              {/* Thermal Palette Scale Bar on Right */}
              <g transform="translate(740, 60)">
                <rect x="0" y="0" width="18" height="280" rx="3" fill="url(#thermalHeatHot)" stroke="#FFFFFF" strokeWidth="1" />
                <text x="-4" y="10" textAnchor="end" fill="#FFFFFF" fontSize="10" fontWeight="700">90°C</text>
                <text x="-4" y="145" textAnchor="end" fill="#FACC15" fontSize="10" fontWeight="700">55°C</text>
                <text x="-4" y="280" textAnchor="end" fill="#A855F7" fontSize="10" fontWeight="700">20°C</text>
              </g>

              {/* Diagnostics Card */}
              <g transform="translate(30, 40)">
                <rect x="0" y="0" width="220" height="90" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#F97316" strokeWidth="1.5" />
                <text x="16" y="24" fill="#FB923C" fontSize="12" fontWeight="700">RADIOMETRIC THERMAL SENSOR</text>
                <text x="16" y="46" fill="#F8FAFC" fontSize="12">Spectral: 8 ~ 14μm Bi-Spectrum</text>
                <text x="16" y="66" fill="#F8FAFC" fontSize="12">Early Smoke/Fire Risk: <tspan fill="#EF4444" fontWeight="800">DETECTED</tspan></text>
              </g>
            </svg>
          </div>
        )}

        {/* 3. BIOMETRIC 3D FACE HUD */}
        {activeFeed === 'biometric' && (
          <div className={styles.feedBiometric}>
            <svg viewBox="0 0 800 450" className={styles.simSvg} preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="bioMesh" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Dark entrance background */}
              <rect x="0" y="0" width="800" height="450" fill="#0A0F1D" />

              {/* Door Frame & Access Turnstile */}
              <rect x="220" y="40" width="360" height="380" fill="none" stroke="#1E293B" strokeWidth="4" />
              <line x1="220" y1="200" x2="260" y2="200" stroke="#10B981" strokeWidth="4" />

              {/* Person Silhouette */}
              <g transform="translate(400, 240)">
                {/* Shoulders */}
                <path d="M-120 180 C-100 120 -60 100 0 100 C60 100 100 120 120 180 Z" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                {/* Neck */}
                <rect x="-24" y="60" width="48" height="50" fill="#334155" />
                {/* Head Outline */}
                <ellipse cx="0" cy="10" rx="65" ry="85" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />

                {/* Facial Mesh Landmarks */}
                {showAiBoxes && (
                  <g stroke="#10B981" strokeWidth="1" fill="none" opacity="0.85">
                    {/* Eyebrows & Eyes */}
                    <path d="M-38 -15 Q-25 -25 -10 -15" />
                    <path d="M10 -15 Q25 -25 38 -15" />
                    <circle cx="-24" cy="-5" r="7" fill="#10B981" fillOpacity="0.3" />
                    <circle cx="24" cy="-5" r="7" fill="#10B981" fillOpacity="0.3" />
                    <line x1="-24" y1="-5" x2="24" y2="-5" stroke="#38BDF8" strokeDasharray="3,3" />

                    {/* Nose Bridge */}
                    <line x1="0" y1="-15" x2="0" y2="20" stroke="#38BDF8" />
                    <path d="M-12 20 L0 25 L12 20" />

                    {/* Mouth */}
                    <path d="M-22 45 Q0 55 22 45" />
                    <line x1="-16" y1="50" x2="16" y2="50" />

                    {/* 3D Wireframe Points */}
                    <polygon points="-45,-40 0,-60 45,-40 55,20 35,70 -35,70 -55,20" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4,3" />
                  </g>
                )}

                {/* Recognition Bracket */}
                <rect x="-85" y="-95" width="170" height="190" rx="12" fill="none" stroke="#10B981" strokeWidth="2.5" />
                <path d="M-85 -70 V-95 H-60" stroke="#34D399" strokeWidth="4" fill="none" />
                <path d="M85 -70 V-95 H60" stroke="#34D399" strokeWidth="4" fill="none" />
                <path d="M-85 70 V95 H-60" stroke="#34D399" strokeWidth="4" fill="none" />
                <path d="M85 70 V95 H60" stroke="#34D399" strokeWidth="4" fill="none" />
              </g>

              {/* Biometric Verification Card (Right) */}
              <g transform="translate(560, 90)">
                <rect x="0" y="0" width="210" height="190" rx="10" fill="rgba(11, 19, 43, 0.95)" stroke="#10B981" strokeWidth="1.5" />
                <rect x="14" y="14" width="40" height="40" rx="6" fill="#1E293B" stroke="#06B6D4" strokeWidth="1" />
                <text x="34" y="38" textAnchor="middle" fill="#22D3EE" fontSize="18">👤</text>
                <text x="64" y="30" fill="#F8FAFC" fontSize="13" fontWeight="800">Alok Kumar</text>
                <text x="64" y="46" fill="#94A3B8" fontSize="11">Sr. Systems Admin</text>
                <line x1="14" y1="64" x2="196" y2="64" stroke="#334155" strokeWidth="1" />
                <text x="14" y="86" fill="#94A3B8" fontSize="11">Emp ID: <tspan fill="#F8FAFC">BT-8969-HQ</tspan></text>
                <text x="14" y="106" fill="#94A3B8" fontSize="11">Liveness: <tspan fill="#10B981">100% Genuine</tspan></text>
                <text x="14" y="126" fill="#94A3B8" fontSize="11">Match Score: <tspan fill="#38BDF8">99.8%</tspan></text>
                <text x="14" y="146" fill="#94A3B8" fontSize="11">Door Zone: <tspan fill="#F8FAFC">Server Room B</tspan></text>
                <rect x="14" y="156" width="182" height="22" rx="4" fill="#065F46" />
                <text x="105" y="171" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="800" letterSpacing="0.8">
                  ✓ ACCESS GRANTED (OPEN)
                </text>
              </g>

              {/* Hardware Spec HUD (Left) */}
              <g transform="translate(30, 40)">
                <rect x="0" y="0" width="190" height="110" rx="8" fill="rgba(11, 19, 43, 0.9)" stroke="#06B6D4" strokeWidth="1.5" />
                <text x="16" y="24" fill="#22D3EE" fontSize="12" fontWeight="700">TOUCHLESS BIOMETRICS</text>
                <text x="16" y="48" fill="#F8FAFC" fontSize="12">Speed: &lt; 0.2s matching</text>
                <text x="16" y="68" fill="#F8FAFC" fontSize="12">Anti-Spoofing: Dual Lens</text>
                <text x="16" y="88" fill="#10B981" fontSize="12">EM Lock: Auto Released</text>
              </g>
            </svg>
          </div>
        )}

        {/* 4. PERIMETER & RADAR TRIPWIRE */}
        {activeFeed === 'perimeter' && (
          <div className={styles.feedPerimeter}>
            <svg viewBox="0 0 800 450" className={styles.simSvg} preserveAspectRatio="xMidYMid slice">
              {/* Dark radar background */}
              <rect x="0" y="0" width="800" height="450" fill="#050B14" />

              {/* Radar Rings Centered at (400, 225) */}
              <g transform="translate(400, 225)">
                <circle cx="0" cy="0" r="60" fill="none" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="0" cy="0" r="120" fill="none" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.5" />
                <circle cx="0" cy="0" r="180" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="6,4" />
                <line x1="-200" y1="0" x2="200" y2="0" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="0" y1="-200" x2="0" y2="200" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.3" />

                {/* Radar Rotating Sweep Line */}
                <line
                  x1="0"
                  y1="0"
                  x2={Math.cos((radarAngle * Math.PI) / 180) * 190}
                  y2={Math.sin((radarAngle * Math.PI) / 180) * 190}
                  stroke="#22D3EE"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Simulated Intrusion Targets */}
                {/* Target 1 - Authorized */}
                <circle cx="80" cy="-60" r="5" fill="#10B981" />
                <text x="90" y="-56" fill="#10B981" fontSize="10" fontFamily="monospace">TAG#A14 (PATROL)</text>

                {/* Target 2 - Warning / Perimeter Breach */}
                <circle cx="-130" cy="90" r="7" fill="#EF4444" className={styles.simPulseDot} />
                <circle cx="-130" cy="90" r="15" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2,2" />
                <text x="-120" y="94" fill="#F87171" fontSize="10" fontFamily="monospace" fontWeight="700">INTRUDER [ZONE-4]</text>

                {/* Virtual Laser Perimeter Tripwire */}
                <line x1="-180" y1="120" x2="180" y2="120" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,4" />
                <text x="0" y="136" textAnchor="middle" fill="#EF4444" fontSize="10" letterSpacing="2">
                  --- ACTIVE LASER TRIPWIRE BOUNDARY ---
                </text>
              </g>

              {/* Perimeter Status Console */}
              <g transform="translate(30, 40)">
                <rect x="0" y="0" width="220" height="110" rx="8" fill="rgba(11, 19, 43, 0.9)" stroke="#06B6D4" strokeWidth="1.5" />
                <text x="16" y="24" fill="#22D3EE" fontSize="12" fontWeight="700">360° MICROWAVE RADAR</text>
                <text x="16" y="48" fill="#F8FAFC" fontSize="12">Coverage: 500m Diameter</text>
                <text x="16" y="68" fill="#F8FAFC" fontSize="12">Tripwire Sensor: Active</text>
                <text x="16" y="88" fill="#EF4444" fontSize="12" fontWeight="700">Alert: Sector 4 Tripped</text>
              </g>

              <g transform="translate(560, 40)">
                <rect x="0" y="0" width="210" height="110" rx="8" fill="rgba(11, 19, 43, 0.9)" stroke="#10B981" strokeWidth="1.5" />
                <text x="16" y="24" fill="#34D399" fontSize="12" fontWeight="700">PATROL CHECKPOINT HUD</text>
                <text x="16" y="48" fill="#F8FAFC" fontSize="12">Guard Tour: On Schedule</text>
                <text x="16" y="68" fill="#F8FAFC" fontSize="12">Last Tag: Post 7 (02m ago)</text>
                <text x="16" y="88" fill="#38BDF8" fontSize="12">Next: Gate East (120m)</text>
              </g>
            </svg>
          </div>
        )}

        {/* Bottom Sub-HUD Ticker */}
        <div className={styles.simBottomHud}>
          <div className={styles.simHudPill}>
            <span className={styles.simHudLabel}>HARDWARE:</span>
            <span className={styles.simHudVal}>BEST-TECH ENTERPRISE NVR // 64-CH 4K</span>
          </div>
          <div className={styles.simHudPill}>
            <span className={styles.simHudLabel}>BANDWIDTH:</span>
            <span className={styles.simHudVal}>142 Mbps / H.265+ ULTRA</span>
          </div>
          <div className={styles.simHudPill}>
            <span className={styles.simHudLabel}>STATUS:</span>
            <span className={styles.simHudSuccess}>99.98% OPERATIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveillanceSimulator;
