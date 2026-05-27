import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ParticleBackground } from './components/ParticleBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { GitHubStats } from './sections/GitHubStats';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const AppContent = () => {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant timing for loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-dark-bg text-white' : 'bg-light-bg text-slate-800'
    }`}>
      
      {/* Loading Loader Animation */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 ${
              isDark ? 'bg-[#070A13]' : 'bg-[#FAFAFC]'
            }`}
          >
            {/* Rotating glowing loader spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500"
            />
            
            {/* Terminal readout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-indigo-500"
            >
              <Terminal size={14} className="animate-pulse" />
              <span>INITIALIZING SYSTEM PORTFOLIO...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Active Canvas Background */}
          <ParticleBackground />

          {/* Interactive Utilities */}
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />

          {/* Sections Assembler */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <GitHubStats />
            <Certifications />
            <Contact />
          </main>

          {/* Footer block */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
