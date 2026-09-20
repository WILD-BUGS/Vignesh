import React, { useEffect, useState, useRef } from 'react';
import dragonImg from '../assets/images/paper_cut_gold_dragon_1789880161049.png';

interface ScrollDragonProps {
  className?: string;
  revealed?: boolean;
}

export const ScrollDragon: React.FC<ScrollDragonProps> = ({
  className = '',
  revealed = true,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setMousePos({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Compute scroll-reactive values
  // Vertical parallax offset: dragon gracefully ascends as the user scrolls
  const parallaxY = scrollY * -0.22;
  // Sinusoidal serpentine rotation mimicking a living dragon swimming in the clouds
  const serpentineRotate = Math.sin(scrollY * 0.0035) * 3.5;
  // Mouse tilt offsets
  const tiltX = mousePos.y * -4;
  const tiltY = mousePos.x * 5;

  return (
    <div
      ref={containerRef}
      className={`relative select-none transition-opacity duration-1000 ease-out ${
        revealed ? 'opacity-100' : 'opacity-0 -translate-x-8'
      } ${className}`}
    >
      {/* Background ambient warm gold spotlight */}
      <div
        className="absolute top-1/3 left-1/2 w-80 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8B05A]/15 blur-3xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isScrolling ? 0.35 : 0.2,
          transform: `translate3d(0, ${parallaxY * 0.5}px, 0)`,
        }}
      />

      {/* Main Dragon Container with 3D Parallax & Scroll Sway */}
      <div
        className="relative mx-auto flex items-center justify-center will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0) rotate(${serpentineRotate + tiltY * 0.5}deg) perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: isScrolling
            ? 'transform 0.1s linear'
            : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dynamic Glowing Transparent Dragon PNG */}
        <div className="relative w-[290px] sm:w-[380px] md:w-[440px] lg:w-[490px] xl:w-[530px] max-w-full">
          <img
            src={dragonImg}
            alt="Imperial 3D Paper-Cut Golden Dragon Winding through Clouds"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain transition-all duration-500 filter"
            style={{
              filter: isScrolling
                ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.92)) drop-shadow(0 0 30px rgba(240,211,138,0.45)) brightness(1.05)'
                : 'drop-shadow(0 14px 30px rgba(0,0,0,0.85)) drop-shadow(0 0 16px rgba(216,176,90,0.25))',
            }}
          />

          {/* Floating Vermilion Seal Calligraphy Badge */}
          <div
            className="absolute bottom-6 right-2 sm:right-6 bg-[#5A0D0F]/95 backdrop-blur-sm border border-[#D8B05A]/80 px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center gap-2.5 transition-transform duration-500 hover:scale-105"
            style={{
              transform: `translate3d(0, ${parallaxY * -0.1}px, 0)`,
            }}
          >
            <span className="font-seal text-[#F0D38A] text-xl font-bold leading-none">
              騰龍
            </span>
            <div className="flex flex-col text-left">
              <span className="font-code text-[9px] tracking-[0.25em] text-[#FFF0C2] uppercase font-semibold">
                FORGED BY CODE
              </span>
              <span className="font-code text-[8px] tracking-[0.15em] text-[#D8B05A]/80">
                SCROLL PARALLAX
              </span>
            </div>
          </div>

          {/* Floating Papercraft Badge */}
          <div
            className="absolute top-10 left-0 sm:-left-4 bg-[#3B0809]/90 border border-[#D8B05A]/50 px-2.5 py-1 hidden sm:flex items-center gap-2 backdrop-blur-sm shadow-md"
            style={{
              transform: `translate3d(0, ${parallaxY * 0.1}px, 0)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0D38A] animate-ping" />
            <span className="font-code text-[9px] tracking-[0.2em] text-[#D8B05A] uppercase">
              GOLD EMBOSSED RELIEF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
