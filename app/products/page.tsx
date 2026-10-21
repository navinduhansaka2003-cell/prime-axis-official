// app/products/page.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Check, Sparkles, Filter, Box, Layers, Zap, Cpu, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "94777537538";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products', icon: Filter },
    { id: 'resins', label: 'Polymer Resins', icon: Box },
    { id: 'packaging', label: 'Packaging Materials', icon: Layers },
    { id: 'tapes', label: 'Adhesive Tapes', icon: Zap },
    { id: 'machinery', label: 'Packaging Machinery', icon: Cpu }
  ];

  const products = [
    // 01. Polymer Raw Materials
    {
      id: 1,
      category: 'resins',
      name: 'LDPE Virgin Resins (Low Density Polyethylene)',
      grade: 'Film, Injection, Blow Moulding & Coating Grade',
      specs: 'MFI: 2.0 - 20 | Density: 0.923 g/cm³',
      desc: 'High clarity, superior flexibility, and excellent sealability ideal for heavy-duty packaging films.',
      features: ['High melt strength', 'Good sealing properties', 'Easy processing'],
      img: '/images/polymer-raw-materials.jpg'
    },
    {
      id: 2,
      category: 'resins',
      name: 'LLDPE Resins (Linear Low Density)',
      grade: 'Butene & Hexene Film Grade',
      specs: 'MFI: 1.0 - 2.0 g/10min | Density: 0.918 g/cm³',
      desc: 'Unmatched tensile toughness and tear resistance engineered for stretch wrap and heavy-duty bags.',
      features: ['High tensile strength', 'Excellent puncture resistance', 'Superior impact strength'],
      img: '/images/polymer-raw-materials.jpg'
    },
    {
      id: 3,
      category: 'resins',
      name: 'HDPE Resins (High Density Polyethylene)',
      grade: 'Film, Injection, Blow & Pipe Grade',
      specs: 'MFI: 0.30 - 7.0 | Density: 0.954 g/cm³',
      desc: 'High rigidity, excellent chemical resistance, and good impact resistance for containers and crates.',
      features: ['High rigidity and strength', 'Excellent chemical resistance', 'Suitable for blow moulding'],
      img: '/images/polymer-raw-materials.jpg'
    },
    {
      id: 4,
      category: 'resins',
      name: 'PP & PET Resins',
      grade: 'Homo/Random/Impact Copolymer & Bottle Grade',
      specs: 'IV: 0.80 - 0.85 dl/g (PET)',
      desc: 'Premium polymer grades providing excellent clarity, high strength, and recyclability for diverse applications.',
      features: ['Good clarity & recyclability', 'High strength', 'Textile & bottle grade options'],
      img: '/images/polymer-raw-materials.jpg'
    },

    // 02. Packaging Materials & Films
    {
      id: 5,
      category: 'packaging',
      name: 'Hand & Machine Stretch Film',
      grade: 'Cast 5-Layer Co-Extruded',
      specs: 'Thickness: 12 - 30 Micron | Elongation: Up to 300%',
      desc: 'Ultra-clear, high-tack pallet wrapping film providing secure load stabilization and puncture resistance.',
      features: ['High clarity and strength', 'Excellent load stability', 'Hand & machine grade options'],
      img: '/images/packaging-materials.jpg'
    },
    {
      id: 6,
      category: 'packaging',
      name: 'Polybags, Polysheets & Courier Bags',
      grade: 'LDPE / LLDPE Co-Extruded',
      specs: 'Custom Sizes & Thickness | Tamper-Evident Strip',
      desc: 'Versatile packaging bags designed for retail, garment packing, and secure e-commerce shipping.',
      features: ['Tamper-evident sealing', 'Waterproof & tear-proof', 'Custom logo printing'],
      img: '/images/packaging-materials.jpg'
    },
    {
      id: 7,
      category: 'packaging',
      name: 'Cling Film & Bubble Wrap',
      grade: 'Food Grade & Industrial Protective',
      specs: 'Various Widths and Thicknesses',
      desc: 'Keeps food fresh longer with high cling properties while providing cushioning protection for fragile goods.',
      features: ['High cling and clarity', 'Shock absorbing cushioning', 'Safe for food contact'],
      img: '/images/packaging-materials.jpg'
    },
    {
      id: 8,
      category: 'packaging',
      name: 'Silver Foil & Strapping Materials',
      grade: 'Lamination & Industrial Grade',
      specs: 'High Barrier Protection',
      desc: 'Reliable protection against moisture, light, and odor with high tensile strength strapping for heavy bundling.',
      features: ['Moisture & light resistant', 'High tensile strength', 'Suitable for lamination'],
      img: '/images/packaging-materials.jpg'
    },

    // 03. Adhesive Tapes
    {
      id: 9,
      category: 'tapes',
      name: 'BOPP Clear & Color Tapes',
      grade: 'Acrylic / Hotmelt Adhesive',
      specs: 'Thickness: 40 - 55 Micron | Width: 48mm, 72mm',
      desc: 'Strong, reliable sealing tapes available in clear, tan, printed, and vibrant colors for easy identification.',
      features: ['High clarity and strong adhesion', 'Available in jumbo & small rolls', 'Vibrant color options'],
      img: '/images/adhesive-tapes.jpg'
    },
    {
      id: 10,
      category: 'tapes',
      name: 'Masking, Double Sided & Specialty Tapes',
      grade: 'Industrial & Commercial Grade',
      specs: 'Film, Foam, Tissue Types',
      desc: 'Multipurpose clean-removal masking tapes, double-sided mounting tapes, and reinforced fiberglass filament tapes.',
      features: ['Clean and residue-free removal', 'High tensile strength filament', 'Reliable bonding'],
      img: '/images/adhesive-tapes.jpg'
    },

    // 04. Packaging Machinery
    {
      id: 11,
      category: 'machinery',
      name: 'LDPE/HDPE Blown Film Extrusion Machine',
      grade: 'High Performance & Energy Efficient',
      specs: 'Customizable Film Width & Output',
      desc: 'Produce high-quality LDPE/HDPE films with stable output, consistent thickness, and low maintenance.',
      features: ['Stable output & consistent thickness', 'Energy efficient design', 'Suitable for shrink & stretch films'],
      img: '/images/packaging-machinery.jpg'
    },
    {
      id: 12,
      category: 'machinery',
      name: 'Bag Making & Sealing Machines',
      grade: 'Automatic Cutting & Sealing',
      specs: 'High Speed Precision Cutting',
      desc: 'Convert blown films automatically into T-shirt bags, flat bags, courier bags, and zip lock bags.',
      features: ['Automatic cutting & stacking', 'Adjustable temperature sealing', 'High speed and high accuracy'],
      img: '/images/packaging-machinery.jpg'
    },
    {
      id: 13,
      category: 'machinery',
      name: 'Blow & Injection Moulding Machines',
      grade: 'Fully Automatic Servo System',
      specs: 'Screw Size: 75mm | High Production Capacity',
      desc: 'High-speed automated machinery for manufacturing plastic bottles, containers, crates, and household items.',
      features: ['Fully automatic operation', 'Servo motor energy efficiency', 'Precision clamping system'],
      img: '/images/packaging-machinery.jpg'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 overflow-hidden">
      
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
          <Sparkles className="w-4 h-4 text-sky-600 animate-spin" /> Product Catalogue
        </motion.span>
        
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Polymer Materials & Machinery
        </h1>
        
        <p className="text-slate-600 text-base sm:text-lg">
          Browse through prime chemical resins, industrial packaging films, technical tapes, and turnkey machinery.
        </p>
      </motion.div>

      {/* 2. Interactive Category Filter Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-3 pt-2"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all shadow-sm ${
                isActive 
                  ? "bg-sky-600 text-white shadow-md shadow-sky-500/30" 
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          );
        })}
      </motion.div>

      {/* 3. Filtered Product Cards Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredProducts.map((prod) => (
            <motion.div 
              layout
              key={prod.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.08)" }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 transition-all group"
            >
              <div className="space-y-4">
                {/* Product Image */}
                <div className="relative h-60 rounded-2xl overflow-hidden shadow-md bg-slate-900">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={prod.img} 
                    alt={prod.name} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-sky-400 text-[10px] font-bold font-mono uppercase tracking-wider border border-white/10">
                      {prod.grade}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                  {prod.name}
                </h3>

                <div className="p-3 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 border border-slate-200">
                  {prod.specs}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {prod.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {prod.features.map((f, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 4 }}
                      className="text-xs font-medium text-slate-700 flex items-center gap-2 transition-transform"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" /> {f}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "#059669" }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(`Hello Prime Axis, I want pricing and specifications for: ${prod.name} (${prod.grade}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" /> Order via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}