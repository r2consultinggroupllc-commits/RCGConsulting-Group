import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Code2, Sparkles, Workflow, ArrowRight } from 'lucide-react';

export default function TechDivision() {
  const process = [
    { phase: "Discovery", desc: "We learn how your business works, where the friction is, and what a successful solution looks like. No assumptions." },
    { phase: "Architecture", desc: "We design the right solution before writing a single line of code. Scope, stack, timeline, and cost — defined clearly upfront." },
    { phase: "Build", desc: "Iterative development with regular check-ins. You see progress, not just a finished product handed over at the end." },
    { phase: "Deploy", desc: "We handle the launch — testing, training your team, and making sure the transition is smooth." },
    { phase: "Support", desc: "We don't disappear after go-live. Ongoing support, updates, and iteration as your business grows." }
  ];

  return (
    <div className="bg-[#0A0F1E] min-h-screen pt-20">
      <Hero 
        headline="Where Strategy Meets Stack."
        subheadline="Russell Technologies Division builds custom software, automation systems, and AI-powered tools for businesses that have outgrown what off-the-shelf can do."
        ctaText="Start the Conversation"
        ctaLink="/contact"
        showGrid={true}
      />

      {/* Division Intro */}
      <section className="py-24 bg-[#131B2F] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">What Is the Technologies Division?</h2>
            <h3 className="text-2xl md:text-3xl font-serif text-[#F5F5F0] mb-8 leading-relaxed">
              Most consulting firms tell you what to fix. Russell Technologies Division builds the fix.
            </h3>
            <p className="text-[#F5F5F0]/70 text-lg leading-relaxed mb-6">
              We are the technology arm of Russell Consulting Group — a dedicated team of builders who design and deploy custom digital solutions for small and mid-size businesses. Whether you need a client-facing application, an internal workflow automation, or an AI-powered tool that replaces hours of manual work, we build it around how your business actually operates.
            </p>
            <p className="text-[#F5F5F0]/70 text-lg leading-relaxed">
              No templates. No bloated enterprise software you'll use 10% of. Built for you, deployed for your team, maintained for the long run.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Offerings */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-16">
            
            {/* Offering 1 */}
            <div className="border border-white/10 p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <Code2 className="w-10 h-10 text-[#3B82F6]" />
                <h2 className="text-3xl font-serif text-[#F5F5F0]">Custom Software & SaaS Development</h2>
              </div>
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-[0.1em] text-[10px] mb-6">Software Built for Your Operation, Not Someone Else's.</h3>
              <p className="text-[#F5F5F0]/80 text-lg leading-relaxed mb-6 max-w-4xl">
                We build web applications, progressive web apps (PWAs), and internal tools designed around your specific workflows. From contractor management platforms to client portals and field service apps — if you can describe the problem, we can build the solution.
              </p>
              <div className="bg-[#131B2F] border-l-2 border-[#3B82F6] p-4 inline-block">
                <span className="text-[#F5F5F0]/50 text-xs uppercase tracking-widest mr-4">Technologies:</span>
                <span className="text-[#F5F5F0]/90 text-sm font-medium">React, Next.js, Supabase, Google Apps Script, Node.js, Firebase</span>
              </div>
            </div>

            {/* Offering 2 */}
            <div className="border border-white/10 p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <Sparkles className="w-10 h-10 text-[#3B82F6]" />
                <h2 className="text-3xl font-serif text-[#F5F5F0]">AI & Automation</h2>
              </div>
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-[0.1em] text-[10px] mb-6">Stop Doing by Hand What a System Can Do Better.</h3>
              <p className="text-[#F5F5F0]/80 text-lg leading-relaxed mb-6 max-w-4xl">
                Manual processes, repetitive data entry, slow follow-up, and disconnected workflows cost your business time and money every single day. We implement automation pipelines and AI-powered tools that eliminate the bottlenecks and put your team back on the work that actually matters.
              </p>
              <div className="bg-[#131B2F] border-l-2 border-[#3B82F6] p-4 inline-block">
                <span className="text-[#F5F5F0]/50 text-xs uppercase tracking-widest mr-4">Technologies:</span>
                <span className="text-[#F5F5F0]/90 text-sm font-medium">n8n, OpenAI/Anthropic APIs, Google Workspace automation, webhook integrations, LLM-powered tools</span>
              </div>
            </div>

            {/* Offering 3 */}
            <div className="border border-white/10 p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <Workflow className="w-10 h-10 text-[#3B82F6]" />
                <h2 className="text-3xl font-serif text-[#F5F5F0]">Systems Integration</h2>
              </div>
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-[0.1em] text-[10px] mb-6">Make Your Tools Talk to Each Other.</h3>
              <p className="text-[#F5F5F0]/80 text-lg leading-relaxed mb-6 max-w-4xl">
                Most businesses run on five to ten different platforms that don't connect. We bridge the gaps — linking your CRM, your project management tools, your financial software, and your communication stack so data flows automatically and nothing falls through the cracks.
              </p>
              <div className="bg-[#131B2F] border-l-2 border-[#3B82F6] p-4 inline-block">
                <span className="text-[#F5F5F0]/50 text-xs uppercase tracking-widest mr-4">Technologies:</span>
                <span className="text-[#F5F5F0]/90 text-sm font-medium">REST APIs, Google Apps Script, Zapier/Make alternatives, custom middleware, legacy system bridges</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-24 bg-[#131B2F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Our Build Process</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#F5F5F0]">From First Call to Go-Live.</h3>
          </div>
          
          <div className="space-y-12 max-w-4xl">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex-shrink-0 text-4xl font-serif text-[#3B82F6] opacity-50 w-16">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-serif text-[#F5F5F0] mb-2">{step.phase}</h4>
                  <p className="text-[#F5F5F0]/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-[#0A0F1E] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-center">Built for Businesses Like Yours</h2>
          
          <ul className="space-y-6">
            <li className="bg-[#131B2F] border border-white/10 p-6 flex items-start space-x-4">
               <div className="text-[#C9A84C] mt-1 shrink-0">•</div>
               <p className="text-[#F5F5F0] text-lg">You've hit the ceiling of what spreadsheets and off-the-shelf software can do</p>
            </li>
            <li className="bg-[#131B2F] border border-white/10 p-6 flex items-start space-x-4">
               <div className="text-[#C9A84C] mt-1 shrink-0">•</div>
               <p className="text-[#F5F5F0] text-lg">You're losing time every day to manual processes that should be automated</p>
            </li>
            <li className="bg-[#131B2F] border border-white/10 p-6 flex items-start space-x-4">
               <div className="text-[#C9A84C] mt-1 shrink-0">•</div>
               <p className="text-[#F5F5F0] text-lg">You need a tool built for your industry, not adapted from something generic</p>
            </li>
            <li className="bg-[#131B2F] border border-white/10 p-6 flex items-start space-x-4">
               <div className="text-[#C9A84C] mt-1 shrink-0">•</div>
               <p className="text-[#F5F5F0] text-lg">You want a technology partner who understands your business, not just your code</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#131B2F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center">
            <h2 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Transparent Investment</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#F5F5F0]">Project Pricing Guarantees.</h3>
            <p className="text-[#F5F5F0]/70 mt-4 text-sm max-w-2xl mx-auto leading-relaxed">
              We define scope and cost upfront. No open-ended retainers for project work, no surprise invoices. 
              The tiers below represent typical project ranges based on complexity.
            </p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            
            {/* Custom Software & SaaS Development */}
            <div>
              <h4 className="text-xl font-serif text-[#F5F5F0] mb-6 border-b border-white/10 pb-4 flex items-center">
                <Code2 className="w-5 h-5 text-[#C9A84C] mr-3" />
                Custom Software & SaaS Development
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Starter</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$1,825 – $5,475</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Internal tools, simple client portals, single-workflow applications.</p>
                </div>
                <div className="bg-[#0A0F1E] border border-[#3B82F6]/30 p-6 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#3B82F6] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1">Typical</div>
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Standard</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$5,840 – $18,250</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Multi-user platforms, dashboard integrations, MVP product builds.</p>
                </div>
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Enterprise</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$18,250+</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Complex custom SaaS, large-scale architectures, high-security requirements.</p>
                </div>
              </div>
            </div>

            {/* AI & Automation */}
            <div>
              <h4 className="text-xl font-serif text-[#F5F5F0] mb-6 border-b border-white/10 pb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-[#C9A84C] mr-3" />
                AI & Automation
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Starter</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$1,095 – $2,920</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Single workflow automations, basic data routing.</p>
                </div>
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Standard</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$3,285 – $8,760</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Multi-step pipelines, LLM-powered data extraction, automated outreach.</p>
                </div>
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Enterprise</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$8,760+</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Complete AI business systems, autonomous agents, deep integrations.</p>
                </div>
              </div>
            </div>

            {/* Systems Integration */}
            <div>
              <h4 className="text-xl font-serif text-[#F5F5F0] mb-6 border-b border-white/10 pb-4 flex items-center">
                <Workflow className="w-5 h-5 text-[#C9A84C] mr-3" />
                Systems Integration
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Starter</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$730 – $2,555</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Connecting two standard platforms (e.g., standard CRM to Email).</p>
                </div>
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Standard</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$2,920 – $7,300</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Bi-directional syncing, custom API bridges, multiple tools.</p>
                </div>
                <div className="bg-[#0A0F1E] border border-white/10 p-6 flex flex-col">
                  <div className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] mb-2">Enterprise</div>
                  <div className="text-2xl font-serif text-[#F5F5F0] mb-2">$7,300+</div>
                  <p className="text-[#F5F5F0]/60 text-sm mt-auto">Legacy system migrations, complex data warehouses, full stack unity.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ongoing Support & Maintenance */}
              <div className="bg-[#0A0F1E] border border-white/10 p-8">
                <h4 className="text-lg font-serif text-[#F5F5F0] mb-6">Ongoing Support & Maintenance</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[#F5F5F0]/80">Light</span>
                    <span className="font-serif text-lg text-[#C9A84C]">$365<span className="text-xs text-[#F5F5F0]/50 ml-1">/mo</span></span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[#F5F5F0]/80">Standard</span>
                    <span className="font-serif text-lg text-[#C9A84C]">$876<span className="text-xs text-[#F5F5F0]/50 ml-1">/mo</span></span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-[#F5F5F0]/80">Growth</span>
                    <span className="font-serif text-lg text-[#C9A84C]">$1,825<span className="text-xs text-[#F5F5F0]/50 ml-1">/mo</span></span>
                  </div>
                </div>
              </div>

              {/* Discovery & Scoping */}
              <div className="bg-[#0A0F1E] border border-white/10 p-8">
                <h4 className="text-lg font-serif text-[#F5F5F0] mb-4">Discovery & Scoping</h4>
                <p className="text-[#F5F5F0]/60 text-sm leading-relaxed mb-6">
                  For complex projects requiring deep architectural planning before a build can be accurately quoted. 
                  This fee is often credited toward the build if you move forward.
                </p>
                <div className="mt-auto">
                  <span className="text-[#3B82F6] font-bold uppercase tracking-widest text-[10px] block mb-2">Project Deposit Range</span>
                  <span className="font-serif text-2xl text-[#C9A84C]">$365 – $1,095</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#3B82F6]/5 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F0] mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-[#F5F5F0]/70 mb-10">We scope every project with a free discovery call. Tell us the problem — we'll tell you what's possible.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 hover:brightness-110 transition-all group"
          >
            Start the Conversation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
