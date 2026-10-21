// app/sourcing/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sparkles, Globe2, ShieldCheck, Truck, Anchor, FileCheck, Layers, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "94777537538";

const sourcingSlideshowImages = [
  {
    src: "/images/sourcing-global-hub.jpg",
    title: "Global Sourcing & Supply Chain Terminal",
    subtitle: "CONNECTING WORLDWIDE PETROCHEMICAL REFINERIES"
  },
  {
    src: "/images/sourcing-logistics-port.jpg",
    title: "International Shipping Operations",
    subtitle: "DIRECT EXPORT CHANNELS TO ASIA & SRI LANKA"
  },
  {
    src: "/images/sourcing-warehouse.jpg",
    title: "Automated Polymer Storage Warehousing",
    subtitle: "100% QUALITY INSPECTED MATERIAL STORAGE"
  }
];

export default function SourcingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sourcingSlideshowImages.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 overflow-hidden">
      
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
          <Sparkles className="w-4 h-4 text-sky-600 animate-spin" /> Supply Chain Mastery
        </motion.span>
        
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Global Petrochemical Sourcing Network
        </h1>
        
        <p className="text-slate-600 text-base sm:text-lg">
          Streamlined end-to-end procurement process bridging global chemical producers with factory floors worldwide.
        </p>
      </motion.div>

      {/* 2. Main Outer White Card Container (Matching Image Exact UI) */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Details */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> STRATEGIC PROCUREMENT
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            From Global Sources To Your Doorstep
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            With a wide network of global manufacturers across China, USA, Europe, South Korea, Japan, Singapore, Middle East, and Malaysia, Prime Axis ensures competitive pricing, flexible terms, and efficient shipping solutions.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { title: "Wide Global Network", desc: "Access to leading polymer producers" },
              { title: "Flexible Terms", desc: "LC, TT, FOB, CIF options available" },
              { title: "Consistent Quality", desc: "Pre-shipment testing & strict specs" },
              { title: "On-Time Logistics", desc: "Reliable direct shipping channels" }
            ].map((feat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">{feat.title}</h4>
                <p className="text-[11px] text-slate-500">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent("Hello Prime Axis, I need details regarding global sourcing options.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
            >
              Request Sourcing Quote <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side Rounded Image Slider (Exact UI Badge & Dots) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <div className="relative overflow-hidden rounded-2xl bg-slate-950 h-80 sm:h-96 flex items-center justify-center shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={sourcingSlideshowImages[currentSlide].src} 
                alt={sourcingSlideshowImages[currentSlide].title} 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </AnimatePresence>

            {/* Bottom Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            {/* Overlay Content */}
            <div className="relative z-10 p-6 text-center text-white space-y-2 mt-auto">
              <span className="text-[10px] font-mono bg-sky-500/90 text-white px-3 py-1 rounded-md uppercase tracking-wider border border-white/20 shadow-sm inline-block">
                {sourcingSlideshowImages[currentSlide].subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-md">
                {sourcingSlideshowImages[currentSlide].title}
              </h3>
            </div>

            {/* Dots Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {sourcingSlideshowImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-6 bg-sky-400" : "w-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Global Sourcing Regions Section */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            International Reach
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Our Worldwide Sourcing Regions</h2>
          <p className="text-slate-600 text-sm">Sourcing premium grades and specialized polymer materials from key industrial territories.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { tag: "HUB-01", region: "China (Main Operations)", desc: "Polyethylene, PP, PET Resins, Tapes & Machinery" },
            { tag: "NORTH AMERICA & EU", region: "USA & Europe", desc: "Premium Polymer Grades, Additives & Masterbatches" },
            { tag: "EAST ASIA", region: "South Korea & Japan", desc: "High-Performance Resins & Specialty Films" },
            { tag: "SOUTHEAST ASIA", region: "Singapore & Malaysia", desc: "PET Resins, rPET, Specialty Polymers & Equipment" },
            { tag: "MIDDLE EAST", region: "Middle East", desc: "Polyethylene Resins, PP Resins & Strategic Routes" }
          ].map((reg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -6, boxShadow: "0px 20px 30px rgba(2, 132, 199, 0.1)" }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-3 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-[10px] font-bold font-mono tracking-wider border border-sky-100">
                  {reg.tag}
                </span>
                <Globe2 className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-sky-600 transition-colors">
                {reg.region}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {reg.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. 6-Step Sourcing Process Flow */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Workflow Process
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">From Global Sources to Your Business</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { step: "01", title: "Sourcing", desc: "Trusted global manufacturers", icon: Globe2 },
            { step: "02", title: "Pricing", desc: "Competitive pricing & flexible terms", icon: FileCheck },
            { step: "03", title: "Shipping", desc: "Reliable logistics & shipping", icon: Truck },
            { step: "04", title: "Customs", desc: "Efficient clearance support", icon: ShieldCheck },
            { step: "05", title: "Inventory", desc: "Quality inspection & supply", icon: Layers },
            { step: "06", title: "Delivery", desc: "Timely delivery to business", icon: Anchor }
          ].map((proc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "#0284c7" }}
              className="bg-white p-5 rounded-3xl border border-slate-200 shadow-lg space-y-3 text-center transition-all"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <proc.icon className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-sky-600 font-mono">{proc.step}</span>
              <h4 className="font-bold text-slate-900 text-sm">{proc.title}</h4>
              <p className="text-[11px] text-slate-500 leading-tight">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Petrochemical Brands & Global Network */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-10 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-slate-800 px-3 py-1 rounded-full">
            Petrochemical Alliances
          </span>
          <h2 className="text-3xl font-extrabold">Virgin Resins From Industry Leaders</h2>
          <p className="text-slate-400 text-xs">Working with world-class polymer refiners and chemical producers.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {['SABIC', 'ExxonMobil', 'DOW Chemical', 'Sinopec', 'Lotte Chemical', 'Indorama'].map((brand, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.05, borderColor: "#38bdf8" }}
              className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col items-center justify-center text-center transition-all cursor-pointer group"
            >
              <Building2 className="w-8 h-8 text-sky-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-extrabold text-sm text-white">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}