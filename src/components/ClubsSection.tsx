'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const ClubsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const divisions = [
    {
      id: '01',
      name: 'Cascade',
      subtitle: 'Full-Stack Engineering',
      link: '/clubs/cascade',
      stats: [
        { value: '4+', label: 'Active Products' },
        { value: '80K+', label: 'Lines of Code' },
        { value: 'React / Node', label: 'Primary Stack' }
      ]
    },
    {
      id: '02',
      name: 'Programming',
      subtitle: 'Algorithmic Logic',
      link: '/clubs/programming',
      stats: [
        { value: '24', label: 'Internal Contests' },
        { value: '1,200+', label: 'Problems Solved' },
        { value: 'C++ / Java', label: 'Primary Stack' }
      ]
    },
    {
      id: '03',
      name: 'Networking',
      subtitle: 'Infrastructure & Security',
      link: '/clubs/networking',
      stats: [
        { value: '3', label: 'Active Subnets' },
        { value: '100%', label: 'Uptime Focus' },
        { value: 'Cisco / AWS', label: 'Primary Stack' }
      ]
    }
  ];

  return (
    <section id="divisions" className="relative border-b border-rule bg-white z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-32">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div className="flex items-center space-x-4">
            <span className="w-4 h-4 bg-accent flex-shrink-0" />
            <h2 className="font-serif text-4xl text-primary tracking-tight m-0">Core Technical Divisions</h2>
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
                className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12"
              >
                {divisions.map((div, index) => (
                  <div 
                    key={index}
                    onClick={() => setIsExpanded(true)}
                    className="border border-rule hover:border-primary/50 bg-surface hover:bg-white transition-all cursor-pointer relative group h-[440px] flex flex-col overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-20" />
                    
                    {/* Top 40% Image Container */}
                    <div className="w-full h-[40%] bg-gray-200 relative grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-500 flex-shrink-0 border-b border-rule">
                      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                      <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-xs uppercase tracking-widest">Division Image</div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <span className="font-serif text-4xl text-accent mb-4 block opacity-50">{div.id}</span>
                      <h3 className="font-serif text-2xl text-primary mb-2">{div.name}</h3>
                      <span className="font-sans text-[10px] tracking-widest uppercase text-primary/50 block mb-6">{div.subtitle}</span>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-primary group-hover:text-accent transition-colors">Expand to Review &rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {divisions.map((div, index) => (
                  <div key={index} className="group border-b border-rule hover:bg-surface transition-colors relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Link href={div.link} className="grid grid-cols-12 gap-8 py-12 px-6 items-center">
                      <div className="col-span-12 md:col-span-1">
                        <span className="font-serif text-3xl text-accent">{div.id}</span>
                      </div>
                      <div className="col-span-12 md:col-span-3">
                        <h3 className="font-serif text-3xl text-primary">{div.name}</h3>
                        <span className="font-sans text-xs tracking-widest uppercase text-primary/50 mt-1 block">{div.subtitle}</span>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <div className="grid grid-cols-3 gap-4 font-sans text-xs text-primary/80">
                          <div className="flex flex-col">
                            <span className="font-bold text-primary text-sm">{div.stats[0].value}</span>
                            <span className="uppercase tracking-widest text-[9px] text-primary/50">{div.stats[0].label}</span>
                          </div>
                          <div className="flex flex-col border-l border-rule/10 pl-4">
                            <span className="font-bold text-primary text-sm">{div.stats[1].value}</span>
                            <span className="uppercase tracking-widest text-[9px] text-primary/50">{div.stats[1].label}</span>
                          </div>
                          <div className="flex flex-col border-l border-rule/10 pl-4">
                            <span className="font-bold text-primary text-sm">{div.stats[2].value}</span>
                            <span className="uppercase tracking-widest text-[9px] text-primary/50">{div.stats[2].label}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-2 text-right">
                        <span className="font-sans text-xs uppercase tracking-widest text-primary border-b border-transparent group-hover:border-primary transition-colors pb-1">Review Division &rarr;</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
