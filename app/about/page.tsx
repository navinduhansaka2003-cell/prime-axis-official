// app/about/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, ShieldCheck, Globe2, Award, Users, 
  TrendingUp, Sparkles, ArrowRight, CheckCircle2, Factory,
  Building2, Sparkle, FlaskConical, FileCheck, Anchor
} from 'lucide-react';

const WHATSAPP_NUMBER = "94777537538";

const aboutSlides = [
  {
    src: "/images/about-headquarters.jpg",
    badge: "STRATEGIC GLOBAL MANAGEMENT & OPERATIONS HUB",
    title: "Executive Corporate Headquarters"
  },
  {
    src: "/images/about-quality-lab.jpg",
    badge: "HIGH-TECH QUALITY TESTING LAB",
    title: "100% Pre-Shipment Density & Tensile Testing"
  },
  {
    src: "/images/about-logistics-port.jpg",
    badge: "GLOBAL MARITIME SHIPPING & LOGISTICS",
    title: "Direct Supply Chain Lines to Asia & Sri Lanka"
  }
];

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
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
          <Sparkles className="w-4 h-4 text-sky-600 animate-spin" /> Who We Are
        </motion.span>
        
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Over 15 Years of Industrial Packaging Mastery
        </h1>
        
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Global trade and technical bridge connecting world-class petrochemical refiners with Sri Lanka and Asian industrial markets.
        </p>
      </motion.div>

      {/* 2. Hero Section styled exactly like Home Page slideshow */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> OUR CORE MISSION
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Engineered for Precision & Global Reliability
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded with a vision to streamline complex supply chains, Prime Axis supplies high-purity polymer raw materials (LDPE, LLDPE, HDPE, PP, PET), protective stretch films, industrial BOPP adhesive tapes, and cutting-edge machinery.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Direct alliances with top Petrochemical refineries (SABIC, ExxonMobil, DOW).",
              "100% quality inspection prior to port dispatch.",
              "End-to-end custom packaging and machinery procurement."
            ].map((point, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-2">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent("Hello Prime Axis, I would like to learn more about your company services.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-sky-500/30 transition-all"
            >
              Connect with Our Leadership <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side Image Card with Auto-rotating Slideshow */}
        {/* Right Side Image Card with Auto-rotating Slideshow */}
<motion.div 
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="lg:col-span-6"
>
  <div className="relative overflow-hidden rounded-2xl bg-slate-100 h-80 sm:h-96 flex items-center justify-center shadow-2xl group border border-slate-200">
    <AnimatePresence mode="wait">
      <motion.img 
        key={currentSlide}
        src={aboutSlides[currentSlide].src} 
        alt={aboutSlides[currentSlide].title} 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </AnimatePresence>

    {/* Bright/Light Text Gradient Container at the bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    
    <div className="relative z-10 p-6 text-center text-white space-y-2 mt-auto">
      <span className="text-[10px] font-mono bg-sky-600/90 px-3 py-1 rounded-full uppercase tracking-widest border border-white/20 shadow-md">
        {aboutSlides[currentSlide].badge}
      </span>
      <h3 className="text-xl sm:text-2xl font-black tracking-wide pt-1 drop-shadow-md">
        {aboutSlides[currentSlide].title}
      </h3>
    </div>

    {/* Slider Dots */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {aboutSlides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentSlide(idx)}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentSlide === idx ? "w-6 bg-sky-500" : "w-2 bg-white/70"
          }`}
        />
      ))}
    </div>
  </div>
</motion.div>

      </div>

      {/* 3. Company Statistics & Impact Highlights */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { label: "Years of Industry Mastery", value: "15+", icon: Award },
          { label: "Global Sourcing Hubs", value: "07", icon: Building2 },
          { label: "Annual Polymer Volume", value: "50,000+ MT", icon: TrendingUp },
          { label: "Satisfied Enterprise Clients", value: "500+", icon: Users }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -6, borderColor: "#0284c7" }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg text-center space-y-2 transition-all"
          >
            <div className="w-12 h-12 mx-auto rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <stat.icon className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 font-mono">{stat.value}</h3>
            <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 4. Step-by-Step Global Supply Chain Process */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Supply Chain Mastery
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">How We Guarantee Quality & Efficiency</h2>
          <p className="text-slate-600 text-sm">A rigorous 4-step process from global petrochemical refineries directly to your factory door.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Direct Refinery Sourcing",
              desc: "Direct procurement contracts with tier-1 refineries ensuring virgin grade purity.",
              icon: Factory
            },
            {
              step: "02",
              title: "Rigorous Lab Inspection",
              desc: "Melt Flow Index (MFI) & Tensile Strength testing at our China testing hubs.",
              icon: FlaskConical
            },
            {
              step: "03",
              title: "Hub Warehousing",
              desc: "Safe storage and palletization at Yiwu, Guangzhou, and Tianjin hubs.",
              icon: Building2
            },
            {
              step: "04",
              title: "Customs & Port Logistics",
              desc: "Seamless customs clearance and doorstep container shipping.",
              icon: Anchor
            }
          ].map((proc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, borderColor: "#0284c7" }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4 relative transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-sky-600 font-mono">{proc.step}</span>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                  <proc.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-bold text-base text-slate-900">{proc.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Quality Compliance & Global Standards */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-slate-800 px-3 py-1 rounded-full">
            Certified Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">International Quality Standards & Compliance</h2>
          <p className="text-slate-400 text-xs">All products supplied adhere strictly to worldwide industrial packaging regulations.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { title: "ISO 9001:2015", subtitle: "Quality Management Certified" },
            { title: "FDA Approved", subtitle: "Food Grade Compliance" },
            { title: "REACH & RoHS", subtitle: "Eco & Chemical Safe Standards" },
            { title: "ASTM Certified", subtitle: "High Tensile Film Strength" }
          ].map((cert, idx) => (
            <div key={idx} className="bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl text-center space-y-2">
              <FileCheck className="w-6 h-6 text-sky-400 mx-auto" />
              <h4 className="font-bold text-sm text-white">{cert.title}</h4>
              <p className="text-[10px] text-slate-400">{cert.subtitle}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. Corporate Core Values */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Our Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Built on Trust, Integrity & Innovation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Quality Integrity",
              desc: "100% prime virgin materials verified through lab tests before shipment.",
              icon: ShieldCheck
            },
            {
              title: "Global Agility",
              desc: "Rapid logistics across Yiwu, Guangzhou, Tianjin, and international ports.",
              icon: Globe2
            },
            {
              title: "Technical Expertise",
              desc: "15+ years of guidance on extrusion machinery and polymer grades.",
              icon: Factory
            },
            {
              title: "Sustainable Future",
              desc: "Promoting recyclable PET/PP resins and low-carbon footprint materials.",
              icon: Sparkle
            }
          ].map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{val.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Regional Operational Sourcing Hubs Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 space-y-10 shadow-2xl relative overflow-hidden"
      >
        <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-slate-800 px-3 py-1 rounded-full">
            Regional Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Our Operational Sourcing Hubs</h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Strategically located infrastructure managing factory audits, quality verification, and export logistics.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
          {[
            { city: "Yiwu", role: "Small Commodities" },
            { city: "Guangzhou", role: "Machinery & Polymers" },
            { city: "Tianjin", role: "Export Port" },
            { city: "Beijing", role: "Corporate Sourcing" },
            { city: "Cangzhou", role: "Plastic Moulding" },
            { city: "Taizhou", role: "Precision Tooling" },
            { city: "Linyi", role: "Logistic Hub" }
          ].map((hub, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.08, borderColor: "#38bdf8", backgroundColor: "rgba(30, 41, 59, 0.9)" }}
              className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl text-center space-y-2 transition-all cursor-pointer group"
            >
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-10 h-10 mx-auto rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center"
              >
                <MapPin className="w-5 h-5" />
              </motion.div>
              <h4 className="font-black text-white text-sm group-hover:text-sky-300 transition-colors">{hub.city}</h4>
              <p className="text-[10px] text-slate-400 leading-tight">{hub.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}