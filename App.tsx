
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import LanguageSelector from './components/LanguageSelector';

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'ar';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Apply language direction and lang attribute
    const root = window.document.documentElement;
    if (language) {
      root.lang = language;
      root.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };
  
  if (!language) {
    return <LanguageSelector onSelectLanguage={handleLanguageSelect} />;
  }

  return (
    <div className="flex flex-col min-h-screen antialiased bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header currentTheme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Menu language={language} />
      </main>
    </div>
  );
};

export default App;
