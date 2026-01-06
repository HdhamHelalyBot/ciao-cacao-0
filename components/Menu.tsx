
import React from 'react';
import { getMenuDataForLang } from '../data/menuData';
import CategoryNav from './CategoryNav';
import type { Language } from '../App';

interface MenuProps {
  language: Language;
}

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') 
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};


const Menu: React.FC<MenuProps> = ({ language }) => {
    const isArabic = language === 'ar';
    const menuData = getMenuDataForLang(language);
    
    const categories = menuData.map(cat => ({
        name: cat.category,
        id: slugify(cat.category),
    }));

  return (
    <div>
      <CategoryNav categories={categories} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {menuData.map((category, index) => (
          <section key={index} id={slugify(category.category)} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-8 text-center" style={{ fontFamily: 'serif' }}>
              {category.category}
            </h2>
            <div className="grid grid-cols-1 gap-y-4 max-w-3xl mx-auto">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                  <div className="flex justify-between items-start gap-4">
                    {!isArabic && (
                      <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                        {item.price}
                      </p>
                    )}
                    <div className={`flex-grow ${isArabic ? 'text-right' : 'text-left'}`}>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      {item.description && (
                         <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                          {item.description}
                         </p>
                      )}
                    </div>
                     {isArabic && (
                      <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                        {item.price}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
