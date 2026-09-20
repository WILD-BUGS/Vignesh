import React from 'react';
import { JOURNEY_TIMELINE, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { DragonScalesBorderSvg } from './DragonScalesBorderSvg';
import { Briefcase, GraduationCap, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#3B0809] border-t border-[#5A0D0F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs sm:text-sm tracking-[0.3em] text-[#D8B05A] font-semibold">
              05
            </span>
            <span className="w-12 h-[1px] bg-[#D8B05A]/40" />
            <span className="font-code text-xs tracking-[0.25em] text-[#C9B89A] uppercase">
              EVOLUTION
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.1em] text-[#FFF0C2] mt-3">
            THE JOURNEY
          </h2>
          <p className="font-editorial text-base sm:text-lg tracking-[0.2em] text-[#F0D38A] uppercase mt-1">
            REAL-WORLD EXPOSURE & MILESTONES
          </p>

          <div className="mt-4">
            <DragonScalesBorderSvg />
          </div>
        </div>

        {/* 2-Column Layout: Left Timeline, Right Experience & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Timeline with Vertical Gold Line */}
          <div className="lg:col-span-6">
            <h3 className="font-editorial text-xl font-bold text-[#FFF0C2] tracking-wider mb-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 border border-[#D8B05A] bg-[#7A1719]" />
              CHRONOLOGY OF MASTERY
            </h3>

            <div className="relative pl-8 border-l border-[#D8B05A]/40 space-y-10">
              {JOURNEY_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Gold Milestone Point */}
                  <span className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-none border border-[#F0D38A] bg-[#5A0D0F] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 bg-[#FFF0C2]" />
                  </span>

                  {/* Year Tag */}
                  <div className="inline-block px-2.5 py-0.5 border border-[#D8B05A]/40 bg-[#5A0D0F]/60 font-code text-xs font-semibold text-[#F0D38A] tracking-widest mb-2">
                    {item.year}
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#FFF0C2] tracking-wide">
                    {item.title}
                  </h4>
                  <p className="font-editorial text-xs sm:text-sm text-[#D8B05A] tracking-wider mt-0.5">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[#C9B89A] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Real-World Experience & Achievements Unlocked */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Experience Card: REAL-WORLD EXPOSURE */}
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#FFF0C2] tracking-wider mb-6 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[#F0D38A]" />
                REAL-WORLD EXPOSURE
              </h3>

              <div className="p-6 sm:p-7 bg-[#5A0D0F]/35 border border-[#D8B05A]/40 chinese-corner shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8B05A]/25 pb-4 mb-4">
                  <div>
                    <span className="font-code text-[10px] tracking-[0.25em] text-[#D8B05A] uppercase block">
                      FULL-STACK DEVELOPMENT
                    </span>
                    <h4 className="font-editorial text-xl font-bold text-[#FFF0C2] tracking-wide">
                      {EXPERIENCE_DATA.role}
                    </h4>
                  </div>
                  <span className="font-code text-xs text-[#F0D38A] px-2.5 py-1 bg-[#7A1719]/60 border border-[#D8B05A]/30">
                    {EXPERIENCE_DATA.duration}
                  </span>
                </div>

                <p className="text-sm text-[#C9B89A] leading-relaxed mb-5 font-light">
                  {EXPERIENCE_DATA.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  {EXPERIENCE_DATA.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#F7E8C6]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F0D38A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications: ACHIEVEMENTS UNLOCKED */}
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#FFF0C2] tracking-wider mb-6 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#F0D38A]" />
                ACHIEVEMENTS UNLOCKED
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 bg-[#5A0D0F]/25 border border-[#D8B05A]/30 hover:border-[#F0D38A] transition-colors relative"
                    style={{ borderRadius: '2px' }}
                  >
                    {/* Small Gold Seal in Top Right */}
                    <div className="absolute top-4 right-4 w-7 h-7 border border-[#D8B05A] bg-[#7A1719] flex items-center justify-center">
                      <span className="font-seal text-xs text-[#F0D38A]">印</span>
                    </div>

                    <span className="font-code text-[10px] tracking-widest text-[#D8B05A] uppercase block">
                      {cert.issuer}
                    </span>
                    <h4 className="font-editorial text-sm font-bold text-[#FFF0C2] mt-1 pr-8 leading-snug">
                      {cert.title}
                    </h4>
                    <div className="mt-3 pt-3 border-t border-[#7A1719] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#F0D38A] font-semibold">{cert.score}</span>
                      <span className="text-[#C9B89A]">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
