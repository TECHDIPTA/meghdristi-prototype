import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBell,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCloudRain,
  FaWater,
  FaWind,
  FaArrowRight,
  FaFilter,
  FaClock,
  FaMapMarkerAlt,
  FaBrain,
} from "react-icons/fa";

import "./Alerts.css";

const alertsData = [
  {
    id: 1,
    title: "Extreme Rainfall Warning",
    description:
      "Heavy rainfall may cause severe waterlogging in low-lying areas.",
    location: "Salt Lake & New Town",
    time: "8 min ago",
    level: "Critical",
    type: "Rainfall",
    icon: <FaCloudRain />,
  },
  {
    id: 2,
    title: "Flash Flood Risk",
    description:
      "Rapid water-level rise detected in monitored drainage channels.",
    location: "East Kolkata Wetlands",
    time: "21 min ago",
    level: "High",
    type: "Flood",
    icon: <FaWater />,
  },
  {
    id: 3,
    title: "Severe Wind Activity",
    description:
      "Strong wind activity detected with potential infrastructure impact.",
    location: "North Kolkata",
    time: "34 min ago",
    level: "High",
    type: "Storm",
    icon: <FaWind />,
  },
  {
    id: 4,
    title: "Localized Rainfall",
    description:
      "Moderate rainfall detected with limited disruption expected.",
    location: "Central Kolkata",
    time: "48 min ago",
    level: "Moderate",
    type: "Rainfall",
    icon: <FaCloudRain />,
  },
  {
    id: 5,
    title: "Water Level Stabilized",
    description:
      "Water levels have returned to normal operating thresholds.",
    location: "South Kolkata",
    time: "1 hr ago",
    level: "Resolved",
    type: "Flood",
    icon: <FaCheckCircle />,
  },
];

function Alerts() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filteredAlerts = useMemo(() => {
    if (filter === "All") return alertsData;

    return alertsData.filter(
      (alert) => alert.level === filter
    );
  }, [filter]);

  return (
    <div className="alerts-page">
      {/* HEADER */}
      <div className="alerts-header">
        <div>
          <div className="alerts-eyebrow">
            <FaBell />
            REAL-TIME INCIDENT MANAGEMENT
          </div>

          <h1>Alert Center</h1>

          <p>
            Monitor, prioritize and respond to weather-related
            disaster alerts across the monitored region.
          </p>
        </div>

        <div className="alert-system-status">
          <span></span>
          Alert System Active
        </div>
      </div>

      {/* SUMMARY */}
      <div className="alert-summary">
        <div className="alert-summary-card critical">
          <div>
            <span>Critical</span>
            <strong>01</strong>
          </div>
          <FaExclamationTriangle />
        </div>

        <div className="alert-summary-card high">
          <div>
            <span>High Risk</span>
            <strong>02</strong>
          </div>
          <FaBell />
        </div>

        <div className="alert-summary-card moderate">
          <div>
            <span>Moderate</span>
            <strong>01</strong>
          </div>
          <FaCloudRain />
        </div>

        <div className="alert-summary-card resolved">
          <div>
            <span>Resolved</span>
            <strong>12</strong>
          </div>
          <FaCheckCircle />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="alerts-layout">
        <section className="alerts-main-card">
          <div className="alerts-card-header">
            <div>
              <span className="alerts-label">LIVE FEED</span>
              <h2>Active Alerts</h2>
            </div>

            <div className="alert-filter">
              <FaFilter />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All Alerts</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>

          <div className="alerts-list">
            {filteredAlerts.map((alert) => (
              <div
                className={`alert-item ${alert.level.toLowerCase()}`}
                key={alert.id}
              >
                <div className="alert-type-icon">
                  {alert.icon}
                </div>

                <div className="alert-item-content">
                  <div className="alert-item-top">
                    <div>
                      <span
                        className={`alert-level ${alert.level.toLowerCase()}`}
                      >
                        {alert.level}
                      </span>

                      <h3>{alert.title}</h3>
                    </div>

                    <span className="alert-time">
                      <FaClock />
                      {alert.time}
                    </span>
                  </div>

                  <p>{alert.description}</p>

                  <div className="alert-item-footer">
                    <span>
                      <FaMapMarkerAlt />
                      {alert.location}
                    </span>

                    <span className="alert-category">
                      {alert.type}
                    </span>

                    {alert.level !== "Resolved" && (
                      <button
                        onClick={() => navigate("/analysis")}
                      >
                        Analyze
                        <FaArrowRight />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI SIDEBAR */}
        <aside className="alerts-ai-card">
          <div className="alerts-ai-icon">
            <FaBrain />
          </div>

          <span className="alerts-label">AI PRIORITIZATION</span>

          <h2>Smart Alert Intelligence</h2>

          <p>
            The AI engine continuously evaluates incoming
            weather signals and prioritizes alerts based on
            severity, location and predicted impact.
          </p>

          <div className="ai-priority-score">
            <div>
              <span>Current threat level</span>
              <strong>High</strong>
            </div>

            <div className="priority-meter">
              <div style={{ width: "78%" }}></div>
            </div>

            <div className="priority-labels">
              <span>Low</span>
              <span>Critical</span>
            </div>
          </div>

          <div className="ai-alert-insights">
            <div>
              <strong>03</strong>
              <span>High priority events</span>
            </div>

            <div>
              <strong>86%</strong>
              <span>Prediction confidence</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Automated monitoring</span>
            </div>
          </div>

          <button
            className="alerts-ai-button"
            onClick={() => navigate("/analysis")}
          >
            Open AI Risk Analysis
            <FaArrowRight />
          </button>
        </aside>
      </div>

      {/* RESPONSE PANEL */}
      <section className="response-panel">
        <div className="response-icon">
          <FaExclamationTriangle />
        </div>

        <div>
          <span>RESPONSE RECOMMENDATION</span>

          <h2>Prepare emergency response teams</h2>

          <p>
            Based on current rainfall intensity and flood
            probability, field teams should remain on standby
            in high-risk zones.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
        >
          Open Dashboard
          <FaArrowRight />
        </button>
      </section>
    </div>
  );
}

export default Alerts;