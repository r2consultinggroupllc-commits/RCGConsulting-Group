import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen pt-20">
      <Hero 
        headline="Two Letters. One Standard."
        subheadline="Russell Consulting Group stands for Results and Relationships — because we've never seen one without the other."
        ctaText="Let's Talk"
        ctaLink="/contact"
        showGrid={false}
      />
      
      {/* Our Story */}
      <section className="py-24 bg-[#131B2F] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Where We Come From</h2>
            <p className="text-xl md:text-2xl font-serif text-[#F5F5F0] leading-relaxed mb-8">
              At Russell Consulting Group, we started where most of our clients are right now — in the middle of building something real without a roadmap.
            </p>
            <p className="text-[#F5F5F0]/70 text-lg leading-relaxed mb-6">
              We've been inside startups running on momentum and hope. We've watched small businesses plateau because nobody ever built the right systems. We've seen good teams fail because the training wasn't there and the processes weren't documented. We built Russell Consulting Group because that gap between potential and performance is fixable — and most businesses never get the right help to fix it.
            </p>
            <p className="text-[#F5F5F0]/70 text-lg leading-relaxed">
              We don't consult from the outside. We come inside your operation, learn how it actually works, and build the changes that stick.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-12">Our Philosophy</h2>
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-white/10 p-8">
              <h3 className="text-xl font-serif text-[#F5F5F0] mb-4">Clarity Before Strategy</h3>
              <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">
                Most businesses don't have a strategy problem. They have a clarity problem. We start by understanding exactly where you are before we talk about where you're going.
              </p>
            </div>
            
            <div className="border border-white/10 p-8">
              <h3 className="text-xl font-serif text-[#F5F5F0] mb-4">Implementation Is the Job</h3>
              <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">
                Advice is cheap. A plan that sits in a folder helps no one. Our job isn't done when we hand you a document — it's done when the work is working.
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="text-xl font-serif text-[#F5F5F0] mb-4">People Are the Product</h3>
              <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">
                Technology, process, and marketing all matter. But your team determines everything. We build systems and training that make good people great.
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="text-xl font-serif text-[#F5F5F0] mb-4">Small Doesn't Mean Simple</h3>
              <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">
                Running a small or mid-size business is one of the hardest things a person can do. We treat it with the seriousness it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team placeholder */}
      <section className="py-24 bg-[#131B2F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-12">The People Behind Russell Consulting Group</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-white/10 p-6 bg-[#0A0F1E]">
              <div className="aspect-square bg-white/5 mb-6"></div>
              <h3 className="text-lg font-serif text-[#F5F5F0]">Ryan Russell</h3>
              <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest mb-4">Founder</p>
              <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">
                Ryan built Russell Consulting Group out of years working inside the construction, contracting, and technology industries. He's an operator first and a consultant second — which means the advice you get has been tested in the real world.
              </p>
            </div>
            {/* Add more team cards as needed */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#3B82F6]/10 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F0] mb-6">Want to Know If We're the Right Fit?</h2>
          <p className="text-xl text-[#F5F5F0]/70 mb-10">Discovery calls are free. Pressure is not our style.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 hover:brightness-110 transition-all group"
          >
            Let's Talk
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
