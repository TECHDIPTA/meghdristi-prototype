import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWind,
  FaCloudRain,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

import "./SevereStorms.css";

function SevereStorms() {
  const navigate = useNavigate();

  const stormIndicators = [
    {
      title: "Wind Speed",
      value: "68 km/h",
      level: "High",
      icon: <FaWind />,
    },
    {
      title: "Rainfall",
      value: "74 mm/hr",
      level: "High",
      icon: <FaCloudRain />,
    },
    {
      title: "Atmospheric Pressure",
      value: "992 hPa",
      level: "Moderate",
      icon: <FaChartLine />,
    },
    {
      title: "Lightning Activity",
      value: "High",
      level: "High",
      icon: <FaBolt />,
    },
  ];

  const affectedZones = [
    {
      name: "North Kolkata",
      risk: "High",
      wind: "68 km/h",
      status: "Active",
    },
    {
      name: "East Kolkata",
      risk: "High",
      wind: "64 km/h",
      status: "Active",
    },
    {
      name: "Central Kolkata",
      risk: "Moderate",
      wind: "51 km/h",
      status: "Monitoring",
    },
    {
      name: "South Kolkata",
      risk: "Moderate",
      wind: "47 km/h",
      status: "Monitoring",
    },
  ];

  return (
    <main className="storms-page">
      <section className="storms-header">
        <div>
          <span className="storms-eyebrow">
            EXTREME WEATHER INTELLIGENCE
          </span>

          <h1>Severe Storm Monitoring</h1>

          <p>
            Monitor wind, rainfall, atmospheric pressure and
            lightning activity to detect severe storm conditions.
          </p>
        </div>

        <div className="storm-status">
          <FaWind />
          <div>
            <strong>Storm Monitoring Active</strong>
            <span>Real-time atmospheric analysis</span>
          </div>
        </div>
      </section>

      <section className="storm-warning">
        <div className="storm-warning-icon">
          <FaExclamationTriangle />
        </div>

        <div>
          <span>SEVERE WEATHER WARNING</span>
          <h2>Elevated storm activity detected</h2>
          <p>
            Strong wind activity and heavy rainfall are being
            observed across parts of the monitored region.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/alerts")}
        >
          View Alerts
          <FaArrowRight />
        </button>
      </section>

      <section className="storm-indicator-grid">
        {stormIndicators.map((indicator) => (
          <article
            className="storm-indicator-card"
            key={indicator.title}
          >
            <div className="storm-indicator-top">
              <div className="storm-indicator-icon">
                {indicator.icon}
              </div>

              <span
                className={`storm-level ${indicator.level.toLowerCase()}`}
              >
                {indicator.level}
              </span>
            </div>

            <span className="storm-indicator-title">
              {indicator.title}
            </span>

            <strong>{indicator.value}</strong>
          </article>
        ))}
      </section>

      <section className="storm-main-grid">
        <article className="storm-map-card">
          <div className="storm-card-header">
            <div>
              <span>SPATIAL MONITORING</span>
              <h2>Storm Risk Map</h2>
            </div>

            <FaMapMarkerAlt />
          </div>

          <div className="storm-map">
            <div className="storm-map-grid"></div>

            <div className="storm-cloud cloud-one">
              <FaCloudRain />
            </div>

            <div className="storm-cloud cloud-two">
              <FaCloudRain />
            </div>

            <div className="storm-wind-line wind-one"></div>
            <div className="storm-wind-line wind-two"></div>
            <div className="storm-wind-line wind-three"></div>

            <div className="storm-point point-one">
              <span></span>
              North
            </div>

            <div className="storm-point point-two">
              <span></span>
              East
            </div>

            <div className="storm-point point-three">
              <span></span>
              Central
            </div>

            <div className="storm-point point-four">
              <span></span>
              South
            </div>

            <div className="storm-map-center">
              <FaMapMarkerAlt />
              <strong>Kolkata</strong>
            </div>

            <div className="storm-map-legend">
              <span>
                <i className="storm-high"></i>
                High
              </span>

              <span>
                <i className="storm-medium"></i>
                Moderate
              </span>

              <span>
                <i className="storm-safe"></i>
                Low
              </span>
            </div>
          </div>
        </article>

        <article className="storm-risk-card">
          <div className="storm-risk-header">
            <div>
              <span>STORM RISK INDEX</span>
              <h2>74 / 100</h2>
            </div>

            <div className="storm-risk-icon">
              <FaWind />
            </div>
          </div>

          <div className="storm-risk-meter">
            <div
              className="storm-risk-fill"
              style={{ width: "74%" }}
            ></div>
          </div>

          <div className="storm-risk-labels">
            <span>Low</span>
            <span>Moderate</span>
            <span>High</span>
            <span>Critical</span>
          </div>

          <p>
            Multiple atmospheric indicators are contributing to
            an elevated probability of severe weather.
          </p>

          <div className="storm-risk-factor">
            <div>
              <span>Wind activity</span>
              <strong>82%</strong>
            </div>

            <div className="storm-factor-track">
              <div
                style={{ width: "82%" }}
              ></div>
            </div>
          </div>

          <div className="storm-risk-factor">
            <div>
              <span>Rainfall intensity</span>
              <strong>76%</strong>
            </div>

            <div className="storm-factor-track">
              <div
                style={{ width: "76%" }}
              ></div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/analysis")}
          >
            Open AI Analysis
            <FaArrowRight />
          </button>
        </article>
      </section>

      <section className="storm-zones-section">
        <div className="storm-section-header">
          <div>
            <span>REGIONAL CONDITIONS</span>
            <h2>Monitored Storm Zones</h2>
          </div>

          <span className="storm-live">
            <i></i>
            Live monitoring
          </span>
        </div>

        <div className="storm-zone-grid">
          {affectedZones.map((zone) => (
            <article
              className="storm-zone-card"
              key={zone.name}
            >
              <div className="storm-zone-top">
                <div className="storm-zone-icon">
                  <FaMapMarkerAlt />
                </div>

                <span
                  className={`zone-risk ${zone.risk.toLowerCase()}`}
                >
                  {zone.risk}
                </span>
              </div>

              <h3>{zone.name}</h3>

              <div className="storm-zone-data">
                <div>
                  <span>Wind</span>
                  <strong>{zone.wind}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>{zone.status}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="storm-response-card">
        <div className="storm-response-icon">
          <FaShieldAlt />
        </div>

        <div>
          <span>EMERGENCY PREPAREDNESS</span>
          <h2>Response teams should remain prepared</h2>
          <p>
            Continue monitoring wind speed, rainfall and
            lightning activity. Emergency teams should be ready
            for rapid deployment if conditions deteriorate.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/alerts")}
        >
          Monitor Alerts
          <FaArrowRight />
        </button>
      </section>
    </main>
  );
}

export default SevereStorms;