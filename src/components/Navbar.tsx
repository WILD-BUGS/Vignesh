import React, { useState, useEffect } from 'react';
import { DragonEmblemSvg } from './DragonEmblemSvg';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConnect: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConnect,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#3B0809]/95 backdrop-blur-md border-b border-[#D8B05A]/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-[#3B0809]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Traditional Dragon Seal & Vignesh K */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="group flex items-center text-left focus:outline-none"
        >
          <DragonEmblemSvg size={36} withText={true} />
        </button>

        {/* Right Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative py-1">
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`font-code text-xs tracking-[0.2em] uppercase transition-colors duration-300 focus:outline-none ${
                      isActive
                        ? 'text-[#FFF0C2] font-semibold'
                        : 'text-[#C9B89A] hover:text-[#F7E8C6]'
                    }`}
                  >
                    {item.label}
                  </button>
                  {/* Sliding thin gold line underneath */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D8B05A] shadow-[0_0_8px_rgba(216,176,90,0.8)]" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Let's Connect CTA */}
          <button
            onClick={onOpenConnect}
            className="group relative inline-flex items-center gap-2 px-4 py-2 border border-[#D8B05A]/60 bg-[#5A0D0F]/40 text-[#F0D38A] hover:text-[#FFF0C2] hover:border-[#F0D38A] hover:bg-[#7A1719]/50 transition-all duration-300 font-code text-xs tracking-[0.18em]"
            style={{ borderRadius: '2px' }}
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-[#D8B05A]" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-[#D8B05A]" />
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenConnect}
            className="px-3 py-1.5 border border-[#D8B05A]/60 text-[#F0D38A] font-code text-[11px] tracking-widest bg-[#5A0D0F]/40"
          >
            TALK →
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F7E8C6] hover:text-[#F0D38A] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#D8B05A]/30 bg-[#3B0809]/98 px-6 py-6 transition-all">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left font-code text-sm tracking-[0.2em] py-1 border-b border-[#5A0D0F] ${
                    activeSection === item.id
                      ? 'text-[#FFF0C2] font-semibold'
                      : 'text-[#C9B89A]'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
