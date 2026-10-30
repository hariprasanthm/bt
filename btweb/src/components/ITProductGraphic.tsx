import React from 'react';

interface ITProductGraphicProps {
  type:
    | 'desktop-laptop'
    | 'projector'
    | 'printer'
    | 'payroll'
    | 'hr'
    | 'visitor'
    | 'vms'
    | 'access'
    | 'epabx'
    | 'network'
    | 'analog-system'
    | 'ip-system'
    | 'cctv-bundle'
    | 'warehouse';
}

export const ITProductGraphic: React.FC<ITProductGraphicProps> = ({ type }) => {
  switch (type) {
    case 'desktop-laptop':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desktop Tower */}
          <rect x="12" y="8" width="22" height="54" rx="3" fill="#1E293B" stroke="#0066FF" strokeWidth="1.5" />
          <rect x="16" y="14" width="14" height="4" rx="1" fill="#00C2FF" opacity="0.8" />
          <circle cx="23" cy="24" r="2.5" fill="#3B82F6" />
          <line x1="16" y1="36" x2="30" y2="36" stroke="#475569" strokeWidth="1.5" />
          <line x1="16" y1="42" x2="30" y2="42" stroke="#475569" strokeWidth="1.5" />
          <line x1="16" y1="48" x2="30" y2="48" stroke="#475569" strokeWidth="1.5" />

          {/* Desktop Monitor */}
          <rect x="40" y="6" width="46" height="32" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
          <rect x="43" y="9" width="40" height="26" rx="1" fill="#1E3A8A" />
          <path d="M47 28L56 18L66 25L75 14L81 20" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" />
          <rect x="58" y="38" width="10" height="12" fill="#334155" />
          <rect x="51" y="50" width="24" height="3" rx="1" fill="#475569" />

          {/* Sleek Laptop */}
          <rect x="76" y="24" width="34" height="22" rx="2" fill="#0F172A" stroke="#0066FF" strokeWidth="1.5" />
          <rect x="79" y="27" width="28" height="16" fill="#0284C7" />
          <circle cx="93" cy="35" r="4" fill="#38BDF8" opacity="0.6" />
          <path d="M70 48L76 46H110L116 48H70Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        </svg>
      );

    case 'projector':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Projector Body */}
          <rect x="18" y="22" width="84" height="30" rx="5" fill="#F8FAFC" stroke="#0066FF" strokeWidth="1.5" />
          {/* Lens */}
          <circle cx="84" cy="37" r="13" fill="#0F172A" stroke="#00C2FF" strokeWidth="2" />
          <circle cx="84" cy="37" r="8" fill="#1E3A8A" />
          <circle cx="82" cy="35" r="3" fill="#67E8F9" />
          {/* Light projection cone */}
          <polygon points="97,37 118,22 118,52" fill="url(#beamGrad)" opacity="0.5" />
          {/* Ventilation grilles & buttons */}
          <line x1="26" y1="30" x2="60" y2="30" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="36" x2="60" y2="36" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="42" x2="60" y2="42" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="25" r="1.5" fill="#22C55E" />
          <circle cx="36" cy="25" r="1.5" fill="#3B82F6" />
          {/* Feet */}
          <rect x="26" y="52" width="8" height="4" rx="1" fill="#475569" />
          <rect x="86" y="52" width="8" height="4" rx="1" fill="#475569" />
          <defs>
            <linearGradient id="beamGrad" x1="97" y1="37" x2="118" y2="37" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C2FF" stopOpacity="0.8" />
              <stop offset="1" stopColor="#00C2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'printer':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Paper Feed */}
          <rect x="36" y="8" width="48" height="16" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
          <line x1="42" y1="14" x2="78" y2="14" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="42" y1="18" x2="70" y2="18" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Printer Body */}
          <rect x="22" y="20" width="76" height="34" rx="5" fill="#FFFFFF" stroke="#0066FF" strokeWidth="1.5" />
          {/* Output Slot */}
          <rect x="32" y="30" width="56" height="12" rx="2" fill="#0F172A" />
          {/* Emerging Printed Page */}
          <rect x="38" y="34" width="44" height="16" rx="1" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="42" y1="39" x2="76" y2="39" stroke="#0066FF" strokeWidth="1.5" />
          <line x1="42" y1="44" x2="68" y2="44" stroke="#00C2FF" strokeWidth="1" />
          {/* Screen / Control Panel */}
          <rect x="76" y="24" width="16" height="5" rx="1" fill="#0284C7" />
          <circle cx="28" cy="27" r="2" fill="#22C55E" />
          {/* Paper tray base */}
          <rect x="28" y="52" width="64" height="8" rx="2" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
      );

    case 'payroll':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Laptop Screen */}
          <rect x="24" y="10" width="72" height="42" rx="3" fill="#0A192F" stroke="#0066FF" strokeWidth="1.5" />
          {/* Inner Dashboard UI */}
          <rect x="28" y="14" width="64" height="34" rx="1" fill="#0F172A" />
          {/* Payroll Header */}
          <rect x="31" y="17" width="22" height="4" rx="1" fill="#00C2FF" />
          <circle cx="86" cy="19" r="2" fill="#22C55E" />
          {/* Salary Bar Chart */}
          <rect x="33" y="36" width="5" height="9" rx="1" fill="#3B82F6" />
          <rect x="41" y="30" width="5" height="15" rx="1" fill="#0066FF" />
          <rect x="49" y="25" width="5" height="20" rx="1" fill="#00C2FF" />
          <rect x="57" y="32" width="5" height="13" rx="1" fill="#38BDF8" />
          {/* Summary Metric Card */}
          <rect x="66" y="24" width="23" height="12" rx="2" fill="#1E293B" stroke="#334155" strokeWidth="1" />
          <text x="69" y="33" fill="#38BDF8" fontSize="7" fontWeight="bold" fontFamily="sans-serif">₹ PAY</text>
          {/* Laptop Base */}
          <path d="M14 52L24 52H96L106 52L102 56H18L14 52Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        </svg>
      );

    case 'hr':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Laptop Screen */}
          <rect x="24" y="10" width="72" height="42" rx="3" fill="#0A192F" stroke="#0066FF" strokeWidth="1.5" />
          <rect x="28" y="14" width="64" height="34" rx="1" fill="#0F172A" />
          {/* HR Header */}
          <rect x="31" y="17" width="18" height="3" rx="1" fill="#38BDF8" />
          {/* Employee Avatars */}
          <circle cx="42" cy="26" r="3.5" fill="#0066FF" />
          <path d="M36 34C36 31.5 38.5 30 42 30C45.5 30 48 31.5 48 34" fill="#0066FF" />
          <circle cx="58" cy="26" r="3.5" fill="#00C2FF" />
          <path d="M52 34C52 31.5 54.5 30 58 30C61.5 30 64 31.5 64 34" fill="#00C2FF" />
          <circle cx="74" cy="26" r="3.5" fill="#3B82F6" />
          <path d="M68 34C68 31.5 70.5 30 74 30C77.5 30 80 31.5 80 34" fill="#3B82F6" />
          {/* Attendance metric line */}
          <line x1="32" y1="41" x2="84" y2="41" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="41" x2="74" y2="41" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
          {/* Laptop Base */}
          <path d="M14 52L24 52H96L106 52L102 56H18L14 52Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        </svg>
      );

    case 'visitor':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Touchscreen Kiosk Terminal */}
          <rect x="42" y="6" width="36" height="46" rx="4" fill="#0F172A" stroke="#0066FF" strokeWidth="1.5" />
          <rect x="46" y="10" width="28" height="34" rx="2" fill="#1E293B" />
          {/* Camera Pin on top */}
          <circle cx="60" cy="8" r="1.5" fill="#00C2FF" />
          {/* Visitor Pass Graphic */}
          <rect x="50" y="14" width="20" height="12" rx="1" fill="#0284C7" />
          <circle cx="56" cy="19" r="2.5" fill="#FFFFFF" />
          <line x1="61" y1="18" x2="67" y2="18" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="61" y1="21" x2="65" y2="21" stroke="#FFFFFF" strokeWidth="1" />
          {/* QR / Barcode Scan line */}
          <line x1="50" y1="32" x2="70" y2="32" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="38" r="3" fill="#00C2FF" opacity="0.8" />
          {/* Stand and Base */}
          <rect x="58" y="52" width="4" height="12" fill="#64748B" />
          <ellipse cx="60" cy="64" rx="18" ry="4" fill="#334155" stroke="#475569" strokeWidth="1" />
        </svg>
      );

    case 'vms':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* VMS Surveillance Wall Monitor */}
          <rect x="22" y="8" width="76" height="46" rx="3" fill="#0F172A" stroke="#0066FF" strokeWidth="1.5" />
          {/* 4 Camera Feeds Split Screen */}
          <rect x="26" y="12" width="32" height="17" fill="#1E293B" stroke="#00C2FF" strokeWidth="0.8" />
          <rect x="62" y="12" width="32" height="17" fill="#1E293B" stroke="#00C2FF" strokeWidth="0.8" />
          <rect x="26" y="32" width="32" height="17" fill="#1E293B" stroke="#00C2FF" strokeWidth="0.8" />
          <rect x="62" y="32" width="32" height="17" fill="#1E293B" stroke="#00C2FF" strokeWidth="0.8" />
          {/* Live Recording Red Dots */}
          <circle cx="30" cy="16" r="1.5" fill="#EF4444" />
          <circle cx="66" cy="16" r="1.5" fill="#EF4444" />
          <circle cx="30" cy="36" r="1.5" fill="#EF4444" />
          <circle cx="66" cy="36" r="1.5" fill="#EF4444" />
          {/* Simulated CCTV outlines */}
          <path d="M34 26L42 20L50 25" stroke="#38BDF8" strokeWidth="1" />
          <path d="M70 24L78 18L86 23" stroke="#38BDF8" strokeWidth="1" />
          {/* Monitor Stand */}
          <rect x="56" y="54" width="8" height="8" fill="#475569" />
          <rect x="46" y="62" width="28" height="3" rx="1" fill="#64748B" />
        </svg>
      );

    case 'access':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Biometric Wall Terminal */}
          <rect x="40" y="6" width="40" height="54" rx="4" fill="#0B1329" stroke="#0066FF" strokeWidth="1.5" />
          {/* Face recognition frame */}
          <rect x="46" y="10" width="28" height="24" rx="2" fill="#0F172A" stroke="#00C2FF" strokeWidth="1" />
          {/* Biometric Face Target */}
          <circle cx="60" cy="20" r="5" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 1" />
          <path d="M54 28C54 26 57 24.5 60 24.5C63 24.5 66 26 66 28" stroke="#38BDF8" strokeWidth="1" />
          {/* Fingerprint / RFID sensor */}
          <circle cx="60" cy="42" r="7" fill="#1E293B" stroke="#00C2FF" strokeWidth="1" />
          <path d="M57 42C57 40 58.5 39 60 39C61.5 39 63 40 63 42" stroke="#22C55E" strokeWidth="1" />
          <circle cx="60" cy="42" r="2" fill="#22C55E" />
          {/* Keypad dots */}
          <circle cx="48" cy="53" r="1" fill="#94A3B8" />
          <circle cx="54" cy="53" r="1" fill="#94A3B8" />
          <circle cx="60" cy="53" r="1" fill="#94A3B8" />
          <circle cx="66" cy="53" r="1" fill="#94A3B8" />
          <circle cx="72" cy="53" r="1" fill="#94A3B8" />
        </svg>
      );

    case 'epabx':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desk Base */}
          <rect x="22" y="14" width="76" height="46" rx="4" fill="#0F172A" stroke="#0066FF" strokeWidth="1.5" />
          {/* Digital Screen */}
          <rect x="52" y="20" width="38" height="18" rx="2" fill="#0284C7" />
          <line x1="56" y1="26" x2="84" y2="26" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="56" y1="30" x2="76" y2="30" stroke="#E0F2FE" strokeWidth="1" />
          <circle cx="84" cy="32" r="1.5" fill="#22C55E" />
          {/* Keypad Grid */}
          <rect x="52" y="42" width="8" height="5" rx="1" fill="#334155" />
          <rect x="64" y="42" width="8" height="5" rx="1" fill="#334155" />
          <rect x="76" y="42" width="8" height="5" rx="1" fill="#334155" />
          <rect x="52" y="50" width="8" height="5" rx="1" fill="#334155" />
          <rect x="64" y="50" width="8" height="5" rx="1" fill="#334155" />
          <rect x="76" y="50" width="8" height="5" rx="1" fill="#334155" />
          {/* Handset */}
          <rect x="26" y="10" width="18" height="54" rx="9" fill="#1E293B" stroke="#00C2FF" strokeWidth="1" />
          <ellipse cx="35" cy="18" rx="6" ry="4" fill="#0F172A" />
          <ellipse cx="35" cy="56" rx="6" ry="4" fill="#0F172A" />
          <rect x="32" y="24" width="6" height="24" rx="2" fill="#334155" />
        </svg>
      );

    case 'network':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Server Rack Cabinet */}
          <rect x="20" y="8" width="80" height="54" rx="3" fill="#0B132B" stroke="#0066FF" strokeWidth="1.5" />
          {/* Server Unit 1 */}
          <rect x="24" y="12" width="72" height="14" rx="1" fill="#1E293B" stroke="#334155" strokeWidth="1" />
          <circle cx="28" cy="19" r="1.5" fill="#22C55E" />
          <circle cx="32" cy="19" r="1.5" fill="#00C2FF" />
          <circle cx="36" cy="19" r="1.5" fill="#3B82F6" />
          <line x1="42" y1="19" x2="88" y2="19" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Patch Panel with Ethernet Cables */}
          <rect x="24" y="30" width="72" height="14" rx="1" fill="#0F172A" stroke="#00C2FF" strokeWidth="1" />
          {/* Cable arches */}
          <path d="M30 38C30 48 40 48 40 38" stroke="#00C2FF" strokeWidth="1.5" fill="none" />
          <path d="M44 38C44 48 54 48 54 38" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
          <path d="M58 38C58 48 68 48 68 38" stroke="#00C2FF" strokeWidth="1.5" fill="none" />
          <path d="M72 38C72 48 82 48 82 38" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
          {/* Switch LEDs */}
          <circle cx="30" cy="34" r="1" fill="#22C55E" />
          <circle cx="44" cy="34" r="1" fill="#22C55E" />
          <circle cx="58" cy="34" r="1" fill="#22C55E" />
          <circle cx="72" cy="34" r="1" fill="#22C55E" />
          {/* Server Unit 3 */}
          <rect x="24" y="48" width="72" height="10" rx="1" fill="#1E293B" stroke="#334155" strokeWidth="1" />
          <line x1="28" y1="53" x2="88" y2="53" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
      );

    case 'analog-system':
      return (
        <svg viewBox="0 0 140 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* DVR Box */}
          <rect x="10" y="32" width="75" height="26" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
          <line x1="16" y1="42" x2="55" y2="42" stroke="#475569" strokeWidth="1" />
          <circle cx="68" cy="42" r="2.5" fill="#3B82F6" />
          <circle cx="76" cy="42" r="1.5" fill="#22C55E" />
          <rect x="14" y="48" width="12" height="4" rx="1" fill="#1E293B" />
          {/* Bullet Camera Beside */}
          <path d="M78 28L108 24L114 42L84 46Z" fill="#F8FAFC" stroke="#0066FF" strokeWidth="1.5" />
          <ellipse cx="111" cy="33" rx="4" ry="9" fill="#0F172A" stroke="#00C2FF" strokeWidth="1" />
          <circle cx="111" cy="33" r="3" fill="#1E3A8A" />
          <rect x="74" y="38" width="8" height="16" rx="2" fill="#64748B" />
          {/* Dome Camera Top Right */}
          <ellipse cx="118" cy="22" rx="14" ry="7" fill="#E2E8F0" stroke="#0066FF" strokeWidth="1.5" />
          <path d="M106 22C106 31 130 31 130 22" fill="#0F172A" stroke="#00C2FF" strokeWidth="1" />
        </svg>
      );

    case 'ip-system':
      return (
        <svg viewBox="0 0 140 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* High-end NVR Box */}
          <rect x="8" y="30" width="80" height="28" rx="3" fill="#0A192F" stroke="#0066FF" strokeWidth="1.5" />
          <rect x="14" y="38" width="36" height="5" rx="1" fill="#1E293B" />
          <circle cx="70" cy="40" r="2.5" fill="#00C2FF" />
          <circle cx="78" cy="40" r="2.5" fill="#22C55E" />
          <line x1="14" y1="48" x2="78" y2="48" stroke="#334155" strokeWidth="1.5" />
          {/* IP Turret / Dome Camera */}
          <ellipse cx="108" cy="26" rx="16" ry="8" fill="#F8FAFC" stroke="#0066FF" strokeWidth="1.5" />
          <path d="M94 26C94 38 122 38 122 26" fill="#0F172A" stroke="#00C2FF" strokeWidth="1.5" />
          <circle cx="108" cy="31" r="5" fill="#1E3A8A" />
          <circle cx="106" cy="29" r="1.5" fill="#67E8F9" />
          {/* PoE Icon / Digital Ring */}
          <circle cx="108" cy="31" r="9" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
      );

    case 'cctv-bundle':
      return (
        <svg viewBox="0 0 160 90" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* NVR / DVR Box */}
          <rect x="25" y="36" width="110" height="34" rx="4" fill="#0B132B" stroke="#0066FF" strokeWidth="1.5" />
          <rect x="35" y="46" width="50" height="6" rx="1" fill="#1E293B" />
          <circle cx="112" cy="49" r="3" fill="#00C2FF" />
          <circle cx="122" cy="49" r="3" fill="#22C55E" />
          <line x1="35" y1="58" x2="125" y2="58" stroke="#334155" strokeWidth="1.5" />
          {/* Dome Camera Top Left */}
          <ellipse cx="45" cy="18" rx="16" ry="8" fill="#F8FAFC" stroke="#0066FF" strokeWidth="1.2" />
          <path d="M31 18C31 29 59 29 59 18" fill="#0F172A" stroke="#00C2FF" strokeWidth="1" />
          <circle cx="45" cy="22" r="4" fill="#1E3A8A" />
          {/* Bullet Camera Top Right */}
          <path d="M96 14L130 10L135 28L101 32Z" fill="#FFFFFF" stroke="#0066FF" strokeWidth="1.2" />
          <ellipse cx="132" cy="19" rx="3" ry="8" fill="#0F172A" stroke="#00C2FF" strokeWidth="1" />
          {/* Hard Drive Card */}
          <rect x="12" y="52" width="26" height="32" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
          <circle cx="25" cy="65" r="7" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
          <text x="16" y="79" fill="#0F172A" fontSize="5" fontWeight="bold">1TB HDD</text>
          {/* Cable Spool */}
          <ellipse cx="138" cy="68" rx="14" ry="16" fill="#1E293B" stroke="#00C2FF" strokeWidth="1.5" />
          <ellipse cx="138" cy="68" rx="7" ry="8" fill="#0F172A" stroke="#475569" strokeWidth="1" />
        </svg>
      );

    case 'warehouse':
      return (
        <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="52" rx="3" fill="#0F172A" />
          {/* Racks */}
          <line x1="20" y1="18" x2="20" y2="58" stroke="#334155" strokeWidth="2" />
          <line x1="45" y1="18" x2="45" y2="58" stroke="#334155" strokeWidth="2" />
          <line x1="75" y1="18" x2="75" y2="58" stroke="#334155" strokeWidth="2" />
          <line x1="100" y1="18" x2="100" y2="58" stroke="#334155" strokeWidth="2" />
          <line x1="20" y1="28" x2="45" y2="28" stroke="#475569" strokeWidth="1.5" />
          <line x1="20" y1="42" x2="45" y2="42" stroke="#475569" strokeWidth="1.5" />
          <line x1="75" y1="28" x2="100" y2="28" stroke="#475569" strokeWidth="1.5" />
          <line x1="75" y1="42" x2="100" y2="42" stroke="#475569" strokeWidth="1.5" />
          {/* Aisle Camera on ceiling beam */}
          <path d="M54 10L66 10L62 18L58 18Z" fill="#64748B" />
          <circle cx="60" cy="22" r="4" fill="#00C2FF" />
          <polygon points="60,22 40,58 80,58" fill="#00C2FF" opacity="0.15" />
        </svg>
      );

    default:
      return null;
  }
};

export default ITProductGraphic;
