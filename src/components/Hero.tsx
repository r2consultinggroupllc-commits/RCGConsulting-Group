import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  headline: string;
  subheadline: string;
  eyebrow?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showGrid?: boolean;
}

export default function Hero({ 
  headline, 
  subheadline, 
  eyebrow,
  ctaText = "Start a Conversation", 
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
  showGrid = true
}: HeroProps) {
  return (
    <div className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center bg-[#3B82F6]/10 overflow-hidden" style={{ clipPath: showGrid ? 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' : 'none' }}>
      {/* Background Texture Layers */}
      {showGrid && (
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C9A84C] font-medium tracking-[0.3em] uppercase text-xs mb-4"
            >
              {eyebrow}
            </motion.h2>
          )}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F5F5F0] leading-[1.1] md:leading-[0.9] tracking-tight mb-8"
          >
            {headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-[#F5F5F0]/70 font-sans font-light leading-relaxed mb-10 md:mb-12 max-w-2xl"
          >
            {subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to={ctaLink} 
              className="inline-flex items-center justify-center bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3 hover:brightness-110 transition-all group"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                to={secondaryCtaLink} 
                className="inline-flex items-center justify-center px-8 py-3 border border-[#C9A84C] text-[#C9A84C] font-bold uppercase tracking-widest text-[11px] hover:bg-[#C9A84C] hover:text-[#0A0F1E] transition-colors"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
