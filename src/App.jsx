import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  Popup,
  useMap,
} from "react-leaflet";
import {
  FaCloudShowersHeavy,
  FaBolt,
  FaWater,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "leaflet/dist/leaflet.css";
import "./App.css";

const DEFAULT_CENTER = [22.5726, 88.3639]; // Kolkata

function MapController({ location }) {
  const map = useMap();

  React.useEffect(() => {
    if (location) {
      map.flyTo(location, 10, {
        duration: 1.2,
      });
    }
  }, [location, map]);

  return null;
}

function RiskMap() {
  const [selectedLocation, setSelectedLocation] =
    useState(DEFAULT_CENTER);

  const riskZones = [
    {
      id: 1,
      position: [22.62, 88.42],
      type: "Thunderstorm",
      risk: "HIGH",
      probability: 82,
      radius: 9000,
    },
    {
      id: 2,
      position: [22.48, 88.31],
      type: "Cloudburst",
      risk: "MEDIUM",
      probability: 61,
      radius: 7000,
    },
    {
      id: 3,
      position: [22.70, 88.30],
      type: "Flash Flood",
      risk: "HIGH",
      probability: 76,
      radius: 8000,
    },
  ];

  return (
    <div className="map-wrapper">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={9}
        scrollWheelZoom={true}
        className="risk-map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController location={selectedLocation} />

        {riskZones.map((zone) => (
          <Circle
            key={zone.id}
            center={zone.position}
            radius={zone.radius}
            pathOptions={{
              color:
                zone.risk === "HIGH"
                  ? "#dc2626"
                  : "#f59e0b",
              fillColor:
                zone.risk === "HIGH"
                  ? "#ef4444"
                  : "#fbbf24",
              fillOpacity: 0.28,
              weight: 2,
            }}
          >
            <Popup>
              <div className="popup-content">
                <strong>{zone.type}</strong>

                <p>
                  Risk Level:{" "}
                  <b>{zone.risk}</b>
                </p>

                <p>
                  Probability:{" "}
                  <b>{zone.probability}%</b>
                </p>

                <p>
                  Forecast Window:{" "}
                  <b>2–6 hours</b>
                </p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>

      <div className="map-legend">
        <h4>Risk Level</h4>

        <div>
          <span className="legend high"></span>
          High Risk
        </div>

        <div>
          <span className="legend medium"></span>
          Medium Risk
        </div>

        <div>
          <span className="legend low"></span>
          Low Risk
        </div>
      </div>
    </div>
  );
}

function Auth({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    if (isSignup && !form.name) {
      setError("Please enter your name.");
      return;
    }

    const user = {
      name: form.name || "Disaster Management User",
      email: form.email,
    };

    localStorage.setItem(
      "meghdristi_user",
      JSON.stringify(user)
    );

    onLogin(user);
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="brand-icon">M</div>
          <span>MEGHDRISTI</span>
        </div>

        <div className="auth-intro">
          <p className="eyebrow">
            AI-POWERED WEATHER INTELLIGENCE
          </p>

          <h1>
            Predict earlier.
            <br />
            Protect faster.
          </h1>

          <p>
            Hyper-local early warning for thunderstorms,
            cloudbursts and flash floods with a 2–6 hour
            actionable prediction window.
          </p>

          <div className="auth-features">
            <div>
              <FaBolt />
              <span>Severe Weather Nowcasting</span>
            </div>

            <div>
              <FaWater />
              <span>Flash Flood Risk Prediction</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Hyper-local Risk Mapping</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <form className="auth-card" onSubmit={handleSubmit}>
          <div className="mobile-brand">
            <div className="brand-icon">M</div>
            <span>MEGHDRISTI</span>
          </div>

          <h2>
            {isSignup
              ? "Create an account"
              : "Welcome back"}
          </h2>

          <p className="auth-subtitle">
            {isSignup
              ? "Create your MEGHDRISTI dashboard account."
              : "Sign in to access the weather intelligence dashboard."}
          </p>

          {isSignup && (
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="official@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <button className="primary-btn" type="submit">
            {isSignup ? "Create Account" : "Sign In"}
          </button>

          <div className="auth-switch">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup);
                setError("");
              }}
            >
              {isSignup ? "Sign In" : "Create Account"}
            </button>
          </div>

          <div className="demo-note">
            Prototype authentication — account data is stored
            locally for demonstration.
          </div>
        </form>
      </div>
    </div>
  );
}

function Dashboard({ user, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">M</div>
          <div>
            <strong>MEGHDRISTI</strong>
            <small>Weather Intelligence</small>
          </div>

          <button
            className="close-sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="sidebar-section">
          <p>MONITORING</p>

          <button className="sidebar-link active">
            <FaMapMarkerAlt />
            Risk Dashboard
          </button>

          <button className="sidebar-link">
            <FaBolt />
            Severe Storms
          </button>

          <button className="sidebar-link">
            <FaCloudShowersHeavy />
            Cloudburst
          </button>

          <button className="sidebar-link">
            <FaWater />
            Flash Flood
          </button>
        </div>

        <div className="sidebar-bottom">
          <div className="user-box">
            <div className="avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>{user.name}</strong>
              <small>{user.email}</small>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={onLogout}
          >
            <FaSignOutAlt />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>

          <div>
            <p className="topbar-label">
              REAL-TIME WEATHER INTELLIGENCE
            </p>

            <h1>Risk Monitoring Dashboard</h1>
          </div>

          <div className="system-status">
            <span></span>
            System Operational
          </div>
        </header>

        <section className="dashboard-content">
          <div className="alert-banner">
            <FaExclamationTriangle />

            <div>
              <strong>Active Weather Alert</strong>

              <p>
                Elevated thunderstorm activity detected.
                Monitoring period: next 2–6 hours.
              </p>
            </div>

            <span className="alert-time">
              Updated 2 min ago
            </span>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon storm">
                <FaBolt />
              </div>

              <div>
                <span>Thunderstorm Risk</span>
                <strong>82%</strong>
                <small>HIGH</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon cloud">
                <FaCloudShowersHeavy />
              </div>

              <div>
                <span>Cloudburst Risk</span>
                <strong>61%</strong>
                <small>MEDIUM</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon flood">
                <FaWater />
              </div>

              <div>
                <span>Flash Flood Risk</span>
                <strong>76%</strong>
                <small>HIGH</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Prediction Window</span>
                <strong>2–6h</strong>
                <small>ACTIONABLE</small>
              </div>
            </div>
          </div>

          <div className="content-grid">
            <div className="map-card">
              <div className="card-header">
                <div>
                  <h2>Hyper-local Risk Map</h2>
                  <p>
                    Real-time multi-hazard probability
                  </p>
                </div>

                <div className="live-indicator">
                  <span></span>
                  LIVE
                </div>
              </div>

              <RiskMap />
            </div>

            <div className="side-panel">
              <div className="panel-card">
                <h3>AI Risk Analysis</h3>

                <div className="analysis-item">
                  <span>Integrated Water Vapor</span>
                  <strong>↑ 24%</strong>
                </div>

                <div className="analysis-item">
                  <span>CAPE</span>
                  <strong>↑ High</strong>
                </div>

                <div className="analysis-item">
                  <span>Cloud Top Temperature</span>
                  <strong>↓ Rapid</strong>
                </div>

                <div className="analysis-item">
                  <span>Wind Convergence</span>
                  <strong>↑ Strong</strong>
                </div>

                <div className="analysis-item">
                  <span>Terrain Risk</span>
                  <strong>Elevated</strong>
                </div>
              </div>

              <div className="panel-card">
                <h3>Recent Alerts</h3>

                <div className="recent-alert">
                  <span className="dot red"></span>
                  <div>
                    <strong>Thunderstorm</strong>
                    <small>North Kolkata · 8 min ago</small>
                  </div>
                </div>

                <div className="recent-alert">
                  <span className="dot orange"></span>
                  <div>
                    <strong>Cloudburst</strong>
                    <small>South Kolkata · 16 min ago</small>
                  </div>
                </div>

                <div className="recent-alert">
                  <span className="dot red"></span>
                  <div>
                    <strong>Flash Flood</strong>
                    <small>Hooghly · 24 min ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xai-card">
            <div>
              <span className="xai-label">
                EXPLAINABLE AI
              </span>

              <h2>Why is the system predicting high risk?</h2>

              <p>
                MEGHDRISTI detected rapidly increasing moisture,
                high atmospheric instability, strong low-level
                convergence and rapid cloud-top cooling.
                Combined with local terrain characteristics,
                these signals indicate an elevated probability
                of severe weather.
              </p>
            </div>

            <div className="xai-score">
              <strong>82%</strong>
              <span>Model Confidence</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem("meghdristi_user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("meghdristi_user");
    setUser(null);
  };

  if (!user) {
    return <Auth onLogin={setUser} />;
  }

  return (
    <Dashboard
      user={user}
      onLogout={handleLogout}
    />
  );
}

export default App;