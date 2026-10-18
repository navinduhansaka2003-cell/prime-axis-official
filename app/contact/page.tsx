'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, Send, MapPin, Globe, Sparkles, Building2, Clock, CheckCircle2, Zap, ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';

const contactBanners = [
  {
    title: 'Global Sourcing Headquarters',
    subtitle: 'Connecting Worldwide Markets from Yiwu & Guangzhou, China',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: '24/7 Global Logistics & Trade Support',
    subtitle: 'Tianjin, Beijing, Cangzhou & Taizhou Port Distribution',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop',
  }
];

const globalOffices = [
  {
    city: 'Yiwu & Guangzhou',
    role: 'Global Sourcing & Polymer Hub',
    desc: 'Main operations handling virgin resin sourcing, custom polybags, and export documentation.',
    address: 'Zhejiang Province, China',
    phone: '+94 77 753 7538'
  },
  {
    city: 'Tianjin & Beijing',
    role: 'Industrial Machinery & Logistics',
    desc: 'Coordinating heavy packaging machinery manufacturing, quality control, and seaport shipping.',
    address: 'Northern China Trade Center',
    phone: '+94 77 753 7538'
  },
  {
    city: 'Cangzhou & Taizhou',
    role: 'Packaging & Film Production',
    desc: 'Direct manufacturing oversight for stretch films, BOPP tapes, and custom printed courier mailers.',
    address: 'Industrial Processing Zone',
    phone: '+94 77 753 7538'
  }
];

