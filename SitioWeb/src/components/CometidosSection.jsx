import React from 'react';
import { Share2, Handshake, Sprout, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

const cometidoIcons = {
  Share2,
  Handshake,
  Sprout,
  Users,
  Sparkles,
};

export default function CometidosSection() {
  return (
    <section
      id="cometidos"
      className="py-24 bg-[#f3f7f4] dark:bg-[#07120c] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-alicia-sage-900/60 border border-alicia-sage-300 dark:border-alicia-sage-700 text-alicia-sage-700 dark:text-alicia-sage-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            Propósitos de la Alianza
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Cometidos de la Red ALICIA
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Cinco propósitos articuladores orientados a conectar equipos, fortalecer capacidades y dar sostenibilidad a la función investigativa en el CFE.
          </p>
        </div>

        {/* Grid de los 5 Cometidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aliciaData.cometidos.map((cometido, idx) => {
            const Icon = cometidoIcons[cometido.icon] || Sparkles;
            const isFeatured = idx === 0 || idx === 4;

            return (
              <div
                key={cometido.id}
                className={`group rounded-3xl p-8 transition-all duration-300 border flex flex-col justify-between hover:-translate-y-1 ${
                  idx === 4
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-alicia-sage-600 via-alicia-sage-700 to-[#25392d] text-white border-alicia-sage-500 shadow-xl'
                    : 'bg-white dark:bg-[#0d1f16] border-alicia-sage-200/90 dark:border-alicia-sage-800/80 hover:border-alicia-sage-500 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center border ${
                        idx === 4
                          ? 'bg-white/15 border-white/25 text-white'
                          : 'bg-alicia-sage-100 dark:bg-alicia-sage-500/20 border-alicia-sage-200 dark:border-alicia-sage-500/30 text-alicia-sage-700 dark:text-alicia-sage-300'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                          idx === 4
                            ? 'bg-white/15 text-alicia-ochre-200 border-white/20'
                            : 'bg-alicia-sage-50 dark:bg-alicia-sage-900/60 text-alicia-sage-700 dark:text-alicia-sage-300 border-alicia-sage-200 dark:border-alicia-sage-700'
                        }`}
                      >
                        {cometido.badge}
                      </span>
                      <span
                        className={`font-display text-2xl font-black ${
                          idx === 4
                            ? 'text-white/40'
                            : 'text-alicia-sage-300 dark:text-alicia-sage-700'
                        }`}
                      >
                        0{cometido.id}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`font-display text-xl font-black mb-3 leading-snug ${
                      idx === 4 ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {cometido.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      idx === 4 ? 'text-alicia-sage-100 max-w-2xl' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cometido.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-semibold ${
                    idx === 4
                      ? 'border-white/15 text-alicia-ochre-200'
                      : 'border-alicia-sage-100 dark:border-alicia-sage-800/60 text-alicia-sage-700 dark:text-alicia-sage-400'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Cometido institucional de RED ALI.C.I.A</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
