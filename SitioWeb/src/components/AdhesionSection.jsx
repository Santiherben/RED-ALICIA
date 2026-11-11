import React, { useState } from 'react';
import {
  UserPlus,
  Users,
  ExternalLink,
  PlayCircle,
  CheckCircle2,
  Sparkles,
  FileSpreadsheet,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

export default function AdhesionSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(aliciaData.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="adhesion"
      className="py-24 bg-[#f3f7f4] dark:bg-[#07120c] text-slate-900 dark:text-white border-t border-alicia-sage-200/80 dark:border-alicia-sage-900/60 relative overflow-hidden transition-colors duration-200"
    >
      <div className="absolute inset-0 bg-honeycomb-pattern pointer-events-none opacity-65" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-alicia-sage-500/15 border border-alicia-sage-300 dark:border-alicia-sage-500/30 text-alicia-sage-800 dark:text-alicia-sage-300 text-xs font-bold uppercase tracking-wider mb-3">
            Registro Oficial & Contacto Directo
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Formularios de Adhesión y Contacto
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            La adhesión a la red la pueden realizar{' '}
            <strong className="text-slate-900 dark:text-white font-bold">
              personas interesadas
            </strong>{' '}
            (para aquellos que no formen parte de ningún equipo de investigación) o{' '}
            <strong className="text-slate-900 dark:text-white font-bold">
              grupos de investigación
            </strong>
            .
          </p>
        </div>

        {/* Dos Tarjetas Principales de Formularios Oficiales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Tarjeta 1: Registro de Personas */}
          <div className="bg-white dark:bg-[#0e2117] rounded-3xl p-8 sm:p-10 border-2 border-alicia-sage-300 dark:border-alicia-sage-700/80 hover:border-alicia-sage-500 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-alicia-sage-600 text-white flex items-center justify-center shadow-md">
                  <UserPlus className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#f3f7f4] dark:bg-[#09160f] text-alicia-sage-700 dark:text-alicia-sage-300 border border-alicia-sage-300 dark:border-alicia-sage-700">
                  Modalidad Individual
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Registro de Personas Interesadas
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Destinado a docentes, estudiantes y personas egresadas interesadas en vincularse a la Red{' '}
                <strong className="text-slate-900 dark:text-white">
                  que actualmente no formen parte de ningún equipo de investigación
                </strong>
                .
              </p>

              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400 shrink-0" />
                  <span>Acceso a espacios de tutorías entre pares, docentes, estudiantes y egresados</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400 shrink-0" />
                  <span>Recepción de convocatorias, eventos e información académica</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400 shrink-0" />
                  <span>Vinculación con líneas y colectivos de investigación del CFE</span>
                </li>
              </ul>
            </div>

            <a
              href={aliciaData.links.formPersonas}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-alicia-sage-600 to-alicia-sage-700 hover:from-alicia-sage-500 hover:to-alicia-sage-600 text-white font-bold text-sm shadow-lg shadow-alicia-sage-600/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01]"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Formulario para registro de personas</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Tarjeta 2: Registro de Grupos de Investigación */}
          <div className="bg-white dark:bg-[#0e2117] rounded-3xl p-8 sm:p-10 border-2 border-teal-300/80 dark:border-teal-800/80 hover:border-teal-500 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                  <Users className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#f3f7f4] dark:bg-[#09160f] text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Modalidad Colectiva / Equipos
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Registro de Grupos de Investigación
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Destinado a{' '}
                <strong className="text-slate-900 dark:text-white">
                  equipos y grupos de investigación
                </strong>{' '}
                que se desempeñan en el ámbito de la Formación en Educación y buscan articular esfuerzos, fortalecer capacidades y generar sinergia de aprendizaje mutuo.
              </p>

              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Lectura cruzada de producciones, validación de instrumentos y citación cruzada</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Co-organización de eventos intergrupales, nacionales e internacionales</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Apoyo en avales institucionales, permisos de campo y redes educativas</span>
                </li>
              </ul>
            </div>

            <a
              href={aliciaData.links.formGrupos}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-600 to-alicia-sage-600 hover:from-teal-500 hover:to-alicia-sage-500 text-white font-bold text-sm shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01]"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Formulario para registro de Grupos de investigación</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Fila Inferior: Correo de Contacto + Canal de YouTube */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Tarjeta Correo de Contacto Oficial */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0e2117] rounded-3xl p-7 border border-alicia-sage-300 dark:border-alicia-sage-700 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center border border-amber-300/70">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-alicia-sage-600 dark:text-alicia-sage-400">
                    Vía de Comunicación Directa
                  </span>
                  <h3 className="font-display text-xl font-black text-slate-900 dark:text-white">
                    Correo de Contacto Red ALICIA
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Para consultas sobre adhesiones, envíos a la <strong>Revista Panal</strong>, propuestas de actividades intergrupales, tutorías o asesorías académicas:
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-[#f3f7f4] dark:bg-[#09160f] border border-alicia-sage-200 dark:border-alicia-sage-800 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${aliciaData.contactEmail}`}
                  className="font-mono font-bold text-xs sm:text-sm text-alicia-sage-800 dark:text-alicia-sage-200 hover:underline truncate"
                >
                  {aliciaData.contactEmail}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white dark:bg-alicia-sage-900 text-slate-700 dark:text-slate-200 border border-alicia-sage-200 dark:border-alicia-sage-700 text-[11px] font-bold hover:bg-alicia-sage-50 cursor-pointer shrink-0"
                  title="Copiar correo electrónico"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${aliciaData.contactEmail}?subject=Contacto%20Red%20ALICIA%20(CFE)`}
                className="w-full py-3.5 px-5 rounded-xl bg-alicia-sage-600 hover:bg-alicia-sage-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Redactar Correo a la Red ALICIA</span>
              </a>
            </div>
          </div>

          {/* Tarjeta Canal Oficial de YouTube */}
          <div className="lg:col-span-7 bg-gradient-to-r from-slate-900 via-[#16271d] to-slate-900 rounded-3xl p-8 border border-alicia-sage-600/40 shadow-2xl text-white flex flex-col justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-15 h-15 rounded-2xl bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center shrink-0 shadow-lg">
                <PlayCircle className="w-9 h-9" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Difusión Audiovisual & Encuentros</span>
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-2">
                  Canal de la Red ALICIA en YouTube
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Accede a las grabaciones de jornadas académicas, conversatorios entre equipos de investigación del CFE, presentaciones de la Revista Panal y actividades colaborativas de la Red ALI.C.I.A.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href={aliciaData.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Visitar Canal de la Red en YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
