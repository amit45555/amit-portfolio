import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background styling trigger
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/Show trigger on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrolled 
              ? isDark 
                ? 'glass-nav-dark py-3 shadow-lg shadow-black/10' 
                : 'glass-nav-light py-3 shadow-sm'
              : 'bg-transparent py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="font-display font-bold text-xl tracking-tight flex items-center gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 font-extrabold">&lt;</span>
              <span className={isDark ? 'text-white' : 'text-slate-900'}>{personalInfo.name.split(' ')[0]}</span>
              <span className="text-indigo-500 font-extrabold">/&gt;</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-indigo-500 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full border transition-colors ${
                  isDark 
                    ? 'border-white/10 hover:bg-white/5 text-yellow-400' 
                    : 'border-slate-200 hover:bg-slate-100 text-indigo-600'
                }`}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full border ${
                  isDark ? 'border-white/10 text-yellow-400' : 'border-slate-200 text-indigo-600'
                }`}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg border ${
                  isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-950'
                }`}
                aria-label="Open menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className={`md:hidden absolute top-full left-0 right-0 border-t ${
                  isDark 
                    ? 'glass-card-dark border-white/5' 
                    : 'glass-card-light border-slate-200/50'
                } shadow-2xl`}
              >
                <div className="px-6 py-6 flex flex-col gap-5">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold tracking-wide transition-colors ${
                        isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-indigo-600'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
