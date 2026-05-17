'use client';

import ClubPageTemplate, { ClubPageData } from "@/components/ClubPageTemplate";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);
import Link from "next/link";


const hero = (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary text-white">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -mr-64 -mt-64" />
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/20">
            <Zap size={14} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Web &amp; App Development</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-extrabold mb-8">
            Cascade <br /><span className="text-accent italic">Club</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-10">
            From pixel-perfect frontends to powerful backends — Cascade turns curious students into full-stack developers who build real, deployable products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4">
            <Link href="/apply" className="bg-accent text-black px-8 py-4 font-bold hover:bg-white transition-all font-sans text-xs uppercase tracking-widest">
              Join Cascade
            </Link>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-white/20 hover:bg-white/10 transition-all font-sans text-xs uppercase tracking-widest">
              <InstagramIcon /><span>Instagram</span>
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="relative hidden md:block">
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 shadow-2xl">
            <div className="flex space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full" /><div className="w-3 h-3 bg-yellow-400 rounded-full" /><div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <div className="space-y-4 font-mono text-sm text-white/50">
              <p className="text-accent">const club = &quot;Cascade&quot;;</p>
              <p>const mission = &quot;Build real products&quot;;</p>
              <p className="text-blue-400">async function ship() &#123;</p>
              <p className="pl-4">await learn();</p>
              <p className="pl-4">await build();</p>
              <p className="pl-4">return &quot;Deployed to Vercel&quot;;</p>
              <p className="text-blue-400">&#125;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const data: ClubPageData = {
  name: "Cascade",
  tagline: "Web & App Development",
  instagramUrl: "https://instagram.com",
  applyLabel: "Join Cascade",
  about: {
    headline: "We Don&apos;t Just Learn.<br/><span style='font-style:italic;color:rgba(26,46,90,0.4)'>We Ship.</span>",
    body1: "Cascade is AIIT's premier full-stack development division. Founded on the principle that students learn best by building, we provide a structured environment where members go from zero to deployed in a single semester.",
    body2: "We maintain an active GitHub organisation, run weekly technical sessions, and collaborate directly with the AIIT Student Committee on institutional tech projects.",
    stats: [
      { label: "Projects Shipped", value: "14+" },
      { label: "Active Members", value: "60+" },
      { label: "Workshops Conducted", value: "32" },
      { label: "Alumni in Tech", value: "40+" },
    ],
  },
  activities: {
    past: [
      { title: "Full-Stack Bootcamp '24", date: "March 2024", desc: "Intensive 3-day workshop on Next.js, Node.js, and PostgreSQL." },
      { title: "Deploy-a-thon", date: "Jan 2024", desc: "Students shipped a production app in 24 hours on Vercel." },
      { title: "UI/UX Design Sprint", date: "Nov 2023", desc: "Figma to code—translating wireframes into pixel-perfect implementations." },
    ],
    upcoming: [
      { title: "React Advanced Workshop", date: "June 2025", desc: "Diving into Concurrent Mode, Suspense, and Server Components." },
      { title: "Open Source Sprint", date: "July 2025", desc: "Contribute to real GitHub repositories as a team." },
      { title: "Annual Code Showcase", date: "Aug 2025", desc: "Present your best projects to faculty and industry professionals." },
    ],
    extra: [
      { title: "API Design Masterclass", date: "Sep 2023", desc: "RESTful architecture and OpenAPI specification standards." },
      { title: "Git & Collaboration", date: "Oct 2023", desc: "Advanced git workflows, branching strategies, and code reviews." },
      { title: "Database Optimization", date: "Dec 2023", desc: "Indexing, query optimization, and N+1 problem resolution." },
    ],
  },
  leadership: [
    { id: "faculty", role: "Faculty Coordinator", name: "Prof. (Dr) Rekha Agarwal", message: "Cascade exemplifies what AIIT stands for—students who don't just learn technology but build it. I am proud of every product this team has shipped." },
    { id: "president", role: "President", name: "Kshitiz Jain", message: "\"When I joined Cascade in first year, I barely knew what HTML was. Today I've shipped three live websites and mentored juniors doing the same. That's the compounding power of a good club.\"" },
    { id: "vp1", role: "Vice President", name: "Aryan Mehta" },
    { id: "vp2", role: "Vice President", name: "Sneha Gupta" },
    { id: "memsec", role: "Member Secretary", name: "Rahul Sharma" },
    { id: "treasurer", role: "Treasurer", name: "Priya Kapoor" },
  ],
  faqs: [
    { q: "Who can join Cascade?", a: "Any AIIT student—regardless of year or prior experience—is eligible to apply. We have beginner tracks and advanced tracks to match your skill level." },
    { q: "What tech stack does Cascade focus on?", a: "We primarily work with React, Next.js, Node.js, and PostgreSQL. However, members are free to explore any stack for their personal projects." },
    { q: "Is there a membership fee?", a: "No. Cascade is entirely free to join. We believe in zero barriers to technical education." },
    { q: "How often do we meet?", a: "We hold weekly sessions every Saturday (2–5 PM) in the AIIT Computer Lab. Additional workshops are announced on our Instagram." },
    { q: "Can freshers join?", a: "Absolutely. Freshers are especially encouraged to join early—our onboarding mentorship program is designed specifically for first-year students." },
  ],
  hero,
};

export default function CascadePage() {
  return <ClubPageTemplate data={data} />;
}
