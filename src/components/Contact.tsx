import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DragonScalesBorderSvg } from './DragonScalesBorderSvg';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Github, Linkedin, Code } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#3B0809] via-[#5A0D0F] to-[#7A1719]/40 border-t border-[#5A0D0F]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs sm:text-sm tracking-[0.3em] text-[#D8B05A] font-semibold">
              06
            </span>
            <span className="w-12 h-[1px] bg-[#D8B05A]/40" />
            <span className="font-code text-xs tracking-[0.25em] text-[#C9B89A] uppercase">
              ENGAGEMENT
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.1em] text-[#FFF0C2] mt-3">
            THE NEXT CHAPTER
          </h2>
          <p className="font-editorial text-base sm:text-lg tracking-[0.2em] text-[#F0D38A] uppercase mt-1">
            LET&apos;S BUILD SOMETHING GREAT
          </p>

          <div className="mt-4">
            <DragonScalesBorderSvg />
          </div>
        </div>

        {/* 2-Column Grid: Left Details & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Inquiries & Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="font-quote text-2xl sm:text-3xl text-[#FFF0C2] italic leading-relaxed">
                &ldquo;Every great project begins with an idea.&rdquo;
              </p>
              <p className="mt-4 text-sm text-[#C9B89A] leading-relaxed font-light">
                Whether you are exploring a novel Computer Vision integration, architecting a resilient web platform, or seeking a disciplined software engineer for your team, my terminal is open.
              </p>
            </div>

            {/* Direct Contact Items */}
            <div className="space-y-4 pt-2 font-mono text-xs">
              {/* Email */}
              <div className="p-4 bg-[#3B0809]/60 border border-[#D8B05A]/30 flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F0D38A] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#C9B89A] block uppercase">Direct Electronic Mail</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#FFF0C2] hover:text-[#F0D38A] transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 bg-[#3B0809]/60 border border-[#D8B05A]/30 flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F0D38A] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#C9B89A] block uppercase">Direct Telephone</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-[#FFF0C2] hover:text-[#F0D38A] transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 bg-[#3B0809]/60 border border-[#D8B05A]/30 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#F0D38A] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#C9B89A] block uppercase">Geographic Hub</span>
                  <span className="text-[#FFF0C2]">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <span className="font-code text-[11px] tracking-widest text-[#D8B05A] uppercase block mb-3">
                CODE REGISTRIES & PROFILES
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#D8B05A]/40 bg-[#5A0D0F]/40 hover:bg-[#7A1719] text-[#FFF0C2] font-code text-xs tracking-wider"
                >
                  <Github className="w-3.5 h-3.5 text-[#F0D38A]" />
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B05A]" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#D8B05A]/40 bg-[#5A0D0F]/40 hover:bg-[#7A1719] text-[#FFF0C2] font-code text-xs tracking-wider"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#F0D38A]" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B05A]" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#D8B05A]/40 bg-[#5A0D0F]/40 hover:bg-[#7A1719] text-[#FFF0C2] font-code text-xs tracking-wider"
                >
                  <Code className="w-3.5 h-3.5 text-[#F0D38A]" />
                  <span>LEETCODE</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B05A]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#3B0809]/90 border border-[#D8B05A]/50 chinese-corner shadow-xl">
              <div className="border-b border-[#D8B05A]/30 pb-4 mb-6">
                <span className="font-code text-[10px] tracking-[0.3em] text-[#D8B05A] uppercase block">
                  COMMUNICATION PROTOCOL
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#FFF0C2]">
                  SEND AN INQUIRY
                </h3>
              </div>

              {status === 'sent' ? (
                <div className="p-8 text-center bg-[#5A0D0F]/40 border border-[#F0D38A]/60 my-6 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#F0D38A] mx-auto mb-3" />
                  <h4 className="font-editorial text-xl font-bold text-[#FFF0C2]">
                    DISPATCH CONFIRMED
                  </h4>
                  <p className="mt-2 text-xs font-mono text-[#C9B89A]">
                    Thank you. Your message has been received into Vignesh&apos;s direct queue. Expect a response within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-code text-[11px] tracking-wider text-[#D8B05A] uppercase block mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full bg-[#5A0D0F]/40 border border-[#D8B05A]/35 focus:border-[#F0D38A] px-4 py-2.5 text-sm text-[#FFF0C2] placeholder-[#C9B89A]/40 outline-none font-sans transition-colors"
                        style={{ borderRadius: '2px' }}
                      />
                    </div>

                    <div>
                      <label className="font-code text-[11px] tracking-wider text-[#D8B05A] uppercase block mb-1">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full bg-[#5A0D0F]/40 border border-[#D8B05A]/35 focus:border-[#F0D38A] px-4 py-2.5 text-sm text-[#FFF0C2] placeholder-[#C9B89A]/40 outline-none font-sans transition-colors"
                        style={{ borderRadius: '2px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-code text-[11px] tracking-wider text-[#D8B05A] uppercase block mb-1">
                      PROJECT TOPIC / INQUIRY
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Computer Vision Collaboration / Software Role"
                      className="w-full bg-[#5A0D0F]/40 border border-[#D8B05A]/35 focus:border-[#F0D38A] px-4 py-2.5 text-sm text-[#FFF0C2] placeholder-[#C9B89A]/40 outline-none font-sans transition-colors"
                      style={{ borderRadius: '2px' }}
                    />
                  </div>

                  <div>
                    <label className="font-code text-[11px] tracking-wider text-[#D8B05A] uppercase block mb-1">
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your requirements, project scope, or opportunity..."
                      className="w-full bg-[#5A0D0F]/40 border border-[#D8B05A]/35 focus:border-[#F0D38A] px-4 py-2.5 text-sm text-[#FFF0C2] placeholder-[#C9B89A]/40 outline-none font-sans transition-colors resize-none"
                      style={{ borderRadius: '2px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 bg-[#7A1719] hover:bg-[#5A0D0F] text-[#FFF0C2] border border-[#D8B05A] font-code text-xs tracking-[0.25em] uppercase font-semibold transition-all shadow-[0_4px_16px_rgba(59,8,9,0.7)] flex items-center justify-center gap-2 mt-2"
                    style={{ borderRadius: '2px' }}
                  >
                    {status === 'sending' ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <span>TRANSMIT DISPATCH</span>
                        <Send className="w-3.5 h-3.5 text-[#F0D38A]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
