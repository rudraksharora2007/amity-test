import Navbar from "@/components/Navbar";
import LeadershipSection from "@/components/LeadershipSection";
import CommitteeCTA from "@/components/CommitteeCTA";
import ClubsSection from "@/components/ClubsSection";
import EventsGallery from "@/components/EventsGallery";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-white pt-20">
      <Navbar />

      {/* Signature AIIT Visual Motif: Engineering Grid Watermark */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #002147 1px, transparent 1px),
            linear-gradient(to bottom, #002147 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Editorial Hero */}
      <section className="relative border-b border-rule min-h-[75vh] flex flex-col justify-center z-10">
        <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.05] tracking-tight mb-10">
              Structured Competence. <br /> Built at AIIT.
            </h1>
            <div className="h-[2px] w-full bg-primary mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <p className="font-sans text-sm leading-[1.9] text-primary/80">
                  The Amity Institute of Information Technology mandates technical excellence beyond the classroom. The core technical divisions serve as the proving ground for algorithmic logic, infrastructure engineering, and full-stack architecture.
                  We forge the next generation of technologists through rigorous, peer-reviewed execution.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col justify-end">
                <div className="border-l-2 border-accent pl-4 mb-6">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-primary font-bold">
                    Official Mandate
                  </p>
                  <p className="font-serif text-sm text-primary/70 italic mt-1">
                    "Nullius in verba." (Take nobody's word for it; build it.)
                  </p>
                </div>
                <Link
                  href="/committee"
                  className="font-sans text-xs uppercase tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-white transition-colors w-max"
                >
                  View the Committee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Biographies */}
      <LeadershipSection />

      {/* Student Committee Call-to-Action */}
      <CommitteeCTA />

      {/* Core Technical Divisions (Clubs) */}
      <ClubsSection />

      {/* Institutional Archives (Events Gallery) */}
      <EventsGallery />

      <Footer />
    </main>
  );
}
