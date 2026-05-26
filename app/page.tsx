'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

const TRADITIONS = [
  "Pyric Tradition", "Tidal Tradition", "Terran Tradition", "Aerial Tradition",
  "Glacial Tradition", "Voltanic Tradition", "Ferric Tradition", "Verdant Tradition",
  "Arcanic Tradition", "Luminous Tradition", "Umbral Tradition", "Ethereal Tradition",
  "Astral Tradition", "Demonic Tradition", "Runic Tradition", "Psionic Tradition",
  "Cosmic Tradition", "Ancestral Tradition", "Draconic Tradition", "Martial Tradition",
  "Venomous Tradition", "Radiant Core Tradition"
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SEQUENCES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSequence = () => {
    setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
  };

  const prevSequence = () => {
    setActiveIndex((prev) => (prev - 1 + SEQUENCES.length) % SEQUENCES.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans select-none">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-36 w-36 rounded-3xl overflow-hidden border border-yellow-400/20">
              <Image
                src="/images/sprites/TotA Symbol 1.png"
                alt="Logo"
                fill
                sizes="144px"
                loading="eager"
                className="object-contain"
                style={{
                  WebkitMaskImage: 'url("/images/sprites/TotA Symbol 1.png")',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: 'url("/images/sprites/TotA Symbol 1.png")',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat'
                }}
              />
            </div>
            <div>
              <div className="font-black tracking-widest text-lg md:text-xl">
                THRONE OF THE ASCENDANT
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.3em] mt-1">
                By Nitti Games
              </div>
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

      {/* HERO CONTAINER */}
      <section className="relative h-[650px] w-full overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={active.id} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src={active.bg}
                alt={`${active.region} Landscape Background`}
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
            </div>

            {/* CHARACTERS OVERLAY */}
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              {/* LEFT CHARACTER */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: [-10, 10, -10], opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ 
                  x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.6 },
                  exit: { duration: 0.4 }
                }}
                className="absolute bottom-0 left-[-6%] w-[58%] h-full group"
              >
                <motion.div 
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.99, 1.02, 0.99] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 transition-all duration-500 group-hover:brightness-150"
                  style={{ filter: active.leftHero.glow }}
                >
                  <Image
                    src={active.leftHero.src}
                    alt="Left Hero Glow"
                    fill
                    sizes="50vw"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'bottom',
                      WebkitMaskImage: `url("${active.leftHero.src}")`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'bottom',
                      WebkitMaskRepeat: 'no-repeat',
                      maskImage: `url("${active.leftHero.src}")`,
                      maskSize: 'contain',
                      maskPosition: 'bottom',
                      maskRepeat: 'no-repeat'
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0">
                  <Image
                    src={active.leftHero.src}
                    alt={active.leftHero.name}
                    fill
                    sizes="50vw"
                    loading="eager"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'bottom',
                      WebkitMaskImage: `url("${active.leftHero.src}")`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'bottom',
                      WebkitMaskRepeat: 'no-repeat',
                      maskImage: `url("${active.leftHero.src}")`,
                      maskSize: 'contain',
                      maskPosition: 'bottom',
                      maskRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </motion.div>

              {/* RIGHT CHARACTER */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: [10, -10, 10], opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ 
                  x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.6 },
                  exit: { duration: 0.4 }
                }}
                className="absolute bottom-0 right-[-6%] w-[58%] h-full group"
              >
                <motion.div 
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.99, 1.02, 0.99] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 transition-all duration-500 group-hover:brightness-150"
                  style={{ filter: active.rightHero.glow }}
                >
                  <Image
                    src={active.rightHero.src}
                    alt="Right Hero Glow"
                    fill
                    sizes="50vw"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'bottom',
                      WebkitMaskImage: `url("${active.rightHero.src}")`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'bottom',
                      WebkitMaskRepeat: 'no-repeat',
                      maskImage: `url("${active.rightHero.src}")`,
                      maskSize: 'contain',
                      maskPosition: 'bottom',
                      maskRepeat: 'no-repeat'
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0">
                  <Image
                    src={active.rightHero.src}
                    alt={active.rightHero.name}
                    fill
                    sizes="50vw"
                    loading="eager"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'bottom',
                      WebkitMaskImage: `url("${active.rightHero.src}")`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'bottom',
                      WebkitMaskRepeat: 'no-repeat',
                      maskImage: `url("${active.rightHero.src}")`,
                      maskSize: 'contain',
                      maskPosition: 'bottom',
                      maskRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* NAVIGATION BUTTONS */}
        <div className="absolute inset-x-0 bottom-8 z-30 flex items-center justify-between px-8 pointer-events-auto">
          <button 
            onClick={prevSequence}
            className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-sm font-bold tracking-wider hover:bg-white hover:text-black transition uppercase"
          >
            ← Prev Region
          </button>
          <div className="flex gap-2">
            {SEQUENCES.map((seq, idx) => (
              <button
                key={seq.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/30'}`}
                aria-label={`Go to sequence ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSequence}
            className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-sm font-bold tracking-wider hover:bg-white hover:text-black transition uppercase"
          >
            Next Region →
          </button>
        </div>

        {/* MARQUEE TEXT */}
        <div className="absolute top-6 left-6 z-30 pointer-events-none bg-black/50 border border-white/10 backdrop-blur px-4 py-1.5 rounded-lg">
          <span className="text-xs text-zinc-400 tracking-widest uppercase">Battleground:</span>
          <AnimatePresence mode="wait">
            <motion.h2 
              key={active.region}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-black tracking-wide text-yellow-400 uppercase"
            >
              {active.region}
            </motion.h2>
          </AnimatePresence>
        </div>
      </section>

      {/* TRADITIONS CODEX SECTION */}
      <section id="traditions" className="bg-zinc-950 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-yellow-400 uppercase block mb-2">
                Strategic Masteries
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                Combat Traditions
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              Unlock unique tactical thresholds across twenty-two custom combat pathways to adapt your army's composition and conquer your rival's formations.
            </p>
          </div>

          {/* TRADITIONS GRID WITH CLOUD MIST VFX */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {TRADITIONS.map((name) => {
              const fileName = name.replace(/\s+/g, '-');
              const imagePath = `/images/sprites/${fileName}.png`;

              return (
                <div 
                  key={name}
                  className="group relative flex flex-col items-center bg-black/40 border border-white/5 hover:border-yellow-400/30 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-zinc-900 hover:to-black overflow-hidden"
                >
                  {/* DENSE DYNAMIC CLOUD MIST CONTAINER */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 h-28 pointer-events-none select-none z-0">
                    
                    {/* Mist Layer 1: Base Ambient Cloud */}
                    <div 
                      className="absolute inset-0 rounded-full mix-blend-screen filter blur-xl opacity-35 group-hover:opacity-60 transition-opacity duration-500 animate-spin"
                      style={{
                        animationDuration: '10s',
                        background: 'radial-gradient(circle at 35% 35%, rgba(63,63,70,0.8) 0%, rgba(39,39,42,0.4) 45%, transparent 70%)'
                      }}
                    />

                    {/* Mist Layer 2: Counter-Rotating Dense Cloud Fog */}
                    <div 
                      className="absolute inset-[-10px] rounded-full mix-blend-screen filter blur-xl opacity-30 group-hover:opacity-75 transition-all duration-500 animate-spin"
                      style={{
                        animationDuration: '7s',
                        animationDirection: 'reverse',
                        background: 'radial-gradient(circle at 65% 65%, rgba(24,24,27,0.9) 0%, rgba(9,9,11,0.6) 50%, transparent 75%)'
                      }}
                    />

                    {/* Mist Layer 3: Interactive Hotspot Center Spark */}
                    <div 
                      className="absolute inset-4 rounded-full mix-blend-screen filter blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"
                      style={{
                        background: 'radial-gradient(circle, rgba(250,204,21,0.25) 0%, rgba(251,146,60,0.05) 50%, transparent 100%)'
                      }}
                    />
                  </div>

                  {/* Icon Frame Box (Raised up via z-10 so it floats on top of the mist) */}
                  <div className="relative h-16 w-16 mb-4 z-10 filter drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 transform group-hover:scale-110">
                    <Image
                      src={imagePath}
                      alt={`${name} emblem`}
                      fill
                      unoptimized
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>

                  {/* Card Label */}
                  <h3 className="text-xs md:text-sm font-bold tracking-wide text-zinc-300 group-hover:text-yellow-400 transition-colors duration-300 uppercase line-clamp-2 z-10">
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