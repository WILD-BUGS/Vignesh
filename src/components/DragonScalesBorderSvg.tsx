import React from 'react';

interface DragonScalesBorderProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const DragonScalesBorderSvg: React.FC<DragonScalesBorderProps> = ({
  className = '',
  orientation = 'horizontal',
}) => {
  if (orientation === 'vertical') {
    return (
      <svg
        viewBox="0 0 24 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-40 ${className}`}
      >
        <path d="M12,0 L12,160" stroke="#D8B05A" strokeWidth="0.8" opacity="0.3" />
        {[20, 45, 70, 95, 120, 145].map((y, i) => (
          <g key={i} opacity="0.5">
            <path
              d={`M4,${y - 8} C8,${y - 12} 16,${y - 12} 20,${y - 8} C16,${y} 8,${y} 4,${y - 8} Z`}
              stroke="#D8B05A"
              strokeWidth="0.8"
              fill="rgba(216, 176, 90, 0.08)"
            />
            <circle cx="12" cy={y - 8} r="1" fill="#F0D38A" />
          </g>
        ))}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-auto max-w-full ${className}`}
    >
      <path d="M0,10 L280,10" stroke="#D8B05A" strokeWidth="0.8" opacity="0.3" />
      {/* Repeating ornamental dragon scales along center */}
      {[50, 80, 110, 140, 170, 200, 230].map((x, i) => (
        <g key={i} opacity="0.75">
          <path
            d={`M${x - 8},5 C${x - 4},1 ${x + 4},1 ${x + 8},5 C${x + 4},9 ${x - 4},9 ${x - 8},5 Z`}
            stroke="#D8B05A"
            strokeWidth="0.9"
            fill="rgba(216, 176, 90, 0.15)"
          />
          <circle cx={x} cy="5" r="1.2" fill="#F0D38A" />
        </g>
      ))}
      <circle cx="10" cy="10" r="2" fill="#D8B05A" />
      <circle cx="270" cy="10" r="2" fill="#D8B05A" />
    </svg>
  );
};

export const DragonLineArtFooterSvg: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-12 ${className}`}
    >
      <defs>
        <linearGradient id="footerDragonGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0C2" />
          <stop offset="50%" stopColor="#D8B05A" />
          <stop offset="100%" stopColor="#9C752B" />
        </linearGradient>
      </defs>

      {/* Sinuous minimalist gold line art dragon */}
      <path
        d="M15,48 C22,40 32,38 42,42 C52,46 62,48 72,42 C82,36 88,26 95,22 C102,18 108,22 105,28 C102,34 94,36 86,34"
        stroke="url(#footerDragonGold)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Dragon Head contour */}
      <path
        d="M95,22 C97,17 102,14 108,16 C112,17 114,20 110,23 C106,26 102,26 98,24"
        stroke="url(#footerDragonGold)"
        strokeWidth="1.4"
        fill="rgba(216, 176, 90, 0.1)"
      />
      {/* Antler */}
      <path d="M102,15 L106,8 L108,12" stroke="#FFF0C2" strokeWidth="1.2" strokeLinecap="round" />
      {/* Whisker */}
      <path d="M110,22 C115,22 118,19 116,16" stroke="#F0D38A" strokeWidth="1" strokeLinecap="round" />
      {/* Claws */}
      <path d="M46,43 L42,52 M46,43 L47,53 M46,43 L52,50" stroke="url(#footerDragonGold)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M74,42 L72,50 M74,42 L77,50" stroke="url(#footerDragonGold)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Swirling tail */}
      <path d="M15,48 C10,50 6,46 10,40 C14,35 20,40 18,44" stroke="url(#footerDragonGold)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
};
