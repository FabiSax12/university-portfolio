import { Calendar, MapPin, Users, TrendingUp, Briefcase, type Props } from "lucide-astro";

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  department?: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined = "Actualidad"
  type: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract' | 'volunteer';
  mode: 'remote' | 'hybrid' | 'on-site';
  description: string;
  achievements: string[];
  responsibilities: string[];
  skills: string[];
  techUsed?: string[]; // Tecnologías si las usaste
  metrics?: {
    label: string;
    value: string;
    description?: string;
  }[];
  companyInfo: {
    size: string; // "10-50 empleados", "500+ empleados", etc.
    industry: string;
    website?: string;
    logo?: string;
  };
  references?: {
    name: string;
    position: string;
    contact?: string; // email o linkedin
  }[];
  techConnection?: string; // Cómo se conecta con tu carrera tech
  learnings: string[]; // Qué aprendiste de esta experiencia
}

export const workExperiences: WorkExperience[] = [
  {
    id: "practica-electro-beyco-2024",
    company: "Electro Beyco",
    position: "Practicante en Armado de Paneles Eléctricos",
    department: "Taller de Armado y Programación",
    location: "San Carlos, Costa Rica",
    startDate: "2024-01",
    endDate: "2024-03",
    type: 'internship',
    mode: 'on-site',
    description: "Práctica profesional en empresa especializada en armado e instalación de paneles eléctricos industriales. Desarrollé habilidades técnicas trabajando desde la construcción física hasta la programación de interfaces HMI usando software industrial de Siemens y Schneider Electric.",
    achievements: [
      "Programé exitosamente interfaces HMI usando TIA Portal (Siemens) y Automation Expert (Schneider Electric)",
      "Completé cableados complejos de paneles eléctricos siguiendo diagramas técnicos con 100% de precisión",
      "Participé en instalaciones en sitio del cliente, asegurando funcionamiento correcto de sistemas industriales",
      "Colaboré con equipos técnicos multidisciplinarios en proyectos de automatización industrial",
      "Desarrollé habilidades de troubleshooting resolviendo problemas técnicos en tiempo real",
      "Mantuve estándares de calidad y seguridad en todos los proyectos asignados"
    ],
    responsibilities: [
      "Programación de interfaces HMI (Human-Machine Interface) usando TIA Portal y Automation Expert",
      "Cableado de paneles eléctricos desde cero siguiendo diagramas y especificaciones técnicas",
      "Lectura e interpretación de diagramas eléctricos y documentación técnica",
      "Instalación y puesta en marcha de paneles eléctricos en instalaciones de clientes",
      "Uso de herramientas especializadas para ensamblaje y instalación de componentes eléctricos",
      "Mantenimiento de orden y limpieza en área de trabajo siguiendo protocolos de seguridad",
      "Colaboración con ingenieros y técnicos en proyectos de automatización industrial",
      "Testing y validación de sistemas antes de entrega al cliente"
    ],
    skills: [
      "Programación de HMI",
      "Lectura de diagramas técnicos",
      "Troubleshooting técnico",
      "Trabajo en equipo",
      "Atención al detalle",
      "Resolución de problemas",
      "Pensamiento lógico",
      "Seguimiento de protocolos",
      "Comunicación técnica",
      "Adaptabilidad",
      "Manejo de herramientas especializadas",
      "Control de calidad"
    ],
    techUsed: [
      "TIA Portal (Siemens)",
      "Automation Expert (Schneider Electric)",
      "Diagramas eléctricos",
      "HMI Programming",
      "Herramientas de medición eléctrica",
      "Software de automatización industrial"
    ],
    metrics: [
      {
        label: "Paneles completados",
        value: "6",
        description: "Proyectos de cableado finalizados exitosamente"
      },
      {
        label: "HMIs programados",
        value: "2",
        description: "Interfaces programadas en TIA Portal y Automation Expert"
      },
      {
        label: "Instalaciones",
        value: "2",
        description: "Instalaciones en sitio del cliente completadas"
      }
    ],
    companyInfo: {
      size: "10-30 empleados",
      industry: "Automatización Industrial",
      website: "https://electrobeyco.com",
      logo: ""
    },
    references: [
      {
        name: "Supervisor de Taller",
        position: "Encargado de Producción",
        contact: "Disponible bajo solicitud"
      }
    ],
    techConnection: "Esta experiencia fue reveladora: programar HMIs me mostró que disfruto crear interfaces que las personas usan para controlar sistemas complejos. Ver cómo la lógica de programación controla procesos físicos me fascinó. Trabajar con diagramas técnicos y debugging de sistemas me enseñó que tengo las habilidades fundamentales para la programación - pensamiento lógico, atención al detalle y capacidad de resolver problemas sistemáticamente. La diferencia entre programar un HMI y una aplicación web es el contexto, pero la lógica es la misma.",
    learnings: [
      "La programación es programación, sin importar si controlas una máquina o una aplicación web",
      "La precisión y atención al detalle son fundamentales - un error pequeño puede afectar todo el sistema",
      "Trabajar con documentación técnica desarrolló mi capacidad de entender especificaciones complejas",
      "La colaboración con técnicos experimentados aceleró mi aprendizaje exponencialmente",
      "Los sistemas complejos se construyen conectando componentes simples de manera inteligente",
      "El troubleshooting sistemático es una habilidad transferible a cualquier área técnica",
      "La satisfacción de ver un sistema funcionando correctamente después de programarlo es incomparable"
    ]
  }
  // Aquí puedes agregar más experiencias cuando las tengas
];

// Utility functions
export const getCurrentJob = () => {
  return workExperiences.find(exp => !exp.endDate);
};

export const getExperiencesByType = (type: WorkExperience['type']) => {
  return workExperiences.filter(exp => exp.type === type);
};

export const getTotalExperienceMonths = () => {
  return workExperiences.reduce((total, exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return total + months;
  }, 0);
};

export const getAllSkillsFromExperience = () => {
  const allSkills = workExperiences.flatMap(exp => exp.skills);
  return [...new Set(allSkills)];
};

export const getExperienceStats = () => {
  const total = workExperiences.length;
  const currentlyWorking = workExperiences.filter(exp => !exp.endDate).length;
  const totalMonths = getTotalExperienceMonths();
  const uniqueSkills = getAllSkillsFromExperience().length;
  const companiesWorked = new Set(workExperiences.map(exp => exp.company)).size;

  return {
    total,
    currentlyWorking,
    totalMonths,
    uniqueSkills,
    companiesWorked,
    averageMonthsPerJob: total > 0 ? Math.round(totalMonths / total) : 0
  };
};

export const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short'
    });
  };

  const startFormatted = formatDate(start);
  const endFormatted = end ? formatDate(end) : 'Actualidad';

  return `${startFormatted} - ${endFormatted}`;
};

export const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  if (months < 1) return 'Menos de 1 mes';
  if (months === 1) return '1 mes';
  if (months < 12) return `${months} meses`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 1 && remainingMonths === 0) return '1 año';
  if (years === 1) return `1 año ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
  if (remainingMonths === 0) return `${years} años`;

  return `${years} años ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
};