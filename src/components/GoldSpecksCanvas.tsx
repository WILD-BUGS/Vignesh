import React, { useEffect, useRef } from 'react';

export const GoldSpecksCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Track scroll velocity for realistic background inertia
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      scrollVelocity = Math.max(-25, Math.min(25, scrollVelocity + delta * 0.15));
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Subtle gold specks
    const particleCount = Math.min(Math.floor(width / 28), 50);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.35 - 0.1, // slow upward float
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      color: Math.random() > 0.35 ? '#F0D38A' : '#D8B05A',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll velocity smoothly toward 0
      scrollVelocity *= 0.93;
      const activeSpeedMultiplier = 1 + Math.min(Math.abs(scrollVelocity) * 0.15, 3);

      particles.forEach((p) => {
        // Apply scroll-induced draft: scrolling down pushes particles up (embers rising)
        p.x += p.speedX + Math.sin(p.pulse) * (scrollVelocity * 0.05);
        p.y += p.speedY - scrollVelocity * 0.45;
        p.pulse += p.pulseSpeed * activeSpeedMultiplier;

        // Wrap edges smoothly
        if (p.y < -15) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.y > height + 15) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 10;
        if (p.x > width + 15) p.x = -10;

        const currentOpacity = Math.max(
          0.06,
          Math.min(0.9, p.opacity + Math.sin(p.pulse) * 0.2 + Math.abs(scrollVelocity) * 0.02)
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + Math.abs(scrollVelocity) * 0.02), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.shadowBlur = 4 + Math.abs(scrollVelocity) * 0.2;
        ctx.shadowColor = '#FFF0C2';
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full opacity-60"
    />
  );
};
