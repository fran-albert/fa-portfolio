"use client";

import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SkillsProps {
  language?: string;
}

const skillsData = {
  frontend: [
    {
      name: "React",
      icon: "/logos/frontend/react.svg",
      level: 95,
    },
    {
      name: "Next.js",
      icon: "/logos/frontend/nextdotjs.svg",
      level: 90,
    },
    {
      name: "TypeScript",
      icon: "/logos/frontend/typescript.svg",
      level: 90,
    },
    {
      name: "Tailwind CSS",
      icon: "/logos/frontend/tailwindcss.svg",
      level: 95,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/logos/backend/nodedotjs.svg",
      level: 85,
    },
    {
      name: "NestJS",
      icon: "/logos/backend/nestjs.svg",
      level: 85,
    },
    {
      name: "PostgreSQL",
      icon: "/logos/backend/postgresql.svg",
      level: 80,
    },
    {
      name: "MySQL",
      icon: "/logos/backend/mysql.svg",
      level: 80,
    },
  ],
  devops: [
    {
      name: "Docker",
      icon: "/logos/devops/docker.svg",
      level: 75,
    },
    {
      name: "AWS",
      icon: "/logos/devops/aws.svg",
      level: 70,
    },
    {
      name: "Git",
      icon: "/logos/devops/git.svg",
      level: 90,
    },
    {
      name: "Linux",
      icon: "/logos/devops/linux.svg",
      level: 75,
    },
  ],
};

function Skills({ language = "en" }: SkillsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      key: "frontend",
      title: { en: "Frontend Development", es: "Desarrollo Frontend" },
      color: "from-blue-500 to-cyan-500"
    },
    {
      key: "backend",
      title: { en: "Backend Development", es: "Desarrollo Backend" },
      color: "from-purple-500 to-pink-500"
    },
    {
      key: "devops",
      title: { en: "DevOps & Tools", es: "DevOps & Herramientas" },
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section id="skills" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
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
              {language === "en" ? "Technical Skills" : "Habilidades Técnicas"}
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {inView && <ReactTyped strings={[language === "en" ? "My Expertise" : "Mi Experiencia"]} typeSpeed={40} showCursor={false} />}
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            {language === "en"
              ? "Technologies and tools I use to bring ideas to life"
              : "Tecnologías y herramientas que uso para dar vida a las ideas"
            }
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-2xl font-bold">
                  {language === "en" ? category.title.en : category.title.es}
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {skillsData[category.key as keyof typeof skillsData].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.2 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Icon and Name */}
                      <div className="flex flex-col items-center space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="relative"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                          <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>

                        <h4 className="text-lg font-semibold text-center group-hover:text-gradient transition-all">
                          {skill.name}
                        </h4>

                        {/* Progress bar */}
                        <div className="w-full space-y-2">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{language === "en" ? "Proficiency" : "Nivel"}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Gradient border effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
