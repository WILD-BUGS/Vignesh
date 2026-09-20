import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import { DragonScalesBorderSvg } from './DragonScalesBorderSvg';
import {
  Code2,
  Cpu,
  Network,
  Eye,
  Brain,
  Globe,
  Database,
  GitBranch,
  CheckCircle2,
  X,
  Sparkles,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-[#F0D38A]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#F0D38A]" />,
  Network: <Network className="w-6 h-6 text-[#F0D38A]" />,
  Eye: <Eye className="w-6 h-6 text-[#F0D38A]" />,
  Brain: <Brain className="w-6 h-6 text-[#F0D38A]" />,
  Globe: <Globe className="w-6 h-6 text-[#F0D38A]" />,
  Database: <Database className="w-6 h-6 text-[#F0D38A]" />,
  GitBranch: <GitBranch className="w-6 h-6 text-[#F0D38A]" />,
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Core & AI', 'Enterprise', 'Foundations', 'Specialization', 'Full-Stack', 'Tools & DevOps'];

  const filteredSkills = filterCategory === 'ALL'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === filterCategory || (filterCategory === 'Specialization' && (s.category === 'Specialization' || s.name === 'VISION' || s.name === 'ML / AI')));

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#3B0809] border-t border-[#5A0D0F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs sm:text-sm tracking-[0.3em] text-[#D8B05A] font-semibold">
              02
            </span>
            <span className="w-12 h-[1px] bg-[#D8B05A]/40" />
            <span className="font-code text-xs tracking-[0.25em] text-[#C9B89A] uppercase">
              EXPERTISE
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.1em] text-[#FFF0C2] mt-3">
            TOOLS OF THE CRAFT
          </h2>
          <p className="font-editorial text-base sm:text-lg tracking-[0.2em] text-[#F0D38A] uppercase mt-1">
            AN ARTISAN&apos;S INSTRUMENT COLLECTION
          </p>

          <div className="mt-4">
            <DragonScalesBorderSvg />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 font-code text-xs tracking-wider transition-all duration-300 border ${
                filterCategory === cat
                  ? 'bg-[#7A1719] border-[#F0D38A] text-[#FFF0C2] shadow-[0_0_12px_rgba(216,176,90,0.3)]'
                  : 'bg-[#5A0D0F]/30 border-[#D8B05A]/30 text-[#C9B89A] hover:border-[#D8B05A]/70 hover:text-[#F7E8C6]'
              }`}
              style={{ borderRadius: '2px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artisan Tools Grid — Traditional Square Cards with Thin Gold Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="group relative cursor-pointer p-6 sm:p-7 bg-[#5A0D0F]/35 hover:bg-[#7A1719]/40 border border-[#D8B05A]/35 hover:border-[#F0D38A] transition-all duration-300 flex flex-col items-center text-center chinese-corner shadow-md hover:shadow-[0_8px_25px_rgba(216,176,90,0.15)] hover:-translate-y-1"
              style={{ borderRadius: '2px' }}
            >
              {/* Subtle Red Paper Texture Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B0809]/20 to-[#3B0809]/60 pointer-events-none" />

              {/* Central Seal / Icon Emblem */}
              <div className="relative w-14 h-14 rounded-none border border-[#D8B05A]/50 bg-[#3B0809]/90 flex items-center justify-center mb-5 group-hover:border-[#F0D38A] transition-colors duration-300 shadow-inner">
                {/* Traditional engraved crosshair corner marks */}
                <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#D8B05A]/60" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#D8B05A]/60" />
                {ICON_MAP[skill.iconName] || <Code2 className="w-6 h-6 text-[#F0D38A]" />}
              </div>

              {/* Skill Title */}
              <h3 className="relative z-10 font-editorial text-lg sm:text-xl font-bold tracking-[0.16em] text-[#FFF0C2] group-hover:text-[#FFF0C2] transition-colors">
                {skill.name}
              </h3>

              {/* Artisan Subtext Pill */}
              <p className="relative z-10 font-code text-[11px] tracking-[0.2em] text-[#D8B05A] uppercase mt-2">
                {skill.subtext}
              </p>

              {/* Proficiency Tag */}
              <div className="relative z-10 mt-5 pt-4 border-t border-[#D8B05A]/20 w-full flex items-center justify-between text-[10px] font-mono text-[#C9B89A]">
                <span>{skill.category}</span>
                <span className="text-[#F0D38A] group-hover:underline flex items-center gap-1">
                  DETAILS →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Details Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div
              className="relative w-full max-w-lg bg-[#3B0809] border border-[#D8B05A] p-6 sm:p-8 chinese-corner shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              style={{ borderRadius: '2px' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-[#C9B89A] hover:text-[#FFF0C2] transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 border-b border-[#D8B05A]/30 pb-4 mb-5">
                <div className="w-12 h-12 border border-[#D8B05A] bg-[#5A0D0F] flex items-center justify-center">
                  {ICON_MAP[selectedSkill.iconName]}
                </div>
                <div>
                  <span className="font-code text-[10px] tracking-[0.3em] text-[#D8B05A] uppercase">
                    ARTISAN TOOL // {selectedSkill.category}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold tracking-[0.1em] text-[#FFF0C2]">
                    {selectedSkill.name}
                  </h3>
                  <span className="font-code text-xs text-[#F0D38A]">{selectedSkill.subtext}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#F7E8C6] leading-relaxed font-light mb-6">
                {selectedSkill.description}
              </p>

              {/* Key Practical Implementations */}
              <div className="space-y-3 mb-6">
                <h4 className="font-editorial text-xs font-semibold tracking-[0.2em] text-[#D8B05A] uppercase">
                  FORGED IMPLEMENTATIONS & ARTIFACTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSkill.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 bg-[#5A0D0F]/40 border border-[#D8B05A]/20 text-xs font-mono text-[#F7E8C6]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F0D38A] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level indicator */}
              <div className="flex items-center justify-between pt-4 border-t border-[#D8B05A]/30 text-xs font-mono">
                <span className="text-[#C9B89A]">MASTERY LEVEL</span>
                <span className="text-[#FFF0C2] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F0D38A]" />
                  {selectedSkill.level}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
