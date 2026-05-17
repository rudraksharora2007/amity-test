'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from 'framer-motion';

const CommitteePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const departments = [
    { id: "01", name: "Technical Operations", lead: "Alex Rivera", coLeads: ["Jordan Smith", "Sam Chen"], color: "bg-primary" },
    { id: "02", name: "Corporate Relations", lead: "Sarah Jenkins", coLeads: ["Mike Ross"], color: "bg-primary" },
    { id: "03", name: "Marketing & PR", lead: "Emily Blunt", coLeads: ["Chris Evans"], color: "bg-primary" },
    { id: "04", name: "Logistics", lead: "David Gandy", coLeads: ["Bella Hadid", "Gigi V."], color: "bg-primary" },
    { id: "05", name: "R&D", lead: "Tony Stark", coLeads: ["Bruce B."], color: "bg-primary" },
    { id: "06", name: "Finance", lead: "Warren B.", coLeads: ["Elon M."], color: "bg-primary" },
    { id: "07", name: "Digital Media", lead: "Casey N.", coLeads: ["Peter M."], color: "bg-primary" },
    { id: "08", name: "Student Welfare", lead: "Malala Y.", coLeads: ["Greta T."], color: "bg-primary" },
    { id: "09", name: "Creative Design", lead: "Virgil A.", coLeads: ["Dieter R."], color: "bg-primary" },
    { id: "10", name: "Security", lead: "Kevin M.", coLeads: ["Edward S."], color: "bg-primary" },
    { id: "11", name: "Quality Assurance", lead: "Steve J.", coLeads: ["Tim C."], color: "bg-primary" },
  ];

  const coreLeadership = [
    { name: "Prof. (Dr) Rekha Agarwal", role: "Faculty Coordinator", bio: "Directing the strategic vision of AIIT's technical divisions with over two decades of institutional excellence." },
    { name: "Institutional Advisor 01", role: "Strategic Advisor", bio: "Providing industry-aligned guidance for large-scale technical operations." },
    { name: "Institutional Advisor 02", role: "Strategic Advisor", bio: "Ensuring academic rigor and professional standards across all divisions." },
    { name: "Mr. Priyaank Sinha", role: "Student Chief Coordinator", bio: "Overseeing the execution of 11+ departments and ensuring flawless student-led governance." },
    { name: "Mr. Devansh", role: "Student Co-Chief Coordinator", bio: "Co-piloting the committee operations with a focus on technical infrastructure and outreach." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* BOMB HERO SECTION */}
      <section className="relative pt-48 pb-40 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4 mb-10"
          >
            <span className="w-16 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent font-bold">The Student Committee</span>
          </motion.div>

          <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tighter leading-[0.85] mb-12">
            Council of <br />
            <span className="text-accent italic">Architects.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-12 border-t border-white/10">
            <p className="font-sans text-sm md:text-base text-white/50 max-w-xl leading-[1.8]">
              Operational excellence is not an act, but a habit. The AIIT Student Committee enforces rigorous technical governance through a multi-tiered command structure.
            </p>
            <div className="flex space-x-12">
              <div>
                <span className="block font-serif text-4xl text-accent">11</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/40">Departments</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-accent">45+</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/40">Officers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION WITH EXPAND LOGIC */}
      <section className="py-32 bg-surface relative z-20 -mt-10 border-t-4 border-accent">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-end pb-12">
            <div>
              <h2 className="font-serif text-4xl text-primary tracking-tight mb-2">Council Leadership</h2>
              <p className="font-sans text-xs text-primary/40 uppercase tracking-widest">Hierarchy of Command</p>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3 border-2 border-primary text-primary font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all duration-500"
            >
              {isExpanded ? 'View Compact Tree' : 'Expand Biographies'}
            </button>
          </div>
          <div className="w-full h-px bg-rule mb-20" />

          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="compact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                {/* Faculty Coord */}
                <div
                  className="group relative bg-white border border-rule overflow-hidden transition-all duration-700 hover:shadow-2xl w-64 cursor-pointer"
                  onClick={() => setIsExpanded(true)}
                >
                  <div className="absolute top-0 left-0 w-full h-0 bg-accent transition-all duration-500 group-hover:h-2 z-20" />
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                    <div className="w-full h-full flex items-center justify-center text-primary/10 font-serif text-[100px] absolute inset-0 select-none">01</div>
                    <div className="w-full h-full bg-gray-200 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 relative z-0">
                      <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-serif text-sm uppercase tracking-widest">Portrait</div>
                    </div>
                  </div>
                  <div className="p-8 text-left bg-white relative z-20">
                    <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">{coreLeadership[0].role}</span>
                    <h3 className="font-serif text-2xl text-primary leading-tight">{coreLeadership[0].name}</h3>
                    <div className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-700 mt-6" />
                  </div>
                </div>

                <div className="w-px h-16 bg-primary/10 relative my-8" />

                {/* Advisors */}
                <div className="grid grid-cols-2 gap-12 lg:gap-24">
                  {coreLeadership.slice(1, 3).map((leader, i) => (
                    <div
                      key={i}
                      className="group relative bg-white border border-rule overflow-hidden transition-all duration-700 hover:shadow-2xl w-56 cursor-pointer"
                      onClick={() => setIsExpanded(true)}
                    >
                      <div className="absolute top-0 left-0 w-full h-0 bg-accent transition-all duration-500 group-hover:h-2 z-20" />
                      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                        <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                        <div className="w-full h-full flex items-center justify-center text-primary/10 font-serif text-[80px] absolute inset-0 select-none">0{i + 2}</div>
                        <div className="w-full h-full bg-gray-200 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 relative z-0">
                          <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-serif text-xs uppercase tracking-widest">Portrait</div>
                        </div>
                      </div>
                      <div className="p-6 text-left bg-white relative z-20">
                        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">Advisor</span>
                        <h3 className="font-serif text-xl text-primary leading-tight">{leader.name}</h3>
                        <div className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-700 mt-4" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-px h-16 bg-primary/10 relative my-8" />

                {/* Student Leads */}
                <div className="grid grid-cols-2 gap-8 lg:gap-16">
                  {coreLeadership.slice(3, 5).map((leader, i) => (
                    <div
                      key={i}
                      className="group relative bg-white border border-rule overflow-hidden transition-all duration-700 hover:shadow-2xl w-60 cursor-pointer"
                      onClick={() => setIsExpanded(true)}
                    >
                      <div className="absolute top-0 left-0 w-full h-0 bg-accent transition-all duration-500 group-hover:h-2 z-20" />
                      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                        <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                        <div className="w-full h-full flex items-center justify-center text-primary/10 font-serif text-[90px] absolute inset-0 select-none">0{i + 4}</div>
                        <div className="w-full h-full bg-gray-200 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 relative z-0">
                          <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-serif text-xs uppercase tracking-widest">Lead</div>
                        </div>
                      </div>
                      <div className="p-8 text-left bg-white relative z-20">
                        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">{leader.role}</span>
                        <h3 className="font-serif text-2xl text-primary leading-tight">{leader.name}</h3>
                        <div className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-700 mt-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-0"
              >
                {/* Faculty Coordinator - Full Width */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-b border-rule py-16 group">
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="aspect-[3/4] bg-gray-200 border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                      <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-sm uppercase tracking-widest">Portrait</div>
                    </div>
                  </div>
                  <div className="md:col-span-8 lg:col-span-9">
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent font-bold block mb-4">{coreLeadership[0].role}</span>
                    <h3 className="font-serif text-4xl md:text-5xl text-primary mb-6">{coreLeadership[0].name}</h3>
                    <p className="font-sans text-base text-primary/70 leading-relaxed max-w-3xl mb-8">{coreLeadership[0].bio}</p>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-5">
                      <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Advisors - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 border-b border-rule">
                  {coreLeadership.slice(1, 3).map((leader, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start group">
                      <div className="sm:col-span-5 md:col-span-4">
                        <div className="aspect-[3/4] bg-gray-200 border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden">
                          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                          <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-[10px] uppercase tracking-widest">Advisor</div>
                        </div>
                      </div>
                      <div className="sm:col-span-7 md:col-span-8">
                        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-accent font-bold block mb-3">Strategic Advisor</span>
                        <h3 className="font-serif text-2xl text-primary mb-4">{leader.name}</h3>
                        <p className="font-sans text-sm text-primary/70 leading-relaxed mb-6">{leader.bio}</p>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                          <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                          <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Student Leads - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
                  {coreLeadership.slice(3, 5).map((leader, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start group">
                      <div className="sm:col-span-5 md:col-span-4">
                        <div className="aspect-[3/4] bg-gray-200 border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden">
                          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                          <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-[10px] uppercase tracking-widest">Lead</div>
                        </div>
                      </div>
                      <div className="sm:col-span-7 md:col-span-8">
                        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-accent font-bold block mb-3">{leader.role}</span>
                        <h3 className="font-serif text-2xl text-primary mb-4">{leader.name}</h3>
                        <p className="font-sans text-sm text-primary/70 leading-relaxed mb-6">{leader.bio}</p>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                          <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                          <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
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
      </section>

      {/* DEPARTMENT BENTO GRID - BOMB UI */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-6 mb-12">
            <span className="w-12 h-[1px] bg-primary" />
            <h2 className="font-serif text-5xl text-primary tracking-tight m-0">Institutional <span className="italic text-primary/30">Registry.</span></h2>
          </div>
          <div className="w-full h-px bg-rule mb-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 0.99, y: -5 }}
                className="p-10 border border-rule group relative overflow-hidden flex flex-col justify-between h-[480px] transition-all duration-500 hover:bg-primary bg-white hover:shadow-2xl"
              >
                <span className="font-serif text-8xl text-primary/5 absolute -right-4 -top-8 transition-colors group-hover:text-white/10">{dept.id}</span>

                <div className="relative z-10">
                  <h3 className="font-serif text-3xl text-primary group-hover:text-white transition-colors mb-4">{dept.name}</h3>
                  <div className="w-8 h-[2px] bg-accent group-hover:w-16 transition-all duration-500" />
                </div>

                <div className="relative z-10">
                  <div className="mb-10">
                    <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-4">Department Head</span>
                    <p className="font-serif text-2xl text-primary group-hover:text-white transition-colors leading-tight">{dept.lead}</p>
                  </div>

                  <div className="space-y-6">
                    {dept.coLeads.map((cl, i) => (
                      <div key={i} className="border-l-2 border-rule pl-4 group-hover:border-accent transition-colors">
                        <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-primary/40 group-hover:text-white/40 block mb-1">Co - Head</span>
                        <p className="font-sans text-[11px] font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-widest">{cl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-white py-20 relative overflow-hidden border-t border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-8 leading-tight tracking-tight">
            Demand <span className="italic text-accent">Excellence.</span> <br />
            Contact the Council.
          </h2>
          <a
            href="/reach-out"
            className="inline-flex items-center space-x-4 px-10 py-4 bg-primary text-white font-sans text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg"
          >
            <span>Open Direct Inquiry</span>
            <span>&rarr;</span>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CommitteePage;
