import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWater,
  FaCloudRain,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

import "./FlashFlood.css";

function FlashFlood() {
  const navigate = useNavigate();

  const locations = [
    {
      name: "East Kolkata Wetlands",
      level: "High",
      value: "82%",
      status: "Rising",
    },
    {
      name: "North Kolkata",
      level: "High",
      value: "76%",
      status: "Rising",
    },
    {
      name: "Central Kolkata",
      level: "Moderate",
      value: "61%",
      status: "Stable",
    },
    {
      name: "South Kolkata",
      level: "Moderate",
      value: "55%",
      status: "Stable",
    },
  ];

  return (
    <main className="flood-page">
      <section className="flood-header">
        <div>
          <span className="flood-eyebrow">
            HYDROLOGICAL RISK MONITORING
          </span>

          <h1>Flash Flood Monitoring</h1>

          <p>
            Monitor rainfall, drainage and water-level
            conditions to identify potential flash flood
            situations.
          </p>
        </div>

        <div className="flood-status">
          <FaWater />
          <div>
            <strong>Flood Monitoring Active</strong>
            <span>Hydrological data being analyzed</span>
          </div>
        </div>
      </section>

      <section className="flood-warning">
        <div className="flood-warning-icon">
          <FaExclamationTriangle />
        </div>

        <div>
          <span>FLASH FLOOD RISK</span>
          <h2>Elevated conditions detected</h2>
          <p>
            Heavy rainfall combined with rising water levels
            may increase localized flood risk.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/alerts")}
        >
          View Active Alerts
          <FaArrowRight />
        </button>
      </section>

      <section className="flood-stats">
        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <FaWater />
          </div>
          <span>WATER LEVEL</span>
          <strong>76%</strong>
          <small>Above normal threshold</small>
        </div>

        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <FaCloudRain />
          </div>
          <span>RAINFALL</span>
          <strong>74 mm/hr</strong>
          <small>Current intensity</small>
        </div>

        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <FaChartLine />
          </div>
          <span>FLOOD PROBABILITY</span>
          <strong>72%</strong>
          <small>Next 6 hours</small>
        </div>

        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <FaShieldAlt />
          </div>
          <span>RESPONSE STATUS</span>
          <strong>Ready</strong>
          <small>Emergency teams alerted</small>
        </div>
      </section>

      <section className="flood-main-grid">
        <article className="flood-map-card">
          <div className="flood-card-header">
            <div>
              <span>REGIONAL OVERVIEW</span>
              <h2>Flood Risk Map</h2>
            </div>

            <FaMapMarkerAlt />
          </div>

          <div className="flood-map">
            <div className="flood-map-grid"></div>

            <div className="flood-river"></div>

            <div className="flood-location location-a">
              <span></span>
              North
            </div>

            <div className="flood-location location-b">
              <span></span>
              East
            </div>

            <div className="flood-location location-c">
              <span></span>
              Central
            </div>

            <div className="flood-location location-d">
              <span></span>
              South
            </div>

            <div className="flood-map-center">
              <FaMapMarkerAlt />
              <strong>Kolkata</strong>
            </div>

            <div className="flood-map-legend">
              <span>
                <i className="flood-high"></i>
                High Risk
              </span>

              <span>
                <i className="flood-medium"></i>
                Moderate
              </span>
            </div>
          </div>
        </article>

        <article className="flood-risk-card">
          <span>FLOOD RISK INDEX</span>

          <h2>72 / 100</h2>

          <div className="flood-risk-meter">
            <div
              className="flood-risk-fill"
              style={{ width: "72%" }}
            ></div>
          </div>

          <div className="flood-risk-labels">
            <span>Low</span>
            <span>Moderate</span>
            <span>High</span>
            <span>Critical</span>
          </div>

          <p>
            The current combination of rainfall and water-level
            conditions indicates elevated flash flood risk.
          </p>

          <button
            type="button"
            onClick={() => navigate("/analysis")}
          >
            View AI Risk Analysis
            <FaArrowRight />
          </button>
        </article>
      </section>

      <section className="flood-location-section">
        <div className="flood-section-title">
          <div>
            <span>WATER LEVEL MONITORING</span>
            <h2>High-Risk Locations</h2>
          </div>

          <span className="flood-live">
            <i></i>
            Live data
          </span>
        </div>

        <div className="flood-location-grid">
          {locations.map((location) => (
            <article
              className="flood-location-card"
              key={location.name}
            >
              <div className="location-card-top">
                <div className="location-card-icon">
                  <FaWater />
                </div>

                <span
                  className={`location-risk ${location.level.toLowerCase()}`}
                >
                  {location.level}
                </span>
              </div>

              <h3>{location.name}</h3>

              <div className="location-water-value">
                <strong>{location.value}</strong>
                <span>risk index</span>
              </div>

              <div className="location-card-bottom">
                <span>Water status</span>
                <strong>{location.status}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flood-action-card">
        <div className="flood-action-icon">
          <FaShieldAlt />
        </div>

        <div>
          <span>RECOMMENDED RESPONSE</span>
          <h2>Prepare for rapid deployment</h2>
          <p>
            Keep emergency response teams ready in areas where
            rainfall and water-level indicators are increasing.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/alerts")}
        >
          Check Alerts
          <FaArrowRight />
        </button>
      </section>
    </main>
  );
}
export default FlashFlood;