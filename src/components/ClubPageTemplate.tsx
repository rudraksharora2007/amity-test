'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export interface Leader {
  id: string;
  role: string;
  name: string;
  message?: string;
}

export interface Activity {
  title: string;
  date: string;
  desc: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface ClubPageData {
  name: string;
  tagline: string;
  instagramUrl: string;
  applyLabel: string;
  about: { headline: string; body1: string; body2: string; stats: { label: string; value: string }[] };
  activities: { past: Activity[]; upcoming: Activity[]; extra: Activity[] };
  leadership: Leader[];
  faqs: Faq[];
  hero: React.ReactNode;
}

interface Props {
  data: ClubPageData;
}

const ClubPageTemplate = ({ data }: Props) => {
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO — provided by each club */}
      {data.hero}

      {/* ABOUT */}
      <section className="py-32 bg-surface border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">About the Club</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="font-serif text-5xl text-primary tracking-tight leading-tight mb-8"
                dangerouslySetInnerHTML={{ __html: data.about.headline }} />
              <p className="font-sans text-base text-primary/70 leading-[1.9] mb-8">{data.about.body1}</p>
              <p className="font-sans text-base text-primary/70 leading-[1.9]">{data.about.body2}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {data.about.stats.map((stat, i) => (
                <div key={i} className="border border-rule p-10 bg-white group hover:border-accent transition-colors">
                  <span className="font-serif text-5xl text-accent block mb-3">{stat.value}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-primary/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-32 bg-white border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Activity Log</span>
          </div>
          <h2 className="font-serif text-5xl text-primary tracking-tight mb-16">What We Do</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-8 pb-4 border-b border-rule">Past Activities</h3>
              {data.activities.past.map((event, i) => (
                <div key={i} className="py-8 border-b border-rule group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">{event.title}</h4>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-primary/30 flex-shrink-0 ml-4">{event.date}</span>
                  </div>
                  <p className="font-sans text-sm text-primary/60 leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-8 pb-4 border-b border-accent">Upcoming Activities</h3>
              {data.activities.upcoming.map((event, i) => (
                <div key={i} className="py-8 border-b border-rule group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">{event.title}</h4>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-accent flex-shrink-0 ml-4 font-bold">{event.date}</span>
                  </div>
                  <p className="font-sans text-sm text-primary/60 leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {galleryExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 pt-4">
                  {data.activities.extra.map((event, i) => (
                    <div key={i} className="border border-rule p-8 group hover:border-accent transition-colors">
                      <h4 className="font-serif text-xl text-primary group-hover:text-accent transition-colors mb-2">{event.title}</h4>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-primary/30 block mb-4">{event.date}</span>
                      <p className="font-sans text-sm text-primary/60 leading-relaxed">{event.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setGalleryExpanded(!galleryExpanded)}
            className="flex items-center space-x-3 font-sans text-xs uppercase tracking-widest text-primary/50 hover:text-accent transition-colors font-bold"
          >
            {galleryExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            <span>{galleryExpanded ? "Collapse Event Log" : "View Full Event Archive"}</span>
          </button>
        </div>
      </section>

      {/* EVENT GALLERY */}
      <section className="py-32 bg-primary border-b border-white/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between mb-20">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-12 h-[2px] bg-accent" />
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Visual Archive</span>
              </div>
              <h2 className="font-serif text-5xl text-white tracking-tight">Event <span className="italic text-white/30">Gallery.</span></h2>
            </div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 hidden md:block">Captured Moments</span>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[720px]">

            {/* Cell 1 — Large left hero */}
            <div className="col-span-12 md:col-span-5 row-span-2 relative group overflow-hidden bg-white/5 border border-white/10 hover:border-accent transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
              <div className="w-full h-full bg-primary/30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12px)' }} />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="font-serif text-6xl text-white/10 block">01</span>
                <h3 className="font-serif text-2xl text-white mt-2">Annual Fest Opening</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-accent mt-2">2024</p>
              </div>
            </div>

            {/* Cell 2 — Top middle tall */}
            <div className="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden bg-white/5 border border-white/10 hover:border-accent transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-transparent z-10" />
              <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)' }} />
              <div className="absolute top-0 left-0 p-6 z-20 flex items-start justify-between w-full">
                <span className="font-serif text-4xl text-white/10">02</span>
                <span className="font-sans text-[8px] uppercase tracking-widest text-white/30">Workshop</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="font-serif text-lg text-white">Technical Workshop</h3>
              </div>
            </div>

            {/* Cell 3 — Top right narrow */}
            <div className="col-span-12 md:col-span-3 row-span-1 relative group overflow-hidden bg-accent/10 border border-accent/20 hover:border-accent transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent z-10" />
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,193,7,0.1) 0%, transparent 60%)' }} />
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                <span className="font-serif text-4xl text-accent/20">03</span>
                <div>
                  <h3 className="font-serif text-lg text-white">Hackathon Night</h3>
                  <p className="font-sans text-[8px] uppercase tracking-widest text-accent mt-1">48 Hours</p>
                </div>
              </div>
            </div>

            {/* Cell 4 — Bottom middle wide */}
            <div className="col-span-12 md:col-span-7 row-span-1 relative group overflow-hidden bg-white/5 border border-white/10 hover:border-accent transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent z-10" />
              <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="absolute inset-0 flex items-end p-8 z-20">
                <div className="flex items-end justify-between w-full">
                  <div>
                    <span className="font-serif text-5xl text-white/10 block">04</span>
                    <h3 className="font-serif text-xl text-white mt-1">Guest Speaker Series</h3>
                  </div>
                  <span className="font-sans text-[8px] uppercase tracking-widest text-white/30">Industry Connect</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-32 bg-surface border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">The Team</span>
          </div>
          <h2 className="font-serif text-5xl text-primary tracking-tight mb-4">Council &amp; Leadership</h2>
          <div className="w-full h-px bg-rule mb-16" />

          {/* Faculty + President — full width with message */}
          <div className="space-y-0 mb-16">
            {data.leadership.filter(l => l.message).map((leader) => (
              <div key={leader.id} className="py-12 border-b border-rule grid grid-cols-1 md:grid-cols-12 gap-12 items-start group">
                <div className="md:col-span-3">
                  <div className="aspect-[3/4] bg-gray-200 border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-xs uppercase tracking-widest">Portrait</div>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-3">{leader.role}</span>
                  <h3 className="font-serif text-3xl text-primary mb-6">{leader.name}</h3>
                  <blockquote className="font-serif text-xl text-primary/60 italic leading-relaxed border-l-4 border-accent pl-6 mb-8">
                    {leader.message}
                  </blockquote>

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

          {/* VPs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {data.leadership.filter(l => !l.message).slice(0, 2).map((leader) => (
              <div key={leader.id} className="flex items-center space-x-8 group">
                <div className="w-32 md:w-40 aspect-[3/4] bg-gray-200 border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-[10px] uppercase tracking-widest">Portrait</div>
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-3">{leader.role}</span>
                  <h3 className="font-serif text-3xl text-primary leading-tight mb-6">{leader.name}</h3>
                  
                  {/* Social Icons */}
                  <div className="flex items-center space-x-4">
                    <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mem Sec & Treasurer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {data.leadership.filter(l => !l.message).slice(2).map((leader) => (
              <div key={leader.id} className="flex items-center space-x-8 group">
                <div className="w-32 md:w-40 aspect-[3/4] bg-gray-200 border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-[10px] uppercase tracking-widest">Portrait</div>
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-3">{leader.role}</span>
                  <h3 className="font-serif text-3xl text-primary leading-tight mb-6">{leader.name}</h3>
                  
                  {/* Social Icons */}
                  <div className="flex items-center space-x-4">
                    <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-primary/30 hover:text-accent transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Common Questions</span>
          </div>
          <h2 className="font-serif text-5xl text-primary tracking-tight mb-4">F.A.Q</h2>
          <div className="w-full h-px bg-rule mb-16" />

          <div className="max-w-4xl">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border-b border-rule">
                <button
                  className="w-full flex justify-between items-center py-8 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif text-xl text-primary group-hover:text-accent transition-colors pr-8">{faq.q}</span>
                  <span className="text-accent font-bold font-sans text-xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base text-primary/60 leading-[1.8] pb-8 pl-6 border-l-2 border-accent">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ClubPageTemplate;
