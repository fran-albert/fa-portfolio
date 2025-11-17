"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects/types";
import { projectTranslations } from "@/data/projects/translations";

interface ProjectHeroProps {
  project: Project;
  language: string;
}

export default function ProjectHero({ project, language }: ProjectHeroProps) {
  const t = projectTranslations[language as keyof typeof projectTranslations];

  const statusConfig = {
    production: { label: t.production, color: "bg-green-500 text-white border-green-600" },
    development: { label: t.development, color: "bg-blue-500 text-white border-blue-600" },
    archived: { label: t.archived, color: "bg-gray-500 text-white border-gray-600" },
  };

  const status = statusConfig[project.status];

  return (
    <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Status badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-4 py-2 rounded-full border-2 text-sm font-semibold shadow-lg ${status.color}`}>
                {status.label}
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border-2 border-white/30 shadow-lg">
                {project.timeline.duration}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-white/90 font-medium">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold hover:bg-white/90 transition-colors shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t.viewLiveDemo}
                </motion.a>
              )}
              {project.repoUrl && (
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Github className="w-5 h-5" />
                  {t.viewCode}
                </motion.a>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.slice(0, 8).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
