import type { Language } from '../config/languages';
import { LANGUAGES } from '../config/languages';
import { DEFAULT_LANGUAGE } from '../config/defaultLanguage';
import { getLanguagePreference } from './languageStorage';

export const detectLanguage = (): Language => {
  // 1. Check localStorage first
  const savedLanguage = getLanguagePreference();
  if (savedLanguage && Object.values(LANGUAGES).includes(savedLanguage)) {
    return savedLanguage;
  }
  
  // 2. Check browser language
  if (typeof window !== 'undefined' && navigator.language) {
    const browserLang = navigator.language.split('-')[0];
    if (Object.values(LANGUAGES).includes(browserLang as Language)) {
      return browserLang as Language;
    }
  }
  
  // 3. Fallback to default
  return DEFAULT_LANGUAGE;
};
