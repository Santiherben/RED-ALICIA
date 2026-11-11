import React, { useState } from 'react';
import {
  GraduationCap,
  ClipboardCheck,
  Link2,
  BookOpenCheck,
  Quote,
  CalendarRange,
  Megaphone,
  FileCheck2,
  Award,
  Compass,
  Globe2,
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

const actionIcons = {
  GraduationCap,
  ClipboardCheck,
  Link2,
  BookOpenCheck,
  Quote,
  CalendarRange,
  Megaphone,
  FileCheck2,
  Award,
  Compass,
  Globe2,
};

export default function AccionesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Todas',
    'Formación y Tutorías',
    'Metodología y Producción',
    'Trabajo de Campo y Vínculos',
    'Eventos y Difusión',
    'Trayectorias y Consultoría',
  ];

  const filteredActions = aliciaData.acciones.filter((accion) => {
    const matchesCategory =
      selectedCategory === 'Todas' || accion.category === selectedCategory;
    const matchesSearch =
      accion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      accion.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      accion.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="acciones"
      className="py-24 bg-white dark:bg-[#09160f] text-slate-900 dark:text-white border-y border-alicia-sage-200/80 dark:border-alicia-sage-900/60 relative overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-alicia-sage-100 dark:bg-alicia-sage-500/15 border border-alicia-sage-300 dark:border-alicia-sage-500/30 text-alicia-sage-800 dark:text-alicia-sage-300 text-xs font-bold uppercase tracking-wider mb-3">
            Prácticas Colaborativas en Red
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Acciones de la Red ALICIA
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Algunas de las acciones colaborativas que pueden realizarse desde ALICIA para acompañar cada etapa del proceso investigativo:
          </p>
        </div>

        {/* Barra de Filtros por Categoría y Buscador */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 bg-[#f4f8f5] dark:bg-[#0d1f16] p-4 rounded-2xl border border-alicia-sage-200/80 dark:border-alicia-sage-800/70">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-alicia-sage-600 text-white shadow-sm'
                      : 'bg-white dark:bg-[#09160f] text-slate-700 dark:text-slate-300 hover:bg-alicia-sage-100 dark:hover:bg-alicia-sage-900/50 border border-alicia-sage-200/70 dark:border-alicia-sage-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar acción (ej. tutorías, avales)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-[#09160f] border border-alicia-sage-200 dark:border-alicia-sage-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-alicia-sage-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Grilla de las 11 Acciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActions.map((accion) => {
            const Icon = actionIcons[accion.icon] || Sparkles;
            return (
              <div
                key={accion.id}
                className="group bg-[#f8faf9] dark:bg-[#0d1f16] hover:bg-white dark:hover:bg-[#11281d] rounded-3xl p-7 border border-alicia-sage-200/90 dark:border-alicia-sage-800/80 hover:border-alicia-sage-500 dark:hover:border-alicia-sage-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-alicia-sage-100 dark:bg-alicia-sage-500/20 text-alicia-sage-700 dark:text-alicia-sage-300 flex items-center justify-center border border-alicia-sage-200 dark:border-alicia-sage-500/30 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white dark:bg-[#09160f] text-alicia-sage-700 dark:text-alicia-sage-300 border border-alicia-sage-200 dark:border-alicia-sage-800">
                      {accion.category}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs font-black text-alicia-sage-500 dark:text-alicia-sage-400 font-mono">
                      #{accion.id.toString().padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {accion.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {accion.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-alicia-sage-200/60 dark:border-alicia-sage-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Acción colaborativa ALICIA
                  </span>
                  <a
                    href="#adhesion"
                    className="inline-flex items-center gap-1 text-xs font-bold text-alicia-sage-700 dark:text-alicia-sage-300 hover:text-alicia-sage-900 dark:hover:text-white"
                  >
                    <span>Participar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
