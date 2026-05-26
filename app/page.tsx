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

// High-Fidelity Tactical Engine Archetype Settings
const TRADITION_THEMES: Record<string, { type: 'eruption' | 'hurricane' | 'lightning' | 'shards'; c1: string; c2: string; glow: string }> = {
  Pyric: { type: 'eruption', c1: '#ff4500', c2: '#ff8c00', glow: '#ff4500' },
  Tidal: { type: 'hurricane', c1: '#00bfff', c2: '#1e90ff', glow: '#1e90ff' },
  Terran: { type: 'shards', c1: '#8b4513', c2: '#cd853f', glow: '#8b4513' },
  Aerial: { type: 'hurricane', c1: '#e0ffff', c2: '#afeeee', glow: '#afeeee' },
  Glacial: { type: 'shards', c1: '#00ffff', c2: '#87cefa', glow: '#00ffff' },
  Voltanic: { type: 'lightning', c1: '#ffff00', c2: '#ffd700', glow: '#ffff00' },
  Ferric: { type: 'shards', c1: '#708090', c2: '#b0c4de', glow: '#708090' },
  Verdant: { type: 'eruption', c1: '#32cd32', c2: '#228b22', glow: '#32cd32' },
  Arcanic: { type: 'hurricane', c1: '#ba55d3', c2: '#9400d3', glow: '#9400d3' },
  Luminous: { type: 'lightning', c1: '#ffffff', c2: '#fffacd', glow: '#ffffff' },
  Umbral: { type: 'eruption', c1: '#4b0082', c2: '#000000', glow: '#4b0082' },
  Ethereal: { type: 'hurricane', c1: '#40e0d0', c2: '#20b2aa', glow: '#40e0d0' },
  Astral: { type: 'hurricane', c1: '#ff69b4', c2: '#4169e1', glow: '#ff69b4' },
  Demonic: { type: 'eruption', c1: '#ff0000', c2: '#8b0000', glow: '#ff0000' },
  Runic: { type: 'shards', c1: '#ff8c00', c2: '#ff4500', glow: '#ff8c00' },
  Psionic: { core: '#6366f1', type: 'lightning', c1: '#da70d6', c2: '#8a2be2', glow: '#8a2be2' },
  Cosmic: { type: 'hurricane', c1: '#00ffff', c2: '#4b0082', glow: '#00ffff' },
  Ancestral: { type: 'eruption', c1: '#66caa6', c2: '#2e8b57', glow: '#66caa6' },
  Draconic: { type: 'eruption', c1: '#ff0000', c2: '#ff8c00', glow: '#ff0000' },
  Martial: { type: 'shards', c1: '#b22222', c2: '#8b0000', glow: '#b22222' },
  Venomous: { type: 'eruption', c1: '#adff2f', c2: '#006400', glow: '#adff2f' },
  Radiant: { type: 'lightning', c1: '#ffd700', c2: '#ff8c00', glow: '#ffd700' },
  Rehma: { type: 'lightning', c1: '#dfa6ff', c2: '#6a0dad', glow: '#dfa6ff' }
};

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SEQUENCES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSequence = () => { setActiveIndex((prev) => (prev + 1) % SEQUENCES.length); };
  const prevSequence = () => { setActiveIndex((prev) => (prev - 1 + SEQUENCES.length) % SEQUENCES.length); };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans select-none">
      
      {/* NATIVE HIGH-SPEED INJECTED ELEMENTAL SHADER ANIMATION KEYFRAMES */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes volt-strike {
          0%, 100% { transform: scaleX(0.2) scaleY(1.4) rotate(0deg); opacity: 0.2; }
          12% { transform: scaleX(1.8) scaleY(0.4) rotate(45deg) translate(-5px, 3px); opacity: 0.9; filter: brightness(2); }
          25% { transform: scaleX(0.3) scaleY(1.7) rotate(-30deg) translate(4px, -2px); opacity: 0.4; }
          38% { transform: scaleX(1.5) scaleY(0.6) rotate(85deg); opacity: 0.8; }
          55% { transform: scaleX(0.1) scaleY(2.2) rotate(15deg) translate(-2px, -4px); opacity: 0.1; }
          70% { transform: scaleX(1.9) scaleY(0.3) rotate(-75deg) translate(6px, 5px); opacity: 1; filter: brightness(2.5); }
          86% { transform: scaleX(0.4) scaleY(1.3) rotate(120deg); opacity: 0.3; }
        }
        @keyframes magma-vent {
          0% { transform: translateY(35px) scaleX(0.6) scaleY(0.4); opacity: 0.4; filter: blur(6px); }
          40% { transform: translateY(-10px) scaleX(1.4) scaleY(1.6); opacity: 0.95; filter: blur(3px); }
          75% { transform: translateY(-30px) scaleX(0.5) scaleY(1.2); opacity: 0.3; filter: blur(8px); }
          100% { transform: translateY(-45px) scaleX(0.2) scaleY(0.2); opacity: 0; filter: blur(12px); }
        }
        @keyframes vortex-rip {
          0% { transform: rotate(0deg) scale(0.6); border-radius: 35% 65% 40% 60% / 50% 45% 55% 50%; opacity: 0.4; }
          33% { transform: rotate(140deg) scale(1.2); border-radius: 60% 40% 70% 30% / 45% 60% 40% 55%; opacity: 0.9; }
          66% { transform: rotate(290deg) scale(0.8); border-radius: 40% 60% 30% 70% / 60% 40% 65% 35%; opacity: 0.7; }
          100% { transform: rotate(360deg) scale(0.6); border-radius: 35% 65% 40% 60% / 50% 45% 55% 50%; opacity: 0.4; }
        }
        @keyframes fracture-burst {
          0%, 100% { transform: scale(0.8) rotate(0deg); clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); opacity: 0.4; }
          20% { transform: scale(1.25) rotate(15deg); clip-path: polygon(40% 10%, 90% 20%, 100% 80%, 20% 90%, 5% 50%); opacity: 0.9; }
          50% { transform: scale(0.7) rotate(-25deg); clip-path: polygon(30% 0%, 100% 10%, 70% 90%, 0% 100%, 15% 40%); opacity: 0.3; }
          75% { transform: scale(1.4) rotate(40deg); clip-path: polygon(50% 20%, 80% 0%, 95% 70%, 30% 100%, 0% 60%); opacity: 0.85; filter: brightness(1.5); }
        }
        .vfx-lightning { animation: volt-strike 0.35s infinite linear; }
        .vfx-eruption { animation: magma-vent 0.9s infinite cubic-bezier(0.36, 0.07, 0.19, 0.97); }
        .vfx-hurricane { animation: vortex-rip 1.1s infinite linear; }
        .vfx-shards { animation: fracture-burst 1.6s infinite ease-in-out; }
      `}} />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
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
            <a href="#traditions" className="hover:text-white transition">Traditions</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#lore" className="hover:text-white transition">Lore</a>
            <a href="#community" className="hover:text-white transition">Community</a>
          </nav>
        </div>
      </header>

      {/* HERO CAROUSEL */}
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

      {/* DYNAMIC COMBAT TRADITIONS EXPERIMENTAL GRID SYSTEM */}
      <section id="traditions" className="bg-zinc-950 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-yellow-400 uppercase block mb-2">Strategic Masteries</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Combat Traditions</h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              Experience volatile kinetic feedback fields acting behind twenty-three customized pathway seals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {TRADITIONS.map((name) => {
              const fileName = name.replace(/\s+/g, '-');
              const imagePath = `/images/sprites/${fileName}.png`;

              const prefix = name.split(' ')[0];
              const theme = TRADITION_THEMES[prefix] || { type: 'eruption', c1: '#a855f7', c2: '#6366f1', glow: '#a855f7' };

              return (
                <div 
                  key={name}
                  className="group relative flex flex-col items-center bg-black/50 border border-white/5 hover:border-white/20 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* CHAOTIC FIELD BACKDROP COMPONENT LAYER */}
                  <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden rounded-2xl">
                    
                    {/* Primary High-Intensity Velocity Kinetic Wave */}
                    <div 
                      className={`absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 filter blur-md opacity-0 group-hover:opacity-85 transition-opacity duration-300 vfx-${theme.type}`}
                      style={{
                        background: `radial-gradient(circle, ${theme.c1} 10%, ${theme.c2} 50%, transparent 75%)`
                      }}
                    />

                    {/* Secondary Fractal Noise Interference Node (Counter offset to intensify structural chaos) */}
                    <div 
                      className={`absolute top-2 left-1/4 w-28 h-28 filter blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 vfx-${theme.type}`}
                      style={{
                        animationDelay: '-0.4s',
                        background: `radial-gradient(ellipse at center, ${theme.c2} 0%, transparent 60%)`
                      }}
                    />

                    {/* Hotspot Core Displacement Shield */}
                    <div 
                      className="absolute inset-x-0 bottom-4 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-overlay group-hover:scale-x-150 transition-transform duration-700" 
                    />
                  </div>

                  {/* EMBLEM EMBOSS FRAME BOX LAYER */}
                  <div 
                    className="relative h-16 w-16 mb-4 z-10 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-1"
                    style={{
                      filter: `drop-shadow(0 4px 10px rgba(0,0,0,0.95)) drop-shadow(0 0 20px ${theme.glow}bf)`
                    }}
                  >
                    <Image src={imagePath} alt={name} fill unoptimized sizes="64px" className="object-contain" />
                  </div>

                  {/* CARD TITLE LABEL */}
                  <h3 
                    className="text-xs md:text-sm font-black tracking-wide text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase line-clamp-2 z-10"
                    style={{
                      textShadow: `0 0 12px ${theme.glow}`
                    }}
                  >
                    {name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black uppercase">About the Game</h2>
        <p className="mt-6 text-zinc-400 max-w-2xl text-lg leading-relaxed">
          Throne of the Ascendant brings next-generation dark tactical fantasy to your browser. Prepare your heroes for battle across the shifting regional landscapes of Pars, Aklas, and Aaran.
        </p>
      </section>

    </div>
  );
}