import { Project } from "./types";

export const incorCentroMedico: Project = {
  slug: "incor-centro-medico",
  title: "Incor Centro Médico",
  subtitle: "Complete Healthcare Management System",
  description: "Comprehensive medical management platform with electronic health records, patient portal, and occupational health modules deployed on AWS infrastructure.",
  longDescription: "Incor Centro Médico is a complete healthcare management ecosystem consisting of three interconnected applications: Historia Clínica API (medical records backend), Mi Portal Incor (patient portal frontend), and Medicina Laboral API (occupational health). The system handles everything from patient registration to medical evaluations, with advanced PDF processing capabilities and AWS deployment.",
  demoUrl: "https://www.miportal.incorcentromedico.com.ar/",
  status: "production",
  gradient: "from-blue-600 to-purple-600",

  stack: {
    frontend: [
      { name: "React", version: "18.3", description: "UI library" },
      { name: "TypeScript", version: "5.5", description: "Type-safe JavaScript" },
      { name: "Vite", version: "5.4", description: "Build tool" },
      { name: "Radix UI", description: "Accessible components" },
      { name: "Tailwind CSS", version: "3.4", description: "Utility-first CSS" },
      { name: "Shadcn UI", description: "Component collection" },
      { name: "Framer Motion", description: "Animation library" },
    ],
    backend: [
      { name: "NestJS", version: "11.x", description: "Progressive Node.js framework" },
      { name: "TypeScript", version: "5.7", description: "Type-safe JavaScript" },
      { name: "TypeORM", version: "0.3", description: "ORM for TypeScript" },
      { name: "Passport JWT", description: "Authentication middleware" },
    ],
    database: [
      { name: "MySQL", version: "8.0", description: "Relational database" },
      { name: "AWS Lightsail", description: "Managed MySQL instance" },
    ],
    devops: [
      { name: "AWS EC2", description: "Compute instances (Staging + Production)" },
      { name: "Nginx", description: "Reverse proxy" },
      { name: "Let's Encrypt", description: "SSL certificates" },
      { name: "GitHub Actions", description: "CI/CD pipeline" },
      { name: "Docker", description: "Containerization" },
    ],
    other: [
      { name: "Redux Toolkit", description: "State management" },
      { name: "React Query", description: "Server state management" },
      { name: "React Hook Form", description: "Form management" },
      { name: "Zod", description: "Schema validation" },
      { name: "@react-pdf/renderer", description: "PDF generation" },
      { name: "PDF-Lib", description: "PDF manipulation" },
      { name: "Nodemailer", description: "Email service" },
      { name: "AWS S3", description: "File storage" },
    ],
  },

  architecture: {
    type: "Multi-tier Architecture with Microservices",
    description: "The system consists of three main applications deployed on AWS infrastructure: Historia Clínica API (medical records backend on EC2), Medicina Laboral API (occupational health on EC2), and Mi Portal Incor Front (React SPA). All services share a MySQL database on AWS Lightsail and communicate via REST APIs.",
    patterns: [
      "Repository pattern for data access",
      "JWT-based authentication",
      "RESTful API design",
      "Redux + React Query for state management",
      "Component-based frontend architecture",
    ],
    components: [
      {
        name: "Historia Clínica API",
        description: "Core medical records backend with patient management",
        tech: ["NestJS", "TypeORM", "MySQL", "JWT"],
      },
      {
        name: "Medicina Laboral API",
        description: "Occupational health with PDF processing",
        tech: ["NestJS", "PDF-Lib", "AWS S3", "Nodemailer"],
      },
      {
        name: "Mi Portal Incor",
        description: "Patient portal frontend",
        tech: ["React", "TypeScript", "Redux", "React Query"],
      },
      {
        name: "AWS Infrastructure",
        description: "EC2 instances, Lightsail DB, S3 storage",
        tech: ["EC2", "Lightsail", "S3", "Nginx"],
      },
    ],
  },

  features: [
    {
      title: "Electronic Health Records (EHR)",
      description: "Complete digital medical record system with patient history, evolutions, and medication tracking.",
      highlights: [
        "Comprehensive patient profiles",
        "Medical evolution tracking over time",
        "Current medication management",
        "Customizable data types (pressure, weight, glucose, etc.)",
        "Doctor and admin role management",
        "Secure JWT authentication",
      ],
    },
    {
      title: "Patient Portal",
      description: "Modern React-based portal for patients to access their medical information and manage appointments.",
      highlights: [
        "Secure patient login",
        "View complete medical history",
        "Download medical studies",
        "Appointment scheduling",
        "PDF report generation",
        "Responsive design for mobile access",
      ],
    },
    {
      title: "Occupational Health Management",
      description: "Specialized module for corporate occupational health evaluations and certificates.",
      highlights: [
        "Pre-occupational medical evaluations",
        "Medical certificate generation",
        "Study tracking and follow-up",
        "Company and collaborator management",
        "Health insurance integration",
        "Automated email notifications",
      ],
    },
    {
      title: "Advanced PDF Processing",
      description: "Sophisticated PDF manipulation capabilities for medical documents.",
      highlights: [
        "PDF generation with PDFKit",
        "PDF reading and data extraction",
        "PDF to image conversion",
        "Digital signature support",
        "Template-based document creation",
        "Watermarking and security features",
      ],
    },
    {
      title: "AWS Infrastructure",
      description: "Production-grade deployment on AWS with staging and production environments.",
      highlights: [
        "Separate EC2 instances for staging and production",
        "Shared Lightsail MySQL database",
        "Nginx reverse proxy configuration",
        "SSL certificates with Let's Encrypt",
        "GitHub Actions for automated deployment",
        "Health checks and monitoring",
      ],
    },
  ],

  challenges: [
    {
      problem: "AWS Deployment Complexity",
      solution: "Created comprehensive documentation for AWS setup including EC2 configuration, Nginx setup, SSL certificate management, and GitHub Actions CI/CD pipeline. Implemented automated deployment scripts to reduce human error.",
      result: "Reduced deployment time from 2 hours to 15 minutes. Zero-downtime deployments achieved through systematic approach.",
      learnings: [
        "Documentation is critical for complex infrastructure",
        "Automation prevents deployment errors",
        "Separate staging environment catches issues before production",
      ],
    },
    {
      problem: "PDF Processing Performance",
      solution: "Implemented efficient PDF processing pipeline using PDF-Lib for manipulation and PDFKit for generation. Added caching layer and optimized image processing with Jimp.",
      result: "Reduced PDF generation time from 5-10 seconds to under 2 seconds. Able to process batch operations of 50+ medical certificates efficiently.",
      learnings: [
        "Right tool selection is crucial (PDF-Lib vs PDFKit for different tasks)",
        "Image optimization significantly impacts PDF size and processing time",
        "Caching frequently used templates improves performance",
      ],
    },
    {
      problem: "State Management Complexity",
      solution: "Implemented hybrid approach using Redux Toolkit for client state and React Query for server state. This separation of concerns simplified state management significantly.",
      result: "Reduced state-related bugs by 70%. Improved developer experience with better TypeScript support and automatic cache invalidation.",
      learnings: [
        "Separate client and server state management",
        "React Query's automatic refetching improves UX",
        "Redux Toolkit significantly reduces boilerplate",
      ],
    },
  ],

  screenshots: [
    {
      url: "/projects/incor/patient-dashboard.png",
      title: "Patient Dashboard",
      description: "Main dashboard showing medical history and upcoming appointments",
    },
    {
      url: "/projects/incor/medical-records.png",
      title: "Medical Records",
      description: "Detailed view of patient's electronic health record",
    },
    {
      url: "/projects/incor/appointments.png",
      title: "Appointment Management",
      description: "Scheduling and managing medical appointments",
    },
    {
      url: "/projects/incor/pdf-generator.png",
      title: "PDF Report Generator",
      description: "Medical certificate and report generation interface",
    },
  ],

  timeline: {
    start: "2022",
    end: "Present",
    duration: "2+ years",
  },

  tags: [
    "React",
    "NestJS",
    "TypeScript",
    "MySQL",
    "AWS",
    "Healthcare",
    "EHR",
    "PDF Processing",
    "Redux",
    "React Query",
  ],

  relatedProjects: ["mi-ranking-tenis", "albert-semillas"],
};
