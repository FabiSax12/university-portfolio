export const LANGUAGES = Object.freeze({
  ES: 'es',
  EN: 'en',
} as const);

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
