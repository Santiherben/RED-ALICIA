import React from 'react';
import {
  ArrowUp,
  ExternalLink,
  PlayCircle,
  FileText,
  GraduationCap,
  Mail,
  Hexagon,
  Code2
} from 'lucide-react';
import VisitorCounter from './VisitorCounter';
import aliciaData from '../data/aliciaData.json';

export default function Footer({ onOpenFundamentos }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#eaf1ec] dark:bg-[#050d08] text-slate-600 dark:text-slate-300 pt-16 pb-12 border-t border-alicia-sage-200 dark:border-alicia-sage-900/70 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-2xl bg-white p-1 shadow-md border border-alicia-sage-200 dark:border-white/90 flex items-center justify-center">
                <img
                  src="./logo/logo_alicia_hd.svg"
                  alt="Logo Panal RED ALI.C.I.A"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                  <span className="text-alicia-sage-600 dark:text-alicia-sage-400">ALI.</span>
                  <span>C.I.A</span>
                </span>
                <p className="text-xs font-semibold text-alicia-sage-700 dark:text-alicia-sage-400">
                  Alianza para la Colaboración, la Investigación y los Aprendizajes
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Ecosistema colaborativo en clave de panal que nuclea a equipos de investigación, profesorado formador, estudiantado y personas egresadas del Consejo de Formación en Educación (CFE) en Uruguay desde el 23 de febrero de 2022.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-alicia-sage-700 dark:text-alicia-sage-300 font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Formación en Educación • CFE • Uruguay</span>
              </span>
              <a
                href={`mailto:${aliciaData.contactEmail}`}
                className="inline-flex items-center gap-1.5 text-amber-800 dark:text-amber-300 hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>{aliciaData.contactEmail}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Ecosistema Panal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-alicia-sage-700 dark:hover:text-white transition-colors">
                  Inicio y Emblema Panal
                </a>
              </li>
              <li>
                <a href="#que-es" className="hover:text-alicia-sage-700 dark:hover:text-white transition-colors">
                  ¿Qué es ALICIA?
                </a>
              </li>
              <li>
                <a href="#cometidos" className="hover:text-alicia-sage-700 dark:hover:text-white transition-colors">
                  Cometidos (5 Ejes)
                </a>
              </li>
              <li>
                <a href="#acciones" className="hover:text-alicia-sage-700 dark:hover:text-white transition-colors">
                  Acciones Colaborativas (11)
                </a>
              </li>
              <li>
                <a href="#revista-panal" className="hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-semibold">
                  Revista Panal (ISSN 2982-4168)
                </a>
              </li>
              <li>
                <a href="#integrantes" className="hover:text-alicia-sage-700 dark:hover:text-white transition-colors">
                  Integrantes Investigadores
                </a>
              </li>
              <li>
                <a href="#grupos-enlaces" className="hover:text-alicia-sage-700 dark:hover:text-white transition-colors">
                  Grupos (GIF, Trébol, GIDEBIOF) y Enlaces
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Adhesión y Canales Oficiales
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={aliciaData.links.revistaPanalCFE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-800 dark:text-amber-300 hover:underline font-bold"
                >
                  <Hexagon className="w-3.5 h-3.5 fill-amber-500/20" />
                  <span>Revista Panal en Portal CFE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={aliciaData.links.formPersonas}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-alicia-sage-700 dark:hover:text-white transition-colors font-semibold"
                >
                  <span>Formulario para Personas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={aliciaData.links.formGrupos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-alicia-sage-700 dark:hover:text-white transition-colors font-semibold"
                >
                  <span>Formulario para Grupos de investigación</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={aliciaData.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400 hover:underline font-semibold"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  <span>Canal de la red en YouTube</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenFundamentos}
                  className="inline-flex items-center gap-1.5 text-alicia-sage-700 dark:text-alicia-sage-300 hover:underline font-semibold cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Síntesis Fundacional</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-alicia-sage-200 dark:border-alicia-sage-900/70 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} RED ALI.C.I.A — Alianza para la Colaboración, la Investigación y los Aprendizajes.
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center md:justify-start gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-alicia-sage-600 dark:text-alicia-sage-400 inline" />
              <span>
                Desarrollador responsable:{' '}
                <strong className="text-slate-700 dark:text-slate-300 font-semibold">
                  Prof. Esp. Santiago Hernández
                </strong>
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <VisitorCounter />
            <button
              onClick={scrollToTop}
              className="p-2 bg-white dark:bg-[#0d1f16] hover:bg-alicia-sage-50 dark:hover:bg-alicia-sage-900 border border-alicia-sage-200 dark:border-alicia-sage-800 text-slate-700 dark:text-slate-300 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Volver arriba"
            >
              <span className="hidden sm:inline text-xs">Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
