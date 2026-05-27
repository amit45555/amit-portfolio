import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Terminal } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { personalInfo, stats } from '../data/portfolioData';
import { Counter } from '../components/Counter';
import { useTheme } from '../context/ThemeContext';

export const Hero = () => {
  const { isDark } = useTheme();
  
  // Custom typing animation state
  const roles = ["MERN Stack Developer", "Frontend Engineer", "Industrial IoT Developer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(45);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(110);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-6">
      
      {/* Background Radial Glow Accents */}
      <div className="absolute top-[20%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-indigo-600/20 to-purple-600/0 glow-blur-indigo pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-violet-600/20 to-pink-600/0 glow-blur-violet pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Copy Panel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 text-left"
        >
          {/* Welcome Tag */}
          <motion.div 
            variants={itemVariants} 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border self-start text-xs font-semibold tracking-wider font-display ${
              isDark 
                ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                : 'bg-indigo-500/5 border-indigo-500/15 text-indigo-600'
            }`}
          >
            <Terminal size={14} />
            <span>WELCOME TO PORTFOLIO v3.0</span>
          </motion.div>

          {/* Name & Typing Header */}
          <div className="space-y-3">
            <motion.h1 
              variants={itemVariants}
              className={`text-4xl sm:text-6xl font-display font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Amit Nagpure</span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className={`text-xl sm:text-3xl font-display font-semibold tracking-wide h-[40px] flex items-center ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              <span>I'm a&nbsp;</span>
              <span className="typing-caret text-indigo-500 font-bold">{text}</span>
            </motion.h2>
          </div>

          {/* Summary / Tagline */}
          <motion.p 
            variants={itemVariants}
            className={`text-base sm:text-lg max-w-xl font-sans leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {personalInfo.summary}
          </motion.p>

          {/* Action CTAs & Resume Download */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a 
              href="#projects" 
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/10 hover:shadow-indigo-600/25 flex items-center gap-2 group transition-all"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className={`px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 ${
                isDark 
                  ? 'border-white/10 hover:border-indigo-500/50 hover:bg-white/5 text-slate-200' 
                  : 'border-slate-200 hover:border-indigo-500/40 hover:bg-slate-50 text-slate-700'
              }`}
            >
              Contact Me
            </a>

            <a 
              href={personalInfo.resumeUrl}
              download="Amit_Nagpure_Resume.pdf"
              className={`p-3 rounded-xl border transition-all flex items-center justify-center group ${
                isDark 
                  ? 'border-white/10 hover:border-indigo-500/50 hover:bg-white/5 text-slate-300' 
                  : 'border-slate-200 hover:border-indigo-500/40 hover:bg-slate-50 text-slate-600'
              }`}
              title="Download Resume"
            >
              <FileText size={18} className="group-hover:scale-105 transition-transform" />
              <span className="ml-2 text-sm font-semibold pr-1">Resume CV</span>
            </a>
          </motion.div>

          {/* Social Icons Link Panel */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5 mt-3"
          >
            <a 
              href={personalInfo.linkedinUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-indigo-600'}`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={personalInfo.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-indigo-600'}`}
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Interactive Showcase Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Main Visual: Outer Floating Glass Panel with Stats */}
          <div className={`relative w-[280px] sm:w-[320px] h-[340px] sm:h-[400px] rounded-3xl p-6 flex flex-col justify-between border select-none transition-all duration-300 ${
            isDark 
              ? 'glass-card-dark shadow-2xl border-white/10' 
              : 'glass-card-light shadow-xl border-slate-200/60'
          } animate-float`}>
            
            {/* Design accents */}
            <div className="flex items-center justify-between border-b border-indigo-500/10 pb-4">
              <span className={`text-[10px] font-bold font-display tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>AN-v3.0 // ANALYTICS</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Core Stats values */}
            <div className="space-y-6 my-auto">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5 border-l-2 border-indigo-500/30 pl-3">
                  <div className={`text-2xl sm:text-3xl font-display font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className={`text-[10px] sm:text-xs font-semibold tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative integration details */}
            <div className={`pt-4 border-t border-indigo-500/10 text-[9px] font-mono leading-none ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              SYSTEM INTEGRATION: OPCUA & WEB_SOCKET_ACTIVE
            </div>
          </div>

          {/* Secondary abstract floating nodes */}
          
          

        </motion.div>

      </div>
    </section>
  );
};
