"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ScrollText,
  Swords,
  Users,
  Sparkles,
  ShoppingBag,
  BookOpen,
  Shield,
} from "lucide-react";

const traditions = [
  { name: "Fire", desc: "Aggressive combat specialists focused on overwhelming pressure and destructive power." },
  { name: "Water", desc: "Adaptive tacticians who manipulate tempo, control, and battlefield flow." },
  { name: "Earth", desc: "Defensive warriors with unmatched resilience and battlefield presence." },
  { name: "Arcane", desc: "Masters of mystical energy and unpredictable magical interactions." },
  { name: "Shadow", desc: "Stealthy manipulators who specialize in deception and disruption." },
  { name: "Light", desc: "Holy guardians focused on protection, healing, and strategic balance." },
  { name: "Rune", desc: "Ancient scholars channeling powerful sigils and crafted enchantments." },
  { name: "Astral", desc: "Cosmic entities capable of bending reality and transcending mortal limits." },
];

const features = [
  {
    title: "Competitive Strategy",
    desc: "Master tactical decisions, manage resources, and outplay your rivals.",
    icon: Swords,
  },
  {
    title: "Unique Warbands",
    desc: "Lead powerful factions with distinct playstyles and battlefield identities.",
    icon: Shield,
  },
  {
    title: "Living World",
    desc: "Discover a growing universe filled with lore, expansions, and new conflicts.",
    icon: BookOpen,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">

          {/* Centered Brand Column */}
          <div className="flex flex-col items-center gap-3">
            {/* 50% Larger Emblem Container (144px / h-36 w-36) */}
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

            {/* Game Titles */}
            <div>
              <div className="font-black tracking-widest text-lg md:text-xl">
                THRONE OF THE ASCENDANT
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.3em] mt-1">
                By Nitti Games
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8 text-sm text-zinc-300 mt-2">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#traditions" className="hover:text-white transition">Traditions</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#lore" className="hover:text-white transition">Lore</a>
            <a href="#community" className="hover:text-white transition">Community</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 z-0">

          <Image
            src="/images/sprites/Pars Background.png"
            alt="Background"
            fill
            priority
            className="object-cover scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/40 to-black" />
          <div className="absolute inset-0 bg-yellow-500/10 blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,black_85%)]" />
        </div>

{/* CHARACTERS */}
        <div className="absolute inset-0 z-20 pointer-events-none">

          {/* LEFT CHARACTER: Sofen of Pars */}
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[-6%] w-[58%] h-full group"
          >
            {/* Ethereal Power Glow (Behind) */}
            <motion.div 
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.99, 1.02, 0.99] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 transition-all duration-500 group-hover:brightness-150"
              style={{
                filter: 'drop-shadow(0 0 35px rgba(234, 179, 8, 0.6)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.3)) brightness(200%)',
              }}
            >
              <Image
                src="/images/sprites/Sofen of Pars (2).png"
                alt="Left Hero Glow"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  WebkitMaskImage: 'url("/images/sprites/Sofen of Pars (2).png")',
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'bottom',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: 'url("/images/sprites/Sofen of Pars (2).png")',
                  maskSize: 'contain',
                  maskPosition: 'bottom',
                  maskRepeat: 'no-repeat'
                }}
              />
            </motion.div>

            {/* True Character Artwork (Front) */}
            <div className="absolute inset-0">
              <Image
                src="/images/sprites/Sofen of Pars (2).png"
                alt="Left Hero"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  WebkitMaskImage: 'url("/images/sprites/Sofen of Pars (2).png")',
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'bottom',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: 'url("/images/sprites/Sofen of Pars (2).png")',
                  maskSize: 'contain',
                  maskPosition: 'bottom',
                  maskRepeat: 'no-repeat'
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT CHARACTER: Hais of Pars */}
          <motion.div
            animate={{ x: [10, -10, 10] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-[-6%] w-[58%] h-full group"
          >
            {/* Ethereal Power Glow (Behind) */}
            <motion.div 
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.99, 1.02, 0.99] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 transition-all duration-500 group-hover:brightness-150"
              style={{
                filter: 'drop-shadow(0 0 35px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.3)) brightness(200%)',
              }}
            >
              <Image
                src="/images/sprites/Hais of Pars (3).png"
                alt="Right Hero Glow"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  WebkitMaskImage: 'url("/images/sprites/Hais of Pars (3).png")',
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'bottom',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: 'url("/images/sprites/Hais of Pars (3).png")',
                  maskSize: 'contain',
                  maskPosition: 'bottom',
                  maskRepeat: 'no-repeat'
                }}
              />
            </motion.div>

            {/* True Character Artwork (Front) */}
            <div className="absolute inset-0">
              <Image
                src="/images/sprites/Hais of Pars (3).png"
                alt="Right Hero"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  WebkitMaskImage: 'url("/images/sprites/Hais of Pars (3).png")',
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'bottom',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: 'url("/images/sprites/Hais of Pars (3).png")',
                  maskSize: 'contain',
                  maskPosition: 'bottom',
                  maskRepeat: 'no-repeat'
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-sm mb-6">
              <Sparkles size={16} />
              Tactical Fantasy Card Game
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95]">
              THRONE OF THE
              <span className="block text-yellow-400">
                ASCENDANT
              </span>
            </h1>

            <p className="mt-8 text-xl text-zinc-300 max-w-2xl">
              Command Warbands, dominate quests, and ascend above your rivals in a tactical fantasy card game.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-yellow-400 text-black px-7 py-4 rounded-2xl font-black">
                Join Discord
              </button>
              <button className="border border-white/20 px-7 py-4 rounded-2xl">
                Download Rulebook
              </button>
            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black">About the Game</h2>
        <p className="mt-6 text-zinc-400 max-w-2xl">
          Tactical asymmetric card game focused on strategy, factions, and narrative depth.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-6">

        {features.map((f) => {
          const Icon = f.icon;

          return (
            <div key={f.title} className="p-6 border border-white/10 rounded-2xl bg-white/5">
              <Icon className="text-yellow-400 mb-4" />
              <h3 className="text-xl font-black">{f.title}</h3>
              <p className="text-zinc-400 mt-2">{f.desc}</p>
            </div>
          );
        })}

      </section>

      {/* TRADITIONS */}
      <section id="traditions" className="border-y border-white/10 bg-zinc-950 px-6 py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

          {traditions.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-white/10 bg-black/40">
              <div className="text-yellow-400 text-2xl font-black">{t.name[0]}</div>
              <div className="text-xl font-black mt-4">{t.name}</div>
              <p className="text-zinc-400 text-sm mt-2">{t.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-zinc-500 text-sm border-t border-white/10">
        THRONE OF THE ASCENDANT © 2026 Nitti Games
      </footer>

    </div>
  );
}