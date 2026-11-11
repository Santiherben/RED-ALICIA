import React from 'react';
import {
  Building2,
  Scale,
  Briefcase,
  Network,
  Calendar,
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

const factorIcons = {
  Building2,
  Scale,
  Briefcase,
  Network,
};

export default function AboutAliciaSection({ onOpenFundamentos }) {
  return (
    <section
      id="que-es"
      className="py-24 bg-white dark:bg-[#09160f] text-slate-900 dark:text-white border-y border-alicia-sage-200/80 dark:border-alicia-sage-900/50 relative overflow-hidden transition-colors duration-200"
    >
      {/* Luces ambientales suaves */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-alicia-sage-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-alicia-ochre-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-alicia-sage-100 dark:bg-alicia-sage-500/15 border border-alicia-sage-300 dark:border-alicia-sage-500/30 text-alicia-sage-800 dark:text-alicia-sage-300 text-xs font-bold uppercase tracking-wider mb-3">
            Identidad & Origen Institucional
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            ¿Qué es ALICIA?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Alianza para la Colaboración, la Investigación y los Aprendizajes en el ámbito de la Formación en Educación en Uruguay.
          </p>
        </div>

        {/* Bloque Principal: Texto Fundacional + Hito del 23 de febrero de 2022 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Narrativa Fundacional Íntegra (7 columnas) */}
          <div className="lg:col-span-7 bg-[#f6f9f7] dark:bg-[#0e2117] p-8 sm:p-10 rounded-3xl border border-alicia-sage-200 dark:border-alicia-sage-800/70 shadow-lg flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-alicia-sage-700 dark:text-alicia-sage-400">
                <Sparkles className="w-4 h-4" />
                <span>Fundamentación y Contexto en Formación en Educación</span>
              </div>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                Como equipos de investigación que nos desempeñamos en el ámbito de la{' '}
                <strong className="text-slate-900 dark:text-white font-bold">Formación en Educación</strong>, impactan en nuestro desempeño: las culturas profesionales e institucionales de las que formamos parte; las políticas a nivel macro y micro, las posibilidades de financiamiento; las condiciones laborales (sueldo, cantidad de horas, multiempleo, etc.) y las alianzas que estén establecidas con otras instituciones o con otras comunidades investigadoras.
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                La formación en Educación de Uruguay actualmente es terciaria no universitaria, sin embargo, la{' '}
                <strong className="text-alicia-sage-800 dark:text-alicia-sage-300 font-semibold">
                  función de investigación ya se ha incorporado a las tareas del profesorado formador, estudiantado y personas egresadas
                </strong>
                , por diversos medios. La producción de conocimiento es una práctica establecida que, sin embargo, se lleva adelante aún de forma desarticulada, con escasa conexión entre las personas formadoras investigadoras.
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-alicia-sage-500 pl-4 py-1 bg-white/70 dark:bg-[#09160f]/60 rounded-r-xl font-serif italic">
                “Los apoyos económicos con los que se cuenta son percibidos como insuficientes, de acuerdo a lo que se constató en la jornada del 23 de febrero de 2022, en la que se relevó el interés de docentes, estudiantes y egresadas de CFE en la conformación de la Red. En el entendido de que la generación de lazos entre equipos investigadores podrá contribuir a dar sostenibilidad a la función investigativa, surge esta red.”
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-alicia-sage-200/80 dark:border-alicia-sage-800/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-alicia-sage-700 dark:text-alicia-sage-300">
                <CheckCircle2 className="w-4 h-4 text-alicia-sage-600" />
                <span>Construcción colectiva desde y para el CFE</span>
              </div>
              <button
                onClick={onOpenFundamentos}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-alicia-sage-700 dark:text-alicia-sage-300 hover:text-alicia-sage-900 dark:hover:text-white underline underline-offset-4 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Leer síntesis fundacional completa</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha: Hito 23 Feb 2022 + Transformación en Red (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Tarjeta Hito Fundacional 23/02/2022 */}
            <div className="bg-gradient-to-br from-alicia-sage-600 via-alicia-sage-700 to-[#2b4234] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider mb-5">
                  <Calendar className="w-3.5 h-3.5 text-alicia-ochre-300" />
                  <span>Hito Histórico • 23 de febrero de 2022</span>
                </div>
                <h3 className="font-display text-2xl font-black mb-3 leading-snug">
                  Jornada de Relevamiento e Impulso Colectivo en CFE
                </h3>
                <p className="text-alicia-sage-100 text-xs sm:text-sm leading-relaxed">
                  En la jornada del 23 de febrero de 2022 se relevó formalmente el interés convergente de{' '}
                  <strong className="text-white">docentes, estudiantes y personas egresadas del CFE</strong> en conformar una alianza capaz de articular la producción de conocimiento y fortalecer la función investigativa frente a la escasez de apoyos económicos y la desconexión entre equipos.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs font-semibold text-alicia-ochre-200">
                  De la desarticulación a la alianza colaborativa
                </span>
                <a
                  href="#adhesion"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-alicia-sage-900 hover:bg-alicia-ochre-100 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Sumarse hoy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Tarjeta de Transición: Diagnóstico -> Respuesta de ALICIA */}
            <div className="bg-alicia-ochre-50/80 dark:bg-[#13241b] p-7 rounded-3xl border border-alicia-ochre-200 dark:border-alicia-ochre-500/30 shadow-md">
              <h4 className="font-display text-base font-black text-slate-900 dark:text-white mb-3">
                ¿Por qué nace la Red ALI.C.I.A?
              </h4>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-[#0a1610] border border-slate-200/80 dark:border-slate-800">
                  <span className="font-bold text-amber-700 dark:text-alicia-ochre-400 block mb-0.5">
                    Diagnóstico compartido:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    Práctica investigativa ya incorporada en formación terciaria, pero desarrollada aún de forma desarticulada y con apoyos económicos percibidos como insuficientes.
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-alicia-sage-50 dark:bg-alicia-sage-950/80 border border-alicia-sage-300 dark:border-alicia-sage-700">
                  <span className="font-bold text-alicia-sage-800 dark:text-alicia-sage-300 block mb-0.5">
                    Respuesta de la Red:
                  </span>
                  <span className="text-slate-700 dark:text-slate-200">
                    Generación de lazos entre equipos e investigadores para dar sostenibilidad, apoyo mutuo, validación y proyección a la investigación educativa.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dimensiones que impactan en el desempeño investigativo */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">
              Dimensiones que Impactan en Nuestro Desempeño Investigador
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Factores contextuales, laborales e institucionales identificados por los equipos en el ámbito de la Formación en Educación
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aliciaData.contextFactors.map((factor) => {
              const Icon = factorIcons[factor.icon] || Building2;
              return (
                <div
                  key={factor.id}
                  className="bg-[#f8faf9] dark:bg-[#0d1f16] p-6 rounded-2xl border border-alicia-sage-200/90 dark:border-alicia-sage-800/80 hover:border-alicia-sage-500 dark:hover:border-alicia-sage-500 transition-all duration-300 hover:-translate-y-1 shadow-xs"
                >
                  <div className="w-11 h-11 rounded-xl bg-alicia-sage-100 dark:bg-alicia-sage-500/20 text-alicia-sage-700 dark:text-alicia-sage-300 flex items-center justify-center mb-4 border border-alicia-sage-200 dark:border-alicia-sage-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {factor.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
