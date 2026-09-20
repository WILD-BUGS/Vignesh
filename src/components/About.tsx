import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DragonScalesBorderSvg } from './DragonScalesBorderSvg';
import { AuspiciousCloudsBg } from './AuspiciousCloudsBg';
import { CloudMotifSvg } from './CloudMotifSvg';
import { Terminal, Shield, Award, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#3B0809] border-t border-[#5A0D0F] overflow-hidden">
      {/* 3D Paper-Cut Auspicious Clouds Background */}
      <AuspiciousCloudsBg variant="section" className="opacity-70" />

      {/* Ambient background clouds and soft gold gradient */}
      <div className="absolute top-10 right-0 pointer-events-none opacity-20">
        <CloudMotifSvg size="lg" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-15">
        <CloudMotifSvg size="md" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Number & Editorial Heading */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs sm:text-sm tracking-[0.3em] text-[#D8B05A] font-semibold">
              01
            </span>
            <span className="w-12 h-[1px] bg-[#D8B05A]/40" />
            <span className="font-code text-xs tracking-[0.25em] text-[#C9B89A] uppercase">
              ABOUT
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.1em] text-[#FFF0C2] mt-3">
            THE CRAFTSMAN
          </h2>
          <p className="font-editorial text-base sm:text-lg tracking-[0.2em] text-[#F0D38A] uppercase mt-1">
            A DEVELOPER&apos;S JOURNEY
          </p>

          {/* Dragon Scales Border Accent */}
          <div className="mt-4">
            <DragonScalesBorderSvg />
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Bio Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6 text-[#F7E8C6]">
            <p className="font-quote text-xl sm:text-2xl text-[#FFF0C2] italic leading-relaxed">
              &ldquo;I am a Computer Science undergraduate who loves building things at the intersection of AI/ML and practical software engineering.&rdquo;
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#C9B89A] font-light">
              True craftsmanship in code is not measured merely by syntax, but by the discipline of architectural restraint, algorithmic efficiency, and real-world utility. My work centers on transforming intricate computer vision and deep learning models into robust, low-latency applications that solve actual operational problems.
            </p>

            <p className="text-base leading-relaxed text-[#C9B89A] font-light">
              From engineering real-time biometric verification pipelines to architecting encrypted credential storage systems, I hold every commit to the standard of an artisan: clean, resilient, and forged to endure.
            </p>

            {/* Core Values / 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 border border-[#D8B05A]/25 bg-[#5A0D0F]/30" style={{ borderRadius: '2px' }}>
                <Terminal className="w-5 h-5 text-[#F0D38A] mb-2" />
                <h4 className="font-editorial text-sm font-semibold tracking-wider text-[#FFF0C2]">PRECISION</h4>
                <p className="text-xs text-[#C9B89A] mt-1 font-mono">Algorithms engineered for edge latency and zero bloat.</p>
              </div>

              <div className="p-4 border border-[#D8B05A]/25 bg-[#5A0D0F]/30" style={{ borderRadius: '2px' }}>
                <Shield className="w-5 h-5 text-[#F0D38A] mb-2" />
                <h4 className="font-editorial text-sm font-semibold tracking-wider text-[#FFF0C2]">DISCIPLINE</h4>
                <p className="text-xs text-[#C9B89A] mt-1 font-mono">Consistent daily problem solving and rigorous test rigor.</p>
              </div>

              <div className="p-4 border border-[#D8B05A]/25 bg-[#5A0D0F]/30" style={{ borderRadius: '2px' }}>
                <Compass className="w-5 h-5 text-[#F0D38A] mb-2" />
                <h4 className="font-editorial text-sm font-semibold tracking-wider text-[#FFF0C2]">EVOLUTION</h4>
                <p className="text-xs text-[#C9B89A] mt-1 font-mono">Continuous adaptation across vision, ML, and web stacks.</p>
              </div>
            </div>
          </div>

          {/* Right: Traditional Artisan Pass / Seal Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 bg-[#5A0D0F]/40 border border-[#D8B05A]/50 chinese-corner shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              
              {/* Header Seal Stamp */}
              <div className="flex items-center justify-between border-b border-[#D8B05A]/30 pb-4 mb-6">
                <div>
                  <span className="font-code text-[10px] tracking-[0.3em] text-[#D8B05A] uppercase block">
                    DEVELOPER DOSSIER
                  </span>
                  <span className="font-editorial text-xl font-bold tracking-[0.15em] text-[#FFF0C2]">
                    {PERSONAL_INFO.name}
                  </span>
                </div>

                {/* Vermilion Dragon Seal */}
                <div className="w-12 h-12 bg-[#7A1719] border border-[#F0D38A] flex items-center justify-center shadow-md">
                  <span className="font-seal text-2xl text-[#F0D38A] font-bold">印</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#7A1719]/60">
                  <span className="text-[#C9B89A]">DEGREE</span>
                  <span className="text-[#F7E8C6] font-semibold">{PERSONAL_INFO.education}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#7A1719]/60">
                  <span className="text-[#C9B89A]">LOCATION</span>
                  <span className="text-[#F7E8C6] font-semibold">{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#7A1719]/60">
                  <span className="text-[#C9B89A]">CORE DOMAINS</span>
                  <span className="text-[#F0D38A] font-semibold text-right">Computer Vision · ML · Full-Stack</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#7A1719]/60">
                  <span className="text-[#C9B89A]">STATUS</span>
                  <span className="text-[#FFF0C2] inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Active Developer
                  </span>
                </div>
              </div>

              {/* Artisan's Personal Quote */}
              <div className="mt-8 pt-6 border-t border-[#D8B05A]/30 text-center">
                <p className="font-quote text-2xl text-[#F0D38A] italic">
                  &ldquo;{PERSONAL_INFO.personalQuote}&rdquo;
                </p>
                <span className="font-code text-[9px] tracking-[0.3em] text-[#C9B89A] uppercase block mt-2">
                  DISCIPLINE · GROWTH · MASTERY
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
