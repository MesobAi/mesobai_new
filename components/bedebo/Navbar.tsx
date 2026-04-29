"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="flex justify-between items-center px-[60px] py-4 border-b border-[#f4f4f5] sticky top-0 bg-white/80 backdrop-blur-md z-[100]">
      <Link href="/" className="no-underline">
        <div className="font-bold text-[18px] tracking-tighter text-[#09090b]">
          Bedebo<span className="text-[#10b981]">.</span>
        </div>
      </Link>

      <div className="flex gap-6 items-center">
        <Link
          href="/"
          className="text-[#71717a] no-underline text-[14px] font-medium hover:text-[#09090b] transition-colors"
        >
          {t.nav.home}
        </Link>
        <Link
          href="/how-it-works"
          className="text-[#71717a] no-underline text-[14px] font-medium hover:text-[#09090b] transition-colors"
        >
          {t.nav.howItWorks}
        </Link>
        <div className="w-px h-4 bg-[#e4e4e7]"></div>

        <div className="flex items-center gap-1 bg-[#f4f4f5] p-1 rounded-lg">
          <div className="px-2 py-1">
            <Languages className="size-3.5 text-[#71717a]" />
          </div>
          <Button
            variant={language === "am" ? "secondary" : "ghost"}
            size="xs"
            onClick={() => setLanguage("am")}
            className={
              language === "am" ? "bg-white shadow-sm" : "text-[#71717a]"
            }
          >
            አማርኛ
          </Button>
          <Button
            variant={language === "en" ? "secondary" : "ghost"}
            size="xs"
            onClick={() => setLanguage("en")}
            className={
              language === "en" ? "bg-white shadow-sm" : "text-[#71717a]"
            }
          >
            EN
          </Button>
        </div>
      </div>
    </nav>
  );
}
