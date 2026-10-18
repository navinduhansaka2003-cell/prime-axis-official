'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Globe, Recycle, Award, MapPin, Phone, Mail, MessageCircle, Send, Building2, Truck, Sparkles, Star, Compass, TrendingUp, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

const aboutImages = [
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    title: 'Global Sourcing Operations',
    subtitle: 'Yiwu & Guangzhou Supply Chain Hubs'
  },
  {
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    title: 'State-of-the-Art Logistics',
    subtitle: 'Tianjin & Beijing Port Distribution'
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    title: 'Advanced Packaging Machinery',
    subtitle: 'Cangzhou & Taizhou Production Centers'
  }
];

export default function About() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto Slider for About Images (Every 4 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
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
            <Link href="/about" className="text-blue-600 font-bold transition">About Us</Link>
            <Link href="/products" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Products</Link>
            <Link href="/machinery" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Machinery</Link>
            <Link href="/contact" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Contact</Link>
          </nav>
          <div>
            <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-emerald-600/20 transition duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105 border border-emerald-400/30">
              <MessageCircle size={18} className="animate-pulse" /> Quick WhatsApp Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner with Animated Ambient Orbs */}
      <section className="relative text-white py-24 lg:py-32 border-b border-slate-800 overflow-hidden bg-slate-950 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url('${aboutImages[currentImgIndex].url}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80"></div>
        </div>

        {/* Ambient Glow Lights */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-500/20 border border-blue-400/30 px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/10 mb-8 inline-flex items-center gap-2 backdrop-blur-md animate-bounce">
            <Sparkles size={14} className="text-blue-400 animate-spin" /> Who We Are
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            Connecting Global Supply to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">Sustainable Future</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow">
            Prime Axis (Yiwu Bozhou Import & Export Co., Ltd.) is a premier global sourcing and packaging solutions company backed by over 15 years of industry excellence.
          </p>
        </div>
      </section>

      {/* Main Story & Auto-Changing 3D Image Showcase Grid */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Corporate Narrative */}
            <div className="lg:col-span-6">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm">Our Legacy</span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-6 mb-6 tracking-tight leading-tight">
                15+ Years of Trust & Global Supply Chain Expertise
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We bridge high-grade polymer raw materials, finished flexible packaging materials, and advanced industrial machinery from world-class manufacturing plants to markets worldwide.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Headquartered with major operations across Yiwu, Guangzhou, Tianjin, Beijing, Cangzhou, and Taizhou, our strategically placed hubs ensure comprehensive market coverage, meticulous quality inspection, and competitive pricing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 transition duration-300">
                  <div className="p-4 bg-blue-100/80 text-blue-600 rounded-2xl shadow-inner"><Building2 size={28} /></div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-2xl">6+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Strategic Hubs</div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 transition duration-300">
                  <div className="p-4 bg-blue-100/80 text-blue-600 rounded-2xl shadow-inner"><Truck size={28} /></div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-2xl">Worldwide</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Export Coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Auto-Changing 3D Image Showcase Card (Fills Gap Perfectly) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group h-[480px] flex items-end">
                
                {/* Auto Sliding Background Images */}
                {aboutImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                      idx === currentImgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                    style={{ backgroundImage: `url('${img.url}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  </div>
                ))}

                {/* Floating Top Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-slate-950/80 backdrop-blur-md text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Live Sourcing Operations
                  </span>
                </div>

                {/* Bottom Overlay Info Box */}
                <div className="relative z-20 p-8 w-full bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-12">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight transition-all duration-500">
                    {aboutImages[currentImgIndex].title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 flex items-center gap-2 font-medium">
                    <MapPin size={16} className="text-blue-400 shrink-0" />
                    {aboutImages[currentImgIndex].subtitle}
                  </p>

                  {/* Carousel Progress Indicators */}
                  <div className="flex items-center gap-3">
                    {aboutImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImgIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-500 ${
                          idx === currentImgIndex ? 'w-10 bg-blue-500 shadow-md shadow-blue-500/50' : 'w-2.5 bg-white/40'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-100/80 border-t border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm">Guiding Principles</span>
            <h2 className="text-4xl font-black text-slate-900 mt-6 mb-3 tracking-tight">Our Core Values</h2>
            <p className="text-slate-600 text-lg">The pillars that define our commitment to clients and suppliers globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-200/80 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition duration-500 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 shadow-inner transition duration-300 transform group-hover:rotate-6">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Integrity</h3>
                <p className="text-slate-600 text-base leading-relaxed">We conduct business with complete honesty, full transparency, and uncompromising ethical standards.</p>
              </div>
            </div>

            <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-200/80 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition duration-500 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 shadow-inner transition duration-300 transform group-hover:rotate-6">
                  <Globe size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Global Partnerships</h3>
                <p className="text-slate-600 text-base leading-relaxed">We build long-lasting, mutually beneficial relationships with world-class polymer and machinery manufacturers.</p>
              </div>
            </div>

            <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-200/80 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition duration-500 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 shadow-inner transition duration-300 transform group-hover:rotate-6">
                  <Recycle size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Sustainability</h3>
                <p className="text-slate-600 text-base leading-relaxed">Promoting recyclable polymers and energy-efficient packaging machinery for a cleaner, greener planet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-10 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black text-slate-900">Inquire via WhatsApp</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 font-bold text-2xl bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center transition hover:rotate-90 duration-300">✕</button>
            </div>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">Contact our global sourcing team directly for immediate assistance and customized quotes.</p>
            <a 
              href="https://wa.me/94777537538?text=Hello%20Prime%20Axis%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20company%20and%20services." 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30 transition transform hover:scale-105 duration-300"
            >
              <Send size={20} /> Open WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Professional Multi-Column Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Company Info Column */}
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

            {/* Quick Links Column */}
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

            {/* Product Divisions Column */}
            <div>
              <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Business Divisions</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/products" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Polymer Raw Materials</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Packaging Products</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Adhesive & BOPP Tapes</Link></li>
                <li><Link href="/machinery" className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Industrial Machinery</Link></li>
              </ul>
            </div>

            {/* Global Offices & Contact Column */}
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