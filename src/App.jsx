import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import {
  FaBolt,
  FaWater,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import SevereStorms from "./pages/SevereStorms";
import Cloudburst from "./pages/Cloudburst";
import FlashFlood from "./pages/FlashFlood";
import Alerts from "./pages/Alerts";
import AIAnalysis from "./pages/AIAnalysis";


/* =========================================
   AUTHENTICATION SCREEN
========================================= */

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = formData.email.trim();
    const password = formData.password.trim();
    const name = formData.name.trim();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!isLogin && !name) {
      setError("Please enter your name.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("meghdristi_user") || "null"
    );

    if (isLogin) {
      /*
       * Prototype authentication.
       * If a user already exists, validate the stored
       * credentials. Otherwise allow demo login.
       */

      if (
        existingUser &&
        existingUser.email === email &&
        existingUser.password &&
        existingUser.password !== password
      ) {
        setError("Incorrect password.");
        return;
      }

      const user = {
        name: existingUser?.name || "MEGHDRISTI User",
        email,
      };

      localStorage.setItem(
        "meghdristi_user",
        JSON.stringify(user)
      );

      onLogin(user);
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "meghdristi_user",
      JSON.stringify(user)
    );

    onLogin({
      name,
      email,
    });
  };

  return (
    <div className="auth-page">

      {/* Left Section */}

      <div className="auth-left">

        <div className="auth-brand">
          <div className="brand-icon">
            <FaBolt />
          </div>

          <div>
            <strong>MEGHDRISTI</strong>
            &nbsp;
            <small>WEATHER INTELLIGENCE</small>
          </div>
        </div>

        <div className="auth-intro">

          <span className="eyebrow">
            AI-POWERED DISASTER INTELLIGENCE
          </span>

          <h1>
            Predict risk.
            <br />
            Protect lives.
          </h1>

          <p>
            Monitor extreme weather events, identify emerging
            disaster risks, and make faster decisions with
            intelligent weather analytics.
          </p>

          <div className="auth-features">

            <div className="auth-feature">
              <FaBolt />

              <div>
                <strong>Real-Time Monitoring</strong>
                <span>
                  Track severe weather conditions as they happen.
                </span>
              </div>
            </div>

            <div className="auth-feature">
              <FaWater />

              <div>
                <strong>Flood Risk Intelligence</strong>
                <span>
                  Identify areas vulnerable to flash floods.
                </span>
              </div>
            </div>

            <div className="auth-feature">
              <FaMapMarkerAlt />

              <div>
                <strong>Regional Alerts</strong>
                <span>
                  Get location-based disaster risk information.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* Right Section */}

      <div className="auth-right">

        <div className="auth-card">

          <div className="mobile-brand">
            <div className="brand-icon">
              <FaBolt />
            </div>

            <strong>MEGHDRISTI</strong>
          </div>

          <h2>
            {isLogin
              ? "Welcome back"
              : "Create your account"}
          </h2>

          <p className="auth-subtitle">
            {isLogin
              ? "Sign in to access your disaster monitoring dashboard."
              : "Create an account to access weather intelligence."}
          </p>


          <form onSubmit={handleSubmit}>

            {!isLogin && (
              <div className="input-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}


            <div className="input-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>


            <div className="input-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>


            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}


            <button
              type="submit"
              className="primary-btn"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>

          </form>


          <div className="auth-switch">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsLogin((previous) => !previous);
                setError("");
              }}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>


          <div className="demo-note">
            Prototype authentication — your session is
            stored locally for demonstration.
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================
   DASHBOARD LAYOUT
========================================= */

function DashboardLayout({ user, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const openSidebar = () => {
      setMobileOpen(true);
    };

    window.addEventListener(
      "open-meghdristi-sidebar",
      openSidebar
    );

    return () => {
      window.removeEventListener(
        "open-meghdristi-sidebar",
        openSidebar
      );
    };
  }, []);

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <div className="dashboard">

      <Sidebar
        user={user}
        onLogout={onLogout}
        mobileOpen={mobileOpen}
        closeMobile={closeMobileSidebar}
      />

      <div className="main-content">

        <Topbar />

        <Routes>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/storms"
            element={<SevereStorms />}
          />

          <Route
            path="/cloudburst"
            element={<Cloudburst />}
          />

          <Route
            path="/flood"
            element={<FlashFlood />}
          />

          <Route
            path="/alerts"
            element={<Alerts />}
          />

          <Route
            path="/analysis"
            element={<AIAnalysis />}
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

        </Routes>

      </div>

    </div>
  );
}


/* =========================================
   MAIN APP
========================================= */

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(
        "meghdristi_user"
      );

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);

        if (parsedUser?.email) {
          setUser(parsedUser);
        }
      }
    } catch (error) {
      console.error(
        "Failed to restore user session:",
        error
      );

      localStorage.removeItem(
        "meghdristi_user"
      );
    } finally {
      setLoading(false);
    }
  }, []);


  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };


  const handleLogout = () => {
    localStorage.removeItem(
      "meghdristi_user"
    );

    setUser(null);
  };


  if (loading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner" />

        <p>
          Loading MEGHDRISTI...
        </p>
      </div>
    );
  }


  return (
    <BrowserRouter>

      {user ? (
        <DashboardLayout
          user={user}
          onLogout={handleLogout}
        />
      ) : (
        <Routes>
          <Route
            path="*"
            element={
              <Auth
                onLogin={handleLogin}
              />
            }
          />
        </Routes>
      )}

    </BrowserRouter>
  );
}
export default App;