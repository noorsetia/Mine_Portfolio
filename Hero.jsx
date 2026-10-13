import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';
import myProfileImg from '../assets/profile.jpg';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-20 pb-10 px-6 overflow-hidden transition-colors duration-300">

      {/* Background Ambient Glow - parallax effect */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-400/10 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}
      ></div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-8 lg:gap-6 items-center">

        {/* LEFT COLUMN - TEXT & CTAS */}
        <div className="md:col-span-1 lg:col-span-7 flex flex-col items-start relative z-10">

          <Reveal direction="up" delay={100}>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-4 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              {personalInfo.badge}
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 leading-[1.1]">
              {personalInfo.name}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-1.5">
              {personalInfo.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide">
              {personalInfo.stack}
            </p>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-lg">
              {personalInfo.description}
            </p>
          </Reveal>

          <Reveal direction="up" delay={500}>
            {/* Primary Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95 overflow-hidden relative"
              >
                <span className="absolute inset-0 w-full h-full bg-indigo-50 dark:bg-indigo-500/10 scale-0 group-hover:scale-100 transition-transform origin-center rounded-xl ease-out duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Contact Me
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>

              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95 overflow-hidden relative"
                >
                  <span className="absolute inset-0 w-full h-full bg-indigo-50 dark:bg-indigo-500/10 scale-0 group-hover:scale-100 transition-transform origin-center rounded-xl ease-out duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    Resume
                    <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </span>
                </a>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: 'GitHub', url: personalInfo.socialLinks.github, icon: <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/> },
                { name: 'LinkedIn', url: personalInfo.socialLinks.linkedin, icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
                { name: 'Email', url: personalInfo.socialLinks.email, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path>, isStroke: true }
              ].map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? "_blank" : undefined}
                  rel={link.name !== 'Email' ? "noreferrer" : undefined}
                  aria-label={link.name}
                  className="group flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md active:scale-95"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill={link.isStroke ? "none" : "currentColor"} stroke={link.isStroke ? "currentColor" : "none"} viewBox="0 0 24 24">
                    {link.icon}
                  </svg>
                  <span className="text-sm font-medium hidden sm:inline">{link.name}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN - HERO IMAGE */}
        <Reveal direction="right" delay={600} className="md:col-span-1 lg:col-span-5 flex justify-center md:justify-end relative mt-8 md:mt-0">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-400/20 dark:bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none -z-10 transition-transform duration-700 ease-out"
            style={{ transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))` }}
          ></div>

          <div 
            className="relative group w-60 h-60 sm:w-[17rem] sm:h-[17rem] md:w-[19rem] md:h-[19rem] lg:w-[20rem] lg:h-[20rem] transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-2 transition-all duration-500 z-0 opacity-90"></div>
            <img
              src={myProfileImg}
              alt={personalInfo.name}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10 grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white/80 dark:border-slate-700 shadow-xl"
            />
          </div>
        </Reveal>

      </div>

      {/* Mouse Scroll Indicator */}
      <Reveal direction="up" delay={800} className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1 group-hover:border-indigo-500 transition-colors">
            <div className="w-1.5 h-2 bg-current rounded-full animate-bounce mt-0.5 group-hover:bg-indigo-500 transition-colors"></div>
          </div>
        </a>
      </Reveal>

    </section>
  );
}
