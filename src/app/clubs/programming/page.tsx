'use client';

import ClubPageTemplate, { ClubPageData } from "@/components/ClubPageTemplate";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

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
            <Code size={14} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Algorithms &amp; Logic</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-extrabold mb-8">
            Programming <br /><span className="text-accent italic">Club</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-10">
            Sharpen your algorithmic thinking, compete in national hackathons, and master the data structures that top companies test in placements.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4">
            <Link href="/apply" className="bg-accent text-black px-8 py-4 font-bold hover:bg-white transition-all font-sans text-xs uppercase tracking-widest">
              Join Programmers
            </Link>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-white/20 hover:bg-white/10 transition-all font-sans text-xs uppercase tracking-widest">
              <InstagramIcon /><span>Instagram</span>
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="relative hidden md:block">
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono text-white/40">Contest #412 - Active</span>
              <div className="flex space-x-1"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /></div>
            </div>
            <div className="space-y-6">
              {[90, 75, 60].map((w, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center font-bold text-accent">{i + 1}</div>
                  <div className="h-2 w-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: `${w}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const data: ClubPageData = {
  name: "Programming",
  tagline: "Algorithms & Logic",
  instagramUrl: "https://instagram.com",
  applyLabel: "Join Programmers",
  about: {
    headline: "Algorithms.<br/><span style='font-style:italic;color:rgba(26,46,90,0.4)'>Mastered.</span>",
    body1: "The Programming Club is AIIT's competitive coding and algorithmic training division. We prepare students for the most demanding technical challenges—from national hackathons to FAANG placement rounds.",
    body2: "Our weekly coding sprints, mock interviews, and peer-led problem-solving sessions create a culture of mastery where every member levels up consistently through structured, high-intensity practice.",
    stats: [
      { label: "Contests Won", value: "8+" },
      { label: "Active Members", value: "80+" },
      { label: "Hackathons Entered", value: "12" },
      { label: "Placed in Top Tech", value: "25+" },
    ],
  },
  activities: {
    past: [
      { title: "ICPC Preparation Camp", date: "March 2024", desc: "A 2-week intensive camp covering graph theory, DP, and segment trees." },
      { title: "Internal Hackathon 3.0", date: "Jan 2024", desc: "48-hour product hackathon with ₹50,000 in prizes and industry judges." },
      { title: "Placement Mock Interviews", date: "Nov 2023", desc: "Simulated FAANG-style technical interviews with feedback from alumni." },
    ],
    upcoming: [
      { title: "CodeSprint Summer '25", date: "June 2025", desc: "Season-long competitive programming ladder on Codeforces." },
      { title: "System Design Bootcamp", date: "July 2025", desc: "Covering distributed systems, CAP theorem, and design at scale." },
      { title: "Annual Hackathon 4.0", date: "Aug 2025", desc: "Our flagship 48-hour product hackathon, open to all AIIT students." },
    ],
    extra: [
      { title: "Binary Search Intensive", date: "Sep 2023", desc: "Deep-dive into binary search variants and two-pointer techniques." },
      { title: "Graph Theory Workshop", date: "Oct 2023", desc: "BFS, DFS, Dijkstra, and Floyd-Warshall with competitive problem sets." },
      { title: "Mock LeetCode Contest", date: "Dec 2023", desc: "Timed LeetCode-style contest with leaderboard and editorial review." },
    ],
  },
  leadership: [
    { id: "faculty", role: "Faculty Coordinator", name: "Prof. (Dr) Rekha Agarwal", message: "The Programming Club is a testament to what disciplined, peer-driven learning can achieve. Watching students solve problems that once seemed impossible is one of the most rewarding experiences in my career." },
    { id: "president", role: "President", name: "Vikram Bose", message: "\"Programming Club is where we turn knowledge into mastery. Our weekly coding sprints and peer-led workshops ensure that every member is ready for the industry's most demanding roles.\"" },
    { id: "vp1", role: "Vice President", name: "Ishaan Tripathi" },
    { id: "vp2", role: "Vice President", name: "Meera Joshi" },
    { id: "memsec", role: "Member Secretary", name: "Siddharth Roy" },
    { id: "treasurer", role: "Treasurer", name: "Tanya Mishra" },
  ],
  faqs: [
    { q: "What level of coding experience is required to join?", a: "We welcome everyone from complete beginners to competitive coders. Our beginner track starts with C++ fundamentals and progressively introduces data structures." },
    { q: "Which competitive programming platforms does the club use?", a: "We actively participate on Codeforces, LeetCode, CodeChef, and HackerRank. Our weekly contests span all these platforms." },
    { q: "Does the club help with campus placements?", a: "Yes. Placement preparation is a core pillar of our club. We run mock technical interviews, DSA revision sessions, and system design workshops specifically for placements." },
    { q: "How are teams formed for hackathons?", a: "We help members find like-minded teammates through our internal team-building sessions held before every major hackathon." },
    { q: "Are there any prerequisites for the ICPC preparation camp?", a: "You should be comfortable with at least one programming language. The camp itself covers everything from intermediate to advanced algorithmic concepts." },
  ],
  hero,
};

export default function ProgrammingPage() {
  return <ClubPageTemplate data={data} />;
}
