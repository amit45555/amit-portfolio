import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, AwardIcon } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Card } from '../components/Card';

export const Certifications = () => {
  const { isDark } = useTheme();

  return (
    <section id="certifications" className="py-24 relative px-6">
      
      {/* Background accents */}
      <div className="absolute top-[30%] left-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 glow-blur-indigo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className={`text-xs font-bold tracking-widest font-display uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            06 / ACCREDITATIONS
          </span>
          <h2 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Certifications
          </h2>
          <div className="h-1 w-[60px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              delay={idx * 0.1}
              hoverScale={true}
              className="h-full"
            >
              <div className="flex flex-col text-left gap-4 h-full justify-between">
                <div className="space-y-4">
                  {/* Badge Icon */}
                  <div className={`inline-flex p-3 rounded-2xl border ${
                    isDark ? 'bg-white/5 border-white/5 text-indigo-400' : 'bg-indigo-50 border-indigo-50 text-indigo-600 shadow-sm'
                  }`}>
                    <Award size={24} />
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-display font-extrabold text-base sm:text-lg tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>{cert.issuer}</span>
                      <span className={`font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{cert.date}</span>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {cert.description}
                  </p>
                </div>

                <div className={`mt-4 pt-4 border-t border-indigo-500/5 text-[9px] font-mono tracking-widest uppercase ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  VERIFIED_CREDENTIAL.SYS
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
