"use client";
import Header from "@/components/ui/header";
import SpanishVersion from "@/sections/Home/Spanish";
import EnglishVersion from "@/sections/Home/English";
import { useState } from "react";
import FeaturedWork from "@/sections/FeaturesWork";
import Skills from "@/sections/Skills";
import SocialLinks from "@/sections/SocialLink";
import Experience from "@/sections/Experience";

export default function HomePage() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="flex-1 pt-16">
        {language === "en" ? <EnglishVersion /> : <SpanishVersion />}
        <FeaturedWork language={language} />
        <Experience language={language} />
        <Skills language={language} />
        {/* <ContactForm /> */}
        <SocialLinks language={language} />
      </main>
      <footer className="relative glassmorphism border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Francisco Albert. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
