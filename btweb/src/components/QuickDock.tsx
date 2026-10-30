import React, { useState, useEffect } from 'react';
import styles from '../pages/homeDesign.less';
import { COMPANY } from '@/constants/company';

interface QuickDockProps {
  onOpenSearch: () => void;
  onOpenEstimator: () => void;
}

export const GlobalTicker: React.FC = () => {
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerItems = [
    { label: 'SECURITY PARTNER', text: '5+ Years of Dedicated Excellence in Integrated Electronic Security & IT Solutions' },
    { label: 'RAPID SLA', text: 'Guaranteed 4-Hour Emergency Breakdown Response for Enterprise AMC Partners' },
    { label: 'GOVT CERTIFIED', text: 'AIS 140 Certified GPS Telematics & School Bus Child Safety Ecosystem' },
    { label: 'VISION AI', text: 'Next-Gen 4K Starlight Cameras, High-Speed ANPR & 3D Biometric Access Control' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerItems.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  const current = tickerItems[tickerIndex];

  return (
    <aside className={styles.globalTickerBar} aria-label="Best Technology Security Status Ticker">
      <div className={styles.tickerContainer}>
        <div className={styles.tickerBadgeWrap}>
          <span className={styles.tickerLiveDot} />
          <span className={styles.tickerBadge}>{current.label}</span>
        </div>
        <div className={styles.tickerContent}>
          <span className={styles.tickerText}>{current.text}</span>
        </div>
        <div className={styles.tickerActionHint}>
          <span>Press <kbd>Ctrl+K</kbd> to search solutions</span>
        </div>
      </div>
    </aside>
  );
};

export const QuickDock: React.FC<QuickDockProps> = ({
  onOpenSearch,
  onOpenEstimator,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.quickDockWrapper} role="toolbar" aria-label="Quick Actions">
      <div className={styles.dockBar}>
        {/* Search */}
        <button
          type="button"
          className={styles.dockItem}
          onClick={onOpenSearch}
          title="Search solutions (Ctrl+K)"
        >
          <span className={styles.dockIcon}>🔍</span>
          <span className={styles.dockLabel}>Search</span>
        </button>

        {/* Security Estimator */}
        <button
          type="button"
          className={`${styles.dockItem} ${styles.dockHighlight}`}
          onClick={onOpenEstimator}
          title="Open Security Solution Estimator"
        >
          <span className={styles.dockIcon}>⚡</span>
          <span className={styles.dockLabel}>Estimator</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={COMPANY.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.dockItem}
          title="Chat on WhatsApp"
        >
          <span className={styles.dockIcon}>💬</span>
          <span className={styles.dockLabel}>WhatsApp</span>
        </a>

        {/* Call Specialist */}
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className={styles.dockItem}
          title={`Call ${COMPANY.phone}`}
        >
          <span className={styles.dockIcon}>📞</span>
          <span className={styles.dockLabel}>Call Us</span>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            type="button"
            className={styles.dockItem}
            onClick={scrollToTop}
            title="Scroll to top"
          >
            <span className={styles.dockIcon}>↑</span>
            <span className={styles.dockLabel}>Top</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuickDock;
