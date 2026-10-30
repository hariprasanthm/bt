import React from 'react';
import Seo from '@/components/Seo';
import { Link } from '@umijs/max';
import styles from './homeDesign.less';
import SiteShell from './SiteShell';
import { COMPANY } from '@/constants/company';
import {
  CameraIcon,
  LockIcon,
  FlameIcon,
  ServerStackIcon,
  BarrierIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SettingsIcon,
  TrendingUpIcon,
  HeadsetIcon,
  AwardIcon,
  NetworkIcon,
  BuildingIcon,
  LaptopIcon,
  ProjectorIcon,
  PrinterIcon,
  CpuIcon,
  LayersIcon,
  WrenchIcon,
  UserCheckIcon,
  ClockIcon,
  FolderCheckIcon,
  UsersIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  PlayIcon,
} from '@/components/Icons';
import TrustedBrandsBar from '@/components/PartnerBrands';
import CctvLiveHero from '@/components/CctvLiveHero';

export const HomeDesign: React.FC = () => {
  return (
    <SiteShell>
      <Seo
        title="Best Technologies | Smart Security for a Safer Tomorrow"
        description="Best Technologies delivers integrated electronic security, CCTV surveillance, biometric access control, fire detection, IT hardware, entry automation, and GPS telematics."
        path="/"
        keywords="Best Technologies, electronic security, CCTV camera, access control, fire alarm, IT hardware, entry automation, boom barrier, GPS fleet, AMC maintenance"
      />

      {/* =========================================================================
          1. HERO SECTION: CCTV Website Hero Banner with Real-time Live View
          ========================================================================= */}
      <CctvLiveHero />

      {/* Brand Logos Bar */}
      <TrustedBrandsBar theme="light" />

      {/* =========================================================================
          2. OUR SOLUTIONS: Comprehensive Security Solutions (Matching Mockup 1)
          ========================================================================= */}
      <section className={styles.solutionsStripSection} id="solutions">
        <div className={styles.solutionsStripHeader}>
          <div className={styles.solutionsKickerWrap}>
            <span className={styles.kickerLine} />
            <span className={styles.solutionsKicker}>OUR SOLUTIONS</span>
          </div>
          <h2 className={styles.solutionsHeading}>
            Comprehensive <span className={styles.blueHeadingText}>Security Solutions</span>
          </h2>
          <p className={styles.solutionsSubheading}>
            From surveillance to smart automation, we deliver integrated solutions to make your spaces safer, smarter and more efficient.
          </p>
        </div>

        <div className={styles.solutionsCardsGrid}>
          {/* Card 1: Video Surveillance */}
          <Link to="/services/ip-ahd-surveillance" className={`${styles.solutionItemCard} ${styles.accentBlue}`}>
            <div className={styles.topColorStrip} />
            <div className={styles.cardImageContainer}>
              <img src="/images/card-video-surveillance.webp" alt="Video Surveillance" loading="lazy" />
              <div className={`${styles.iconBadgeOverlap} ${styles.badgeBlue}`}>
                <CameraIcon size={18} color="#0066FF" />
              </div>
            </div>
            <div className={styles.cardBodyContent}>
              <h3 className={styles.cardMainTitle}>Video Surveillance</h3>
              <p className={styles.cardBriefDesc}>High-definition monitoring for enhanced security.</p>
              <div className={styles.cardBottomRow}>
                <span className={`${styles.actionCircleBtn} ${styles.btnBlue}`}>
                  <ArrowRightIcon size={13} color="#0066FF" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: Access Control */}
          <Link to="/services/access-control" className={`${styles.solutionItemCard} ${styles.accentGreen}`}>
            <div className={styles.topColorStrip} />
            <div className={styles.cardImageContainer}>
              <img src="/images/biometric-terminal.webp" alt="Access Control" loading="lazy" />
              <div className={`${styles.iconBadgeOverlap} ${styles.badgeGreen}`}>
                <LockIcon size={18} color="#10B981" />
              </div>
            </div>
            <div className={styles.cardBodyContent}>
              <h3 className={styles.cardMainTitle}>Access Control</h3>
              <p className={styles.cardBriefDesc}>Secure and flexible access management.</p>
              <div className={styles.cardBottomRow}>
                <span className={`${styles.actionCircleBtn} ${styles.btnGreen}`}>
                  <ArrowRightIcon size={13} color="#10B981" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3: Fire & Intrusion Detection */}
          <Link to="/services/fire-intrusion-detection" className={`${styles.solutionItemCard} ${styles.accentRed}`}>
            <div className={styles.topColorStrip} />
            <div className={styles.cardImageContainer}>
              <img src="/images/smoke-detector.webp" alt="Fire & Intrusion Detection" loading="lazy" />
              <div className={`${styles.iconBadgeOverlap} ${styles.badgeRed}`}>
                <FlameIcon size={18} color="#EF4444" />
              </div>
            </div>
            <div className={styles.cardBodyContent}>
              <h3 className={styles.cardMainTitle}>Fire & Intrusion Detection</h3>
              <p className={styles.cardBriefDesc}>Early detection for higher safety.</p>
              <div className={styles.cardBottomRow}>
                <span className={`${styles.actionCircleBtn} ${styles.btnRed}`}>
                  <ArrowRightIcon size={13} color="#EF4444" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 4: IT Hardware & Software */}
          <Link to="/services/it-hardware-software" className={`${styles.solutionItemCard} ${styles.accentPurple}`}>
            <div className={styles.topColorStrip} />
            <div className={styles.cardImageContainer}>
              <img src="/images/it-hardware-suite.webp" alt="IT Hardware & Software" loading="lazy" />
              <div className={`${styles.iconBadgeOverlap} ${styles.badgePurple}`}>
                <ServerStackIcon size={18} color="#8B5CF6" />
              </div>
            </div>
            <div className={styles.cardBodyContent}>
              <h3 className={styles.cardMainTitle}>IT Hardware & Software</h3>
              <p className={styles.cardBriefDesc}>Reliable infrastructure and intelligent solutions.</p>
              <div className={styles.cardBottomRow}>
                <span className={`${styles.actionCircleBtn} ${styles.btnPurple}`}>
                  <ArrowRightIcon size={13} color="#8B5CF6" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 5: Entry Automation */}
          <Link to="/services/entry-automation" className={`${styles.solutionItemCard} ${styles.accentAmber}`}>
            <div className={styles.topColorStrip} />
            <div className={styles.cardImageContainer}>
              <img src="/images/boom-barrier.webp" alt="Entry Automation" loading="lazy" />
              <div className={`${styles.iconBadgeOverlap} ${styles.badgeAmber}`}>
                <BarrierIcon size={18} color="#F59E0B" />
              </div>
            </div>
            <div className={styles.cardBodyContent}>
              <h3 className={styles.cardMainTitle}>Entry Automation</h3>
              <p className={styles.cardBriefDesc}>Smart and efficient vehicle & visitor access.</p>
              <div className={styles.cardBottomRow}>
                <span className={`${styles.actionCircleBtn} ${styles.btnAmber}`}>
                  <ArrowRightIcon size={13} color="#F59E0B" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 6: GPS & Fleet Management */}
          <Link to="/services/gps-fleet-management" className={`${styles.solutionItemCard} ${styles.accentSky}`}>
            <div className={styles.topColorStrip} />
            <div className={styles.cardImageContainer}>
              <img src="/images/gps-fleet-trucks.webp" alt="GPS & Fleet Management" loading="lazy" />
              <div className={`${styles.iconBadgeOverlap} ${styles.badgeSky}`}>
                <MapPinIcon size={18} color="#0284C7" />
              </div>
            </div>
            <div className={styles.cardBodyContent}>
              <h3 className={styles.cardMainTitle}>GPS & Fleet Management</h3>
              <p className={styles.cardBriefDesc}>Real-time tracking for greater control.</p>
              <div className={styles.cardBottomRow}>
                <span className={`${styles.actionCircleBtn} ${styles.btnSky}`}>
                  <ArrowRightIcon size={13} color="#0284C7" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          3. ABOUT US SECTION: Integrated Security Solutions for Modern Needs
          ========================================================================= */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutGrid}>
          {/* Left Visual Composite */}
          <div className={styles.aboutVisualCol}>
            <div className={styles.aboutImageWrapper}>
              <img
                src="/images/about-composite-mockup.webp"
                alt="Integrated Security Solutions - Surveillance Turnstiles and Command Center"
                className={styles.aboutCompositeImg}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className={styles.aboutContentCol}>
            <div className={styles.aboutKickerWrap}>
              <span className={styles.kickerLine} />
              <span className={styles.aboutKicker}>ABOUT US</span>
            </div>

            <h2 className={styles.aboutTitle}>
              Integrated Security Solutions <br />
              for <span className={styles.aboutBlueText}>Modern Needs</span>
            </h2>

            <p className={styles.aboutIntroText}>
              We deliver end-to-end security solutions that combine advanced hardware, intelligent software and seamless integration to create safer, smarter and more efficient environments for businesses and government institutions.
            </p>

            {/* 4 Feature Badges with 2x2 Clean Cards */}
            <div className={styles.aboutBadgesGrid}>
              <div className={styles.aboutBadgeCard}>
                <div className={`${styles.badgeIconCircle} ${styles.iconBlue}`}>
                  <ShieldCheckIcon size={22} color="#0066FF" />
                </div>
                <div className={styles.badgeTextWrap}>
                  <div className={styles.badgeHighlight}>5+</div>
                  <div className={styles.badgeSub}>Years of Experience</div>
                </div>
              </div>

              <div className={styles.aboutBadgeCard}>
                <div className={`${styles.badgeIconCircle} ${styles.iconGreen}`}>
                  <AwardIcon size={22} color="#10B981" />
                </div>
                <div className={styles.badgeTextWrap}>
                  <div className={styles.badgeTitle}>Quality</div>
                  <div className={styles.badgeSub}>Solutions</div>
                </div>
              </div>

              <div className={styles.aboutBadgeCard}>
                <div className={`${styles.badgeIconCircle} ${styles.iconAmber}`}>
                  <NetworkIcon size={22} color="#F59E0B" />
                </div>
                <div className={styles.badgeTextWrap}>
                  <div className={styles.badgeTitle}>End-to-End</div>
                  <div className={styles.badgeSub}>Integration</div>
                </div>
              </div>

              <div className={styles.aboutBadgeCard}>
                <div className={`${styles.badgeIconCircle} ${styles.iconPurple}`}>
                  <BuildingIcon size={22} color="#8B5CF6" />
                </div>
                <div className={styles.badgeTextWrap}>
                  <div className={styles.badgeTitle}>Trusted by</div>
                  <div className={styles.badgeSub}>Business & Government</div>
                </div>
              </div>
            </div>

            <Link to="/about-us" className={styles.aboutCtaBtn}>
              <span>Know More</span>
              <ArrowRightIcon size={16} color="#FFFFFF" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FEATURED SOLUTIONS ("Complete Security Ecosystem")
          ========================================================================= */}
      <section className={styles.featuredSection} id="ecosystem">
        <div className={styles.featuredHeaderRow}>
          <div>
            <div className={styles.featuredEyebrow}>FEATURED SOLUTIONS</div>
            <h2 className={styles.featuredTitle}>Complete Security Ecosystem</h2>
          </div>

          <div className={styles.arrowControls}>
            <button
              type="button"
              className={styles.arrowBtn}
              aria-label="Previous"
              onClick={() => {
                const el = document.getElementById('ecosystemGrid');
                if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
              }}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              aria-label="Next"
              onClick={() => {
                const el = document.getElementById('ecosystemGrid');
                if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* 6 Large Enhanced Cards */}
        <div className={styles.featuredEcosystemGrid} id="ecosystemGrid">
          {/* Card 1 */}
          <Link to="/services/ip-ahd-surveillance" className={styles.ecosystemCard}>
            <img src="/images/cctv-bullet.png" alt="IP/AHD Surveillance Solutions" className={styles.cardBgImg} loading="lazy" />
            <div className={styles.cardGradientOverlay}>
              <h3 className={styles.ecosystemTitle}>IP/AHD Surveillance Solutions</h3>
              <div className={styles.circleArrowBtn}>
                <ArrowRightIcon size={16} />
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/services/fire-intrusion-detection" className={styles.ecosystemCard}>
            <img src="/images/smoke-detector.webp" alt="Fire & Intrusion Detection" className={styles.cardBgImg} loading="lazy" />
            <div className={styles.cardGradientOverlay}>
              <h3 className={styles.ecosystemTitle}>Fire & Intrusion Detection</h3>
              <div className={styles.circleArrowBtn}>
                <ArrowRightIcon size={16} />
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/services/access-control" className={styles.ecosystemCard}>
            <img src="/images/biometric-terminal.webp" alt="Access Control Solutions" className={styles.cardBgImg} loading="lazy" />
            <div className={styles.cardGradientOverlay}>
              <h3 className={styles.ecosystemTitle}>Access Control Solutions</h3>
              <div className={styles.circleArrowBtn}>
                <ArrowRightIcon size={16} />
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to="/services/control-room-solutions" className={styles.ecosystemCard}>
            <img src="/images/control-room-banner.webp" alt="Control Room Solutions" className={styles.cardBgImg} loading="lazy" />
            <div className={styles.cardGradientOverlay}>
              <h3 className={styles.ecosystemTitle}>Control Room Solutions</h3>
              <div className={styles.circleArrowBtn}>
                <ArrowRightIcon size={16} />
              </div>
            </div>
          </Link>

          {/* Card 5 */}
          <Link to="/services/entry-automation" className={styles.ecosystemCard}>
            <img src="/images/boom-barrier.webp" alt="Entry Automation" className={styles.cardBgImg} loading="lazy" />
            <div className={styles.cardGradientOverlay}>
              <h3 className={styles.ecosystemTitle}>Entry Automation</h3>
              <div className={styles.circleArrowBtn}>
                <ArrowRightIcon size={16} />
              </div>
            </div>
          </Link>

          {/* Card 6 */}
          <Link to="/services/gps-fleet-management" className={styles.ecosystemCard}>
            <img src="/images/gps-fleet-trucks.webp" alt="GPS & Fleet Management" className={styles.cardBgImg} loading="lazy" />
            <div className={styles.cardGradientOverlay}>
              <h3 className={styles.ecosystemTitle}>GPS & Fleet Management</h3>
              <div className={styles.circleArrowBtn}>
                <ArrowRightIcon size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          5. IT SOLUTIONS BANNER ("Powering Your Business with Technology")
          ========================================================================= */}
      <section className={styles.itBannerSection}>
        <div className={styles.itBannerGrid}>
          {/* Left Column: Vector Icons & Headline */}
          <div className={styles.itLeft}>
            <div className={styles.itEyebrow}>IT SOLUTIONS</div>
            <h2 className={styles.itTitle}>Powering Your Business with Technology</h2>

            <div className={styles.itIconsGrid}>
              <div className={styles.itIconCard}>
                <div className={styles.itIconGlyphWrap}>
                  <LaptopIcon size={24} />
                </div>
                <div className={styles.itIconLabel}>Desktops &<br />Laptops</div>
              </div>

              <div className={styles.itIconCard}>
                <div className={styles.itIconGlyphWrap}>
                  <ProjectorIcon size={24} />
                </div>
                <div className={styles.itIconLabel}>Projectors</div>
              </div>

              <div className={styles.itIconCard}>
                <div className={styles.itIconGlyphWrap}>
                  <PrinterIcon size={24} />
                </div>
                <div className={styles.itIconLabel}>IP Printers</div>
              </div>

              <div className={styles.itIconCard}>
                <div className={styles.itIconGlyphWrap}>
                  <CpuIcon size={24} />
                </div>
                <div className={styles.itIconLabel}>Software<br />Solutions</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Studio IT Hardware Photography */}
          <div className={styles.itRightStage}>
            <img
              src="/images/it-hardware-suite.webp"
              alt="Commercial IT Hardware Suite"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. AMC SERVICES SECTION ("Keep Your Systems Running Smoothly")
          ========================================================================= */}
      <section className={styles.amcSection} id="amc">
        <div className={styles.amcGrid}>
          {/* Left Column */}
          <div className={styles.amcLeft}>
            <div className={styles.amcEyebrow}>AMC SERVICES</div>
            <h2 className={styles.amcTitle}>
              Keep Your Systems <br />
              <span className={styles.amcBlueText}>Running Smoothly</span>
            </h2>

            <div className={styles.amcBadgesRow}>
              <div className={styles.amcBadgeItem}>
                <div className={styles.amcIconWrap}>
                  <LayersIcon size={22} />
                </div>
                <div className={styles.amcLabel}>Comprehensive<br />AMC</div>
              </div>

              <div className={styles.amcBadgeItem}>
                <div className={styles.amcIconWrap}>
                  <WrenchIcon size={22} />
                </div>
                <div className={styles.amcLabel}>Non-Comprehensive<br />AMC</div>
              </div>

              <div className={styles.amcBadgeItem}>
                <div className={styles.amcIconWrap}>
                  <UserCheckIcon size={22} />
                </div>
                <div className={styles.amcLabel}>Expert<br />Support</div>
              </div>

              <div className={styles.amcBadgeItem}>
                <div className={styles.amcIconWrap}>
                  <ClockIcon size={22} />
                </div>
                <div className={styles.amcLabel}>Reduced<br />Downtimes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Field Technician Photography */}
          <div className={styles.amcRightStage}>
            <img
              src="/images/amc-technician.webp"
              alt="Certified Security Field Technician Installing Dome Camera"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. STATS STRIP (4 Glowing Circular Badges with Vector SVG Icons)
          ========================================================================= */}
      <section className={styles.statsStrip}>
        <div className={styles.statsStripGrid}>
          <div className={styles.statBadgeItem}>
            <div className={styles.statGlowCircle}>
              <ShieldCheckIcon size={26} />
            </div>
            <div>
              <div className={styles.statValue}>5+</div>
              <div className={styles.statText}>Years of Experience</div>
            </div>
          </div>

          <div className={styles.statBadgeItem}>
            <div className={styles.statGlowCircle}>
              <FolderCheckIcon size={26} />
            </div>
            <div>
              <div className={styles.statValue}>100+</div>
              <div className={styles.statText}>Projects Completed</div>
            </div>
          </div>

          <div className={styles.statBadgeItem}>
            <div className={styles.statGlowCircle}>
              <UsersIcon size={26} />
            </div>
            <div>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statText}>Clients</div>
            </div>
          </div>

          <div className={styles.statBadgeItem}>
            <div className={styles.statGlowCircle}>
              <ClockIcon size={26} />
            </div>
            <div>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statText}>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. BOTTOM CTA BANNER ("Empower Your Business with Modern Security")
          ========================================================================= */}
      <section className={styles.bottomCtaBanner} id="contact">
        <div className={styles.bottomCtaInner}>
          {/* Left Side */}
          <div className={styles.bottomCtaLeft}>
            <h2 className={styles.bottomCtaHeading}>
              Empower Your Business <br />
              with Modern Security
            </h2>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.getInTouchBtn}
            >
              <span>Get in Touch</span>
              <ArrowRightIcon size={16} color="#07132B" />
            </a>
          </div>

          {/* Right Floating Card with Phone, Email & Arrow */}
          <div className={styles.floatingContactPill}>
            <div className={styles.contactRows}>
              <a href={`tel:${COMPANY.phoneRaw}`}>
                <div className={styles.contactIconWrap}>
                  <PhoneIcon size={16} />
                </div>
                <span>{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`}>
                <div className={styles.contactIconWrap}>
                  <MailIcon size={16} />
                </div>
                <span>{COMPANY.email}</span>
              </a>
            </div>

            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className={styles.pillArrowCircle}
              aria-label="Call Best Technologies"
            >
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default HomeDesign;
