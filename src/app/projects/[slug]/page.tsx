"use client";

import { notFound } from "next/navigation";
import React from "react";
import { projectsData } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";
import TechStackGrid from "@/components/projects/TechStackGrid";
import ArchitectureSection from "@/components/projects/ArchitectureSection";
import FeaturesSection from "@/components/projects/FeaturesSection";
import ChallengesSection from "@/components/projects/ChallengesSection";
import RelatedProjects from "@/components/projects/RelatedProjects";
import { useLanguage } from "./layout";
import { getTranslatedProject } from "@/lib/project-i18n";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { language } = useLanguage();
  const { slug } = React.use(params);
  const originalProject = projectsData[slug];

  if (!originalProject) {
    notFound();
  }

  // Obtener proyecto con contenido traducido
  const project = getTranslatedProject(originalProject, language);

  return (
    <div className="min-h-screen">
      <ProjectHero project={project} language={language} />
      <ProjectOverview project={project} language={language} />
      <TechStackGrid stack={project.stack} language={language} />
      <ArchitectureSection architecture={project.architecture} language={language} />
      <FeaturesSection features={project.features} language={language} />
      {project.challenges && project.challenges.length > 0 && (
        <ChallengesSection challenges={project.challenges} language={language} />
      )}
      {project.relatedProjects && project.relatedProjects.length > 0 && (
        <RelatedProjects projectSlugs={project.relatedProjects} language={language} />
      )}
    </div>
  );
}
