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
        <img
          src="/images/logo-white.png"
          alt="Best Technology Logo"
          style={{
            height: `${px}px`,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
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
