import React from 'react';

interface CloudMotifProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  opacity?: number;
}

export const CloudMotifSvg: React.FC<CloudMotifProps> = ({
  className = '',
  size = 'md',
  opacity = 0.25,
}) => {
  const sizeMap = {
    sm: 'w-24 h-12',
    md: 'w-44 h-22',
    lg: 'w-72 h-36',
    hero: 'w-full max-w-lg h-auto',
  };

  return (
    <svg
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${className}`}
      style={{ opacity }}
    >
      {/* Traditional Auspicious Cloud (祥云) linework in gold */}
      <defs>
        <linearGradient id="goldCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0C2" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#D8B05A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7A1719" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Cloud Outer Swirls */}
      <path
        d="M60,110 C45,110 30,95 30,75 C30,55 50,40 70,40 C75,40 80,42 85,45 C95,25 120,15 145,22 C165,28 178,45 180,60 C190,52 205,50 218,56 C235,64 242,82 238,98 C250,96 265,102 272,112 C280,122 276,138 262,144 C248,150 120,150 60,144 C45,142 35,130 40,118 C43,112 50,110 60,110 Z"
        stroke="url(#goldCloudGrad)"
        strokeWidth="1.5"
        fill="rgba(122, 23, 25, 0.15)"
      />

      {/* Cloud Inner Traditional Spiral 1 */}
      <path
        d="M75,95 C65,95 55,85 58,72 C60,60 74,52 86,58 C96,62 100,75 94,84 C89,92 78,92 72,87 C68,82 70,75 75,73 C79,71 83,74 82,78"
        stroke="#D8B05A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Cloud Inner Traditional Spiral 2 */}
      <path
        d="M140,85 C125,85 115,70 120,55 C125,40 145,35 160,42 C175,48 180,68 172,80 C165,90 150,92 140,85 C132,80 135,70 142,68 C148,65 155,70 152,75"
        stroke="#F0D38A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Cloud Tail Curled Whisp */}
      <path
        d="M210,105 C200,105 190,95 195,84 C200,72 215,68 228,75 C238,80 240,94 232,102 C226,108 216,108 210,103 C205,98 208,92 212,90"
        stroke="#D8B05A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Trailing cloud ribbons */}
      <path
        d="M30,130 C60,128 100,134 140,130 C180,126 230,132 290,125"
        stroke="#D8B05A"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <circle cx="295" cy="125" r="2" fill="#F0D38A" />
      <circle cx="305" cy="123" r="1.5" fill="#D8B05A" opacity="0.7" />
    </svg>
  );
};
