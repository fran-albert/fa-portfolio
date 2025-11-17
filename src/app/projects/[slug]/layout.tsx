"use client";

import { useState, createContext, useContext } from "react";
import Header from "@/components/ui/header";

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <div className="pt-16">{children}</div>
    </LanguageContext.Provider>
  );
}
