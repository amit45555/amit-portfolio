import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const Counter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const isFloat = !Number.isInteger(value);
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const currentVal = progress * value;
      setCount(isFloat ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value); // Ensure exact final value
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};
