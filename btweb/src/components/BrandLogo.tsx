import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light',
}) => {
  const heights = {
    sm: 34,
    md: 46,
    lg: 56,
  };

  const px = heights[size];

  return (
    <div
      className={`brandLogoWrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      {theme === 'dark' ? (
        <div
          style={{
            background: '#FFFFFF',
            padding: '6px 14px',
            borderRadius: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}
        >
          <img
            src="/logo.png"
            alt="Best Technology Logo"
            style={{
              height: `${px}px`,
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
      ) : (
        <img
          src="/logo.png"
          alt="Best Technology Logo"
          style={{
            height: `${px}px`,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      )}
    </div>
  );
};

export default BrandLogo;
