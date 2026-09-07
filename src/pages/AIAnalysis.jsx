import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBrain,
  FaChartLine,
  FaCloudRain,
  FaExclamationTriangle,
  FaLightbulb,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaThermometerHalf,
  FaWater,
  FaWind,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "./AIAnalysis.css";

const riskFactors = [
  {
    name: "Heavy Rainfall",
    value: 86,
    status: "Critical",
    icon: <FaCloudRain />,
  },
  {
    name: "Water Level",
    value: 76,
    status: "High",
    icon: <FaWater />,
  },
  {
    name: "Wind Activity",
    value: 48,
    status: "Moderate",
    icon: <FaWind />,
  },
  {
    name: "Temperature",
    value: 64,
    status: "Moderate",
    icon: <FaThermometerHalf />,
  },
];

const forecast = [
  { time: "Now", value: 72 },
  { time: "+2h", value: 79 },
  { time: "+4h", value: 84 },
  { time: "+6h", value: 76 },
];

function AIAnalysis() {
  const navigate = useNavigate();

  return (
    <div className="ai-analysis-page">
      {/* HEADER */}
      <div className="ai-analysis-header">
        <div>
          <div className="ai-analysis-eyebrow">
            <FaBrain />
            ARTIFICIAL INTELLIGENCE ENGINE
          </div>

          <h1>AI Risk Analysis</h1>

          <p>
            Predictive disaster intelligence combining weather
            signals, environmental indicators and risk models.
          </p>
        </div>

        <div className="ai-engine-status">
          <span></span>
          Model Active
        </div>
      </div>

      {/* MODEL INFO */}
      <div className="model-strip">
        <div>
          <FaBrain />

          <div>
            <span>MODEL</span>
            <strong>MEGHDRISTI Risk Engine v2.4</strong>
          </div>
        </div>

        <div>
          <FaMapMarkerAlt />

          <div>
            <span>REGION</span>
            <strong>Kolkata Metropolitan Area</strong>
          </div>
        </div>

        <div>
          <FaChartLine />

          <div>
            <span>CONFIDENCE</span>
            <strong>91.4%</strong>
          </div>
        </div>

        <div>
          <FaCheckCircle />

          <div>
            <span>LAST UPDATED</span>
            <strong>Just now</strong>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="ai-main-grid">
        {/* OVERALL SCORE */}
        <section className="ai-card overall-risk-card">
          <div className="ai-card-header">
            <div>
              <span>OVERALL ASSESSMENT</span>
              <h2>Current Disaster Risk</h2>
            </div>

            <span className="prediction-badge">
              AI Prediction
            </span>
          </div>

          <div className="overall-risk-content">
            <div className="large-risk-circle">
              <div>
                <strong>72</strong>
                <span>/100</span>
              </div>
            </div>

            <div className="overall-risk-info">
              <span className="risk-level">HIGH RISK</span>

              <h3>
                Elevated disaster probability detected
              </h3>

              <p>
                Current environmental conditions indicate an
                increased probability of localized flooding and
                extreme rainfall events.
              </p>

              <div className="confidence-row">
                <span>Prediction confidence</span>
                <strong>91.4%</strong>
              </div>

              <div className="confidence-track">
                <div style={{ width: "91.4%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* AI EXPLANATION */}
        <section className="ai-card explanation-card">
          <div className="ai-card-header">
            <div>
              <span>AI EXPLANATION</span>
              <h2>Why is risk high?</h2>
            </div>

            <FaLightbulb className="header-lightbulb" />
          </div>

          <div className="explanation-item">
            <div className="explanation-number">01</div>

            <div>
              <strong>Rainfall intensity increasing</strong>
              <p>
                Rainfall levels are above the normal threshold
                and are expected to remain elevated.
              </p>
            </div>
          </div>

          <div className="explanation-item">
            <div className="explanation-number">02</div>

            <div>
              <strong>Water levels approaching threshold</strong>
              <p>
                Rising water levels increase the probability of
                rapid localized flooding.
              </p>
            </div>
          </div>

          <div className="explanation-item">
            <div className="explanation-number">03</div>

            <div>
              <strong>Multiple indicators aligned</strong>
              <p>
                Independent environmental signals are
                simultaneously indicating elevated risk.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* RISK FACTORS */}
      <section className="ai-card risk-factors-card">
        <div className="ai-card-header">
          <div>
            <span>MODEL INPUTS</span>
            <h2>Risk Factors</h2>
          </div>

          <span className="factor-info">
            4 active indicators
          </span>
        </div>

        <div className="risk-factor-grid">
          {riskFactors.map((factor) => (
            <div className="risk-factor-item" key={factor.name}>
              <div className="factor-top">
                <div className="factor-name">
                  <span>{factor.icon}</span>
                  <strong>{factor.name}</strong>
                </div>

                <span
                  className={`factor-status ${factor.status.toLowerCase()}`}
                >
                  {factor.status}
                </span>
              </div>

              <div className="factor-value">
                <strong>{factor.value}%</strong>
                <span>impact</span>
              </div>

              <div className="factor-track">
                <div
                  className={factor.status.toLowerCase()}
                  style={{
                    width: `${factor.value}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORECAST */}
      <div className="ai-lower-grid">
        <section className="ai-card forecast-card">
          <div className="ai-card-header">
            <div>
              <span>PREDICTIVE TIMELINE</span>
              <h2>Next 6 Hours</h2>
            </div>

            <FaChartLine className="forecast-icon" />
          </div>

          <div className="forecast-timeline">
            {forecast.map((item, index) => (
              <div
                className={`forecast-point ${
                  index === 2 ? "peak-point" : ""
                }`}
                key={item.time}
              >
                <div className="forecast-score">
                  {item.value}
                </div>

                <div className="forecast-line">
                  <span></span>
                </div>

                <strong>{item.time}</strong>

                <small>
                  {item.value >= 80
                    ? "Very High"
                    : item.value >= 70
                    ? "High"
                    : "Moderate"}
                </small>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="ai-card recommendations-card">
          <div className="ai-card-header">
            <div>
              <span>DECISION SUPPORT</span>
              <h2>AI Recommendations</h2>
            </div>

            <FaShieldAlt className="shield-icon" />
          </div>

          <div className="recommendation">
            <span>01</span>
            <div>
              <strong>Prepare response teams</strong>
              <p>
                Keep emergency teams on standby in high-risk
                locations.
              </p>
            </div>
          </div>

          <div className="recommendation">
            <span>02</span>
            <div>
              <strong>Monitor drainage systems</strong>
              <p>
                Closely observe water levels in vulnerable
                drainage channels.
              </p>
            </div>
          </div>

          <div className="recommendation">
            <span>03</span>
            <div>
              <strong>Consider early warning</strong>
              <p>
                Issue precautionary notifications if risk
                continues to rise.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* WARNING */}
      <div className="ai-final-warning">
        <div className="final-warning-icon">
          <FaExclamationTriangle />
        </div>

        <div>
          <strong>AI-generated decision support</strong>

          <p>
            Predictions are generated from available weather
            and environmental indicators. Human authorities
            should validate conditions before taking emergency
            action.
          </p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="ai-page-actions">
        <button
          className="ai-secondary-button"
          onClick={() => navigate("/dashboard")}
        >
          <FaArrowLeft />
          Back to Dashboard
        </button>

        <button
          className="ai-primary-button"
          onClick={() => navigate("/alerts")}
        >
          Open Alert Center
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default AIAnalysis;