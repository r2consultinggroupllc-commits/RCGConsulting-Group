import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TechDivisionBanner from '../components/TechDivisionBanner';
import { Target, Lightbulb, Users, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen pt-20">
      <Hero 
        headline="Results Start Here."
        subheadline="Russell Consulting Group partners with startups and growing businesses to build the foundation, systems, and momentum that turn potential into performance."
        ctaText="See What We Do"
        ctaLink="/services"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaLink="/contact"
      />

      {/* Intro Strip */}
      <section className="bg-[#131B2F] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-[11px] mb-4">Built for Builders</h3>
              <p className="text-[#F5F5F0]/80 text-sm leading-relaxed">
                We work with founders and small teams who are ready to scale — not someday, but now.
              </p>
            </div>
            <div>
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-[11px] mb-4">Process First</h3>
              <p className="text-[#F5F5F0]/80 text-sm leading-relaxed">
                Systems that stick. We don't just advise — we implement alongside you.
              </p>
            </div>
            <div>
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-[11px] mb-4">Growth Focused</h3>
              <p className="text-[#F5F5F0]/80 text-sm leading-relaxed">
                From first client to full operation, we map the path and walk it with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 relative z-10 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#F5F5F0] mb-8 leading-tight">
              Russell Consulting Group is a results-driven consulting firm built for the businesses that are still becoming what they're meant to be.
            </h3>
            <p className="text-[#F5F5F0]/70 text-lg leading-relaxed mb-8">
              We work with startups, small businesses, and growing mid-size companies navigating the hard middle ground — past the idea stage, not yet at scale.
            </p>
            <p className="text-[#F5F5F0]/70 text-lg leading-relaxed mb-12">
              We specialize in four things that move the needle: business development, marketing strategy, team training, and operational process implementation. No bloated retainers. No generic playbooks. Just focused work that produces measurable outcomes.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-[#C9A84C] font-bold uppercase tracking-widest text-[11px] hover:text-[#F5F5F0] transition-colors group"
            >
              Learn More About Russell Consulting Group
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Snapshot */}
      <section className="py-24 relative z-10 bg-[#131B2F] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#F5F5F0]">Four pillars. One focused team. Real outcomes.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Cards */}
            <Link to="/services" className="bg-[#0A0F1E] border border-white/10 p-8 hover:border-[#3B82F6]/50 transition-colors block group cursor-pointer">
              <Target className="w-8 h-8 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-serif text-[#F5F5F0] mb-4">Business Development</h4>
              <p className="text-[#F5F5F0]/60 text-sm leading-relaxed">
                We help you identify opportunities, build relationships, and create the pipelines that grow revenue consistently — not accidentally.
              </p>
            </Link>

            <Link to="/services" className="bg-[#0A0F1E] border border-white/10 p-8 hover:border-[#3B82F6]/50 transition-colors block group cursor-pointer">
              <Lightbulb className="w-8 h-8 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-serif text-[#F5F5F0] mb-4">Marketing Strategy</h4>
              <p className="text-[#F5F5F0]/60 text-sm leading-relaxed">
                Brand positioning, messaging, outreach, and digital presence — built for who your customer actually is, not who you wish they were.
              </p>
            </Link>

            <Link to="/services" className="bg-[#0A0F1E] border border-white/10 p-8 hover:border-[#3B82F6]/50 transition-colors block group cursor-pointer">
              <Users className="w-8 h-8 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-serif text-[#F5F5F0] mb-4">Training & Development</h4>
              <p className="text-[#F5F5F0]/60 text-sm leading-relaxed">
                Your team is your biggest asset or your biggest bottleneck. We build training systems that close skill gaps and create accountability at every level.
              </p>
            </Link>

            <Link to="/services" className="bg-[#0A0F1E] border border-white/10 p-8 hover:border-[#3B82F6]/50 transition-colors block group cursor-pointer">
              <Settings className="w-8 h-8 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-serif text-[#F5F5F0] mb-4">Process Implementation</h4>
              <p className="text-[#F5F5F0]/60 text-sm leading-relaxed">
                Ideas without execution are just plans. We design operational workflows and implement the systems that make your business run without you being everywhere at once.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <TechDivisionBanner />
      
      {/* Footer CTA Strip */}
      <section className="py-24 bg-[#3B82F6]/5 border-t border-white/10 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F0] mb-6">Ready to Stop Guessing and Start Growing?</h2>
          <p className="text-xl text-[#F5F5F0]/70 mb-10">Let's talk about where you are, where you're going, and what's in the way.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 hover:brightness-110 transition-all group"
          >
            Schedule a Discovery Call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
