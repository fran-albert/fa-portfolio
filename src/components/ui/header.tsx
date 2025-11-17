"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
}

const Header = ({ language, toggleLanguage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: isProjectPage ? "/#about" : "#about", labelEn: "About", labelEs: "Acerca" },
    { href: isProjectPage ? "/#portfolio" : "#portfolio", labelEn: "Portfolio", labelEs: "Portfolio" },
    { href: isProjectPage ? "/#experience" : "#experience", labelEn: "Experience", labelEs: "Experiencia" },
    { href: isProjectPage ? "/#skills" : "#skills", labelEn: "Skills", labelEs: "Habilidades" },
    { href: isProjectPage ? "/#contact" : "#contact", labelEn: "Contact", labelEs: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            prefetch={false}
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Code2 className="h-7 w-7 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
            </motion.div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent hidden sm:inline-block">
              FA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                prefetch={false}
              >
                {language === "en" ? item.labelEn : item.labelEs}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-sm font-semibold">
                {language === "en" ? "ES" : "EN"}
              </span>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glassmorphism border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 px-4 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                    prefetch={false}
                  >
                    {language === "en" ? item.labelEn : item.labelEs}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={toggleLanguage}
                className="sm:hidden py-2 px-4 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors text-left"
              >
                {language === "en" ? "Cambiar a Español" : "Switch to English"}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
