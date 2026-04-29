"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function TrustSecurity() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.trust.feat1Title,
      description: t.trust.feat1Desc,
    },
    {
      title: t.trust.feat2Title,
      description: t.trust.feat2Desc,
    },
    {
      title: t.trust.feat3Title,
      description: t.trust.feat3Desc,
    },
  ];

  return (
    <section style={{ padding: "100px 0", borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "11px",
            color: "#888",
            marginBottom: "15px",
            fontWeight: "700",
            letterSpacing: "0.15em",
          }}
        >
          {t.trust.label}
        </div>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            letterSpacing: "-0.01em",
          }}
        >
          {t.trust.title}
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              padding: "40px",
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              transition: "all 0.2s ease",
            }}
          >
            <h3
              style={{
                fontWeight: "700",
                marginBottom: "16px",
                fontSize: "18px",
                color: "#000",
                borderLeft: "4px solid #10b981",
                paddingLeft: "15px",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                color: "#555",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
