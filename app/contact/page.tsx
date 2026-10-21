// app/contact/page.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MapPin, Sparkles, Send, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "94777537538";
const WHATSAPP_DISPLAY = "+94 77 753 7538";
const COMPANY_EMAIL = "info@primeaxis.com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', materialCategory: 'Polymer Resins', quantity: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const formattedMessage = 
      `*NEW PRIME AXIS WEBSITE INQUIRY*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Category:* ${formData.materialCategory}\n` +
      `*Quantity Required:* ${formData.quantity}\n\n` +
      `*Message:* ${formData.message}`;

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(formattedMessage), '_blank');
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 overflow-hidden">
      
      {/* 1. Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-sky-600 animate-spin" /> Get In Touch
        </motion.span>
        
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Contact Our Technical Team
        </h1>
        
        <p className="text-slate-600 text-base sm:text-lg">
          Request instant quotations, custom material specifications, or machinery consults.
        </p>
      </motion.div>

      {/* 2. Top Banner Showcase (Bright & Clean Design) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200 group"
      >
        <img 
          src="/images/contact-hero-banner.jpg" 
          alt="Prime Axis Global Contact Center" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Subtle Light Gradient overlay just for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
          <span className="text-[10px] font-mono bg-sky-600/90 text-white px-3 py-1 rounded-md uppercase tracking-wider border border-white/20 shadow-sm inline-block">
            Global Communication Hub
          </span>
          <h3 className="text-2xl font-black tracking-tight drop-shadow-md">Connected 24/7 Across Asia & International Markets</h3>
        </div>
      </motion.div>

      {/* 3. Form & Direct Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Interactive WhatsApp Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
            <h3 className="text-2xl font-black text-slate-900">Instant WhatsApp Quote Generator</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-900" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Company Name</label>
                  <input 
                    type="text" 
                    value={formData.company} 
                    onChange={e => setFormData({...formData, company: e.target.value})} 
                    placeholder="Packaging Tech Ltd" 
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-900" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    placeholder="john@company.com" 
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-900" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone / WhatsApp Number *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                    placeholder="+94 77 XXX XXXX" 
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-900" 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Product Category</label>
                <select 
                  value={formData.materialCategory} 
                  onChange={e => setFormData({...formData, materialCategory: e.target.value})} 
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-900"
                >
                  <option>Polymer Raw Resins (LDPE, HDPE, PP, PET)</option>
                  <option>Packaging Stretch Films & Cling Films</option>
                  <option>BOPP & Industrial Adhesive Tapes</option>
                  <option>Blown Film Extruders & Machinery</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Detailed Inquiry Notes</label>
                <textarea 
                  rows={4} 
                  value={formData.message} 
                  onChange={e => setFormData({...formData, message: e.target.value})} 
                  placeholder="Mention specific MFI grade or target price..." 
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-900" 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all cursor-pointer"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 animate-bounce" /> Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5" /> Submit & Open WhatsApp Direct <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Right: Direct Contact Details & Image Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900">Direct Contact Information</h3>
            
            <div className="space-y-5">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 shadow-sm border border-sky-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Hotline & WhatsApp</span>
                  <a href={`tel:${WHATSAPP_NUMBER}`} className="font-extrabold text-slate-900 text-base hover:text-sky-600 transition-colors">
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Official Email</span>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="font-extrabold text-slate-900 text-base hover:text-sky-600 transition-colors">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm border border-indigo-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Operational Logistics</span>
                  <p className="font-extrabold text-slate-900 text-sm">Sri Lanka & China Trade Network</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Customer Service Banner Image (Bright & Clean Layout) */}
          <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-xl overflow-hidden group">
            <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="/images/customer-support.jpg" 
                alt="Customer Service Center" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-mono bg-sky-600/90 text-white px-3 py-1 rounded-md uppercase tracking-wider border border-white/20 shadow-sm inline-block">
                  24/7 Support
                </span>
                <h4 className="text-base font-black mt-1.5 drop-shadow-md">Dedicated Customer Service Center</h4>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}