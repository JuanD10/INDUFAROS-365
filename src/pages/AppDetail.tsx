import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import { getAppById, getCategoryById } from '@/data/m365Apps';
import { iconMap } from '@/components/icons/M365Icons';

const AppDetail: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const app = appId ? getAppById(appId) : undefined;
  const category = app ? getCategoryById(app.category) : undefined;
  const IconComponent = appId ? iconMap[appId] : undefined;

  if (!app) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Aplicación no encontrada</h1>
          <Link to="/" className="back-button">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 opacity-0 animate-fade-in"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Volver al menú principal</span>
        </Link>

        {/* App header */}
        <div className="bg-card rounded-2xl p-8 card-shadow mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {IconComponent && (
              <div className={`p-4 rounded-2xl ${category?.bgClass || 'bg-primary'}`}>
                <IconComponent className="w-16 h-16" />
              </div>
            )}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{app.name}</h1>
                {category && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${category.bgClass} ${category.colorClass}`}>
                    {category.name}
                  </span>
                )}
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {app.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Features */}
          <div 
            className="bg-card rounded-2xl p-6 card-shadow opacity-0 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Características principales
            </h2>
            <ul className="space-y-3">
              {app.features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use cases */}
          <div 
            className="bg-card rounded-2xl p-6 card-shadow opacity-0 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-category-productivity" />
              Casos de uso
            </h2>
            <ul className="space-y-3">
              {app.useCases.map((useCase, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-category-productivity mt-2 flex-shrink-0" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Placeholder for additional content */}
        <div 
          className="bg-card rounded-2xl p-8 card-shadow mt-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Contenido adicional
          </h2>
          <div className="bg-secondary/50 rounded-xl p-8 border-2 border-dashed border-border text-center">
            <p className="text-muted-foreground">
              Espacio reservado para contenido explicativo adicional: tutoriales, videos, documentación, guías de implementación, etc.
            </p>
          </div>
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

export default AppDetail;
