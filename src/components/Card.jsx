import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { MouseSpotlight } from './MouseSpotlight';

export const Card = ({ 
  children, 
  className = "", 
  delay = 0,
  hoverScale = true,
  onClick
}) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      whileHover={hoverScale ? { y: -6, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`rounded-2xl cursor-pointer transition-all duration-300 ${
        isDark ? 'glass-card-dark hover:border-indigo-500/30' : 'glass-card-light hover:border-indigo-500/20'
      } ${className}`}
    >
      <MouseSpotlight isDark={isDark} className="h-full w-full p-6 sm:p-8 flex flex-col justify-between">
        {children}
      </MouseSpotlight>
    </motion.div>
  );
};
