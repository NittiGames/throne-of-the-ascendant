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
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-yellow-400/20">
              <Image
                src="/images/sprites/TotA Symbol 1.png"
                alt="Logo"
                fill
                style={{
                  objectFit: 'cover',
                  WebkitMaskImage: 'url("/images/sprites/TotA Symbol 1.png")',
                  WebkitMaskSize: 'cover',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: 'url("/images/sprites/TotA Symbol 1.png")',
                  maskSize: 'cover',
                  maskRepeat: 'no-repeat'
                }}
              />
            </div>

            <div>
              <div className="font-black tracking-wide">
                THRONE OF THE ASCENDANT
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.25em]">
                By Nitti Games
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#about">About</a>
            <a href="#traditions">Traditions</a>
            <a href="#gallery">Gallery</a>
            <a href="#lore">Lore</a>
            <a href="#community">Community</a>
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
        <div className="absolute inset-0 z-10 pointer-events-none">

          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 left-[-6%] w-[58%] h-full"
          >
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
          </motion.div>

          <motion.div
            animate={{ x: [10, -10, 10] }}
            transition={{ duration: 11, repeat: Infinity }}
            className="absolute bottom-0 right-[-6%] w-[58%] h-full"
          >
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