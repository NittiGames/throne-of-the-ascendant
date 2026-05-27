'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Master Data Registry for the Carousel States
const SEQUENCES = [
  {
    id: 'pars',
    region: 'Pars',
    bg: '/images/sprites/Pars-Background.png',
    leftHero: {
      name: 'Sofen of Pars',
      src: '/images/sprites/Sofen of Pars (2).png',
      glow: 'drop-shadow(0 0 35px rgba(234, 179, 8, 0.6)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.3)) brightness(200%)'
    },
    rightHero: {
      name: 'Hais of Pars',
      src: '/images/sprites/Hais of Pars (3).png',
      glow: 'drop-shadow(0 0 35px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.3)) brightness(200%)'
    }
  },
  {
    id: 'aklas',
    region: 'Aklas',
    bg: '/images/sprites/Aklas-Background.png',
    leftHero: {
      name: 'Vecta of Aklas',
      src: '/images/sprites/Vecta of Aklas (3).png',
      glow: 'drop-shadow(0 0 35px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 60px rgba(22, 163, 74, 0.4)) brightness(200%)'
    },
    rightHero: {
      name: 'Fiena of Aklas',
      src: '/images/sprites/Fiena of Aklas (3).png',
      glow: 'drop-shadow(0 0 35px rgba(20, 184, 166, 0.6)) drop-shadow(0 0 60px rgba(13, 148, 136, 0.4)) brightness(200%)'
    }
  },
  {
    id: 'aaran',
    region: 'Aaran',
    bg: '/images/sprites/Aaran-Background.png',
    leftHero: {
      name: 'Seib of Aaran',
      src: '/images/sprites/Seib of Aaran (3).png',
      glow: 'drop-shadow(0 0 35px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 60px rgba(22, 163, 74, 0.4)) brightness(200%)'
    },
    rightHero: {
      name: 'Trok of Aaran',
      src: '/images/sprites/Trok of Aaran (3).png',
      glow: 'drop-shadow(0 0 35px rgba(249, 115, 22, 0.6)) drop-shadow(0 0 60px rgba(234, 88, 12, 0.4)) brightness(200%)'
    }
  }
];

// Complete Registry of the 23 Combat Traditions
const TRADITIONS = [
  "Pyric Tradition", "Tidal Tradition", "Terran Tradition", "Aerial Tradition",
  "Glacial Tradition", "Voltanic Tradition", "Ferric Tradition", "Verdant Tradition",
  "Arcanic Tradition", "Luminous Tradition", "Umbral Tradition", "Ethereal Tradition",
  "Astral Tradition", "Demonic Tradition", "Runic Tradition", "Psionic Tradition",
  "Cosmic Tradition", "Ancestral Tradition", "Draconic Tradition", "Martial Tradition",
  "Venomous Tradition", "Radiant Core Tradition", "Rehma Tradition"
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTradition, setSelectedTradition] = useState(null);
  const active = SEQUENCES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedTradition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTradition]);

  const nextSequence = () => { setActiveIndex((prev) => (prev + 1) % SEQUENCES.length); };
  const prevSequence = () => { setActiveIndex((prev) => (prev - 1 + SEQUENCES.length) % SEQUENCES.length); };

// FULL TRADITION LORE DATABASE
const TRADITION_LORE = {
  "Pyric Tradition": (
    <>
      {/* TODO tu lore completo Pyric aquí */}
    </>
  ),

  "Tidal Tradition": (
    <>
      {/* TODO tu lore completo Tidal aquí */}
    </>
  ),

  "Terran Tradition": (
    <>
      {/* TODO tu lore completo Terran aquí */}
    </>
  ),
};

