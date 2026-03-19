import type { Language } from '../config/languages';
import { DEFAULT_LANGUAGE } from '../config/defaultLanguage';
import { ALL_TRANSLATIONS } from './translations';
import type { Translations } from './types';

export const getTranslation = (language: Language = DEFAULT_LANGUAGE): Translations => {
  return ALL_TRANSLATIONS[language] || ALL_TRANSLATIONS[DEFAULT_LANGUAGE];
};
