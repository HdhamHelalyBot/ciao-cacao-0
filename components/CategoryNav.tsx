
import React from 'react';

interface CategoryNavProps {
  categories: { name: string; id: string }[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Prevent the default hash link behavior
    e.preventDefault();
    
    // Find the element that corresponds to the hash link
    const targetElement = document.getElementById(targetId);

    // Scroll to the element if it exists, with a smooth animation
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm z-10 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="no-scrollbar flex items-center overflow-x-auto py-3 space-x-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => handleNavClick(e, category.id)}
              className="whitespace-nowrap px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-800 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
