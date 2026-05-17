import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Target, Lightbulb, Users, Settings, ArrowRight } from 'lucide-react';
import TechDivisionBanner from '../components/TechDivisionBanner';

export default function Services() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen pt-20">
      <Hero 
        headline="We Don't Just Advise. We Build With You."
        subheadline="Russell Consulting Group offers four core service areas designed to take a growing business from scattered to structured — and from structured to scaling."
        showGrid={true}
      />
      
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-16">
            
            {/* Service 1 */}
            <div className="border border-white/10 bg-[#131B2F] p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <Target className="w-10 h-10 text-[#C9A84C]" />
                <h2 className="text-3xl font-serif text-[#F5F5F0]">Business Development</h2>
              </div>
              <h3 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Build the Pipeline. Close the Gap.</h3>
              <p className="text-[#F5F5F0]/80 text-lg leading-relaxed mb-6">
                Starting and growing a business means constantly finding, winning, and keeping new clients. Most small businesses rely on referrals and hope. We help you build something more reliable.
              </p>
              
              <div className="mb-8">
                <h4 className="text-[#F5F5F0] font-bold mb-4">What this includes:</h4>
                <ul className="space-y-2 text-[#F5F5F0]/70 list-disc pl-5">
                  <li>Market opportunity analysis</li>
                  <li>Outreach strategy and lead generation systems</li>
                  <li>Partnership and referral network development</li>
                  <li>Sales process design and CRM implementation</li>
                  <li>Revenue goal mapping and pipeline tracking</li>
                </ul>
              </div>
              
              <div className="bg-[#0A0F1E] p-6 border-l-2 border-[#C9A84C]">
                <h4 className="text-[#C9A84C] font-bold uppercase tracking-[0.1em] text-[10px] mb-2">Who it's for</h4>
                <p className="text-[#F5F5F0]/80 text-sm">Founders and business owners who know their product is good but can't get consistent new business coming through the door.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="border border-white/10 bg-[#131B2F] p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <Lightbulb className="w-10 h-10 text-[#C9A84C]" />
                <h2 className="text-3xl font-serif text-[#F5F5F0]">Marketing Strategy</h2>
              </div>
              <h3 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Get Found. Get Remembered. Get Chosen.</h3>
              <p className="text-[#F5F5F0]/80 text-lg leading-relaxed mb-6">
                Marketing without strategy is just noise. We help you build a clear message, reach the right audience, and create a presence that makes your business the obvious choice in your market.
              </p>
              
              <div className="mb-8">
                <h4 className="text-[#F5F5F0] font-bold mb-4">What this includes:</h4>
                <ul className="space-y-2 text-[#F5F5F0]/70 list-disc pl-5">
                  <li>Brand positioning and messaging framework</li>
                  <li>Digital presence audit and rebuild (website, social, Google)</li>
                  <li>Content and campaign strategy</li>
                  <li>Email marketing and nurture sequences</li>
                  <li>Local and regional market outreach</li>
                </ul>
              </div>
              
              <div className="bg-[#0A0F1E] p-6 border-l-2 border-[#C9A84C]">
                <h4 className="text-[#C9A84C] font-bold uppercase tracking-[0.1em] text-[10px] mb-2">Who it's for</h4>
                <p className="text-[#F5F5F0]/80 text-sm">Businesses that are invisible online, unclear in their messaging, or spending money on marketing that isn't converting.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="border border-white/10 bg-[#131B2F] p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <Users className="w-10 h-10 text-[#C9A84C]" />
                <h2 className="text-3xl font-serif text-[#F5F5F0]">Training & Development</h2>
              </div>
              <h3 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Build a Team That Doesn't Need You for Everything.</h3>
              <p className="text-[#F5F5F0]/80 text-lg leading-relaxed mb-6">
                A business that depends entirely on the owner isn't a business — it's a job. We build the training systems, onboarding programs, and performance accountability structures that turn your team into your biggest competitive advantage.
              </p>
              
              <div className="mb-8">
                <h4 className="text-[#F5F5F0] font-bold mb-4">What this includes:</h4>
                <ul className="space-y-2 text-[#F5F5F0]/70 list-disc pl-5">
                  <li>Role clarity and accountability mapping</li>
                  <li>Onboarding and standard operating procedure (SOP) development</li>
                  <li>Skills gap assessment and training curriculum design</li>
                  <li>Leadership development for team leads and managers</li>
                  <li>Performance review frameworks</li>
                </ul>
              </div>
              
              <div className="bg-[#0A0F1E] p-6 border-l-2 border-[#C9A84C]">
                <h4 className="text-[#C9A84C] font-bold uppercase tracking-[0.1em] text-[10px] mb-2">Who it's for</h4>
                <p className="text-[#F5F5F0]/80 text-sm">Business owners who are doing too much themselves, dealing with inconsistent team performance, or preparing to grow their headcount.</p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="border border-white/10 bg-[#131B2F] p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <Settings className="w-10 h-10 text-[#C9A84C]" />
                <h2 className="text-3xl font-serif text-[#F5F5F0]">Process Implementation</h2>
              </div>
              <h3 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Systems That Run Without You Standing Over Them.</h3>
              <p className="text-[#F5F5F0]/80 text-lg leading-relaxed mb-6">
                Growth breaks things. The processes that worked at five employees don't work at fifteen. We design, document, and implement the operational systems that let your business run consistently — regardless of who shows up that day.
              </p>
              
              <div className="mb-8">
                <h4 className="text-[#F5F5F0] font-bold mb-4">What this includes:</h4>
                <ul className="space-y-2 text-[#F5F5F0]/70 list-disc pl-5">
                  <li>Operational workflow mapping and design</li>
                  <li>SOP documentation and rollout</li>
                  <li>Technology stack assessment and optimization</li>
                  <li>Vendor and supply chain process review</li>
                  <li>Quality control and accountability checkpoints</li>
                </ul>
              </div>
              
              <div className="bg-[#0A0F1E] p-6 border-l-2 border-[#C9A84C]">
                <h4 className="text-[#C9A84C] font-bold uppercase tracking-[0.1em] text-[10px] mb-2">Who it's for</h4>
                <p className="text-[#F5F5F0]/80 text-sm">Businesses experiencing growing pains, inconsistent delivery, or operational chaos that's starting to cost clients and money.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technologies Division Cross-Sell */}
      <section className="py-24 bg-[#3B82F6]/5 border-y border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F0] mb-6">Need the Systems Built, Not Just Designed?</h2>
          <p className="text-xl text-[#F5F5F0]/70 mb-10">When your process work requires custom software, automation, or AI-powered tools, Russell Technologies Division builds it from the ground up.</p>
          <Link 
            to="/technologies" 
            className="inline-flex items-center justify-center bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 hover:brightness-110 transition-all group"
          >
            Explore Technologies
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#0A0F1E] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F0] mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-[#F5F5F0]/70 mb-10">Most clients start with a conversation, not a service menu. Let's talk about what's actually holding your business back.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center border border-[#C9A84C] text-[#C9A84C] font-bold uppercase tracking-widest text-[11px] px-8 py-3 hover:bg-[#C9A84C] hover:text-[#0A0F1E] transition-colors"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>

    </div>
  );
}
