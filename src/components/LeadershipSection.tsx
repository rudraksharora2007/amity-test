'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadershipSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const leaders = [
    {
      name: 'Prof. (Dr) Rekha Agarwal',
      role: 'Director, AIIT',
      description: "Providing strategic oversight to ensure that student initiatives directly complement the institute's academic rigor and industry alignment. The technical divisions act as a direct extension of the institute's commitment to hands-on, high-stakes learning."
    },
    {
      name: 'Prof. (Dr.) Laxmi Ahuja',
      role: 'Chief Coordinator',
      description: "Tasked with the operational integrity of all student divisions. Focuses on maintaining clear accountability, measurable outcomes, and seamless coordination between technical departments to ensure enterprise-grade execution."
    },
    {
      name: 'Mr. Priyaank Sinha',
      role: 'Student Chief Coordinator',
      description: "Responsible for the execution of the committee's mandate on the ground floor. Ensures that every division operates efficiently, fostering an environment where students execute at a professional standard without compromise."
    },
    {
      name: 'Mr. Devansh',
      role: 'Student Co-Chief Coordinator',
      description: "Assists the Chief Coordinator in executing the committee's mandate. Drives operational efficiency and maintains the professional standard across all student divisions."
    }
  ];

  return (
    <section className="relative border-b border-rule bg-surface z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div className="flex items-center space-x-4">
            <span className="w-4 h-4 bg-accent flex-shrink-0" />
            <h2 className="font-serif text-3xl text-primary tracking-tight m-0">Institutional Leadership</h2>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-sans text-xs uppercase tracking-widest text-primary border border-primary/20 px-6 py-2 hover:bg-primary hover:text-white transition-colors self-start sm:self-auto"
          >
            {isExpanded ? 'Collapse' : 'Expand Details'}
          </button>
        </div>

        <div className="border-t-[2px] border-primary overflow-hidden">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="compact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center py-12"
              >
                {/* Director Compact */}
                <div 
                  className="flex flex-col items-center text-center group cursor-pointer relative z-10"
                  onClick={() => setIsExpanded(true)}
                >
                  <div className="w-64 h-80 bg-gray-200 border border-primary/20 relative grayscale group-hover:grayscale-0 transition-all duration-500 rounded-none overflow-hidden mb-6 flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                    <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-sm uppercase tracking-widest">Director</div>
                  </div>
                  <h3 className="font-serif text-3xl text-primary mb-2 transition-colors group-hover:text-accent duration-500">{leaders[0].name}</h3>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent font-bold block mb-4">Director, AIIT</span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-primary/30 border border-primary/10 px-3 py-1">Click to Expand Biography</span>
                </div>

                {/* Vertical Connector 1 */}
                <div className="w-px h-16 bg-primary/20 relative my-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent" />
                </div>

                {/* Chief Compact */}
                <div 
                  className="flex flex-col items-center text-center group cursor-pointer relative z-10"
                  onClick={() => setIsExpanded(true)}
                >
                  <div className="w-64 h-80 bg-gray-200 border border-primary/20 relative grayscale group-hover:grayscale-0 transition-all duration-500 rounded-none overflow-hidden mb-6 flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                    <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-sm uppercase tracking-widest">Chief Coordinator</div>
                  </div>
                  <h3 className="font-serif text-3xl text-primary mb-2 transition-colors group-hover:text-accent duration-500">{leaders[1].name}</h3>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent font-bold block mb-4">Chief Coordinator</span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-primary/30 border border-primary/10 px-3 py-1">Click to Expand Biography</span>
                </div>

                {/* Organizational Tree Connector */}
                <div className="w-full max-w-[800px] flex flex-col items-center mt-4">
                  <div className="w-px h-12 bg-primary/20" />
                  <div className="w-full h-px bg-primary/20 relative">
                    <div className="absolute left-0 top-0 w-px h-12 bg-primary/20" />
                    <div className="absolute right-0 top-0 w-px h-12 bg-primary/20" />
                  </div>
                </div>

                {/* Head | Co-head Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-[800px] pt-12">
                  {leaders.slice(2, 4).map((leader, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center text-center group cursor-pointer relative z-10"
                      onClick={() => setIsExpanded(true)}
                    >
                      <div className="w-64 h-80 bg-gray-200 border border-primary/20 relative grayscale group-hover:grayscale-0 transition-all duration-500 rounded-none overflow-hidden mb-6 flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                        <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-xs uppercase tracking-widest">Portrait</div>
                      </div>
                      <h3 className="font-serif text-2xl text-primary mb-2 group-hover:text-accent transition-colors duration-500">{leader.name}</h3>
                      <span className="font-sans text-[10px] tracking-widest uppercase text-accent font-bold block mb-4">{leader.role}</span>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-primary/30 border border-primary/10 px-3 py-1">Expand Bio</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="py-8"
              >
                {/* Director Row */}
                <div className="py-12 border-b border-rule">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start group">
                    <div className="md:col-span-4 lg:col-span-3">
                      <div className="aspect-[3/4] bg-gray-200 border border-primary/20 relative grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-500 rounded-none overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                        <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-sm uppercase tracking-widest">Portrait</div>
                      </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 pt-2">
                      <h3 className="font-serif text-3xl md:text-4xl text-primary mb-2">{leaders[0].name}</h3>
                      <span className="font-sans text-xs tracking-widest uppercase text-accent font-bold mb-6 block">Director, AIIT</span>
                      <p className="font-sans text-sm md:text-base leading-[1.9] text-primary/80 max-w-3xl mb-8">
                        {leaders[0].description}
                      </p>
                      
                      {/* Social Icons */}
                      <div className="flex items-center space-x-5">
                        <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chief Coordinator Row */}
                <div className="py-12 border-b border-rule">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start group">
                    <div className="md:col-span-4 lg:col-span-3">
                      <div className="aspect-[3/4] bg-gray-200 border border-primary/20 relative grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-500 rounded-none overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                        <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-sm uppercase tracking-widest">Portrait</div>
                      </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 pt-2">
                      <h3 className="font-serif text-3xl md:text-4xl text-primary mb-2">{leaders[1].name}</h3>
                      <span className="font-sans text-xs tracking-widest uppercase text-accent font-bold mb-6 block">Chief Coordinator</span>
                      <p className="font-sans text-sm md:text-base leading-[1.9] text-primary/80 max-w-3xl mb-8">
                        {leaders[1].description}
                      </p>

                      {/* Social Icons */}
                      <div className="flex items-center space-x-5">
                        <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Student Coordinator Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 items-start">
                  {leaders.slice(2, 4).map((leader, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-12 gap-6 group">
                      <div className="sm:col-span-5 md:col-span-4">
                        <div className="aspect-[3/4] bg-gray-200 border border-primary/20 relative grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-500 rounded-none overflow-hidden">
                          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                          <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-xs uppercase tracking-widest">Portrait</div>
                        </div>
                      </div>
                      <div className="sm:col-span-7 md:col-span-8 pt-2">
                        <h3 className="font-serif text-2xl text-primary mb-1">{leader.name}</h3>
                        <span className="font-sans text-[10px] tracking-widest uppercase text-accent font-bold mb-4 block">{leader.role}</span>
                        <p className="font-sans text-sm leading-[1.8] text-primary/80 mb-6">
                          {leader.description}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                          <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
