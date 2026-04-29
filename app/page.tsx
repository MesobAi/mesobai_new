import React from "react";
import { Navbar } from "@/components/bedebo/Navbar";
import { Hero } from "@/components/bedebo/Hero";
import { ProblemSolution } from "@/components/bedebo/ProblemSolution";
import { TrustSecurity } from "@/components/bedebo/TrustSecurity";
import { SecondaryMarket } from "@/components/bedebo/SecondaryMarket";
import { Waitlist } from "@/components/bedebo/Waitlist";
import { Footer } from "@/components/bedebo/Footer";

export default function LandingPage() {
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
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <Hero />
        <ProblemSolution />
        <TrustSecurity />
        <SecondaryMarket />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
