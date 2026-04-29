"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-[120px] px-0 border-b border-[#f4f4f5]">
      <div className="text-center max-w-[800px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-[#f4f4f5] text-[#18181b] text-[12px] font-medium px-[14px] py-1.5 rounded-full mb-8 border border-[#e4e4e7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
          {t.hero.badge}
        </div>

        <h1 className="text-[42px] md:text-[52px] font-semibold leading-[1.1] mb-6 tracking-[-0.03em] text-[#09090b]">
          {t.hero.title} <br />
          <span className="text-[#10b981]">{t.hero.titleAccent}</span>
        </h1>

        <p className="text-[17px] md:text-[18px] text-[#71717a] max-w-[600px] mx-auto mb-10 leading-relaxed font-normal">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-[#09090b] text-white border-none px-8 py-3.5 cursor-pointer text-[15px] font-medium rounded-lg hover:bg-[#27272a] transition-all duration-200 shadow-sm">
            {t.hero.browse}
          </button>
          <Link href="/how-it-works" className="w-full sm:w-auto no-underline">
            <button className="w-full sm:w-auto bg-white border border-[#e4e4e7] text-[#27272a] px-8 py-3.5 cursor-pointer text-[15px] font-medium flex items-center justify-center gap-2 rounded-lg hover:bg-[#f4f4f5] transition-all duration-200 group">
              {t.hero.howItWorks}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 max-w-[1100px] mx-auto">
          {[
            { title: t.hero.step1, desc: t.hero.step1Desc },
            { title: t.hero.step2, desc: t.hero.step2Desc },
            { title: t.hero.step3, desc: t.hero.step3Desc },
          ].map((step, i) => (
            <div key={i} className="relative text-center md:text-left">
              <div className="text-[11px] font-bold text-[#10b981] uppercase tracking-[0.1em] mb-3">
                Step 0{i + 1}
              </div>
              <div className="text-[18px] font-semibold text-[#09090b] mb-2">
                {step.title}
              </div>
              <div className="text-[15px] text-[#71717a] leading-relaxed max-w-[280px] mx-auto md:mx-0">
                {step.desc}
              </div>
              {i < 2 && (
                <div className="absolute top-1/2 -right-6 w-px h-12 bg-[#e4e4e7] -translate-y-1/2 hidden lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
