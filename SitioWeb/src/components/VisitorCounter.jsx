import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export default function VisitorCounter({ className = '' }) {
  const [visits, setVisits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initCounter = async () => {
      const BASE_COUNT = 840;
      const STORAGE_KEY = 'alicia_portal_visits';
      const SESSION_KEY = 'alicia_session_counted';

      let localCount = parseInt(localStorage.getItem(STORAGE_KEY) || BASE_COUNT, 10);
      const isSessionCounted = sessionStorage.getItem(SESSION_KEY);

      if (!isSessionCounted) {
        localCount += 1;
        localStorage.setItem(STORAGE_KEY, localCount.toString());
        sessionStorage.setItem(SESSION_KEY, 'true');
      }

      try {
        const response = await fetch('https://api.counterapi.dev/v1/red-alicia-cfe-uy/visits/up', {
          method: 'GET',
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          const data = await response.json();
          if (data && typeof data.count === 'number') {
            const cloudTotal = BASE_COUNT + data.count;
            setVisits(cloudTotal);
            localStorage.setItem(STORAGE_KEY, cloudTotal.toString());
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // Fallback local si no hay conexión
      }

      setVisits(localCount);
      setLoading(false);
    };

    initCounter();
  }, []);

  const formattedCount = visits ? visits.toLocaleString('es-UY') : '840';

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white/90 dark:bg-[#0c1d14]/90 border border-alicia-sage-200 dark:border-alicia-sage-600/30 text-xs shadow-xs dark:shadow-md backdrop-blur-md transition-all hover:border-alicia-sage-400 ${className}`}
      title="Contador de visitas al portal de la Red ALI.C.I.A"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alicia-sage-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-alicia-sage-500"></span>
      </span>
      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
        <Eye className="w-3.5 h-3.5 text-alicia-sage-600 dark:text-alicia-sage-400" />
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Visitas:</span>
        <span className="font-bold text-slate-900 dark:text-white font-mono tracking-wider text-xs">
          {loading ? '...' : formattedCount}
        </span>
      </div>
    </div>
  );
}
