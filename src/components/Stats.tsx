import React, { useState } from 'react';
import { CODING_STATS } from '../data/portfolioData';
import { DragonScalesBorderSvg } from './DragonScalesBorderSvg';
import { Flame, GitCommit, GitPullRequest, Code, Trophy, Activity, Check } from 'lucide-react';

export const Stats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'github' | 'leetcode'>('all');

  // Simulated 14-week gold activity heatmap grid
  const weeks = 16;
  const daysPerWeek = 7;
  const activityData = Array.from({ length: weeks * daysPerWeek }, (_, i) => {
    // Generate organic activity levels: 0 to 4
    const seed = (i * 17 + 23) % 100;
    if (seed < 20) return 0;
    if (seed < 55) return 1;
    if (seed < 80) return 2;
    if (seed < 95) return 3;
    return 4;
  });

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#7A1719]/70 border-[#D8B05A]/30';
      case 2:
        return 'bg-[#9C752B]/80 border-[#D8B05A]/50';
      case 3:
        return 'bg-[#D8B05A] border-[#F0D38A] shadow-[0_0_6px_rgba(216,176,90,0.5)]';
      case 4:
        return 'bg-[#FFF0C2] border-[#FFF0C2] shadow-[0_0_8px_rgba(255,240,194,0.8)]';
      default:
        return 'bg-[#5A0D0F]/30 border-[#5A0D0F]';
    }
  };

  return (
    <section id="discipline" className="relative py-24 sm:py-32 bg-[#3B0809] border-t border-[#5A0D0F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs sm:text-sm tracking-[0.3em] text-[#D8B05A] font-semibold">
              04
            </span>
            <span className="w-12 h-[1px] bg-[#D8B05A]/40" />
            <span className="font-code text-xs tracking-[0.25em] text-[#C9B89A] uppercase">
              METRICS
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.1em] text-[#FFF0C2] mt-3">
            DISCIPLINE
          </h2>
          <p className="font-editorial text-base sm:text-lg tracking-[0.2em] text-[#F0D38A] uppercase mt-1">
            CONSISTENCY CREATES MASTERY
          </p>

          <div className="mt-4">
            <DragonScalesBorderSvg />
          </div>
        </div>

        {/* 3 Major Custom Metric Blocks (GitHub, LeetCode, Streak) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 01 — GITHUB PLAQUE */}
          <div
            className="relative p-6 sm:p-8 bg-[#5A0D0F]/35 border border-[#D8B05A]/40 chinese-corner shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            style={{ borderRadius: '2px' }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#D8B05A]/25 pb-4 mb-6">
                <span className="font-code text-xs tracking-[0.25em] text-[#D8B05A] uppercase font-semibold">
                  GITHUB
                </span>
                <span className="font-editorial text-xs text-[#C9B89A]">CODE REGISTRY</span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="font-code text-[11px] tracking-widest text-[#C9B89A] uppercase block">
                    REPOSITORIES
                  </span>
                  <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#FFF0C2] tracking-tight">
                    {CODING_STATS.github.repositories}
                  </span>
                </div>

                <div className="pt-4 border-t border-[#7A1719]">
                  <span className="font-code text-[11px] tracking-widest text-[#C9B89A] uppercase block">
                    COMMITS LOGGED
                  </span>
                  <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#F0D38A] tracking-tight">
                    {CODING_STATS.github.commits}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D8B05A]/20 flex items-center justify-between text-xs font-mono text-[#C9B89A]">
              <span>Contributions / Year</span>
              <span className="text-[#FFF0C2] font-semibold">{CODING_STATS.github.contributionsThisYear}</span>
            </div>
          </div>

          {/* 02 — LEETCODE PLAQUE */}
          <div
            className="relative p-6 sm:p-8 bg-[#5A0D0F]/35 border border-[#D8B05A]/40 chinese-corner shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            style={{ borderRadius: '2px' }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#D8B05A]/25 pb-4 mb-6">
                <span className="font-code text-xs tracking-[0.25em] text-[#D8B05A] uppercase font-semibold">
                  LEETCODE
                </span>
                <span className="font-editorial text-xs text-[#C9B89A]">ALGORITHMIC RIGOR</span>
              </div>

              <div>
                <span className="font-code text-[11px] tracking-widest text-[#C9B89A] uppercase block">
                  PROBLEMS MASTERED
                </span>
                <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#FFF0C2] tracking-tight">
                  {CODING_STATS.leetcode.totalProblems}
                </span>
              </div>

              {/* Breakdown Difficulty Bars */}
              <div className="mt-6 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-amber-300">MEDIUM (Core)</span>
                  <span className="text-[#F7E8C6] font-semibold">{CODING_STATS.leetcode.breakdown.medium}</span>
                </div>
                <div className="w-full h-1.5 bg-[#3B0809] border border-[#7A1719]">
                  <div className="h-full bg-amber-400" style={{ width: '51%' }} />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-emerald-400">EASY</span>
                  <span className="text-[#F7E8C6] font-semibold">{CODING_STATS.leetcode.breakdown.easy}</span>
                </div>
                <div className="w-full h-1.5 bg-[#3B0809] border border-[#7A1719]">
                  <div className="h-full bg-emerald-400" style={{ width: '34%' }} />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-rose-400">HARD (Advanced DP & Graphs)</span>
                  <span className="text-[#F7E8C6] font-semibold">{CODING_STATS.leetcode.breakdown.hard}</span>
                </div>
                <div className="w-full h-1.5 bg-[#3B0809] border border-[#7A1719]">
                  <div className="h-full bg-rose-400" style={{ width: '15%' }} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8B05A]/20 flex items-center justify-between text-xs font-mono text-[#C9B89A]">
              <span>Acceptance Rate</span>
              <span className="text-[#F0D38A] font-semibold">{CODING_STATS.leetcode.acceptanceRate}</span>
            </div>
          </div>

          {/* 03 — ACTIVE STREAK PLAQUE */}
          <div
            className="relative p-6 sm:p-8 bg-[#5A0D0F]/35 border border-[#D8B05A]/40 chinese-corner shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            style={{ borderRadius: '2px' }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#D8B05A]/25 pb-4 mb-6">
                <span className="font-code text-xs tracking-[0.25em] text-[#D8B05A] uppercase font-semibold">
                  STREAK
                </span>
                <span className="font-editorial text-xs text-[#C9B89A]">DAILY CRAFT</span>
              </div>

              <div>
                <span className="font-code text-[11px] tracking-widest text-[#C9B89A] uppercase block">
                  CONSECUTIVE DAYS
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#FFF0C2] tracking-tight">
                    {CODING_STATS.leetcode.streak}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm text-[#C9B89A] leading-relaxed font-light">
                Every single day, algorithms are executed, logic is refactored, and commits are forged. Unbroken focus builds unshakeable intuition.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D8B05A]/20 flex items-center justify-between text-xs font-mono text-[#C9B89A]">
              <span>Contest Rating</span>
              <span className="text-[#F0D38A] font-semibold">{CODING_STATS.leetcode.contestRating} (Knight)</span>
            </div>
          </div>

        </div>

        {/* Traditional Gold Commit Heatmap Visualizer */}
        <div className="mt-12 p-6 sm:p-8 bg-[#5A0D0F]/20 border border-[#D8B05A]/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-code text-[10px] tracking-[0.3em] text-[#D8B05A] uppercase block">
                DEVOTION TIMELINE
              </span>
              <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#FFF0C2]">
                500+ COMMITS & DAILY EXECUTION
              </h4>
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#C9B89A]">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#5A0D0F]/40 border border-[#5A0D0F]" />
                <span className="w-3 h-3 bg-[#7A1719]/70 border border-[#D8B05A]/30" />
                <span className="w-3 h-3 bg-[#9C752B]/80 border border-[#D8B05A]/50" />
                <span className="w-3 h-3 bg-[#D8B05A] border border-[#F0D38A]" />
                <span className="w-3 h-3 bg-[#FFF0C2] border border-[#FFF0C2]" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[620px]">
              {activityData.map((level, idx) => (
                <div
                  key={idx}
                  title={`Activity index #${idx + 1}`}
                  className={`w-3.5 h-3.5 border transition-transform duration-200 hover:scale-125 ${getHeatmapColor(level)}`}
                  style={{ borderRadius: '1px' }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
