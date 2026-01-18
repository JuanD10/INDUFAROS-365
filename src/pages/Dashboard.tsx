import React from 'react';
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import { categories } from '@/data/m365Apps';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight">
            Mapa del Ecosistema <span className="text-primary">Microsoft 365</span><br />
            <span className="text-2xl md:text-3xl font-bold opacity-80">– Grupo HNC –</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
            Este mapa visual representa cómo las herramientas de Microsoft 365 se integran y trabajan de forma conjunta dentro del ecosistema digital de la organización.
          </p>
          <div className="inline-block px-6 py-2 rounded-full bg-secondary/50 border border-border/50 shadow-sm">
            <p className="text-sm md:text-base text-muted-foreground font-semibold">
              Gobierno, Normatividad y Buenas Prácticas del Ecosistema Microsoft 365.
              <span className="block md:inline ml-1 opacity-80">Selecciona una herramienta para conocer sus reglas de uso institucional.</span>
            </p>
          </div>
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
