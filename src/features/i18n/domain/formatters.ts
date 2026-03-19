import { LANGUAGES } from '../config/languages';

export const FORMATTERS = Object.freeze({
  [LANGUAGES.ES]: Object.freeze({
    DATE: (dateString: string): string => {
      const date = new Date(dateString);
      const month = date.toLocaleDateString('es-ES', { month: 'short' });
      const year = date.getFullYear();
      return `${month}. ${year}`;
    },
    
    TEAM_SIZE: (size: number): string => {
      return size === 1 ? 'Solo' : `${size} personas`;
    },
    
    PERCENTAGE: (value: number): string => {
      return `${value}%`;
    },
    
    FEATURE_COUNT: (count: number): string => {
      return `+${count} característica${count === 1 ? '' : 's'} más...`;
    },
    
    STATUS_TEXT: (status: string): string => {
      const statusMap: Record<string, string> = {
        'completed': 'Completado',
        'in-progress': 'En desarrollo',
        'planning': 'En planificación',
        'pending': 'Pendiente',
      };
      return statusMap[status] || status;
    },
    
    OF_TOTAL: (current: number, total: number): string => {
      return `${current} de ${total}`;
    },
    
    CREDITS_WITH_TOTAL: (current: number, total: number): string => {
      return `${current} de ${total} créditos`;
    },
    
    PROGRESS_PERCENT: (percent: number): string => {
      return `${percent}% completado`;
    },
  }),
  
  [LANGUAGES.EN]: Object.freeze({
    DATE: (dateString: string): string => {
      const date = new Date(dateString);
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      const year = date.getFullYear();
      return `${month}. ${year}`;
    },
    
    TEAM_SIZE: (size: number): string => {
      return size === 1 ? 'Solo' : `${size} people`;
    },
    
    PERCENTAGE: (value: number): string => {
      return `${value}%`;
    },
    
    FEATURE_COUNT: (count: number): string => {
      return `+${count} more feature${count === 1 ? '' : 's'}...`;
    },
    
    STATUS_TEXT: (status: string): string => {
      const statusMap: Record<string, string> = {
        'completed': 'Completed',
        'in-progress': 'In Progress',
        'planning': 'Planning',
        'pending': 'Pending',
      };
      return statusMap[status] || status;
    },
    
    OF_TOTAL: (current: number, total: number): string => {
      return `${current} of ${total}`;
    },
    
    CREDITS_WITH_TOTAL: (current: number, total: number): string => {
      return `${current} of ${total} credits`;
    },
    
    PROGRESS_PERCENT: (percent: number): string => {
      return `${percent}% complete`;
    },
  }),
});
