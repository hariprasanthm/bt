import React, { useState, useEffect } from 'react';
import { Link } from '@umijs/max';
import styles from './CctvLiveHero.module.less';
import {
  ShieldCheckIcon,
  EyeIcon,
  SettingsIcon,
  BarChartIcon,
  ArrowRightIcon,
  MonitorIcon,
  WrenchIcon,
  HeadsetIcon,
  CameraIcon,
  PlayIcon,
  CalendarIcon,
} from '@/components/Icons';

export interface CctvLiveHeroProps {
  onExploreClick?: () => void;
  onQuoteClick?: () => void;
}

export const CctvLiveHero: React.FC<CctvLiveHeroProps> = ({
  onExploreClick,
  onQuoteClick,
}) => {
  const [activeTab, setActiveTab] = useState<'live' | 'playback' | 'events' | 'settings'>('live');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const dateStr = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).toUpperCase();

      setCurrentTime(timeStr);
      setCurrentDate(dateStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroWrapper} aria-label="CCTV Solutions Hero">
      {/* Subtle Light-Blue Ambient Radial Glow */}
      <div className={styles.ambientGlowTopRight} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* =========================================================================
              LEFT COLUMN – 45%: Modern Typography, Badges & Action CTAs
              ========================================================================= */}
          <div className={styles.heroLeft}>
            {/* Eyebrow Badge */}
            <div className={styles.eyebrowBadge}>
              <div className={styles.eyebrowIconWrap}>
                <ShieldCheckIcon size={15} color="#FFFFFF" />
              </div>
              <span className={styles.eyebrowText}>YOUR TRUSTED SECURITY PARTNER</span>
              <span className={styles.eyebrowLine} />
            </div>

            {/* Main Heading with Blue Gradient Highlight */}
            <h1 className={styles.mainHeadline}>
              Advanced CCTV <br />
              Solutions for a <br />
              <span className={styles.blueHeadlineText}>Safer Tomorrow</span>
            </h1>

            {/* Description */}
            <p className={styles.supportingText}>
              Reliable CCTV systems, smart monitoring and expert installation services for your safety and peace of mind.
            </p>

            {/* 4 Feature Micro-Badges Row */}
            <div className={styles.microBadgesRow}>
              <div className={styles.microBadgeItem}>
                <div className={styles.microIconCircle}>
                  <ShieldCheckIcon size={17} color="#0866FF" />
                </div>
                <span className={styles.microBadgeLabel}>
                  Reliable<br />Systems
                </span>
              </div>

              <div className={styles.microDivider} />

              <div className={styles.microBadgeItem}>
                <div className={styles.microIconCircle}>
                  <EyeIcon size={17} color="#0866FF" />
                </div>
                <span className={styles.microBadgeLabel}>
                  Real-time<br />Monitoring
                </span>
              </div>

              <div className={styles.microDivider} />

              <div className={styles.microBadgeItem}>
                <div className={styles.microIconCircle}>
                  <SettingsIcon size={17} color="#0866FF" />
                </div>
                <span className={styles.microBadgeLabel}>
                  Expert<br />Installation
                </span>
              </div>

              <div className={styles.microDivider} />

              <div className={styles.microBadgeItem}>
                <div className={styles.microIconCircle}>
                  <BarChartIcon size={17} color="#0866FF" />
                </div>
                <span className={styles.microBadgeLabel}>
                  Scalable<br />Solutions
                </span>
              </div>
            </div>

            {/* Two Action Buttons */}
            <div className={styles.buttonRow}>
              <Link
                to="/services"
                className={styles.primaryBtn}
                onClick={onExploreClick}
                aria-label="Explore Our Solutions"
              >
                <span>Explore Our Solutions</span>
                <ArrowRightIcon size={15} color="#FFFFFF" />
              </Link>

              <Link
                to="/contact"
                className={styles.secondaryBtn}
                onClick={onQuoteClick}
                aria-label="Get a Free Quote"
              >
                <span>Get a Free Quote</span>
              </Link>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN – 55%: 100% Coded CCTV Monitoring Dashboard Console
              (Camera over panel removed; Height enhanced; Live Timings & Date added)
              ========================================================================= */}
          <div className={styles.heroRight}>
            <div className={styles.stageWrap}>
              {/* Soft Ambient Sky-Blue Circular Glow */}
              <div className={styles.stageAura} aria-hidden="true" />

              {/* 100% Coded Monitoring Console Component */}
              <div className={styles.dashboardConsole}>
                {/* Console Top Bar: Live Recording Timings & Date */}
                <div className={styles.consoleTopStatusBar}>
                  <div className={styles.recStatusGroup}>
                    <span className={styles.redRecDot} />
                    <span className={styles.recLabel}>REC</span>
                    <span className={styles.liveBadge}>LIVE</span>
                    <span className={styles.channelBadge}>4-CH NVR</span>
                  </div>
                  <div className={styles.timeDateGroup}>
                    <span className={styles.consoleDate}>{currentDate || '29 OCT 2026'}</span>
                    <span className={styles.consoleDivider}>•</span>
                    <span className={styles.consoleClock}>{currentTime || '19:30:42'}</span>
                  </div>
                </div>

                <div className={styles.consoleBodyGrid}>
                  {/* Left Sidebar Menu */}
                  <div className={styles.consoleSidebar}>
                    <button
                      type="button"
                      className={`${styles.sidebarTab} ${activeTab === 'live' ? styles.tabActive : ''}`}
                      onClick={() => setActiveTab('live')}
                    >
                      <div className={styles.tabIconWrap}>
                        <CameraIcon size={16} />
                      </div>
                      <span>Live View</span>
                    </button>

                    <button
                      type="button"
                      className={`${styles.sidebarTab} ${activeTab === 'playback' ? styles.tabActive : ''}`}
                      onClick={() => setActiveTab('playback')}
                    >
                      <div className={styles.tabIconWrap}>
                        <PlayIcon size={16} />
                      </div>
                      <span>Playback</span>
                    </button>

                    <button
                      type="button"
                      className={`${styles.sidebarTab} ${activeTab === 'events' ? styles.tabActive : ''}`}
                      onClick={() => setActiveTab('events')}
                    >
                      <div className={styles.tabIconWrap}>
                        <CalendarIcon size={16} />
                      </div>
                      <span>Events</span>
                    </button>

                    <button
                      type="button"
                      className={`${styles.sidebarTab} ${activeTab === 'settings' ? styles.tabActive : ''}`}
                      onClick={() => setActiveTab('settings')}
                    >
                      <div className={styles.tabIconWrap}>
                        <SettingsIcon size={16} />
                      </div>
                      <span>Settings</span>
                    </button>
                  </div>

                  {/* Right 2x2 Feeds Grid (Enlarged Height) */}
                  <div className={styles.consoleFeedsGrid}>
                    {/* Feed 1: Front Gate */}
                    <div className={styles.feedCard}>
                      <img
                        src="/images/indian-cctv-front-gate.webp"
                        alt="Front Gate CCTV Camera Feed"
                        className={styles.feedImg}
                        loading="lazy"
                      />
                      <div className={styles.feedTag}>
                        <span className={styles.greenPulseDot} />
                        <span className={styles.feedLabel}>Front Gate</span>
                        <span className={styles.feedClockOverlay}>{currentTime || '19:30:42'}</span>
                      </div>
                    </div>

                    {/* Feed 2: Office Area */}
                    <div className={styles.feedCard}>
                      <img
                        src="/images/office-business-cctv.webp"
                        alt="Office Area CCTV Camera Feed"
                        className={styles.feedImg}
                        loading="lazy"
                      />
                      <div className={styles.feedTag}>
                        <span className={styles.greenPulseDot} />
                        <span className={styles.feedLabel}>Office Area</span>
                        <span className={styles.feedClockOverlay}>{currentTime || '19:30:42'}</span>
                      </div>
                    </div>

                    {/* Feed 3: Parking */}
                    <div className={styles.feedCard}>
                      <img
                        src="/images/parking-lot-cctv.webp"
                        alt="Parking CCTV Camera Feed"
                        className={styles.feedImg}
                        loading="lazy"
                      />
                      <div className={styles.feedTag}>
                        <span className={styles.greenPulseDot} />
                        <span className={styles.feedLabel}>Parking</span>
                        <span className={styles.feedClockOverlay}>{currentTime || '19:30:42'}</span>
                      </div>
                    </div>

                    {/* Feed 4: Warehouse */}
                    <div className={styles.feedCard}>
                      <img
                        src="/images/warehouse-enterprise-cctv.webp"
                        alt="Warehouse CCTV Camera Feed"
                        className={styles.feedImg}
                        loading="lazy"
                      />
                      <div className={styles.feedTag}>
                        <span className={styles.greenPulseDot} />
                        <span className={styles.feedLabel}>Warehouse</span>
                        <span className={styles.feedClockOverlay}>{currentTime || '19:30:42'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM FEATURES: Horizontal Feature Strip with 4 Pillars
          ========================================================================= */}
      <div className={styles.bottomFeatureBar}>
        <div className={styles.featureBarCard}>
          {/* Pillar 1: 24/7 Surveillance */}
          <div className={styles.featureItem}>
            <div className={styles.badge247Circle}>
              <span>24/7</span>
            </div>
            <div className={styles.featureTextCol}>
              <span className={styles.featureTitle}>24/7 Surveillance</span>
              <span className={styles.featureSub}>Continuous protection</span>
            </div>
          </div>

          <div className={styles.featureBarDivider} />

          {/* Pillar 2: Smart Monitoring */}
          <div className={styles.featureItem}>
            <div className={styles.featureIconCircle}>
              <MonitorIcon size={20} color="#0866FF" />
            </div>
            <div className={styles.featureTextCol}>
              <span className={styles.featureTitle}>Smart Monitoring</span>
              <span className={styles.featureSub}>Mobile & PC live view</span>
            </div>
          </div>

          <div className={styles.featureBarDivider} />

          {/* Pillar 3: Professional Installation */}
          <div className={styles.featureItem}>
            <div className={styles.featureIconCircle}>
              <WrenchIcon size={20} color="#0866FF" />
            </div>
            <div className={styles.featureTextCol}>
              <span className={styles.featureTitle}>Professional Installation</span>
              <span className={styles.featureSub}>Certified engineers</span>
            </div>
          </div>

          <div className={styles.featureBarDivider} />

          {/* Pillar 4: Dedicated Support */}
          <div className={styles.featureItem}>
            <div className={styles.featureIconCircle}>
              <HeadsetIcon size={20} color="#0866FF" />
            </div>
            <div className={styles.featureTextCol}>
              <span className={styles.featureTitle}>Dedicated Support</span>
              <span className={styles.featureSub}>Quick response & AMC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CctvLiveHero;
