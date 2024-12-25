import React, { useState, useEffect } from 'react';

export default function SantaFlying() {
  const [santaDirection, setSantaDirection] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>(
    'bottom-left'
  ); // Initial position
  const [santaTop, setSantaTop] = useState('80%'); // Starting vertical position
  const [santaLeft, setSantaLeft] = useState('-20%'); // Starting horizontal position

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate next direction and positions
      const nextDirection = getNextDirection(santaDirection);
      const { top, left } = calculateNextPosition(nextDirection);

      // Update Santa's position and direction
      setSantaDirection(nextDirection);
      setSantaTop(top);
      setSantaLeft(left);
    }, 10000); // Match the duration of the animations

    return () => clearInterval(interval); // Cleanup on unmount
  }, [santaDirection]);

  const getNextDirection = (currentDirection: typeof santaDirection) => {
    // Determine the next direction cyclically
    switch (currentDirection) {
      case 'bottom-left':
        return 'top-right';
      case 'top-right':
        return 'bottom-right';
      case 'bottom-right':
        return 'top-left';
      case 'top-left':
        return 'bottom-left';
      default:
        return 'bottom-left';
    }
  };

  const calculateNextPosition = (direction: typeof santaDirection) => {
    // Set top and left positions based on the next direction
    switch (direction) {
      case 'top-left':
        return { top: '5%', left: '-20%' };
      case 'top-right':
        return { top: '5%', left: '120%' };
      case 'bottom-left':
        return { top: '90%', left: '-20%' };
      case 'bottom-right':
        return { top: '90%', left: '120%' };
      default:
        return { top: '80%', left: '-20%' };
    }
  };

  const calculateScale = (left: string, top: string) => {
    // Parse left and top percentages
    const leftValue = parseFloat(left.replace('%', ''));
    const topValue = parseFloat(top.replace('%', ''));

    // Calculate scale based on proximity to screen center
    const horizontalScale = 1 - Math.abs(leftValue - 50) / 100; // Closer to center horizontally
    const verticalScale = 1 - Math.abs(topValue - 50) / 100; // Closer to center vertically

    // Return the smaller scale value for consistent shrinking
    return Math.max(0.5, Math.min(horizontalScale, verticalScale)); // Scale between 0.5 and 1
  };

  const santaScale = calculateScale(santaLeft, santaTop);

  return (
    <div className="santa-container">
      <div
        className="santa-gif"
        style={{
          top: santaTop,
          left: santaLeft,
          transform: `translate(-50%, -50%) scale(${santaScale}) scaleX(${santaDirection.includes('right') ? -1 : 1})`,
        }}
      >
        <img
          src="/santaRideGif.gif"
          alt="Santa riding his sleigh"
          style={{
            width: '200px',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}
