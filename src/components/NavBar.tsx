import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-[#0A0F1E]/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/5 py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C9A84C] rounded-sm flex items-center justify-center font-serif text-lg sm:text-xl font-black tracking-tight text-[#0A0F1E] shrink-0">RCG</div>
          <div className="leading-none flex flex-col justify-center">
            <div className="text-[13px] sm:text-lg font-bold tracking-tight uppercase text-[#F5F5F0]"><span className="text-[#C9A84C]">Russell</span> Consulting Group</div>
            <div className="text-[8px] sm:text-[10px] text-[#C9A84C] tracking-[0.2em] font-bold mt-1">BUSINESS & TECHNOLOGIES</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
          <Link to="/about" className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors">
            About
          </Link>
          <Link to="/services" className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors">
            Services
          </Link>
          <Link to="/technologies" className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors">
            Technologies
          </Link>
          <Link to="/case-studies" className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors">
            Case Studies
          </Link>
          <Link to="/contact" className="px-5 py-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0F1E] text-xs transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#F5F5F0]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-[#0A0F1E] z-40 transform transition-transform duration-300 md:hidden pt-24 px-6 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-lg pb-10">
          <Link to="/about" className="text-[#F5F5F0] font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/services" className="text-[#F5F5F0] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/technologies" className="text-[#F5F5F0] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Technologies</Link>
          <Link to="/case-studies" className="text-[#F5F5F0] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
          <Link to="/contact" className="bg-[#C9A84C] text-[#0A0F1E] px-6 py-3 rounded-lg font-medium text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
