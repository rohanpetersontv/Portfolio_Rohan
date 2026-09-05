import { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

export default function InteractiveBackground() {
  const bgRef = useRef(null);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    
    if (prefersReducedMotion || isTouchDevice || !bgRef.current) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (bgRef.current) {
        bgRef.current.style.setProperty('--mx', `${currentX}px`);
        bgRef.current.style.setProperty('--my', `${currentY}px`);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="interactive-bg-wrapper" ref={bgRef}>
      <div className="bg-grid"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="cursor-glow"></div>
      <div className="vignette"></div>
    </div>
  );
}
