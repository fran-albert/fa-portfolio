"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Sparkles } from "lucide-react";

interface SocialLinksProps {
  language?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/fran-albert",
    icon: Github,
    description: {
      en: "Check out my code and open source contributions",
      es: "Revisa mi código y contribuciones open source"
    },
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/francisco-albert-091646195/",
    icon: Linkedin,
    description: {
      en: "Connect with me professionally",
      es: "Conéctate conmigo profesionalmente"
    },
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-950"
  },
  {
    name: "Email",
    url: "mailto:fran.albert.sist@gmail.com",
    icon: Mail,
    description: {
      en: "Send me a message",
      es: "Envíame un mensaje"
    },
    color: "from-red-500 to-pink-600",
    hoverColor: "hover:bg-red-50 dark:hover:bg-red-950"
  },
];

function SocialLinks({ language = "en" }: SocialLinksProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === "en" ? "Let's Connect" : "Conectemos"}
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {inView && <ReactTyped strings={[language === "en" ? "Get in Touch" : "Contacto"]} typeSpeed={40} showCursor={false} />}
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            {language === "en"
              ? "Feel free to reach out for collaborations, opportunities, or just to say hi!"
              : "No dudes en contactarme para colaboraciones, oportunidades o simplemente saludar!"
            }
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${link.hoverColor}`}>
                  {/* Icon container */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${link.color} text-white`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${link.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold flex items-center gap-2 justify-center group-hover:text-gradient transition-all">
                        {link.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" ? link.description.en : link.description.es}
                      </p>
                    </div>
                  </div>

                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            {language === "en"
              ? "Or send me an email directly at"
              : "O envíame un email directamente a"
            }
          </p>
          <a
            href="mailto:fran.albert.sist@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <Mail className="w-5 h-5" />
            fran.albert.sist@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialLinks;
