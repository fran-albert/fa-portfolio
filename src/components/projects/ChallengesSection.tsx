"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Challenge } from "@/data/projects/types";
import { AlertCircle, CheckCircle, Lightbulb } from "lucide-react";
import { projectTranslations } from "@/data/projects/translations";

interface ChallengesSectionProps {
  challenges: Challenge[];
  language: string;
}

export default function ChallengesSection({ challenges, language }: ChallengesSectionProps) {
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
            <h2 className="text-4xl md:text-5xl font-bold">{t.challengesAndSolutions}</h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={challenge.problem}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t.challenge}</h3>
                      <p className="text-muted-foreground">{challenge.problem}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t.solution}</h3>
                      <p className="text-muted-foreground">{challenge.solution}</p>
                    </div>
                  </div>

                  {challenge.result && (
                    <div className="pl-9 pt-2 border-l-2 border-primary/20">
                      <p className="text-sm">
                        <span className="font-semibold">{t.result}:</span> {challenge.result}
                      </p>
                    </div>
                  )}

                  {challenge.learnings && challenge.learnings.length > 0 && (
                    <div className="flex items-start gap-3 pt-4">
                      <Lightbulb className="w-6 h-6 text-yellow-500 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{t.keyLearnings}</h3>
                        <ul className="space-y-2">
                          {challenge.learnings.map((learning, lIdx) => (
                            <li key={lIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
