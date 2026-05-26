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
      
      {/* PERPETUAL, HIGH-NOTORIETY SLOW SMOKE SHADER */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smoke-perpetual-plume {
          0% { transform: translate(-50%, 15px) scaleX(0.7) scaleY(0.8) rotate(0deg); opacity: 0.50; filter: blur(6px); }
          25% { transform: translate(-35%, -5px) scaleX(1.1) scaleY(1.1) rotate(25deg); opacity: 0.80; filter: blur(8px); }
          50% { transform: translate(-60%, -20px) scaleX(0.8) scaleY(1.3) rotate(-20deg); opacity: 0.65; filter: blur(10px); }
          75% { transform: translate(-40%, -40px) scaleX(1.3) scaleY(1.2) rotate(15deg); opacity: 0.55; filter: blur(7px); }
          100% { transform: translate(-50%, 15px) scaleX(0.7) scaleY(0.8) rotate(0deg); opacity: 0.50; filter: blur(6px); }
        }
        @keyframes smoke-perpetual-shear {
          0% { transform: translate(-40%, -35px) scaleX(1.3) scaleY(1.1) rotate(180deg); opacity: 0.40; filter: blur(10px); }
          30% { transform: translate(-60%, -10px) scaleX(0.9) scaleY(1.3) rotate(220deg); opacity: 0.70; filter: blur(8px); }
          65% { transform: translate(-35%, 10px) scaleX(1.4) scaleY(0.8) rotate(140deg); opacity: 0.60; filter: blur(12px); }
          85% { transform: translate(-55%, -15px) scaleX(1.1) scaleY(1.2) rotate(90deg); opacity: 0.50; filter: blur(9px); }
          100% { transform: translate(-40%, -35px) scaleX(1.3) scaleY(1.1) rotate(180deg); opacity: 0.40; filter: blur(10px); }
        }
        @keyframes smoke-ambient-mass {
          0%, 100% { transform: scale(1) translate(0px, 0px) rotate(0deg); opacity: 0.35; }
          33% { transform: scale(1.15) translate(6px, -4px) rotate(120deg); opacity: 0.60; }
          66% { transform: scale(0.90) translate(-4px, 4px) rotate(240deg); opacity: 0.45; }
        }
        .vfx-always-smoke { animation: smoke-perpetual-plume 14s infinite ease-in-out; }
        .vfx-always-shear { animation: smoke-perpetual-shear 19s infinite ease-in-out; }
        .vfx-always-base { animation: smoke-ambient-mass 26s infinite ease-in-out; }
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
          <button onClick={prevSequence} className="px-4 py-