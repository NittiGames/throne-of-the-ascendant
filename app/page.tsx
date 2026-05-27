'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Use standard, static imports instead of next/dynamic
import PyricLore from './lore/Pyric';

// As you create new tradition files, import them statically right here:
// import TidalLore from './lore/Tidal';
// import TerranLore from './lore/Terran';

const SEQUENCES = [
  {
    id: 'pars',
    region: 'Pars',
    bg: '/images/sprites/Pars-Background.png',
    leftHero: { name: 'Sofen of Pars', src: '/images/sprites/Sofen of Pars (2).png', glow: 'drop-shadow(0 0 35px rgba(234, 179, 8, 0.6))' },
    rightHero: { name: 'Hais of Pars', src: '/images/sprites/Hais of Pars (3).png', glow: 'drop-shadow(0 0 35px rgba(147, 51, 234, 0.6))' }
  },
  {
    id: 'aklas',
    region: 'Aklas',
    bg: '/images/sprites/Aklas-Background.png',
    leftHero: { name: 'Vecta of Aklas', src: '/images/sprites/Vecta of Aklas (3).png', glow: 'drop-shadow(0 0 35px rgba(239, 68, 68, 0.6))' },
    rightHero: { name: 'Fiena of Aklas', src: '/images/sprites/Fiena of Aklas (3).png', glow: 'drop-shadow(0 0 35px rgba(20, 184, 166, 0.6))' }
  },
  {
    id: 'aaran',
    region: 'Aaran',
    bg: '/images/sprites/Aaran-Background.png',
    leftHero: { name: 'Seib of Aaran', src: '/images/sprites/Seib of Aaran (3).png', glow: 'drop-shadow(0 0 35px rgba(34, 197, 94, 0.6))' },
    rightHero: { name: 'Trok of Aaran', src: '/images/sprites/Trok of Aaran (3).png', glow: 'drop-shadow(0 0 35px rgba(249, 115, 22, 0.6))' }
  }
];

