import { Binary, Code, Computer, Database, FunctionSquare, GraduationCap, Star, type Props } from "lucide-astro";

export interface Course {
  name: string;
  code?: string;
  status: 'completed' | 'current' | 'pending';
  credits?: number;
}

export interface CourseCategory {
  name: string;
  icon: string | ((_props: Props) => any);
  courses: Course[];
  color: {
    primary: string;
    secondary: string;
    bg: string;
    border: string;
    progressBar: string;
  };
}

export const universityProgress: CourseCategory[] = [
  {
    name: "Introducción a la Computación",
    icon: Computer,
    color: {
      primary: "text-blue-600 dark:text-blue-400",
      secondary: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
      progressBar: 'to-blue-900/70 from-blue-400/70 dark:from-blue-900/70 dark:to-blue-400/70'
    },
    courses: [
      { name: "Introducción a la Programación", status: 'completed', credits: 3 },
      { name: "Taller de Programación", status: 'completed', credits: 3 },
      { name: "Fundamentos de Organización de Computadoras", status: 'completed', credits: 3 },
      { name: "Estructuras de Datos", status: 'completed', credits: 4 },
      { name: "Programación Orientada a Objetos", status: 'completed', credits: 3 },
      { name: "Arquitectura de Computadores", status: 'completed', credits: 4 }
    ]
  },
  {
    name: "Ciencias de la Computación",
    icon: Binary,
    color: {
      primary: "text-purple-600 dark:text-purple-400",
      secondary: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-700",
      progressBar: 'to-purple-900/70 from-purple-400/70 dark:from-purple-900/70 dark:to-purple-400/70'
    },
    courses: [
      { name: "Análisis de Algoritmos", status: 'current', credits: 4 },
      { name: "Lenguajes de Programación", status: 'pending', credits: 4 },
      { name: "Compiladores e Intérpretes", status: 'pending', credits: 4 },
      { name: "Principios de Sistemas Operativos", status: 'pending', credits: 4 },
      { name: "Investigación de Operaciones", status: 'pending', credits: 4 },
      { name: "Inteligencia Artificial", status: 'pending', credits: 4 },
      { name: "Redes", status: 'pending', credits: 4 }
    ]
  },
  {
    name: "Ingeniería de Software",
    icon: Code,
    color: {
      primary: "text-green-600 dark:text-green-400",
      secondary: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-700",
      progressBar: 'to-green-900/70 from-green-400/70 dark:from-green-900/70 dark:to-green-400/70'
    },
    courses: [
      { name: "Requerimientos de Software", status: 'current', credits: 4 },
      { name: "Diseño de Software", status: 'pending', credits: 4 },
      { name: "Administración de Proyectos", status: 'pending', credits: 4 },
      { name: "Aseguramiento de la Calidad de Software", status: 'pending', credits: 3 },
      { name: "Proyecto de Ingeniería de Software", status: 'pending', credits: 3 },
      { name: "Computación y Sociedad", status: 'pending', credits: 2 },
      // { name: "Seguridad del Software", status: 'pending', credits: 3 }
    ]
  },
  {
    name: "Bases de Datos",
    icon: Database,
    color: {
      primary: "text-orange-600 dark:text-orange-400",
      secondary: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      border: "border-orange-200 dark:border-orange-700",
      progressBar: 'to-orange-900/70 from-orange-400/70 dark:from-orange-900/70 dark:to-orange-400/70'
    },
    courses: [
      { name: "Bases de Datos 1", status: 'current', credits: 4 },
      { name: "Bases de Datos 2", status: 'pending', credits: 3 }
    ]
  },
  {
    name: "Electivas",
    icon: Star,
    color: {
      primary: "text-cyan-600 dark:text-cyan-400",
      secondary: "text-cyan-500",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-200 dark:border-cyan-700",
      progressBar: 'to-cyan-900/70 from-cyan-400/70 dark:from-cyan-900/70 dark:to-cyan-400/70'
    },
    courses: [
      { name: "Electiva 1", status: 'pending', credits: 3 },
      { name: "Electiva 2", status: 'pending', credits: 3 }
    ]
  },
  {
    name: "Proyecto Final",
    icon: GraduationCap,
    color: {
      primary: "text-violet-600 dark:text-violet-400",
      secondary: "text-violet-500",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      border: "border-violet-200 dark:border-violet-700",
      progressBar: 'to-violet-900/70 from-violet-400/70 dark:from-violet-900/70 dark:to-violet-400/70'
    },
    courses: [
      { name: "Práctica Profesional", status: 'pending', credits: 12 }
    ]
  }
];

// Funciones de utilidad para estadísticas
export const getProgressStats = () => {
  const allCourses = universityProgress.flatMap(category => category.courses);
  const completed = allCourses.filter(course => course.status === 'completed');
  const current = allCourses.filter(course => course.status === 'current');
  const pending = allCourses.filter(course => course.status === 'pending');

  const totalCredits = allCourses.reduce((sum, course) => sum + (course.credits || 0), 0);
  const completedCredits = completed.reduce((sum, course) => sum + (course.credits || 0), 0);
  const currentCredits = current.reduce((sum, course) => sum + (course.credits || 0), 0);

  return {
    total: allCourses.length,
    completed: completed.length,
    current: current.length,
    pending: pending.length,
    completionPercentage: Math.round((completed.length / allCourses.length) * 100),
    totalCredits,
    completedCredits,
    currentCredits,
    creditsPercentage: Math.round(((completedCredits + currentCredits) / totalCredits) * 100)
  };
};

export const getCategoryProgress = (category: CourseCategory) => {
  const completed = category.courses.filter(course => course.status === 'completed').length;
  const current = category.courses.filter(course => course.status === 'current').length;
  const total = category.courses.length;

  return {
    completed,
    current,
    pending: total - completed - current,
    total,
    percentage: Math.round(((completed + current * 0.5) / total) * 100)
  };
};