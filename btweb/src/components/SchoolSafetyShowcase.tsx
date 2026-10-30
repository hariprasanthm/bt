import React, { useState } from 'react';
import styles from '../pages/homeDesign.less';
import { COMPANY } from '@/constants/company';

const SAFETY_PILLARS = [
  {
    step: '01',
    title: 'Smart Bus Boarding & Parent SMS',
    icon: '🚌',
    summary: 'Automated RFID / Face tap at bus door alerts parents instantly on mobile app & SMS.',
    badge: 'Real-Time Alert',
    detail:
      'The moment a student steps onto the school bus, the onboard RFID/Face reader logs their entry and triggers an immediate SMS to parents: "Your ward has boarded Bus #14 at 07:42 AM". No manual roll-calls needed.',
    metrics: ['Sub-2s notification delivery', '100% board/deboard audit', 'Parent reassurance'],
  },
  {
    step: '02',
    title: 'AIS 140 Government Certified Bus GPS',
    icon: '📍',
    summary: 'Continuous live tracking, speed governor monitoring and geofence route checks.',
    badge: 'AIS 140 Compliant',
    detail:
      'Dual-carrier 4G GPS tracking transmits bus location every 5 seconds. Administrators and parents see real-time route progress, ETA, traffic delays, and receive instant alerts if the driver exceeds safe speed limits or deviates from the assigned route.',
    metrics: ['Live speed & route telemetry', 'Panic button for emergency SOS', 'Govt transport portal compliant'],
  },
  {
    step: '03',
    title: 'Interior & Road In-Bus Video Surveillance',
    icon: '📹',
    summary: 'Rugged shockproof mobile NVR recording full high-definition video of students & driver.',
    badge: 'Full Bus Coverage',
    detail:
      'Tamper-proof wide-angle dome cameras monitor student seating areas, aisle and driver behavior, while an external front-facing road camera documents road conditions. Shock-resistant storage withstands potholes and high vibrations.',
    metrics: ['Night-vision audio/video', 'Continuous 30-day recording', 'Driver fatigue detection'],
  },
  {
    step: '04',
    title: 'Campus Perimeter & Classroom CCTV',
    icon: '🏫',
    summary: 'Classroom monitoring, corridor coverage, laboratory safety, and playground perimeters.',
    badge: '24/7 Campus Shield',
    detail:
      'High-resolution IP cameras cover all classrooms, corridors, sports grounds, and boundary walls. Centralized monitoring station in the principal’s office allows one-click broadcast and live visual review.',
    metrics: ['Zero blind spots', 'Staff & exam hall supervision', 'Secure restricted access'],
  },
  {
    step: '05',
    title: 'Integrated Campus SOS Alarm Network',
    icon: '🚨',
    summary: 'One-touch emergency sirens linked directly to administrative command & first responders.',
    badge: 'Instant Crisis Response',
    detail:
      'Hardwired and wireless emergency panic switches located in administrative offices, guard cabins, staff rooms, and infirmaries. Instantly rings sirens, flashes high-intensity strobes, and dials emergency services automatically.',
    metrics: ['Under 1-second trigger time', 'Multi-zone siren broadcast', 'Auto-dial emergency dispatch'],
  },
];

