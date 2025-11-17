"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Feature } from "@/data/projects/types";
import { Check, Sparkles } from "lucide-react";
import { projectTranslations } from "@/data/projects/translations";

interface FeaturesSectionProps {
  features: Feature[];
  language: string;
}

export default function FeaturesSection({ features, language }: FeaturesSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const t = projectTranslations[language as keyof typeof projectTranslations];

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.keyFeatures}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.whatItDoes}</h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground">{feature.description}</p>

                  {feature.highlights && feature.highlights.length > 0 && (
                    <ul className="space-y-3 pt-4">
                      {feature.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {feature.implementation && (
                    <div className="pt-4 pl-8 border-l-2 border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{t.implementation}:</span> {feature.implementation}
                      </p>
                    </div>
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
