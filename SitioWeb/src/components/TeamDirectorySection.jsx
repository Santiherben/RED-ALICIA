import React, { useState } from 'react';
import {
  Users,
  Search,
  Hexagon,
  UserPlus,
  ExternalLink,
  Sparkles,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';

export default function TeamDirectorySection({ onSelectMember }) {
  const [selectedGroup, setSelectedGroup] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const groups = ['Todos', 'Grupo GIF', 'Grupo Trébol', 'Grupo GIDEBIOF', 'Red ALICIA / CFE'];

  const filteredMembers = aliciaData.researchers.filter((m) => {
    const matchesGroup = selectedGroup === 'Todos' || m.group === selectedGroup;
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.lines.some((l) => l.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesGroup && matchesSearch;
  });

  return (
    <section
      id="integrantes"
      className="py-24 bg-[#f3f7f4] dark:bg-[#07120c] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-200"
    >
      <div className="absolute inset-0 bg-honeycomb-pattern pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-alicia-sage-900/60 border border-alicia-sage-300 dark:border-alicia-sage-700 text-alicia-sage-700 dark:text-alicia-sage-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Directorio Académico del Panal</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Integrantes Investigadores y Referentes
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Investigadoras, investigadores, docentes formadores, estudiantes y personas egresadas que impulsan y sostienen las celdas de investigación de la Red ALI.C.I.A en el CFE.
          </p>
        </div>

        {/* Barra de Filtro por Grupo y Búsqueda */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white dark:bg-[#0d1f16] p-4 rounded-2xl border border-alicia-sage-200/90 dark:border-alicia-sage-800/80 shadow-xs">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {groups.map((grp) => {
              const active = selectedGroup === grp;
              return (
                <button
                  key={grp}
                  onClick={() => setSelectedGroup(grp)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-alicia-sage-600 text-white shadow-sm'
                      : 'bg-[#f4f8f5] dark:bg-[#09160f] text-slate-700 dark:text-slate-300 hover:bg-alicia-sage-100 dark:hover:bg-alicia-sage-900/50 border border-alicia-sage-200/70 dark:border-alicia-sage-800'
                  }`}
                >
                  {grp}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar integrante o línea..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#f4f8f5] dark:bg-[#09160f] border border-alicia-sage-200 dark:border-alicia-sage-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-alicia-sage-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Grilla de Investigadores + Tarjeta Abierta de Nuevos Integrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectMember(member)}
              className="group bg-white dark:bg-[#0d1f16] hover:bg-alicia-sage-50/40 dark:hover:bg-[#12291d] rounded-3xl p-7 border border-alicia-sage-200/90 dark:border-alicia-sage-800/80 hover:border-alicia-sage-500 dark:hover:border-amber-400/70 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  {/* Avatar Hexagonal de Panal */}
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-alicia-sage-600 to-teal-700 text-white font-display font-black text-lg flex items-center justify-center shadow-md border-2 border-white dark:border-alicia-sage-400/40 group-hover:scale-105 transition-transform">
                    {member.avatarInitials}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                    {member.group}
                  </span>
                </div>

                <h3 className="font-display text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-alicia-sage-700 dark:group-hover:text-alicia-sage-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-alicia-sage-600 dark:text-alicia-sage-400 mb-2">
                  {member.role}
                </p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0 text-alicia-sage-500" />
                  <span>{member.institution}</span>
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-5">
                  {member.bio}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.lines.map((line, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-lg bg-[#f3f7f4] dark:bg-[#09160f] text-slate-700 dark:text-slate-300 border border-alicia-sage-200/70 dark:border-alicia-sage-800"
                    >
                      {line}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-alicia-sage-100 dark:border-alicia-sage-800/70 flex items-center justify-between text-xs font-bold text-alicia-sage-700 dark:text-alicia-sage-300">
                  <span>Ver perfil académico</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {/* Celda Abierta: Súmate como Integrante o Equipo */}
          <div className="bg-gradient-to-br from-alicia-sage-600 via-alicia-sage-700 to-[#1f3528] text-white rounded-3xl p-7 border border-amber-400/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mb-5">
                <Hexagon className="w-7 h-7 text-amber-300 fill-amber-300/20" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Panal Abierto • IFD, CeRP, IPA, IINN, INET
              </span>
              <h3 className="font-display text-2xl font-black mb-3">
                ¿Eres Docente, Estudiante, Egresado/a o Equipo del CFE?
              </h3>
              <p className="text-xs sm:text-sm text-alicia-sage-100 leading-relaxed mb-6">
                La Red ALICIA está abierta a la adhesión permanente tanto de personas interesadas (aunque no integren hoy un equipo) como de grupos de investigación de todo el país.
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href={aliciaData.links.formPersonas}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white text-alicia-sage-950 hover:bg-amber-100 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <UserPlus className="w-4 h-4" />
                <span>Adherirse como Persona Investigadora</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={aliciaData.links.formGrupos}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Users className="w-4 h-4" />
                <span>Registrar Grupo de Investigación</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
