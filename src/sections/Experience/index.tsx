"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { ReactTyped } from "react-typed";

interface Experience {
  title: { en: string; es: string };
  company: string;
  location: string;
  period: string;
  description: { en: string[]; es: string[] };
  technologies: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    title: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    company: "Mi Ranking Tenis",
    location: "Argentina",
    period: "2023 - Present",
    description: {
      en: [
        "Developed and maintained a complete platform for managing tennis tournaments",
        "Implemented real-time ranking system with WebSockets",
        "Optimized database queries reducing response time by 60%",
        "Built responsive UI with React and Next.js"
      ],
      es: [
        "Desarrollé y mantuve una plataforma completa para gestión de torneos de tenis",
        "Implementé sistema de rankings en tiempo real con WebSockets",
        "Optimicé consultas de base de datos reduciendo tiempo de respuesta en 60%",
        "Construí interfaz responsiva con React y Next.js"
      ]
    },
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    company: "Incor Centro Médico",
    location: "Argentina",
    period: "2022 - 2023",
    description: {
      en: [
        "Developed comprehensive health management system",
        "Created patient portal with appointment scheduling",
        "Integrated electronic medical records system",
        "Implemented role-based access control"
      ],
      es: [
        "Desarrollé sistema integral de gestión de salud",
        "Creé portal de pacientes con programación de citas",
        "Integré sistema de historias clínicas electrónicas",
        "Implementé control de acceso basado en roles"
      ]
    },
    technologies: ["React", "Node.js", "MySQL", "Docker", "REST APIs"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: { en: "Software Developer", es: "Desarrollador de Software" },
    company: "Cerem CRM",
    location: "Argentina",
    period: "2021 - 2022",
    description: {
      en: [
        "Built AI-powered CRM platform from scratch",
        "Integrated machine learning models for business insights",
        "Developed microservices architecture",
        "Created automated workflow system"
      ],
      es: [
        "Construí plataforma CRM con IA desde cero",
        "Integré modelos de machine learning para insights de negocio",
        "Desarrollé arquitectura de microservicios",
        "Creé sistema de flujos de trabajo automatizados"
      ]
    },
    technologies: ["Next.js", "NestJS", "PostgreSQL", "AI/ML", "Microservices"],
    color: "from-green-500 to-emerald-500"
  }
];

interface ExperienceProps {
  language?: string;
}

export default function Experience({ language = "en" }: ExperienceProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="w-full py-20 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
              {language === "en" ? "Professional Journey" : "Trayectoria Profesional"}
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {inView && <ReactTyped strings={[language === "en" ? "Work Experience" : "Experiencia Laboral"]} typeSpeed={40} showCursor={false} />}
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            {language === "en"
              ? "Building innovative solutions and driving digital transformation"
              : "Construyendo soluciones innovadoras e impulsando la transformación digital"
            }
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} animate-pulse`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} blur-md opacity-50`} />
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="ml-16 md:ml-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                        {/* Header */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-10`}>
                              <Briefcase className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold group-hover:text-gradient transition-all">
                                {language === "en" ? exp.title.en : exp.title.es}
                              </h3>
                              <p className="text-lg font-semibold text-primary">
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                          {(language === "en" ? exp.description.en : exp.description.es).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Gradient border effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
