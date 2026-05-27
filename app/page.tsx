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
        <>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">Mythos & Archives</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">{name}</h2>
            <h3 className="text-xl md:text-2xl font-medium text-yellow-500 tracking-wide">The Silver Eclipse</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-zinc-300 leading-relaxed">
            <div className="lg:col-span-7 space-y-12">
              <p className="text-lg text-zinc-300">
                In the world of Throne of the Ascendant, the Pyric Tradition is rarely a chaotic, roaring inferno. For those who truly master it, fire is elegant, precise, and devoid of smoke. It is the blinding, silver-white heat of a dying star set against a pitch-black sky. To walk this path is to learn the art of total consumption—burning away one's own hesitations, flaws, and worldly attachments until only pure, focused intent remains.
              </p>
              <div>
                <h4 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">The Bloodlines of Flame</h4>
                <div className="mb-10">
                  <h5 className="text-lg font-bold text-yellow-500 mb-3">The Scholars of Aaran <span className="text-zinc-500 font-normal">(The Silver Flame)</span></h5>
                  <p className="mb-4 text-sm md:text-base">In the deep, shadowed foundries of Aaran, fire is treated as a severe science. The Initiates here are taught to weave Arcanic geometry into their flames, binding raw, destructive heat into razor-sharp edges and focused points.</p>
                  <div className="bg-zinc-900/40 border-l-4 border-yellow-500 p-5 rounded-r-xl">
                    <strong className="text-white block mb-2 uppercase text-xs tracking-widest">The Ascent of Trok</strong>
                    <p className="text-sm text-zinc-400">We see this philosophy perfectly realized in the journey of Trok of Aaran. In his youth, his flame is an unruly spark—raw and aggressive, but ultimately undisciplined. As he endures the trials of the realm and sheds his reckless nature, he reaches the absolute pinnacle of Ascendant mastery. In this final state, he no longer swings a blade of heavy steel. Instead, he wields a concentrated, blinding arc of thermal energy. A single, silent strike from Trok can sever the thickest iron armor of an enemy warlord, leaving no ash behind, only a glowing silver seam.</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-yellow-500 mb-3">The Hearthguard of Noren <span className="text-zinc-500 font-normal">(The Iron Resolve)</span></h5>
                  <p className="mb-4 text-sm md:text-base">If Aaran represents the cutting edge of the flame, Noren represents its enduring, unyielding warmth. The defenders of Noren use the Pyric Tradition not just to destroy, but to fuel their indomitable spirit, standing as living bulwarks against the creeping dark.</p>
                  <div className="bg-zinc-900/40 border-l-4 border-yellow-500 p-5 rounded-r-xl">
                    <strong className="text-white block mb-2 uppercase text-xs tracking-widest">The Crucible of Vaan</strong>
                    <p className="text-sm text-zinc-400">Vaan of Noren does not cast fire outward; he contains it. His heavy, blackened armor serves as a walking furnace. The overwhelming, god-like physical might he brings to the battlefield comes from an internal, terrifying heat that pushes his mortal body far beyond its natural limits. When Vaan speaks in the dead of night, his voice carries the comforting, commanding crackle of a hearth, capable of incinerating fear and igniting absolute loyalty in the hearts of routing soldiers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gradient-to-b from-red-950/20 to-black border border-red-900/30 rounded-2xl p-8 relative overflow-hidden group">
                <h4 className="text-sm font-black text-red-500 uppercase tracking-widest mb-4">The Apex Threat</h4>
                <h5 className="text-2xl font-bold text-white mb-4">The Corrupted Ash</h5>
                <p className="text-sm mb-4 text-zinc-400">The ultimate test for any Pyric master is confronting the twisted, god-like entities of their own element. The lesser Dominators, Galaath and Sofaldart, are devastating forces of nature, but the true nightmare of the realm is <strong className="text-white">Aspholghert</strong>.</p>
                <p className="text-sm text-zinc-400">Aspholghert represents an apocalyptic, world-ending heat. This Dominator does not glow; it is an entity of suffocating, oily black cinder that consumes light itself. When Aspholghert marches, the ambient temperature rises so drastically that rivers instantly boil into steam and stone fortresses run like wax. To survive Aspholghert, defeat it, and claim its crystallized Heart is to prove that a Warband&apos;s inner flame is pure enough to incinerate corruption itself.</p>
              </div>
              <div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8">
                <h4 className="text-xl font-black text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Relics of the Forge</h4>
                <ul className="space-y-6">
                  <li className="relative pl-4 border-l border-yellow-500/30"><strong className="text-yellow-400 block mb-1 text-sm tracking-wide uppercase">The Silver Ignis</strong><p className="text-sm text-zinc-400">A minimalist longsword devoid of a crossguard, featuring a sleek obsidian hilt. It does not burst into ostentatious, roaring flames. Instead, the silver blade hums softly, heating to a microscopic, white-hot degree that allows it to slide through iron and bone as if they were silk.</p></li>
                  <li className="relative pl-4 border-l border-yellow-500/30"><strong className="text-yellow-400 block mb-1 text-sm tracking-wide uppercase">Mantle of the White Ember</strong><p className="text-sm text-zinc-400">A dark, flowing cloak woven from the conceptual threads of absolute combustion. It protects its wearer not with physical weight or armor plating, but by instantly converting the kinetic energy of any incoming physical strike into a harmless, dissipating flash of heat.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    } else if (name === "Tidal Tradition") {
      return (
        <>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">Mythos & Archives</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">{name}</h2>
            <h3 className="text-xl md:text-2xl font-medium text-blue-500 tracking-wide">The Inescapable Undertow</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-zinc-300 leading-relaxed">
            <div className="lg:col-span-7 space-y-12">
              <p className="text-lg text-zinc-300">A true master of the Tidal Tradition does not waste energy generating flashy geysers. Their magic is heavy, silent, and terrifyingly absolute. They manipulate hydrostatic pressure, momentum, and the fluid dynamics within their enemies&apos; very veins. A duel with a Tidal master feels like fighting underwater—every movement you make is sluggish, resisted by an unseen, crushing weight, while they move with the terrifying, frictionless grace of an apex predator.</p>
              <div>
                <h4 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">The Bloodlines of the Deep</h4>
                <div className="mb-10">
                  <h5 className="text-lg font-bold text-blue-500 mb-3">The Wave-Breakers of Maers <span className="text-zinc-500 font-normal">(The Crushing Current)</span></h5>
                  <p className="mb-4 text-sm md:text-base">Maers is a wealthy, bustling coastal hub built on maritime laws and hidden vaults, constantly battling sea serpents rising from their harbor. Their Initiates treat the Tidal Tradition as a physical weapon. They do not wash enemies away; they shatter them.</p>
                  <div className="bg-zinc-900/40 border-l-4 border-blue-500 p-5 rounded-r-xl">
                    <strong className="text-white block mb-2 uppercase text-xs tracking-widest">The Ascent of Fryv</strong>
                    <p className="text-sm text-zinc-400">Fryv of Maers perfectly embodies this kinetic philosophy. As a swift skirmisher, Fryv uses the physical weight of water to augment his momentum. When a Maers combatant strikes, they wrap their weapons in high-pressure hydro-sheaths. A parried blow from Fryv doesn’t just deflect; it hits with the concentrated kinetic energy of a crashing wave, shattering the opponent’s wrists and buckling their armor through sheer hydrostatic shock.</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-blue-500 mb-3">The Navigators of Riels <span className="text-zinc-500 font-normal">(The Fathomless Pull)</span></h5>
                  <p className="mb-4 text-sm md:text-base">If Maers represents the violent crash of the wave upon the shore, Riels represents the silent, inescapable undertow. Riels is a city of deadly storms and desperate sailors, and their magic is about manipulation, navigation, and suffocation.</p>
                  <div className="bg-zinc-900/40 border-l-4 border-blue-500 p-5 rounded-r-xl">
                    <strong className="text-white block mb-2 uppercase text-xs tracking-widest">The Command of Meda</strong>
                    <p className="text-sm text-zinc-400">Meda of Riels does not fight the storm; she dictates it. Riels masters weave currents of heavy, humid air and localized vacuums. They alter the battlefield&apos;s atmosphere, drawing enemies off-balance and literally pulling the breath from their lungs. To fight Meda is to experience deep-sea panic on dry land, suffocating in an unseen ocean while she calmly steps in for the execution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gradient-to-b from-blue-950/20 to-black border border-blue-900/30 rounded-2xl p-8 relative overflow-hidden group">
                <h4 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">The Apex Threat</h4>
                <h5 className="text-2xl font-bold text-white mb-4">The Abyssal Leviathan</h5>
                <p className="text-sm mb-4 text-zinc-400">While Hookonan and Shraseer are horrors of the deep, the true, apocalyptic threat of the oceans is the Dominator <strong className="text-white">Octencolt</strong>. Octencolt is not merely a beast; it is a walking, localized tsunami. It represents the ocean&apos;s ancient hunger to reclaim the land. This is why the Octencolt Hordes throw themselves so violently at the city of Aaran—it is a primal, elemental war to extinguish the Pyric foundries once and for all.</p>
              </div>
              <div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8">
                <h4 className="text-xl font-black text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Relics of the Abyss</h4>
                <ul className="space-y-6">
                  <li className="relative pl-4 border-l border-blue-500/30"><strong className="text-cyan-400 block mb-1 text-sm tracking-wide uppercase">Tidenwelv</strong><p className="text-sm text-zinc-400">This froststeel blade does not cut to make an enemy bleed; it cuts to drain their momentum.</p></li>
                  <li className="relative pl-4 border-l border-blue-500/30"><strong className="text-cyan-400 block mb-1 text-sm tracking-wide uppercase">The Abyssal Lure</strong><p className="text-sm text-zinc-400">A handheld, drowned-brass lantern that emits an eerie, bioluminescent blue light. It bends the perception of depth and space.</p></li>
                  <li className="relative pl-4 border-l border-blue-500/30"><strong className="text-cyan-400 block mb-1 text-sm tracking-wide uppercase">The Drowned Crown</strong><p className="text-sm text-zinc-400">Wrought from blackened, jagged coral, this helm grants the wearer the terrifying silence of the Mariana Trench.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    } else if (name === "Terran Tradition") {
      return (
        <>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">Mythos & Archives</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">{name}</h2>
            <h3 className="text-xl md:text-2xl font-medium text-amber-600 tracking-wide">The Weight of the World</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-zinc-300 leading-relaxed">
            <div className="lg:col-span-7 space-y-12">
              <p className="text-lg text-zinc-300">Masters of the Terran Tradition do not "cast" spells. Instead, they command the very foundation of the realm. They manipulate tectonic stress, gravitational density, and the crystalline structure of the earth itself. A Terran master does not dodge. Why would a mountain dodge a pebble? They simply endure. Their magic is characterized by a heavy, resonant silence—the feeling of being deep underground, where the pressure is absolute and the air is thick with the scent of ozone and ancient mineral.</p>
              <div>
                <h4 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">The Bloodlines of the Stone</h4>
                <div className="mb-10">
                  <h5 className="text-lg font-bold text-amber-600 mb-3">The Vault-Keepers of Maers <span className="text-zinc-500 font-normal">(The Iron-Rooted)</span></h5>
                  <p className="mb-4 text-sm md:text-base">Maers, known for its harbor, also hides the deep Terran vaults beneath its streets. The Maers Terran practitioners view the earth as a series of interlocking locks and seals.</p>
                  <div className="bg-zinc-900/40 border-l-4 border-amber-600 p-5 rounded-r-xl">
                    <strong className="text-white block mb-2 uppercase text-xs tracking-widest">The Endurance of Galts</strong>
                    <p className="text-sm text-zinc-400">Galts of Maers embodies the transition from a nimble skirmisher to a living fortress. A high Terran master, Galts does not just hold his ground; he is the ground. When he adopts a defensive stance, the earth around his feet calcifies, and his own skin takes on the hardness of granite. He is the master of the "Stone Vault," a tactical state where his presence creates an area of absolute spatial denial that no enemy can breach without shattering their own weapons.</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-amber-600 mb-3">The Wardens of Toran <span className="text-zinc-500 font-normal">(The Living Granite)</span></h5>
                  <p className="mb-4 text-sm md:text-base">Toran is a city of stubborn stone-wardens, where the Terran Tradition is synonymous with duty and the defense of ancient oaths.</p>
                  <div className="bg-zinc-900/40 border-l-4 border-amber-600 p-5 rounded-r-xl">
                    <strong className="text-white block mb-2 uppercase text-xs tracking-widest">The Resilience of Pilos</strong>
                    <p className="text-sm text-zinc-400">Pilos of Toran practices a more spiritual, meditative form of the Terran path. He speaks to the earth, feeling the vibrations of footsteps miles away. Pilos represents the "Stone Council" philosophy—a style of combat that is entirely reactive. He waits for the opponent to exhaust themselves against his defenses, only striking when the enemy’s own momentum has betrayed them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gradient-to-b from-amber-950/20 to-black border border-amber-900/30 rounded-2xl p-8 relative overflow-hidden group">
                <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-4">The Apex Threat</h4>
                <h5 className="text-2xl font-bold text-white mb-4">The Tectonic Colossus</h5>
                <p className="text-sm mb-4 text-zinc-400">The Terran Dominators—Bicomatan, Arsnat, and Poxelgrave—are not beasts that run or hunt. They are moving mountains. They cause earthquakes simply by existing. When a Terran Dominator is active, the entire terrain of the battlefield changes. Paths close, new walls of obsidian rise from the ground, and the very gravity of the area feels heavier. A Warband must essentially "quarry" these behemoths, chipping away at their impenetrable defenses until their inner, tectonic Heart—which glows with the heat of the planet's core—is exposed.</p>
              </div>
              <div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8">
                <h4 className="text-xl font-black text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Relics of the Lithosphere</h4>
                <ul className="space-y-6">
                  <li className="relative pl-4 border-l border-amber-700/30"><strong className="text-amber-400 block mb-1 text-sm tracking-wide uppercase">The Aegis of Toran</strong><p className="text-sm text-zinc-400">A tower shield carved from a single, seamless block of living basalt. It absorbs kinetic energy, feeding it back into the ground to create localized tremors.</p></li>
                  <li className="relative pl-4 border-l border-amber-700/30"><strong className="text-amber-400 block mb-1 text-sm tracking-wide uppercase">Shard of the Earth-Heart</strong><p className="text-sm text-zinc-400">A pulsating gemstone that anchors the wielder to the immediate environment, making them an immovable object.</p></li>
                  <li className="relative pl-4 border-l border-amber-700/30"><strong className="text-amber-400 block mb-1 text-sm tracking-wide uppercase">The Seismic Maul</strong><p className="text-sm text-zinc-400">A heavy, two-handed weapon of volcanic glass that sends shockwaves through the feet of every nearby enemy.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="relative h-24 w-24 mb-6 opacity-30 grayscale filter blur-[1px]">
          <Image src={`/images/sprites/${name.replace(/\s+/g, '-')}.png`} alt={name} fill className="object-contain" />
        </div>
        <h3 className="text-2xl font-black text-zinc-400 uppercase tracking-widest mb-3">Archives Sealed</h3>
        <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
          The sacred texts and strategic masteries of the <span className="text-zinc-300 font-semibold">{name}</span> have not yet been unearthed by the Scholars of Aaran. Check back soon.
        </p>
      </div>
    );
  };

  return (
<div className="min-h-screen bg-black text-white font-sans select-none relative">      <style dangerouslySetInnerHTML={{__html: `
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