'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

const SEQUENCES = [
  {
    id: 'pars',
    region: 'Pars',
    bg: '/images/backgrounds/Pars Background.png',
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
    bg: '/images/backgrounds/Aklas Background.png',
    leftHero: {
      name: 'Vecta of Aklas',
      src: '/images/sprites/Vecta of Aklas (3).png',
      glow: 'drop-shadow(0 0 35px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 60px rgba(220, 38, 38, 0.4)) brightness(200%)'
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
    bg: '/images/backgrounds/Aaran Background.png',
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

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SEQUENCES[activeIndex];

  const nextSequence = () => {
    setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
  };

  const prevSequence = () => {
    setActiveIndex((prev) => (prev - 1 + SEQUENCES.length) % SEQUENCES.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-36 w-36 rounded-3xl overflow-hidden border border-yellow-400/20">
              <Image
                src="/images/sprites/TotA Symbol 1.png"
                alt="Logo"
                fill
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

      {/* HERO HERO CONTAINER */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black">
        
        {/* BACKGROUND LANDSCAPE (Locked outside the dynamic loop block to guarantee stability) */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Image
            src={active.bg.toString()}
            alt="Region Landscape"
            fill
            className="object-cover transition-opacity duration-500"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* SEQUENCE WRAPPER FOR SPRITES */}
        <div key={active.id} className="absolute inset-0 w-full h-full z-10">
          
          {/* CHARACTERS OVERLAY */}
          <div className="absolute inset-0 pointer-events-none">

            {/* LEFT CHARACTER */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: [-10, 10, -10], opacity: 1 }}
              transition={{ 
                x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.4 }
              }}
              className="absolute bottom-0 left-[-6%] w-[58%] h-full group"
            >
              {/* Glow Behind */}
              <motion.div 
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.99, 1.02, 0.99] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 transition-all duration-500 group-hover:brightness-150"
                style={{ filter: active.leftHero.glow }}
              >
                <Image
                  src={active.leftHero.src.toString()}
                  alt="Left Hero Glow"
                  fill
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

              {/* True Asset Front */}
              <div className="absolute inset-0">
                <Image
                  src={active.leftHero.src.toString()}
                  alt={active.leftHero.name}
                  fill
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    WebkitMaskImage: `url("${active.