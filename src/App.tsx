import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GoldSpecksCanvas } from './components/GoldSpecksCanvas';
import { GlobalScrollAtmosphere } from './components/GlobalScrollAtmosphere';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Smooth navigation helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'discipline', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id === 'discipline' ? 'projects' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#3B0809] text-[#F7E8C6] relative overflow-x-hidden selection:bg-[#D8B05A]/30 selection:text-[#FFF0C2]">
      {/* Scroll-Reactive Global Atmosphere & Auspicious Clouds */}
      <GlobalScrollAtmosphere />

      {/* Subtle Floating Gold Dust / Specks Canvas */}
      <GoldSpecksCanvas />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenConnect={() => scrollToSection('contact')}
      />

      {/* Hero Section — The Dragon Awakens */}
      <main>
        <Hero
          onViewWork={() => scrollToSection('projects')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 01 — The Craftsman / About */}
        <About />

        {/* 02 — Tools of the Craft / Skills */}
        <Skills />

        {/* 03 — Forged Work / Projects */}
        <Projects />

        {/* 04 — Discipline / Coding Statistics */}
        <Stats />

        {/* 05 — The Journey / Experience & Achievements */}
        <Journey />

        {/* 06 — The Next Chapter / Contact */}
        <Contact />
      </main>

      {/* 07 — Footer with Signature Dragon Emblem */}
      <Footer />

      {/* Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
