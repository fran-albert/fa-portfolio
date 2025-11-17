"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectTranslations } from "@/data/projects/translations";

interface RelatedProjectsProps {
  projectSlugs: string[];
  language: string;
}

export default function RelatedProjects({ projectSlugs, language }: RelatedProjectsProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const relatedProjects = projectSlugs.map(slug => projectsData[slug]).filter(Boolean);
  const t = projectTranslations[language as keyof typeof projectTranslations];

  if (relatedProjects.length === 0) return null;

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
            <h2 className="text-4xl md:text-5xl font-bold">{t.moreProjects}</h2>
            <p className="text-xl text-muted-foreground">{t.relatedProjects}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {relatedProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${project.gradient} hover:shadow-2xl transition-all duration-300`}>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/90">{project.subtitle}</p>
                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                        {t.viewProject}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
