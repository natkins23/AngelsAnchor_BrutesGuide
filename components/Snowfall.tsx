// app/components/Snowfall.tsx

'use client';  // <-- Add this as the first line!

import { FC, useEffect, useRef } from 'react';

interface SnowfallProps {
  numberOfFlakes?: number;
  snowColor?: string;
}

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
}

const Snowfall: FC<SnowfallProps> = ({
  numberOfFlakes = 100,
  snowColor = '#fff',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1) Grab the canvas from the ref
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 2) Retrieve the 2D rendering context
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 3) Set canvas to match current window size
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // 4) Create an array of snowflakes
    const flakes: Snowflake[] = Array.from({ length: numberOfFlakes }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      drift: Math.random() * 1 - 0.5,
    }));

    // 5) Animation function
    function update() {
      ctx.clearRect(0, 0, width, height);

      for (const flake of flakes) {
        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > height) {
          flake.y = 0;
          flake.x = Math.random() * width;
        }
        if (flake.x > width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = width;
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = snowColor;
        ctx.fill();
      }

      requestAnimationFrame(update);
    }

    update();

    // 7) Handle window resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [numberOfFlakes, snowColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default Snowfall;
