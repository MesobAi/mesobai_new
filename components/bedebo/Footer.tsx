"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        padding: "80px 60px",
        backgroundColor: "#fff",
        borderTop: "1px solid #f4f4f5",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "80px",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "20px",
              letterSpacing: "-0.04em",
              color: "#09090b",
              marginBottom: "20px",
            }}
          >
            Bedebo<span style={{ color: "#10b981" }}>.</span>
          </div>
          <p
            style={{
              color: "#71717a",
              fontSize: "14px",
              lineHeight: "1.6",
              maxWidth: "300px",
            }}
          >
            {t.footer.desc}
          </p>
        </div>
        <div>
          <div
            style={{
              fontWeight: "600",
              marginBottom: "20px",
              fontSize: "12px",
              color: "#09090b",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {t.footer.platform}
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "14px",
              color: "#71717a",
              lineHeight: "2.5",
            }}
          >
            <li style={{ cursor: "pointer" }}>Marketplace</li>
            <li style={{ cursor: "pointer" }}>How it Works</li>
            <li style={{ cursor: "pointer" }}>Security</li>
          </ul>
        </div>
        <div>
          <div
            style={{
              fontWeight: "600",
              marginBottom: "20px",
              fontSize: "12px",
              color: "#09090b",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {t.footer.legal}
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "14px",
              color: "#71717a",
              lineHeight: "2.5",
            }}
          >
            <li style={{ cursor: "pointer" }}>Privacy</li>
            <li style={{ cursor: "pointer" }}>Terms</li>
            <li style={{ cursor: "pointer" }}>CMA Compliance</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "60px auto 0 auto",
          paddingTop: "32px",
          borderTop: "1px solid #f4f4f5",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#a1a1aa",
        }}
      >
        <div>© 2026 Bedebo Asset Management.</div>
        <div>Addis Ababa, Ethiopia.</div>
      </div>
    </footer>
  );
}
