
import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentTheme, onToggleTheme }) => {
  return (
    <header className="flex-shrink-0 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white" style={{ fontFamily: 'serif' }}>
              Ciao Cacao
            </h1>
          </div>
          <div className="flex items-center">
            <ThemeToggle theme={currentTheme} toggleTheme={onToggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
