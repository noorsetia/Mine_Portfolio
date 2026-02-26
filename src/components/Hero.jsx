import React from 'react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-400/10 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* LEFT COLUMN - TEXT & CTAS */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          <Reveal direction="up" delay={100}>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse"></span>
              Available for opportunities
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={200}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Noor Setia
            </h1>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6">
              Frontend Developer <span className="text-indigo-500 dark:text-indigo-500">|</span> MERN Stack
            </h2>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Building scalable web applications with clean architecture and performance at the core. Focused on delivering production-ready solutions that drive real business impact.
            </p>
          </Reveal>
          
          <Reveal direction="up" delay={500}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1"
              >
                View Projects 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              
              <a
                href="#contact"
                className="px-6 py-3.5 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 text-slate-700 dark:text-slate-300 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons with Real Links */}
            <div className="flex items-center gap-4">
              {/* GITHUB LINK */}
              <a 
                href="https://github.com/noorsetia/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub" 
                className="p-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>

              {/* LINKEDIN LINK */}
              <a 
                href="https://www.linkedin.com/in/noorsetia/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn" 
                className="p-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>

              {/* EMAIL LINK */}
              <a 
                href="mailto:noorsetia24@navgurukul.org" 
                aria-label="Email" 
                className="p-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN - HERO IMAGE */}
        <Reveal direction="right" delay={600} className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-400/30 dark:bg-indigo-600/30 blur-[80px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="relative group w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-indigo-500 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 z-0"></div>
            <img 
              src="profile.webp" 
              alt="Noor Setia" 
              className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10 grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white dark:border-slate-800 shadow-xl"
            />
          </div>
        </Reveal>

      </div>

      {/* Mouse Scroll Indicator */}
      <Reveal direction="up" delay={800} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2 bg-current rounded-full animate-bounce mt-0.5"></div>
          </div>
        </a>
      </Reveal>

    </section>
  );
}