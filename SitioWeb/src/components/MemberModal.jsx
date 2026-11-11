import React from 'react';
import { X, GraduationCap, ExternalLink, Sparkles, FileText } from 'lucide-react';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#0b1911] border border-alicia-sage-300 dark:border-alicia-sage-700 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-alicia-sage-700 via-alicia-sage-600 to-teal-700 text-white flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/50 font-display font-black text-2xl flex items-center justify-center shrink-0">
              {member.avatarInitials}
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/25 text-amber-200 border border-amber-300/40 mb-1">
                {member.group}
              </span>
              <h3 className="font-display text-2xl font-black leading-tight">
                {member.name}
              </h3>
              <p className="text-xs text-alicia-sage-100 font-semibold mt-0.5">
                {member.role}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700 dark:text-slate-200 text-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-alicia-sage-700 dark:text-alicia-sage-300 bg-[#f3f7f4] dark:bg-[#0e2117] p-3.5 rounded-2xl border border-alicia-sage-200 dark:border-alicia-sage-800">
            <GraduationCap className="w-4 h-4 shrink-0" />
            <span>{member.institution}</span>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Reseña e Inserción en la Red ALICIA
            </h4>
            <p className="leading-relaxed text-slate-700 dark:text-slate-200">
              {member.bio}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Líneas y Áreas de Investigación</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.lines.map((line, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-alicia-sage-50 dark:bg-alicia-sage-900/50 text-alicia-sage-800 dark:text-alicia-sage-200 border border-alicia-sage-200 dark:border-alicia-sage-700"
                >
                  {line}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {member.cvuy && (
              <a
                href={member.cvuy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700 text-xs font-bold hover:bg-amber-200 transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Ver CVUy Público (ANII)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {member.orcid && (
              <a
                href={member.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold hover:underline"
              >
                <span>Ver Perfil Académico ORCID</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#f4f8f5] dark:bg-[#0e2117] border-t border-alicia-sage-200 dark:border-alicia-sage-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-alicia-sage-600 hover:bg-alicia-sage-500 text-white text-xs font-bold cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
