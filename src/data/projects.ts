import { Code, Database, Globe, Users, Zap, Shield } from "lucide-astro";
import type { Props } from "lucide-astro";

export interface TechStack {
  name: string;
  icon: string;
  color?: string;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'docs' | 'figma';
  url: string;
  label: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  techStack: TechStack[];
  features: string[];
  challenges: string[];
  metrics?: ProjectMetric[];
  links: ProjectLink[];
  image: string;
  imageAlt: string;
  status: 'completed' | 'in-progress' | 'planning';
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  startDate: string;
  endDate?: string;
  teamSize?: number;
  role: string;
  priority: number; // Para ordenar proyectos (1 = más importante)
}

export const projects: Project[] = [
  {
    "id": "horarios-tec",
    "title": "Horarios TEC",
    "subtitle": "Herramienta para generar horarios universitarios | Full Stack",
    "description": "Plataforma web inteligente para la generación automática y manual de horarios académicos del Tecnológico de Costa Rica, con algoritmos avanzados de combinaciones, consumo de APIs y transformación de los datos.",
    "problem": "Los estudiantes del TEC enfrentaban dificultades para crear horarios universitarios sin conflictos, perdiendo tiempo valioso en planificación manual y corriendo el riesgo de choques de horarios entre materias.",
    "solution": "Desarrollé una plataforma web completa con React y TypeScript que incluye generación automática de todas las combinaciones posibles de horarios, web scraping para obtener datos actualizados del sistema TEC, algoritmos de detección de conflictos, y tours interactivos para guiar a los usuarios.",
    "techStack": [
      { "name": "React", "icon": "/icons/skills/react.svg" },
      { "name": "TypeScript", "icon": "/icons/skills/typescript.svg" },
      { "name": "Tailwind CSS", "icon": "/icons/skills/tailwind.svg" },
      { "name": "Node.js", "icon": "/icons/skills/nodejs.svg" },
      { "name": "Express", "icon": "/icons/skills/express.svg" },
      { "name": "Vite", "icon": "/icons/skills/vite.svg" }
    ],
    "features": [
      "Generación automática de todas las combinaciones posibles de horarios sin conflictos",
      "Creación manual con búsqueda avanzada por sede, escuela y período académico",
      "Algoritmos de detección y prevención de conflictos de horario",
      "Sistema de tours interactivos para guiar nuevos usuarios",
      "Interfaz responsiva optimizada para dispositivos móviles",
      "Persistencia de datos del usuario en localStorage",
      "Consumo de APIs en tiempo real del sistema oficial del TEC"
    ],
    "challenges": [
      "Implementación de algoritmos para generar combinaciones válidas de horarios",
      "Consumo de API del sistema TEC manejando diferentes formatos y errores de conexión",
      "Manejo de estado complejo con múltiples hooks personalizados y context API",
      "Implementación de sistema de tours contextual con Driver.js",
      "Diseño de arquitectura escalable con separación de concerns (features, components, hooks)"
    ],
    "metrics": [
      { "label": "Usuarios", "value": "+1000", "description": "En la primer semana de lanzamiento" },
      // { "label": "Tiempo de carga", "value": "< 1.5s", "description": "Promedio de la aplicación" },
      // { "label": "Cobertura TypeScript", "value": "100%", "description": "Tipado estricto" },
      // { "label": "Eficiencia algoritmo", "value": "O(n!)", "description": "Complejidad optimizada" }
    ],
    "links": [
      { "type": "github", "url": "https://github.com/FabiSax12/easy-tec_proyect", "label": "Ver código" },
      { "type": "demo", "url": "https://horarios-tec.vercel.app", "label": "Demo en vivo" }
    ],
    "image": "/projects/tec-horarios/demo.png",
    "imageAlt": "Interfaz de generación automática de horarios del TEC mostrando calendario semanal",
    "status": "completed",
    "category": "fullstack",
    "startDate": "2025-01",
    "teamSize": 1,
    "role": "Full Stack Developer",
    "priority": 1
  },
  {
    id: "fob-landing",
    title: "Florencia Orquesta Band",
    subtitle: "Landing Page para Grupo Musical",
    description: "Landing page interactiva para el grupo de música en vivo Florencia Orquesta Band, con diseño responsivo, animaciones y optimización SEO.",
    problem: "El grupo de música necesitaba una presencia en línea atractiva y funcional para promocionar sus eventos y conectar con su audiencia, pero las soluciones existentes eran limitadas o demasiado costosas.",
    solution: "Desarrollé una landing page personalizada con Astro y Tailwind CSS, optimizada para SEO y con un diseño responsivo que incluye animaciones suaves, integración de redes sociales y un formulario de contacto interactivo.",
    techStack: [
      { name: "Astro", icon: "/icons/skills/astro.svg" },
      { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
    ],
    features: [
      "Diseño responsivo y optimizado para móviles",
      "Animaciones suaves con CSS y JavaScript",
      "Integración de redes sociales y enlaces a plataformas de música",
      "Formulario de contacto interactivo con validación",
      "Optimización SEO para mejorar visibilidad en buscadores",
      "Carga diferida de imágenes y recursos para mejorar rendimiento",
      "Uso de componentes reutilizables para facilitar mantenimiento"
    ],
    challenges: [
      "Diseño de una interfaz atractiva y funcional que refleje la identidad del grupo",
      "Asegurar que la landing page sea completamente responsiva y accesible",
      "Optimización SEO para mejorar la visibilidad en buscadores",
      "Integración de un formulario de contacto que sea fácil de usar y seguro",
    ],
    metrics: [
      { label: "Tiempo de carga", value: "< 1.5s", description: "Promedio de la página" },
      { label: "Lighthouse Score", value: "100%", description: "Optimización total" }
    ],
    links: [
      { type: 'github', url: 'https://github.com/FabiSax12/fob-landing', label: 'Ver código' },
      { type: 'demo', url: 'https://florenciaorquestaband.com', label: 'Web Oficial' }
    ],
    image: "/projects/fob/demo.png",
    imageAlt: "Landing del grupo de música en vivo Florencia Orquesta Band",
    status: 'completed',
    category: 'frontend',
    startDate: "2024-03",
    endDate: "2024-05",
    teamSize: 1,
    role: "Frontend Developer",
    priority: 2
  },
  // {
  //   id: "task-api",
  //   title: "TaskFlow API",
  //   subtitle: "API REST para Gestión de Proyectos",
  //   description: "API robusta para gestión de tareas y proyectos con autenticación avanzada, roles de usuario y documentación interactiva.",
  //   problem: "Los equipos de desarrollo necesitaban una API flexible para integrar gestión de tareas en sus aplicaciones, pero las soluciones existentes eran muy rígidas o costosas.",
  //   solution: "Construí una API REST con Node.js y Express que sigue principios SOLID, incluye documentación automática con Swagger, autenticación JWT, y un sistema de permisos granular.",
  //   techStack: [
  //     { name: "Node.js", icon: "/icons/skills/nodejs.svg", color: "text-green-500" },
  //     { name: "TypeScript", icon: "/icons/skills/typescript.svg", color: "text-blue-500" },
  //     { name: "NestJS", icon: "/icons/skills/nestjs.svg", color: "text-red-600" },
  //     { name: "PostgreSQL", icon: "/icons/skills/postgres.svg", color: "text-blue-400" },
  //     { name: "Docker", icon: "/icons/skills/docker.svg", color: "text-blue-600" },
  //     { name: "JWT", icon: "/icons/skills/jwt.svg", color: "text-purple-500" }
  //   ],
  //   features: [
  //     "Autenticación JWT con refresh tokens",
  //     "Sistema de roles y permisos granular",
  //     "CRUD completo para proyectos y tareas",
  //     "Filtrado y paginación avanzada",
  //     "Validación robusta con class-validator",
  //     "Rate limiting y throttling",
  //     "Documentación automática con Swagger",
  //     "Tests unitarios y de integración"
  //   ],
  //   challenges: [
  //     "Diseño de sistema de permiissos escalable",
  //     "Optimización de queries con relaciones complejas",
  //     "Implementación de rate limiting eficiente",
  //     "Documentación automática sincronizada con código"
  //   ],
  //   metrics: [
  //     { label: "Endpoints", value: "47", description: "APIs documentadas" },
  //     { label: "Response time", value: "< 150ms", description: "Promedio P95" },
  //     { label: "Uptime", value: "99.9%", description: "Últimos 6 meses" },
  //     { label: "Tests", value: "156", description: "Casos cubiertos" }
  //   ],
  //   links: [
  //     { type: 'github', url: 'https://github.com/FabiSax12/taskflow-api', label: 'Ver código' },
  //     { type: 'docs', url: 'https://taskflow-api.docs.dev', label: 'API Docs' },
  //     { type: 'demo', url: 'https://taskflow-api.herokuapp.com/health', label: 'API Status' }
  //   ],
  //   image: "/projects/fob/demo.png",
  //   imageAlt: "Landing del grupo de música en vivo Florencia Orquesta Band",
  //   status: 'completed',
  //   category: 'frontend',
  //   startDate: "2024-03",
  //   endDate: "2024-05",
  //   teamSize: 1,
  //   role: "Frontend Developer",
  //   priority: 2
  // }
];

// Utility functions
export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.sort((a, b) => a.priority - b.priority).slice(0, 3);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};

export const getProjectStats = () => {
  const total = projects.length;
  const completed = projects.filter(p => p.status === 'completed').length;
  const inProgress = projects.filter(p => p.status === 'in-progress').length;

  const techUsed = [...new Set(projects.flatMap(p => p.techStack.map(t => t.name)))];

  return {
    total,
    completed,
    inProgress,
    techCount: techUsed.length,
    completionRate: Math.round((completed / total) * 100)
  };
};