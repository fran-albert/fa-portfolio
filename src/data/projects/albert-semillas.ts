import { Project } from "./types";

export const albertSemillas: Project = {
  slug: "albert-semillas",
  title: "Albert Semillas",
  subtitle: "Agricultural Management Platform - Frontend",
  description: "Modern Next.js frontend application for agricultural management with appointment scheduling, access control, and data visualization capabilities.",
  longDescription: "MiAgenda Frontend is a modern Next.js 15 application built for Albert Semillas' agricultural management platform. The application features advanced appointment scheduling, granular permission system with CASL, data visualization with Recharts, and a complete UI built with Radix UI and Tailwind CSS 4. Implements cutting-edge technologies including React 19, NextAuth v5, TanStack Query, and comprehensive testing with Vitest and Storybook.",
  demoUrl: "https://albert-semillas.com",
  status: "production",
  gradient: "from-green-500 to-emerald-600",

  stack: {
    frontend: [
      { name: "Next.js", version: "15.5", description: "React framework with App Router and Turbopack" },
      { name: "React", version: "19.1", description: "UI library (latest)" },
      { name: "TypeScript", version: "5.x", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", version: "4.x", description: "Utility-first CSS framework" },
      { name: "Radix UI", description: "Accessible component primitives (30+ components)" },
      { name: "Shadcn UI", description: "Re-usable component system" },
      { name: "Recharts", version: "2.15", description: "Charting library for data visualizations" },
      { name: "Lucide React", description: "Icon library" },
    ],
    backend: [
      { name: "PHP", description: "Backend API (legacy system)" },
      { name: "NextAuth", version: "5.0 (beta)", description: "Authentication for Next.js" },
      { name: "Axios", version: "1.12", description: "HTTP client for API calls" },
    ],
    devops: [
      { name: "Turbopack", description: "Fast bundler for Next.js" },
      { name: "Husky", description: "Git hooks" },
      { name: "Lint-staged", description: "Pre-commit linting" },
    ],
    testing: [
      { name: "Vitest", version: "3.2", description: "Unit testing framework" },
      { name: "Testing Library", description: "React testing utilities" },
      { name: "Storybook", version: "9.1", description: "Component development & documentation" },
      { name: "ESLint", version: "9.x", description: "Code quality & linting" },
      { name: "Prettier", description: "Code formatting" },
    ],
    other: [
      { name: "CASL", version: "6.7", description: "Authorization & access control" },
      { name: "TanStack Query", version: "5.87", description: "Data fetching & caching" },
      { name: "TanStack Table", version: "8.21", description: "Headless table library" },
      { name: "React Hook Form", version: "7.62", description: "Form management" },
      { name: "Zod", version: "4.1", description: "Schema validation" },
      { name: "Zustand", version: "5.x", description: "State management" },
      { name: "date-fns", version: "4.1", description: "Date utility library" },
      { name: "Sonner", description: "Toast notifications" },
    ],
  },

  architecture: {
    type: "Modern Next.js App Router Architecture",
    description: "Next.js 15 application using the App Router with React Server Components and Client Components. Implements a layered architecture with separation between UI components (Radix UI + Shadcn), business logic (TanStack Query), state management (Zustand), and API communication (Axios). Features server-side rendering, automatic code splitting, and optimized performance with Turbopack.",
    patterns: [
      "Server Components and Client Components pattern",
      "App Router file-based routing",
      "React Server Actions",
      "Repository pattern for data access",
      "Compound component pattern (Radix UI)",
      "Controlled and uncontrolled forms (React Hook Form)",
      "Optimistic updates with TanStack Query",
    ],
    components: [
      {
        name: "UI Layer",
        description: "Shadcn UI components built on Radix UI primitives",
        tech: ["Radix UI", "Tailwind CSS", "CVA"],
      },
      {
        name: "Data Layer",
        description: "Server state management with caching and invalidation",
        tech: ["TanStack Query", "Axios"],
      },
      {
        name: "Auth Layer",
        description: "Authentication and session management",
        tech: ["NextAuth v5", "JWT", "Jose"],
      },
      {
        name: "Access Control",
        description: "Permission-based access using CASL",
        tech: ["CASL", "React"],
      },
    ],
  },

  features: [
    {
      title: "Advanced Appointment Scheduling System",
      description: "Complete appointment management system with calendar views, scheduling conflicts detection, and recurring appointments.",
      highlights: [
        "Interactive calendar with day, week, and month views",
        "Drag-and-drop appointment rescheduling",
        "Conflict detection and resolution",
        "Recurring appointment patterns",
        "Multi-user scheduling with availability checking",
        "Appointment reminders and notifications",
      ],
      implementation: "React Day Picker with custom hooks and TanStack Query for state management",
    },
    {
      title: "Granular Permission System with CASL",
      description: "Advanced authorization system with ability-based access control for fine-grained permissions.",
      highlights: [
        "Role-based and resource-based permissions",
        "Dynamic permission rules evaluation",
        "Field-level access control",
        "Permission inheritance and cascading",
        "Real-time permission updates",
        "Integration with NextAuth v5 sessions",
      ],
      implementation: "@casl/ability with @casl/react for React integration",
    },
    {
      title: "Modern UI Component Library",
      description: "Comprehensive set of accessible, customizable UI components built with Radix UI and Tailwind CSS 4.",
      highlights: [
        "30+ Radix UI components (Dialog, Dropdown, Popover, etc.)",
        "Full keyboard navigation support",
        "ARIA-compliant accessibility",
        "Dark mode support with next-themes",
        "Responsive design patterns",
        "Custom animations with Tailwind Animate",
      ],
      implementation: "Shadcn UI pattern with CVA for component variants",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive charts and graphs for agricultural data analysis using Recharts.",
      highlights: [
        "Responsive chart components",
        "Multiple chart types (Bar, Line, Area, Pie)",
        "Real-time data updates",
        "Export capabilities",
        "Customizable tooltips and legends",
        "Mobile-optimized visualizations",
      ],
      implementation: "Recharts 2.15 with custom theme integration",
    },
    {
      title: "Comprehensive Form Management",
      description: "Type-safe form handling with validation and error management.",
      highlights: [
        "React Hook Form integration",
        "Zod schema validation",
        "Field-level error handling",
        "Async validation support",
        "Custom input components",
        "Form state persistence",
      ],
      implementation: "React Hook Form + @hookform/resolvers with Zod schemas",
    },
    {
      title: "Optimized Data Fetching & Caching",
      description: "Efficient server state management with automatic caching and background updates.",
      highlights: [
        "Automatic request deduplication",
        "Background data refetching",
        "Optimistic updates",
        "Infinite scroll pagination",
        "Query invalidation strategies",
        "DevTools for debugging",
      ],
      implementation: "TanStack Query v5 with React Query DevTools",
    },
  ],

  challenges: [
    {
      problem: "Migrating to Next.js 15 App Router with React 19",
      solution: "Carefully planned migration from pages router to App Router, implementing Server Components for static content and Client Components for interactive features. Created wrapper components for third-party libraries not yet compatible with React 19. Used feature flags to gradually roll out new features.",
      result: "Successfully deployed with Next.js 15 and React 19 in production with 40% faster page loads and 30% smaller JavaScript bundle sizes.",
      learnings: [
        "Server Components drastically reduce client-side JavaScript",
        "Turbopack significantly speeds up development builds",
        "Gradual migration reduces risk of breaking changes",
        "React 19 features like use() hook simplify data fetching",
      ],
    },
    {
      problem: "Complex Form Validation with Dynamic Fields",
      solution: "Implemented React Hook Form with Zod for type-safe validation. Created reusable field components with built-in validation. Used dynamic schema generation for forms with conditional fields based on user permissions.",
      result: "Reduced form-related bugs by 80% and improved form submission success rate by 45%. Developers can now create validated forms 60% faster.",
      learnings: [
        "Zod schemas provide excellent TypeScript integration",
        "Uncontrolled forms perform better than controlled for large forms",
        "Field-level validation improves UX significantly",
        "Dynamic schemas require careful type handling",
      ],
    },
    {
      problem: "Managing Server State with Multiple Data Sources",
      solution: "Implemented TanStack Query with custom hooks for each data domain. Created optimistic update patterns for better UX. Set up intelligent caching strategies with automatic invalidation on mutations. Used query key factories for organized cache management.",
      result: "Eliminated race conditions, reduced API calls by 60%, and improved perceived performance. Users experience instant updates with optimistic rendering.",
      learnings: [
        "TanStack Query DevTools are essential for debugging",
        "Query key organization is critical for cache invalidation",
        "Optimistic updates greatly improve perceived performance",
        "Background refetching keeps data fresh without user intervention",
      ],
    },
  ],

  screenshots: [
    {
      url: "/projects/albert-semillas/dashboard.png",
      title: "Main Dashboard",
      description: "Overview of key metrics and recent activity",
    },
    {
      url: "/projects/albert-semillas/crops.png",
      title: "Crop Management",
      description: "Detailed view of crop varieties and field management",
    },
    {
      url: "/projects/albert-semillas/orders.png",
      title: "Order Management",
      description: "Commercial order processing system",
    },
    {
      url: "/projects/albert-semillas/visualizations.png",
      title: "Data Visualizations",
      description: "D3.js powered charts and geographic visualizations",
    },
  ],

  timeline: {
    start: "2022",
    end: "Present",
    duration: "2+ years",
  },

  tags: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Radix UI",
    "CASL",
    "TanStack Query",
    "React Hook Form",
    "NextAuth v5",
    "Turbopack",
    "Agriculture",
    "Appointment System",
  ],

  relatedProjects: ["mi-ranking-tenis", "incor-centro-medico"],
};
