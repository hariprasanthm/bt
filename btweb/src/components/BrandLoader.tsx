import React from 'react';
import type { CSSProperties } from 'react';

export type BrandLoaderProps = {
  /** Overall dimension in px (default 36 for compact, scales up for fullscreen) */
  size?: number;
  /** Optional text under the loader, e.g. "Loading CCTV Solutions..." */
  label?: string;
  /** Optional percentage 0-100 */
  progress?: number;
  /** Center in full viewport with cinematic dark backdrop */
  fullscreen?: boolean;
  /** Optional light/dark theme toggle */
  theme?: 'dark' | 'light';
  style?: CSSProperties;
  className?: string;
};

/**
 * Best Technology IT Solution official brand loader.
 * Employs the authentic circuit-B emblem, electric blue scanning laser,
 * and rotating orbital status rings for a high-tech security aesthetic.
 */
export const BrandLoader: React.FC<BrandLoaderProps> = ({
  size = 36,
  label,
  progress,
  fullscreen = false,
  theme = 'dark',
  style,
  className = '',
}) => {
  const isCompact = !fullscreen && size <= 40;
  const isDark = theme === 'dark';
  const iconSrc = isDark ? '/images/logo-icon-darkmode.png' : '/images/logo-icon.png';

  // Compact indicator for buttons, inline spinners, and antd Spin
  if (isCompact) {
    const iconDim = Math.round(size * 0.65);
    return (
      <span
        className={`bt-loader-compact ${className}`}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          ...style,
        }}
        role="status"
        aria-label={label || 'Loading...'}
      >
        <span
          style={{
            position: 'relative',
            width: size,
            height: size,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Rotating cyan orbital ring */}
          <span
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid transparent',
              borderTopColor: '#00E5FF',
              borderRightColor: '#0066FF',
              animation: 'btLoaderSpin 0.9s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite',
            }}
          />
          {/* Best Technology B emblem */}
          <img
            src={iconSrc}
            alt="Best Technology"
            style={{
              width: iconDim,
              height: iconDim,
              objectFit: 'contain',
              display: 'block',
              filter: isDark ? 'drop-shadow(0 0 4px rgba(0, 229, 255, 0.5))' : 'none',
              animation: 'btLoaderPulse 1.8s ease-in-out infinite',
            }}
          />
        </span>

        {label && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: isDark ? '#94A3B8' : '#475569',
              letterSpacing: '0.4px',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
            {progress !== undefined ? ` ${Math.round(progress)}%` : ''}
          </span>
        )}
      </span>
    );
  }

  // Full / Cinematic loader for route transitions, splash, and full-page loading
  const stageDim = fullscreen ? 96 : Math.max(size, 72);
  const iconDim = Math.round(stageDim * 0.62);

  const loaderBody = (
    <div
      className={`bt-brand-loader-stage ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: fullscreen ? '40px 24px' : '20px 16px',
        position: 'relative',
        userSelect: 'none',
        ...style,
      }}
      role="status"
      aria-label={label || 'Loading Best Technology...'}
    >
      {/* Emblem & Concentric Orbit Ring Stage */}
      <div
        style={{
          position: 'relative',
          width: stageDim,
          height: stageDim,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 18,
        }}
      >
        {/* Radar ping background ripple */}
        <span
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.35) 0%, rgba(0, 229, 255, 0.1) 60%, transparent 75%)',
            animation: 'btRadarRipple 2.2s ease-out infinite',
          }}
        />

        {/* Outer Orbit with Dashed Scanning Ring */}
        <span
          style={{
            position: 'absolute',
            inset: -8,
            borderRadius: '50%',
            border: '1.5px dashed rgba(0, 229, 255, 0.3)',
            animation: 'btLoaderSpin 8s linear infinite reverse',
          }}
        />

        {/* Primary High-Speed Orbit Ring */}
        <span
          style={{
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            border: '2.5px solid transparent',
            borderTopColor: '#00E5FF',
            borderRightColor: '#0066FF',
            filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))',
            animation: 'btLoaderSpin 1.1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite',
          }}
        />

        {/* Inner Counter-Rotating Ring */}
        <span
          style={{
            position: 'absolute',
            inset: 8,
            borderRadius: '50%',
            border: '1.5px solid transparent',
            borderBottomColor: '#00D2FF',
            borderLeftColor: 'rgba(0, 102, 255, 0.5)',
            animation: 'btLoaderSpin 1.6s ease-in-out infinite reverse',
          }}
        />

        {/* Best Technology B Emblem with Circuit Nodes */}
        <img
          src={iconSrc}
          alt="Best Technology Security & IT"
          style={{
            width: iconDim,
            height: iconDim,
            objectFit: 'contain',
            position: 'relative',
            zIndex: 2,
            filter: isDark
              ? 'drop-shadow(0 0 14px rgba(0, 194, 255, 0.75)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.8))'
              : 'drop-shadow(0 2px 8px rgba(0, 102, 255, 0.25))',
            animation: 'btEmblemGlow 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Brand Title */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: fullscreen ? 16 : 14,
            fontWeight: 800,
            letterSpacing: '2.5px',
            color: isDark ? '#FFFFFF' : '#0B1B3D',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span>BEST</span>
          <span style={{ color: '#00E5FF' }}>TECHNOLOGIES</span>
        </span>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10.5,
            fontWeight: 600,
            letterSpacing: '1.8px',
            color: '#64748B',
            textTransform: 'uppercase',
          }}
        >
          Security & IT Solutions
        </span>
      </div>

      {/* Scanning Laser Progress Bar */}
      <div
        style={{
          width: fullscreen ? 160 : 120,
          height: 3,
          borderRadius: 6,
          background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, #0066FF 40%, #00E5FF 70%, transparent 100%)',
            animation: 'btLaserScan 1.4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Dynamic Status / Progress Text */}
      {(label || progress !== undefined) && (
        <div
          style={{
            marginTop: 12,
            fontSize: 12.5,
            fontWeight: 600,
            color: '#00E5FF',
            letterSpacing: '0.4px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#00E5FF',
              boxShadow: '0 0 8px #00E5FF',
              animation: 'btDotPulse 1.2s ease-in-out infinite',
            }}
          />
          <span>{label || 'Loading system...'}</span>
          {progress !== undefined && <span>{Math.round(progress)}%</span>}
        </div>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          minHeight: '100vh',
          background: '#020B1C',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
        }}
      >
        {loaderBody}
      </div>
    );
  }

  return loaderBody;
};

export default BrandLoader;
