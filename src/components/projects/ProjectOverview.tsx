"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Project } from "@/data/projects/types";
import { Calendar, Clock } from "lucide-react";
import { projectTranslations } from "@/data/projects/translations";

interface ProjectOverviewProps {
  project: Project;
  language: string;
}

export default function ProjectOverview({ project, language }: ProjectOverviewProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const t = projectTranslations[language as keyof typeof projectTranslations];

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">{t.overview}</h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">{t.timeline}</h3>
              <p className="text-muted-foreground">{project.timeline.start} - {project.timeline.end || "Present"}</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">{t.duration}</h3>
              <p className="text-muted-foreground">{project.timeline.duration}</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-3 text-primary-foreground font-bold">
                {project.features.length}
              </div>
              <h3 className="font-semibold mb-2">{t.keyFeatures}</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
