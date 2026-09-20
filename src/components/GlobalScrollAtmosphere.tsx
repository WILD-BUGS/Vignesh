import React, { useEffect, useState, useRef } from 'react';
import cloudsImg from '../assets/images/auspicious_clouds_papercut_1789881146219.png';

interface SectionMarker {
  id: string;
  label: string;
  num: string;
  seal: string;
}

const SECTIONS: SectionMarker[] = [
  { id: 'hero', label: 'THE AWAKENING', num: '00', seal: '龍' },
  { id: 'about', label: 'CRAFTSMAN', num: '01', seal: '志' },
  { id: 'skills', label: 'ARSENAL', num: '02', seal: '技' },
  { id: 'projects', label: 'FORGED WORK', num: '03', seal: '作' },
  { id: 'discipline', label: 'DISCIPLINE', num: '04', seal: '煉' },
  { id: 'experience', label: 'JOURNEY', num: '05', seal: '道' },
  { id: 'contact', label: 'CONNECT', num: '06', seal: '印' },
];

export const GlobalScrollAtmosphere: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 180);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const maxScroll = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
          );
          setScrollY(currentY);
          setScrollProgress(Math.min(1, Math.max(0, currentY / maxScroll)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Parallax offsets for background elements
  const cloud1Y = scrollY * -0.28;
  const cloud1X = Math.sin(scrollY * 0.002) * 25 + scrollProgress * 50;

  const cloud2Y = scrollY * -0.18 + 200;
  const cloud2X = Math.cos(scrollY * 0.0018) * -30 - scrollProgress * 40;

  const cloud3Y = scrollY * -0.24 + 900;
  const cloud3X = Math.sin(scrollY * 0.0022) * 20;

  const cloud4Y = scrollY * -0.15 + 1800;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ================= FIXED GLOBAL PARALLAX BACKGROUND CLOUDS ================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        
        {/* Ambient Moving Radial Spotlight following scroll */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] rounded-full pointer-events-none transition-all duration-700 ease-out opacity-25"
          style={{
            top: `${scrollProgress * 75}%`,
            background: 'radial-gradient(circle, rgba(216,176,90,0.14) 0%, rgba(122,23,25,0.2) 45%, transparent 70%)',
          }}
        />

        {/* Global Cloud Layer 1 — Top Right floating cloud */}
        <div
          className="absolute top-10 -right-24 sm:-right-8 w-[360px] sm:w-[540px] lg:w-[680px] aspect-[16/9] will-change-transform opacity-30 sm:opacity-45 transition-opacity duration-500"
          style={{
            transform: `translate3d(${cloud1X}px, ${cloud1Y}px, 0)`,
          }}
        >
          <img
            src={cloudsImg}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* Global Cloud Layer 2 — Mid Left drifting cloud formation */}
        <div
          className="absolute top-1/4 -left-28 sm:-left-12 w-[340px] sm:w-[500px] lg:w-[640px] aspect-[16/9] will-change-transform opacity-25 sm:opacity-40 transition-opacity duration-500"
          style={{
            transform: `translate3d(${cloud2X}px, ${cloud2Y}px, 0) scaleX(-1)`,
          }}
        >
          <img
            src={cloudsImg}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Global Cloud Layer 3 — Deep Projects / Stats transition cloud */}
        <div
          className="absolute top-1/2 -right-32 sm:-right-16 w-[380px] sm:w-[560px] lg:w-[720px] aspect-[16/9] will-change-transform opacity-25 sm:opacity-35"
          style={{
            transform: `translate3d(${cloud3X}px, ${cloud3Y}px, 0)`,
          }}
        >
          <img
            src={cloudsImg}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* Global Cloud Layer 4 — Lower Journey & Contact atmospheric cloud */}
        <div
          className="absolute top-3/4 -left-24 sm:left-0 w-[400px] sm:w-[580px] lg:w-[700px] aspect-[16/9] will-change-transform opacity-20 sm:opacity-30"
          style={{
            transform: `translate3d(0, ${cloud4Y}px, 0) scaleX(-1)`,
          }}
        >
          <img
            src={cloudsImg}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* Subtle Undulating Golden Energy Wave Ribbon (Scroll Reactive) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldWaveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D8B05A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F0D38A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D8B05A" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d={`M 80 0 Q ${120 + Math.sin(scrollY * 0.004) * 40} ${viewport.height * 0.3} 80 ${viewport.height * 0.6} T 80 ${viewport.height}`}
            fill="none"
            stroke="url(#goldWaveGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d={`M ${viewport.width - 80} 0 Q ${viewport.width - 120 - Math.cos(scrollY * 0.0035) * 40} ${viewport.height * 0.4} ${viewport.width - 80} ${viewport.height * 0.7} T ${viewport.width - 80} ${viewport.height}`}
            fill="none"
            stroke="url(#goldWaveGrad)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      {/* ================= EDITORIAL VERTICAL SCROLL TRACK (RIGHT MARGIN) ================= */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none pointer-events-auto">
        {/* Top Seal Stamp */}
        <div className="mb-2 text-[10px] font-code tracking-widest text-[#D8B05A]/70 uppercase">
          CH
        </div>

        {/* Vertical Hairline Golden Rail */}
        <div className="relative w-[2px] h-64 sm:h-80 bg-[#5A0D0F] rounded-full overflow-visible">
          {/* Active Golden Fill */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#D8B05A] to-[#F0D38A] rounded-full transition-all duration-150 shadow-[0_0_8px_rgba(240,211,138,0.6)]"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Floating Dragon Calligraphy Seal Pointer */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 will-change-transform pointer-events-none"
            style={{ top: `${scrollProgress * 100}%` }}
          >
            <div className="w-6 h-6 rounded-full bg-[#5A0D0F] border-2 border-[#F0D38A] shadow-[0_0_12px_rgba(240,211,138,0.7)] flex items-center justify-center">
              <span className="font-seal text-[#FFF0C2] text-[11px] leading-none font-bold">
                龍
              </span>
            </div>
          </div>

          {/* Section Pips along the rail */}
          <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative -left-1.5 w-4 h-2 flex items-center justify-center pointer-events-auto"
                title={`${sec.num} — ${sec.label}`}
                aria-label={`Scroll to ${sec.label}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1719] border border-[#D8B05A]/40 group-hover:bg-[#F0D38A] group-hover:scale-150 transition-all" />
                
                {/* Tooltip on hover */}
                <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#3B0809] border border-[#D8B05A]/60 px-2 py-0.5 text-[9px] font-code tracking-widest text-[#FFF0C2] shadow-lg pointer-events-none">
                  {sec.num} // {sec.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Percentage Readout */}
        <div className="mt-3 font-code text-[9px] tracking-widest text-[#D8B05A]">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </>
  );
};
