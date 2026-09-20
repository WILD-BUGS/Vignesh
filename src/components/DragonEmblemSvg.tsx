import React from 'react';

interface DragonEmblemProps {
  size?: number;
  className?: string;
  withText?: boolean;
}

export const DragonEmblemSvg: React.FC<DragonEmblemProps> = ({
  size = 40,
  className = '',
  withText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 border border-[#D8B05A]/70 bg-[#5A0D0F] shadow-sm transition-transform duration-300 hover:scale-105"
        style={{
          width: size,
          height: size,
          borderRadius: '3px',
          boxShadow: '0 0 12px rgba(216, 176, 90, 0.2), inset 0 0 6px rgba(59, 8, 9, 0.8)',
        }}
      >
        {/* Inner thin decorative border */}
        <div className="absolute inset-0.5 border border-[#D8B05A]/30 pointer-events-none" />

        {/* Traditional Chinese Seal character 龍 (Dragon) */}
        <span
          className="font-seal text-[#F0D38A] select-none font-bold tracking-tighter"
          style={{ fontSize: size * 0.58, lineHeight: 1 }}
        >
          龍
        </span>

        {/* Corner marks */}
        <span className="absolute top-0.5 left-0.5 w-1 h-1 border-t border-l border-[#FFF0C2]" />
        <span className="absolute bottom-0.5 right-0.5 w-1 h-1 border-b border-r border-[#FFF0C2]" />
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <span className="font-editorial text-sm tracking-[0.25em] text-[#F7E8C6] font-semibold leading-tight">
            VIGNESH K
          </span>
          <span className="font-code text-[9px] tracking-[0.28em] text-[#D8B05A] uppercase">
            SOFTWARE DEVELOPER
          </span>
        </div>
      )}
    </div>
  );
};
