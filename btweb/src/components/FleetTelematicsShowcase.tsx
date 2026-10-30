import React, { useState } from 'react';
import styles from '../pages/homeDesign.less';
import { COMPANY } from '@/constants/company';

interface TelemetryVehicle {
  plate: string;
  driver: string;
  speed: number;
  fuel: number;
  status: 'Running' | 'Idle' | 'OverSpeed' | 'Stopped';
  location: string;
  lat: string;
  lng: string;
  alerts: string[];
}

const FLEET_DATA: TelemetryVehicle[] = [
  {
    plate: 'TN-45-AZ-8969',
    driver: 'Rajesh Kannan',
    speed: 38,
    fuel: 82,
    status: 'Running',
    location: 'Trichy Bypass - NH 83 (En Route)',
    lat: '10.7905° N',
    lng: '78.7047° E',
    alerts: ['AIS 140 Certified', 'Route OK', 'Ignition ON'],
  },
  {
    plate: 'TN-48-M-4211',
    driver: 'Senthil Nathan',
    speed: 68,
    fuel: 64,
    status: 'OverSpeed',
    location: 'Madurai Highway Ring Road',
    lat: '9.9252° N',
    lng: '78.1198° E',
    alerts: ['Speed Alert (>60 km/h)', 'Fuel Level Normal'],
  },
  {
    plate: 'TN-09-Q-1823',
    driver: 'Murugan P.',
    speed: 0,
    fuel: 48,
    status: 'Idle',
    location: 'Warehouse Loading Bay 3',
    lat: '13.0827° N',
    lng: '80.2707° E',
    alerts: ['Engine Idling > 15m', 'AC Running'],
  },
  {
    plate: 'TN-45-X-9004',
    driver: 'Aravind K.',
    speed: 0,
    fuel: 95,
    status: 'Stopped',
    location: 'Central Depot Garage',
    lat: '10.8050° N',
    lng: '78.6856° E',
    alerts: ['Parked & Secured', 'Ignition OFF'],
  },
];

export const FleetTelematicsShowcase: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<TelemetryVehicle>(FLEET_DATA[0]);

  return (
    <div className={styles.fleetWrapper}>
      <div className={styles.fleetHeader}>
        <div className={styles.fleetBadge}>GOVERNMENT APPROVED TELEMATICS PLATFORM</div>
        <h3 className={styles.fleetTitle}>AIS 140 Certified GPS & Fleet Intelligence</h3>
        <p className={styles.fleetSubtitle}>
          Real-time tracking, ultrasonic digital fuel monitoring, driver behavior profiling, and automated inspection reports designed for commercial transport and private fleets.
        </p>
      </div>

      <div className={styles.fleetDashboardGrid}>
        {/* Left: Interactive Vehicle Selector */}
        <div className={styles.fleetVehiclesCard}>
          <div className={styles.fleetCardHeader}>
            <span>ACTIVE FLEET ASSETS</span>
            <span className={styles.liveTag}>● 4 UNITS LIVE</span>
          </div>

          <div className={styles.vehicleList}>
            {FLEET_DATA.map((v) => (
              <button
                key={v.plate}
                type="button"
                className={`${styles.vehicleItemBtn} ${selectedVehicle.plate === v.plate ? styles.vehicleItemActive : ''}`}
                onClick={() => setSelectedVehicle(v)}
              >
                <div className={styles.vehicleItemTop}>
                  <span className={styles.vehiclePlate}>{v.plate}</span>
                  <span
                    className={`${styles.vehicleStatusPill} ${
                      v.status === 'Running'
                        ? styles.statusRunning
                        : v.status === 'OverSpeed'
                        ? styles.statusAlert
                        : styles.statusIdle
                    }`}
                  >
                    {v.status}
                  </span>
                </div>
                <div className={styles.vehicleItemSub}>
                  <span>👤 {v.driver}</span>
                  <span>⚡ {v.speed} km/h</span>
                  <span>⛽ {v.fuel}%</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Live Telemetry HUD */}
        <div className={styles.telemetryCard}>
          <div className={styles.telemetryHeader}>
            <div>
              <div className={styles.telemetryPlate}>{selectedVehicle.plate}</div>
              <div className={styles.telemetryDriver}>Driver: {selectedVehicle.driver} | Location: {selectedVehicle.location}</div>
            </div>
            <div className={styles.certBadge}>AIS 140 CERTIFIED</div>
          </div>

          {/* Metric Gauges Row */}
          <div className={styles.gaugesRow}>
            <div className={styles.gaugeBox}>
              <div className={styles.gaugeVal}>
                {selectedVehicle.speed} <span className={styles.gaugeUnit}>km/h</span>
              </div>
              <div className={styles.gaugeLabel}>Speed Telemetry</div>
              <div className={styles.gaugeBarWrap}>
                <div
                  className={styles.gaugeBar}
                  style={{
                    width: `${Math.min(100, (selectedVehicle.speed / 80) * 100)}%`,
                    backgroundColor: selectedVehicle.speed > 60 ? '#EF4444' : '#06B6D4',
                  }}
                />
              </div>
            </div>

            <div className={styles.gaugeBox}>
              <div className={styles.gaugeVal}>
                {selectedVehicle.fuel} <span className={styles.gaugeUnit}>%</span>
              </div>
              <div className={styles.gaugeLabel}>Fuel Ultrasonic Sensor</div>
              <div className={styles.gaugeBarWrap}>
                <div
                  className={styles.gaugeBar}
                  style={{
                    width: `${selectedVehicle.fuel}%`,
                    backgroundColor: selectedVehicle.fuel < 20 ? '#EF4444' : '#10B981',
                  }}
                />
              </div>
            </div>

            <div className={styles.gaugeBox}>
              <div className={styles.gaugeVal}>{selectedVehicle.lat}</div>
              <div className={styles.gaugeLabel}>GNSS Latitude</div>
              <div className={styles.coordSub}>{selectedVehicle.lng}</div>
            </div>
          </div>

          {/* Real-Time Alerts & Safety Diagnostics */}
          <div className={styles.alertsContainer}>
            <div className={styles.alertsTitle}>ACTIVE TELEMATICS & SENSOR STATUS</div>
            <div className={styles.alertsChips}>
              {selectedVehicle.alerts.map((al, idx) => (
                <span key={idx} className={styles.alertChip}>
                  ✓ {al}
                </span>
              ))}
              <span className={styles.alertChip}>Panic Button: ARMED</span>
              <span className={styles.alertChip}>Geofence: MONITORED</span>
              <span className={styles.alertChip}>Engine Immobilizer: STANDBY</span>
            </div>
          </div>

          {/* Inspection and CTA */}
          <div className={styles.telemetryFooter}>
            <div className={styles.telemetryNote}>
              Complies with Ministry of Road Transport and Highways (MoRTH) AIS 140 Standards.
            </div>
            <div className={styles.telemetryActions}>
              <a
                href={`https://wa.me/918675248969?text=${encodeURIComponent(
                  `Hello Best Technology, I need AIS 140 GPS and Fleet Management solutions for my fleet. Please send details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.telemetryWaBtn}
              >
                <span>💬 Request Fleet Demo</span>
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className={styles.telemetryCallBtn}>
                <span>📞 Call: {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetTelematicsShowcase;
