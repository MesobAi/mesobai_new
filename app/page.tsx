"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Building2,
  Home,
  Store,
  Landmark,
  Warehouse,
  ChevronRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Asset submitted",
    desc: "Owners submit their hotel or property. We run legal and financial checks before listing.",
  },
  {
    num: "02",
    title: "SPV created",
    desc: "A dedicated company is registered for the asset. You buy shares in that company.",
  },
  {
    num: "03",
    title: "Offer listed",
    desc: "The asset goes live with an investment memo and projected monthly income.",
  },
  {
    num: "04",
    title: "Monthly distributions",
    desc: "Rent is collected and your share of profit is sent to you every single month.",
  },
];

const assets = [
  { icon: Building2, label: "Hotels" },
  { icon: Home, label: "Kiray homes" },
  { icon: Store, label: "Shops" },
  { icon: Landmark, label: "Land leases" },
  { icon: Warehouse, label: "Warehouses" },
];

const stats = [
  { num: "40%", label: "Max equity offered" },
  { num: "2%", label: "Fundraising fee" },
  { num: "5%", label: "Management spread" },
  { num: "3.25M", label: "Projected Birr/yr" },
];

const problems = [
  {
    who: "Asset owners",
    what: "Can't access liquidity without selling the entire property.",
  },
  {
    who: "Investors",
    what: "No easy way to earn passive income from local real estate.",
  },
  {
    who: "The market",
    what: "Billions in idle wealth sitting in brick and mortar.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-100">
      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <span
            className="text-lg font-bold tracking-tight cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Mesob<span className="text-teal-600">AI</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <button
              onClick={() => scrollToSection("how")}
              className="hover:text-teal-600 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("assets")}
              className="hover:text-teal-600 transition-colors"
            >
              Assets
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="hover:text-teal-600 transition-colors"
            >
              Join waitlist
            </button>
          </nav>
          <Button
            size="sm"
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-5"
            onClick={() => scrollToSection("waitlist")}
          >
            Early Access
          </Button>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[85vh] flex flex-col justify-center pt-20 pb-16 px-6 overflow-hidden">
          {/* subtle grid for light mode */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative mx-auto max-w-6xl w-full">
            <Badge
              variant="secondary"
              className="mb-6 border-transparent text-teal-700 bg-teal-50 text-[10px] uppercase tracking-widest py-1 px-3"
            >
              Addis Ababa, Ethiopia
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] max-w-3xl">
              Own a piece of <span className="text-teal-600">real assets.</span>
              <br />
              Earn monthly income.
            </h1>

            <p className="mt-6 text-slate-500 text-lg max-w-xl leading-relaxed font-normal">
              Mesob AI enables fractional ownership of hotels, shops, and
              properties across Ethiopia. Start small, earn big.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full gap-2 h-12 px-8 shadow-lg shadow-teal-600/20"
                onClick={() => scrollToSection("waitlist")}
              >
                Join the waitlist <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full gap-1.5 h-12"
                onClick={() => scrollToSection("how")}
              >
                Learn more
              </Button>
            </div>

            <div className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-slate-900">
                    {s.num}
                  </div>
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center md:text-left">
              The Problem <span className="text-teal-600">&</span> Opportunity
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((p) => (
                <Card
                  key={p.who}
                  className="bg-white border-slate-200/60 shadow-sm rounded-2xl hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="text-sm font-bold text-teal-600 mb-4 uppercase tracking-widest">
                      {p.who}
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      {p.what}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how" className="px-6 py-24 scroll-mt-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              How Mesob AI Works
            </h2>
            <p className="text-slate-500 mb-16">Simple. Legal. Transparent.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="text-left group">
                  <div className="text-4xl font-black text-slate-100 group-hover:text-teal-50 transition-colors mb-4">
                    {step.num}
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </div>
                  <div className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Asset types ── */}
        <section
          id="assets"
          className="bg-slate-900 text-white px-6 py-24 scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              Supported Assets
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {assets.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5 text-teal-400" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Waitlist ── */}
        <section
          id="waitlist"
          className="bg-white px-6 py-32 scroll-mt-20 border-t border-slate-100"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Ready to invest?
            </h2>
            <p className="mt-4 text-slate-500">
              Join the early bird list for exclusive first access to our
              upcoming property drops.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Welcome to the Mesob AI waitlist!");
              }}
              className="mt-10 flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                required
                placeholder="Enter your email"
                className="h-12 border-slate-200 rounded-full px-6 focus-visible:ring-teal-600"
              />
              <Button
                type="submit"
                className="h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 font-bold"
              >
                Get Access
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="px-6 py-12 border-t border-slate-50 bg-slate-50/50">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold">
            Mesob<span className="text-teal-600">AI</span>
          </span>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Mesob AI. Addis Ababa, Ethiopia.
          </p>
          <div className="flex gap-8 text-xs font-semibold text-slate-500">
            <a href="#" className="hover:text-teal-600">
              Privacy
            </a>
            <a href="#" className="hover:text-teal-600">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
