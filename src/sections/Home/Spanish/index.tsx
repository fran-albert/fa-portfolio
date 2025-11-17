"use client";

import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function SpanishVersion() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:max-w-none"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  👋 Bienvenido a mi portafolio
                </span>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <ReactTyped
                  strings={["Hola, soy Francisco"]}
                  typeSpeed={40}
                  showCursor={false}
                />
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient">
                <ReactTyped
                  strings={[
                    "Desarrollador Full Stack",
                    "Ingeniero de Sistemas",
                    "Entusiasta de la Tecnología"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  startDelay={1500}
                  loop
                  showCursor={true}
                />
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-[600px] text-lg text-muted-foreground leading-relaxed"
            >
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras y escalables.
              Especializado en tecnologías modernas como React, Next.js, Node.js y arquitectura en la nube.
              Transformando ideas en experiencias digitales excepcionales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => window.location.href = "#contact"}
              >
                <Mail className="w-4 h-4" />
                Contactarme
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/fran-albert"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-primary transition-all group"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-albert-091646195/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-primary transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-glow" />
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                >
                  <Image
                    src="/FotoCarnet4x4SinFondo.png"
                    fill
                    alt="Francisco Albert"
                    className="rounded-full object-cover border-4 border-card shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SpanishVersion;