// DYNAMIC LORE RENDERER
const renderTraditionLore = (name) => {
  return (
    TRADITION_LORE[name] || (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="relative h-24 w-24 mb-6 opacity-30 grayscale filter blur-[1px]">
          <Image
            src={`/images/sprites/${name.replace(/\s+/g, '-')}.png`}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        <h3 className="text-2xl font-black text-zinc-400 uppercase tracking-widest mb-3">
          Archives Sealed
        </h3>

        <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
          The sacred texts and strategic masteries of the{" "}
          <span className="text-zinc-300 font-semibold">{name}</span>
          {" "}have not yet been unearthed by the Scholars of Aaran.
        </p>
      </div>
    )
  );
}; bg-black text-white font-sans select-none relative">      <style dangerouslySetInnerHTML={{__html: `
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
              <Image src="/images/sprites/TotA Symbol 1.png" alt="Logo" fill sizes="144px" loading="eager" className="object-contain" style={{ maskImage: 'url("/images/sprites/TotA Symbol 1.png")', maskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskImage: 'url("/images/sprites/TotA Symbol 1.png")', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }} />
            </div>
            <div>
              <div className="font-black tracking-widest text-lg md:text-xl">THRONE OF THE ASCENDANT</div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.3em] mt-1">By Nitti Games</div>
            </div>
          </div>
          <nav className="flex gap-8 text-sm text-zinc-300 mt-2">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#traditions" className="hover:text-white transition text-yellow-500">Traditions</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#community" className="hover:text-white transition">Community</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[650px] w-full overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image src={active.bg} alt={active.region} fill priority unoptimized className="object-cover object-center" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
            </div>
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: [-10, 10, -10], opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ x: { duration: 12, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.6 }, exit: { duration: 0.4 } }} className="absolute bottom-0 left-[-6%] w-[58%] h-full group">
                <div style={{ filter: active.leftHero.glow }} className="absolute inset-0 transition-all duration-500 group-hover:brightness-150">
                  <Image src={active.leftHero.src} alt="glow" fill sizes="50vw" style={{ objectFit: 'contain', objectPosition: 'bottom', maskImage: `url("${active.leftHero.src}")`, maskSize: 'contain', maskPosition: 'bottom', maskRepeat: 'no-repeat', WebkitMaskImage: `url("${active.leftHero.src}")`, WebkitMaskSize: 'contain', WebkitMaskPosition: 'bottom', WebkitMaskRepeat: 'no-repeat' }} />
                </div>
                <div className="absolute inset-0">
                  <Image src={active.leftHero.src} alt={active.leftHero.name} fill sizes="50vw" loading="eager" style={{ objectFit: 'contain', objectPosition: 'bottom', maskImage: `url("${active.leftHero.src}")`, maskSize: 'contain', maskPosition: 'bottom', maskRepeat: 'no-repeat', WebkitMaskImage: `url("${active.leftHero.src}")`, WebkitMaskSize: 'contain', WebkitMaskPosition: 'bottom', WebkitMaskRepeat: 'no-repeat' }} />
                </div>
              </motion.div>
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: [10, -10, 10], opacity: 1 }} exit={{ x: 20, opacity: 0 }} transition={{ x: { duration: 11, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.6 }, exit: { duration: 0.4 } }} className="absolute bottom-0 right-[-6%] w-[58%] h-full group">
                <div style={{ filter: active.rightHero.glow }} className="absolute inset-0 transition-all duration-500 group-hover:brightness-150">
                  <Image src={active.rightHero.src} alt="glow" fill sizes="50vw" style={{ objectFit: 'contain', objectPosition: 'bottom', maskImage: `url("${active.rightHero.src}")`, maskSize: 'contain', maskPosition: 'bottom', maskRepeat: 'no-repeat', WebkitMaskImage: `url("${active.rightHero.src}")`, WebkitMaskSize: 'contain', WebkitMaskPosition: 'bottom', WebkitMaskRepeat: 'no-repeat' }} />
                </div>
                <div className="absolute inset-0">
                  <Image src={active.rightHero.src} alt={active.rightHero.name} fill sizes="50vw" loading="eager" style={{ objectFit: 'contain', objectPosition: 'bottom', maskImage: `url("${active.rightHero.src}")`, maskSize: 'contain', maskPosition: 'bottom', maskRepeat: 'no-repeat', WebkitMaskImage: `url("${active.rightHero.src}")`, WebkitMaskSize: 'contain', WebkitMaskPosition: 'bottom', WebkitMaskRepeat: 'no-repeat' }} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-8 z-30 flex items-center justify-between px-8">
          <button onClick={prevSequence} className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-sm font-bold hover:bg-white hover:text-black transition uppercase">← Prev Region</button>
          <div className="flex gap-2">
            {SEQUENCES.map((seq, idx) => (
              <button key={seq.id} onClick={() => setActiveIndex(idx)} className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/30'}`} />
            ))}
          </div>
          <button onClick={nextSequence} className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-sm font-bold hover:bg-white hover:text-black transition uppercase">Next Region →</button>
        </div>

        <div className="absolute top-6 left-6 z-30 bg-black/50 border border-white/10 backdrop-blur px-4 py-1.5 rounded-lg">
          <span className="text-xs text-zinc-400 tracking-widest uppercase">Battleground:</span>
          <AnimatePresence mode="wait">
            <motion.h2 key={active.region} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.3 }} className="text-lg font-black text-yellow-400 uppercase">{active.region}</motion.h2>
          </AnimatePresence>
        </div>
      </section>

      <section id="traditions" className="bg-zinc-950 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">Strategic Masteries</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Combat Traditions</h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              Click any tradition to access its sealed archives. Unlock twenty-three custom combat pathways enveloped in realistic, rising wisp arrays.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {TRADITIONS.map((name) => {
              const fileName = name.replace(/\s+/g, '-');
              const imagePath = `/images/sprites/${fileName}.png`;
              return (
                <div key={name} onClick={() => setSelectedTradition(name)} className="group relative flex flex-col items-center bg-zinc-900/30 border border-white/5 hover:border-yellow-500/30 rounded-2xl p-5 text-center transition-all duration-500 overflow-hidden cursor-pointer hover:bg-zinc-900/60">
                  <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-6 left-1/2 w-12 h-44 mix-blend-screen vfx-smoke-plume" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.4) 0%, rgba(240,240,245,0.2) 30%, rgba(200,200,205,0.05) 70%, transparent 100%)' }} />
                    <div className="absolute bottom-8 left-1/2 w-20 h-40 mix-blend-screen vfx-smoke-shear" style={{ animationDelay: '-2s', background: 'linear-gradient(to top, rgba(245,245,250,0.3) 0%, rgba(215,215,220,0.15) 40%, rgba(180,180,185,0.02) 80%, transparent 100%)' }} />
                    <div className="absolute top-4 left-1/4 w-28 h-28 mix-blend-screen filter blur-2xl vfx-smoke-base" style={{ borderRadius: '45% 55% 50% 50% / 40% 45% 55% 60%', background: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(220,220,225,0.03) 55%, transparent 75%)' }} />
                  </div>
                  <div className="relative h-16 w-16 mb-4 z-10 transition-all duration-700 transform group-hover:scale-105" style={{ filter: `drop-shadow(0 6px 12px rgba(0,0,0,0.95)) drop-shadow(0 0 15px rgba(255,255,255,0.15))` }}>
                    <Image src={imagePath} alt={name} fill unoptimized sizes="64px" className="object-contain" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold tracking-wide text-zinc-400 group-hover:text-yellow-400 transition-colors duration-500 uppercase line-clamp-2 z-10">{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black uppercase">About the Game</h2>
        <p className="mt-6 text-zinc-400 max-w-2xl text-lg leading-relaxed">
          Throne of the Ascendant brings next-generation dark tactical fantasy to your browser. Prepare your heroes for battle across the shifting regional landscapes of Pars, Aklas, and Aaran.
        </p>
      </section>

      <AnimatePresence>
        {selectedTradition && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-12" onClick={() => setSelectedTradition(null)}>
            <motion.div initial={{ y: 40, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.98 }} transition={{ duration: 0.4, ease: "easeOut" }} className="relative w-full max-w-6xl max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-y-auto shadow-2xl shadow-black [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 right-0 w-full flex justify-end p-6 z-10 pointer-events-none">
                <button onClick={() => setSelectedTradition(null)} className="pointer-events-auto bg-black/60 hover:bg-white/20 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white rounded-full p-3 transition-all backdrop-blur-md group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <div className="px-8 pb-12 md:px-16 md:pb-16 -mt-12">{renderTraditionLore(selectedTradition)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}