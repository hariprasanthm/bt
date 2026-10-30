import React, { useState } from 'react';
import styles from '../pages/homeDesign.less';
import { CAMERA_PRODUCTS, CameraProduct, COMPANY } from '@/constants/company';

export const CameraShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedCameraId, setExpandedCameraId] = useState<string | null>(null);

  const categories = ['All', 'Dome', 'Bullet', 'PTZ', 'Thermal', 'ANPR', 'Fisheye'];

  const filteredCameras =
    selectedCategory === 'All'
      ? CAMERA_PRODUCTS
      : CAMERA_PRODUCTS.filter((c) => c.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedCameraId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.cameraShowcaseWrap}>
      {/* Category Tabs */}
      <div className={styles.cameraCatTabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.cameraTabBtn} ${selectedCategory === cat ? styles.cameraTabActive : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === 'All' ? 'All Surveillance Cameras' : `${cat} Series`}
          </button>
        ))}
      </div>

      {/* Camera Grid */}
      <div className={styles.cameraGrid}>
        {filteredCameras.map((cam) => {
          const isExpanded = expandedCameraId === cam.id;

          return (
            <div key={cam.id} className={styles.cameraCard}>
              {/* Product Image Stage */}
              <div className={styles.cameraImgWrap}>
                <img
                  src={cam.image}
                  alt={cam.name}
                  className={styles.cameraImg}
                  loading="lazy"
                />
                <span className={styles.cameraCategoryPill}>{cam.category} SERIES</span>
                <span className={styles.cameraResolutionBadge}>{cam.resolution.split('@')[0]}</span>
              </div>

              {/* Card Body */}
              <div className={styles.cameraBody}>
                <div className={styles.cameraModel}>{cam.model}</div>
                <h3 className={styles.cameraName}>{cam.name}</h3>
                <p className={styles.cameraTagline}>{cam.tagline}</p>
                <p className={styles.cameraOverview}>{cam.overview}</p>

                {/* Key Quick Feature Pills */}
                <div className={styles.cameraKeySpecs}>
                  <div className={styles.cameraSpecItem}>
                    <span className={styles.specIcon}>👁️</span>
                    <div>
                      <div className={styles.specLabel}>Optics & FOV</div>
                      <div className={styles.specVal}>{cam.lensFov.split('(')[0]}</div>
                    </div>
                  </div>

                  <div className={styles.cameraSpecItem}>
                    <span className={styles.specIcon}>🌙</span>
                    <div>
                      <div className={styles.specLabel}>Night Vision</div>
                      <div className={styles.specVal}>{cam.nightVision.split('with')[0]}</div>
                    </div>
                  </div>

                  <div className={styles.cameraSpecItem}>
                    <span className={styles.specIcon}>⚡</span>
                    <div>
                      <div className={styles.specLabel}>Sensor</div>
                      <div className={styles.specVal}>{cam.sensor}</div>
                    </div>
                  </div>
                </div>

                {/* AI & Analytics Features */}
                <div className={styles.cameraAiBlock}>
                  <div className={styles.aiBlockHeading}>AI & Intelligent Edge Analytics:</div>
                  <ul className={styles.aiFeatureList}>
                    {cam.aiFeatures.map((feat, idx) => (
                      <li key={idx} className={styles.aiFeatureItem}>
                        <span className={styles.aiCheck}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Collapsible Full Datasheet */}
                {isExpanded && (
                  <div className={styles.datasheetDrawer}>
                    <div className={styles.datasheetHeading}>Technical Specifications Datasheet:</div>
                    <table className={styles.datasheetTable}>
                      <tbody>
                        {cam.specs.map((sp, i) => (
                          <tr key={i}>
                            <td className={styles.dsLabel}>{sp.label}</td>
                            <td className={styles.dsVal}>{sp.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className={styles.dsApplications}>
                      <strong>Target Deployments:</strong>
                      <ul>
                        {cam.applications.map((app, i) => (
                          <li key={i}>{app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Actions Row */}
                <div className={styles.cameraCardActions}>
                  <button
                    type="button"
                    className={styles.toggleDatasheetBtn}
                    onClick={() => toggleExpand(cam.id)}
                  >
                    {isExpanded ? 'Hide Datasheet ▲' : 'View Full Datasheet ▼'}
                  </button>

                  <a
                    href={`https://wa.me/918675248969?text=${encodeURIComponent(
                      `Hello Best Technology, I would like to get a quote and availability for the ${cam.name} (${cam.model}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cameraQuoteBtn}
                  >
                    <span>💬 Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CameraShowcase;
