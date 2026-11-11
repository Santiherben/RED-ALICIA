import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  UserPlus,
  Users,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Share2,
  Handshake,
  BookOpen,
  Hexagon,
  Compass,
  RotateCcw,
  Calendar
} from 'lucide-react';
import aliciaData from '../data/aliciaData.json';
import HoneycombLogo from './HoneycombLogo';

const hexSlides = [
  {
    id: 'destacados',
    cellNumber: 'Destacado • Viernes 13',
    title: 'Asamblea en IPES (JIFE)',
    subtitle: 'Viernes 13 • 15:30 hs • Asociación Civil',
    desc: 'Conformación formal de la Comisión Directiva y firma del Acta Constitutiva ante escribano público en el marco de las JIFE.',
    cta: 'Ver Convocatoria Viernes 13',
    icon: Calendar,
    href: '#destacados',
    accent: 'from-amber-500 to-amber-700',
  },
  {
    id: 'que-es',
    cellNumber: 'Celda 01',
    title: '¿Qué es ALICIA?',
    subtitle: 'Identidad y Origen (23 Feb 2022)',
    desc: 'Conoce cómo surge la alianza en el ámbito de la Formación en Educación del CFE para articular equipos y sostener la investigación.',
    cta: 'Explorar Identidad',
    icon: Share2,
    href: '#que-es',
    accent: 'from-alicia-sage-600 to-teal-700',
  },
  {
    id: 'cometidos',
    cellNumber: 'Celda 02',
    title: '5 Cometidos Centrales',
    subtitle: 'Propósitos de la Red',
    desc: 'Conectar equipos del CFE, propiciar la colaboración profesional y fortalecer capacidades mediante el aprendizaje mutuo.',
    cta: 'Ver los 5 Cometidos',
    icon: Handshake,
    href: '#cometidos',
    accent: 'from-teal-600 to-alicia-sage-700',
  },
  {
    id: 'acciones',
    cellNumber: 'Celda 03',
    title: '11 Acciones en Red',
    subtitle: 'Prácticas Colaborativas',
    desc: 'Tutorías entre pares, validación de instrumentos, lectura y citación cruzada, avales institucionales, eventos y asesoría.',
    cta: 'Recorrer Acciones',
    icon: BookOpen,
    href: '#acciones',
    accent: 'from-alicia-sage-700 to-emerald-800',
  },
  {
    id: 'revista-panal',
    cellNumber: 'Celda 04',
    title: 'Revista PANAL',
    subtitle: 'ISSN Digital 2982-4168 • CFE',
    desc: 'Órgano oficial de divulgación científica de la Red ALICIA donde confluyen artículos, experiencias e investigaciones docentes.',
    cta: 'Abrir Revista Panal',
    icon: Hexagon,
    href: '#revista-panal',
    accent: 'from-amber-500 to-amber-700',
  },
  {
    id: 'integrantes',
    cellNumber: 'Celda 05',
    title: 'Integrantes y CVUy',
    subtitle: 'Referentes e Investigadoras CFE',
    desc: 'Directorio de fundadoras e investigadoras referentes de la Red ALICIA con acceso directo a sus currículums públicos CVUy.',
    cta: 'Ver Integrantes y CVUy',
    icon: Users,
    href: '#integrantes',
    accent: 'from-alicia-sage-600 to-[#244230]',
  },
  {
    id: 'grupos-enlaces',
    cellNumber: 'Celda 06',
    title: 'Grupos y Enlaces CFE',
    subtitle: 'GIF • Trébol • GIDEBIOF • JIFE',
    desc: 'Equipos de investigación cofundadores de la Red ALICIA, portal JIFE, repositorios abiertos y enlaces institucionales.',
    cta: 'Ver Grupos y Enlaces',
    icon: Compass,
    href: '#grupos-enlaces',
    accent: 'from-teal-700 to-slate-800',
  },
  {
    id: 'adhesion',
    cellNumber: 'Celda 07',
    title: 'Adhesión a la Red',
    subtitle: 'Personas y Grupos de Investigación',
    desc: 'Formularios oficiales para sumarse individualmente o como equipo de investigación, canal de YouTube y correo directo.',
    cta: 'Ir a Formularios',
    icon: UserPlus,
    href: '#adhesion',
    accent: 'from-amber-600 to-alicia-sage-700',
  },
];

