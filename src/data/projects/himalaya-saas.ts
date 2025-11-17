import { Project } from "./types";

export const himalayaSaas: Project = {
  slug: "himalaya-saas",
  title: "Himalaya Salud SaaS",
  subtitle: "Multi-tenant Healthcare Platform with Geospatial Search",
  description: "Advanced SaaS platform with PostGIS-powered geospatial doctor search, multi-tenant architecture, and modern Next.js 15 applications.",
  longDescription: "Himalaya Salud is a comprehensive multi-tenant SaaS platform for healthcare management. The system features a public API with advanced geospatial search capabilities using PostGIS, veterinary medical records application, and a modern landing page. Built with cutting-edge technologies including Next.js 15, React 19, and PostgreSQL with PostGIS extension for geographic queries.",
  demoUrl: "https://himalaya.salud",
  status: "development",
  gradient: "from-purple-600 to-pink-600",

  stack: {
    frontend: [
      { name: "Next.js", version: "15.5", description: "React framework with App Router" },
      { name: "React", version: "19.1", description: "UI library (latest)" },
      { name: "TypeScript", version: "5.x", description: "Type-safe JavaScript" },
      { name: "Radix UI", description: "Accessible component primitives" },
      { name: "Tailwind CSS", version: "4.x", description: "Utility-first CSS (latest)" },
      { name: "Framer Motion", description: "Animation library" },
      { name: "Zustand", version: "5.x", description: "State management" },
      { name: "NextAuth", version: "5.x (beta)", description: "Authentication" },
    ],
    backend: [
      { name: "NestJS", version: "11.x", description: "Progressive Node.js framework" },
      { name: "TypeScript", version: "5.7", description: "Type-safe JavaScript" },
      { name: "TypeORM", version: "0.3", description: "ORM with PostGIS support" },
    ],
    database: [
      { name: "PostgreSQL", version: "16", description: "Advanced relational database" },
      { name: "PostGIS", version: "3.4", description: "Spatial database extension" },
      { name: "Redis", version: "7.x", description: "In-memory cache" },
    ],
    devops: [
      { name: "Docker", description: "Containerization" },
      { name: "Docker Compose", description: "Multi-container orchestration" },
    ],
  },

  architecture: {
    type: "Microservices with Domain-Driven Design",
    description: "The platform follows a microservices architecture with separate services for authentication, public API, and client applications. The public API implements DDD patterns with repository and guard patterns. PostgreSQL with PostGIS extension enables advanced geospatial queries, while Redis provides caching for frequently accessed data.",
    patterns: [
      "Domain-Driven Design (DDD)",
      "Repository Pattern",
      "Guard Pattern for authentication",
      "Microservices architecture",
      "CQRS for complex queries",
      "Redis caching strategy",
    ],
    components: [
      {
        name: "Public API (Geospatial)",
        description: "Core API with PostGIS-powered doctor search",
        tech: ["NestJS", "PostgreSQL", "PostGIS", "Redis"],
      },
      {
        name: "Auth Service",
        description: "Centralized authentication microservice",
        tech: ["NestJS", "JWT", "PostgreSQL"],
      },
      {
        name: "HC Mascotas UI",
        description: "Veterinary medical records application",
        tech: ["Next.js 15", "React 19", "NextAuth v5"],
      },
      {
        name: "Himalaya Salud Landing",
        description: "Marketing and information site",
        tech: ["Next.js 15", "Shadcn UI", "Tailwind 4"],
      },
    ],
  },

  features: [
    {
      title: "Advanced Geospatial Doctor Search",
      description: "PostGIS-powered search engine for finding doctors by location, specialty, and insurance coverage.",
      highlights: [
        "Precise distance calculation with ST_DistanceSphere",
        "Configurable search radius (0.1km to 50km)",
        "Filter by medical specialty (15+ specialties)",
        "Filter by health insurance coverage",
        "Results ordered by distance",
        "GIST spatial indexes for performance",
        "Real-time coordinate-based queries",
      ],
      implementation: "PostGIS ST_DWithin and ST_DistanceSphere functions with spatial GIST indexes",
    },
    {
      title: "Intelligent Caching Strategy",
      description: "Multi-level caching with Redis for optimal performance.",
      highlights: [
        "60-second cache for search queries",
        "1-hour cache for medical specialties",
        "Automatic cache invalidation",
        "Connection pooling optimization",
        "Query result caching",
      ],
      implementation: "Redis with cache-manager and custom TTL strategies",
    },
    {
      title: "Comprehensive Medical Data Management",
      description: "Complete CRUD operations for doctors, institutions, offices, and insurance.",
      highlights: [
        "Doctor profiles with specialties",
        "Institution management (hospitals, clinics)",
        "Office locations with coordinates",
        "Health insurance catalog",
        "Many-to-many relationships (doctor-office, doctor-insurance)",
        "Seeded data with 35+ real doctors in Rosario",
      ],
    },
    {
      title: "Next.js 15 Applications",
      description: "Modern applications built with latest Next.js and React features.",
      highlights: [
        "App Router architecture",
        "React 19 Server Components",
        "NextAuth v5 (beta) authentication",
        "Tailwind CSS 4 styling",
        "Zustand state management",
        "Responsive design with Radix UI",
      ],
    },
    {
      title: "API Security & Performance",
      description: "Enterprise-grade security and performance features.",
      highlights: [
        "API Key authentication",
        "Rate limiting (100 req/min, 500 req/5min)",
        "Helmet security headers",
        "Health check endpoints",
        "Separate public and admin endpoints",
        "Request throttling",
      ],
    },
  ],

  challenges: [
    {
      problem: "Geospatial Query Performance",
      solution: "Implemented PostGIS with spatial GIST indexes and optimized queries using ST_DWithin for efficient radius searches. Added Redis caching layer for frequently accessed searches.",
      result: "Achieved sub-100ms response times for searches with 1000+ doctors. Reduced database load by 80% through intelligent caching.",
      learnings: [
        "GIST indexes are essential for geospatial performance",
        "ST_DWithin is more efficient than calculating distance for every row",
        "Caching geospatial results requires careful cache key design",
        "PostGIS geography type provides accurate distance calculations",
      ],
    },
    {
      problem: "Complex Many-to-Many Relationships",
      solution: "Designed junction tables (DoctorOffice, DoctorInsurance) with additional metadata fields. Implemented efficient queries with TypeORM query builder and eager loading strategies.",
      result: "Reduced N+1 query problems and improved API response times by 60%. Simplified complex queries with reusable repository methods.",
      learnings: [
        "Junction tables can store more than just IDs",
        "Eager loading must be used carefully to avoid over-fetching",
        "TypeORM query builder provides better control than simple find operations",
      ],
    },
    {
      problem: "Next.js 15 and React 19 Early Adoption",
      solution: "Carefully evaluated beta features, created wrapper components for stability, and implemented gradual migration strategy. Used feature flags for experimental features.",
      result: "Successfully deployed applications using Next.js 15 App Router and React 19 Server Components with zero critical issues.",
      learnings: [
        "Server Components significantly reduce client bundle size",
        "App Router improves routing performance and developer experience",
        "NextAuth v5 requires different patterns than v4",
        "Tailwind CSS 4 brings better performance and DX",
      ],
    },
  ],

  screenshots: [
    {
      url: "/projects/himalaya/doctor-search.png",
      title: "Geospatial Doctor Search",
      description: "Interactive map showing doctors by location and specialty",
    },
    {
      url: "/projects/himalaya/search-results.png",
      title: "Search Results",
      description: "Filtered and sorted results with distance calculation",
    },
    {
      url: "/projects/himalaya/mascotas-dashboard.png",
      title: "Veterinary Dashboard",
      description: "Medical records dashboard for pets",
    },
    {
      url: "/projects/himalaya/landing.png",
      title: "Landing Page",
      description: "Modern landing page with Shadcn UI components",
    },
  ],

  timeline: {
    start: "2024",
    end: "Present",
    duration: "1 year",
  },

  tags: [
    "Next.js 15",
    "React 19",
    "PostGIS",
    "PostgreSQL",
    "Geospatial",
    "Microservices",
    "Redis",
    "NestJS",
    "TypeScript",
    "Healthcare SaaS",
  ],

  relatedProjects: ["albert-semillas", "incor-centro-medico"],
};
