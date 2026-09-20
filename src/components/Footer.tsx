import React from 'react';
import { DragonLineArtFooterSvg } from './DragonScalesBorderSvg';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-14 bg-[#3B0809] border-t border-[#5A0D0F] text-center overflow-hidden">
      {/* Subtle radial warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#D8B05A]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Signature Gold Line-Art Dragon Emblem */}
        <div className="mb-4 hover:scale-110 transition-transform duration-300">
          <DragonLineArtFooterSvg className="w-16 h-10 mx-auto" />
        </div>

        {/* Divider with Center Red Stamp Dot */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D8B05A]/50 to-transparent relative mb-5">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7A1719] border border-[#F0D38A] rotate-45" />
        </div>

        {/* Motto: BUILD · LEARN · GROW · REPEAT */}
        <p className="font-editorial text-xs sm:text-sm tracking-[0.35em] text-[#F0D38A] font-semibold uppercase">
          BUILD · LEARN · GROW · REPEAT
        </p>

        {/* Copyright */}
        <p className="mt-3 font-code text-[11px] tracking-[0.25em] text-[#C9B89A]/80 uppercase">
          &copy; 2026 VIGNESH K · ALL RIGHTS RESERVED
        </p>
        
        <p className="mt-1 font-seal text-xs text-[#D8B05A]/60">
          以碼鑄器 · 止於至善
        </p>
      </div>
    </footer>
  );
};
