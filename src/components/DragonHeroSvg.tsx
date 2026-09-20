import React from 'react';

interface DragonHeroSvgProps {
  className?: string;
}

export const DragonHeroSvg: React.FC<DragonHeroSvgProps> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 540 820"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Gold gradients */}
          <linearGradient id="dragonGoldMaster" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0C2" />
            <stop offset="35%" stopColor="#F0D38A" />
            <stop offset="70%" stopColor="#D8B05A" />
            <stop offset="100%" stopColor="#9C752B" />
          </linearGradient>

          <linearGradient id="dragonCrimsonDepth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A1719" />
            <stop offset="50%" stopColor="#5A0D0F" />
            <stop offset="100%" stopColor="#3B0809" />
          </linearGradient>

          <linearGradient id="paperRelief" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#A8282B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B0809" stopOpacity="0.95" />
          </linearGradient>

          {/* Scale Pattern for Paper-Cut Texture */}
          <pattern id="dragonScalePattern" width="22" height="16" patternUnits="userSpaceOnUse">
            <path
              d="M0,8 C5,2 17,2 22,8 C17,14 5,14 0,8 Z"
              fill="none"
              stroke="#D8B05A"
              strokeWidth="0.8"
              opacity="0.65"
            />
            <path
              d="M11,0 C16,4 20,4 22,8 C14,8 8,8 0,8 C2,4 6,4 11,0 Z"
              fill="#5A0D0F"
              opacity="0.3"
            />
          </pattern>

          {/* Glow filter for subtle gold aura */}
          <filter id="softGoldGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= BACKGROUND CLOUD SWIRLS BEHIND DRAGON ================= */}
        <g opacity="0.3">
          <path
            d="M-50,300 C20,280 80,320 120,290 C160,260 170,220 220,230 C270,240 310,290 350,270 C390,250 420,180 470,200"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M-40,480 C30,460 110,500 160,470 C210,440 230,390 290,410 C350,430 380,490 440,460"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="1.2"
          />
          <path
            d="M-30,650 C40,630 120,680 180,640 C240,600 300,660 360,630"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="1.2"
            strokeDasharray="6 4"
          />
        </g>

        {/* ================= DRAGON MAIN BODY (SINUOUS COILED CHINESE DRAGON) ================= */}
        {/* Layer 1: Crimson Paper-Cut Silhouette Base */}
        <path
          d="M-80,720 
             C-20,700 40,680 90,620 
             C140,560 160,480 140,400 
             C120,320 80,270 90,210 
             C100,150 160,110 230,120 
             C300,130 340,180 380,230 
             C410,270 430,340 390,400 
             C350,460 270,490 230,550 
             C190,610 200,690 260,740 
             C310,780 380,790 440,760 
             L450,790 
             C380,830 280,820 220,770 
             C160,720 140,630 170,560 
             C200,490 280,470 320,410 
             C360,350 350,290 320,250 
             C280,200 240,180 190,180 
             C140,180 90,220 70,280 
             C50,340 80,420 70,480 
             C60,540 20,610 -30,660 
             C-60,690 -90,710 -120,730 Z"
          fill="url(#dragonCrimsonDepth)"
          stroke="url(#dragonGoldMaster)"
          strokeWidth="1.8"
        />

        {/* Scale Texture Overlay on Primary Curve */}
        <path
          d="M90,210 C100,150 160,110 230,120 C300,130 340,180 380,230 C410,270 430,340 390,400 C350,460 270,490 230,550 C190,610 200,690 260,740 C200,720 160,650 170,570 C190,490 270,470 310,410 C340,360 330,300 300,260 C260,210 210,180 170,190 Z"
          fill="url(#dragonScalePattern)"
        />

        {/* ================= DORSAL SCALES & FLAME SPINES (龍脊与火焰) ================= */}
        <g stroke="url(#dragonGoldMaster)" strokeWidth="1.5" fill="rgba(216,176,90,0.12)">
          {/* Flame spikes running along spine */}
          <path d="M120,130 L135,90 L145,130" />
          <path d="M155,118 L175,75 L185,122" />
          <path d="M195,115 L220,68 L228,122" />
          <path d="M240,120 L270,72 L275,130" />
          <path d="M290,135 L325,90 L328,145" />
          <path d="M340,160 L380,118 L375,175" />
          <path d="M385,200 L430,165 L415,220" />
          <path d="M420,250 L470,225 L445,275" />
          <path d="M435,310 L485,295 L445,340" />
          <path d="M420,370 L468,375 L415,410" />
          <path d="M375,435 L420,455 L365,470" />
          <path d="M315,500 L355,530 L298,525" />
          <path d="M260,570 L290,610 L240,590" />
          <path d="M225,650 L250,700 L210,670" />
          <path d="M245,730 L275,780 L235,760" />
        </g>

        {/* ================= DRAGON HEAD (MAJESTIC PAPER-CUT ENGRAVING) ================= */}
        {/* Head Base at (260-440, 60-190) */}
        <g id="dragonHead">
          {/* Crown & Brow */}
          <path
            d="M260,110 
               C275,85 310,70 350,75 
               C390,80 430,105 450,135 
               C465,158 480,185 470,205 
               C455,225 410,230 380,215 
               C350,200 320,185 290,185 
               C270,185 250,150 260,110 Z"
            fill="url(#dragonCrimsonDepth)"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="2"
          />

          {/* Snout & Muzzle */}
          <path
            d="M440,115 
               C470,110 505,120 520,135 
               C535,150 535,170 515,185 
               C495,200 460,205 435,195"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="2.2"
            fill="#5A0D0F"
          />

          {/* Nostril & Snout Flame Curl */}
          <path
            d="M495,145 C505,140 515,142 512,152 C508,160 498,158 495,145"
            stroke="#FFF0C2"
            strokeWidth="1.5"
            fill="#D8B05A"
          />
          <path
            d="M510,135 C525,125 538,130 535,145 C532,155 522,158 515,150"
            stroke="#F0D38A"
            strokeWidth="1.2"
          />

          {/* Sharp Serrated Teeth */}
          <path
            d="M460,185 L470,200 L480,186 L490,202 L500,188 L510,202"
            stroke="#FFF0C2"
            strokeWidth="1.5"
            fill="#FFF0C2"
            opacity="0.9"
          />

          {/* Lower Jaw */}
          <path
            d="M410,225 
               C445,245 490,240 510,215 
               C495,210 470,208 450,205"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="2"
            fill="#7A1719"
          />

          {/* Majestic Dragon Antlers / Horns (龍角) */}
          {/* Main Long Antler */}
          <path
            d="M320,80 
               C300,40 290,10 320,-20 
               C335,-35 350,-30 345,-15 
               C338,10 340,30 360,60"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
            filter="url(#softGoldGlow)"
          />
          {/* Antler branch 1 */}
          <path
            d="M312,25 C290,10 275,5 268,-5 C275,-15 290,0 315,12"
            stroke="#F0D38A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Antler branch 2 */}
          <path
            d="M335,-2 C350,-20 370,-30 385,-35 C385,-22 368,-10 345,5"
            stroke="#F0D38A"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Secondary Rear Horn */}
          <path
            d="M280,95 C250,65 240,40 250,15 C260,5 270,18 275,40 C280,60 295,80 300,90"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Dragon Eye (Wise, Piercing Imperial Gaze) */}
          <ellipse cx="405" cy="138" rx="15" ry="9" transform="rotate(-10 405 138)" fill="#3B0809" stroke="#F0D38A" strokeWidth="1.8" />
          <polygon points="400,138 412,135 408,141" fill="#FFF0C2" />
          <circle cx="406" cy="137" r="3.5" fill="#D8B05A" />
          <circle cx="407" cy="136" r="1.2" fill="#FFF0C2" />

          {/* Eyebrow & Flame Crest */}
          <path
            d="M380,132 C395,118 420,118 435,125 C450,118 440,108 425,108 C405,108 385,120 380,132"
            stroke="#FFF0C2"
            strokeWidth="2"
            fill="#D8B05A"
          />

          {/* Flowing Whiskers (龍鬚) - Graceful calligraphic curves */}
          {/* Upper Whisker */}
          <path
            d="M480,165 
               C530,175 570,140 560,100 
               C555,70 510,65 485,85 
               C465,100 480,120 500,115 
               C520,110 530,95 515,90"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Lower Long Trailing Whisker */}
          <path
            d="M455,215 
               C510,260 560,250 550,195 
               C540,150 490,160 480,190 
               C470,220 500,240 525,230"
            stroke="#D8B05A"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Chin Beard Tuft */}
          <path
            d="M420,240 C430,280 415,310 405,330 C418,310 440,285 435,245"
            stroke="#F0D38A"
            strokeWidth="1.8"
            fill="#5A0D0F"
          />
          <path
            d="M435,245 C455,280 450,305 440,325 C455,300 465,270 450,235"
            stroke="#D8B05A"
            strokeWidth="1.5"
          />
        </g>

        {/* ================= DRAGON CLAW & PEARL (龍爪与宝珠) ================= */}
        {/* Powerful 5-Toed Imperial Talon grasping from the side */}
        <g id="dragonClaw" stroke="url(#dragonGoldMaster)" strokeWidth="2" fill="#5A0D0F">
          {/* Forearm */}
          <path d="M160,430 C200,435 240,410 270,430 C290,445 285,475 250,470 C210,465 170,460 150,450 Z" />

          {/* Talon 1 */}
          <path d="M265,420 C290,400 315,395 330,405 C335,395 315,385 280,395" strokeWidth="2.2" />
          {/* Claw Tip Sharp Curve */}
          <path d="M330,405 C345,408 355,420 350,425 C345,430 335,420 330,415" fill="#FFF0C2" />

          {/* Talon 2 */}
          <path d="M280,435 C310,425 335,430 350,445 C355,435 330,420 295,425" strokeWidth="2.2" />
          <path d="M350,445 C365,450 370,462 362,465 C355,468 348,458 345,450" fill="#FFF0C2" />

          {/* Talon 3 */}
          <path d="M275,455 C305,460 325,475 335,495 C340,485 320,468 290,455" strokeWidth="2.2" />
          <path d="M335,495 C345,505 348,518 340,520 C332,520 328,508 328,500" fill="#FFF0C2" />

          {/* Dragon's Flaming Pearl of Wisdom (symbol of mastery & code) */}
          <g transform="translate(365, 410)" filter="url(#softGoldGlow)">
            <circle cx="28" cy="28" r="22" fill="url(#dragonCrimsonDepth)" stroke="url(#dragonGoldMaster)" strokeWidth="2" />
            <circle cx="28" cy="28" r="14" fill="none" stroke="#FFF0C2" strokeWidth="1.2" strokeDasharray="2 3" />
            <circle cx="28" cy="28" r="7" fill="#F0D38A" opacity="0.9" />
            {/* Whirling energy flames around pearl */}
            <path d="M28,6 C38,12 42,20 38,28 C34,36 20,38 18,28 C16,18 24,10 28,6" stroke="#FFF0C2" strokeWidth="1.4" fill="none" />
            <path d="M48,28 C44,38 36,42 28,38 C20,34 18,20 28,18" stroke="#D8B05A" strokeWidth="1.2" fill="none" />
          </g>
        </g>

        {/* ================= LOWER BODY & SWIRLING TAIL ================= */}
        <g stroke="url(#dragonGoldMaster)" strokeWidth="1.5" fill="none">
          {/* Rib and belly segment engraving lines */}
          <path d="M110,250 C125,260 145,260 160,250" />
          <path d="M100,290 C120,305 140,305 155,295" />
          <path d="M100,335 C120,350 145,350 165,335" />
          <path d="M105,380 C128,395 150,395 170,380" />
          <path d="M290,290 C305,305 320,305 335,290" />
          <path d="M295,330 C310,345 325,345 340,330" />
          <path d="M280,375 C300,390 315,390 330,375" />

          {/* Tail Tuft with calligraphy flourish */}
          <path
            d="M440,760 
               C480,750 510,770 520,800 
               C495,795 470,805 450,820 
               C465,800 455,785 440,790"
            strokeWidth="2"
            fill="#7A1719"
          />
        </g>

        {/* Traditional Auspicious Cloud Clusters Framed Around Dragon */}
        <g opacity="0.85">
          {/* Cloud cluster 1 - Top Left */}
          <path
            d="M30,70 C15,70 5,60 8,45 C12,32 25,28 35,32 C45,18 68,15 80,25 C92,15 110,18 115,30 C125,32 135,42 130,52 C125,62 110,65 100,60 C90,70 70,72 60,65 C50,70 40,70 30,70 Z"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="1.2"
            fill="rgba(90, 13, 15, 0.4)"
          />
          {/* Cloud cluster 2 - Mid Right near Claw */}
          <path
            d="M380,510 C365,510 355,500 358,485 C362,472 375,468 385,472 C395,458 418,455 430,465 C442,455 460,458 465,470 C475,472 485,482 480,492 C475,502 460,505 450,500 C440,510 420,512 410,505 C400,510 390,510 380,510 Z"
            stroke="url(#dragonGoldMaster)"
            strokeWidth="1.2"
            fill="rgba(90, 13, 15, 0.4)"
          />
        </g>
      </svg>
    </div>
  );
};
