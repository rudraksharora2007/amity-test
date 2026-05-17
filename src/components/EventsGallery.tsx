'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EventsGallery = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Hackathon 2024',
      category: 'Flagship Event',
      date: 'March 15, 2024',
      className: 'md:col-span-8 md:row-span-2',
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      category: 'Technical Session',
      date: 'February 10, 2024',
      className: 'md:col-span-4 md:row-span-1',
    },
    {
      id: 3,
      title: 'Cybersecurity Bootcamp',
      category: 'Training',
      date: 'January 22, 2024',
      className: 'md:col-span-4 md:row-span-1',
    },
    {
      id: 4,
      title: 'Alumni Tech Panel',
      category: 'Networking',
      date: 'November 18, 2023',
      className: 'md:col-span-6 md:row-span-1',
    },
    {
      id: 5,
      title: 'Algorithmic Coding Challenge',
      category: 'Competition',
      date: 'October 05, 2023',
      className: 'md:col-span-6 md:row-span-1',
    }
  ];

  return (
    <section className="relative border-b border-rule bg-surface z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-32">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div className="flex items-center space-x-4">
            <span className="w-4 h-4 bg-accent flex-shrink-0" />
            <h2 className="font-serif text-4xl text-primary tracking-tight m-0">Institutional Archives</h2>
          </div>
          <p className="font-sans text-sm text-primary/60 max-w-sm sm:text-right">
            A visual record of rigorous technical execution, competitions, and professional engagements.
          </p>
        </div>

        <div className="border-t-[2px] border-primary pt-12">
          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group overflow-hidden cursor-pointer ${event.className}`}
              >
                {/* Background Placeholder */}
                <div className="absolute inset-0 bg-gray-300 grayscale contrast-125 filter group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                  <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-xl uppercase tracking-widest">
                    Archive Asset {event.id}
                  </div>
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-1 bg-accent text-primary font-sans text-[9px] uppercase tracking-widest font-bold">
                      {event.category}
                    </span>
                    <span className="font-sans text-xs text-white/70 tracking-widest uppercase">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
