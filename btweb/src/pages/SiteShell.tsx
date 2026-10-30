import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '@umijs/max';
import styles from './homeDesign.less';
import BrandLogo from '@/components/BrandLogo';
import { COMPANY, SERVICES } from '@/constants/company';
import { PhoneIcon, MailIcon, InstagramIcon, WhatsAppIcon, ArrowRightIcon, MapPinIcon } from '@/components/Icons';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'AMC', href: '/amc' },
  { label: 'Cost Calculator', href: '/cost-calculator' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
];

export const SiteShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile drawer and scroll to top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className={styles.site}>
      {/* Sticky Main Header */}
      <header className={styles.siteHeader}>
        <Link
          to="/"
          className={styles.brandLink}
          aria-label="Best Technologies Home"
          onClick={() => setMenuOpen(false)}
        >
          <BrandLogo size="md" />
        </Link>

        {/* Mobile Header Actions (Call button + Hamburger) */}
        <div className={styles.mobileHeaderActions}>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className={styles.mobileCallBtn}
            aria-label={`Call ${COMPANY.phone}`}
            title="Call Specialist"
          >
            <PhoneIcon size={16} />
          </a>

          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleActive : ''}`}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Navigation Links (Desktop & Mobile Drawer) */}
        <nav
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`}
          aria-label="Primary Navigation"
        >
          <div className={styles.navLinksList}>
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? currentPath === '/'
                  : item.href.startsWith('/#')
                  ? false
                  : currentPath.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className={styles.mobileNavArrow}>→</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom Actions & Contacts */}
          <div className={styles.mobileDrawerBottom}>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileDrawerQuoteBtn}
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon size={18} />
              <span>Get a Free Quote</span>
            </a>

            <div className={styles.mobileDrawerContacts}>
              <a href={`tel:${COMPANY.phoneRaw}`} className={styles.mobileContactItem}>
                <PhoneIcon size={15} />
                <span>{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className={styles.mobileContactItem}>
                <MailIcon size={15} />
                <span>{COMPANY.email}</span>
              </a>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileContactItem}
              >
                <InstagramIcon size={15} />
                <span>{COMPANY.instagram}</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Backdrop */}
        {menuOpen && (
          <div
            className={styles.mobileMenuBackdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Right Header Group: Search + Get a Quote (Desktop) */}
        <div className={styles.headerRightGroup}>
          <button
            type="button"
            className={styles.searchIconBtn}
            aria-label="Search solutions"
            onClick={() => {
              const el = document.getElementById('solutions');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.getQuoteBtn}
          >
            <span>Get a Quote</span>
            <ArrowRightIcon size={14} />
          </a>
        </div>
      </header>

      {/* Main Page Body */}
      <main>{children}</main>

      {/* Corporate Unified Navy Footer for ALL Pages */}
      <footer className={styles.footer}>
          <div className={styles.footerInner}>
            {/* Brand Info */}
            <div className={styles.footerBrandCol}>
              <div onClick={scrollToTop} style={{ cursor: 'pointer', display: 'inline-block' }}>
                <BrandLogo size="md" theme="dark" />
              </div>
              <div className={styles.footerTagline}>{COMPANY.tagline}</div>
              <p className={styles.footerDesc}>
                {COMPANY.slogan} Dedicated door-to-cloud security solutions for commercial, industrial, and government sectors.
              </p>
              <div className={styles.footerContacts}>
                <a href={`tel:${COMPANY.phoneRaw}`}>
                  <span className={styles.footerIconWrap}>
                    <PhoneIcon size={16} />
                  </span>
                  <strong>{COMPANY.phone}</strong>
                </a>
                <a href={`mailto:${COMPANY.email}`}>
                  <span className={styles.footerIconWrap}>
                    <MailIcon size={16} />
                  </span>
                  <span>{COMPANY.email}</span>
                </a>
                <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <span className={styles.footerIconWrap}>
                    <InstagramIcon size={16} />
                  </span>
                  <span>{COMPANY.instagram}</span>
                </a>
                <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer">
                  <span className={styles.footerIconWrap}>
                    <MapPinIcon size={16} />
                  </span>
                  <span>{COMPANY.address}</span>
                </a>
              </div>
            </div>

            {/* Core Services (1-7) */}
            <div>
              <h4 className={styles.footerColTitle}>Surveillance & Access</h4>
              <ul className={styles.footerLinkList}>
                {SERVICES.slice(0, 7).map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.slug}`} onClick={scrollToTop}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety & Infrastructure (8-14) */}
            <div>
              <h4 className={styles.footerColTitle}>Safety & Telematics</h4>
              <ul className={styles.footerLinkList}>
                {SERVICES.slice(7, 14).map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.slug}`} onClick={scrollToTop}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={styles.footerColTitle}>Quick Links</h4>
              <ul className={styles.footerLinkList}>
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/about-us" onClick={scrollToTop}>About Us</Link></li>
                <li><Link to="/services" onClick={scrollToTop}>All 14 Services</Link></li>
                <li><Link to="/blogs" onClick={scrollToTop}>Security Blogs & News</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>Contact Specialist</Link></li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#0066FF',
                    color: '#FFFFFF',
                    padding: '9px 18px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomLeft}>
              <div>
                © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </div>
              <div className={styles.footerLegalLinks}>
                <Link to="/about-us" onClick={scrollToTop}>Privacy & Compliance</Link> | <Link to="/contact" onClick={scrollToTop}>Site Map</Link>
              </div>
            </div>

            {/* Dedicated Back to Top Button */}
            <button
              type="button"
              className={styles.backToTopBtn}
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <span className={styles.backToTopArrow}>↑</span>
            </button>
          </div>
        </footer>

      {/* Floating Sticky WhatsApp Quick Enquiry Button */}
      <a
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsAppBtn}
        aria-label="Quick WhatsApp Enquiry"
        title="Chat with our security experts on WhatsApp"
      >
        <span className={styles.whatsappRipple} />
        <WhatsAppIcon size={28} color="#FFFFFF" />
        <span className={styles.floatingWhatsAppTooltip}>Quick WhatsApp Enquiry</span>
      </a>
    </div>
  );
};

export default SiteShell;
