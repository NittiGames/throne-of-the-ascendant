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

  // DYNAMIC LORE RENDERER
  const renderTraditionLore = (name) => {
  if (name === "Pyric Tradition") {
    return (
      <iframe
        src="/lore/pyric"
        className="w-full h-[85vh] border-0"
      />
    );
  }

  return (
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
        <span className="text-zinc-300 font-semibold">
          {name}
        </span>{" "}
        have not yet been unearthed by the Scholars of Aaran.
      </p>
    </div>
  );
};