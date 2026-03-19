import { LANGUAGES } from '@/features/i18n/config/languages';
import type { Language } from '@/features/i18n/config/languages';

// Bilingual content for each project
export interface ProjectContent {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  metrics?: Array<{
    label: string;
    value: string;
    description?: string;
  }>;
  role: string;
  imageAlt: string;
}

type ProjectsContent = {
  [K in Language]: {
    [projectId: string]: ProjectContent;
  };
};

export const PROJECTS_CONTENT: ProjectsContent = Object.freeze({
  [LANGUAGES.ES]: Object.freeze({
    'horarios-tec': Object.freeze({
      title: 'Horarios TEC',
      subtitle: 'Herramienta para generar horarios universitarios | Full Stack',
      description: 'Plataforma web inteligente para la generación automática y manual de horarios académicos del Tecnológico de Costa Rica, con algoritmos avanzados de combinaciones, consumo de APIs y transformación de los datos.',
      problem: 'Los estudiantes del TEC enfrentaban dificultades para crear horarios universitarios sin conflictos, perdiendo tiempo valioso en planificación manual y corriendo el riesgo de choques de horarios entre materias.',
      solution: 'Desarrollé una plataforma web completa con React y TypeScript que incluye generación automática de todas las combinaciones posibles de horarios, web scraping para obtener datos actualizados del sistema TEC, algoritmos de detección de conflictos, y tours interactivos para guiar a los usuarios.',
      features: [
        'Generación automática de todas las combinaciones posibles de horarios sin conflictos',
        'Creación manual con búsqueda avanzada por sede, escuela y período académico',
        'Algoritmos de detección y prevención de conflictos de horario',
        'Sistema de tours interactivos para guiar nuevos usuarios',
        'Interfaz responsiva optimizada para dispositivos móviles',
        'Persistencia de datos del usuario en localStorage',
        'Consumo de APIs en tiempo real del sistema oficial del TEC',
      ],
      challenges: [
        'Implementación de algoritmos para generar combinaciones válidas de horarios',
        'Consumo de API del sistema TEC manejando diferentes formatos y errores de conexión',
        'Manejo de estado complejo con múltiples hooks personalizados y context API',
        'Implementación de sistema de tours contextual con Driver.js',
        'Diseño de arquitectura escalable con separación de concerns (features, components, hooks)',
      ],
      metrics: [
        { label: 'Usuarios', value: '+1000', description: 'En la primer semana de lanzamiento' },
      ],
      role: 'Full Stack Developer',
      imageAlt: 'Interfaz de generación automática de horarios del TEC mostrando calendario semanal',
    }),
    'fob-landing': Object.freeze({
      title: 'Florencia Orquesta Band',
      subtitle: 'Landing Page para Grupo Musical',
      description: 'Landing page interactiva para el grupo de música en vivo Florencia Orquesta Band, con diseño responsivo, animaciones y optimización SEO.',
      problem: 'El grupo de música necesitaba una presencia en línea atractiva y funcional para promocionar sus eventos y conectar con su audiencia, pero las soluciones existentes eran limitadas o demasiado costosas.',
      solution: 'Desarrollé una landing page personalizada con Astro y Tailwind CSS, optimizada para SEO y con un diseño responsivo que incluye animaciones suaves, integración de redes sociales y un formulario de contacto interactivo.',
      features: [
        'Diseño responsivo y optimizado para móviles',
        'Animaciones suaves con CSS y JavaScript',
        'Integración de redes sociales y enlaces a plataformas de música',
        'Formulario de contacto interactivo con validación',
        'Optimización SEO para mejorar visibilidad en buscadores',
        'Carga diferida de imágenes y recursos para mejorar rendimiento',
        'Uso de componentes reutilizables para facilitar mantenimiento',
      ],
      challenges: [
        'Diseño de una interfaz atractiva y funcional que refleje la identidad del grupo',
        'Asegurar que la landing page sea completamente responsiva y accesible',
        'Optimización SEO para mejorar la visibilidad en buscadores',
        'Integración de un formulario de contacto que sea fácil de usar y seguro',
      ],
      metrics: [
        { label: 'Tiempo de carga', value: '< 1.5s', description: 'Promedio de la página' },
        { label: 'Lighthouse Score', value: '100%', description: 'Optimización total' },
      ],
      role: 'Frontend Developer',
      imageAlt: 'Landing del grupo de música en vivo Florencia Orquesta Band',
    }),
    'dev-plan-kit': Object.freeze({
      title: 'DevPlanKit',
      subtitle: 'Dashboard para controlar proyectos de desarrollo y producción, IA integrada para redaccion de requerimientos y brainstorming.',
      description: 'Dashboard para controlar proyectos de desarrollo y producción, IA integrada para redaccion de requerimientos y brainstorming.',
      problem: '',
      solution: '',
      features: [
        "Separación entre 'Ideas' y 'Proyectos' para un mejor desarrollo de conceptos.",
        'Integración de IA para redacción de requerimientos y brainstorming.',
        'Interfaz intuitiva y fácil de usar para gestionar proyectos.',
      ],
      challenges: [],
      metrics: [],
      role: 'Fullstack Developer',
      imageAlt: 'Dashboard para controlar proyectos de desarrollo y producción, IA integrada para redaccion de requerimientos y brainstorming.',
    }),
  }),
  [LANGUAGES.EN]: Object.freeze({
    'horarios-tec': Object.freeze({
      title: 'TEC Schedules',
      subtitle: 'University Schedule Generator Tool | Full Stack',
      description: 'Intelligent web platform for automatic and manual generation of academic schedules for Costa Rica Institute of Technology, with advanced combination algorithms, API consumption and data transformation.',
      problem: 'TEC students faced difficulties creating university schedules without conflicts, wasting valuable time on manual planning and risking schedule clashes between courses.',
      solution: 'I developed a complete web platform with React and TypeScript that includes automatic generation of all possible schedule combinations, web scraping to obtain updated data from the TEC system, conflict detection algorithms, and interactive tours to guide users.',
      features: [
        'Automatic generation of all possible schedule combinations without conflicts',
        'Manual creation with advanced search by campus, school and academic period',
        'Schedule conflict detection and prevention algorithms',
        'Interactive tour system to guide new users',
        'Responsive interface optimized for mobile devices',
        'User data persistence in localStorage',
        'Real-time API consumption from official TEC system',
      ],
      challenges: [
        'Implementation of algorithms to generate valid schedule combinations',
        'TEC system API consumption handling different formats and connection errors',
        'Complex state management with multiple custom hooks and context API',
        'Implementation of contextual tour system with Driver.js',
        'Scalable architecture design with separation of concerns (features, components, hooks)',
      ],
      metrics: [
        { label: 'Users', value: '+1000', description: 'In the first week of launch' },
      ],
      role: 'Full Stack Developer',
      imageAlt: 'TEC automatic schedule generation interface showing weekly calendar',
    }),
    'fob-landing': Object.freeze({
      title: 'Florencia Orquesta Band',
      subtitle: 'Landing Page for Music Group',
      description: 'Interactive landing page for the live music group Florencia Orquesta Band, with responsive design, animations and SEO optimization.',
      problem: 'The music group needed an attractive and functional online presence to promote their events and connect with their audience, but existing solutions were limited or too expensive.',
      solution: 'I developed a custom landing page with Astro and Tailwind CSS, optimized for SEO and with a responsive design that includes smooth animations, social media integration and an interactive contact form.',
      features: [
        'Responsive design optimized for mobile devices',
        'Smooth animations with CSS and JavaScript',
        'Social media integration and links to music platforms',
        'Interactive contact form with validation',
        'SEO optimization to improve search engine visibility',
        'Lazy loading of images and resources to improve performance',
        'Use of reusable components to facilitate maintenance',
      ],
      challenges: [
        'Design of an attractive and functional interface that reflects the group\'s identity',
        'Ensure that the landing page is completely responsive and accessible',
        'SEO optimization to improve search engine visibility',
        'Integration of a contact form that is easy to use and secure',
      ],
      metrics: [
        { label: 'Load time', value: '< 1.5s', description: 'Page average' },
        { label: 'Lighthouse Score', value: '100%', description: 'Total optimization' },
      ],
      role: 'Frontend Developer',
      imageAlt: 'Landing page for live music group Florencia Orquesta Band',
    }),
    'dev-plan-kit': Object.freeze({
      title: 'DevPlanKit',
      subtitle: 'Dashboard to control development and production projects, integrated AI for requirement writing and brainstorming.',
      description: 'Dashboard to control development and production projects, integrated AI for requirement writing and brainstorming.',
      problem: '',
      solution: '',
      features: [
        "Separation between 'Ideas' and 'Projects' for better concept development.",
        'AI integration for requirement writing and brainstorming.',
        'Intuitive and easy-to-use interface for project management.',
      ],
      challenges: [],
      metrics: [],
      role: 'Fullstack Developer',
      imageAlt: 'Dashboard to control development and production projects, integrated AI for requirement writing and brainstorming.',
    }),
  }),
});

export const getProjectContent = (projectId: string, language: Language): ProjectContent | undefined => {
  return PROJECTS_CONTENT[language][projectId];
};
