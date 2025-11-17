"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Screenshot } from "@/data/projects/types";
import Image from "next/image";
import { projectTranslations } from "@/data/projects/translations";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  language: string;
}

export default function ScreenshotGallery({ screenshots, language }: ScreenshotGalleryProps) {
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
            <h2 className="text-4xl md:text-5xl font-bold">{t.screenshots}</h2>
            <p className="text-xl text-muted-foreground">{t.visualOverview}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {screenshots.map((screenshot, idx) => (
              <motion.div
                key={screenshot.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 group"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
                  <Image
                    src={screenshot.url}
                    alt={screenshot.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{screenshot.title}</h3>
                  {screenshot.description && (
                    <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
