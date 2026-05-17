'use client';

import ClubPageTemplate, { ClubPageData } from "@/components/ClubPageTemplate";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

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
            <Network size={14} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Infrastructure &amp; Security</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-extrabold mb-8">
            Networking <br /><span className="text-accent italic">Club</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-10">
            Understand the backbone of the internet — routing, protocols, cloud fundamentals, and cybersecurity from first principles.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4">
            <Link href="/apply" className="bg-accent text-black px-8 py-4 font-bold hover:bg-white transition-all font-sans text-xs uppercase tracking-widest">
              Join Networking
            </Link>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-white/20 hover:bg-white/10 transition-all font-sans text-xs uppercase tracking-widest">
              <InstagramIcon /><span>Instagram</span>
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="relative hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full" />
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-10 shadow-2xl flex items-center justify-center">
              <Network size={120} className="text-accent animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-ping" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const data: ClubPageData = {
  name: "Networking",
  tagline: "Infrastructure & Security",
  instagramUrl: "https://instagram.com",
  applyLabel: "Join Networking",
  about: {
    headline: "The Internet<br/><span style='font-style:italic;color:rgba(26,46,90,0.4)'>Demystified.</span>",
    body1: "The Networking Club is AIIT's dedicated division for computer networks, cybersecurity, and cloud infrastructure. We explore the protocols, architectures, and security models that power the modern internet.",
    body2: "Members gain hands-on experience with Cisco lab equipment, cloud sandboxes on AWS and Azure, and real-world ethical hacking scenarios under expert faculty supervision.",
    stats: [
      { label: "Lab Sessions", value: "24+" },
      { label: "Active Members", value: "45+" },
      { label: "Certifications Earned", value: "18" },
      { label: "CTF Competitions", value: "6" },
    ],
  },
  activities: {
    past: [
      { title: "CCNA Fundamentals Bootcamp", date: "Feb 2024", desc: "Hands-on Cisco packet tracer lab sessions covering OSI model and routing protocols." },
      { title: "Ethical Hacking CTF", date: "Dec 2023", desc: "A 12-hour capture-the-flag competition with real-world vulnerability scenarios." },
      { title: "Cloud Architecture Workshop", date: "Oct 2023", desc: "Provisioning EC2 instances and configuring VPCs on AWS from scratch." },
    ],
    upcoming: [
      { title: "AWS Solutions Architect Prep", date: "June 2025", desc: "Structured study sessions targeting the AWS SAA-C03 certification." },
      { title: "Network Penetration Testing", date: "July 2025", desc: "Ethical hacking fundamentals with Kali Linux and Metasploit." },
      { title: "IoT Security Summit", date: "Aug 2025", desc: "Exploring attack surfaces in smart devices and embedded systems." },
    ],
    extra: [
      { title: "Wireshark Deep Dive", date: "Sep 2023", desc: "Packet-level analysis and traffic inspection for network forensics." },
      { title: "VPN & Firewall Lab", date: "Nov 2023", desc: "Configuring enterprise-grade firewalls and VPN tunnels." },
      { title: "CompTIA Network+ Study Group", date: "Jan 2024", desc: "Collaborative exam preparation and mock tests." },
    ],
  },
  leadership: [
    { id: "faculty", role: "Faculty Coordinator", name: "Prof. (Dr) Rekha Agarwal", message: "The Networking Club fills a critical gap in our curriculum by giving students direct, hands-on access to enterprise hardware and security challenges. The depth of knowledge these students develop is remarkable." },
    { id: "president", role: "President", name: "Ankit Verma", message: "\"In a world where everything is connected, security is not optional. Our club exists to build engineers who think like architects and defend like experts. Every packet we analyse brings us closer to mastery.\"" },
    { id: "vp1", role: "Vice President", name: "Divya Nair" },
    { id: "vp2", role: "Vice President", name: "Rohan Pillai" },
    { id: "memsec", role: "Member Secretary", name: "Aditya Singh" },
    { id: "treasurer", role: "Treasurer", name: "Kavya Reddy" },
  ],
  faqs: [
    { q: "Do I need prior networking knowledge to join?", a: "No prior experience is required. We start from OSI model basics and progressively build up to advanced topics like BGP routing and penetration testing." },
    { q: "Does the club help with certifications?", a: "Yes. We run structured study groups for CompTIA Network+, CCNA, and AWS SAA. Many of our members have passed these exams during their time with us." },
    { q: "Is there access to physical lab equipment?", a: "Yes. We have access to Cisco lab equipment in the AIIT infrastructure lab, available during scheduled club sessions." },
    { q: "How do I stay updated on sessions?", a: "All session announcements, resources, and event details are posted on our Instagram page and shared via the club WhatsApp group." },
    { q: "Can I join if I'm interested only in cybersecurity?", a: "Absolutely. We have a dedicated cybersecurity track covering ethical hacking, CTF competitions, and digital forensics." },
  ],
  hero,
};

export default function NetworkingPage() {
  return <ClubPageTemplate data={data} />;
}
