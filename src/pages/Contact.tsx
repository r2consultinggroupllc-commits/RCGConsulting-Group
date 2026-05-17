import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F5F5F0] mb-6 leading-tight">
              Let's Talk.
            </h1>
            <p className="text-xl text-[#F5F5F0]/70 font-sans leading-relaxed mb-6 max-w-lg">
              Whether you're ready to start or just figuring out if we're the right fit — the first conversation is always free.
            </p>
            <p className="text-lg text-[#F5F5F0]/60 font-sans leading-relaxed mb-12 max-w-lg">
              No forms that go nowhere. No sales pipeline you didn't sign up for. You reach out, a real person at Russell Consulting Group responds within one business day, and we schedule a call that's worth your time.
            </p>

            <div className="space-y-8 bg-[#131B2F] border border-white/10 p-8">
              <h3 className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-[10px] mb-6 border-b border-white/10 pb-4">Other Ways to Reach Us</h3>
              
              <div className="flex items-start">
                <div className="text-[#C9A84C] mt-1 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#F5F5F0] font-medium mb-1">Location</h4>
                  <p className="text-[#F5F5F0]/60 text-sm">Monon, Indiana — Serving clients regionally and remotely nationwide</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#C9A84C] mt-1 mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#F5F5F0] font-medium mb-1">Email</h4>
                  <p className="text-[#F5F5F0]/60 text-sm">hello@r2consultinggroup.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#C9A84C] mt-1 mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#F5F5F0] font-medium mb-1">Phone</h4>
                  <p className="text-[#F5F5F0]/60 text-sm">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#C9A84C] mt-1 mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#F5F5F0] font-medium mb-1">Office Hours</h4>
                  <p className="text-[#F5F5F0]/60 text-sm">Monday – Friday, 8am – 6pm CT<br/>Responses within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A0F1E] border border-white/20 p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            <div className="relative z-10">
               <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
