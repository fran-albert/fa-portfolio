"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Mi Ranking Tenis",
    slug: "mi-ranking-tenis",
    description: "Professional tennis tournament management platform with dynamic rankings, playoff brackets, and real-time statistics.",
    image: "https://mirankingtenis.s3.us-east-1.amazonaws.com/storage/avatar/MIRANKINGTENISPORTFOLIO.jpg",
    url: "https://app.mirankingtenis.com.ar/",
    tags: ["Next.js 15", "NestJS", "PostgreSQL", "TanStack Query"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Albert Semillas",
    slug: "albert-semillas",
    description: "Modern Next.js frontend for agricultural management with appointment scheduling, access control, and data visualization.",
    image: "https://mirankingtenis.s3.us-east-1.amazonaws.com/storage/avatar/MIRANKINGTENISPORTFOLIO.jpg",
    url: "https://albert-semillas.com",
    tags: ["Next.js 15", "React 19", "Tailwind CSS 4", "Radix UI"],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "Incor Centro Médico",
    slug: "incor-centro-medico",
    description: "Complete healthcare management system with electronic health records, patient portal, and AWS infrastructure.",
    image: "https://mirankingtenis.s3.us-east-1.amazonaws.com/storage/avatar/incor.jpg",
    url: "https://www.miportal.incorcentromedico.com.ar/",
    tags: ["React", "NestJS", "MySQL", "AWS"],
    gradient: "from-blue-600 to-purple-600"
  },
  // {
  //   title: "Himalaya SaaS",
  //   slug: "himalaya-saas",
  //   description: "Multi-tenant healthcare platform with PostGIS-powered geospatial doctor search and modern Next.js 15 applications.",
  //   image: "/isotipo.png",
  //   url: "https://himalaya.salud",
  //   tags: ["Next.js 15", "PostGIS", "Redis", "Microservices"],
  //   gradient: "from-purple-600 to-pink-600"
  // }
];

function FeaturedWorkEnglishVersion() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {inView && <ReactTyped strings={["My Portfolio"]} typeSpeed={40} showCursor={false} />}
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Explore some of the innovative web applications I&apos;ve built for real-world impact
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-1 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link href={`/projects/${project.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>

                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkEnglishVersion;