const TRADITIONS = [
  "Pyric Tradition", "Tidal Tradition", "Terran Tradition", "Voltanic Tradition", "Aerial Tradition",
  "Glacial Tradition", "Ferric Tradition", "Verdant Tradition", "Arcanic Tradition", "Luminous Tradition", 
  "Umbral Tradition", "Ethereal Tradition", "Astral Tradition", "Demonic Tradition", "Runic Tradition", 
  "Psionic Tradition", "Cosmic Tradition", "Ancestral Tradition", "Draconic Tradition", "Martial Tradition",
  "Venomous Tradition", "Radiant Core Tradition", "Rehma Tradition"
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTradition, setSelectedTradition] = useState(null);
  const active = SEQUENCES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => { setActiveIndex((prev) => (prev + 1) % SEQUENCES.length); }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedTradition ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTradition]);

  const nextSequence = () => { setActiveIndex((prev) => (prev + 1) % SEQUENCES.length); };
  const prevSequence = () => { setActiveIndex((prev) => (prev - 1 + SEQUENCES.length) % SEQUENCES.length); };

  const renderTraditionLore = (name) => {
    // Direct conditional mapping
    if (name === "Pyric Tradition") return <PyricLore />;
    // if (name === "Tidal Tradition") return <TidalLore />;
    // if (name === "Terran Tradition") return <TerranLore />;

    // Default Fallback for traditions without dedicated files yet
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="relative h-24 w-24 mb-6 opacity-30 grayscale filter blur-[1px]">
          <Image src={`/images/sprites/${name.replace(/\s+/g, '-')}.png`} alt={name} fill sizes="96px" className="object-contain" />
        </div>
        <h3 className="text-2xl font-black text-zinc-400 uppercase tracking-widest mb-3">Archives Sealed</h3>
        <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
          The sacred texts and strategic masteries of the <span className="text-zinc-300 font-semibold">{name}</span> have not yet been unearthed by the Scholars of Aaran. Check back soon.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans select-none relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smoke-rise-thin { 0% { transform: translate(-50%, 20px) scaleX(0.5) scaleY(0.5) rotate(0deg); opacity: 0; filter: blur(8px); } 15% { opacity: 0.65; filter: blur(10px); } 50% { transform: translate(-35%, -15px) scaleX(1.1) scaleY(1.3) rotate(80deg); opacity: 0.45; filter: blur(16px); } 100% { transform: translate(-15%, -45px) scaleX(1.6) scaleY(1.8) rotate(190deg); opacity: 0; filter: blur(28px); } }
        @keyframes smoke-drift-shear { 0% { transform: translate(-45%, 10px) scaleX(0.7) scaleY(0.7) rotate(180deg); opacity: 0; filter: blur(12px); } 25% { opacity: 0.55; filter: blur(14px); } 70% { transform: translate(-60%, -25px) scaleX(1.4) scaleY(1.5) rotate(270deg); opacity: 0.3; filter: blur(22px); } 100% { transform: translate(-75%, -55px) scaleX(2.1) scaleY(1.9) rotate(360deg); opacity: 0; filter: blur(36px); } }
        @keyframes smoke-plume-base { 0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; } 50% { transform: scale(1.15) rotate(180deg); opacity: 0.45; } }
        .vfx-smoke-plume { animation: smoke-rise-thin 6s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .vfx-smoke-shear { animation: smoke-drift-shear 8s infinite cubic-bezier(0.39, 0.575, 0.565, 1); }
        .vfx-smoke-base { animation: smoke-plume-base 10s infinite linear; }
      `}} />

      <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-36 w-36 rounded-3xl overflow-hidden border border-yellow-400/20">
              <Image src="/images/sprites/TotA Symbol 1.png" alt="Logo" fill sizes="144px" priority className="object-contain" />
            </div>
            <div>
              <div className="font-black tracking-widest text-lg md:text-xl">THRONE OF THE ASCENDANT</div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.3em] mt-1">By Nitti Games</div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[650px] w-full overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image src={active.bg} alt={active.region} fill priority unoptimized className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
            </div>
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-[-6%] w-[58%] h-full">
                <Image src={active.leftHero.src} alt={active.leftHero.name} fill sizes="50vw" priority style={{ objectFit: 'contain', objectPosition: 'bottom', filter: active.leftHero.glow }} />
              </motion.div>
              <motion.div animate={{ x: [10, -10, 10] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 right-[-6%] w-[58%] h-full">
                <Image src={active.rightHero.src} alt={active.rightHero.name} fill sizes="50vw" priority style={{ objectFit: 'contain', objectPosition: 'bottom', filter: active.rightHero.glow }} />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-8 z-30 flex items-center justify-between px-8">
          <button onClick={prevSequence} className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-sm font-bold hover:bg-white hover:text-black transition uppercase">← Prev</button>
          <div className="flex gap-2">
            {SEQUENCES.map((seq, idx) => (
              <button key={seq.id} onClick={() => setActiveIndex(idx)} className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/30'}`} />
            ))}
          </div>
          <button onClick={nextSequence} className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-sm font-bold hover:bg-white hover:text-black transition uppercase">Next →</button>
        </div>
      </section>

      <section id="traditions" className="bg-zinc-950 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">Strategic Masteries</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Combat Traditions</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {TRADITIONS.map((name) => (
              <div key={name} onClick={() => setSelectedTradition(name)} className="group relative flex flex-col items-center bg-zinc-900/30 border border-white/5 hover:border-yellow-500/30 rounded-2xl p-5 text-center transition-all duration-500 overflow-hidden cursor-pointer hover:bg-zinc-900/60">
                <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute bottom-6 left-1/2 w-12 h-44 mix-blend-screen vfx-smoke-plume" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.2) 0%, transparent 100%)' }} />
                </div>
                <div className="relative h-16 w-16 mb-4 z-10 transition-all duration-700 transform group-hover:scale-105">
                  <Image src={`/images/sprites/${name.replace(/\s+/g, '-')}.png`} alt={name} fill unoptimized sizes="64px" className="object-contain" />
                </div>
                <h3 className="text-xs md:text-sm font-bold tracking-wide text-zinc-400 group-hover:text-yellow-400 transition-colors duration-500 uppercase line-clamp-2 z-10">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTradition && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-12" onClick={() => setSelectedTradition(null)}>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="relative w-full max-w-6xl max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-y-auto p-8 md:p-16 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedTradition(null)} className="absolute top-6 right-6 bg-black/60 hover:bg-white/20 border border-white/10 text-zinc-400 hover:text-white rounded-full p-3 transition-all backdrop-blur-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div>{renderTraditionLore(selectedTradition)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}