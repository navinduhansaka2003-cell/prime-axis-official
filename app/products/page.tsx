'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, Send, Search, Filter, Layers, Package, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, ChevronRight, Globe, MapPin, Zap } from 'lucide-react';

const featuredProducts = [
  {
    title: 'Polymer Raw Materials',
    subtitle: 'LDPE, LLDPE, HDPE, PP, PET Resin & Engineering Plastics',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    tag: 'Industrial Grade'
  },
  {
    title: 'High-Stretch Packaging Films',
    subtitle: 'LLDPE Stretch Film, Cling Film & Heavy-Duty Wrapping',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    tag: 'Premium Quality'
  },
  {
    title: 'Custom Printed Courier Bags',
    subtitle: 'High-Strength Polybags & Self-Adhesive Security Mailers',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    tag: 'Custom Branding'
  }
];

const productList = [
  {
    id: 1,
    name: 'Polymer Resins (LDPE / LLDPE / HDPE / PP)',
    category: 'polymers',
    desc: 'High-performance virgin and recycled polymer resins sourced from SABIC, ExxonMobil, Sinopec, Lotte, and Indorama.',
    features: ['Film & Injection Grade', 'Melt Flow Index Optimized', 'Global Producer Certificate'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'LLDPE Stretch Film & Cling Film',
    category: 'packaging',
    desc: 'High-tensile, puncture-resistant hand and machine stretch films designed for industrial pallet wrapping and food wrap.',
    features: ['Up to 300% Pre-stretch', 'Clear / Black Options', 'Custom Thickness (12-30 micron)'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Courier Bags & E-Commerce Mailers',
    category: 'packaging',
    desc: 'Tamper-proof poly mailers with strong self-adhesive peel & seal strips and optional inner bubble lining.',
    features: ['Custom Logo Printing', 'Waterproof & Tear Resistant', 'POD Pocket Options'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'BOPP Packaging Tapes & Specialty Tapes',
    category: 'tapes',
    desc: 'Heavy-duty acrylic and hot-melt BOPP packaging tapes, masking tapes, and double-sided industrial tapes.',
    features: ['Custom Width & Length', 'Company Logo Print Available', 'High Shear Adhesion'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'PET Resin & Bottle Grade Preforms',
    category: 'polymers',
    desc: 'Bottle-grade PET resin with superior clarity and mechanical strength for beverage, food, and pharmaceutical bottles.',
    features: ['Low Acetaldehyde Content', 'Consistent Intrinsic Viscosity', 'FDA Compliant Grade'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Protective Bubble Wrap & Foam Rolls',
    category: 'packaging',
    desc: 'Shock-absorbing air bubble rolls and EPE foam sheets providing ultimate protective cushioning for global shipping.',
    features: ['Anti-Static Variants', 'Multi-Layer Air Retention', 'Custom Sheet Cutting'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProductName, setModalProductName] = useState('');
  const [quantity, setQuantity] = useState('1 Ton');
  const [clientName, setClientName] = useState('');

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const filteredProducts = productList.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openWhatsAppModal = (productName: string) => {
    setModalProductName(productName);
    setIsModalOpen(true);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '94777537538';
    const message = encodeURIComponent(`*Product Quote Inquiry* %0A%0A*Name:* ${clientName || 'Valued Client'}%0A*Product:* ${modalProductName}%0A*Quantity:* ${quantity}`);
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
            <Link href="/products" className="text-blue-600 font-bold transition">Products</Link>
            <Link href="/machinery" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Machinery</Link>
            <Link href="/contact" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Contact</Link>
          </nav>
          <div>
            <button onClick={() => openWhatsAppModal('General Product Catalog Inquiry')} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-emerald-600/20 transition duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105 border border-emerald-400/30">
              <MessageCircle size={18} className="animate-pulse" /> Quick WhatsApp Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header with Auto-Changing Image Banner */}
      <section className="relative text-white py-24 lg:py-32 border-b border-slate-800 overflow-hidden bg-slate-950 flex items-center">
        
        {/* Background Image Carousel */}
        {featuredProducts.map((prod, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${prod.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80"></div>
          </div>
        ))}

        {/* Ambient Lights */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="text-blue-300 text-xs font-bold uppercase tracking-widest bg-blue-500/20 border border-blue-400/30 px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/10 mb-8 inline-flex items-center gap-2 backdrop-blur-md animate-bounce">
            <Sparkles size={14} className="text-blue-400 animate-spin" /> Premium Product Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-2xl">
            Polymer Resins & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">Packaging Materials</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow mb-8">
            Factory-direct raw polymers, custom packaging films, and adhesive tapes engineered for global industrial performance.
          </p>

          {/* Active Banner Slide Caption */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full text-sm font-semibold text-blue-200 shadow-xl">
            <Zap size={16} className="text-amber-400" />
            <span>Featured: {featuredProducts[currentSlide].title}</span>
          </div>
        </div>
      </section>

      {/* Product Filter & Search Bar */}
      <section className="py-12 bg-white border-b border-slate-200 sticky top-20 z-40 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'polymers', label: 'Polymer Resins' },
              { id: 'packaging', label: 'Packaging Films & Mailers' },
              { id: 'tapes', label: 'Adhesive Tapes' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-600 transition shadow-inner"
            />
          </div>

        </div>
      </section>

      {/* Product Grid with 3D Hover Tilt Cards */}
      <section className="py-24 bg-slate-50/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500 text-sm">Try searching for something else or change the category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="group bg-white rounded-[2.5rem] border border-slate-200/80 overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] transform hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image Box */}
                    <div className="relative h-64 overflow-hidden bg-slate-900">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-blue-400 border border-blue-400/30 text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                        {prod.category}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-8">
                      <h3 className="font-extrabold text-2xl text-slate-900 mb-3 group-hover:text-blue-600 transition">
                        {prod.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {prod.desc}
                      </p>

                      {/* Feature Bullets */}
                      <ul className="space-y-2 mb-8">
                        {prod.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Order Action Button */}
                  <div className="p-8 pt-0">
                    <button
                      onClick={() => openWhatsAppModal(prod.name)}
                      className="w-full bg-slate-900 group-hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 group-hover:shadow-blue-600/30 transform group-hover:scale-[1.02]"
                    >
                      <MessageCircle size={18} /> Request WhatsApp Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* WhatsApp Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-10 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Instant WhatsApp Order</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Request Quote</h3>
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Selected Product</label>
                <input
                  type="text"
                  value={modalProductName}
                  onChange={(e) => setModalProductName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-bold text-blue-600 focus:outline-none shadow-inner"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Estimated Quantity / Requirements</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 5 Tons / 1000 Rolls"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-blue-600 shadow-inner"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-2xl transition shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 mt-4 transform hover:scale-105 duration-300">
                <Send size={18} /> Send Order via WhatsApp
              </button>
            </form>
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
                <li><button onClick={() => openWhatsAppModal('Polymer Resins')} className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Polymer Raw Materials</button></li>
                <li><button onClick={() => openWhatsAppModal('Packaging Materials')} className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Packaging Products</button></li>
                <li><button onClick={() => openWhatsAppModal('Adhesive Tapes')} className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Adhesive & BOPP Tapes</button></li>
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