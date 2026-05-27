import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cpu, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Card } from '../components/Card';

export const Skills = () => {
  const { isDark } = useTheme();

  // Helper to dynamically choose category icons
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="text-indigo-500" size={22} />;
      case "Server":
        return <Server className="text-purple-500" size={22} />;
      case "Cpu":
        return <Cpu className="text-emerald-500" size={22} />;
      default:
        return <CheckCircle className="text-indigo-500" size={22} />;
    }
  };

  return (
    <section id="skills" className="py-24 relative px-6">
      
      {/* Background decoration */}
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-purple-500/5 glow-blur-violet pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className={`text-xs font-bold tracking-widest font-display uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            02 / TECH MATRIX
          </span>
          <h2 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Technical Expertise
          </h2>
          <div className="h-1 w-[60px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <Card 
              key={catIdx}
              delay={catIdx * 0.1}
              hoverScale={false}
              className="h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 border-b border-indigo-500/10 pb-5 mb-6 text-left">
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/5' : 'bg-indigo-50/50 border-indigo-50 shadow-sm'
                }`}>
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className={`font-display font-bold text-lg leading-none ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {category.title}
                  </h3>
                  <span className={`text-[10px] font-semibold tracking-wider font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    STACK_INDEX_0{catIdx + 1}
                  </span>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-5 text-left">
                {category.skills.map((skill, skIdx) => (
                  <div key={skIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{skill.name}</span>
                      <span className="text-indigo-500 tracking-tight font-mono">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className={`h-2 w-full rounded-full overflow-hidden ${
                      isDark ? 'bg-white/5' : 'bg-slate-200/50'
                    }`}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skIdx * 0.05 + 0.2, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          catIdx === 0 
                            ? 'from-indigo-600 to-indigo-400' 
                            : catIdx === 1 
                            ? 'from-purple-600 to-purple-400' 
                            : 'from-emerald-600 to-emerald-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
