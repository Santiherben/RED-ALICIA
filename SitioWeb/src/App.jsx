import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAliciaSection from './components/AboutAliciaSection';
import CometidosSection from './components/CometidosSection';
import AccionesSection from './components/AccionesSection';
import RevistaPanalSection from './components/RevistaPanalSection';
import TeamDirectorySection from './components/TeamDirectorySection';
import CommunitySection from './components/CommunitySection';
import RelatedGroupsSection from './components/RelatedGroupsSection';
import AdhesionSection from './components/AdhesionSection';
import Footer from './components/Footer';
import FundamentosModal from './components/FundamentosModal';
import MemberModal from './components/MemberModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('alicia_theme');
    return saved !== null ? saved === 'dark' : false;
  });
  const [isFundamentosOpen, setIsFundamentosOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    localStorage.setItem('alicia_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f6f9f7] text-slate-900 dark:bg-[#07120c] dark:text-slate-100 font-sans transition-colors duration-200 selection:bg-alicia-sage-500 selection:text-white">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenFundamentos={() => setIsFundamentosOpen(true)}
      />

      <main>
        <Hero onOpenFundamentos={() => setIsFundamentosOpen(true)} />
        <AboutAliciaSection onOpenFundamentos={() => setIsFundamentosOpen(true)} />
        <CometidosSection />
        <AccionesSection />
        <RevistaPanalSection />
        <TeamDirectorySection onSelectMember={(member) => setSelectedMember(member)} />
        <CommunitySection />
        <RelatedGroupsSection />
        <AdhesionSection />
      </main>

      <Footer onOpenFundamentos={() => setIsFundamentosOpen(true)} />

      <FundamentosModal
        isOpen={isFundamentosOpen}
        onClose={() => setIsFundamentosOpen(false)}
      />

      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
