import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Sparkles, X, ChevronRight } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Card } from '../components/Card';

export const Projects = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Derive categories
  const categories = ["All", ...new Set(projectsList.map(p => p.category))];

  const filteredProjects = filter === "All" 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative px-6">
      
      {/* Background accents */}
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 glow-blur-indigo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <span className={`text-xs font-bold tracking-widest font-display uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            04 / INDUSTRIAL REPERTOIRE
          </span>
          <h2 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured Projects
          </h2>
          <div className="h-1 w-[60px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 ${
                filter === cat
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/10'
                  : isDark
                  ? 'border-white/5 hover:border-white/15 bg-white/5 text-slate-300 hover:text-white'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card
                  delay={0}
                  hoverScale={true}
                  onClick={() => setSelectedProject(project)}
                  className="h-full group"
                >
                  <div className="flex flex-col h-full justify-between gap-6 text-left">
                    
                    {/* Metadata Header */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className={`text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                          isDark 
                            ? 'bg-white/5 border-white/10 text-slate-300' 
                            : 'bg-indigo-50/50 border-indigo-100 text-indigo-700'
                        }`}>
                          {project.category}
                        </span>
                        
                        <div className={`p-1.5 rounded-lg border transition-all ${
                          isDark 
                            ? 'border-white/10 text-slate-400 group-hover:text-white group-hover:bg-white/5' 
                            : 'border-slate-200 text-slate-500 group-hover:text-indigo-600 group-hover:bg-slate-50'
                        }`}>
                          <ArrowUpRight size={16} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className={`font-display font-extrabold text-xl group-hover:text-indigo-400 transition-colors ${
                          isDark ? 'text-white' : 'text-slate-800'
                        }`}>
                          {project.title}
                        </h3>
                        {project.client && (
                          <div className={`text-[10px] font-bold uppercase tracking-wider ${
                            isDark ? 'text-indigo-400' : 'text-indigo-600'
                          }`}>
                            Client: {project.client}
                          </div>
                        )}
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Stats Highlight Bar */}
                    <div className={`grid grid-cols-3 gap-2 p-3.5 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50/70 border-slate-200/50 shadow-sm'
                    }`}>
                      {Object.entries(project.stats).map(([label, val], sIdx) => (
                        <div key={sIdx} className="flex flex-col items-center justify-center text-center">
                          <span className={`text-[10px] sm:text-xs font-extrabold font-display leading-tight ${
                            isDark ? 'text-white' : 'text-slate-800'
                          }`}>{val}</span>
                          <span className={`text-[8px] font-bold tracking-wide uppercase mt-0.5 ${
                            isDark ? 'text-slate-500' : 'text-slate-400'
                          }`}>{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.slice(0, 4).map((techName) => (
                        <span 
                          key={techName}
                          className={`text-[9px] font-bold font-mono tracking-wide px-2 py-0.5 rounded ${
                            isDark 
                              ? 'bg-indigo-500/10 text-indigo-300' 
                              : 'bg-indigo-50 text-indigo-700'
                          }`}
                        >
                          {techName}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className={`text-[9px] font-bold font-mono tracking-wide px-2 py-0.5 rounded ${
                          isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'
                        }`}>
                          +{project.tech.length - 4} More
                        </span>
                      )}
                    </div>

                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Deep Dive Project Detail Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.3 }}
                className={`w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left ${
                  isDark ? 'glass-card-dark border-white/10' : 'glass-card-light border-slate-300'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Title Bar */}
                <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-indigo-500/10 shrink-0">
                  <div>
                    <h3 className={`font-display font-extrabold text-xl sm:text-2xl ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      {selectedProject.title}
                    </h3>
                    <span className="text-xs text-indigo-500 font-bold uppercase tracking-wider">
                      {selectedProject.category} {selectedProject.client ? `// Client: ${selectedProject.client}` : ""}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className={`p-2 rounded-xl border transition-colors ${
                      isDark 
                        ? 'border-white/10 hover:border-white/20 text-slate-400 hover:text-white bg-white/5' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-800 bg-slate-50'
                    }`}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal Content Scroll Area */}
                <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6">
                  
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      <Layers size={13} />
                      <span>Systems Architecture Overview</span>
                    </h4>
                    <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  {/* Core Highlight Features */}
                  <div className="space-y-3">
                    <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      <Sparkles size={13} />
                      <span>Key Integrated Features</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {selectedProject.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-2 items-start">
                          <ChevronRight size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs & Performance telemetry */}
                  <div className="space-y-3">
                    <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      <Cpu size={13} />
                      <span>Verification & Performance telemetry</span>
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(selectedProject.stats).map(([label, val], sIdx) => (
                        <div key={sIdx} className={`p-3 rounded-xl border text-center ${
                          isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200/50'
                        }`}>
                          <span className={`block font-display font-extrabold text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-800'}`}>
                            {val}
                          </span>
                          <span className={`block text-[8px] font-bold uppercase mt-1 tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* All Tech Badges */}
                  <div className="space-y-2 pt-2">
                    <h4 className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      Fully Integrated Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((techName) => (
                        <span 
                          key={techName}
                          className={`text-xs font-semibold font-mono tracking-wide px-3 py-1 rounded-lg border ${
                            isDark 
                              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' 
                              : 'bg-indigo-50 border-indigo-100 text-indigo-700 shadow-sm'
                          }`}
                        >
                          {techName}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
