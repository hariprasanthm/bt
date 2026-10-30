import React, { useState } from 'react';
import styles from '../pages/homeDesign.less';
import { COMPANY } from '@/constants/company';

const AMC_FEATURES = [
  {
    name: 'Scheduled Quarterly Preventive Maintenance',
    desc: 'Deep cleaning of camera lenses, focus tuning, sensor calibration & terminal checks',
    nonComp: true,
    comp: true,
  },
  {
    name: 'Emergency Breakdown Response (Under 4 Hours)',
    desc: 'Priority on-site technician deployment for critical camera/access control blackouts',
    nonComp: true,
    comp: true,
  },
  {
    name: 'Unlimited On-Call Engineering Visits',
    desc: 'Zero service visit charges regardless of frequency of hardware or network issues',
    nonComp: true,
    comp: true,
  },
  {
    name: '100% Free Hardware Spare Parts Replacement',
    desc: 'Burned power supplies, faulty cameras, damaged controllers replaced at zero cost',
    nonComp: false,
    comp: true,
  },
  {
    name: 'Temporary Hot-Standby Loaner Hardware',
    desc: 'Immediate replacement camera/NVR provided while factory bench servicing is performed',
    nonComp: false,
    comp: true,
  },
  {
    name: 'Firmware & Cyber Security Updates',
    desc: 'Quarterly OS/firmware patching against vulnerabilities and network exploits',
    nonComp: true,
    comp: true,
  },
  {
    name: 'Optical Fiber & Cable Continuity Testing',
    desc: 'OTDR splicing audit and structured cabling recertification',
    nonComp: false,
    comp: true,
  },
  {
    name: 'Dedicated 24/7 Priority Helpdesk Ticket Portal',
    desc: 'Direct escalation to senior system engineers with live ticket tracking',
    nonComp: true,
    comp: true,
  },
];

export const AMCComparison: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'comp' | 'nonComp'>('comp');

  return (
    <div className={styles.amcWrapper}>
      <div className={styles.amcHeader}>
        <div className={styles.amcBadge}>ENTERPRISE ANNUAL MAINTENANCE CONTRACTS</div>
        <h3 className={styles.amcTitle}>Comprehensive & Non-Comprehensive AMC Plans</h3>
        <p className={styles.amcSubtitle}>
          Ensure zero blind spots and eliminate unexpected hardware repair expenses. We maintain all brands of CCTV, Biometrics, Gates, Fire Alarms & IT infrastructure under guaranteed SLA.
        </p>
      </div>

      <div className={styles.amcPlansRow}>
        {/* Comprehensive Card */}
        <div
          className={`${styles.amcPlanCard} ${selectedPlan === 'comp' ? styles.amcPlanActive : ''}`}
          onClick={() => setSelectedPlan('comp')}
        >
          <div className={styles.amcPlanTag}>RECOMMENDED FOR ZERO DOWNTIME</div>
          <h4 className={styles.amcPlanTitle}>Comprehensive AMC</h4>
          <p className={styles.amcPlanDesc}>
            All-inclusive maintenance covering 100% replacement parts, hot-standby spares, labor, and priority 4-hour SLA.
          </p>
          <div className={styles.amcPriceNote}>Complete peace of mind with zero surprise repair bills.</div>
          <a
            href={`https://wa.me/918675248969?text=${encodeURIComponent(
              'Hello Best Technology, I would like to get a quote for Comprehensive AMC for our facility.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.amcSelectBtn}
          >
            <span>Get Comprehensive AMC Quote</span>
          </a>
        </div>

        {/* Non-Comprehensive Card */}
        <div
          className={`${styles.amcPlanCard} ${selectedPlan === 'nonComp' ? styles.amcPlanActive : ''}`}
          onClick={() => setSelectedPlan('nonComp')}
        >
          <div className={styles.amcPlanTag}>BUDGET-FRIENDLY PREVENTIVE CARE</div>
          <h4 className={styles.amcPlanTitle}>Non-Comprehensive AMC</h4>
          <p className={styles.amcPlanDesc}>
            Covers unlimited service labor, quarterly preventive inspections, and rapid breakdown visits. Parts billed as needed.
          </p>
          <div className={styles.amcPriceNote}>Ideal for well-maintained sites seeking reliable preventive service.</div>
          <a
            href={`https://wa.me/918675248969?text=${encodeURIComponent(
              'Hello Best Technology, I would like to get a quote for Non-Comprehensive AMC for our facility.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.amcSelectBtnOutline}
          >
            <span>Get Non-Comprehensive Quote</span>
          </a>
        </div>
      </div>

      {/* Feature Checklist Table */}
      <div className={styles.amcTableWrap}>
        <table className={styles.amcTable}>
          <thead>
            <tr>
              <th style={{ width: '56%' }}>Service Feature & Coverage</th>
              <th style={{ width: '22%', textAlign: 'center' }}>Non-Comprehensive</th>
              <th style={{ width: '22%', textAlign: 'center', color: '#06B6D4' }}>Comprehensive</th>
            </tr>
          </thead>
          <tbody>
            {AMC_FEATURES.map((feat, idx) => (
              <tr key={idx}>
                <td>
                  <div className={styles.featName}>{feat.name}</div>
                  <div className={styles.featDesc}>{feat.desc}</div>
                </td>
                <td style={{ textAlign: 'center' }}>
                  {feat.nonComp ? (
                    <span className={styles.checkGreen}>✓ Included</span>
                  ) : (
                    <span className={styles.crossRed}>✕ Billable at actuals</span>
                  )}
                </td>
                <td style={{ textAlign: 'center' }}>
                  {feat.comp ? (
                    <span className={styles.checkGreenBold}>✓ 100% Covered</span>
                  ) : (
                    <span className={styles.crossRed}>✕</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AMCComparison;
