import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  challenge: string;
  result: string;
  stat: string;
  statLabel: string;
}

export default function CaseStudyCard({
  title,
  industry,
  challenge,
  result,
  stat,
  statLabel
}: CaseStudyCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col border border-white/20 bg-[#0A0F1E] overflow-hidden hover:bg-[#3B82F6]/5 transition-colors"
    >
      <div className="p-10 flex-grow flex flex-col">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#3B82F6] uppercase mb-4 block">
          {industry}
        </span>
        <h3 className="text-3xl font-serif text-[#F5F5F0] mb-8 leading-tight">{title}</h3>
        
        <div className="space-y-6 mb-12 flex-grow">
          <div>
            <h4 className="text-[10px] text-[#F5F5F0]/50 uppercase tracking-[0.2em] font-bold mb-2">The Challenge</h4>
            <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">{challenge}</p>
          </div>
          <div>
            <h4 className="text-[10px] text-[#F5F5F0]/50 uppercase tracking-[0.2em] font-bold mb-2">The Result</h4>
            <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">{result}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex items-end justify-between mt-auto">
          <div>
            <div className="text-4xl font-serif text-[#C9A84C] mb-1">{stat}</div>
            <div className="text-[10px] font-bold text-[#F5F5F0]/50 uppercase tracking-[0.2em]">{statLabel}</div>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:bg-[#C9A84C] group-hover:text-[#0A0F1E] group-hover:border-transparent transition-all">
             <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
