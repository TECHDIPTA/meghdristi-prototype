import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloudRain,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaChartLine,
  FaArrowRight,
  FaArrowLeft,
  FaWater,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";

import "./Cloudburst.css";

const affectedAreas = [
  {
    area: "Salt Lake",
    rainfall: "92 mm/hr",
    probability: 86,
    status: "Critical",
  },
  {
    area: "New Town",
    rainfall: "84 mm/hr",
    probability: 79,
    status: "High",
  },
  {
    area: "Bidhannagar",
    rainfall: "76 mm/hr",
    probability: 72,
    status: "High",
  },
  {
    area: "Dum Dum",
    rainfall: "68 mm/hr",
    probability: 61,
    status: "Moderate",
  },
];

const rainfallData = [
  { time: "Now", value: 86 },
  { time: "+1h", value: 91 },
  { time: "+2h", value: 78 },
  { time: "+3h", value: 68 },
  { time: "+4h", value: 55 },
  { time: "+5h", value: 42 },
];

function Cloudburst() {
  const navigate = useNavigate();

  return (
    <div className="cloudburst-page">
      {/* HEADER */}
      <div className="cloudburst-header">
        <div>
          <div className="cloudburst-eyebrow">
            <FaCloudRain />
            EXTREME RAINFALL MONITORING
          </div>

          <h1>Cloudburst Intelligence</h1>

          <p>
            Real-time rainfall monitoring and AI-powered cloudburst
            risk assessment for the Kolkata region.
          </p>
        </div>

        <div className="cloudburst-live">
          <span className="live-dot"></span>
          LIVE MONITORING
        </div>
      </div>

      {/* WARNING */}
      <div className="cloudburst-warning">
        <div className="warning-icon">
          <FaExclamationTriangle />
        </div>

        <div className="warning-content">
          <strong>High cloudburst probability detected</strong>
          <span>
            Intense rainfall activity is expected across multiple
            monitored zones during the next 2–4 hours.
          </span>
        </div>

        <button
          className="warning-action"
          onClick={() => navigate("/alerts")}
        >
          View Alerts
          <FaArrowRight />
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="cloudburst-stats">
        <div className="cloudburst-stat-card">
          <div className="stat-icon rain">
            <FaCloudRain />
          </div>

          <div>
            <span>Peak Rainfall</span>
            <strong>92 mm/hr</strong>
            <small>↑ 18% from last hour</small>
          </div>
        </div>

        <div className="cloudburst-stat-card">
          <div className="stat-icon danger">
            <FaExclamationTriangle />
          </div>

          <div>
            <span>Risk Probability</span>
            <strong>86%</strong>
            <small>Very High</small>
          </div>
        </div>

        <div className="cloudburst-stat-card">
          <div className="stat-icon water">
            <FaWater />
          </div>

          <div>
            <span>Waterlogging Risk</span>
            <strong>78%</strong>
            <small>Multiple zones</small>
          </div>
        </div>

        <div className="cloudburst-stat-card">
          <div className="stat-icon time">
            <FaClock />
          </div>

          <div>
            <span>Peak Window</span>
            <strong>1–3 hrs</strong>
            <small>AI prediction</small>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="cloudburst-main-grid">
        {/* MAP */}
        <section className="cloudburst-card map-card">
          <div className="cloudburst-card-header">
            <div>
              <span className="card-label">LIVE RISK MAP</span>
              <h2>Cloudburst Hotspots</h2>
            </div>

            <span className="map-location">
              <FaMapMarkerAlt />
              Kolkata
            </span>
          </div>

          <div className="cloudburst-map">
            <div className="map-grid-lines"></div>

            <div className="map-road road-1"></div>
            <div className="map-road road-2"></div>
            <div className="map-road road-3"></div>

            <div className="hotspot hotspot-one">
              <span></span>
              <label>Salt Lake</label>
            </div>

            <div className="hotspot hotspot-two">
              <span></span>
              <label>New Town</label>
            </div>

            <div className="hotspot hotspot-three">
              <span></span>
              <label>Bidhannagar</label>
            </div>

            <div className="hotspot hotspot-four">
              <span></span>
              <label>Dum Dum</label>
            </div>

            <div className="map-center">
              <FaLocationArrow />
              <span>Monitoring Center</span>
            </div>

            <div className="map-legend">
              <span>
                <i className="legend-critical"></i>
                Critical
              </span>

              <span>
                <i className="legend-high"></i>
                High
              </span>

              <span>
                <i className="legend-moderate"></i>
                Moderate
              </span>
            </div>
          </div>
        </section>

        {/* AI PANEL */}
        <section className="cloudburst-card ai-cloudburst-card">
          <div className="cloudburst-card-header">
            <div>
              <span className="card-label">AI PREDICTION ENGINE</span>
              <h2>Cloudburst Risk</h2>
            </div>

            <div className="ai-status">
              <span></span>
              AI Active
            </div>
          </div>

          <div className="cloudburst-score">
            <div className="score-circle">
              <div>
                <strong>86</strong>
                <span>/100</span>
              </div>
            </div>

            <div className="score-info">
              <strong>Very High Risk</strong>
              <p>
                AI models indicate a strong probability of
                extreme rainfall.
              </p>
            </div>
          </div>

          <div className="risk-meter">
            <div className="risk-meter-top">
              <span>Risk intensity</span>
              <strong>86%</strong>
            </div>

            <div className="risk-meter-track">
              <div
                className="risk-meter-fill"
                style={{ width: "86%" }}
              ></div>
            </div>
          </div>

          <div className="ai-insight">
            <FaChartLine />

            <div>
              <strong>AI Insight</strong>
              <p>
                Rainfall intensity is expected to remain elevated
                over the next 2 hours, increasing localized
                waterlogging probability.
              </p>
            </div>
          </div>

          <button
            className="primary-action"
            onClick={() => navigate("/analysis")}
          >
            Open Full AI Analysis
            <FaArrowRight />
          </button>
        </section>
      </div>

      {/* RAINFALL TREND */}
      <section className="cloudburst-card rainfall-card">
        <div className="cloudburst-card-header">
          <div>
            <span className="card-label">FORECAST TREND</span>
            <h2>Rainfall Intensity</h2>
          </div>

          <span className="forecast-badge">
            Next 5 Hours
          </span>
        </div>

        <div className="rainfall-chart">
          {rainfallData.map((item, index) => (
            <div className="rain-column" key={item.time}>
              <span className="rain-value">
                {item.value}
              </span>

              <div className="rain-bar-area">
                <div
                  className={`rain-bar ${
                    index === 1 ? "peak" : ""
                  }`}
                  style={{
                    height: `${item.value}%`,
                  }}
                ></div>
              </div>

              <span className="rain-time">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* AFFECTED AREAS */}
      <section className="cloudburst-card affected-card">
        <div className="cloudburst-card-header">
          <div>
            <span className="card-label">MONITORED ZONES</span>
            <h2>Affected Areas</h2>
          </div>

          <span className="area-count">
            4 zones monitored
          </span>
        </div>

        <div className="areas-table">
          {affectedAreas.map((area) => (
            <div className="area-row" key={area.area}>
              <div className="area-name">
                <FaMapMarkerAlt />
                <strong>{area.area}</strong>
              </div>

              <div className="area-rainfall">
                <span>Rainfall</span>
                <strong>{area.rainfall}</strong>
              </div>

              <div className="area-probability">
                <span>Probability</span>

                <div className="mini-progress">
                  <div
                    style={{
                      width: `${area.probability}%`,
                    }}
                  ></div>
                </div>

                <strong>{area.probability}%</strong>
              </div>

              <span
                className={`area-status ${area.status.toLowerCase()}`}
              >
                {area.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER ACTIONS */}
      <div className="cloudburst-actions">
        <button
          className="secondary-action"
          onClick={() => navigate("/dashboard")}
        >
          <FaArrowLeft />
          Back to Dashboard
        </button>

        <button
          className="primary-action"
          onClick={() => navigate("/alerts")}
        >
          View Active Alerts
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Cloudburst;