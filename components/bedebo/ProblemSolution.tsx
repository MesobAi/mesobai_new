"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function ProblemSolution() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "100px 0", borderBottom: "1px solid #e5e5e5" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
          border: "1px solid #e5e5e5",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "60px",
            backgroundColor: "#fff",
            borderRight: "1px solid #e5e5e5",
          }}
        >
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "11px",
              color: "#888",
              marginBottom: "20px",
              fontWeight: "700",
              letterSpacing: "0.1em",
            }}
          >
            01. {t.problem.challengeLabel}
          </div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            {t.problem.challengeTitle}
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              margin: 0,
              color: "#333",
            }}
          >
            {t.problem.challengeDesc}
          </p>
        </div>

        <div style={{ padding: "60px", backgroundColor: "#f9f9f9" }}>
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "11px",
              color: "#888",
              marginBottom: "20px",
              fontWeight: "700",
              letterSpacing: "0.1em",
            }}
          >
            02. {t.problem.solutionLabel}
          </div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            {t.problem.solutionTitle}
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#444",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {t.problem.solutionDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
