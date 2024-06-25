"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import SpanishVersion from "@/sections/Home/Spanish";
import EnglishVersion from "@/sections/Home/English";
import { useState } from "react";
import FeaturedWork from "@/sections/FeaturesWork";
import Skills from "@/sections/Skills";
import ContactForm from "@/sections/Contact";
import SocialLinks from "@/sections/SocialLink";

export default function HomePage() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="flex-1">
        {language === "en" ? <EnglishVersion /> : <SpanishVersion />}
        <FeaturedWork language={language} />
        <Skills />
        {/* <ContactForm /> */}
        <SocialLinks />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Francisco Albert.
        </p>
      </footer>
    </div>
  );
}