export const SchoolSafetyShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = SAFETY_PILLARS[activeStep];

  return (
    <div className={styles.schoolSafetyBox}>
      <div className={styles.schoolHeader}>
        <div className={styles.schoolBadge}>DEDICATED CAMPUS & STUDENT SAFETY SUITE</div>
        <h3 className={styles.schoolTitle}>Integrated School & Child Safety Ecosystem</h3>
        <p className={styles.schoolSubtitle}>
          From the morning bus stop to the classroom and the evening return, Best Technology provides schools with a 360-degree safety umbrella trusted by leading educational institutions.
        </p>
      </div>

      {/* Stepper Navigation */}
      <div className={styles.stepperNav}>
        {SAFETY_PILLARS.map((p, idx) => (
          <button
            key={p.step}
            type="button"
            className={`${styles.stepNavBtn} ${activeStep === idx ? styles.stepNavBtnActive : ''}`}
            onClick={() => setActiveStep(idx)}
          >
            <span className={styles.stepNavNum}>{p.step}</span>
            <span className={styles.stepNavIcon}>{p.icon}</span>
            <span className={styles.stepNavLabel}>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Showcase Card */}
      <div className={styles.stepDetailCard}>
        <div className={styles.stepDetailMain}>
          <div className={styles.stepDetailBadge}>{current.badge}</div>
          <h4 className={styles.stepDetailTitle}>{current.title}</h4>
          <p className={styles.stepDetailText}>{current.detail}</p>

          <div className={styles.stepMetricsList}>
            {current.metrics.map((m, i) => (
              <div key={i} className={styles.stepMetricItem}>
                <span className={styles.metricCheck}>✓</span>
                <span>{m}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/918675248969?text=${encodeURIComponent(
                `Hello Best Technology, I am interested in your School & Campus Safety Solutions (${current.title}). Please provide more details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.schoolInquireBtn}
            >
              <span>💬 Consult for Your School</span>
            </a>
            <a href={`tel:${COMPANY.phoneRaw}`} className={styles.schoolCallBtn}>
              <span>📞 {COMPANY.phone}</span>
            </a>
          </div>
        </div>

        {/* Visual Graphic Representation */}
        <div className={styles.stepGraphicWrap}>
          <svg viewBox="0 0 400 300" className={styles.stepSvg} preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="schoolGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
            </defs>

            <rect width="400" height="300" rx="16" fill="url(#schoolGrad)" stroke="#06B6D4" strokeWidth="1.5" />

            {/* Step 0: Bus Boarding & SMS */}
            {activeStep === 0 && (
              <g transform="translate(40, 40)">
                {/* Yellow School Bus */}
                <rect x="20" y="50" width="180" height="90" rx="10" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
                <rect x="40" y="65" width="30" height="30" fill="#0284C7" rx="3" />
                <rect x="80" y="65" width="30" height="30" fill="#0284C7" rx="3" />
                <rect x="120" y="65" width="30" height="30" fill="#0284C7" rx="3" />
                <rect x="160" y="65" width="30" height="40" fill="#0284C7" rx="3" />
                <circle cx="60" cy="140" r="18" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
                <circle cx="160" cy="140" r="18" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
                <text x="110" y="115" textAnchor="middle" fill="#0F172A" fontWeight="900" fontSize="12">
                  SCHOOL BUS
                </text>

                {/* SMS notification bubble */}
                <g transform="translate(190, 20)">
                  <rect x="0" y="0" width="125" height="70" rx="8" fill="#10B981" />
                  <text x="10" y="20" fill="#FFFFFF" fontSize="10" fontWeight="700">PARENT SMS</text>
                  <text x="10" y="38" fill="#FFFFFF" fontSize="9">"Aarav boarded"</text>
                  <text x="10" y="52" fill="#E2E8F0" fontSize="8">Bus #14 @ 07:42 AM</text>
                  <polygon points="10,70 20,70 10,80" fill="#10B981" />
                </g>
              </g>
            )}

            {/* Step 1: GPS Route */}
            {activeStep === 1 && (
              <g transform="translate(40, 30)">
                {/* Map Grid */}
                <path d="M20 50 Q100 120 180 60 T300 160" fill="none" stroke="#06B6D4" strokeWidth="4" strokeDasharray="6,4" />
                <circle cx="20" cy="50" r="8" fill="#10B981" />
                <circle cx="300" cy="160" r="10" fill="#EF4444" />
                {/* Moving GPS Bus Marker */}
                <circle cx="180" cy="60" r="14" fill="#0284C7" />
                <text x="180" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="10">📍</text>
                {/* Telemetry card */}
                <g transform="translate(40, 150)">
                  <rect x="0" y="0" width="240" height="70" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#38BDF8" strokeWidth="1" />
                  <text x="14" y="22" fill="#38BDF8" fontSize="11" fontWeight="700">AIS 140 TELEMETRY</text>
                  <text x="14" y="42" fill="#F8FAFC" fontSize="11">Current Speed: 32 km/h (Normal)</text>
                  <text x="14" y="60" fill="#10B981" fontSize="10">Geo-fence: Within Route Buffer</text>
                </g>
              </g>
            )}

            {/* Step 2: Bus Cameras */}
            {activeStep === 2 && (
              <g transform="translate(40, 30)">
                <rect x="20" y="20" width="130" height="90" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
                <text x="85" y="65" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="700">CAM 1: Aisle HD</text>
                <circle cx="35" cy="35" r="4" fill="#EF4444" />

                <rect x="170" y="20" width="130" height="90" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
                <text x="235" y="65" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="700">CAM 2: Driver Cam</text>
                <circle cx="185" cy="35" r="4" fill="#EF4444" />

                <g transform="translate(40, 130)">
                  <rect x="0" y="0" width="240" height="80" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#10B981" strokeWidth="1" />
                  <text x="14" y="24" fill="#10B981" fontSize="11" fontWeight="700">SHOCKPROOF MOBILE NVR</text>
                  <text x="14" y="46" fill="#94A3B8" fontSize="11">Vibration Dampened Storage: 2TB SSD</text>
                  <text x="14" y="66" fill="#F8FAFC" fontSize="11">Live 4G Streaming: Active</text>
                </g>
              </g>
            )}

            {/* Step 3: Campus CCTV */}
            {activeStep === 3 && (
              <g transform="translate(40, 30)">
                {/* Campus Building Outline */}
                <polygon points="50,140 160,80 270,140 270,220 50,220" fill="#1E293B" stroke="#06B6D4" strokeWidth="1.5" />
                <rect x="130" y="160" width="60" height="60" fill="#0284C7" />
                {/* Camera Cone */}
                <polygon points="160,60 80,180 240,180" fill="rgba(6, 182, 212, 0.15)" stroke="#22D3EE" strokeWidth="1" strokeDasharray="3,3" />
                <circle cx="160" cy="60" r="12" fill="#06B6D4" />
                <text x="160" y="250" textAnchor="middle" fill="#38BDF8" fontSize="12" fontWeight="700">
                  Total Campus Visual Coverage
                </text>
              </g>
            )}

            {/* Step 4: SOS Panic Alarm */}
            {activeStep === 4 && (
              <g transform="translate(40, 30)">
                <circle cx="160" cy="110" r="60" fill="rgba(239, 68, 68, 0.15)" />
                <circle cx="160" cy="110" r="45" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,4" />
                <circle cx="160" cy="110" r="30" fill="#EF4444" />
                <text x="160" y="116" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900">SOS</text>
                <text x="160" y="210" textAnchor="middle" fill="#F87171" fontSize="13" fontWeight="800">
                  EMERGENCY SIREN BROADCAST
                </text>
                <text x="160" y="230" textAnchor="middle" fill="#94A3B8" fontSize="11">
                  Instant Auto-Dial to Principal & Local Police
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SchoolSafetyShowcase;
