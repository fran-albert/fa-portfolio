import { Project } from "@/data/projects/types";
import { projectContentTranslations } from "@/data/projects/content-translations";

export function getTranslatedProject(project: Project, language: string): Project {
  // Si el idioma es inglés o no hay traducción, devolver el proyecto original
  if (language === "en" || !projectContentTranslations[project.slug as keyof typeof projectContentTranslations]) {
    return project;
  }

  const translation = projectContentTranslations[project.slug as keyof typeof projectContentTranslations]?.[language as "es"];

  if (!translation) {
    return project;
  }

  // Crear copia del proyecto con contenido traducido
  return {
    ...project,
    subtitle: translation.subtitle || project.subtitle,
    description: translation.description || project.description,
    longDescription: translation.longDescription || project.longDescription,
    architecture: {
      ...project.architecture,
      type: translation.architecture?.type || project.architecture.type,
      description: translation.architecture?.description || project.architecture.description,
      patterns: translation.architecture?.patterns || project.architecture.patterns,
      components: translation.architecture?.components
        ? project.architecture.components?.map((comp, idx) => ({
            ...comp,
            name: translation.architecture?.components?.[idx]?.name || comp.name,
            description: translation.architecture?.components?.[idx]?.description || comp.description,
          }))
        : project.architecture.components,
    },
    features: translation.features
      ? project.features.map((feature, idx) => ({
          ...feature,
          title: translation.features?.[idx]?.title || feature.title,
          description: translation.features?.[idx]?.description || feature.description,
          highlights: translation.features?.[idx]?.highlights || feature.highlights,
          implementation: translation.features?.[idx]?.implementation || feature.implementation,
        }))
      : project.features,
    challenges: translation.challenges
      ? project.challenges?.map((challenge, idx) => ({
          ...challenge,
          problem: translation.challenges?.[idx]?.problem || challenge.problem,
          solution: translation.challenges?.[idx]?.solution || challenge.solution,
          result: translation.challenges?.[idx]?.result || challenge.result,
          learnings: translation.challenges?.[idx]?.learnings || challenge.learnings,
        }))
      : project.challenges,
    screenshots: translation.screenshots
      ? project.screenshots.map((screenshot, idx) => ({
          ...screenshot,
          title: translation.screenshots?.[idx]?.title || screenshot.title,
          description: translation.screenshots?.[idx]?.description || screenshot.description,
        }))
      : project.screenshots,
  };
}
