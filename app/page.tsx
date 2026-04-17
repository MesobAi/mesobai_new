"use client";

import React, { useState } from "react";

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call to mesobaiprojects@gmail.com
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const theme = {
    bg: isDarkMode ? "#000" : "#fff",
    text: isDarkMode ? "#fff" : "#000",
    secondaryText: isDarkMode ? "#888" : "#666",
    border: isDarkMode ? "#222" : "#e5e5e5",
    highlight: "#00ff88",
  };

  return (
    <div
      style={{
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        color: theme.text,
        backgroundColor: theme.bg,
        lineHeight: "1.5",
        fontSize: "12px",
        letterSpacing: "-0.01em",
        minHeight: "100vh",
        transition: "background-color 0.2s ease",
      }}
    >
      {/* ── Nav ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: `1px solid ${theme.border}`,
          position: "sticky",
          top: 0,
          backgroundColor: theme.bg,
          zIndex: 100,
        }}
      >
        <div style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Mesob Asset Management
        </div>
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              background: "none",
              border: `1px solid ${theme.border}`,
              fontSize: "9px",
              textTransform: "uppercase",
              padding: "2px 6px",
              cursor: "pointer",
              color: theme.text,
            }}
          >
            {isDarkMode ? "Light" : "Black"}
          </button>
          <span style={{ color: theme.secondaryText }}>አማርኛ</span>
          <span
            style={{ border: `1px solid ${theme.text}`, padding: "3px 10px" }}
          >
            Portal
          </span>
        </div>
      </nav>

      <main
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "100px",
          }}
        >
          <section>
            <div
              style={{
                color: theme.secondaryText,
                marginBottom: "20px",
                fontSize: "10px",
                textTransform: "uppercase",
              }}
            >
              Asset Fractionalization / Pilot 01
            </div>

            <h1
              style={{
                fontSize: "26px",
                fontWeight: "400",
                margin: "0 0 30px 0",
                maxWidth: "550px",
                lineHeight: "1.2",
              }}
            >
              Direct ownership of high-yield Ethiopian assets. Unlock property
              liquidity via legal SPV structures.
            </h1>

            {/* Added Section per your request */}
            <p
              style={{
                color: theme.text,
                opacity: 0.7,
                marginBottom: "40px",
                maxWidth: "480px",
              }}
            >
              Mesob facilitates the transition of physical real estate into
              liquid shares. We manage the legal formation of Special Purpose
              Vehicles (SPVs) to distribute monthly rental income to verified
              investors.
            </p>

            <div
              style={{
                border: `1px solid ${theme.border}`,
                padding: "30px",
                maxWidth: "420px",
                minHeight: "140px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {!submitted ? (
                <>
                  <div style={{ marginBottom: "15px" }}>
                    Request Investor Access
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", gap: "8px" }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      style={{
                        flex: 1,
                        padding: "10px",
                        border: `1px solid ${theme.border}`,
                        backgroundColor: "transparent",
                        color: theme.text,
                        fontSize: "12px",
                        outline: "none",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        backgroundColor: theme.text,
                        color: theme.bg,
                        border: "none",
                        padding: "10px 20px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      {loading ? "Processing..." : "Submit"}
                    </button>
                  </form>
                </>
              ) : (
                <div>
                  <div
                    style={{
                      color: theme.highlight,
                      marginBottom: "10px",
                      fontSize: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    Registration Received
                  </div>
                  <div style={{ fontSize: "14px", marginBottom: "5px" }}>
                    Verification in progress.
                  </div>
                  <div style={{ color: theme.secondaryText }}>
                    The Phase 1 prospectus will be sent to{" "}
                    <strong>{email}</strong>.
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside
            style={{
              borderLeft: `1px solid ${theme.border}`,
              paddingLeft: "40px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                color: theme.secondaryText,
                marginBottom: "25px",
                textTransform: "uppercase",
              }}
            >
              Market Performance / Yield Data
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "3px",
                height: "60px",
                marginBottom: "20px",
              }}
            >
              {[15, 25, 22, 40, 55, 48, 70, 95].map((val, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    backgroundColor: i === 7 ? theme.highlight : theme.border,
                    height: `${val}%`,
                  }}
                />
              ))}
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div
                style={{
                  borderBottom: `1px solid ${theme.border}`,
                  paddingBottom: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: theme.secondaryText }}>
                  Annual Rental Yield
                </span>
                <span>14.2%</span>
              </div>
              <div
                style={{
                  borderBottom: `1px solid ${theme.border}`,
                  paddingBottom: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: theme.secondaryText }}>
                  Capital Liquidity
                </span>
                <span>T+5 Days</span>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Startup Brief ── */}
        <section
          style={{
            marginTop: "100px",
            borderTop: `1px solid ${theme.border}`,
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "60px",
            }}
          >
            <div>
              <div
                style={{
                  color: theme.secondaryText,
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  fontSize: "10px",
                }}
              >
                01 / Our Mission
              </div>
              <div
                style={{
                  height: "40px",
                  border: `1px solid ${theme.border}`,
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                }}
              >
                <div
                  style={{
                    width: "20%",
                    height: "2px",
                    backgroundColor: theme.highlight,
                  }}
                ></div>
                <div style={{ fontSize: "8px", margin: "0 5px" }}>ASSET</div>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    borderTop: `1px dashed ${theme.border}`,
                  }}
                ></div>
                <div style={{ fontSize: "8px", margin: "0 5px" }}>
                  MESOB_SPV
                </div>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    borderTop: `1px dashed ${theme.border}`,
                  }}
                ></div>
                <div style={{ fontSize: "8px", margin: "0 5px" }}>INVESTOR</div>
              </div>
              <p style={{ margin: 0, opacity: 0.8 }}>
                Building the digital infrastructure for Ethiopia's real estate
                economy.
              </p>
            </div>

            <div>
              <div
                style={{
                  color: theme.secondaryText,
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  fontSize: "10px",
                }}
              >
                02 / Strategic Focus
              </div>
              <div
                style={{
                  height: "40px",
                  marginBottom: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <div style={{ display: "flex", width: "100%", height: "8px" }}>
                  <div
                    style={{ width: "70%", backgroundColor: theme.text }}
                  ></div>
                  <div
                    style={{
                      width: "30%",
                      backgroundColor: theme.border,
                      marginLeft: "2px",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "8px",
                    color: theme.secondaryText,
                  }}
                >
                  <span>70% HOSPITALITY</span>
                  <span>30% RETAIL</span>
                </div>
              </div>
              <p style={{ margin: 0, opacity: 0.8 }}>
                Leveraging technology to formalize informal real estate wealth.
              </p>
            </div>

            <div>
              <div
                style={{
                  color: theme.secondaryText,
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  fontSize: "10px",
                }}
              >
                03 / Operational Phase
              </div>
              <div
                style={{
                  height: "40px",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: theme.highlight,
                  }}
                ></div>
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    backgroundColor: theme.border,
                  }}
                ></div>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    border: `1px solid ${theme.border}`,
                  }}
                ></div>
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    backgroundColor: theme.border,
                  }}
                ></div>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    border: `1px solid ${theme.border}`,
                  }}
                ></div>
              </div>
              <p style={{ margin: 0, opacity: 0.8 }}>
                Phase 1 (Pilot) is active. Sourcing one flagship asset for model
                validation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          marginTop: "60px",
          padding: "30px 40px",
          borderTop: `1px solid ${theme.border}`,
          display: "flex",
          justifyContent: "space-between",
          color: theme.secondaryText,
          fontSize: "11px",
        }}
      >
        <div>© 2026 MESOB ASSET. ADDIS ABABA, ETHIOPIA.</div>
        <div>{submitted && "SYSTEM_STATUS: LOGGED"}</div>
      </footer>
    </div>
  );
}
