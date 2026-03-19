import type { Language } from '../config/languages';

export interface TranslationObject {
  [key: string]: string
  // | (((...args: any[]) => string));
}

export interface Translations {
  common: TranslationObject;
  hero: TranslationObject;
  contact: TranslationObject;
  footer: TranslationObject;
  projects: TranslationObject;
  university: TranslationObject;
  metadata: TranslationObject;
}

export type TranslationKey = keyof Translations;

export type AllTranslations = {
  [K in Language]: Translations;
};
