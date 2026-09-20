import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { DragonScalesBorderSvg } from './DragonScalesBorderSvg';
import { AuspiciousCloudsBg } from './AuspiciousCloudsBg';
import { CloudMotifSvg } from './CloudMotifSvg';
import {
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle,
  Cpu,
  ShieldAlert,
  Users,
  Activity,
  X,
  Layers,
  Sparkles,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'metrics'>('overview');

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#3B0809] border-t border-[#5A0D0F] overflow-hidden">
      {/* 3D Paper-Cut Auspicious Clouds Background */}
      <AuspiciousCloudsBg variant="section" className="opacity-60" />

      {/* Background Watermark Auspicious Clouds */}
      <div className="absolute top-20 left-10 pointer-events-none opacity-15">
        <CloudMotifSvg size="lg" />
      </div>
      <div className="absolute bottom-20 right-10 pointer-events-none opacity-15">
        <CloudMotifSvg size="lg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs sm:text-sm tracking-[0.3em] text-[#D8B05A] font-semibold">
              03
            </span>
            <span className="w-12 h-[1px] bg-[#D8B05A]/40" />
            <span className="font-code text-xs tracking-[0.25em] text-[#C9B89A] uppercase">
              SELECTED ARTIFACTS
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.1em] text-[#FFF0C2] mt-3">
            FORGED WORK
          </h2>
          <p className="font-editorial text-base sm:text-lg tracking-[0.2em] text-[#F0D38A] uppercase mt-1">
            IDEAS BROUGHT TO LIFE
          </p>

          <div className="mt-4">
            <DragonScalesBorderSvg />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#5A0D0F]/30 border border-[#D8B05A]/30 hover:border-[#F0D38A] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_12px_35px_rgba(216,176,90,0.2)] hover:-translate-y-1.5"
              style={{ borderRadius: '2px' }}
            >
              {/* Hover Effect Layer: Background Dragon / Cloud watermark emerges */}
              <div className="absolute -right-12 -bottom-12 pointer-events-none opacity-0 group-hover:opacity-25 transition-opacity duration-700">
                <CloudMotifSvg size="md" />
              </div>

              {/* Top Visual Banner with Custom Aesthetic Motif */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-b from-[#7A1719]/60 to-[#3B0809] flex items-center justify-center border-b border-[#D8B05A]/25">
                
                {/* Visual Motif per Project */}
                {project.id === 'cv-ml-class-monitoring' && (
                  <div className="relative flex flex-col items-center justify-center p-6 text-center transform transition-transform duration-500 group-hover:scale-105">
                    {/* Visual target reticle for Computer Vision */}
                    <div className="relative w-24 h-24 border border-[#F0D38A]/50 flex items-center justify-center">
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#FFF0C2]" />
                      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#FFF0C2]" />
                      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#FFF0C2]" />
                      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#FFF0C2]" />
                      
                      <div className="w-12 h-12 rounded-full border border-dashed border-[#D8B05A] animate-spin" style={{ animationDuration: '14s' }} />
                      <Cpu className="w-8 h-8 text-[#F0D38A] absolute" />
                    </div>
                    <span className="font-code text-[10px] tracking-[0.25em] text-[#D8B05A] mt-3">
                      FACE EMBEDDING // 30 FPS
                    </span>
                  </div>
                )}

                {project.id === 'smart-api-manager' && (
                  <div className="relative flex flex-col items-center justify-center p-6 text-center transform transition-transform duration-500 group-hover:scale-105">
                    {/* Vault & Shield Security Motif */}
                    <div className="relative w-24 h-24 border border-[#D8B05A]/50 flex items-center justify-center bg-[#5A0D0F]/40">
                      <div className="w-16 h-16 border border-[#F0D38A]/40 flex items-center justify-center rotate-45">
                        <ShieldAlert className="w-8 h-8 text-[#F0D38A] -rotate-45" />
                      </div>
                    </div>
                    <span className="font-code text-[10px] tracking-[0.25em] text-[#D8B05A] mt-3">
                      AES-256 VAULT // TOKEN BUCKET
                    </span>
                  </div>
                )}

                {project.id === 'complaint-management-system' && (
                  <div className="relative flex flex-col items-center justify-center p-6 text-center transform transition-transform duration-500 group-hover:scale-105">
                    {/* Role-Based Hierarchy Motif */}
                    <div className="relative w-24 h-24 border border-[#D8B05A]/50 flex items-center justify-center bg-[#5A0D0F]/40">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-8 h-8 text-[#F0D38A]" />
                      </div>
                    </div>
                    <span className="font-code text-[10px] tracking-[0.25em] text-[#D8B05A] mt-3">
                      3 TIERS // REAL-TIME ESCALATION
                    </span>
                  </div>
                )}

                {/* Project Number Watermark */}
                <span className="absolute top-3 left-4 font-editorial text-2xl font-bold text-[#FFF0C2]/30 group-hover:text-[#F0D38A]/70 transition-colors">
                  {project.number}
                </span>

                {/* Status badge */}
                <div className="absolute top-3 right-4 px-2 py-0.5 border border-[#D8B05A]/40 bg-[#3B0809]/80 font-code text-[9px] tracking-wider text-[#F0D38A]">
                  {project.status}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Number / Forged Work Eyebrow on Hover */}
                  <div className="flex items-center justify-between text-xs font-code tracking-widest text-[#D8B05A] mb-2">
                    <span>{project.number} / FORGED WORK</span>
                    <span className="text-[10px] text-[#C9B89A]">{project.category}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold tracking-[0.08em] text-[#FFF0C2] group-hover:text-[#FFF0C2] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tagline / Brief description */}
                  <p className="mt-3 text-sm text-[#C9B89A] font-light leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 border border-[#D8B05A]/25 bg-[#3B0809]/60 font-code text-[10px] tracking-wider text-[#F7E8C6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to View Case Study */}
                <div className="mt-7 pt-4 border-t border-[#D8B05A]/20 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedCaseStudy(project);
                      setActiveTab('overview');
                    }}
                    className="inline-flex items-center gap-2 font-code text-xs tracking-[0.18em] text-[#F0D38A] group-hover:text-[#FFF0C2] uppercase font-semibold transition-colors"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <span className="font-code text-[11px] text-[#D8B05A]/70">
                    {project.metrics[0].value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#3B0809] border border-[#D8B05A] p-6 sm:p-8 chinese-corner shadow-[0_15px_50px_rgba(0,0,0,0.9)]"
              style={{ borderRadius: '2px' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 text-[#C9B89A] hover:text-[#FFF0C2] p-1.5 transition-colors z-20"
                aria-label="Close case study"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Case Study Header */}
              <div className="border-b border-[#D8B05A]/30 pb-6 mb-6">
                <div className="flex items-center gap-2 mb-2 font-code text-xs tracking-[0.25em] text-[#D8B05A]">
                  <span>{selectedCaseStudy.number}</span>
                  <span>//</span>
                  <span>FORGED WORK CASE STUDY</span>
                  <span>//</span>
                  <span>{selectedCaseStudy.category}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-4xl font-bold tracking-[0.08em] text-[#FFF0C2]">
                  {selectedCaseStudy.title}
                </h3>
                <p className="font-editorial text-sm sm:text-base tracking-[0.15em] text-[#F0D38A] mt-1">
                  {selectedCaseStudy.subtitle}
                </p>

                {/* Key Metrics Bar */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-[#7A1719]">
                  {selectedCaseStudy.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-[#5A0D0F]/40 border border-[#D8B05A]/25 text-center">
                      <span className="font-editorial text-xl sm:text-2xl font-bold text-[#FFF0C2] block">
                        {m.value}
                      </span>
                      <span className="font-code text-[10px] tracking-wider text-[#C9B89A] block mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 border-b border-[#D8B05A]/25 pb-3 mb-6">
                {(['overview', 'architecture', 'metrics'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1.5 font-code text-xs tracking-wider uppercase transition-colors ${
                      activeTab === tab
                        ? 'bg-[#7A1719] border border-[#F0D38A] text-[#FFF0C2]'
                        : 'text-[#C9B89A] hover:text-[#F7E8C6]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-5 text-sm text-[#F7E8C6]">
                  <div>
                    <h4 className="font-editorial text-xs font-semibold tracking-[0.2em] text-[#D8B05A] uppercase mb-2">
                      SYSTEM OVERVIEW & PURPOSE
                    </h4>
                    <p className="leading-relaxed font-light text-[#C9B89A]">
                      {selectedCaseStudy.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-editorial text-xs font-semibold tracking-[0.2em] text-[#D8B05A] uppercase mb-3">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </h4>
                    <ul className="space-y-2">
                      {selectedCaseStudy.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#F7E8C6]">
                          <CheckCircle className="w-4 h-4 text-[#F0D38A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-4 text-xs font-mono">
                  <h4 className="font-editorial text-xs font-semibold tracking-[0.2em] text-[#D8B05A] uppercase font-sans">
                    PIPELINE ARCHITECTURE
                  </h4>
                  <div className="p-4 bg-[#5A0D0F]/50 border border-[#D8B05A]/30 text-[#FFF0C2] leading-relaxed">
                    {selectedCaseStudy.architecture}
                  </div>

                  <div className="p-4 border border-[#7A1719] bg-[#3B0809]">
                    <div className="text-[11px] text-[#D8B05A] mb-2 uppercase">Core Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCaseStudy.tags.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#5A0D0F] border border-[#D8B05A]/40 text-[#F7E8C6]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="space-y-4">
                  <h4 className="font-editorial text-xs font-semibold tracking-[0.2em] text-[#D8B05A] uppercase">
                    PERFORMANCE & IMPACT VERIFICATION
                  </h4>
                  <div className="space-y-3">
                    {selectedCaseStudy.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border border-[#D8B05A]/25 bg-[#5A0D0F]/30">
                        <span className="font-mono text-xs text-[#C9B89A]">{m.label}</span>
                        <span className="font-editorial text-lg font-bold text-[#F0D38A]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-[#D8B05A]/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCaseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8B05A]/50 hover:border-[#F0D38A] bg-[#5A0D0F]/40 hover:bg-[#7A1719] text-[#FFF0C2] font-code text-xs tracking-wider"
                  >
                    <Github className="w-3.5 h-3.5 text-[#F0D38A]" />
                    <span>REPOSITORY</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-5 py-2 bg-[#7A1719] hover:bg-[#5A0D0F] text-[#FFF0C2] border border-[#D8B05A] font-code text-xs tracking-widest uppercase"
                >
                  CLOSE CASE STUDY
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
