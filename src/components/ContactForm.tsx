import React, { useState } from 'react';
import { submitContact } from '../api/api';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    division: 'General Consulting',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [globalError, setGlobalError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear field error
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError('');
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await submitContact(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', division: 'General Consulting', message: '' });
    } catch (err: any) {
      setGlobalError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#0A0F1E] border border-white/20 p-12 text-center">
        <div className="w-16 h-16 bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif text-[#F5F5F0] mb-4">Message Received</h3>
        <p className="text-[#F5F5F0]/70 text-sm">Thank you for reaching out to Russell Consulting Group. Our team will review your inquiry and get back to you shortly.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-8 px-8 py-3 bg-transparent border border-[#C9A84C] text-[#C9A84C] font-bold uppercase tracking-widest text-[11px] hover:bg-[#C9A84C] hover:text-[#0A0F1E] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {globalError && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {globalError}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-[10px] font-bold text-[#F5F5F0]/60 uppercase tracking-[0.2em] mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-[#0A0F1E] border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-[#C9A84C]'} rounded-none px-4 py-3 text-[#F5F5F0] outline-none transition-colors`}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-red-400 text-[10px] mt-1 uppercase tracking-wider">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-[10px] font-bold text-[#F5F5F0]/60 uppercase tracking-[0.2em] mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-[#0A0F1E] border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-[#C9A84C]'} rounded-none px-4 py-3 text-[#F5F5F0] outline-none transition-colors`}
            placeholder="jane@example.com"
          />
          {errors.email && <p className="text-red-400 text-[10px] mt-1 uppercase tracking-wider">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-[10px] font-bold text-[#F5F5F0]/60 uppercase tracking-[0.2em] mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#0A0F1E] border border-white/20 focus:border-[#C9A84C] rounded-none px-4 py-3 text-[#F5F5F0] outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-[10px] font-bold text-[#F5F5F0]/60 uppercase tracking-[0.2em] mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-[#0A0F1E] border border-white/20 focus:border-[#C9A84C] rounded-none px-4 py-3 text-[#F5F5F0] outline-none transition-colors"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div>
        <label htmlFor="division" className="block text-[10px] font-bold text-[#F5F5F0]/60 uppercase tracking-[0.2em] mb-2">Division of Interest</label>
        <select
          id="division"
          name="division"
          value={formData.division}
          onChange={handleChange}
          className="w-full bg-[#0A0F1E] border border-white/20 focus:border-[#C9A84C] rounded-none px-4 py-3 text-[#F5F5F0] outline-none transition-colors appearance-none"
        >
          <option value="General Consulting">General Consulting</option>
          <option value="Technologies Division">Technologies Division</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] font-bold text-[#F5F5F0]/60 uppercase tracking-[0.2em] mb-2">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-[#0A0F1E] border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-[#C9A84C]'} rounded-none px-4 py-3 text-[#F5F5F0] outline-none transition-colors resize-none`}
          placeholder="How can we help?"
        />
        {errors.message && <p className="text-red-400 text-[10px] mt-1 uppercase tracking-wider">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-8 py-4 bg-[#3B82F6] text-white font-bold uppercase tracking-widest text-[11px] hover:brightness-110 transition-all rounded-none disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
