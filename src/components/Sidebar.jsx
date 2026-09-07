import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaBolt,
  FaCloudShowersHeavy,
  FaWater,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaBrain,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar({
  user,
  onLogout,
  mobileOpen,
  closeMobile,
}) {
  /* =====================================================
     SIDEBAR LINKS
  ===================================================== */

  const monitoringLinks = [
    {
      path: "/dashboard",
      label: "Risk Dashboard",
      icon: <FaMapMarkerAlt />,
    },
    {
      path: "/storms",
      label: "Severe Storms",
      icon: <FaBolt />,
    },
    {
      path: "/cloudburst",
      label: "Cloudburst",
      icon: <FaCloudShowersHeavy />,
    },
    {
      path: "/flood",
      label: "Flash Flood",
      icon: <FaWater />,
    },
  ];

  const intelligenceLinks = [
    {
      path: "/alerts",
      label: "Alert Center",
      icon: <FaExclamationTriangle />,
    },
    {
      path: "/analysis",
      label: "AI Risk Analysis",
      icon: <FaBrain />,
    },
  ];

  /* =====================================================
     NAVIGATION HANDLER
  ===================================================== */

  const handleNavigation = () => {
    /*
      Close the mobile sidebar after clicking
      any navigation link.
    */

    if (closeMobile) {
      closeMobile();
    }
  };

  /* =====================================================
     RENDER NAV LINK
  ===================================================== */

  const renderLink = (item) => {
    return (
      <NavLink
        key={item.path}
        to={item.path}
        onClick={handleNavigation}
        className={({ isActive }) =>
          `sidebar-link ${
            isActive ? "active" : ""
          }`
        }
      >
        <span className="sidebar-link-icon">
          {item.icon}
        </span>

        <span className="sidebar-link-label">
          {item.label}
        </span>
      </NavLink>
    );
  };

  return (
    <>
      {/* =================================================
         MOBILE OVERLAY
      ================================================= */}

      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* =================================================
         SIDEBAR
      ================================================= */}

      <aside
        className={`sidebar ${
          mobileOpen ? "sidebar-open" : ""
        }`}
      >

        {/* =================================================
           BRAND
        ================================================= */}

        <div className="sidebar-brand">

          <div className="brand-icon">
            M
          </div>

          <div className="sidebar-brand-text">

            <strong>
              MEGHDRISTI
            </strong>

            <small>
              Weather Intelligence
            </small>

          </div>

          {/* Mobile close button */}

          <button
            type="button"
            className="close-sidebar"
            onClick={closeMobile}
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>

        </div>

        {/* =================================================
           NAVIGATION
        ================================================= */}

        <nav
          className="sidebar-section"
          aria-label="Main navigation"
        >

          {/* MONITORING */}

          <p className="sidebar-section-title">
            MONITORING
          </p>

          {monitoringLinks.map(renderLink)}

          {/* INTELLIGENCE */}

          <p className="sidebar-section-title sidebar-heading">
            INTELLIGENCE
          </p>

          {intelligenceLinks.map(renderLink)}

        </nav>

        {/* =================================================
           BOTTOM USER AREA
        ================================================= */}

        <div className="sidebar-bottom">

          {/* USER */}

          <div className="user-box">

            <div className="avatar">

              {user?.name
                ? user.name
                    .charAt(0)
                    .toUpperCase()
                : "U"}

            </div>

            <div className="user-details">

              <strong>
                {user?.name ||
                  "Disaster Management User"}
              </strong>

              <small>
                {user?.email ||
                  "user@example.com"}
              </small>

            </div>

          </div>

          {/* LOGOUT */}

          <button
            type="button"
            className="logout-btn"
            onClick={onLogout}
          >

            <FaSignOutAlt />

            <span>
              Sign Out
            </span>

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;

