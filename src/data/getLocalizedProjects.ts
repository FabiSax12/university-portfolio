import type { Language } from '@/features/i18n/config/languages';
import { projects, type Project } from './projects';
import { PROJECTS_CONTENT, getProjectContent } from './projects-content';

export const getLocalizedProjects = (language: Language): Project[] => {
  return projects.map((project) => {
    const content = getProjectContent(project.id, language);
    
    if (!content) {
      // Fallback to original if translation doesn't exist
      return project;
    }
    
    return {
      ...project,
      title: content.title,
      subtitle: content.subtitle,
      description: content.description,
      problem: content.problem,
      solution: content.solution,
      features: content.features,
      challenges: content.challenges,
      metrics: content.metrics || project.metrics,
      role: content.role,
      imageAlt: content.imageAlt,
    };
  });
};

export const getLocalizedProjectById = (id: string, language: Language): Project | undefined => {
  const project = projects.find(p => p.id === id);
  if (!project) return undefined;
  
  const content = getProjectContent(id, language);
  if (!content) return project;
  
  return {
    ...project,
    title: content.title,
    subtitle: content.subtitle,
    description: content.description,
    problem: content.problem,
    solution: content.solution,
    features: content.features,
    challenges: content.challenges,
    metrics: content.metrics || project.metrics,
    role: content.role,
    imageAlt: content.imageAlt,
  };
};
