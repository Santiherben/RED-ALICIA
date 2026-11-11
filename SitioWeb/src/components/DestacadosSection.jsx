import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Scale,
  ExternalLink,
  Sparkles,
  FileSignature,
  CheckCircle2,
  Hexagon
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

export default function DestacadosSection() {
  const { destacado, links } = aliciaData;

  return (
    <section
      id="destacados"
      className="py-20 bg-gradient-to-b from-[#eef5f0] via-amber-50/40 to-white dark:from-[#091710] dark:via-[#112217] dark:to-[#09160f] text-slate-900 dark:text-white border-t border-amber-300/70 dark:border-amber-800/40 relative overflow-hidden transition-colors duration-200"
    >
      {/* Patrón de panal sutil */}
      <div className="absolute inset-0 bg-honeycomb-pattern pointer-events-none opacity-75" />

      {/* Resplandores cálidos */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-alicia-sage-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección Destacados */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-400 dark:border-amber-500/40 text-amber-900 dark:text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{destacado.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Destacados: <span className="text-amber-600 dark:text-amber-400">Viernes 13</span> en el IPES
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {destacado.subtitle}
          </p>
        </div>

        {/* Contenedor Principal del Anuncio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Columna Izquierda: Carta / Comunicado Oficial de las Fundadoras (7 columnas) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0d1f16] rounded-3xl p-8 sm:p-10 border-2 border-amber-300/90 dark:border-amber-600/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-alicia-sage-200/80 dark:border-alicia-sage-800/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 flex items-center justify-center border border-amber-300/70">
                    <FileSignature className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
                      Comunicado Oficial a la Comunidad Investigadora
                    </span>
                    <h3 className="font-display text-lg font-black text-slate-900 dark:text-white">
                      Conformación de la Asociación Civil de la Red ALICIA
                    </h3>
                  </div>
                </div>
              </div>

              {/* Cuerpo de la Convocatoria */}
              <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-serif">
                <p className="font-bold text-slate-900 dark:text-white not-italic">
                  {destacado.letterGreeting}
                </p>

                <p>
                  Nos comunicamos con ustedes porque consideramos que pueden estar interesados en conformar la asociación civil de la{' '}
                  <a
                    href={links.redAliciaCFE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-alicia-sage-700 dark:text-alicia-sage-300 underline decoration-amber-500 underline-offset-4 hover:text-amber-700 dark:hover:text-amber-300"
                  >
                    Red Alicia.
                  </a>{' '}
                  El próximo <strong className="text-slate-900 dark:text-white">viernes 13 a las 15:30</strong>, en el{' '}
                  <strong className="text-slate-900 dark:text-white">salón de actos del IPES</strong>, en el marco de las{' '}
                  <a
                    href={links.jifeCFE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-alicia-sage-700 dark:text-alicia-sage-300 underline decoration-alicia-sage-500 underline-offset-4 hover:text-amber-700"
                  >
                    JIFE
                  </a>
                  , se realizará una asamblea de la Red en la que se conformará formalmente la comisión directiva.
                </p>

                <p>
                  Es un momento muy importante porque{' '}
                  <strong className="text-amber-800 dark:text-amber-300">
                    frente a escribano público vamos a construirnos como asociación civil para iniciar el trámite de personería jurídica
                  </strong>
                  . Todos quienes deseen integrarse firmarán el acta. Si por alguna razón no pudieran estar presentes ese día y les interesa formar parte de la Red procuraremos generar las condiciones para que puedan acercarse a firmar el acta en otra instancia, ya que{' '}
                  <strong className="text-slate-900 dark:text-white">
                    contaremos con 30 días después de la asamblea para hacerlo posible
                  </strong>
                  .
                </p>

                <p>
                  Será un hito clave para darle un impulso a las iniciativas de colaboración en investigación que hasta ahora hemos llevado adelante.
                </p>

                <p className="font-bold text-alicia-sage-800 dark:text-amber-300 text-base pt-1">
                  {destacado.letterClosing}
                </p>
              </div>
            </div>

            {/* Firma de las Fundadoras */}
            <div className="mt-8 pt-5 border-t border-alicia-sage-200/80 dark:border-alicia-sage-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-base font-black text-slate-900 dark:text-white">
                  {destacado.letterSigners}
                </p>
                <p className="text-xs font-bold text-alicia-sage-600 dark:text-alicia-sage-400">
                  {destacado.letterSignersRole}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={links.redAliciaCFE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-alicia-sage-100 dark:bg-alicia-sage-900/60 hover:bg-alicia-sage-200 text-alicia-sage-800 dark:text-alicia-sage-200 text-xs font-bold transition-all"
                >
                  <span>Red ALICIA en CFE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={links.jifeCFE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-100 dark:bg-amber-950/70 hover:bg-amber-200 text-amber-900 dark:text-amber-300 text-xs font-bold transition-all"
                >
                  <span>Portal JIFE (CFE)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Coordenadas del Evento y Firma del Acta (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Tarjeta Coordenadas del Viernes 13 */}
            <div className="bg-gradient-to-br from-[#193022] via-alicia-sage-700 to-[#14261b] text-white rounded-3xl p-8 border border-amber-400/40 shadow-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                    <Hexagon className="w-3.5 h-3.5 fill-amber-400/30" />
                    <span>Asamblea Presencial • JIFE</span>
                  </span>
                  <span className="text-xs font-bold text-alicia-sage-200">
                    CFE • ANEP
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black mb-5 leading-snug">
                  Coordenadas de la Asamblea y Firma del Acta
                </h3>

                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-alicia-sage-200 block font-semibold">
                        Fecha de la Asamblea
                      </span>
                      <span className="font-display text-base font-black text-white">
                        Próximo Viernes 13
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-alicia-sage-200 block font-semibold">
                        Horario de Convocatoria
                      </span>
                      <span className="font-display text-base font-black text-white">
                        15:30 horas
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-alicia-sage-200 block font-semibold">
                        Lugar y Marco Académico
                      </span>
                      <span className="font-display text-sm sm:text-base font-black text-white block">
                        Salón de Actos del IPES
                      </span>
                      <span className="text-xs text-amber-200">
                        En el marco de las JIFE (CFE)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/15 space-y-2.5 text-xs text-alicia-sage-100">
                <div className="flex items-start gap-2">
                  <Scale className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>
                    <strong>Personería Jurídica:</strong> Acto ante escribano público y elección de Comisión Directiva.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>
                    <strong>Plazo de 30 días posteriores:</strong> Disponible para quienes no puedan concurrir el viernes 13 y deseen firmar el acta constitutiva.
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta de Enlace a las JIFE */}
            <div className="bg-amber-50/90 dark:bg-[#13241a] p-6 rounded-3xl border border-amber-300 dark:border-amber-700/50 shadow-md flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300 block mb-1">
                  División Planeamiento Educativo • CFE
                </span>
                <h4 className="font-display text-base font-black text-slate-900 dark:text-white">
                  JIFE — Jornadas de Investigación en Formación en Educación
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                  Consulta la información oficial y el programa de las JIFE en el portal del CFE.
                </p>
              </div>
              <a
                href={links.jifeCFE}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 shrink-0 shadow-sm transition-all"
              >
                <span>Ver JIFE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
