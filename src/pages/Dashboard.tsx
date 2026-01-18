import React from 'react';
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import { categories } from '@/data/m365Apps';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Centro de Aplicaciones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora las herramientas del ecosistema Microsoft 365 para potenciar la productividad de tu organización
          </p>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Row 1: Communication */}
          <CategorySection 
            category={categories[0]} 
            animationDelay={100}
          />

          {/* Row 2: Documents */}
          <CategorySection 
            category={categories[1]} 
            animationDelay={200}
          />

          {/* Row 3: Automation & AI */}
          <div className="grid md:grid-cols-2 gap-6">
            <CategorySection 
              category={categories[2]} 
              animationDelay={300}
            />
            <CategorySection 
              category={categories[3]} 
              animationDelay={350}
            />
          </div>

          {/* Row 4: Productivity & Analytics */}
          <div className="grid md:grid-cols-2 gap-6">
            <CategorySection 
              category={categories[4]} 
              animationDelay={400}
            />
            <CategorySection 
              category={categories[5]} 
              animationDelay={450}
            />
          </div>

          {/* Row 5: Security */}
          <CategorySection 
            category={categories[6]} 
            animationDelay={500}
          />
        </div>
      </main>

      <footer className="bg-card border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 Ecosistema Microsoft 365 - Portal Empresarial</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
