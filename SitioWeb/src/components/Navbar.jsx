import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, PlayCircle, BookOpen, Mail } from 'lucide-react';
import VisitorCounter from './VisitorCounter';
import aliciaData from '../data/aliciaData.json';

export default function Navbar({ darkMode, setDarkMode, onOpenFundamentos }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Viernes 13 • IPES', href: '#destacados', highlight: true },
    { name: '¿Qué es ALICIA?', href: '#que-es' },
    { name: 'Cometidos', href: '#cometidos' },
    { name: 'Acciones', href: '#acciones' },
    { name: 'Revista Panal', href: '#revista-panal' },
    { name: 'Integrantes', href: '#integrantes' },
    { name: 'Grupos y JIFE', href: '#grupos-enlaces' },
    { name: 'Adhesión', href: '#adhesion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#07120c]/95 shadow-md dark:shadow-2xl backdrop-blur-md py-2.5 border-b border-alicia-sage-200/80 dark:border-alicia-sage-900/70'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo HD & Title */}
          <a href="#inicio" className="flex items-center gap-3 group shrink-0">
            <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-md border border-alicia-sage-200 dark:border-white/90 transition-transform group-hover:scale-105">
              <img
                src="./logo/logo_alicia_hd.svg"
                alt="Logo Panal RED ALI.C.I.A"
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight leading-none text-slate-900 dark:text-white">
                  <span className="text-alicia-sage-600 dark:text-alicia-sage-400">ALI.</span>
                  <span className="text-slate-800 dark:text-slate-100">C.I.A</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100/90 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700/60">
                  Panal CFE
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-600 dark:text-slate-400 hidden 2xl:block leading-tight mt-0.5">
                Alianza para la Colaboración, la Investigación y los Aprendizajes
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                  link.highlight
                    ? 'text-amber-900 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-950/60 hover:bg-amber-200 dark:hover:bg-amber-900/70 border border-amber-300 dark:border-amber-700/60'
                    : 'text-slate-700 dark:text-slate-300 hover:text-alicia-sage-700 dark:hover:text-alicia-sage-300 hover:bg-alicia-sage-50 dark:hover:bg-alicia-sage-900/40'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contador de Visitas, Síntesis y Selector de Tema */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <VisitorCounter />

            <button
              onClick={onOpenFundamentos}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-alicia-sage-800 dark:text-alicia-sage-200 bg-alicia-sage-100/80 dark:bg-alicia-sage-900/60 hover:bg-alicia-sage-200/80 dark:hover:bg-alicia-sage-800/70 rounded-xl border border-alicia-sage-300 dark:border-alicia-sage-700 transition-all cursor-pointer"
              title="Ver Síntesis Fundacional del 23 de febrero de 2022"
            >
              <FileText className="w-3.5 h-3.5 text-alicia-sage-600 dark:text-alicia-sage-400" />
              <span>Síntesis</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-alicia-sage-100/70 dark:hover:bg-alicia-sage-900/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-alicia-sage-200 dark:hover:border-alicia-sage-800"
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-alicia-ochre-400" />
              ) : (
                <Moon className="w-4 h-4 text-alicia-sage-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-alicia-sage-100 dark:hover:bg-alicia-sage-900/50 rounded-lg"
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-alicia-ochre-400" />
              ) : (
                <Moon className="w-4 h-4 text-alicia-sage-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-alicia-sage-100 dark:hover:bg-alicia-sage-900/50 rounded-lg"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white dark:bg-[#0c1d14] rounded-2xl shadow-2xl border border-alicia-sage-200 dark:border-alicia-sage-800">
            <div className="flex flex-col gap-2">
              <div className="pb-2 border-b border-alicia-sage-100 dark:border-alicia-sage-800/80 flex items-center justify-between">
                <VisitorCounter />
                <a
                  href={`mailto:${aliciaData.contactEmail}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-alicia-sage-700 dark:text-alicia-sage-300"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{aliciaData.contactEmail}</span>
                </a>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-alicia-sage-50 dark:hover:bg-alicia-sage-900/50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenFundamentos();
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-alicia-sage-800 dark:text-alicia-sage-200 bg-alicia-sage-100/70 dark:bg-alicia-sage-900/60 rounded-lg text-left cursor-pointer"
              >
                <FileText className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400" />
                <span>Ver Síntesis Fundacional</span>
              </button>
              <a
                href={aliciaData.links.revistaPanalCFE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 rounded-lg"
              >
                <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Revista Panal en Portal CFE</span>
              </a>
              <a
                href={aliciaData.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/40 rounded-lg"
              >
                <PlayCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span>Canal de la Red en YouTube</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
