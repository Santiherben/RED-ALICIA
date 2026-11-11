import React from 'react';
import {
  Hexagon,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  FileText,
  Send
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

export default function RevistaPanalSection() {
  const { revistaPanal } = aliciaData;

  return (
    <section
      id="revista-panal"
      className="py-24 bg-gradient-to-b from-amber-50/60 via-[#f6f9f7] to-white dark:from-[#101c13] dark:via-[#0b1811] dark:to-[#09160f] text-slate-900 dark:text-white border-y border-amber-200/80 dark:border-amber-900/40 relative overflow-hidden transition-colors duration-200"
    >
      {/* Patrón de panal de fondo */}
      <div className="absolute inset-0 bg-honeycomb-pattern pointer-events-none opacity-80" />

      {/* Resplandores cálidos de miel y salvia */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-alicia-sage-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            <Hexagon className="w-4 h-4 fill-amber-500/30 text-amber-600 dark:text-amber-400" />
            <span>Órgano Oficial de Divulgación • {revistaPanal.issn}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Revista <span className="text-amber-600 dark:text-amber-400">PANAL</span> — Red ALICIA
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            El espacio editorial donde confluyen las celdas del trabajo investigativo de docentes, estudiantes y personas egresadas del Consejo de Formación en Educación (CFE).
          </p>
        </div>

        {/* Bloque Principal de Revista Panal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Tarjeta Visual Portada Simbólica del Panal (5 columnas) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1b3325] via-[#244431] to-[#14261c] rounded-3xl p-8 text-white shadow-2xl border border-amber-400/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {revistaPanal.issn}
                </span>
                <span className="text-xs font-bold text-alicia-sage-200">
                  CFE • ANEP • Uruguay
                </span>
              </div>

              {/* Ilustración Vectorial de Panal Literario */}
              <div className="my-6 flex items-center justify-center">
                <div className="relative w-44 h-44 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-amber-400/50 flex flex-col items-center justify-center p-4 shadow-xl">
                  <Hexagon className="w-20 h-20 text-amber-400 fill-amber-400/20 stroke-[1.8]" />
                  <span className="font-display text-2xl font-black tracking-wider text-white mt-2">
                    PANAL
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    Revista Red ALICIA
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl font-black text-center mb-2">
                {revistaPanal.title}
              </h3>
              <p className="text-xs text-center text-alicia-sage-200 mb-6">
                {revistaPanal.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={revistaPanal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-white text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Acceder a Revista Panal en Portal CFE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${aliciaData.contactEmail}?subject=Consulta%20Revista%20Panal%20-%20Red%20ALICIA`}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/15 transition-all"
              >
                <Send className="w-3.5 h-3.5 text-amber-300" />
                <span>Consultar envío de artículos ({aliciaData.contactEmail})</span>
              </a>
            </div>
          </div>

          {/* Descripción, Pilares y Ediciones de Revista Panal (7 columnas) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            <div className="bg-white dark:bg-[#0e2117] p-8 rounded-3xl border border-alicia-sage-200 dark:border-alicia-sage-800/80 shadow-lg">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>La Metáfora del Panal en la Producción Científica</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                {revistaPanal.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {revistaPanal.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-2xl bg-[#f6f9f7] dark:bg-[#09160f] border border-alicia-sage-200/70 dark:border-alicia-sage-800/70 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ediciones Destacadas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {revistaPanal.issues.map((issue, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0e2117] p-6 rounded-3xl border border-amber-200/90 dark:border-amber-800/40 hover:border-amber-400 shadow-md flex flex-col justify-between transition-all hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/50">
                        {issue.number}
                      </span>
                      <FileText className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400" />
                    </div>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {issue.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {issue.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {issue.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-alicia-sage-50 dark:bg-alicia-sage-900/50 text-alicia-sage-700 dark:text-alicia-sage-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={revistaPanal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
                    >
                      <span>Ver publicación en CFE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
