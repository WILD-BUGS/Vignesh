import React from 'react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { X, Printer, Download, Award, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#3B0809] border border-[#D8B05A] p-6 sm:p-10 chinese-corner shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
        style={{ borderRadius: '2px' }}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b border-[#D8B05A]/30 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-code text-xs tracking-[0.25em] text-[#D8B05A] uppercase">
              DOSSIER // RESUME OVERVIEW
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#D8B05A]/50 bg-[#5A0D0F]/40 hover:bg-[#7A1719] text-[#FFF0C2] font-code text-xs tracking-wider transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#F0D38A]" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#C9B89A] hover:text-[#FFF0C2] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-[#7A1719] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-[0.1em] text-[#FFF0C2]">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="font-editorial text-sm tracking-[0.2em] text-[#F0D38A] uppercase mt-1">
                  {PERSONAL_INFO.title} · COMPUTER VISION & MACHINE LEARNING
                </p>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-[#C9B89A] space-y-1">
                <div>{PERSONAL_INFO.location}</div>
                <div>{PERSONAL_INFO.email}</div>
                <div>{PERSONAL_INFO.phone}</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-editorial text-xs font-semibold tracking-[0.25em] text-[#D8B05A] uppercase mb-3">
              EDUCATION
            </h3>
            <div className="p-4 bg-[#5A0D0F]/30 border border-[#D8B05A]/20">
              <div className="flex justify-between items-start font-mono text-xs">
                <div>
                  <span className="font-semibold text-[#FFF0C2] text-sm block font-sans">
                    B.Tech in Information Technology
                  </span>
                  <span className="text-[#C9B89A]">Anna University Affiliated Institution, Chennai</span>
                </div>
                <span className="text-[#F0D38A] font-semibold">2023 — Present</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-editorial text-xs font-semibold tracking-[0.25em] text-[#D8B05A] uppercase mb-3">
              PROFESSIONAL EXPERIENCE
            </h3>
            <div className="p-4 bg-[#5A0D0F]/30 border border-[#D8B05A]/20">
              <div className="flex justify-between items-start font-mono text-xs mb-2">
                <div>
                  <span className="font-semibold text-[#FFF0C2] text-sm block font-sans">
                    {EXPERIENCE_DATA.role}
                  </span>
                  <span className="text-[#C9B89A]">{EXPERIENCE_DATA.program}</span>
                </div>
                <span className="text-[#F0D38A]">{EXPERIENCE_DATA.duration}</span>
              </div>
              <ul className="space-y-1.5 mt-3 text-xs text-[#F7E8C6]">
                {EXPERIENCE_DATA.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F0D38A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h3 className="font-editorial text-xs font-semibold tracking-[0.25em] text-[#D8B05A] uppercase mb-3">
              FEATURED ENGINEERING PROJECTS
            </h3>
            <div className="space-y-3">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="p-4 bg-[#5A0D0F]/30 border border-[#D8B05A]/20 font-mono text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-[#FFF0C2] text-sm font-sans">{p.title}</span>
                    <span className="text-[#F0D38A]">{p.tags.slice(0, 3).join(' · ')}</span>
                  </div>
                  <p className="text-[#C9B89A] font-sans leading-relaxed">{p.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h3 className="font-editorial text-xs font-semibold tracking-[0.25em] text-[#D8B05A] uppercase mb-3">
              TECHNICAL PROFICIENCY
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.map((s) => (
                <span key={s.id} className="px-3 py-1 bg-[#5A0D0F] border border-[#D8B05A]/30 text-xs font-mono text-[#F7E8C6]">
                  <strong className="text-[#FFF0C2]">{s.name}:</strong> {s.subtext}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-editorial text-xs font-semibold tracking-[0.25em] text-[#D8B05A] uppercase mb-3">
              CERTIFICATIONS & HONORS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {CERTIFICATIONS_DATA.map((c) => (
                <div key={c.id} className="p-3 bg-[#5A0D0F]/20 border border-[#D8B05A]/20">
                  <span className="text-[10px] text-[#D8B05A] block uppercase">{c.issuer}</span>
                  <span className="text-[#FFF0C2] font-semibold block font-sans mt-0.5">{c.title}</span>
                  <span className="text-[#F0D38A] text-[11px] block mt-1">{c.score}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#D8B05A]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#7A1719] hover:bg-[#5A0D0F] text-[#FFF0C2] border border-[#D8B05A] font-code text-xs tracking-widest uppercase"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
