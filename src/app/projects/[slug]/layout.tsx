"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import { LanguageContext } from "@/contexts/LanguageContext";

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
