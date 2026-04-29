"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, dictionary } from "@/lib/dictionary";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof dictionary.am;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Amharic as requested
  const [language, setLanguage] = useState<Language>("am");

  const t = dictionary[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
