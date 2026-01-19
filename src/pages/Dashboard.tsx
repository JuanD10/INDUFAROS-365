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
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight uppercase">
            ECOSISTEMA <span className="text-primary">MICROSOFT 365</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
            Un sistema de procesos formado por las personas que trabajan en HNC que interactúan entre sí y con su entorno para crear un equilibrio dinámico - automatización de procesos útiles para evitar pérdida de tiempo improductivo.
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

        {/* New Section: Casos de Éxito */}
        <section className="mt-20 max-w-6xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-2 bg-primary rounded-full" />
            <h2 className="text-3xl font-black text-foreground tracking-tight">CASOS DE ÉXITO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://www.youtube.com/embed/UFrve_A6QVk",
              "https://www.youtube.com/embed/Pd0xMGDOeTs",
              "https://www.youtube.com/embed/Y1IJdhwHn7I",
              "https://www.youtube.com/embed/nv2vETQ9zLA"
            ].map((url, index) => (
              <div key={index} className="aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <iframe
                  className="w-full h-full"
                  src={url.replace('youtube.com', 'youtube-nocookie.com')}
                  title={`Caso de éxito ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>
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
