import { lv } from './lv';
import { en } from './en';
import { ru } from './ru';
import { TranslationSchema } from './types';
import { useLanguage, Language } from '../context/LanguageContext';

export type { Language };

export const translations: Record<Language, TranslationSchema> = {
  LV: lv,
  ENG: en,
  RUS: ru,
};

export const useTranslation = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || lv;
  return { t, language, setLanguage, lang: language.toLowerCase() };
};

export * from './types';

