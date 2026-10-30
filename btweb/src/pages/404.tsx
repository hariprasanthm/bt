import Seo from '@/components/Seo';
import { Link } from '@umijs/max';
import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#050b1e',
    backgroundImage:
      'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(91, 140, 255, 0.14), transparent)',
    padding: '24px',
    fontFamily: "'DM Sans', sans-serif",
  },
  panel: {
    maxWidth: '520px',
    width: '100%',
    textAlign: 'center',
    padding: '56px 40px',
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(12px)',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 14px',
    borderRadius: '999px',
    border: '1px solid rgba(91, 140, 255, 0.35)',
    background: 'rgba(91, 140, 255, 0.08)',
    color: '#77a4ff',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#77a4ff',
  },
  code: {
    margin: '24px 0 8px',
    fontSize: 'clamp(72px, 18vw, 128px)',
    fontWeight: 700,
    lineHeight: 1,
    background: 'linear-gradient(135deg, #FFFFFF 20%, #9CA3AF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heading: {
    margin: '0 0 12px',
    fontSize: '22px',
    fontWeight: 600,
    color: '#FFFFFF',
  },
  text: {
    margin: '0 0 32px',
    fontSize: '15px',
    lineHeight: 1.7,
    color: '#9CA3AF',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryLink: {
    display: 'inline-block',
    padding: '12px 28px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #77a4ff, #3e70d4)',
    color: '#fff',
    fontWeight: 600,
    fontSize: '14px',
    textDecoration: 'none',
  },
};

const NoFoundPage: React.FC = () => {
  return (
    <main style={styles.page}>
      <Seo
        title="Page Not Found"
        description="Sorry, the page you are looking for does not exist or has been moved."
        path="/404"
        noindex
      />
      <div style={styles.panel}>
        <span style={styles.badge}>
          <span style={styles.dot} aria-hidden="true" />
          Error 404
        </span>
        <p style={styles.code} aria-hidden="true">
          404
        </p>
        <h1 style={styles.heading}>Page not found</h1>
        <p style={styles.text}>
          The page you are looking for doesn&apos;t exist or has been moved. Head back to the Best Technology
          homepage to explore our security solutions.
        </p>
        <nav style={styles.actions} aria-label="Page not found options">
          <Link to="/" style={styles.primaryLink}>
            Back to Home
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default NoFoundPage;
