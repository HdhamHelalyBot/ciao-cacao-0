
import React from 'react';
import type { Language } from '../App';

interface LanguageSelectorProps {
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl text-center max-w-sm w-full mx-4 transform transition-all duration-300 scale-100">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2" style={{ fontFamily: 'serif' }}>
          Ciao Cacao
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Please select your language <br/> يرجى اختيار لغتك
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => onSelectLanguage('en')}
            className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            English
          </button>
          <button
            onClick={() => onSelectLanguage('ar')}
            className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
