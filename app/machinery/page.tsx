'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, Send, Factory, Cpu, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, ChevronRight, Globe, MapPin, Zap } from 'lucide-react';

const machineryBanners = [
  {
    title: 'Advanced Blown Film Extruders',
    subtitle: 'High-Efficiency Multi-Layer Plastic Film Extrusion Lines',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    tag: 'Industrial Grade'
  },
  {
    title: 'Flexographic Printing Machines',
    subtitle: 'High-Speed Precision Printing for Packaging & Films',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    tag: 'High Precision'
  },
  {
    title: 'Injection & Blow Moulding Systems',
    subtitle: 'Automated Bottle, Cap & Container Production Plants',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    tag: 'Heavy Duty'
  }
];

const machineryList = [
  {
    id: 1,
    name: 'ABA / AB Three-Layer Film Blowing Machine',
    category: 'Extrusion',
    desc: 'Designed for producing high-strength shopping bags, courier mailers, and agricultural films with optimized raw material cost savings.',
    specs: ['Output: 80-250 kg/h', 'Screw Diameter: 45mm - 75mm', 'Energy Efficient Inverter Drive'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'High-Speed Central Impression Flexo Printer',
    category: 'Printing',
    desc: 'Advanced CI flexographic printing press delivering crystal-clear multi-color printing on PE, PP, BOPP, and paper substrates.',
    specs: ['Printing Speed: Up to 150m/min', 'Register Accuracy: ±0.1mm', 'Automatic Tension Control'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Fully Automatic Blow Moulding Machine',
    category: 'Moulding',
    desc: 'Specialized machinery for manufacturing HDPE/PET bottles, jerry cans, and jars ranging from 50ml to 20L capacity.',
    specs: ['PLC Touch Screen Control', 'High Hydraulic Precision', 'Low Power Consumption'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'High-Speed Bag Making & Cutting Machine',
    category: 'Converting',
    desc: 'Versatile converting machine for producing t-shirt bags, flat bags, courier courier bags, and garbage bags with automatic stacking.',
    specs: ['Servo Motor Drive', 'Photocell Eye Tracking', 'Automatic Punching Unit'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Plastic Recycling & Pelletizing Line',
    category: 'Recycling',
    desc: 'Heavy-duty shredding, washing, and pelletizing extrusion lines designed to convert waste plastic films into high-quality reusable pellets.',
    specs: ['Capacity: 100 - 500 kg/h', 'Degassing Extruder System', 'Automatic Strand Pelletizer'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Stretch Film & Cling Film Extruder Line',
    category: 'Extrusion',
    desc: 'Cast film extrusion line engineered to produce high-clarity stretch wrap and food-grade PE cling film rolls.',
    specs: ['Film Width: 1000mm - 2000mm', 'Multi-Layer Co-extrusion', 'Automatic Roll Changing'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Machinery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState('');
  const [quantity, setQuantity] = useState('1 Unit');
  const [clientName, setClientName] = useState('');

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % machineryBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const openWhatsAppModal = (machineName: string) => {
    setSelectedMachine(machineName);
    setIsModalOpen(true);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '94777537538';
    const message = encodeURIComponent(`*Machinery Inquiry via Website* %0A%0A*Name:* ${clientName || 'Valued Client'}%0A*Machine:* ${selectedMachine}%0A*Quantity:* ${quantity}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

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
            <Link href="/about" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">About Us</Link>
            <Link href="/products" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Products</Link>
            <Link href="/machinery" className="text-blue-600 font-bold transition">Machinery</Link>
            <Link href="/contact" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Contact</Link>
          </nav>
          <div>
            <button onClick={() => openWhatsAppModal('General Machinery Catalog Inquiry')} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-emerald-600/20 transition duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105 border border-emerald-400/30">
              <MessageCircle size={18} className="animate-pulse" /> Quick WhatsApp Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header with Auto-Changing Image Banner */}
      <section className="relative text-white py-24 lg:py-32 border-b border-slate-800 overflow-hidden bg-slate-950 flex items-center">
        
        {machineryBanners.map((banner, idx) => (
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

        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-500/20 border border-blue-400/30 px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/10 mb-8 inline-flex items-center gap-2 backdrop-blur-md animate-bounce">
            <Sparkles size={14} className="text-blue-400 animate-spin" /> Industrial Equipment Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            Modern Packaging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">Machinery & Plants</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow mb-8">
            High-performance film extruders, flexo printers, and blow moulding lines sourced from certified industrial manufacturers.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full text-sm font-semibold text-blue-200 shadow-xl">
            <Zap size={16} className="text-amber-400" />
            <span>Featured: {machineryBanners[currentSlide].title}</span>
          </div>
        </div>
      </section>

      {/* Machinery Grid Section */}
      <section className="py-24 bg-slate-50/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm">Advanced Systems</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-6 mb-4 tracking-tight">Our Machinery Division</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Turnkey industrial solutions for polymer processing, printing, and bag converting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineryList.map((mach) => (
              <div
                key={mach.id}
                className="group bg-white rounded-[2.5rem] border border-slate-200/80 overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] transform hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={mach.image}
                      alt={mach.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-blue-400 border border-blue-400/30 text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                      {mach.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-extrabold text-2xl text-slate-900 mb-3 group-hover:text-blue-600 transition">
                      {mach.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {mach.desc}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {mach.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button
                    onClick={() => openWhatsAppModal(mach.name)}
                    className="w-full bg-slate-900 group-hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 group-hover:shadow-blue-600/30 transform group-hover:scale-[1.02]"
                  >
                    <MessageCircle size={18} /> Request Machine Quotation
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WhatsApp Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-10 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Instant WhatsApp Inquiry</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Request Machine Quote</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 font-bold text-2xl bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center transition hover:rotate-90 duration-300">✕</button>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name / Company</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-blue-600 shadow-inner"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Selected Machinery</label>
                <input
                  type="text"
                  value={selectedMachine}
                  onChange={(e) => setSelectedMachine(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-bold text-blue-600 focus:outline-none shadow-inner"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Required Quantity / Units</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 1 Line / 2 Units"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-blue-600 shadow-inner"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-2xl transition shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 mt-4 transform hover:scale-105 duration-300">
                <Send size={18} /> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

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