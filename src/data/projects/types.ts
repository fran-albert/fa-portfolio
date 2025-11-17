export interface TechItem {
  name: string;
  version?: string;
  icon?: string;
  description?: string;
}

export interface Feature {
  title: string;
  description: string;
  implementation?: string;
  screenshot?: string;
  highlights?: string[];
}

export interface Challenge {
  problem: string;
  solution: string;
  result?: string;
  learnings?: string[];
}

export interface Screenshot {
  url: string;
  title: string;
  description?: string;
}

export interface Video {
  url: string;
  title: string;
  thumbnail?: string;
}

export interface Architecture {
  type: string;
  diagram?: string;
  description: string;
  patterns?: string[];
  components?: {
    name: string;
    description: string;
    tech: string[];
  }[];
}

export interface Metrics {
  users?: number;
  transactions?: number;
  uptime?: string;
  performance?: {
    loadTime?: string;
    lighthouse?: number;
    [key: string]: any;
  };
}

export interface Timeline {
  start: string;
  end?: string;
  duration: string;
}

export type ProjectStatus = "production" | "development" | "archived";

export interface Project {
  // Basic Info
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  demoUrl?: string;
  repoUrl?: string;
  status: ProjectStatus;
  gradient: string; // Tailwind gradient classes

  // Stack
  stack: {
    frontend?: TechItem[];
    backend?: TechItem[];
    database?: TechItem[];
    devops?: TechItem[];
    testing?: TechItem[];
    other?: TechItem[];
  };

  // Architecture
  architecture: Architecture;

  // Features
  features: Feature[];

  // Metrics (optional)
  metrics?: Metrics;

  // Challenges (optional)
  challenges?: Challenge[];

  // Media
  screenshots: Screenshot[];
  videos?: Video[];

  // Timeline
  timeline: Timeline;

  // Tags
  tags: string[];

  // Related projects (slugs)
  relatedProjects?: string[];
}

export interface ProjectsData {
  [key: string]: Project;
}
