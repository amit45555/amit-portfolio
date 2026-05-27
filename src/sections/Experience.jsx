import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-24 relative px-6">
      
      {/* Background accents */}
      <div className="absolute top-[20%] right-0 w-[450px] h-[450px] rounded-full bg-indigo-500/5 glow-blur-indigo pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-20 space-y-3">
          <span className={`text-xs font-bold tracking-widest font-display uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            03 / CAREER PATH
          </span>
          <h2 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Professional Journey
          </h2>
          <div className="h-1 w-[60px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-indigo-500/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 py-4">
          
          {/* Connector dots and items */}
          {experienceTimeline.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              className="relative text-left group"
            >
              
              {/* Glowing Node Point */}
              <div className={`absolute -left-[45px] md:-left-[61px] top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                isDark 
                  ? 'bg-dark-bg border-indigo-500/40 group-hover:border-indigo-500' 
                  : 'bg-white border-indigo-500/30 group-hover:border-indigo-500 shadow-sm'
              }`}>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors animate-pulse" />
              </div>

              {/* Step Card */}
              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isDark 
                  ? 'glass-card-dark border-white/5 hover:border-indigo-500/20 shadow-2xl' 
                  : 'glass-card-light border-slate-200/50 hover:border-indigo-500/15 shadow-md shadow-slate-100/50'
              }`}>
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-500/10 pb-4 mb-5">
                  <div className="space-y-1">
                    <h3 className={`font-display font-extrabold text-lg sm:text-xl ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      {item.role}
                    </h3>
                    <div className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      <Briefcase size={13} />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className={`px-3 py-1.5 rounded-full border text-[10px] sm:text-xs font-bold font-mono tracking-wide flex items-center gap-1.5 shrink-0 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-slate-300' 
                      : 'bg-indigo-50/50 border-indigo-50 text-indigo-700'
                  }`}>
                    <Calendar size={12} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Bullets List */}
                <ul className="space-y-3 text-xs sm:text-sm">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 items-start">
                      <ChevronRight size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
