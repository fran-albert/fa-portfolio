"use client";

import { createContext, useContext } from "react";

export interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
