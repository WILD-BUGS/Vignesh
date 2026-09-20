import React, { useState, useEffect } from 'react';
import { ScrollDragon } from './ScrollDragon';
import { AuspiciousCloudsBg } from './AuspiciousCloudsBg';
import { CloudMotifSvg } from './CloudMotifSvg';
import { ArrowRight, FileDown, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onViewWork: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onOpenResume }) => {
  const [animStep, setAnimStep] = useState(1);
  const [nameDisplay, setNameDisplay] = useState('');
  const fullName = 'VIGNESH K';

  useEffect(() => {
    const t2 = setTimeout(() => setAnimStep(2), 300);
    const t3 = setTimeout(() => setAnimStep(3), 600);
    const t4 = setTimeout(() => setAnimStep(4), 1100);
    const t5 = setTimeout(() => setAnimStep(5), 2000);
    const t6 = setTimeout(() => setAnimStep(6), 2500);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  // Calm typewriter effect for Step 4
  useEffect(() => {
    if (animStep < 4) return;
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setNameDisplay(fullName.slice(0, index));
      if (index >= fullName.length) {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [animStep]);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-paper-grain"
    >
      {/* Background Layered 3D Auspicious Clouds with Parallax Drift */}
      <AuspiciousCloudsBg variant="hero" />

      {/* Subtle radial gold spotlight & ambient glows */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          animStep >= 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D8B05A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7A1719]/30 rounded-full blur-2xl pointer-events-none" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= SCROLL-REACTIVE GOLDEN DRAGON (35-40% of hero, left edge) ================= */}
          <div className="lg:col-span-5 relative">
            <ScrollDragon revealed={animStep >= 3} />
          </div>

          {/* ================= EDITORIAL CONTENT (IDEAS / CODE / IMPACT) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left lg:pl-4">
            
            {/* Top eyebrow: IDEAS / CODE / IMPACT */}
            <div
              className={`flex items-center gap-3 transition-opacity duration-700 ${
                animStep >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="w-8 h-[1px] bg-[#D8B05A]/60" />
              <span className="font-code text-xs sm:text-sm tracking-[0.3em] text-[#D8B05A] uppercase">
                IDEAS / CODE / IMPACT
              </span>
              <span className="w-12 h-[1px] bg-[#D8B05A]/30" />
            </div>

            {/* Name with Letter-by-Letter Reveal */}
            <div className="mt-4 sm:mt-5 min-h-[52px] sm:min-h-[72px]">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.14em] text-[#FFF0C2] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                {nameDisplay}
                {animStep === 4 && nameDisplay.length < fullName.length && (
                  <span className="inline-block w-2.5 h-10 bg-[#D8B05A] ml-2 animate-pulse" />
                )}
              </h1>
            </div>

            {/* Subtitle: SOFTWARE DEVELOPER */}
            <div
              className={`transition-all duration-700 mt-2 ${
                animStep >= 5
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
            >
              <p className="font-editorial text-lg sm:text-2xl tracking-[0.25em] text-[#F0D38A] font-semibold uppercase">
                {PERSONAL_INFO.title}
              </p>

              {/* Three Core Disciplines */}
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                {PERSONAL_INFO.disciplines.map((disc, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D8B05A]/35 bg-[#5A0D0F]/45 text-[#F7E8C6] font-code text-xs tracking-wider"
                    style={{ borderRadius: '2px' }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#D8B05A]" />
                    <span>{disc}</span>
                  </div>
                ))}
              </div>

              {/* Divider & Philosophical Motto */}
              <div className="mt-7 sm:mt-8 pt-6 border-t border-[#D8B05A]/25 max-w-xl">
                <blockquote className="font-quote text-lg sm:text-xl text-[#F7E8C6] italic tracking-wide leading-relaxed">
                  &ldquo;{PERSONAL_INFO.motto}&rdquo;
                </blockquote>
                <p className="mt-2 font-code text-[11px] tracking-[0.22em] text-[#C9B89A] uppercase">
                  ARCHITECTING RESILIENT ALGORITHMS & SCALABLE PRODUCTION SYSTEMS
                </p>
              </div>
            </div>

            {/* CTA Buttons & Location */}
            <div
              className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all duration-700 ${
                animStep >= 6
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {/* VIEW WORK CTA */}
              <button
                onClick={onViewWork}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#7A1719] hover:bg-[#5A0D0F] text-[#FFF0C2] border border-[#D8B05A] transition-all duration-300 font-code text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold shadow-[0_4px_20px_rgba(59,8,9,0.7)]"
                style={{ borderRadius: '2px' }}
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#F0D38A]" />
                <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#F0D38A]" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#F0D38A]" />
              </button>

              {/* DOWNLOAD RESUME CTA */}
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-[#D8B05A]/45 hover:border-[#D8B05A] bg-[#3B0809]/60 hover:bg-[#5A0D0F]/40 text-[#F7E8C6] hover:text-[#FFF0C2] transition-all duration-300 font-code text-xs sm:text-sm tracking-[0.18em] uppercase"
                style={{ borderRadius: '2px' }}
              >
                <FileDown className="w-4 h-4 text-[#D8B05A] transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>RESUME OVERVIEW</span>
              </button>

              {/* Location Badge */}
              <div className="sm:ml-auto flex items-center gap-2 text-[#C9B89A] font-code text-xs tracking-widest pt-2 sm:pt-0">
                <MapPin className="w-3.5 h-3.5 text-[#D8B05A]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none opacity-60">
        <span className="font-code text-[10px] tracking-[0.3em] text-[#D8B05A] uppercase">SCROLL</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#D8B05A] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
