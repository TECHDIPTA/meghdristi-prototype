import React from "react";
import {
  FaBars,
  FaCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Topbar.css";

function Topbar() {
  const openSidebar = () => {
    window.dispatchEvent(
      new Event("open-meghdristi-sidebar")
    );
  };

  return (
    <header className="topbar">
      {/* Mobile Menu Button */}
      <div className="mobile-menu-space">
        <button
          type="button"
          className="menu-btn"
          onClick={openSidebar}
          aria-label="Open navigation menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Page Heading */}
      <div className="topbar-title">
        <p>REAL-TIME WEATHER INTELLIGENCE</p>
        <h1>Disaster Risk Monitoring</h1>
      </div>

      {/* Right Side Status */}
      <div className="topbar-right">
        <div className="location-status">
          <FaMapMarkerAlt className="location-icon" />
          <span>Kolkata Region</span>
        </div>

        <div className="system-status">
          <FaCircle />
          <span>System Operational</span>
        </div>
      </div>
    </header>
  );
}
export default Topbar;