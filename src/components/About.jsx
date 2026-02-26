import React from 'react';
import Reveal from './Reveal';

export default function About() {
  const principles =[
    {
      title: "Clean Architecture",
      description: "Maintainable, testable code that scales with your business needs.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    },
    {
      title: "Performance",
      description: "Optimized for speed, efficiency, and seamless user experience.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    },
    {
      title: "Scalability",
      description: "Built to handle growth from day one using modern MERN stack practices.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
    },
    {
      title: "Maintainability",
      description: "Code that your team can confidently understand, extend, and maintain.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-[#0b1121] transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 mt-6 rounded-full"></div>
          </div>
        </Reveal>
        
        {/* TOP ROW: Text vs Code Box */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-12">
            <Reveal direction="up" delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who I Am</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  I'm a web developer specializing in the MERN stack with a passion for building production-grade applications. With a focus on writing clean, maintainable code, I translate complex requirements into elegant technical solutions.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What I Build</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  I create scalable web applications that prioritize performance, security, and user experience. From RESTful APIs to responsive frontends, I handle the full development lifecycle with attention to detail and engineering best practices.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How I Think</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  My approach is engineering-driven: I start with requirements, architect for scale, and iterate based on data. I believe in continuous improvement, thorough testing, and building systems that teams can confidently maintain and extend.
                </p>
              </div>
            </Reveal>
          </div>
          
          {/* Right Column: GLASSMORPHISM CODE BOX */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <Reveal direction="right" delay={500} className="w-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>
              
              <div className="w-full rounded-2xl bg-indigo-50/40 dark:bg-[#131127]/60 border border-indigo-200/60 dark:border-indigo-500/20 backdrop-blur-md p-8 sm:p-10 font-mono text-sm sm:text-base leading-loose shadow-2xl transition-all duration-500 hover:shadow-indigo-500/20 hover:-translate-y-2">
                <div className="text-slate-700 dark:text-slate-300 mb-2">
                  <span className="text-blue-500 dark:text-blue-400 font-medium">const</span> developer = {'{'}
                </div>
                <div className="pl-8 text-slate-500 dark:text-slate-400">
                  name: <span className="text-indigo-500 dark:text-indigo-400 font-medium">'Noor Setia'</span>,
                </div>
                <div className="pl-8 text-slate-500 dark:text-slate-400">
                  role: <span className="text-indigo-500 dark:text-indigo-400 font-medium">'Frontend / MERN'</span>,
                </div>
                <div className="pl-8 text-slate-500 dark:text-slate-400">
                  focus: <span className="text-indigo-500 dark:text-indigo-400 font-medium">'Production'</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 mt-2">
                  {'}'}
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* BOTTOM ROW: Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <Reveal key={index} direction="up" delay={200 + (index * 150)}>
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 group h-full">
                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}