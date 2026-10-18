'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, ShieldCheck, Recycle, ArrowRight, Phone, Mail, MapPin, CheckCircle, Factory, Package, Layers, ChevronRight, MessageCircle, Send, ChevronDown, Sparkles, Zap, Award, TrendingUp } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('1 Ton');
  const [clientName, setClientName] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '94777537538';
    const message = encodeURIComponent(`*New Inquiry via Website* %0A%0A*Name:* ${clientName || 'Valued Client'}%0A*Product:* ${selectedProduct}%0A*Quantity:* ${quantity}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  const openQuickOrder = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Dynamic Floating Glow Orbs Background Animations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse duration-1000"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse duration-700"></div>
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
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white font-black text-2xl px-4 py-2 rounded-2xl tracking-wider shadow-lg shadow-blue-500/25 transform hover:scale-105 transition duration-300 border border-blue-400/30">
              PRIME AXIS
            </div>
          </div>
          <nav className="hidden md:flex space-x-10 font-semibold text-sm text-slate-700">
            <Link href="/" className="text-blue-600 font-bold transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">About Us</Link>
            <Link href="/products" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Products</Link>
            <Link href="/machinery" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Machinery</Link>
            <Link href="/contact" className="hover:text-blue-600 transition hover:-translate-y-0.5 duration-200">Contact</Link>
          </nav>
          <div>
            <button onClick={() => openQuickOrder('General Inquiry')} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-emerald-600/20 transition duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105 border border-emerald-400/30">
              <MessageCircle size={18} className="animate-pulse" /> Quick WhatsApp Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Interactive 3D Visual Floating Card */}
      <section className="relative text-white py-24 lg:py-36 overflow-hidden flex items-center min-h-[90vh] z-10">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${img})`, transition: 'opacity 1.2s ease-in-out, transform 7s ease-out' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60"></div>
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs px-6 py-2.5 rounded-full uppercase tracking-widest font-bold mb-8 inline-flex items-center gap-2 backdrop-blur-md shadow-lg shadow-blue-500/10">
              <Sparkles size={14} className="text-blue-400 animate-spin" /> Connecting Global Supply to a Sustainable Future
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.15] drop-shadow-2xl">
              Your Global Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">Packaging Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-12 font-normal leading-relaxed drop-shadow">
              Supplying high-quality polymer raw materials, packaging products, and machinery from trusted global suppliers to markets worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <button onClick={() => openQuickOrder('Polymer Raw Materials')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-9 py-4 rounded-2xl font-bold text-base shadow-2xl shadow-blue-600/50 transition duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-105 border border-blue-400/30">
                Order via WhatsApp <ArrowRight size={20} />
              </button>
              <Link href="/products" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-9 py-4 rounded-2xl font-bold text-base transition duration-300 backdrop-blur-md flex items-center justify-center shadow-xl transform hover:-translate-y-1 hover:scale-105">
                Explore Catalog
              </Link>
            </div>
          </div>

          {/* Right Floating 3D Showcase Card with Pulse Animations */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative bg-gradient-to-b from-white/15 to-white/5 border border-white/20 rounded-[2.5rem] p-8 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] transform hover:rotate-1 hover:scale-[1.03] transition duration-500">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/20 border border-blue-400/30 rounded-2xl text-blue-400 shadow-lg shadow-blue-500/20">
                    <Globe size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base">Global Hubs</h4>
                    <p className="text-xs text-slate-400">Yiwu, Guangzhou, Tianjin, Beijing</p>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Active Sourcing
                </span>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-slate-900/70 border border-white/10 p-4 rounded-2xl flex items-center justify-between transform hover:scale-[1.02] transition duration-300">
                  <div className="flex items-center gap-3">
                    <Zap className="text-amber-400" size={20} />
                    <span className="text-sm font-semibold text-slate-200">Polymer & Raw Materials</span>
                  </div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">High Grade</span>
                </div>

                <div className="bg-slate-900/70 border border-white/10 p-4 rounded-2xl flex items-center justify-between transform hover:scale-[1.02] transition duration-300">
                  <div className="flex items-center gap-3">
                    <Award className="text-emerald-400" size={20} />
                    <span className="text-sm font-semibold text-slate-200">Quality Inspection</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">100% Certified</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><TrendingUp size={16} className="text-blue-400" /> Fast Delivery & Port Support</span>
                <span className="font-bold text-white bg-blue-600/30 px-2.5 py-1 rounded-lg border border-blue-400/30">15+ Yrs</span>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-3 rounded-full transition-all duration-500 ${
                idx === currentImageIndex ? 'w-10 bg-blue-500 shadow-lg shadow-blue-500/80' : 'w-3 bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Modern High-Impact 3D Floating Stats Section */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-gradient-to-r from-blue-900/95 via-blue-700/95 to-indigo-800/95 text-white py-10 px-4 sm:px-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(30,58,138,0.4)] border border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center backdrop-blur-xl">
          
          <div className="p-5 bg-white/10 rounded-2xl border border-white/15 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 flex flex-col justify-center items-center backdrop-blur-md">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 text-blue-200 tracking-tight">15+</div>
            <div className="text-slate-100 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase">Years Experience</div>
          </div>

          <div className="p-5 bg-white/10 rounded-2xl border border-white/15 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 flex flex-col justify-center items-center backdrop-blur-md">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 text-sky-200 tracking-tight">Global</div>
            <div className="text-slate-100 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase">Sourcing Hubs</div>
          </div>

          <div className="p-5 bg-white/10 rounded-2xl border border-white/15 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 flex flex-col justify-center items-center backdrop-blur-md">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 text-emerald-200 tracking-tight">100%</div>
            <div className="text-slate-100 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase">Quality Assured</div>
          </div>

          <div className="p-5 bg-white/10 rounded-2xl border border-white/15 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 flex flex-col justify-center items-center overflow-hidden backdrop-blur-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 text-indigo-200 tracking-tighter w-full leading-none">
              Worldwide
            </div>
            <div className="text-slate-100 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase">Export Network</div>
          </div>

        </div>
      </section>

      {/* Business Divisions Section */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-2 rounded-full shadow-sm">Core Offerings</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-6 mb-4 tracking-tight">Our Business Divisions</h2>
            <p className="text-slate-600 text-lg leading-relaxed">A comprehensive range of polymer raw materials, advanced packaging products, and modern industrial machinery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Polymer Raw Materials', desc: 'LDPE, LLDPE, HDPE, PP, PET Resin & Engineering Plastics from top global producers.', icon: Layers },
              { id: '02', title: 'Packaging Materials', desc: 'Stretch Film, Polybags, Courier Bags, Bubble Wrap, Cling Film & Custom solutions.', icon: Package },
              { id: '03', title: 'Adhesive Tapes', desc: 'BOPP Packaging Tapes, Masking Tapes, Double Sided Tapes & Specialty Tapes.', icon: ShieldCheck },
              { id: '04', title: 'Packaging Machinery', desc: 'Blown Film Extruders, Flexo Printing, Blow & Injection Moulding Machines.', icon: Factory },
            ].map((div, idx) => (
              <div key={idx} className="group bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white p-10 rounded-[2.5rem] border border-slate-200/80 hover:border-slate-800 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex flex-col justify-between transform hover:-translate-y-3 hover:scale-[1.03]">
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-blue-600 group-hover:text-blue-400 font-black text-2xl">{div.id}</span>
                    <div className="p-4 bg-blue-50 group-hover:bg-blue-600 rounded-2xl shadow-md text-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                      <div className="w-6 h-6 flex items-center justify-center font-bold">⚡</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl mb-4 leading-snug">{div.title}</h3>
                  <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed mb-8 text-base">{div.desc}</p>
                </div>
                <button 
                  onClick={() => openQuickOrder(div.title)}
                  className="inline-flex items-center gap-2 text-base font-bold text-blue-600 group-hover:text-blue-400 transition pt-4 border-t border-slate-200 group-hover:border-slate-800 transform group-hover:translate-x-2 duration-300"
                >
                  Order via WhatsApp <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-slate-100/80 border-y border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-100/80 border border-blue-200 px-4 py-2 rounded-full shadow-sm">About Prime Axis</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-6 mb-6 tracking-tight leading-tight">
                15+ Years of Excellence in Global Sourcing & Packaging
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Prime Axis is a global sourcing and packaging solutions company connecting high-quality polymer raw materials, packaging products, and machinery from trusted suppliers to markets worldwide.
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Our operations handled through offices and partners in Yiwu, Guangzhou, Tianjin, Beijing, Cangzhou, and Taizhou enable efficient sourcing, strict quality control, and seamless logistics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-md transform hover:-translate-y-1 transition duration-300">
                  <CheckCircle className="text-emerald-500 shrink-0" size={24} />
                  <span className="font-bold text-slate-800 text-base">Reliable Global Supply</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-md transform hover:-translate-y-1 transition duration-300">
                  <CheckCircle className="text-emerald-500 shrink-0" size={24} />
                  <span className="font-bold text-slate-800 text-base">Consistent Quality</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 sm:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl transform hover:scale-[1.01] transition duration-500">
              <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Our Core Values</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-5 transform hover:translate-x-2 transition duration-300">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm"><ShieldCheck size={28} /></div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Integrity & Ethics</h4>
                    <p className="text-slate-600 text-base leading-relaxed">We conduct business with honesty, transparency, and strong ethics.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 transform hover:translate-x-2 transition duration-300">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm"><Globe size={28} /></div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Global Partnerships</h4>
                    <p className="text-slate-600 text-base leading-relaxed">Working with trusted suppliers and clients worldwide to create mutual growth.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 transform hover:translate-x-2 transition duration-300">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm"><Recycle size={28} /></div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Sustainability</h4>
                    <p className="text-slate-600 text-base leading-relaxed">Promoting environmentally responsible materials for a cleaner, greener future.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest bg-blue-100/80 border border-blue-200/80 px-5 py-2 rounded-full shadow-sm inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              Got Questions?
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">Questions</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Everything you need to know about our global sourcing, custom branding, and supply terms.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { 
                q: 'What are your flexible payment and shipping terms?', 
                a: 'We support flexible global shipping options including FOB, CIF, LC, and TT terms with reliable logistics and efficient customs clearance support.' 
              },
              { 
                q: 'Can we request custom packaging sizes and branding?', 
                a: 'Yes! We offer fully customizable sizing, thickness, and high-definition logo/branding printing for courier bags, polybags, and adhesive tapes.' 
              },
              { 
                q: 'Which global brands do you partner with for raw materials?', 
                a: 'We source high-performance resins and polymers from world-renowned manufacturers including SABIC, ExxonMobil, Lotte, Sinopec, and Indorama.' 
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`group rounded-[2rem] transition-all duration-500 border ${
                    isOpen 
                      ? 'bg-white border-blue-400 shadow-2xl shadow-blue-500/10 scale-[1.02]' 
                      : 'bg-white/80 backdrop-blur-sm border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-8 py-7 text-left font-bold text-slate-900 text-lg flex justify-between items-center gap-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm shrink-0 transition-transform duration-300 group-hover:scale-110">
                        0{idx + 1}
                      </span>
                      <span className="text-slate-900 font-extrabold group-hover:text-blue-600 transition-colors">
                        {faq.q}
                      </span>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen 
                        ? 'bg-blue-600 text-white border-blue-600 rotate-180 shadow-lg shadow-blue-600/30' 
                        : 'bg-slate-100 text-slate-500 border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden px-8">
                      <div className="pt-4 border-t border-slate-100 text-slate-600 text-base leading-relaxed pl-14">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Quick Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-10 shadow-2xl relative animate-in fade-in zoom-in duration-300 border border-slate-100">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">Instant WhatsApp Order</span>
                <h3 className="text-3xl font-black text-slate-900 mt-3 tracking-tight">Request Quote</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 font-bold text-2xl bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center transition hover:rotate-90 duration-300">✕</button>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name / Company</label>
                <input 
                  type="text" 
                  value={clientName} 
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Enter your name" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-blue-600 shadow-inner"
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Selected Product / Division</label>
                <input 
                  type="text" 
                  value={selectedProduct} 
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base font-bold text-blue-600 focus:outline-none shadow-inner"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-blue-600 shadow-inner"
                  required 
                />
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 rounded-2xl transition shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 mt-6 transform hover:scale-105 duration-300">
                <Send size={20} /> Send Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
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
                <li><button onClick={() => openQuickOrder('Polymer Resins')} className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Polymer Raw Materials</button></li>
                <li><button onClick={() => openQuickOrder('Packaging Materials')} className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Packaging Products</button></li>
                <li><button onClick={() => openQuickOrder('Adhesive Tapes')} className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Adhesive & BOPP Tapes</button></li>
                <li><button onClick={() => openQuickOrder('Packaging Machinery')} className="hover:text-blue-400 transition text-left hover:translate-x-1 inline-block duration-200">Industrial Machinery</button></li>
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