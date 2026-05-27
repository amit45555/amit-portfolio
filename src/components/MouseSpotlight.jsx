import React, { useRef, useState } from 'react';

export const MouseSpotlight = ({ children, className = "", isDark = true }) => {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--mouse-x': `${coords.x}px`,
        '--mouse-y': `${coords.y}px`,
      }}
    >
      {/* Dynamic spotlight layer */}
      {isHovered && (
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            isDark 
              ? "bg-radial-spotlight" 
              : "bg-radial-spotlight-light"
          }`} 
        />
      )}
      {children}
    </div>
  );
};
