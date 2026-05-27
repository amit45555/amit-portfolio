import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Card } from '../components/Card';

export const Contact = () => {
  const { isDark } = useTheme(); // Safeguard theme state
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: "Please fill out all required fields." });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      /*
        EmailJS Integration Hook:
        To activate EmailJS, create an account on https://www.emailjs.com,
        retrieve your Service ID, Template ID, and Public Key, and substitute
        the placeholders below:
      */
      const serviceId = "service_f0mij8r"; 
      const templateId = "template_hx9j40k";
      const publicKey = "DIYfwWXLK3dvEy7ns";

      // If keys are placeholder, mock success for demonstration, but report setting needs
      if (serviceId.startsWith("YOUR_")) {
        setTimeout(() => {
          setStatus({
            submitting: false,
            success: true,
            error: null
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);
        return;
      }

      const res = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (res.status === 200) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message. Please try again later.");
      }

    } catch (err) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: err.message || "An unexpected error occurred. Please try again." 
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative px-6">
      
      {/* Background accents */}
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 glow-blur-indigo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className={`text-xs font-bold tracking-widest font-display uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            07 / ENGAGEMENT
          </span>
          <h2 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get In Touch
          </h2>
          <div className="h-1 w-[60px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Glass Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <Card hoverScale={false} className="flex-1 flex flex-col justify-between">
              
              <div className="space-y-6 text-left">
                <h3 className={`font-display font-extrabold text-xl ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  Recruitment & Collaboration
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  I am actively seeking Frontend, Full-Stack MERN, or Industrial IoT Developer opportunities. Let's build robust systems together.
                </p>
              </div>

              {/* Info Matrix links */}
              <div className="space-y-6 my-8 text-left">
                {/* Email link */}
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`p-3 rounded-xl border transition-all ${
                    isDark 
                      ? 'bg-white/5 border-white/5 text-indigo-400 group-hover:border-indigo-500/30' 
                      : 'bg-indigo-50 border-indigo-50 text-indigo-600 group-hover:border-indigo-500/20 shadow-sm'
                  }`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className={`block text-[10px] font-bold text-slate-500 uppercase tracking-wider`}>Email</span>
                    <span className={`block text-xs sm:text-sm font-semibold transition-colors group-hover:text-indigo-500 ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}>{personalInfo.email}</span>
                  </div>
                </a>

                {/* Phone link */}
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`p-3 rounded-xl border transition-all ${
                    isDark 
                      ? 'bg-white/5 border-white/5 text-emerald-400 group-hover:border-emerald-500/30' 
                      : 'bg-emerald-50 border-emerald-50 text-emerald-600 group-hover:border-emerald-500/20 shadow-sm'
                  }`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className={`block text-[10px] font-bold text-slate-500 uppercase tracking-wider`}>Phone</span>
                    <span className={`block text-xs sm:text-sm font-semibold transition-colors group-hover:text-emerald-500 ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}>{personalInfo.phone}</span>
                  </div>
                </a>

                {/* Location link */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl border ${
                    isDark 
                      ? 'bg-white/5 border-white/5 text-purple-400' 
                      : 'bg-purple-50 border-purple-50/50 text-purple-600 shadow-sm'
                  }`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className={`block text-[10px] font-bold text-slate-500 uppercase tracking-wider`}>Location</span>
                    <span className={`block text-xs sm:text-sm font-semibold ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Digital status readout */}
              <div className={`pt-4 border-t border-indigo-500/10 text-left font-mono text-[9px] ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}>
                COMMUNICATION_LINK: SECURE_TLS_ACTIVE
              </div>

            </Card>
          </div>

          {/* Right Block: Message Form */}
          <div className="lg:col-span-7">
            <Card hoverScale={false}>
              
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-6 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl border transition-all outline-none text-sm font-semibold ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/10' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500/40 focus:bg-white shadow-xs'
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johndoe@example.com"
                      className={`w-full px-4 py-3 rounded-xl border transition-all outline-none text-sm font-semibold ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/10' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500/40 focus:bg-white shadow-xs'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none text-sm font-semibold ${
                      isDark 
                        ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/10' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500/40 focus:bg-white shadow-xs'
                    }`}
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe your project, timeline, or job description here..."
                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none text-sm font-semibold resize-none ${
                      isDark 
                        ? 'bg-white/5 border-white/10 text-white focus:border-indigo-500/50 focus:bg-white/10' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500/40 focus:bg-white shadow-xs'
                    }`}
                  />
                </div>

                {/* Feedback overlays */}
                <AnimatePresence mode="wait">
                  {status.error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-start gap-2.5 text-xs font-semibold"
                    >
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{status.error}</span>
                    </motion.div>
                  )}

                  {status.success && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-start gap-2.5 text-xs font-semibold"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:from-indigo-600/50 disabled:to-violet-600/50 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/10"
                >
                  <Send size={14} className={status.submitting ? "animate-pulse" : ""} />
                  <span>{status.submitting ? "Transmitting..." : "Send Message"}</span>
                </button>

              </form>

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
