"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Project } from "@/data/projects/types";
import { projectTranslations } from "@/data/projects/translations";

interface TechStackGridProps {
  stack: Project["stack"];
  language: string;
}

export default function TechStackGrid({ stack, language }: TechStackGridProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const t = projectTranslations[language as keyof typeof projectTranslations];

  const categories = [
    { key: "frontend", title: t.frontend, color: "from-blue-500 to-cyan-500", items: stack.frontend },
    { key: "backend", title: t.backend, color: "from-purple-500 to-pink-500", items: stack.backend },
    { key: "database", title: t.database, color: "from-green-500 to-emerald-500", items: stack.database },
    { key: "devops", title: t.devops, color: "from-orange-500 to-red-500", items: stack.devops },
    { key: "testing", title: t.testing, color: "from-yellow-500 to-orange-500", items: stack.testing },
    { key: "other", title: t.other, color: "from-gray-500 to-slate-500", items: stack.other },
  ].filter(cat => cat.items && cat.items.length > 0);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{t.techStack}</h2>
          </div>

          <div className="space-y-12">
            {categories.map((category, idx) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items!.map((tech, techIdx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: idx * 0.1 + techIdx * 0.05 }}
                      className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-lg group-hover:text-gradient transition-all">{tech.name}</h4>
                          {tech.version && (
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                              v{tech.version}
                            </span>
                          )}
                        </div>
                        {tech.description && (
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
