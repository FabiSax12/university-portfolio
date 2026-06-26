import type { Language } from '../config/languages';

export interface TranslationObject {
  [key: string]: string;
}

export interface PagesTranslations {
  HOME: TranslationObject;
}

export interface Translations {
  common: TranslationObject;
  hero: TranslationObject;
  contact: TranslationObject;
  footer: TranslationObject;
  projects: TranslationObject;
  university: TranslationObject;
  metadata: TranslationObject;
  pages: PagesTranslations;
}

export type TranslationKey = keyof Translations;

export type AllTranslations = {
  [K in Language]: Translations;
};
