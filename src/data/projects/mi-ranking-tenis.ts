import { Project } from "./types";

export const miRankingTenis: Project = {
  slug: "mi-ranking-tenis",
  title: "Mi Ranking Tenis",
  subtitle: "Professional Tennis Tournament Management Platform",
  description: "Complete tennis tournament management system with dynamic rankings, playoff brackets, real-time statistics, and professional player profiles.",
  longDescription: "Mi Ranking Tenis is a comprehensive full-stack platform for managing tennis tournaments, rankings, and player statistics. Built with Next.js 15 and NestJS, the system handles everything from player registration to complex tournament structures including group stages, playoff brackets, and a unique 'Race to Master' system. Features real-time ranking calculations, advanced match tracking, and professional-grade data visualizations.",
  demoUrl: "https://app.mirankingtenis.com.ar/",
  status: "production",
  gradient: "from-blue-500 to-cyan-500",

  stack: {
    frontend: [
      { name: "Next.js", version: "15.5", description: "React framework with App Router" },
      { name: "React", version: "19.1", description: "UI library (latest)" },
      { name: "TypeScript", version: "5.x", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", version: "3.4", description: "Utility-first CSS framework" },
      { name: "Radix UI", description: "Accessible component primitives" },
      { name: "Headless UI", version: "2.2", description: "Unstyled components" },
      { name: "Framer Motion", version: "12.23", description: "Animation library" },
      { name: "Lucide React", version: "0.540", description: "Icon library" },
    ],
    backend: [
      { name: "NestJS", version: "10.0", description: "Progressive Node.js framework" },
      { name: "TypeScript", version: "5.1", description: "Type-safe JavaScript" },
      { name: "TypeORM", version: "0.3.17", description: "ORM for database management" },
      { name: "JWT", description: "JSON Web Token authentication" },
      { name: "bcrypt", description: "Password hashing" },
    ],
    database: [
      { name: "PostgreSQL", version: "14+", description: "Relational database" },
      { name: "Railway", description: "Cloud PostgreSQL hosting" },
    ],
    devops: [
      { name: "Railway", description: "Backend deployment & CI/CD" },
      { name: "Vercel", description: "Frontend deployment" },
      { name: "GitHub Actions", description: "Automated workflows" },
    ],
    testing: [
      { name: "Jest", version: "29.5", description: "Testing framework" },
      { name: "Supertest", version: "6.3", description: "HTTP testing" },
      { name: "Playwright", version: "1.54", description: "E2E testing" },
      { name: "ESLint", version: "9", description: "Code quality" },
    ],
    other: [
      { name: "TanStack Query", version: "5.85", description: "Data fetching & caching" },
      { name: "TanStack Table", version: "8.21", description: "Advanced data tables" },
      { name: "Zustand", version: "5.0", description: "State management" },
      { name: "React Hook Form", version: "7.62", description: "Form management" },
      { name: "Zod", version: "4.0", description: "Schema validation" },
      { name: "Axios", version: "1.12", description: "HTTP client" },
      { name: "Nivo Charts", description: "Data visualizations" },
      { name: "Recharts", version: "3.1", description: "Chart library" },
      { name: "React Big Calendar", version: "1.19", description: "Event calendar" },
      { name: "Cloudinary", version: "2.7", description: "Image management" },
      { name: "NodeMailer", version: "6.9", description: "Email service" },
      { name: "Swagger", description: "API documentation" },
      { name: "Sonner", version: "2.0", description: "Toast notifications" },
    ],
  },

  architecture: {
    type: "Full-Stack Monorepo with Microservices Pattern",
    description: "Modern full-stack architecture with Next.js 15 App Router frontend and NestJS backend API. The backend implements a modular architecture with 23+ entities organized in domain-driven modules. Features JWT authentication, role-based access control, TypeORM for database management, and automated CI/CD pipelines. Frontend uses Server Components and Client Components for optimal performance.",
    patterns: [
      "Domain-Driven Design (DDD)",
      "Repository Pattern with TypeORM",
      "Service Layer Architecture",
      "Guard Pattern for authentication",
      "Decorator Pattern (NestJS)",
      "Server Components + Client Components (Next.js)",
      "Optimistic updates with React Query",
      "Role-based Access Control (RBAC)",
    ],
    components: [
      {
        name: "NestJS Backend API",
        description: "RESTful API with 23 entities and modular architecture",
        tech: ["NestJS", "TypeORM", "PostgreSQL", "JWT"],
      },
      {
        name: "Next.js Frontend",
        description: "App Router with Server/Client Components",
        tech: ["Next.js 15", "React 19", "TanStack Query", "Zustand"],
      },
      {
        name: "Authentication System",
        description: "JWT-based auth with role management",
        tech: ["JWT", "bcrypt", "Guards", "Decorators"],
      },
      {
        name: "Data Visualization",
        description: "Advanced charts and tables for statistics",
        tech: ["Nivo Charts", "Recharts", "TanStack Table"],
      },
    ],
  },

  features: [
    {
      title: "Complete Tournament Management System",
      description: "Professional tournament organization with multiple formats, phases, and configurations.",
      highlights: [
        "Multiple tournament types: League, Master, Doubles Express",
        "Seasonal organization: Apertura, Clausura, Anual",
        "Group stage and playoff bracket support",
        "Automatic fixture generation with bye management",
        "Tournament history and state tracking",
        "Multi-category tournaments with independent rankings",
      ],
      implementation: "NestJS modules with TypeORM entities for tournaments, categories, participants, and configurations",
    },
    {
      title: "Dynamic Ranking System",
      description: "Real-time ranking calculation with historical tracking and multiple ranking types.",
      highlights: [
        "Global ranking by category",
        "Tournament-specific rankings",
        "Race to Master ranking system",
        "Automatic position and points calculation",
        "Historical ranking changes with audit trail",
        "Rebuild functionality for data corrections",
      ],
      implementation: "Custom ranking algorithms with TypeORM queries and cache-manager for performance",
    },
    {
      title: "Advanced Match Management",
      description: "Complete match lifecycle with set tracking, states, and scheduling.",
      highlights: [
        "Match states: Pending, InProgress, Finished, Cancelled",
        "Set-by-set score tracking",
        "Court and shift assignment",
        "Walkover/bye support",
        "Match history and statistics",
        "Fixture/jornada organization",
      ],
      implementation: "Match, Set, Shift, and Fixture entities with relationships and state management",
    },
    {
      title: "Professional Player Profiles",
      description: "Comprehensive player management with statistics and media.",
      highlights: [
        "Detailed player profiles with photos",
        "Cloudinary integration for image management",
        "Player statistics and match history",
        "Trophy and achievement tracking",
        "Category assignments",
        "Role-based permissions (Player/Admin)",
      ],
      implementation: "User entity with Cloudinary upload, Sharp image processing, and S3 backup",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Rich data visualizations for statistics and analytics.",
      highlights: [
        "Interactive charts with Nivo and Recharts",
        "Advanced data tables with TanStack Table",
        "Real-time statistics updates",
        "Event calendar with React Big Calendar",
        "Responsive charts for mobile",
        "Export capabilities",
      ],
      implementation: "Nivo Charts, Recharts, and TanStack Table with React Query for data synchronization",
    },
    {
      title: "Admin Dashboard & Management",
      description: "Complete administrative interface for system management.",
      highlights: [
        "CRUD operations for all entities",
        "Tournament creation and configuration",
        "Player management and registration",
        "Court and category management",
        "Bulk operations and data import",
        "Audit logs and system monitoring",
      ],
      implementation: "Protected admin routes with RoleGuard and custom decorators",
    },
  ],

  challenges: [
    {
      problem: "Complex Ranking Calculation with Historical Tracking",
      solution: "Designed a flexible ranking system with HistoryRanking entity to track all position changes. Implemented rebuild functionality to recalculate rankings from historical data. Used TypeORM queries with proper indexing and cache-manager with 10-minute TTL for performance optimization.",
      result: "Successfully handling rankings for 100+ players across multiple categories with sub-second calculation times. Historical data enables accurate analysis and dispute resolution.",
      learnings: [
        "Separating current and historical data improves query performance",
        "Caching ranking calculations significantly reduces database load",
        "Audit trails are essential for sports ranking systems",
        "TypeORM indexes on frequently queried fields are critical",
      ],
    },
    {
      problem: "Multi-Phase Tournament Structure (Groups + Playoffs)",
      solution: "Created modular entity design with GroupStage, Group, GroupParticipant for group phases and PlayoffStage, PlayoffRound for elimination rounds. Implemented flexible configuration system allowing different tournament formats with proper relationship management.",
      result: "System supports complex tournament structures including round-robin groups followed by knockout playoffs. Administrators can configure tournaments with 4-16 participants in various formats.",
      learnings: [
        "Flexible entity design allows for multiple tournament formats",
        "Proper relationship mapping prevents data inconsistencies",
        "Configuration entities separate structure from implementation",
        "Testing edge cases (byes, odd participants) is crucial",
      ],
    },
    {
      problem: "Real-Time Data Synchronization Across Frontend",
      solution: "Implemented TanStack Query v5 with intelligent cache invalidation strategies. Created custom hooks for each data domain with query key factories. Used optimistic updates for immediate UI feedback and background refetching to keep data fresh.",
      result: "Achieved seamless real-time updates across all pages. Reduced API calls by 65% through intelligent caching. Users experience instant updates with optimistic rendering.",
      learnings: [
        "Query key organization is crucial for cache invalidation",
        "Optimistic updates greatly improve perceived performance",
        "Background refetching keeps data fresh without user action",
        "TanStack Query DevTools are invaluable for debugging",
      ],
    },
  ],

  screenshots: [
    {
      url: "/projects/mi-ranking-tenis/ranking-dashboard.png",
      title: "Ranking Dashboard",
      description: "Dynamic ranking tables with real-time position tracking",
    },
    {
      url: "/projects/mi-ranking-tenis/tournament-brackets.png",
      title: "Tournament Brackets",
      description: "Interactive playoff brackets and group stage visualization",
    },
    {
      url: "/projects/mi-ranking-tenis/player-profile.png",
      title: "Player Profile",
      description: "Comprehensive player statistics and match history",
    },
    {
      url: "/projects/mi-ranking-tenis/admin-dashboard.png",
      title: "Admin Dashboard",
      description: "Complete tournament and player management interface",
    },
  ],

  timeline: {
    start: "2023",
    end: "Present",
    duration: "1+ year",
  },

  tags: [
    "Next.js 15",
    "React 19",
    "NestJS",
    "PostgreSQL",
    "TypeORM",
    "TanStack Query",
    "Tailwind CSS",
    "TypeScript",
    "JWT",
    "Tennis",
    "Tournament Management",
    "Real-time Rankings",
  ],

  relatedProjects: ["albert-semillas", "incor-centro-medico"],
};
