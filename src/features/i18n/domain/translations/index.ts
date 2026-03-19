import { LANGUAGES } from '../../config/languages';
import { TRANSLATIONS_ES } from './es';
import { TRANSLATIONS_EN } from './en';
import type { AllTranslations } from '../types';

export const ALL_TRANSLATIONS: AllTranslations = Object.freeze({
  [LANGUAGES.ES]: TRANSLATIONS_ES,
  [LANGUAGES.EN]: TRANSLATIONS_EN,
});
