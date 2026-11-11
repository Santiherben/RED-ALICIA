import React from 'react';
import { Users, GraduationCap, Award, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

const roleIcons = [Users, GraduationCap, Award, Network];

export default function CommunitySection() {
  return (
    <section
      id="comunidad"
      className="py-24 bg-[#f3f7f4] dark:bg-[#07120c] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-alicia-sage-900/60 border border-alicia-sage-300 dark:border-alicia-sage-700 text-alicia-sage-700 dark:text-alicia-sage-300 text-xs font-bold uppercase tracking-wider mb-3">
            Sujetos de la Investigación en Formación en Educación
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Comunidad Investigadora CFE
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Impulsamos el crecimiento en clave colaborativa de las personas investigadoras del CFE —docentes, personas egresadas y estudiantes— junto a los equipos de investigación constituidos.
          </p>
        </div>

        {/* 4 Perfiles de la Comunidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aliciaData.communityProfiles.map((profile, idx) => {
            const Icon = roleIcons[idx] || Users;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0d1f16] rounded-3xl p-8 border border-alicia-sage-200/90 dark:border-alicia-sage-800/80 hover:border-alicia-sage-500 shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-alicia-sage-100 dark:bg-alicia-sage-500/20 text-alicia-sage-700 dark:text-alicia-sage-300 flex items-center justify-center border border-alicia-sage-200 dark:border-alicia-sage-500/30 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-black text-slate-900 dark:text-white">
                        {profile.role}
                      </h3>
                      <p className="text-xs font-bold text-alicia-sage-600 dark:text-alicia-sage-400">
                        {profile.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {profile.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-alicia-sage-100 dark:border-alicia-sage-800/70 space-y-2">
                  {profile.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Aprendizaje Preprofesional y Profesional */}
        <div className="mt-12 bg-gradient-to-r from-[#173122] via-alicia-sage-700 to-[#1c3b29] rounded-3xl p-8 sm:p-10 border border-alicia-sage-500/40 shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-alicia-ochre-400/20 text-alicia-ochre-200 border border-alicia-ochre-400/30 mb-3 inline-block">
              Aprendizaje Mutuo y Sinergia
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black mb-2">
              La investigación como tarea de aprendizaje pre profesional y profesional
            </h3>
            <p className="text-alicia-sage-100 text-xs sm:text-sm leading-relaxed">
              Tanto si integras un equipo de investigación establecido como si deseas sumarte de forma individual como docente, estudiante o persona egresada, ALICIA ofrece un espacio horizontal de articulación.
            </p>
          </div>
          <a
            href="#adhesion"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white text-alicia-sage-900 hover:bg-alicia-ochre-100 text-xs sm:text-sm font-bold shadow-lg transition-all shrink-0"
          >
            <span>Ir a Formularios de Adhesión</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
