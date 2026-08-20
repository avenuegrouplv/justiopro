import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'LV' | 'ENG' | 'RUS';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'LV',
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('justiopro_lang');
    if (saved === 'ENG' || saved === 'RUS' || saved === 'LV') {
      return saved;
    }
    return 'LV';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('justiopro_lang', lang);
    const htmlLang = lang === 'LV' ? 'lv' : lang === 'ENG' ? 'en' : 'ru';
    document.documentElement.lang = htmlLang;
  };

  useEffect(() => {
    const htmlLang = language === 'LV' ? 'lv' : language === 'ENG' ? 'en' : 'ru';
    document.documentElement.lang = htmlLang;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
