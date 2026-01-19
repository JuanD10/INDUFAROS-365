import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Lightbulb, Info, ShieldCheck, ThumbsUp, MessageSquare, AlertTriangle, Zap, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import { getAppById, getCategoryById } from '@/data/m365Apps';
import { iconMap } from '@/components/icons/M365Icons';
import { Separator } from '@/components/ui/separator';

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

      <main className="container mx-auto px-4 py-8 pb-20">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-all mb-8 opacity-0 animate-fade-in group"
        >
          <div className="p-2 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-semibold text-sm uppercase tracking-wider">Volver al Centro de Aplicaciones</span>
        </Link>
        <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow mb-10 opacity-0 animate-fade-in relative overflow-hidden" style={{ animationDelay: '100ms' }}>
          {/* Decorative background element */}
          <div className={`absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 rounded-full blur-3xl opacity-10 ${category?.bgClass || 'bg-primary'}`} />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
            {IconComponent && (
              <div className={`p-6 rounded-3xl ${category?.bgClass || 'bg-primary'} shadow-lg shadow-primary/20`}>
                <IconComponent className="w-16 h-16" />
              </div>
            )}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">{app.name}</h1>
                {category && (
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${category.bgClass} ${category.colorClass} shadow-sm`}>
                    {category.name}
                  </span>
                )}
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {app.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column: Usage & Rules */}
          <div className="lg:col-span-2 space-y-8">
            {/* Uso */}
            <section
              className="bg-card rounded-2xl p-8 border border-border/50 card-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Uso del Servicio</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-blue-500 pl-6 mb-8">
                "{app.usage}"
              </p>

              <Separator className="my-8" />

              {/* Normas y reglas */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Normas y Reglas de Uso</h2>
                </div>
                <div className="grid gap-4">
                  {app.rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-primary border border-border">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground text-[16px] pt-1">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Ejemplos */}
            <section
              className="bg-card rounded-2xl p-8 border border-border/50 card-shadow opacity-0 animate-fade-in overflow-hidden"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Escenarios de Uso</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col h-full rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/5 p-6 relative">
                  <span className="absolute top-0 right-0 mt-4 mr-4 px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">Adecuado</span>
                  <div className="mb-4 text-emerald-600 font-bold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Uso Correcto
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {app.examples.adequate}
                  </p>
                  <div className="mt-auto pt-4 border-t border-emerald-500/20 text-emerald-600 text-[11px] font-medium flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    Recomendado por Gobierno TI
                  </div>
                </div>

                <div className="flex flex-col h-full rounded-2xl border-2 border-rose-500/20 bg-rose-500/5 p-6 relative">
                  <span className="absolute top-0 right-0 mt-4 mr-4 px-3 py-1 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">Inadecuado</span>
                  <div className="mb-4 text-rose-600 font-bold flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Malas Prácticas
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {app.examples.inadequate}
                  </p>
                  <div className="mt-auto pt-4 border-t border-rose-500/20 text-rose-600 text-[11px] font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Acción no recomendada
                  </div>
                </div>
              </div>
            </section>

            {/* Videos Section */}
            {app.videos && app.videos.length > 0 && (
              <section
                className="bg-card rounded-2xl p-8 border border-border/50 card-shadow opacity-0 animate-fade-in"
                style={{ animationDelay: '350ms' }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">Recursos en Video</h2>
                </div>
                <div className={`grid gap-6 ${app.videos.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {app.videos.map((url, index) => {
                    const getEmbedUrl = (url: string) => {
                      if (url.includes('embed/')) return url;
                      let videoId = '';
                      if (url.includes('v=')) {
                        videoId = url.split('v=')[1]?.split('&')[0];
                      } else if (url.includes('youtu.be/')) {
                        videoId = url.split('youtu.be/')[1]?.split('?')[0];
                      } else {
                        videoId = url.split('/').pop()?.split('?')[0] || '';
                      }
                      return `https://www.youtube-nocookie.com/embed/${videoId}`;
                    };
                    const embedUrl = getEmbedUrl(url);

                    return (
                      <div key={index} className="aspect-video rounded-2xl overflow-hidden border border-border bg-black shadow-sm">
                        <iframe
                          className="w-full h-full"
                          src={embedUrl}
                          title={`${app.name} Video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Best Practices, Errors & Impact */}
          <div className="space-y-8">
            {/* Buenas prácticas */}
            <section
              className="bg-card rounded-2xl p-6 border-t-4 border-emerald-500 card-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ThumbsUp className="w-5 h-5 text-emerald-500" />
                <h3 className="text-xl font-bold text-foreground">Buenas Prácticas</h3>
              </div>
              <ul className="space-y-4">
                {app.bestPractices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                    <span className="text-muted-foreground text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Errores comunes */}
            <section
              className="bg-card rounded-2xl p-6 border-t-4 border-amber-500 card-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: '500ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-bold text-foreground">Errores a Evitar</h3>
              </div>
              <ul className="space-y-4">
                {app.commonErrors.map((error, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
                    <span className="text-muted-foreground text-sm leading-tight font-medium">{error}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Impacto */}
            <section
              className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-6 text-white card-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: '600ms' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-rose-200" />
                <h3 className="text-xl font-bold">Impacto del Mal Uso</h3>
              </div>
              <p className="text-rose-50 text-sm leading-relaxed">
                {app.impact}
              </p>
              <div className="mt-6 flex justify-end">
                <div className="p-2 rounded-full bg-white/10">
                  <ArrowLeft className="w-4 h-4 text-white rotate-180" />
                </div>
              </div>
            </section>
            <div className="p-8 rounded-2xl bg-secondary/30 border border-dashed border-border text-center opacity-0 animate-fade-in" style={{ animationDelay: '700ms' }}>
              <p className="text-xs text-muted-foreground font-medium mb-4">¿Necesitas soporte técnico con esta herramienta?</p>
              <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                Ir al Centro de Soporte
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 mb-20 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Link
            to="/"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Centro de Aplicaciones
          </Link>
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
