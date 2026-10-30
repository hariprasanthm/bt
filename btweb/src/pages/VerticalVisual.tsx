import React from 'react';
import styles from './homeDesign.less';

interface VisualProps {
  slug: string;
  className?: string;
}

export const VerticalVisual: React.FC<VisualProps> = ({ slug, className }) => {
  // Determine relevant real image
  let imageSrc = '/images/cctv-bullet.png';
  let badgeText = '4K ULTRA-HD SERIES';
  let specNotes = 'Sony STARVIS™ 8MP | EXIR 80m | H.265+';

  if (slug.includes('wireless')) {
    imageSrc = '/images/cctv-wireless.png';
    badgeText = 'LONG-RANGE DUAL-BAND WIRELESS';
    specNotes = '300m Wi-Fi Range | 2K HD Color Night Vision | IP67 Weatherproof';
  } else if (slug.includes('dome') || slug.includes('ip-ahd')) {
    imageSrc = '/images/cctv-dome.png';
    badgeText = '4K VANDAL DOME SERIES';
    specNotes = 'Sony STARVIS™ 8MP | IK10 Vandal-Proof | 120dB WDR';
  } else if (slug.includes('ptz') || slug.includes('control-room')) {
    imageSrc = '/images/cctv-ptz.png';
    badgeText = '36X OPTICAL SPEED DOME';
    specNotes = '360° Endless Pan | 200m Laser IR | Auto-Tracking 3.0';
  } else if (slug.includes('special') || slug.includes('thermal') || slug.includes('fire')) {
    imageSrc = '/images/cctv-thermal.png';
    badgeText = 'BI-SPECTRUM RADIOMETRIC THERMAL';
    specNotes = '-20°C to 550°C Detection | Early Fire Alarm | VOx Sensor';
  } else if (slug.includes('biometric') || slug.includes('access')) {
    imageSrc = '/images/biometric-terminal.webp';
    badgeText = '3D FACE ID & BIOMETRIC TERMINAL';
    specNotes = '< 0.2s Verification | Anti-Spoof Dual Lens | 50,000 Faces';
  } else if (slug.includes('entry') || slug.includes('gate') || slug.includes('barrier')) {
    imageSrc = '/images/boom-barrier.webp';
    badgeText = 'HIGH-SPEED BRUSHLESS BOOM BARRIER';
    specNotes = '0.9s Opening Speed | 100% Duty Cycle | UHF RFID Tag';
  }

  return (
    <div
      className={`${styles.visualCard} ${className || ''}`}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(11, 27, 61, 0.08)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '280px',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <img
          src={imageSrc}
          alt={badgeText}
          style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
        />
        <span
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: '#0B1B3D',
            color: '#FFFFFF',
            fontFamily: 'monospace',
            fontSize: '11px',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: '4px',
          }}
        >
          {badgeText}
        </span>
        <span
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#0066FF',
            color: '#FFFFFF',
            fontFamily: 'monospace',
            fontSize: '11px',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: '4px',
          }}
        >
          GENUINE OEM
        </span>
      </div>

      <div style={{ padding: '20px', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B1B3D' }}>COMMERCIAL SPECIFICATIONS</span>
        </div>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 12px', lineHeight: 1.5 }}>
          {specNotes}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '11px', color: '#64748B' }}>
          <span style={{ background: '#F1F5F9', padding: '4px 8px', borderRadius: '4px' }}>✓ IP67 Ingress</span>
          <span style={{ background: '#F1F5F9', padding: '4px 8px', borderRadius: '4px' }}>✓ ONVIF Profile S/G/T</span>
          <span style={{ background: '#F1F5F9', padding: '4px 8px', borderRadius: '4px' }}>✓ Turnkey Splicing Included</span>
        </div>
      </div>
    </div>
  );
};

export default VerticalVisual;