export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto Slider for Hero Banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contactBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '94777537538';
    const whatsappMsg = encodeURIComponent(`*Website Detailed Inquiry* %0A%0A*Name:* ${clientName}%0A*Email:* ${clientEmail}%0A*Subject:* ${subject}%0A*Message:* ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMsg}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Glowing Ambient Background Animations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute top-[50%] right-[5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse duration-1000"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] animate-pulse duration-700"></div>
      </div>

      {/* Top Bar Info */}
      <div className="bg-slate-950/95 text-slate-300 text-xs py-3 px-6 sm:px-12 border-b border-slate-800/80 hidden md:flex justify-between items-center tracking-wide relative z-20 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer"><Phone size={14} className="text-blue-500 animate-pulse" /> +94 77 753 7538</span>
          <span className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer"><Mail size={14} className="text-blue-500" /> info@primeaxis.com</span>
        </div>
        <div>
          <span className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-blue-400 border border-blue-500/40 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">Global Sourcing Hub</span>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white font-black text-2xl px-4 py-2 rounded-2xl tracking-wider shadow-lg shadow-blue-500/25 transform hover:scale-105 transition duration-300 border border-blue-400/30">
              PRIME AXIS
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10 font-semibold text-sm text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">About Us</Link>
            <Link href="/products" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Products</Link>
            <Link href="/machinery" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Machinery</Link>
            <Link href="/contact" className="text-blue-600 font-bold transition">Contact</Link>
          </nav>
          <div>
            <a href="https://wa.me/94777537538" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-emerald-600/20 transition duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105 border border-emerald-400/30">
              <MessageCircle size={18} className="animate-pulse" /> Quick WhatsApp Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner with Auto-Changing Image Banner */}
      <section className="relative text-white py-28 lg:py-36 border-b border-slate-800 overflow-hidden bg-slate-950 flex items-center z-10">
        {contactBanners.map((banner, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${banner.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80"></div>
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-500/20 border border-blue-400/30 px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/10 mb-8 inline-flex items-center gap-2 backdrop-blur-md animate-bounce">
            <Sparkles size={14} className="text-blue-400 animate-spin" /> Get in Touch With Us
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            Let's Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">Global Partnership</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow mb-8">
            Reach out directly to our international trade desks for polymer supply contracts, custom packaging manufacturing, and industrial machinery inquiries.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full text-sm font-semibold text-blue-200 shadow-xl">
            <Zap size={16} className="text-amber-400" />
            <span>{contactBanners[currentSlide].title}</span>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Direct Info Section */}
      <section className="py-28 bg-slate-50/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Big Detailed Contact Form */}
            <div className="lg:col-span-7 bg-white p-10 sm:p-14 rounded-[2.5rem] border border-slate-200/80 shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="mb-10">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">Instant WhatsApp Desk</span>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">Send a Direct Inquiry</h3>
                <p className="text-slate-600 text-base mt-2">Fill in your specifications to connect immediately with our executive trade team.</p>
              </div>

              {isSubmitted && (
                <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 size={24} className="shrink-0 text-emerald-600" />
                  <span className="font-bold text-sm">Redirecting to WhatsApp with your details! Our team will reply shortly.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name / Company *</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-blue-600 shadow-inner transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-blue-600 shadow-inner transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Subject / Division *</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Bulk LDPE Resin Order / Machinery Quote"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-blue-600 shadow-inner transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Detailed Specifications & Quantity *</label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention desired tonnage, packaging dimensions, destination port, or specific machinery model..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-blue-600 shadow-inner transition resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-lg py-4 rounded-2xl transition shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 transform hover:scale-[1.02] duration-300"
                >
                  <Send size={20} /> Submit & Open WhatsApp Chat
                </button>
              </form>
            </div>

            {/* Right Column: Quick Contact & Direct Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 p-8 sm:p-10 rounded-[2.5rem] text-white shadow-2xl relative border border-blue-800/50 transform hover:scale-[1.02] transition duration-500">
                <h3 className="text-2xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  Direct Support Desk
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><Phone size={24} /></div>
                    <div>
                      <div className="text-xs text-slate-300 uppercase font-bold">WhatsApp / Direct Line</div>
                      <div className="font-black text-white text-base">+94 77 753 7538</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><Mail size={24} /></div>
                    <div>
                      <div className="text-xs text-slate-300 uppercase font-bold">Official Email</div>
                      <div className="font-black text-white text-base">info@primeaxis.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><Clock size={24} /></div>
                    <div>
                      <div className="text-xs text-slate-300 uppercase font-bold">Working Hours</div>
                      <div className="font-black text-white text-base">Mon - Sat: 8:30 AM - 6:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200/80 shadow-xl space-y-6 transform hover:scale-[1.02] transition duration-500">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Global Hub Coverage</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our strategic offices across China ensure prompt communication, efficient material procurement, and rigorous quality audits.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Yiwu', 'Guangzhou', 'Tianjin', 'Beijing', 'Cangzhou', 'Taizhou'].map((hub, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm">
                      {hub} Hub
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global Offices Detailed Grid Section */}
      <section className="py-24 bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm">Worldwide Presence</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-6 mb-4 tracking-tight">Our Global Operations Hubs</h2>
            <p className="text-slate-600 text-lg">Strategically located across major manufacturing and port centers in China.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalOffices.map((office, idx) => (
              <div key={idx} className="group bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white p-10 rounded-[2.5rem] border border-slate-200/80 hover:border-slate-800 transition-all duration-500 shadow-xl flex flex-col justify-between transform hover:-translate-y-3">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="p-3 bg-blue-100 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-2xl shadow-md transition duration-300">
                      <Building2 size={28} />
                    </span>
                    <span className="text-xs font-bold text-blue-600 group-hover:text-blue-400 uppercase tracking-widest">Active Hub</span>
                  </div>
                  <h3 className="font-black text-2xl mb-2">{office.city}</h3>
                  <div className="text-sm font-bold text-blue-600 group-hover:text-blue-300 mb-4">{office.role}</div>
                  <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed mb-6">{office.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 group-hover:border-slate-800 text-xs font-bold text-slate-500 group-hover:text-slate-400 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" /> {office.address}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Multi-Column Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xl px-4 py-2 rounded-xl inline-block tracking-wider mb-6 shadow-md border border-blue-400/30">
                PRIME AXIS
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Connecting global supply to a sustainable future with premium packaging products, polymer raw materials, and modern machinery.
              </p>
              <div className="text-xs text-slate-500 font-medium">
                Yiwu Bozhou Import & Export Co., Ltd.
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/" className="hover:text-blue-400 transition hover:translate-x-1 inline-block duration-200">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition hover:translate-x-1 inline-block duration-200">About Us</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition hover:translate-x-1 inline-block duration-200">Products Catalog</Link></li>
                <li><Link href="/machinery" className="hover:text-blue-400 transition hover:translate-x-1 inline-block duration-200">Packaging Machinery</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition hover:translate-x-1 inline-block duration-200">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Business Divisions</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/products" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Polymer Raw Materials</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Packaging Products</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Adhesive & BOPP Tapes</Link></li>
                <li><Link href="/machinery" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Industrial Machinery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-500 shrink-0" />
                  <span>+94 77 753 7538</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500 shrink-0" />
                  <span>info@primeaxis.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                  <span>Global Operations in Yiwu, Guangzhou, Tianjin & Beijing</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2026 Prime Axis Packaging Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-400 transition cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 transition cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}