// Main i18n exports for easy importing
export { LANGUAGES, type Language } from './config/languages';
export { DEFAULT_LANGUAGE } from './config/defaultLanguage';
export { getTranslation } from './domain/getTranslation';
export { FORMATTERS } from './domain/formatters';
export type { Translations, TranslationKey } from './domain/types';
export { detectLanguage } from './utils/detectLanguage';
export { saveLanguagePreference, getLanguagePreference } from './utils/languageStorage';
