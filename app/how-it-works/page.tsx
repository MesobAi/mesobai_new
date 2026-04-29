"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/bedebo/Navbar";
import { Footer } from "@/components/bedebo/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const processes = [
    {
      step: "01",
      title: t.howItWorksPage.step1.title,
      desc: t.howItWorksPage.step1.desc,
      detail: t.howItWorksPage.step1.detail,
    },
    {
      step: "02",
      title: t.howItWorksPage.step2.title,
      desc: t.howItWorksPage.step2.desc,
      detail: t.howItWorksPage.step2.detail,
    },
    {
      step: "03",
      title: t.howItWorksPage.step3.title,
      desc: t.howItWorksPage.step3.desc,
      detail: t.howItWorksPage.step3.detail,
    },
    {
      step: "04",
      title: t.howItWorksPage.step4.title,
      desc: t.howItWorksPage.step4.desc,
      detail: t.howItWorksPage.step4.detail,
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
        color: "#000",
        backgroundColor: "#fff",
        lineHeight: "1.5",
        fontSize: "16px",
        letterSpacing: "-0.01em",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <main
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 40px" }}
      >
        <header style={{ textAlign: "center", marginBottom: "100px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#10b981",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            {t.howItWorksPage.label}
          </div>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "600",
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              color: "#09090b",
            }}
          >
            {t.howItWorksPage.title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#71717a",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            {t.howItWorksPage.subtitle}
          </p>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
          {processes.map((p, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr",
                gap: "80px",
                alignItems: "start",
              }}
            >
              <div style={{ position: "sticky", top: "120px" }}>
                <div
                  style={{
                    fontSize: "64px",
                    fontWeight: "700",
                    color: "#f4f4f5",
                    lineHeight: "1",
                    marginBottom: "20px",
                  }}
                >
                  {p.step}
                </div>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "600",
                    color: "#09090b",
                    marginBottom: "16px",
                  }}
                >
                  {p.title}
                </h2>
                <div
                  style={{
                    width: "40px",
                    height: "4px",
                    backgroundColor: "#10b981",
                  }}
                ></div>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#3f3f46",
                    marginBottom: "24px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  {p.desc}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#71717a",
                    lineHeight: "1.7",
                  }}
                >
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section
          style={{
            marginTop: "120px",
            padding: "80px",
            backgroundColor: "#fafafa",
            borderRadius: "24px",
            textAlign: "center",
            border: "1px solid #f1f1f1",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            {t.howItWorksPage.cta}
          </h2>
          <p
            style={{ color: "#71717a", marginBottom: "40px", fontSize: "18px" }}
          >
            {t.howItWorksPage.ctaDesc}
          </p>
          <div
            style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            <Link href="/">
              <button
                style={{
                  background: "#09090b",
                  color: "#fff",
                  border: "none",
                  padding: "14px 32px",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: "8px",
                }}
              >
                {t.howItWorksPage.browse}
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
