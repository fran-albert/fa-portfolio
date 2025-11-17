// Traducciones del contenido de los proyectos
export const projectContentTranslations = {
  "albert-semillas": {
    es: {
      subtitle: "Plataforma de Gestión Agrícola - Frontend",
      description: "Aplicación frontend moderna en Next.js para gestión agrícola con sistema de citas, control de acceso y visualización de datos.",
      longDescription: "MiAgenda Frontend es una aplicación moderna Next.js 15 construida para la plataforma de gestión agrícola de Albert Semillas. La aplicación cuenta con programación avanzada de citas, sistema granular de permisos con CASL, visualización de datos con Recharts y una UI completa construida con Radix UI y Tailwind CSS 4. Implementa tecnologías de vanguardia incluyendo React 19, NextAuth v5, TanStack Query y testing integral con Vitest y Storybook.",
      architecture: {
        type: "Arquitectura Moderna de App Router de Next.js",
        description: "Aplicación Next.js 15 usando App Router con React Server Components y Client Components. Implementa una arquitectura por capas con separación entre componentes UI (Radix UI + Shadcn), lógica de negocio (TanStack Query), gestión de estado (Zustand) y comunicación con API (Axios). Cuenta con renderizado del lado del servidor, división automática de código y rendimiento optimizado con Turbopack.",
        patterns: [
          "Patrón de Server Components y Client Components",
          "Enrutamiento basado en archivos con App Router",
          "React Server Actions",
          "Patrón de repositorio para acceso a datos",
          "Patrón de componentes compuestos (Radix UI)",
          "Formularios controlados y no controlados (React Hook Form)",
          "Actualizaciones optimistas con TanStack Query",
        ],
        components: [
          {
            name: "Capa de UI",
            description: "Componentes Shadcn UI construidos sobre primitivas Radix UI",
          },
          {
            name: "Capa de Datos",
            description: "Gestión de estado del servidor con caché e invalidación",
          },
          {
            name: "Capa de Autenticación",
            description: "Autenticación y gestión de sesiones",
          },
          {
            name: "Control de Acceso",
            description: "Acceso basado en permisos usando CASL",
          },
        ],
      },
      features: [
        {
          title: "Sistema Avanzado de Programación de Citas",
          description: "Sistema completo de gestión de citas con vistas de calendario, detección de conflictos y citas recurrentes.",
          highlights: [
            "Calendario interactivo con vistas de día, semana y mes",
            "Reprogramación de citas con arrastrar y soltar",
            "Detección y resolución de conflictos",
            "Patrones de citas recurrentes",
            "Programación multiusuario con verificación de disponibilidad",
            "Recordatorios y notificaciones de citas",
          ],
          implementation: "React Day Picker con hooks personalizados y TanStack Query para gestión de estado",
        },
        {
          title: "Sistema Granular de Permisos con CASL",
          description: "Sistema de autorización avanzado con control de acceso basado en habilidades para permisos de grano fino.",
          highlights: [
            "Permisos basados en roles y recursos",
            "Evaluación dinámica de reglas de permisos",
            "Control de acceso a nivel de campo",
            "Herencia y cascada de permisos",
            "Actualizaciones de permisos en tiempo real",
            "Integración con sesiones de NextAuth v5",
          ],
          implementation: "@casl/ability con @casl/react para integración con React",
        },
        {
          title: "Biblioteca Moderna de Componentes UI",
          description: "Conjunto integral de componentes UI accesibles y personalizables construidos con Radix UI y Tailwind CSS 4.",
          highlights: [
            "30+ componentes Radix UI (Dialog, Dropdown, Popover, etc.)",
            "Soporte completo de navegación por teclado",
            "Accesibilidad conforme a ARIA",
            "Soporte de modo oscuro con next-themes",
            "Patrones de diseño responsivo",
            "Animaciones personalizadas con Tailwind Animate",
          ],
          implementation: "Patrón Shadcn UI con CVA para variantes de componentes",
        },
        {
          title: "Dashboard de Visualización de Datos",
          description: "Gráficos y diagramas interactivos para análisis de datos agrícolas usando Recharts.",
          highlights: [
            "Componentes de gráficos responsivos",
            "Múltiples tipos de gráficos (Barras, Líneas, Área, Pastel)",
            "Actualizaciones de datos en tiempo real",
            "Capacidades de exportación",
            "Tooltips y leyendas personalizables",
            "Visualizaciones optimizadas para móvil",
          ],
          implementation: "Recharts 2.15 con integración de tema personalizado",
        },
        {
          title: "Gestión Integral de Formularios",
          description: "Manejo de formularios type-safe con validación y gestión de errores.",
          highlights: [
            "Integración con React Hook Form",
            "Validación de esquemas Zod",
            "Manejo de errores a nivel de campo",
            "Soporte de validación asíncrona",
            "Componentes de input personalizados",
            "Persistencia de estado de formularios",
          ],
          implementation: "React Hook Form + @hookform/resolvers con esquemas Zod",
        },
        {
          title: "Obtención y Caché Optimizada de Datos",
          description: "Gestión eficiente de estado del servidor con caché automático y actualizaciones en segundo plano.",
          highlights: [
            "Deduplicación automática de solicitudes",
            "Refetch de datos en segundo plano",
            "Actualizaciones optimistas",
            "Paginación con scroll infinito",
            "Estrategias de invalidación de consultas",
            "DevTools para debugging",
          ],
          implementation: "TanStack Query v5 con React Query DevTools",
        },
      ],
      challenges: [
        {
          problem: "Migración a Next.js 15 App Router con React 19",
          solution: "Planifiqué cuidadosamente la migración del pages router al App Router, implementando Server Components para contenido estático y Client Components para funciones interactivas. Creé componentes wrapper para librerías de terceros aún no compatibles con React 19. Usé feature flags para desplegar gradualmente nuevas características.",
          result: "Desplegué exitosamente con Next.js 15 y React 19 en producción con cargas de página 40% más rápidas y tamaños de bundle JavaScript 30% más pequeños.",
          learnings: [
            "Los Server Components reducen drásticamente el JavaScript del lado del cliente",
            "Turbopack acelera significativamente los builds de desarrollo",
            "La migración gradual reduce el riesgo de cambios disruptivos",
            "Las características de React 19 como el hook use() simplifican la obtención de datos",
          ],
        },
        {
          problem: "Validación Compleja de Formularios con Campos Dinámicos",
          solution: "Implementé React Hook Form con Zod para validación type-safe. Creé componentes de campo reutilizables con validación integrada. Usé generación dinámica de esquemas para formularios con campos condicionales basados en permisos de usuario.",
          result: "Reduje bugs relacionados con formularios en un 80% y mejoré la tasa de éxito de envío de formularios en un 45%. Los desarrolladores ahora pueden crear formularios validados 60% más rápido.",
          learnings: [
            "Los esquemas Zod proporcionan excelente integración con TypeScript",
            "Los formularios no controlados funcionan mejor que los controlados para formularios grandes",
            "La validación a nivel de campo mejora significativamente la UX",
            "Los esquemas dinámicos requieren manejo cuidadoso de tipos",
          ],
        },
        {
          problem: "Gestión de Estado del Servidor con Múltiples Fuentes de Datos",
          solution: "Implementé TanStack Query con hooks personalizados para cada dominio de datos. Creé patrones de actualización optimista para mejor UX. Configuré estrategias inteligentes de caché con invalidación automática en mutaciones. Usé fábricas de query keys para gestión organizada del caché.",
          result: "Eliminé condiciones de carrera, reduje llamadas a API en un 60% y mejoré el rendimiento percibido. Los usuarios experimentan actualizaciones instantáneas con renderizado optimista.",
          learnings: [
            "Las TanStack Query DevTools son esenciales para debugging",
            "La organización de query keys es crítica para invalidación de caché",
            "Las actualizaciones optimistas mejoran enormemente el rendimiento percibido",
            "El refetch en segundo plano mantiene los datos frescos sin intervención del usuario",
          ],
        },
      ],
      screenshots: [
        {
          title: "Sistema de Citas",
          description: "Calendario interactivo con vistas de día, semana y mes",
        },
        {
          title: "Dashboard de Análisis",
          description: "Gráficos y visualizaciones de datos con Recharts",
        },
        {
          title: "Gestión de Formularios",
          description: "Formularios validados con React Hook Form y Zod",
        },
        {
          title: "Sistema de Permisos",
          description: "Control de acceso granular con CASL",
        },
      ],
    },
  },
  "incor-centro-medico": {
    es: {
      subtitle: "Sistema Integral de Gestión de Salud",
      description: "Sistema completo de gestión de salud con historias clínicas electrónicas, portal del paciente e infraestructura AWS.",
      longDescription: "Incor Centro Médico es un sistema integral de gestión de salud que abarca múltiples aplicaciones: un sistema de registros médicos electrónicos (EHR), un portal de pacientes para citas y acceso a registros, y un sistema de salud ocupacional. Construido con React y NestJS, el sistema maneja operaciones complejas de atención médica con alta seguridad y confiabilidad.",
      architecture: {
        type: "Multi-nivel con Microservicios",
        description: "El sistema está compuesto por tres aplicaciones frontend de React, una API backend de NestJS con MySQL, y servicios especializados para procesamiento de PDFs y auditoría. Implementado en AWS con EC2 y Lightsail para operaciones escalables y confiables.",
        patterns: [
          "Arquitectura multi-nivel",
          "Patrón de repositorio para acceso a datos",
          "Autenticación basada en JWT",
          "Patrón de módulos de NestJS",
          "Componentes de React con hooks",
        ],
        components: [
          {
            name: "Portal del Paciente",
            description: "Aplicación React para pacientes para gestión de citas y acceso a registros",
          },
          {
            name: "Sistema EHR",
            description: "Sistema integral de registros de salud electrónicos para personal médico",
          },
          {
            name: "Portal de Salud Ocupacional",
            description: "Sistema especializado para gestión de salud ocupacional",
          },
          {
            name: "API Backend",
            description: "API de NestJS con MySQL para lógica de negocio y datos",
          },
        ],
      },
      features: [
        {
          title: "Registros de Salud Electrónicos (EHR)",
          description: "Sistema completo de EHR para gestionar registros de pacientes, citas y documentación médica.",
          highlights: [
            "Perfiles completos de pacientes con historial médico",
            "Sistema de programación de citas",
            "Prescripciones electrónicas y gestión de medicamentos",
            "Diagnósticos codificados con CIE-10",
            "Almacenamiento seguro de documentos",
            "Pistas de auditoría para cumplimiento",
          ],
          implementation: "React 18 con React Hook Form para gestión de formularios y Axios para comunicación con API",
        },
        {
          title: "Portal del Paciente",
          description: "Portal orientado al paciente para autoservicio y acceso a información de salud.",
          highlights: [
            "Programación de citas en línea",
            "Acceso a registros médicos",
            "Descarga de resultados de laboratorio",
            "Historial de prescripciones",
            "Mensajería segura con proveedores",
            "Gestión de perfil de paciente",
          ],
          implementation: "Aplicación React con autenticación JWT y comunicación segura con API",
        },
        {
          title: "Procesamiento y Gestión de PDFs",
          description: "Sistema automatizado para generar, procesar y gestionar documentos médicos PDF.",
          highlights: [
            "Generación de PDFs de registros médicos",
            "Procesamiento de resultados de laboratorio",
            "Plantillas de documentos",
            "Firma digital de documentos",
            "Almacenamiento seguro de documentos en AWS S3",
          ],
          implementation: "Biblioteca Puppeteer para generación de PDFs con plantillas personalizadas",
        },
        {
          title: "Sistema de Salud Ocupacional",
          description: "Portal especializado para gestión de programas de salud ocupacional.",
          highlights: [
            "Gestión de exámenes médicos ocupacionales",
            "Programación de empresas y empleados",
            "Seguimiento de cumplimiento",
            "Informes de salud ocupacional",
            "Integración con EHR principal",
          ],
        },
        {
          title: "Infraestructura AWS",
          description: "Sistema implementado de forma segura y escalable en infraestructura de AWS.",
          highlights: [
            "Hosting de EC2 para API backend",
            "AWS Lightsail para aplicaciones frontend",
            "Almacenamiento seguro S3 para documentos",
            "Backups automáticos de base de datos",
            "Configuración SSL/TLS para comunicación segura",
          ],
        },
      ],
      challenges: [
        {
          problem: "Gestión de Formularios Médicos Complejos",
          solution: "Implementé React Hook Form con validación de esquema Yup para manejar formularios médicos complejos con múltiples secciones y validación condicional. Creé componentes de formulario reutilizables para campos médicos comunes.",
          result: "Reduje errores de entrada de datos en un 70% y mejoré la velocidad de entrada de formularios en un 40%.",
          learnings: [
            "React Hook Form proporciona mejor rendimiento que formularios controlados para formularios grandes",
            "La validación de esquemas captura errores antes del envío",
            "Los componentes de formulario reutilizables mejoran la consistencia",
          ],
        },
        {
          problem: "Generación de PDFs con Alto Volumen",
          solution: "Optimicé la generación de PDFs con Puppeteer mediante implementación de sistema de cola, almacenamiento en caché de plantillas y procesamiento paralelo. Implementé almacenamiento en S3 para archivos generados.",
          result: "Aumenté el rendimiento de generación de PDFs de 10 documentos/minuto a 100+ documentos/minuto. Reduje el uso de memoria del servidor en un 60%.",
          learnings: [
            "Los sistemas de cola previenen sobrecarga del servidor durante picos de demanda",
            "El almacenamiento en caché de plantillas reduce significativamente el tiempo de generación",
            "El procesamiento paralelo debe gestionarse cuidadosamente para evitar agotamiento de recursos",
          ],
        },
        {
          problem: "Asegurar Datos Sensibles de Salud",
          solution: "Implementé cifrado integral de datos en reposo y en tránsito, autenticación JWT con expiración de tokens, control de acceso basado en roles, y registro de auditoría detallado para todas las operaciones de datos.",
          result: "Logré cumplimiento con regulaciones de privacidad de datos de salud y cero brechas de seguridad en producción.",
          learnings: [
            "Los datos de salud requieren múltiples capas de seguridad",
            "Los registros de auditoría son esenciales para cumplimiento y debugging",
            "La rotación regular de tokens mejora la seguridad",
          ],
        },
      ],
      screenshots: [
        {
          title: "Dashboard de EHR",
          description: "Dashboard principal mostrando citas de pacientes y tareas",
        },
        {
          title: "Registro de Paciente",
          description: "Vista detallada de registros médicos de pacientes",
        },
        {
          title: "Portal del Paciente",
          description: "Interfaz del portal del paciente para autoservicio",
        },
        {
          title: "Sistema de Salud Ocupacional",
          description: "Gestión de exámenes médicos ocupacionales",
        },
      ],
    },
  },
  "himalaya-saas": {
    es: {
      subtitle: "Plataforma de Salud Multi-tenant con Búsqueda Geoespacial",
      description: "Plataforma SaaS avanzada con búsqueda geoespacial de médicos potenciada por PostGIS, arquitectura multi-tenant y aplicaciones modernas Next.js 15.",
      longDescription: "Himalaya Salud es una plataforma SaaS integral multi-tenant para gestión de salud. El sistema cuenta con una API pública con capacidades avanzadas de búsqueda geoespacial usando PostGIS, aplicación de registros médicos veterinarios y una landing page moderna. Construida con tecnologías de vanguardia incluyendo Next.js 15, React 19 y PostgreSQL con extensión PostGIS para consultas geográficas.",
      architecture: {
        type: "Microservicios con Diseño Dirigido por Dominio",
        description: "La plataforma sigue una arquitectura de microservicios con servicios separados para autenticación, API pública y aplicaciones cliente. La API pública implementa patrones DDD con patrones de repositorio y guard. PostgreSQL con extensión PostGIS habilita consultas geoespaciales avanzadas, mientras Redis proporciona caché para datos accedidos frecuentemente.",
        patterns: [
          "Diseño Dirigido por Dominio (DDD)",
          "Patrón de Repositorio",
          "Patrón Guard para autenticación",
          "Arquitectura de microservicios",
          "CQRS para consultas complejas",
          "Estrategia de caché con Redis",
        ],
        components: [
          {
            name: "API Pública (Geoespacial)",
            description: "API central con búsqueda de médicos potenciada por PostGIS",
          },
          {
            name: "Servicio de Autenticación",
            description: "Microservicio de autenticación centralizado",
          },
          {
            name: "HC Mascotas UI",
            description: "Aplicación de registros médicos veterinarios",
          },
          {
            name: "Himalaya Salud Landing",
            description: "Sitio de marketing e información",
          },
        ],
      },
      features: [
        {
          title: "Búsqueda Avanzada Geoespacial de Médicos",
          description: "Motor de búsqueda potenciado por PostGIS para encontrar médicos por ubicación, especialidad y cobertura de seguros.",
          highlights: [
            "Cálculo preciso de distancia con ST_DistanceSphere",
            "Radio de búsqueda configurable (0.1km a 50km)",
            "Filtro por especialidad médica (15+ especialidades)",
            "Filtro por cobertura de seguro de salud",
            "Resultados ordenados por distancia",
            "Índices espaciales GIST para rendimiento",
            "Consultas basadas en coordenadas en tiempo real",
          ],
          implementation: "Funciones PostGIS ST_DWithin y ST_DistanceSphere con índices espaciales GIST",
        },
        {
          title: "Estrategia de Caché Inteligente",
          description: "Caché multinivel con Redis para rendimiento óptimo.",
          highlights: [
            "Caché de 60 segundos para consultas de búsqueda",
            "Caché de 1 hora para especialidades médicas",
            "Invalidación automática de caché",
            "Optimización de pooling de conexiones",
            "Caché de resultados de consultas",
          ],
          implementation: "Redis con cache-manager y estrategias de TTL personalizadas",
        },
        {
          title: "Gestión Integral de Datos Médicos",
          description: "Operaciones CRUD completas para médicos, instituciones, consultorios y seguros.",
          highlights: [
            "Perfiles de médicos con especialidades",
            "Gestión de instituciones (hospitales, clínicas)",
            "Ubicaciones de consultorios con coordenadas",
            "Catálogo de seguros de salud",
            "Relaciones muchos-a-muchos (médico-consultorio, médico-seguro)",
            "Datos sembrados con 35+ médicos reales en Rosario",
          ],
        },
        {
          title: "Aplicaciones Next.js 15",
          description: "Aplicaciones modernas construidas con las últimas características de Next.js y React.",
          highlights: [
            "Arquitectura App Router",
            "React 19 Server Components",
            "Autenticación NextAuth v5 (beta)",
            "Estilos con Tailwind CSS 4",
            "Gestión de estado con Zustand",
            "Diseño responsivo con Radix UI",
          ],
        },
        {
          title: "Seguridad y Rendimiento de API",
          description: "Características de seguridad y rendimiento de nivel empresarial.",
          highlights: [
            "Autenticación con API Key",
            "Limitación de tasa (100 req/min, 500 req/5min)",
            "Cabeceras de seguridad Helmet",
            "Endpoints de health check",
            "Endpoints públicos y de admin separados",
            "Throttling de solicitudes",
          ],
        },
      ],
      challenges: [
        {
          problem: "Rendimiento de Consultas Geoespaciales",
          solution: "Implementé PostGIS con índices espaciales GIST y consultas optimizadas usando ST_DWithin para búsquedas eficientes por radio. Agregué capa de caché Redis para búsquedas accedidas frecuentemente.",
          result: "Logré tiempos de respuesta menores a 100ms para búsquedas con 1000+ médicos. Reduje la carga de la base de datos en un 80% mediante caché inteligente.",
          learnings: [
            "Los índices GIST son esenciales para rendimiento geoespacial",
            "ST_DWithin es más eficiente que calcular distancia para cada fila",
            "El caché de resultados geoespaciales requiere diseño cuidadoso de claves de caché",
            "El tipo geography de PostGIS proporciona cálculos precisos de distancia",
          ],
        },
        {
          problem: "Relaciones Muchos-a-Muchos Complejas",
          solution: "Diseñé tablas de unión (DoctorOffice, DoctorInsurance) con campos de metadata adicionales. Implementé consultas eficientes con query builder de TypeORM y estrategias de eager loading.",
          result: "Reduje problemas de consultas N+1 y mejoré tiempos de respuesta de API en un 60%. Simplifiqué consultas complejas con métodos de repositorio reutilizables.",
          learnings: [
            "Las tablas de unión pueden almacenar más que solo IDs",
            "El eager loading debe usarse cuidadosamente para evitar sobre-fetching",
            "El query builder de TypeORM proporciona mejor control que operaciones find simples",
          ],
        },
        {
          problem: "Adopción Temprana de Next.js 15 y React 19",
          solution: "Evalué cuidadosamente características beta, creé componentes wrapper para estabilidad, e implementé estrategia de migración gradual. Usé feature flags para características experimentales.",
          result: "Desplegué exitosamente aplicaciones usando Next.js 15 App Router y React 19 Server Components sin problemas críticos.",
          learnings: [
            "Los Server Components reducen significativamente el tamaño del bundle del cliente",
            "El App Router mejora el rendimiento de routing y la experiencia del desarrollador",
            "NextAuth v5 requiere patrones diferentes a v4",
            "Tailwind CSS 4 trae mejor rendimiento y DX",
          ],
        },
      ],
      screenshots: [
        {
          title: "Búsqueda Geoespacial de Médicos",
          description: "Mapa interactivo mostrando médicos por ubicación y especialidad",
        },
        {
          title: "Resultados de Búsqueda",
          description: "Resultados filtrados y ordenados con cálculo de distancia",
        },
        {
          title: "Dashboard Veterinario",
          description: "Dashboard de registros médicos para mascotas",
        },
        {
          title: "Landing Page",
          description: "Landing page moderna con componentes Shadcn UI",
        },
      ],
    },
  },
  "mi-ranking-tenis": {
    es: {
      subtitle: "Plataforma Profesional de Gestión de Torneos de Tenis",
      description: "Sistema completo de gestión de torneos de tenis con rankings dinámicos, cuadros de playoffs, estadísticas en tiempo real y perfiles profesionales de jugadores.",
      longDescription: "Mi Ranking Tenis es una plataforma full-stack integral para gestionar torneos de tenis, rankings y estadísticas de jugadores. Construida con Next.js 15 y NestJS, el sistema maneja todo desde el registro de jugadores hasta estructuras complejas de torneos incluyendo fases de grupos, cuadros de playoffs y un sistema único de 'Carrera al Master'. Cuenta con cálculos de ranking en tiempo real, seguimiento avanzado de partidos y visualizaciones de datos de nivel profesional.",
      architecture: {
        type: "Full-Stack Monorepo con Patrón de Microservicios",
        description: "Arquitectura full-stack moderna con frontend Next.js 15 App Router y API backend NestJS. El backend implementa una arquitectura modular con 23+ entidades organizadas en módulos dirigidos por dominio. Cuenta con autenticación JWT, control de acceso basado en roles, TypeORM para gestión de base de datos y pipelines CI/CD automatizados. El frontend usa Server Components y Client Components para rendimiento óptimo.",
        patterns: [
          "Diseño Dirigido por Dominio (DDD)",
          "Patrón de Repositorio con TypeORM",
          "Arquitectura de Capa de Servicio",
          "Patrón Guard para autenticación",
          "Patrón Decorator (NestJS)",
          "Server Components + Client Components (Next.js)",
          "Actualizaciones optimistas con React Query",
          "Control de Acceso Basado en Roles (RBAC)",
        ],
        components: [
          {
            name: "API Backend NestJS",
            description: "API RESTful con 23 entidades y arquitectura modular",
          },
          {
            name: "Frontend Next.js",
            description: "App Router con Server/Client Components",
          },
          {
            name: "Sistema de Autenticación",
            description: "Auth basado en JWT con gestión de roles",
          },
          {
            name: "Visualización de Datos",
            description: "Gráficos y tablas avanzadas para estadísticas",
          },
        ],
      },
      features: [
        {
          title: "Sistema Completo de Gestión de Torneos",
          description: "Organización profesional de torneos con múltiples formatos, fases y configuraciones.",
          highlights: [
            "Múltiples tipos de torneos: Liga, Master, Dobles Express",
            "Organización estacional: Apertura, Clausura, Anual",
            "Soporte para fase de grupos y cuadros de playoffs",
            "Generación automática de fixtures con gestión de byes",
            "Historial y seguimiento de estado de torneos",
            "Torneos multi-categoría con rankings independientes",
          ],
          implementation: "Módulos NestJS con entidades TypeORM para torneos, categorías, participantes y configuraciones",
        },
        {
          title: "Sistema de Ranking Dinámico",
          description: "Cálculo de ranking en tiempo real con seguimiento histórico y múltiples tipos de ranking.",
          highlights: [
            "Ranking global por categoría",
            "Rankings específicos por torneo",
            "Sistema de ranking Carrera al Master",
            "Cálculo automático de posiciones y puntos",
            "Cambios de ranking históricos con registro de auditoría",
            "Funcionalidad de reconstrucción para correcciones de datos",
          ],
          implementation: "Algoritmos de ranking personalizados con queries TypeORM y cache-manager para rendimiento",
        },
        {
          title: "Gestión Avanzada de Partidos",
          description: "Ciclo completo de partidos con seguimiento de sets, estados y programación.",
          highlights: [
            "Estados de partido: Pendiente, En Progreso, Finalizado, Cancelado",
            "Seguimiento de puntaje set por set",
            "Asignación de cancha y turno",
            "Soporte para walkover/bye",
            "Historial y estadísticas de partidos",
            "Organización de fixture/jornada",
          ],
          implementation: "Entidades Match, Set, Shift y Fixture con relaciones y gestión de estado",
        },
        {
          title: "Perfiles Profesionales de Jugadores",
          description: "Gestión integral de jugadores con estadísticas y multimedia.",
          highlights: [
            "Perfiles detallados de jugadores con fotos",
            "Integración con Cloudinary para gestión de imágenes",
            "Estadísticas e historial de partidos",
            "Seguimiento de trofeos y logros",
            "Asignación de categorías",
            "Permisos basados en roles (Jugador/Admin)",
          ],
          implementation: "Entidad User con upload a Cloudinary, procesamiento de imágenes con Sharp y backup en S3",
        },
        {
          title: "Dashboard de Visualización de Datos",
          description: "Visualizaciones ricas de datos para estadísticas y analíticas.",
          highlights: [
            "Gráficos interactivos con Nivo y Recharts",
            "Tablas de datos avanzadas con TanStack Table",
            "Actualizaciones de estadísticas en tiempo real",
            "Calendario de eventos con React Big Calendar",
            "Gráficos responsivos para móvil",
            "Capacidades de exportación",
          ],
          implementation: "Nivo Charts, Recharts y TanStack Table con React Query para sincronización de datos",
        },
        {
          title: "Dashboard Admin y Gestión",
          description: "Interfaz administrativa completa para gestión del sistema.",
          highlights: [
            "Operaciones CRUD para todas las entidades",
            "Creación y configuración de torneos",
            "Gestión y registro de jugadores",
            "Gestión de canchas y categorías",
            "Operaciones en lote e importación de datos",
            "Logs de auditoría y monitoreo del sistema",
          ],
          implementation: "Rutas admin protegidas con RoleGuard y decorators personalizados",
        },
      ],
      challenges: [
        {
          problem: "Cálculo Complejo de Ranking con Seguimiento Histórico",
          solution: "Diseñé un sistema flexible de ranking con entidad HistoryRanking para rastrear todos los cambios de posición. Implementé funcionalidad de reconstrucción para recalcular rankings desde datos históricos. Usé queries TypeORM con indexación apropiada y cache-manager con TTL de 10 minutos para optimización de rendimiento.",
          result: "Manejando exitosamente rankings para 100+ jugadores en múltiples categorías con tiempos de cálculo sub-segundo. Los datos históricos permiten análisis precisos y resolución de disputas.",
          learnings: [
            "Separar datos actuales e históricos mejora el rendimiento de queries",
            "El caché de cálculos de ranking reduce significativamente la carga de la base de datos",
            "Los registros de auditoría son esenciales para sistemas de ranking deportivo",
            "Los índices TypeORM en campos consultados frecuentemente son críticos",
          ],
        },
        {
          problem: "Estructura de Torneo Multi-Fase (Grupos + Playoffs)",
          solution: "Creé diseño modular de entidades con GroupStage, Group, GroupParticipant para fases de grupos y PlayoffStage, PlayoffRound para rondas de eliminación. Implementé sistema flexible de configuración permitiendo diferentes formatos de torneo con gestión apropiada de relaciones.",
          result: "El sistema soporta estructuras complejas de torneo incluyendo grupos round-robin seguidos de playoffs de eliminación. Los administradores pueden configurar torneos con 4-16 participantes en varios formatos.",
          learnings: [
            "El diseño flexible de entidades permite múltiples formatos de torneo",
            "El mapeo apropiado de relaciones previene inconsistencias de datos",
            "Las entidades de configuración separan estructura de implementación",
            "Probar casos extremos (byes, participantes impares) es crucial",
          ],
        },
        {
          problem: "Sincronización de Datos en Tiempo Real en Frontend",
          solution: "Implementé TanStack Query v5 con estrategias inteligentes de invalidación de caché. Creé hooks personalizados para cada dominio de datos con fábricas de query keys. Usé actualizaciones optimistas para feedback inmediato de UI y refetch en segundo plano para mantener datos frescos.",
          result: "Logré actualizaciones en tiempo real fluidas en todas las páginas. Reduje llamadas a API en un 65% mediante caché inteligente. Los usuarios experimentan actualizaciones instantáneas con renderizado optimista.",
          learnings: [
            "La organización de query keys es crucial para invalidación de caché",
            "Las actualizaciones optimistas mejoran enormemente el rendimiento percibido",
            "El refetch en segundo plano mantiene datos frescos sin acción del usuario",
            "Las TanStack Query DevTools son invaluables para debugging",
          ],
        },
      ],
      screenshots: [
        {
          title: "Dashboard de Rankings",
          description: "Tablas de ranking dinámicas con seguimiento de posición en tiempo real",
        },
        {
          title: "Cuadros de Torneo",
          description: "Cuadros de playoff interactivos y visualización de fase de grupos",
        },
        {
          title: "Perfil de Jugador",
          description: "Estadísticas completas de jugador e historial de partidos",
        },
        {
          title: "Dashboard de Administración",
          description: "Interfaz completa de gestión de torneos y jugadores",
        },
      ],
    },
  },
};
