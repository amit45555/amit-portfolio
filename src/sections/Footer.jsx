import React from 'react';
import { Heart } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
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
    width="18"
    height="18"
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
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-12 border-t px-6 transition-colors duration-300 ${
      isDark ? 'bg-dark-bg/60 border-white/5' : 'bg-slate-50 border-slate-200/60'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left copyright and credits */}
        <div className="text-center md:text-left space-y-1.5">
          <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            &copy; {new Date().getFullYear()} Amit Nagpure. All rights reserved.
          </p>
          <p className={`text-[10px] font-medium flex items-center justify-center md:justify-start gap-1.5 ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          }`}>
            <span>Engineered with React, Tailwind, and Framer Motion</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
          </p>
        </div>

        {/* Right Social and details */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.linkedinUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-indigo-600'}`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={personalInfo.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-indigo-600'}`}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <span className={`text-[9px] font-bold font-mono tracking-wider border rounded-md px-2 py-1 uppercase ${
            isDark 
              ? 'border-white/10 text-slate-500 bg-white/5' 
              : 'border-slate-200 text-slate-400 bg-slate-50 shadow-xs'
          }`}>
            Deployment: IIS + PM2
          </span>
        </div>

      </div>
    </footer>
  );
};
