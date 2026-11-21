'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

const CONFETTI_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  pointerEvents: 'none',
};

export default function ConfettiEffect() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let frameId = null;

    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleResize = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateSize();
      });
    };

    updateSize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  if (windowSize.width === 0 || windowSize.height === 0) {
    return null;
  }

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={300}
      style={CONFETTI_STYLE}
    />
  );
}
