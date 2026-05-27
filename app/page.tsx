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

// TRADITION LORE DATABASE
const TRADITION_LORE = {
  "Pyric Tradition": (
    <>
      <div className="mb-12">
        <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
          Mythos & Archives
        </span>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
          Pyric Tradition
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-yellow-500 tracking-wide">
          The Silver Eclipse
        </h3>
      </div>

      <p className="text-zinc-300 leading-relaxed text-lg">
        The Pyric Tradition teaches absolute combustion. Masters burn away fear,
        weakness, hesitation, and even identity until only pure intent remains.
      </p>
    </>
  ),

  "Tidal Tradition": (
    <>
      <div className="mb-12">
        <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
          Mythos & Archives
        </span>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
          Tidal Tradition
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-blue-500 tracking-wide">
          The Inescapable Undertow
        </h3>
      </div>

      <p className="text-zinc-300 leading-relaxed text-lg">
        Tidal masters weaponize hydrostatic pressure and momentum. Their enemies
        feel as though they are drowning while standing on dry land.
      </p>
    </>
  ),

  "Terran Tradition": (
    <>
      <div className="mb-12">
        <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
          Mythos & Archives
        </span>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
          Terran Tradition
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-amber-500 tracking-wide">
          The Weight of the World
        </h3>
      </div>

      <p className="text-zinc-300 leading-relaxed text-lg">
        Terran masters embody endurance, gravity, tectonic pressure, and
        immovable will.
      </p>
    </>
  ),

  "Voltanic Tradition": (
    <>
      <div className="mb-12">
        <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
          Mythos & Archives
        </span>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
          Voltanic Tradition
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-cyan-400 tracking-wide">
          The Storm Circuit
        </h3>
      </div>

      <p className="text-zinc-300 leading-relaxed text-lg">
        Voltanic warriors perceive battle as a living electrical network.
        Reflexes become instantaneous, nerves become conduits, and the air
        itself trembles with static tension.
      </p>
    </>
  ),

  "Glacial Tradition": (
    <>
      <div className="mb-12">
        <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
          Mythos & Archives
        </span>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
          Glacial Tradition
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-sky-300 tracking-wide">
          The Eternal Silence
        </h3>
      </div>

      <p className="text-zinc-300 leading-relaxed text-lg">
        Glacial masters slow motion, emotion, and even thought itself. Entire
        battlefields become frozen cathedrals of stillness.
      </p>
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
};