"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Architecture } from "@/data/projects/types";
import { Layers } from "lucide-react";
import { projectTranslations } from "@/data/projects/translations";

interface ArchitectureSectionProps {
  architecture: Architecture;
  language: string;
}

export default function ArchitectureSection({ architecture, language }: ArchitectureSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const t = projectTranslations[language as keyof typeof projectTranslations];

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{t.architecture}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{architecture.type}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{architecture.description}</p>

            {architecture.patterns && architecture.patterns.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{t.designPatterns}</h3>
                <div className="flex flex-wrap gap-3">
                  {architecture.patterns.map((pattern) => (
                    <span
                      key={pattern}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {pattern}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {architecture.components && architecture.components.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{t.systemComponents}</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {architecture.components.map((component, idx) => (
                    <motion.div
                      key={component.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-card border border-border"
                    >
                      <div className="flex items-start gap-3">
                        <Layers className="w-6 h-6 text-primary mt-1" />
                        <div className="flex-1 space-y-2">
                          <h4 className="font-semibold text-lg">{component.name}</h4>
                          <p className="text-sm text-muted-foreground">{component.description}</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {component.tech.map((tech) => (
                              <span key={tech} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
