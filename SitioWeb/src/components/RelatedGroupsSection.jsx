import React from 'react';
import {
  Hexagon,
  ExternalLink,
  Network,
  Globe2,
  BookOpen,
  Users
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

export default function RelatedGroupsSection() {
  return (
    <section
      id="grupos-enlaces"
      className="py-24 bg-white dark:bg-[#09160f] text-slate-900 dark:text-white border-t border-alicia-sage-200/80 dark:border-alicia-sage-900/60 relative overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-alicia-sage-100 dark:bg-alicia-sage-500/15 border border-alicia-sage-300 dark:border-alicia-sage-500/30 text-alicia-sage-800 dark:text-alicia-sage-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Tejido Institucional y Colectivos</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Grupos Relacionados y Enlaces de Interés
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Conoce a los equipos de investigación cofundadores que dieron origen al panal de la Red ALICIA y accede a las plataformas académicas vinculadas del CFE.
          </p>
        </div>

        {/* 1. Grupos de Investigación Cofundadores / Relacionados */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <Hexagon className="w-5 h-5 text-amber-500 fill-amber-500/20" />
            <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">
              Grupos de Investigación Impulsores del Panal (CFE)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aliciaData.relatedGroups.map((group) => (
              <div
                key={group.id}
                className="bg-[#f6f9f7] dark:bg-[#0d1f16] rounded-3xl p-7 border border-alicia-sage-200/90 dark:border-alicia-sage-800/80 hover:border-alicia-sage-500 shadow-md flex flex-col justify-between transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-display text-xl font-black px-3.5 py-1.5 rounded-2xl bg-alicia-sage-600 text-white shadow-xs">
                      {group.acronym}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/60">
                      {group.badge}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {group.name}
                  </h4>
                  <p className="text-xs font-semibold text-alicia-sage-600 dark:text-alicia-sage-400 mb-3">
                    {group.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-alicia-sage-200/70 dark:border-alicia-sage-800/70 flex items-center gap-2 text-xs font-bold text-alicia-sage-700 dark:text-alicia-sage-300">
                  <Users className="w-4 h-4" />
                  <span>Ámbito del Consejo de Formación en Educación</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Enlaces Institucionales, Repositorios y Redes Relacionadas */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <Globe2 className="w-5 h-5 text-alicia-sage-600 dark:text-alicia-sage-400" />
            <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">
              Enlaces Institucionales, Portales y Redes Vinculadas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aliciaData.relatedLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#f8faf9] dark:bg-[#0d1f16] hover:bg-white dark:hover:bg-[#132a1e] p-6 rounded-2xl border border-alicia-sage-200/90 dark:border-alicia-sage-800/80 hover:border-alicia-sage-500 dark:hover:border-amber-400/70 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-alicia-sage-100 dark:bg-alicia-sage-900/60 text-alicia-sage-800 dark:text-alicia-sage-300">
                      {item.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-alicia-sage-600 dark:group-hover:text-amber-300 transition-colors" />
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-alicia-sage-700 dark:group-hover:text-amber-300 transition-colors mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-alicia-sage-100 dark:border-alicia-sage-800/60 text-[11px] font-bold text-alicia-sage-700 dark:text-alicia-sage-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Abrir enlace oficial</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
