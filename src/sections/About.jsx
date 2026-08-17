import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Shield, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About = () => {
  const { isDark } = useTheme();

  const pillars = [
    {
      icon: <Cpu className="text-indigo-500" size={24} />,
      title: "Real-Time Systems",
      description: "Spearheaded low-latency dashboards connecting hardware telemetry streams directly to browser web sockets (OPCUA configurations)."
    },
    {
      icon: <Server className="text-purple-500" size={24} />,
      title: "Reliable Deployments",
      description: "Highly proficient in industrial-grade deployments using Internet Information Services (IIS) and PM2 cluster management."
    },
    {
      icon: <Shield className="text-emerald-500" size={24} />,
      title: "MERN Specialization",
      description: "Crafting end-to-end applications from custom frontends in React & Tailwind to secure high-concurrency Node/Express APIs."
    },
    {
      icon: <Sparkles className="text-amber-500" size={24} />,
      title: "Enterprise Delivery",
      description: "Delivered highly interactive dashboards and log visualizers for leading manufacturing plants like Automotive Domain."
    }
  ];

  return (
    <section id="about" className="py-24 relative px-6">
      
      {/* Soft background accents */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 glow-blur-indigo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xs font-bold tracking-widest font-display uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
          >
            01 / INSIGHT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Design Vector Grid / Interactive visual */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* Tech Matrix Card */}
            <div className={`relative w-full max-w-[400px] aspect-square rounded-3xl border p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
              isDark 
                ? 'glass-card-dark border-white/10' 
                : 'glass-card-light border-slate-200/60'
            }`}>
              {/* Card headers */}
              <div className="flex items-center justify-between pb-4 border-b border-indigo-500/10">
                <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>COORDINATE_MAP.SYS</span>
                <span className="text-[10px] text-indigo-500 font-bold">ACTIVE</span>
              </div>

              {/* Animated dots grid reflecting industrial system architecture */}
              <div className="grid grid-cols-6 gap-4 my-auto justify-items-center">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.15, 0.7, 0.15],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`w-2 h-2 rounded-full ${
                      i % 5 === 0 
                        ? 'bg-purple-500' 
                        : i % 3 === 0 
                        ? 'bg-emerald-500' 
                        : 'bg-indigo-500'
                    }`}
                  />
                ))}
              </div>

              {/* System readout */}
              <div className="pt-4 border-t border-indigo-500/10 flex flex-col gap-1 text-left font-mono">
                <div className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  &gt; CLIENT: Industrial Manufacturing Client
                </div>
                <div className="text-[9px] text-indigo-400 leading-none">
                  &gt; PROCESSOR_DELAY: &lt; 15ms // SOCKET.IO ACTIVE
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Tagline, Resume details & Pillars Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8 text-left"
          >
            {/* Tagline */}
            <div className="space-y-3">
              <h3 className={`text-2xl sm:text-3xl font-display font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.tagline}
              </h3>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {personalInfo.summary}
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              {pillars.map((pillar, i) => (
                <div 
                  key={i} 
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-3 ${
                    isDark 
                      ? 'bg-white/5 border-white/5 hover:border-indigo-500/30' 
                      : 'bg-slate-50/70 border-slate-200/50 hover:border-indigo-500/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200/60 shadow-sm'
                    }`}>
                      {pillar.icon}
                    </div>
                    <h4 className={`text-sm font-bold font-display uppercase tracking-wider ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {pillar.title}
                    </h4>
                  </div>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
