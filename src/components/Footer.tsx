import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white relative z-10 border-t-4 border-accent">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-24 pb-12">
        <div className="grid grid-cols-12 gap-12">

          {/* Column 1: Identity */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-serif text-2xl tracking-tight mb-2">Amity Institute of <br />Information Technology</h2>
            <div className="h-[1px] w-12 bg-accent mb-6" />
            <p className="font-sans text-sm text-white/70 leading-[1.8] max-w-sm">
              The official governing student body and technical divisions of AIIT, Noida. Engineering excellence through structured, peer-led execution.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:col-start-6">
            <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Student Committee</h3>
            <div className="space-y-6 font-sans text-xs text-white/80 leading-[1.8]">
              <address className="not-italic">
                <p className="text-white font-bold">Campus Address</p>
                <p>I-1 Block, 3rd Floor</p>
                <p>Amity University UP</p>
                <p>Sector-125, Noida - 201303</p>
              </address>
              <div>
                <p className="text-white font-bold">Direct Inquiry</p>
                <a href="mailto:committee.aiit@amity.edu" className="hover:text-accent transition-colors underline underline-offset-4">
                  committee.aiit@amity.edu
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Directories */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Institutional Directories</h3>
            <ul className="space-y-4 font-sans text-xs text-white/80">
              <li><Link href="/faq" className="hover:text-accent transition-colors">F.A.Q</Link></li>
              <li><Link href="/committee" className="hover:text-accent transition-colors">Committee Leadership</Link></li>
              <li><Link href="/clubs/cascade" className="hover:text-accent transition-colors">Div 01: Cascade</Link></li>
              <li><Link href="/clubs/programming" className="hover:text-accent transition-colors">Div 02: Programming</Link></li>
              <li><Link href="/clubs/networking" className="hover:text-accent transition-colors">Div 03: Networking</Link></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Yellow Copyright Bar */}
      <div className="w-full bg-accent py-3 px-6 lg:px-16 flex justify-center items-center">
        <p className="text-primary font-sans text-sm tracking-wide text-center">
          Copyright &copy; 2024 <span className="font-bold">Amity University</span> || All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
