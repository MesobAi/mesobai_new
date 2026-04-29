"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function Waitlist() {
  const { t } = useLanguage();
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ padding: "100px 0" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
          backgroundColor: "#09090b",
          color: "#fff",
          padding: "60px",
          borderRadius: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "16px",
            letterSpacing: "-0.03em",
          }}
        >
          {t.waitlist.title}
        </h2>
        <p
          style={{
            color: "#a1a1aa",
            marginBottom: "40px",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          {t.waitlist.desc}
        </p>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{
              display: "flex",
              gap: "8px",
              background: "#18181b",
              padding: "6px",
              borderRadius: "10px",
              border: "1px solid #27272a",
            }}
          >
            <input
              type="text"
              placeholder={t.waitlist.placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{
                flex: 1,
                padding: "12px",
                border: "none",
                fontSize: "14px",
                outline: "none",
                backgroundColor: "transparent",
                color: "#fff",
              }}
              required
            />
            <button
              type="submit"
              style={{
                background: "#10b981",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              {t.waitlist.button}
            </button>
          </form>
        ) : (
          <div
            style={{ color: "#10b981", fontSize: "16px", fontWeight: "600" }}
          >
            {t.waitlist.success}
          </div>
        )}
      </div>
    </section>
  );
}
