import React, { useState, useEffect, useRef } from 'react';
import { history } from '@umijs/max';
import styles from '../pages/homeDesign.less';
import { COMPANY, SOLUTIONS } from '@/constants/company';

interface CommandItem {
  id: string;
  category: 'Solutions' | 'Interactive Tools' | 'Support & Contact' | 'Actions';
  title: string;
  subtitle: string;
  badge?: string;
  action: () => void;
  keywords: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimator?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenEstimator,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Build searchable commands
  const items: CommandItem[] = [
    // Interactive tools
    {
      id: 'tool-estimator',
      category: 'Interactive Tools',
      title: 'Interactive Security Solution & Cost Estimator',
      subtitle: 'Build custom hardware bills, estimate timeline and generate instant WhatsApp proposals',
      badge: 'Interactive',
      action: () => {
        onClose();
        if (onOpenEstimator) {
          onOpenEstimator();
        } else {
          history.push('/#estimator');
        }
      },
      keywords: 'estimator calculator quote cost price estimate cameras boom barrier biometrics amc',
    },
    {
      id: 'tool-sim',
      category: 'Interactive Tools',
      title: 'Live 4K Surveillance & Vision AI HUD Simulator',
      subtitle: 'Interactive ANPR, thermal imaging, 3D face recognition & 360° radar perimeter',
      badge: 'Live Demo',
      action: () => {
        onClose();
        history.push('/#simulator');
      },
      keywords: 'simulator hud camera anpr thermal face biometrics radar live view demo',
    },
    {
      id: 'tool-school',
      category: 'Interactive Tools',
      title: 'School & Student Safety Suite',
      subtitle: 'School bus AIS 140 GPS, classroom CCTV & parent SMS alert notifications',
      badge: 'Campus Safety',
      action: () => {
        onClose();
        history.push('/#school-safety');
      },
      keywords: 'school bus student campus safety child gps ais 140 sms parent attendance',
    },
    {
      id: 'tool-fleet',
      category: 'Interactive Tools',
      title: 'AIS 140 GPS & Fleet Telematics Platform',
      subtitle: 'Real-time vehicle speed, ultrasonic fuel sensing, overspeeding alerts & inspection reports',
      badge: 'Govt Certified',
      action: () => {
        onClose();
        history.push('/#fleet-gps');
      },
      keywords: 'gps fleet vehicle tracking ais 140 fuel overspeeding route transport telematics',
    },
    {
      id: 'tool-amc',
      category: 'Interactive Tools',
      title: 'Comprehensive & Non-Comprehensive AMC Comparison',
      subtitle: 'Review SLA response, spare parts coverage, and preventive quarterly maintenance plans',
      badge: 'Maintenance',
      action: () => {
        onClose();
        history.push('/#amc-services');
      },
      keywords: 'amc maintenance contract repair breakdown service sla 4 hours preventive',
    },

    // Actions & Contact
    {
      id: 'act-call',
      category: 'Actions',
      title: 'Call Specialist Engineer Direct',
      subtitle: `${COMPANY.phone} (24/7 Breakdown Assistance)`,
      badge: 'Call Now',
      action: () => {
        window.location.href = `tel:${COMPANY.phoneRaw}`;
      },
      keywords: 'call phone speak specialist engineer emergency breakdown mobile contact',
    },
    {
      id: 'act-whatsapp',
      category: 'Actions',
      title: 'Chat on WhatsApp with Best Technology',
      subtitle: 'Send floorplans, discuss requirements, or get fast quotations',
      badge: 'WhatsApp',
      action: () => {
        window.open(COMPANY.whatsappUrl, '_blank');
      },
      keywords: 'whatsapp chat message instant proposal fast quote enquiry',
    },
    {
      id: 'act-email',
      category: 'Actions',
      title: 'Send Official Email RFP',
      subtitle: `${COMPANY.email}`,
      badge: 'Email',
      action: () => {
        window.location.href = `mailto:${COMPANY.email}`;
      },
      keywords: 'email mail sales quote rfp tender proposal inquiry',
    },
    {
      id: 'act-insta',
      category: 'Actions',
      title: 'Follow Instagram Showcase',
      subtitle: `${COMPANY.instagram}`,
      badge: 'Instagram',
      action: () => {
        window.open(COMPANY.instagramUrl, '_blank');
      },
      keywords: 'instagram social photos project installations video best_tech_4u',
    },

    // 14 Solutions
    ...SOLUTIONS.map(
      (s): CommandItem => ({
        id: `sol-${s.slug}`,
        category: 'Solutions',
        title: s.title,
        subtitle: s.tagline,
        badge: s.category,
        action: () => {
          onClose();
          history.push(`/solutions/${s.slug}`);
        },
        keywords: `${s.title} ${s.summary} ${s.hardwareItems.join(' ')} ${s.category}`,
      })
    ),
  ];

  // Filtering
  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
      return;
    }
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.cmdOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={styles.cmdModal}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cmdInputWrap}>
          <span className={styles.cmdSearchIcon}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            className={styles.cmdInput}
            placeholder="Type a solution, tool, camera type, or action..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <kbd className={styles.cmdEscKbd} onClick={onClose}>
            ESC
          </kbd>
        </div>

        <div className={styles.cmdResultsList}>
          {filteredItems.length === 0 ? (
            <div className={styles.cmdEmpty}>
              No matching security solutions or tools found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.cmdResultItem} ${idx === selectedIndex ? styles.cmdResultSelected : ''}`}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className={styles.cmdResultMain}>
                  <div className={styles.cmdResultTitleRow}>
                    <span className={styles.cmdResultTitle}>{item.title}</span>
                    {item.badge && <span className={styles.cmdBadge}>{item.badge}</span>}
                  </div>
                  <div className={styles.cmdResultSubtitle}>{item.subtitle}</div>
                </div>
                <div className={styles.cmdCategoryTag}>{item.category}</div>
              </div>
            ))
          )}
        </div>

        <div className={styles.cmdFooter}>
          <div className={styles.cmdShortcuts}>
            <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
            <span><kbd>↵</kbd> to select</span>
            <span><kbd>ESC</kbd> to close</span>
          </div>
          <div className={styles.cmdBrandFooter}>BEST TECHNOLOGY IT SOLUTION</div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
