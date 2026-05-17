import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function TechDivisionBanner() {
  return (
    <div className="border-y border-white/10 bg-[#3B82F6]/5 flex items-stretch">
      <div className="flex-1 p-12">
        <div className="flex items-center space-x-3 mb-6">
          <Code2 className="text-[#3B82F6] w-6 h-6" />
          <span className="uppercase tracking-[0.2em] font-bold text-[#3B82F6] text-[10px]">Russell Technologies Division</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#F5F5F0] leading-[0.9] mb-4">
          Where Strategy <br/>Meets <span className="italic text-[#3B82F6]">Stack.</span>
        </h2>
        <p className="text-[#F5F5F0]/60 text-sm leading-relaxed mb-8 max-w-xl">
          We don't just advise—we build. From custom SaaS applications and enterprise integrations to AI-driven workflows.
        </p>
        <Link 
          to="/technologies" 
          className="inline-block bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 hover:brightness-110 transition-all border border-transparent"
        >
          Explore Technologies
        </Link>
      </div>
    </div>
  );
}
