import React, { useEffect, useState } from 'react';
import cloudsImg from '../assets/images/auspicious_clouds_papercut_1789881146219.png';

interface AuspiciousCloudsBgProps {
  variant?: 'hero' | 'section' | 'ambient';
  className?: string;
  parallaxSpeed?: number;
}

export const AuspiciousCloudsBg: React.FC<AuspiciousCloudsBgProps> = ({
  variant = 'hero',
  className = '',
  parallaxSpeed = 0.12,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * parallaxSpeed;

  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
        {/* Layer 1: Top-right drifting auspicious clouds with golden foil edges */}
        <div
          className="absolute -top-12 -right-16 sm:right-0 w-[380px] sm:w-[580px] lg:w-[720px] aspect-[16/9] transition-transform duration-300 ease-out opacity-55 sm:opacity-75"
          style={{
            transform: `translate3d(${parallaxOffset * 0.3}px, ${parallaxOffset * -0.4}px, 0)`,
          }}
        >
          <img
            src={cloudsImg}
            alt="Traditional 3D Chinese Auspicious Clouds with Gold Foil"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Layer 2: Mid-left background cloud formation behind the dragon */}
        <div
          className="absolute top-1/3 -left-28 sm:-left-16 w-[340px] sm:w-[500px] lg:w-[620px] aspect-[16/9] transition-transform duration-300 ease-out opacity-45 sm:opacity-60"
          style={{
            transform: `translate3d(${parallaxOffset * -0.2}px, ${parallaxOffset * -0.2}px, 0)`,
          }}
        >
          <img
            src={cloudsImg}
            alt="Layered Crimson and Gold Paper-Cut Clouds"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain scale-x-[-1] filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Layer 3: Bottom ambient drifting cloud ribbon */}
        <div
          className="absolute -bottom-16 left-1/4 w-[420px] sm:w-[640px] aspect-[16/9] transition-transform duration-300 ease-out opacity-40 sm:opacity-50"
          style={{
            transform: `translate3d(${parallaxOffset * 0.15}px, ${parallaxOffset * -0.1}px, 0)`,
          }}
        >
          <img
            src={cloudsImg}
            alt="Auspicious Cloud Ribbon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_6px_16px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    );
  }

  // Section variant for between sections or headers
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      <div
        className="absolute top-1/4 -right-20 w-[420px] sm:w-[600px] aspect-[16/9] opacity-35"
        style={{
          transform: `translate3d(0, ${parallaxOffset * -0.15}px, 0)`,
        }}
      >
        <img
          src={cloudsImg}
          alt="Chinese Auspicious Cloud Background Motif"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
};
