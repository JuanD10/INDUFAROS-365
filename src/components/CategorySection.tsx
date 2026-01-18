import React from 'react';
import AppCard from './AppCard';
import { Category } from '@/data/m365Apps';

interface CategorySectionProps {
  category: Category;
  animationDelay?: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, animationDelay = 0 }) => {
  return (
    <div 
      className={`category-section ${category.bgClass} opacity-0 animate-fade-in`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <h2 className={`category-header ${category.colorClass}`}>
        {category.name}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {category.apps.map((app, index) => (
          <AppCard 
            key={app.id} 
            id={app.id} 
            name={app.name}
            delay={animationDelay + (index + 1) * 50}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
