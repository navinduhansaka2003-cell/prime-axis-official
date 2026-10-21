// app/layout.tsx
'use client';
import React, { useState } from 'react';
import './globals.css';
import { Box, Phone, Mail, MessageSquare, Camera, Menu, X } from 'lucide-react';

const WHATSAPP_NUMBER = "94777537538";
const WHATSAPP_DISPLAY = "+94 77 753 7538";
const COMPANY_EMAIL = "info@primeaxis.com";

interface ImagePlaceholderProps {
  title: string;
  resolution?: string;
  height?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ title, resolution = "1200x800", height = "h-64" }) => (
  <div className={`relative overflow-hidden bg-slate-100 rounded-2xl border border-slate-200 group ${height}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" />
    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border flex items-center justify-center mb-3">
        <Camera className="w-7 h-7 text-sky-600" />
      </div>
      <p className="text-slate-800 font-semibold text-sm mb-1">{title}</p>
      <span className="text-[11px] font-mono text-slate-600 bg-slate-200 px-3 py-1 rounded-full">{resolution}</span>
    </div>
  </div>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-sky-500 selection:text-white">
        
        {/* Top Announcement Bar */}
        <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-sky-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Global Sourcing Hub Active
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-slate-300">China - Sri Lanka Direct Trade Channel</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 font-medium">
              <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-sky-400 transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3 text-sky-400" /> {WHATSAPP_DISPLAY}
              </a>
              <span className="text-slate-600">|</span>
              <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-sky-400 transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3 text-sky-400" /> {COMPANY_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* Brand Logo */}
              <a href="/" className="flex items-center gap-3 text-left">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-700 to-indigo-800 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Box className="w-6 h-6 text-sky-400" />
                  </div>
                </div>
                <div>
                  <div className="text-xl font-black tracking-wider text-slate-900 font-mono">
                    PRIME <span className="text-sky-600">AXIS</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Packaging Tech</div>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1.5 rounded-full border border-slate-200">
                <a href="/" className="px-5 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white transition-all">Home</a>
                <a href="/about" className="px-5 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white transition-all">About Us</a>
                <a href="/products" className="px-5 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white transition-all">Products & Tech</a>
                <a href="/sourcing" className="px-5 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white transition-all">Global Sourcing</a>
                <a href="/contact" className="px-5 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white transition-all">Contact Us</a>
              </nav>

              {/* Right Side Buttons & Mobile Toggle */}
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent("Hello Prime Axis team, I would like an instant quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-lg items-center gap-2 hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Quote
                </a>

                {/* Mobile Menu Toggle Button (Hamburger) */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all border border-slate-200"
                  aria-label="Toggle Mobile Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Dropdown Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
              <nav className="flex flex-col space-y-2">
                <a 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all"
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all"
                >
                  About Us
                </a>
                <a 
                  href="/products" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all"
                >
                  Products & Tech
                </a>
                <a 
                  href="/sourcing" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all"
                >
                  Global Sourcing
                </a>
                <a 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all"
                >
                  Contact Us
                </a>
              </nav>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent("Hello Prime Axis team, I would like an instant quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Quote
                </a>
              </div>
            </div>
          )}
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-700 p-0.5">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Box className="w-5 h-5 text-sky-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-black tracking-wider text-white font-mono">
                    PRIME <span className="text-sky-400">AXIS</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Prime Axis Packaging Technologies is a premier supplier of polymer raw materials, stretch films, BOPP tapes, and industrial packaging machinery.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4 font-mono">Navigation</h4>
                <ul className="space-y-2.5 text-sm font-medium text-slate-400">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/products" className="hover:text-white">Products & Tech</a></li>
                  <li><a href="/sourcing" className="hover:text-white">Global Sourcing</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4 font-mono">Core Solutions</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>Polymer Raw Materials</li>
                  <li>Industrial Stretch Films</li>
                  <li>BOPP & Masking Tapes</li>
                  <li>Blown Film Extruders</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4 font-mono">China Hubs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Yiwu, Guangzhou, Tianjin, Beijing, Cangzhou, Taizhou, Linyi
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-900 flex justify-between text-xs text-slate-500">
              <div>© 2026 Prime Axis Packaging Technologies. All rights reserved.</div>
              <div>ISO Grade Quality Standards</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}