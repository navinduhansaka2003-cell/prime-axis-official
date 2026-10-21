// app/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, Sparkles, ArrowRight, MessageSquare, ShieldCheck, 
  Globe2, Truck, Cpu, Layers, Zap, CheckCircle2, Factory,
  Recycle, ShoppingBag, Shirt
} from 'lucide-react';

const WHATSAPP_NUMBER = "94777537538";

// Website Hero Slider eke thiyena Slide data (Image, Title, Subtitle saha WhatsApp link)
const heroSlides = [
  {
    title: "Connecting Global Supply",
    highlight: "To A Sustainable Future",
    desc: "Prime Axis Packaging Technologies provides prime virgin polymer resins, protective industrial stretch films, custom packaging tapes, and high-precision extrusion machinery.",
    badge: "Global Sourcing & Polymer Packaging Hub",
    img: "/images/global-sourcing-hub-1.jpg"
  },
  {
    title: "High-Purity Virgin Polymer",
    highlight: "Raw Material Resins",
    desc: "Sourcing world-class LDPE, LLDPE, HDPE, PP, and PET resins directly from global petrochemical producers.",
    badge: "Polymer Sourcing Excellence",
    img: "/images/global-sourcing-hub-2.jpg"
  },
  {
    title: "Advanced Industrial",
    highlight: "Packaging Machinery",
    desc: "High-precision blown film extruders, automatic bag cutting machines, and automated heavy-duty packaging solutions.",
    badge: "Smart Factory Technologies",
    img: "/images/global-sourcing-hub-3.jpg"
  }
];

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Intro Screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Slide eka thathpara 5 kyn 5 ta kelinma paathata slide vee maru weema
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="space-y-24 pb-20 relative overflow-hidden bg-slate-50">
      
      {/* 1. Ultra-Modern Opening Intro Animation Screen */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden"
          >
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-sky-500/30 to-blue-600/30 rounded-full blur-[140px]" 
              />
            </div>

            <div className="relative z-10 text-center space-y-6">
              <motion.div 
                initial={{ scale: 0.3, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "backOut" }}
                className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-sky-400 via-blue-600 to-indigo-600 p-0.5 shadow-2xl shadow-sky-500/50"
              >
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center border border-white/20">
                  <Box className="w-12 h-12 text-sky-400 animate-pulse" />
                </div>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent uppercase tracking-[0.2em] font-mono"
                >
                  PRIME AXIS
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sky-300/80 font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase"
              >
                Packaging Technologies & Polymer Sourcing
              </motion.p>
            </div>

            <div className="absolute bottom-16 w-56 h-1 bg-slate-800/80 rounded-full overflow-hidden z-10">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.6, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-lg shadow-sky-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full Horizontal Slide Carousel (Kelinma Maru Wena Banner Section) */}
      <section className="relative pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-amber-50/40 shadow-2xl min-h-[460px] sm:min-h-[420px] flex items-center">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="w-full p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Slide Text Content */}
              <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold shadow-sm">
                  <Sparkles className="w-4 h-4 text-sky-600 animate-spin" /> {heroSlides[currentSlide].badge}
                </span>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  {heroSlides[currentSlide].title} <br />
                  <span className="bg-gradient-to-r from-sky-600 to-indigo-800 bg-clip-text text-transparent">
                    {heroSlides[currentSlide].highlight}
                  </span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                  {heroSlides[currentSlide].desc}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                  <a href="/products" className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-800 text-white font-extrabold text-xs shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                    Explore Catalogue <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(`Hello Prime Axis, I need details regarding: ${heroSlides[currentSlide].title}`)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-7 py-3.5 rounded-2xl bg-white text-slate-800 font-extrabold text-xs border shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp Direct Order
                  </a>
                </div>
              </div>

              {/* Slide Image Content */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-64 sm:h-72 w-full">
                  <img 
                    src={heroSlides[currentSlide].img} 
                    alt={heroSlides[currentSlide].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation (Pahala Thiyena Slide Dots Tika) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "w-8 bg-sky-600" 
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Global Petrochemical Brands Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-12 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">Trusted Virgin Resin Producer Alliances</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-80">
            {['SABIC', 'ExxonMobil', 'DOW', 'SINOPEC', 'LOTTE Chemical', 'Indorama', 'LyondellBasell', 'Sumitomo'].map((brand, i) => (
              <span key={i} className="text-slate-700 font-black text-lg md:text-xl tracking-wider hover:text-sky-600 transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Business Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">Business Divisions</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Comprehensive Packaging & Polymer Solutions</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: '01',
              title: 'Polymer Raw Materials',
              desc: 'High-purity virgin resins from top global refineries.',
              items: ['LDPE (Film / Injection / Coating)', 'LLDPE (Butene & Hexene)', 'HDPE (Pipe / Blow / Film)', 'PP & PET Resins'],
              icon: Box,
              img: '/images/polymer-raw-materials.jpg'
            },
            {
              id: '02',
              title: 'Packaging Materials',
              desc: 'Industrial and commercial flexible packaging solutions.',
              items: ['High-tack Stretch Films', 'Polybags & Garment Bags', 'Tamper-Evident Courier Bags', 'Food Cling Film & Foils'],
              icon: Layers,
              img: '/images/packaging-materials.jpg'
            },
            {
              id: '03',
              title: 'Adhesive Tapes',
              desc: 'High-adhesion sealing and specialty technical tapes.',
              items: ['BOPP Packaging Tapes', 'Masking Tapes (Hand Tear)', 'Double-Sided Tapes', 'Fibreglass Filament Tapes'],
              icon: Zap,
              img: '/images/adhesive-tapes.jpg'
            },
            {
              id: '04',
              title: 'Packaging Machinery',
              desc: 'Reliable and energy-efficient machinery lines.',
              items: ['Blown Film Extruders', 'Automatic Bag Cutting Machines', 'Blow Moulding Machines', 'Injection Moulding Lines'],
              icon: Cpu,
              img: '/images/packaging-machinery.jpg'
            }
          ].map((div, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all"
            >
              <div className="space-y-4">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-md bg-slate-100">
                  <img src={div.img} alt={div.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-sky-600 font-mono">{div.id}</span>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                    <div.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{div.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{div.desc}</p>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {div.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(`Hello, I want to inquire about: ${div.title}`)}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-sky-600 transition-colors shadow-md"
              >
                Inquire via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Target Industries Served */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-slate-800 px-3 py-1 rounded-full">Target Sectors</span>
            <h2 className="text-3xl sm:text-5xl font-black">Serving Diverse Global Industries</h2>
            <p className="text-slate-400 text-sm">Engineered protection and raw material solutions across manufacturing and retail sectors.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Garment & Textile', icon: Shirt },
              { name: 'E-Commerce & Logistics', icon: Truck },
              { name: 'Food & Beverage', icon: ShoppingBag },
              { name: 'Retail & Consumer Goods', icon: Factory },
              { name: 'Healthcare & Pharma', icon: ShieldCheck },
              { name: 'Agriculture & Construction', icon: Globe2 }
            ].map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl text-center space-y-3 hover:border-sky-500 transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <ind.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xs text-slate-200">{ind.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. China Sourcing Operations & Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">China Operational Network</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Strategic China Sourcing & Strategic Logistics</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              With over 15 years of operational mastery, our direct hubs in Yiwu, Guangzhou, Tianjin, Beijing, Cangzhou, Taizhou, and Linyi handle strict quality control, warehouse management, and seamless shipping globally.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { title: '100% Quality Inspected', desc: 'Pre-shipment testing' },
                { title: 'Flexible Terms', desc: 'LC, TT, FOB, CIF' },
                { title: 'Global Coverage', desc: 'Asia, Europe, Americas' },
                { title: 'On-Time Logistics', desc: 'Direct shipping channels' }
              ].map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border shadow-sm space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs">{feat.title}</h4>
                  <p className="text-[11px] text-slate-500">{feat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden border shadow-2xl bg-slate-950 h-96 flex items-center justify-center">
              <img 
                src="/images/china-sourcing-hub.jpg" 
                alt="Yiwu & Guangzhou Port Warehousing" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="relative z-10 p-6 text-center text-white">
                <span className="text-xs font-mono bg-sky-600/80 px-3 py-1 rounded-full uppercase tracking-widest border border-sky-400/30">
                  Sourcing Hubs
                </span>
                <h3 className="text-xl font-black mt-2">Yiwu, Guangzhou, Tianjin & Linyi</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Sustainability Commitment */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl max-w-7xl mx-auto p-8 sm:p-14 shadow-2xl relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <Recycle className="w-4 h-4" /> Environmental Responsibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">Protecting Today, Preserving Tomorrow</h2>
            <p className="text-emerald-100/80 text-sm max-w-2xl">
              We promote circular economy materials, recyclable PET/polyethylene resins, and low-carbon supply chain options.
            </p>
          </div>
          <div className="lg:col-span-4 text-center lg:text-right">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent("Hello, I would like to inquire about sustainable/recycled resins.")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-xl transition-all"
            >
              Request Eco-Resin Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}