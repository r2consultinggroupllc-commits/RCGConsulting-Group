import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#0A0F1E] p-10 hover:bg-[#3B82F6]/5 transition-colors duration-300 h-full flex flex-col"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-[#3B82F6] mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-serif text-[#F5F5F0] mb-4 leading-tight">{title}</h3>
        <p className="text-sm text-[#F5F5F0]/50 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <ul className="space-y-2 text-[11px] uppercase tracking-widest text-[#C9A84C] mt-auto">
           <li>• Expert Execution</li>
           <li>• Scalable Results</li>
        </ul>
      </div>
    </motion.div>
  );
}