const HEX_CLIP = 'polygon(22% 0%, 78% 0%, 100% 50%, 78% 100%, 22% 100%, 0% 50%)';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isAssembling, setIsAssembling] = useState(true);
  const [assemblyKey, setAssemblyKey] = useState(0);
  const [showRipple, setShowRipple] = useState(false);

  // Estado continuo del Carrusel 3D
  const [carouselStep, setCarouselStep] = useState(0);
  const [hoverDirection, setHoverDirection] = useState(null);
  const [centerHoverTilt, setCenterHoverTilt] = useState({ x: 0, y: 0 });
  const hoverIntervalRef = useRef(null);

  const totalSlides = hexSlides.length;
  const activeSlide = ((carouselStep % totalSlides) + totalSlides) % totalSlides;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isAssembling) return;

    const rippleTimer = setTimeout(() => {
      setShowRipple(true);
    }, 1150);

    const endTimer = setTimeout(() => {
      setIsAssembling(false);
    }, 3600);

    const clearRippleTimer = setTimeout(() => {
      setShowRipple(false);
    }, 2400);

    return () => {
      clearTimeout(rippleTimer);
      clearTimeout(endTimer);
      clearTimeout(clearRippleTimer);
    };
  }, [isAssembling, assemblyKey]);

  useEffect(() => {
    if (!hoverDirection) {
      if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current);
      return;
    }

    const step = () => {
      setCarouselStep((prev) => (hoverDirection === 'right' ? prev + 1 : prev - 1));
    };

    const initialTimeout = setTimeout(() => {
      step();
      hoverIntervalRef.current = setInterval(step, 1250);
    }, 220);

    return () => {
      clearTimeout(initialTimeout);
      if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current);
    };
  }, [hoverDirection]);

  const handlePrevSlide = () => {
    setCarouselStep((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    setCarouselStep((prev) => prev + 1);
  };

  const handleJumpToSlide = (targetIdx) => {
    let diff = targetIdx - activeSlide;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;
    setCarouselStep((prev) => prev + diff);
  };

  const handleReplayHoneycomb = () => {
    setShowRipple(false);
    setIsAssembling(true);
    setAssemblyKey((prev) => prev + 1);
  };

  const logoOpacity = Math.max(0.03, 0.11 - scrollY * 0.00025);
  const logoTranslateY = scrollY * 0.16;

  const scrollRotateY = (scrollY * 0.18) % 360;
  const scrollRotateX = Math.min(14, scrollY * 0.03);

  const currentRotateX = isAssembling ? 0 : isHovered ? mouseTilt.y : scrollRotateX;
  const currentRotateY = isAssembling ? 0 : isHovered ? mouseTilt.x + scrollRotateY : scrollRotateY;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -24;
    setMouseTilt({ x, y });
  };

  const handleCenterHexMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    setCenterHoverTilt({ x, y });
  };

  const getSignedCircularOffset = (idx) => {
    let diff = idx - activeSlide;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;
    return diff;
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 md:pt-38 md:pb-28 bg-gradient-to-b from-[#f4f8f5] via-alicia-sage-50/80 to-[#eef4f0] text-slate-900 dark:from-[#06100b] dark:via-[#0b1d14] dark:to-[#091710] dark:text-white overflow-hidden flex flex-col justify-center min-h-[92vh] transition-colors duration-200"
    >
      <div className="absolute inset-0 bg-honeycomb-pattern pointer-events-none" />

      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10 select-none overflow-hidden"
        style={{
          transform: `translateY(${logoTranslateY}px) rotate(${scrollY * 0.04}deg)`,
          opacity: logoOpacity,
          transition: 'opacity 0.15s ease-out',
        }}
      >
        <div className="w-[620px] h-[620px] lg:w-[820px] lg:h-[820px] flex items-center justify-center">
          <img
            src="./logo/logo_alicia_hd.svg"
            alt="Emblema Panal RED ALI.C.I.A Fondo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_80px_rgba(103,141,117,0.25)]"
          />
        </div>
      </div>

      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-alicia-sage-500/15 dark:bg-alicia-sage-500/20 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[620px] h-[620px] bg-amber-400/15 dark:bg-amber-500/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center my-auto">
        
        {/* Emblema Panal ALI.C.I.A HD */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div
            className={`relative group cursor-pointer ${
              isAssembling ? 'z-30' : 'animate-float-logo z-20'
            }`}
            onClick={handleReplayHoneycomb}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMouseTilt({ x: 0, y: 0 });
            }}
            style={{ perspective: 1200 }}
            title="Haz clic para volver a ensamblar las celdas del Panal ALI.C.I.A"
          >
            <div className="absolute -inset-9 rounded-full blur-3xl animate-alicia-aura opacity-85 group-hover:opacity-100 transition-opacity duration-700" />

            {showRipple && (
              <div
                key={assemblyKey}
                className="absolute inset-0 rounded-3xl border-4 border-amber-400 dark:border-amber-300 bg-gradient-to-tr from-amber-400/20 via-alicia-sage-400/20 to-teal-400/20 pointer-events-none animate-hex-ripple"
              />
            )}

            <div
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[290px] lg:h-[290px] rounded-3xl p-3.5 sm:p-5 bg-white shadow-[0_25px_70px_rgba(22,33,27,0.35),0_0_55px_rgba(245,158,11,0.28)] ring-4 sm:ring-8 ring-white/95 dark:ring-alicia-sage-400/35 border-2 border-alicia-sage-200 flex items-center justify-center transition-transform duration-150 ease-out"
              style={{
                transform: `rotateY(${currentRotateY}deg) rotateX(${currentRotateX}deg) scale(${
                  isHovered && !isAssembling ? 1.04 : 1
                })`,
                transformStyle: 'preserve-3d',
              }}
            >
              <HoneycombLogo
                isAssembling={isAssembling}
                showBees={true}
                assemblyKey={assemblyKey}
              />
            </div>
          </div>

          <button
            onClick={handleReplayHoneycomb}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/90 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/70 text-amber-800 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/60 text-[11px] font-bold transition-all cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Animar celdas del Panal ALI.C.I.A</span>
          </button>
        </div>

        {/* Título Principal */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white mb-3">
          <span className="text-slate-800 dark:text-slate-100">RED </span>
          <span className="text-alicia-sage-600 dark:text-alicia-sage-400 drop-shadow-[0_0_35px_rgba(103,141,117,0.3)]">
            ALI.C.I.A
          </span>
        </h1>

        <h2 className="font-display text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 max-w-4xl mx-auto tracking-tight leading-snug mb-8">
          Alianza para la Colaboración, la Investigación y los Aprendizajes
        </h2>

        {/* ============================================================
            CARRUSEL 3D DE PRISMAS HEXAGONALES CON TRANSICIÓN DE GIRO REAL
            ============================================================ */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 dark:bg-[#0f2419]/90 border border-alicia-sage-300 dark:border-alicia-sage-700 text-[11px] font-bold text-alicia-sage-700 dark:text-alicia-sage-300 mb-4 shadow-2xs">
            <Hexagon className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
            <span>Párate sobre los lados para rotar los hexágonos en 3D o haz clic en el centro</span>
          </div>

          <div className="relative max-w-5xl mx-auto flex items-center justify-center">
            <button
              type="button"
              onClick={handlePrevSlide}
              onMouseEnter={() => setHoverDirection('left')}
              onMouseLeave={() => setHoverDirection(null)}
              className="z-40 p-3 rounded-2xl bg-white/95 dark:bg-[#0d1f16]/95 hover:bg-amber-50 dark:hover:bg-alicia-sage-900 border border-alicia-sage-300 dark:border-alicia-sage-700 text-slate-700 dark:text-slate-200 shadow-xl transition-all hover:scale-110 cursor-pointer shrink-0"
              aria-label="Rotar hexágonos a la izquierda"
              title="Párate aquí o haz clic para rotar a la izquierda"
            >
              <ChevronLeft className="w-5 h-5 text-alicia-sage-600 dark:text-amber-300" />
            </button>

            <div
              className="relative w-full h-[315px] sm:h-[340px] flex items-center justify-center overflow-visible"
              style={{
                perspective: '1300px',
                transformStyle: 'preserve-3d',
              }}
            >
              {hexSlides.map((slide, idx) => {
                const offset = getSignedCircularOffset(idx);
                const Icon = slide.icon;
                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                const isFarLeft = offset === -2;
                const isFarRight = offset === 2;
                const isVisible = Math.abs(offset) <= 2;

                let translateX = '0px';
                let translateZ = 0;
                let rotateY = 0;
                let rotateX = 0;
                let scale = 1;
                let opacity = 0;
                let zIndex = 0;

                if (isCenter) {
                  translateX = '0px';
                  translateZ = 55;
                  rotateY = centerHoverTilt.x;
                  rotateX = centerHoverTilt.y;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                } else if (isLeft) {
                  translateX = '-255px';
                  translateZ = -85;
                  rotateY = 52;
                  scale = 0.84;
                  opacity = 0.88;
                  zIndex = 20;
                } else if (isRight) {
                  translateX = '255px';
                  translateZ = -85;
                  rotateY = -52;
                  scale = 0.84;
                  opacity = 0.88;
                  zIndex = 20;
                } else if (isFarLeft) {
                  translateX = '-430px';
                  translateZ = -240;
                  rotateY = 85;
                  scale = 0.66;
                  opacity = 0.18;
                  zIndex = 10;
                } else if (isFarRight) {
                  translateX = '430px';
                  translateZ = -240;
                  rotateY = -85;
                  scale = 0.66;
                  opacity = 0.18;
                  zIndex = 10;
                } else {
                  translateX = offset < 0 ? '-520px' : '520px';
                  translateZ = -380;
                  rotateY = offset < 0 ? 115 : -115;
                  scale = 0.5;
                  opacity = 0;
                  zIndex = 1;
                }

                return (
                  <div
                    key={slide.id}
                    onClick={() => {
                      if (isCenter) {
                        const target = document.querySelector(slide.href);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      } else if (offset < 0) {
                        handlePrevSlide();
                      } else if (offset > 0) {
                        handleNextSlide();
                      }
                    }}
                    onMouseEnter={() => {
                      if (isLeft) setHoverDirection('left');
                      else if (isRight) setHoverDirection('right');
                      else if (isCenter) setHoverDirection(null);
                    }}
                    onMouseMove={isCenter ? handleCenterHexMouseMove : undefined}
                    onMouseLeave={() => {
                      setHoverDirection(null);
                      if (isCenter) setCenterHoverTilt({ x: 0, y: 0 });
                    }}
                    className={`absolute w-[290px] sm:w-[355px] md:w-[390px] h-[275px] sm:h-[305px] select-none cursor-pointer ${
                      !isVisible ? 'pointer-events-none' : ''
                    } ${isLeft || isRight ? 'hidden sm:block' : ''} ${
                      isFarLeft || isFarRight ? 'hidden lg:block pointer-events-none' : ''
                    }`}
                    style={{
                      zIndex,
                      opacity,
                      transformStyle: 'preserve-3d',
                      transform: `translate3d(${translateX}, 0px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                      transition:
                        isCenter && (centerHoverTilt.x !== 0 || centerHoverTilt.y !== 0)
                          ? 'transform 0.15s ease-out, opacity 0.5s ease'
                          : 'transform 0.78s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.65s ease',
                    }}
                    title={
                      isCenter
                        ? `Haz clic para ir a ${slide.title}`
                        : isLeft
                        ? 'Párate aquí o haz clic para girar en 3D a la izquierda'
                        : 'Párate aquí o haz clic para girar en 3D a la derecha'
                    }
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-alicia-sage-800 via-[#243d2e] to-amber-800"
                      style={{
                        clipPath: HEX_CLIP,
                        transform: 'translateZ(-14px) scale(0.99)',
                      }}
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-r from-amber-500/80 via-alicia-sage-500 to-teal-600/80"
                      style={{
                        clipPath: HEX_CLIP,
                        transform: 'translateZ(-7px)',
                      }}
                    />

                    <div
                      className={`relative w-full h-full p-[3.5px] ${
                        isCenter
                          ? 'bg-gradient-to-br from-amber-400 via-alicia-sage-500 to-teal-500 shadow-[0_25px_60px_rgba(22,33,27,0.38)]'
                          : 'bg-gradient-to-br from-alicia-sage-400 via-alicia-sage-500 to-teal-700'
                      }`}
                      style={{
                        clipPath: HEX_CLIP,
                        transform: 'translateZ(0px)',
                      }}
                    >
                      <div
                        className={`relative w-full h-full flex flex-col items-center justify-between text-center px-9 sm:px-12 py-6 overflow-hidden ${
                          isCenter
                            ? 'bg-white dark:bg-[#0d1f16]'
                            : 'bg-[#f1f6f3] dark:bg-[#09150f]'
                        }`}
                        style={{
                          clipPath: HEX_CLIP,
                        }}
                      >
                        <div
                          className="absolute inset-0 pointer-events-none transition-transform duration-700"
                          style={{
                            background:
                              'linear-gradient(115deg, transparent 20%, rgba(251, 191, 36, 0.16) 48%, rgba(255, 255, 255, 0.35) 52%, transparent 80%)',
                            transform: `translateX(${offset * 45}%)`,
                          }}
                        />

                        <div className="relative z-10 flex flex-col items-center">
                          <span
                            className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2 ${
                              isCenter
                                ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300/70'
                                : 'bg-alicia-sage-100 dark:bg-alicia-sage-900/60 text-alicia-sage-700 dark:text-alicia-sage-300'
                            }`}
                          >
                            {slide.cellNumber}
                          </span>

                          <div
                            className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${slide.accent} text-white flex items-center justify-center shadow-md mb-1.5`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="relative z-10">
                          <h3
                            className={`font-display font-black leading-tight text-slate-900 dark:text-white ${
                              isCenter ? 'text-lg sm:text-xl' : 'text-base'
                            }`}
                          >
                            {slide.title}
                          </h3>
                          <p className="text-[11px] font-bold text-alicia-sage-600 dark:text-alicia-sage-400 mt-0.5">
                            {slide.subtitle}
                          </p>

                          <p
                            className={`text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2 line-clamp-3 transition-opacity duration-300 ${
                              isCenter ? 'opacity-100' : 'opacity-65'
                            }`}
                          >
                            {slide.desc}
                          </p>
                        </div>

                        <div className="relative z-10">
                          {isCenter ? (
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-alicia-sage-600 to-teal-600 hover:from-alicia-sage-500 hover:to-teal-500 text-white text-[11px] font-bold shadow-sm transition-all">
                              <span>{slide.cta}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-alicia-sage-100 dark:bg-alicia-sage-900/60 text-[10px] font-bold text-alicia-sage-700 dark:text-amber-300">
                              <span>{isLeft ? '← Girar Celda 3D' : 'Girar Celda 3D →'}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleNextSlide}
              onMouseEnter={() => setHoverDirection('right')}
              onMouseLeave={() => setHoverDirection(null)}
              className="z-40 p-3 rounded-2xl bg-white/95 dark:bg-[#0d1f16]/95 hover:bg-amber-50 dark:hover:bg-alicia-sage-900 border border-alicia-sage-300 dark:border-alicia-sage-700 text-slate-700 dark:text-slate-200 shadow-xl transition-all hover:scale-110 cursor-pointer shrink-0"
              aria-label="Rotar hexágonos a la derecha"
              title="Párate aquí o haz clic para rotar a la derecha"
            >
              <ChevronRight className="w-5 h-5 text-alicia-sage-600 dark:text-amber-300" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            {hexSlides.map((slide, idx) => {
              const active = idx === activeSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleJumpToSlide(idx)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    active
                      ? 'bg-alicia-sage-600 text-white shadow-xs scale-105'
                      : 'bg-white/80 dark:bg-[#0e2218] text-slate-600 dark:text-slate-400 hover:bg-alicia-sage-100 dark:hover:bg-alicia-sage-900/50 border border-alicia-sage-200 dark:border-alicia-sage-800'
                  }`}
                  title={slide.title}
                >
                  <span className="font-mono text-[10px]">0{idx + 1}</span>
                  <span className="hidden md:inline">{slide.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desglose interactivo de la sigla ALI.C.I.A */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {aliciaData.acronymBreakdown.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-[#0e2218]/90 p-3.5 rounded-2xl border border-alicia-sage-200/90 dark:border-alicia-sage-800/70 shadow-xs backdrop-blur-md text-left hover:border-amber-400 transition-all"
            >
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-display text-lg font-black text-alicia-sage-600 dark:text-alicia-sage-400">
                  {item.letters}.
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                  {item.word}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Barra de Indicadores Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto bg-white/90 dark:bg-[#0e2218]/85 p-5 sm:p-7 rounded-3xl border border-alicia-sage-200/90 dark:border-alicia-sage-700/30 shadow-xl backdrop-blur-xl">
          {aliciaData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 text-center border-r last:border-r-0 border-alicia-sage-200/70 dark:border-alicia-sage-800/60"
            >
              <div className="font-display text-xl sm:text-2xl font-black bg-gradient-to-r from-alicia-sage-700 via-teal-600 to-amber-600 dark:from-alicia-sage-300 dark:via-teal-300 dark:to-amber-400 bg-clip-text text-transparent tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-alicia-sage-300/80 mt-0.5">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-1.5 text-xs text-slate-500 dark:text-alicia-sage-300/70 animate-bounce">
          <span>Desliza para ver el Destacado del Viernes 13 y las secciones de la Red</span>
          <ChevronDown className="w-4 h-4 text-alicia-sage-600 dark:text-alicia-sage-400" />
        </div>
      </div>
    </section>
  );
}
