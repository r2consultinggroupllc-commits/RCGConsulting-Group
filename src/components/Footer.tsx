import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-serif text-[#F5F5F0] mb-4">Russell Consulting Group</h2>
            <p className="text-[#F5F5F0]/60 text-sm mb-6 max-w-sm">
              Results. Relationships. Realized.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-[#F5F5F0] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 border-dashed inline-block">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-[#F5F5F0] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 border-dashed inline-block">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Business Development</Link></li>
              <li><Link to="/services" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Marketing Strategy</Link></li>
              <li><Link to="/services" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Training</Link></li>
              <li><Link to="/services" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Process Implementation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-[#F5F5F0] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 border-dashed inline-block">Technologies</h3>
            <ul className="space-y-4">
              <li><Link to="/technologies" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Software & SaaS</Link></li>
              <li><Link to="/technologies" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">AI & Automation</Link></li>
              <li><Link to="/technologies" className="text-sm text-[#F5F5F0]/60 hover:text-[#C9A84C] transition-colors">Systems Integration</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            &copy; 2025 Russell Consulting Group. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[#F5F5F0]/40">
             <a href="#" className="hover:text-[#3B82F6] transition-colors"><Linkedin className="w-5 h-5" /></a>
             <a href="#" className="hover:text-[#3B82F6] transition-colors"><Twitter className="w-5 h-5" /></a>
             <a href="mailto:hello@r2consultinggroup.com" className="hover:text-[#3B82F6] transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
