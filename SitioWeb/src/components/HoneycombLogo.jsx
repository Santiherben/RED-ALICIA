import React from 'react';

/**
 * Emblema Oficial de RED ALI.C.I.A reconstruido en gráficos vectoriales HD
 * con lógica de Panal de Abejas (6 celdas exteriores que convergen hacia el
 * núcleo hexagonal blanco + abejas polinizadoras y pulso dorado de miel).
 */
export default function HoneycombLogo({
  className = 'w-full h-full',
  isAssembling = false,
  showBees = true,
  assemblyKey = 0,
}) {
  return (
    <div
      key={assemblyKey}
      className={`relative flex items-center justify-center select-none ${
        isAssembling ? 'honeycomb-assembling' : ''
      } ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="w-full h-full overflow-visible drop-shadow-md"
        role="img"
        aria-label="Emblema Panal RED ALI.C.I.A"
      >
        <defs>
          {/* Gradientes Verde Salvia Institucional con matices de luz orgánica */}
          <linearGradient id="aliciaSageTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#82a891" />
            <stop offset="50%" stopColor="#678d75" />
            <stop offset="100%" stopColor="#4f735c" />
          </linearGradient>

          <linearGradient id="aliciaSageSide" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#779d86" />
            <stop offset="55%" stopColor="#638971" />
            <stop offset="100%" stopColor="#496b55" />
          </linearGradient>

          <linearGradient id="aliciaSageBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d937b" />
            <stop offset="55%" stopColor="#587d66" />
            <stop offset="100%" stopColor="#3f5d4a" />
          </linearGradient>

          {/* Gradiente Miel Dorada para el pulso del panal */}
          <linearGradient id="honeyGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#678d75" />
          </linearGradient>

          {/* Patrón interno de micro-celdas de panal dentro de las facetas verdes */}
          <pattern
            id="microHoneycomb"
            width="24"
            height="41.569"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M12 0 L24 6.928 L24 20.784 L12 27.712 L0 20.784 L0 6.928 Z M0 20.784 L12 27.712 L12 41.569 M24 20.784 L12 27.712"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.9"
              strokeOpacity="0.12"
            />
          </pattern>

          <filter id="cellBevel" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#132019" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Base blanca que forma los canales luminosos del panal */}
        <rect
          x="6"
          y="6"
          width="388"
          height="388"
          rx="18"
          fill="#ffffff"
          className="transition-all duration-500"
        />

        {/* LAS 6 CELDAS EXTERIORES DEL PANAL ALI.C.I.A */}
        <g filter="url(#cellBevel)">
          {/* 1. Celda Superior (Alianza) */}
          <g className="honeycomb-cell cell-top">
            <polygon
              points="96,10 304,10 255,83 145,83"
              fill="url(#aliciaSageTop)"
              stroke="#8fb59e"
              strokeWidth="1.2"
            />
            <polygon points="96,10 304,10 255,83 145,83" fill="url(#microHoneycomb)" />
          </g>

          {/* 2. Celda Noreste (Colaboración) */}
          <g className="honeycomb-cell cell-tr">
            <polygon
              points="329,10 390,10 390,190 328,190 277,89"
              fill="url(#aliciaSageSide)"
              stroke="#8fb59e"
              strokeWidth="1.2"
            />
            <polygon points="329,10 390,10 390,190 328,190 277,89" fill="url(#microHoneycomb)" />
          </g>

          {/* 3. Celda Sureste (Investigación) */}
          <g className="honeycomb-cell cell-br">
            <polygon
              points="328,210 390,210 390,390 329,390 277,311"
              fill="url(#aliciaSageBottom)"
              stroke="#7ea48d"
              strokeWidth="1.2"
            />
            <polygon points="328,210 390,210 390,390 329,390 277,311" fill="url(#microHoneycomb)" />
          </g>

          {/* 4. Celda Inferior (Aprendizajes) */}
          <g className="honeycomb-cell cell-bottom">
            <polygon
              points="145,317 255,317 304,390 96,390"
              fill="url(#aliciaSageBottom)"
              stroke="#7ea48d"
              strokeWidth="1.2"
            />
            <polygon points="145,317 255,317 304,390 96,390" fill="url(#microHoneycomb)" />
          </g>

          {/* 5. Celda Suroeste (Sostenibilidad) */}
          <g className="honeycomb-cell cell-bl">
            <polygon
              points="10,210 72,210 123,311 71,390 10,390"
              fill="url(#aliciaSageBottom)"
              stroke="#7ea48d"
              strokeWidth="1.2"
            />
            <polygon points="10,210 72,210 123,311 71,390 10,390" fill="url(#microHoneycomb)" />
          </g>

          {/* 6. Celda Noroeste (Comunidad CFE) */}
          <g className="honeycomb-cell cell-tl">
            <polygon
              points="10,10 71,10 123,89 72,190 10,190"
              fill="url(#aliciaSageSide)"
              stroke="#8fb59e"
              strokeWidth="1.2"
            />
            <polygon points="10,10 71,10 123,89 72,190 10,190" fill="url(#microHoneycomb)" />
          </g>
        </g>

        {/* HEXÁGONO CENTRAL BLANCO (NÚCLEO DEL PANAL) + TEXTO ALI.C.I.A */}
        <g className="center-hex-group">
          <polygon
            points="142,86 258,86 322,200 258,314 142,314 78,200"
            fill="#ffffff"
          />

          {/* Borde interior hexagonal sutil que brilla durante el ensamblaje */}
          <polygon
            points="145,92 255,92 315,200 255,308 145,308 85,200"
            fill="none"
            stroke="url(#honeyGoldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="honey-energy-ring"
          />

          {/* Tipografía Institucional Exacta en Alta Definición */}
          <text
            x="200"
            y="215"
            textAnchor="middle"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontSize="46"
            fontWeight="500"
            letterSpacing="1.2"
            fill="#2c3330"
            className="select-none"
          >
            ALI.C.I.A
          </text>
        </g>

        {/* ABEJAS OBRERAS ANIMADAS (Simbolizando el trabajo colectivo del Panal) */}
        {showBees && (
          <g className="pointer-events-none">
            {/* Abeja 1 (Superior derecha del hexágono) */}
            <g transform="translate(200, 200)">
              <g className="bee-flight-1">
                {/* Estela dorada */}
                <circle cx="-10" cy="2" r="8" fill="#fbbf24" fillOpacity="0.28" />
                {/* Alas */}
                <ellipse
                  cx="-2"
                  cy="-7"
                  rx="7"
                  ry="4.2"
                  fill="#e2f1e8"
                  fillOpacity="0.88"
                  stroke="#678d75"
                  strokeWidth="0.8"
                  className="bee-wing"
                />
                <ellipse
                  cx="3"
                  cy="-6"
                  rx="6"
                  ry="3.6"
                  fill="#ffffff"
                  fillOpacity="0.9"
                  stroke="#678d75"
                  strokeWidth="0.8"
                  className="bee-wing"
                />
                {/* Cuerpo de la abeja */}
                <ellipse cx="0" cy="0" rx="8.5" ry="5.5" fill="#f59e0b" stroke="#1e293b" strokeWidth="1.2" />
                {/* Franjas */}
                <path d="M-3,-5 L-3,5 M2,-5 L2,5" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" />
                {/* Cabeza y antenas */}
                <circle cx="8" cy="-0.5" r="3.2" fill="#1e293b" />
                <path d="M10,-2.5 Q13,-6 15,-5 M10,0.5 Q13,3 15,2" fill="none" stroke="#1e293b" strokeWidth="1" strokeLinecap="round" />
              </g>
            </g>

            {/* Abeja 2 (Inferior izquierda del hexágono) */}
            <g transform="translate(200, 200)">
              <g className="bee-flight-2">
                <circle cx="-8" cy="2" r="7" fill="#fbbf24" fillOpacity="0.24" />
                <ellipse
                  cx="-1"
                  cy="-6.5"
                  rx="6.5"
                  ry="3.8"
                  fill="#e2f1e8"
                  fillOpacity="0.88"
                  stroke="#678d75"
                  strokeWidth="0.8"
                  className="bee-wing"
                />
                <ellipse cx="0" cy="0" rx="7.5" ry="4.8" fill="#f59e0b" stroke="#1e293b" strokeWidth="1.2" />
                <path d="M-2.5,-4.5 L-2.5,4.5 M2,-4.5 L2,4.5" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                <circle cx="7" cy="-0.5" r="2.8" fill="#1e293b" />
              </g>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
