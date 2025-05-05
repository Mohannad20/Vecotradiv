import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '../i18next.jsx';

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang).then(() => {
      setCurrentLang(newLang);
    });
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={toggleLanguage}
        className="bg-white text-black font-[Monument] uppercase 
        p-1 md:p-2 border-2 border-dashed border-black
        hover:bg-black hover:text-white hover:border-white
        transition-all duration-300 flex items-center justify-center
        group relative overflow-hidden"
        aria-label="Toggle language"
      >
        <span className={`transform transition-transform duration-500 ${currentLang === "en" ? "translate-y-full" : "translate-y-0"}`}>
          FR
        </span>
        <span className={`absolute transform transition-transform duration-500 ${currentLang === "en" ? "-translate-y-0" : "-translate-y-full"}`}>
          EN
        </span>
      </button>

      <div className="font-[nippo] text-xs text-center">
        {currentLang === "fr" ? "Français" : "English"}
      </div>
    </div>
  );
};

export default LanguageSwitcher;