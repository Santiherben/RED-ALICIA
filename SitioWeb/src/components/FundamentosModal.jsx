import React from 'react';
import { X, FileText, CheckCircle2, ExternalLink, PlayCircle, UserPlus, Users } from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

export default function FundamentosModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#0b1911] border border-alicia-sage-300 dark:border-alicia-sage-700 rounded-3xl max-w-4xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-alicia-sage-200 dark:border-alicia-sage-800 flex items-center justify-between bg-[#f4f8f5] dark:bg-[#0e2117]">
          <div className="flex items-center gap-3.5">
            <img
              src="./logo/logo_alicia.png"
              alt="Logo RED ALI.C.I.A"
              className="w-11 h-11 rounded-xl bg-white p-1 border border-alicia-sage-200 object-contain"
            />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-alicia-sage-700 dark:text-alicia-sage-400">
                Documento Institucional • Jornada 23/02/2022
              </span>
              <h3 className="font-display text-xl font-black text-slate-900 dark:text-white">
                RED ALI.C.I.A — Síntesis Fundacional, Cometidos y Acciones
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-alicia-sage-100 dark:hover:bg-alicia-sage-900/50 transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
          
          <div>
            <h4 className="font-display text-lg font-black text-alicia-sage-700 dark:text-alicia-sage-400 mb-3">
              ¿Qué es ALICIA? (Alianza para la Colaboración, la Investigación y los Aprendizajes)
            </h4>
            <div className="space-y-3">
              {aliciaData.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-black text-alicia-sage-700 dark:text-alicia-sage-400 mb-3">
              Cometidos
            </h4>
            <ul className="space-y-2">
              {aliciaData.cometidos.map((c) => (
                <li key={c.id} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400 shrink-0 mt-1" />
                  <span>{c.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-black text-alicia-sage-700 dark:text-alicia-sage-400 mb-3">
              Acciones Colaborativas
            </h4>
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
              Algunas de las acciones colaborativas que pueden realizarse desde ALICIA se relacionan con:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {aliciaData.acciones.map((a) => (
                <li
                  key={a.id}
                  className="p-3 rounded-xl bg-[#f6f9f7] dark:bg-[#0e2117] border border-alicia-sage-200/70 dark:border-alicia-sage-800/70 text-xs flex items-start gap-2"
                >
                  <span className="font-mono font-bold text-alicia-sage-600 dark:text-alicia-sage-400">
                    {a.id}.
                  </span>
                  <span>{a.description}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-alicia-sage-200 dark:border-alicia-sage-800 bg-[#f4f8f5] dark:bg-[#0e2117] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={aliciaData.links.formPersonas}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-alicia-sage-600 hover:bg-alicia-sage-500 text-white text-xs font-bold transition-all"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Registro Personas</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={aliciaData.links.formGrupos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Registro Grupos</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={aliciaData.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all"
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Canal YouTube</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
