import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CaseStudyCard from '../components/CaseStudyCard';

export default function CaseStudies() {
  const studies = [
    {
      title: "Streamlining Operations for a Regional Construction Firm",
      industry: "Construction & Contracting",
      challenge: "The client was relying on paper-based processes and disconnected spreadsheets to manage multiple crews and projects, leading to delayed billing and scheduling conflicts.",
      result: "We implemented a custom software solution integrating their field reporting directly into a unified dashboard, cutting administrative time down significantly and accelerating the billing cycle.",
      stat: "40%",
      statLabel: "Reduction in Admin Time"
    },
    {
      title: "Scaling Lead Generation for an Enterprise Services Company",
      industry: "B2B Services",
      challenge: "The client had plateaued in growth after exhausting their core referral network and had no predictable inbound lead pipeline.",
      result: "Through a targeted marketing strategy and completely rebuilt digital presence, we established an automated outreach system that consistently generated qualified prospect calls.",
      stat: "3x",
      statLabel: "Increase in Lead Volume"
    }
  ];

  return (
    <div className="bg-[#0A0F1E] min-h-screen pt-20">
      <Hero 
        headline="Proof > Promise."
        subheadline="We don't sell theory. We build systems that drive measurable outcomes. See how we've helped our clients scale."
        showGrid={false}
      />
      
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {studies.map((study, idx) => (
              <CaseStudyCard 
                key={idx}
                title={study.title}
                industry={study.industry}
                challenge={study.challenge}
                result={study.result}
                stat={study.stat}
                statLabel={study.statLabel}
              />
            ))}
          </div>

          <div className="mt-24 text-center border-t border-white/10 pt-24 max-w-3xl mx-auto">
             <h2 className="text-3xl font-serif text-[#F5F5F0] mb-6">Ready to see your outcomes here?</h2>
             <p className="text-xl text-[#F5F5F0]/70 mb-10">We build systems that turn potential into performance.</p>
             <Link to="/contact" className="inline-flex items-center justify-center bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 hover:brightness-110 transition-all">
                Let's Talk About Your Business
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
