import React from "react";
import {
  FaBolt,
  FaCloudRain,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowRight,
  FaWind,
  FaTemperatureHigh,
  FaTint,
  FaBrain,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  const alerts = [
    {
      title: "Heavy Rainfall Detected",
      location: "Kolkata Region",
      time: "12 min ago",
      level: "HIGH",
      type: "rain",
    },
    {
      title: "Strong Wind Activity",
      location: "North Bengal",
      time: "28 min ago",
      level: "MEDIUM",
      type: "wind",
    },
    {
      title: "Flood Risk Increasing",
      location: "South Bengal",
      time: "41 min ago",
      level: "HIGH",
      type: "flood",
    },
  ];

  return (
    <main className="dashboard-page">

      {/* HEADER */}
      <section className="dashboard-heading">
        <div>
          <span className="dashboard-eyebrow">
            LIVE MONITORING
          </span>

          <h2>Weather Risk Overview</h2>

          <p>
            Real-time disaster intelligence and regional
            weather monitoring.
          </p>
        </div>

        <div className="dashboard-live">
          <span className="live-dot"></span>
          Live Data
        </div>
      </section>

      {/* ALERT */}
      <section className="dashboard-alert">
        <div className="dashboard-alert-icon">
          <FaExclamationTriangle />
        </div>

        <div className="dashboard-alert-content">
          <strong>High Risk Detected</strong>

          <p>
            Heavy rainfall may increase flood risk across
            monitored regions.
          </p>
        </div>

        <Link
          to="/alerts"
          className="dashboard-alert-btn"
        >
          View Alerts
          <FaArrowRight />
        </Link>
      </section>

      {/* STATS */}
      <section className="dashboard-stats">

        <div className="dashboard-stat-card">
          <div className="stat-card-top">
            <span>Active Alerts</span>
            <div className="stat-icon danger">
              <FaExclamationTriangle />
            </div>
          </div>

          <strong>08</strong>

          <div className="stat-footer danger-text">
            <FaArrowUp />
            12% from yesterday
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-card-top">
            <span>Storm Risk</span>
            <div className="stat-icon orange">
              <FaBolt />
            </div>
          </div>

          <strong>64%</strong>

          <div className="stat-footer orange-text">
            Moderate to High
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-card-top">
            <span>Flood Risk</span>
            <div className="stat-icon blue">
              <FaCloudRain />
            </div>
          </div>

          <strong>48%</strong>

          <div className="stat-footer blue-text">
            Monitoring
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-card-top">
            <span>Regions Monitored</span>
            <div className="stat-icon green">
              <FaMapMarkerAlt />
            </div>
          </div>

          <strong>24</strong>

          <div className="stat-footer green-text">
            <FaCheckCircle />
            All systems active
          </div>
        </div>

      </section>

      {/* MAIN GRID */}
      <section className="dashboard-main-grid">

        {/* MAP */}
        <div className="dashboard-card risk-map-card">

          <div className="card-header">
            <div>
              <span className="card-label">
                REGIONAL MONITORING
              </span>

              <h3>Disaster Risk Map</h3>
            </div>

            <span className="map-live">
              <span></span>
              LIVE
            </span>
          </div>

          <div className="risk-map">

            <div className="map-grid"></div>

            <div className="map-region region-one">
              <span>Kolkata</span>
            </div>

            <div className="map-region region-two">
              <span>North Bengal</span>
            </div>

            <div className="map-region region-three">
              <span>South Bengal</span>
            </div>

            <div className="map-marker marker-one">
              <span></span>
            </div>

            <div className="map-marker marker-two">
              <span></span>
            </div>

            <div className="map-marker marker-three">
              <span></span>
            </div>

            <div className="map-center">
              <FaMapMarkerAlt />
              <span>West Bengal</span>
            </div>

          </div>

        </div>

        {/* AI ASSESSMENT */}
        <div className="dashboard-card ai-card">

          <div className="card-header">
            <div>
              <span className="card-label">
                ARTIFICIAL INTELLIGENCE
              </span>

              <h3>AI Risk Assessment</h3>
            </div>

            <div className="ai-icon">
              <FaBrain />
            </div>
          </div>

          <div className="ai-score">
            <div className="score-circle">
              <strong>72</strong>
              <span>/100</span>
            </div>

            <div>
              <strong>High Risk</strong>
              <p>
                Current conditions require attention.
              </p>
            </div>
          </div>

          <div className="risk-factor">
            <div>
              <span>Rainfall Intensity</span>
              <strong>82%</strong>
            </div>

            <div className="progress">
              <span style={{ width: "82%" }}></span>
            </div>
          </div>

          <div className="risk-factor">
            <div>
              <span>Wind Activity</span>
              <strong>64%</strong>
            </div>

            <div className="progress">
              <span style={{ width: "64%" }}></span>
            </div>
          </div>

          <div className="risk-factor">
            <div>
              <span>Soil Saturation</span>
              <strong>71%</strong>
            </div>

            <div className="progress">
              <span style={{ width: "71%" }}></span>
            </div>
          </div>

          <Link
            to="/analysis"
            className="full-width-btn"
          >
            Open AI Analysis
            <FaArrowRight />
          </Link>

        </div>

      </section>

      {/* LOWER GRID */}
      <section className="dashboard-lower-grid">

        {/* WEATHER */}
        <div className="dashboard-card weather-card">

          <div className="card-header">
            <div>
              <span className="card-label">
                CURRENT CONDITIONS
              </span>

              <h3>Kolkata Region</h3>
            </div>

            <FaMapMarkerAlt className="header-icon" />
          </div>

          <div className="weather-main">
            <FaCloudRain />

            <div>
              <strong>29°C</strong>
              <span>Heavy Rain</span>
            </div>
          </div>

          <div className="weather-details">

            <div>
              <FaTemperatureHigh />
              <span>Feels like</span>
              <strong>31°C</strong>
            </div>

            <div>
              <FaTint />
              <span>Humidity</span>
              <strong>84%</strong>
            </div>

            <div>
              <FaWind />
              <span>Wind</span>
              <strong>24 km/h</strong>
            </div>

          </div>

        </div>

        {/* ALERTS */}
        <div className="dashboard-card recent-alerts">

          <div className="card-header">
            <div>
              <span className="card-label">
                RECENT ACTIVITY
              </span>

              <h3>Latest Alerts</h3>
            </div>

            <Link to="/alerts">
              View all
            </Link>
          </div>

          <div className="alert-list">

            {alerts.map((alert, index) => (
              <div
                className="recent-alert"
                key={index}
              >
                <div className={`recent-alert-icon ${alert.type}`}>
                  {alert.type === "rain" && <FaCloudRain />}
                  {alert.type === "wind" && <FaWind />}
                  {alert.type === "flood" && <FaExclamationTriangle />}
                </div>

                <div className="recent-alert-info">
                  <strong>{alert.title}</strong>

                  <span>
                    {alert.location}
                  </span>
                </div>

                <div className="recent-alert-time">
                  <strong>{alert.level}</strong>
                  <span>
                    <FaClock />
                    {alert.time}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;