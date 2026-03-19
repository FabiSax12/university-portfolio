import type { Language } from '../config/languages';

const STORAGE_KEY = 'preferred-language';

export const saveLanguagePreference = (language: Language): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, language);
    console.log("Saved language preference:", language);
  }
};

export const getLanguagePreference = (): Language | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEY) as Language | null;
  }
  return null;
};
