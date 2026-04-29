"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function SecondaryMarket() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "100px 0", borderBottom: "1px solid #e5e5e5" }}>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "16px",
          padding: "80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
          >
            {t.market.title}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#aaa",
              marginBottom: "32px",
              lineHeight: "1.6",
            }}
          >
            {t.market.desc}
          </p>
          <button
            style={{
              background: "#10b981",
              color: "#fff",
              border: "none",
              padding: "14px 28px",
              cursor: "pointer",
              fontSize: "13px",
              textTransform: "uppercase",
              fontWeight: "700",
              borderRadius: "4px",
            }}
          >
            {t.market.explore}
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "24px",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              T+2
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {t.market.settlement}
            </div>
          </div>
          <div
            style={{
              padding: "24px",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              85%
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {t.market.buyback}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
