import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng: string) => {
    console.log(lng);
    
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('fr')}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
