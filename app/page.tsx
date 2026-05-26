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
      
      {/* CIGARETTE WHITE SMOKE SIMULATION SHADER */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smoke-rise-thin {
          0% { transform: translate(-50%, 20px) scaleX(0.5) scaleY(0.5) rotate(0deg); opacity: 0; filter: blur(8px); }
          15% { opacity: 0.65; filter: blur(10px); }
          50% { transform: translate(-35%, -15px) scaleX(1.1) scaleY(1.3) rotate(80deg); opacity: 0.45; filter: blur(16px); }
          100% { transform: translate(-15%, -45px) scaleX(1.6) scaleY(1.8) rotate(190deg); opacity: 0; filter: blur(28px); }
        }
        @keyframes smoke-drift-shear {
          0% { transform: translate(-45%, 10px) scaleX(0.7) scaleY(0.7) rotate(180deg); opacity: 0; filter: blur(12px); }
          25% { opacity: 0.55; filter: blur(14px); }
          70% { transform: translate(-60%, -25px) scaleX(1.4) scaleY(1.5) rotate(270deg); opacity: 0.3; filter: blur(22px); }
          100% { transform: translate(-75%, -55px) scaleX(2.1) scaleY(1.9) rotate(360deg); opacity: 0; filter: blur(36px); }
        }
        @keyframes smoke-plume-base {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.15) rotate(180deg); opacity: 0.45; }
        }
        .vfx-smoke-plume { animation: smoke-rise-thin 6s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .vfx-smoke-shear { animation: smoke-drift-shear 8s infinite cubic-bezier(0.39, 0.575, 0.565, 1); }
        .vfx-smoke-base { animation: smoke-plume-base 10s infinite linear; }
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

      {/* COMBAT TRADITIONS - MONOCHROMATIC CIGARETTE SMOKE MATRIX */}
      <section id="traditions" className="bg-zinc-950 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">Strategic Masteries</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Combat Traditions</h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              Unlock twenty-three custom combat pathways enveloped in realistic, rising wisp arrays mimicking genuine smoke condensation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {TRADITIONS.map((name) => {
              const fileName = name.replace(/\s+/g, '-');
              const imagePath = `/images/sprites/${fileName}.png`;

              return (
                <div 
                  key={name}
                  className="group relative flex flex-col items-center bg-zinc-900/30 border border-white/5 hover:border-white/10 rounded-2xl p-5 text-center transition-all duration-500 overflow-hidden"
                >
                  {/* REALISTIC CIGARETTE WHITE SMOKE SIMULATOR CONTAINER */}
                  <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                    
                    {/* Smoke Strand 1: Rising Narrow Core Wisp */}
                    <div 
                      className="absolute bottom-6 left-1/2 w-12 h-44 mix-blend-screen vfx-smoke-plume"
                      style={{
                        background: 'linear-gradient(to top, rgba(255,255,255,0.4) 0%, rgba(240,240,245,0.2) 30%, rgba(200,200,205,0.05) 70%, transparent 100%)'
                      }}
                    />

                    {/* Smoke Strand 2: Counter-Shearing Wide Dissipation Trail */}
                    <div 
                      className="absolute bottom-8 left-1/2 w-20 h-40 mix-blend-screen vfx-smoke-shear"
                      style={{
                        animationDelay: '-2s',
                        background: 'linear-gradient(to top, rgba(245,245,250,0.3) 0%, rgba(215,215,220,0.15) 40%, rgba(180,180,185,0.02) 80%, transparent 100%)'
                      }}
                    />

                    {/* Smoke Layer 3: Slow Ambient Drift Cluster (Creates background density) */}
                    <div 
                      className="absolute top-4 left-1/4 w-28 h-28 mix-blend-screen filter blur-2xl vfx-smoke-base"
                      style={{
                        borderRadius: '45% 55% 50% 50% / 40% 45% 55% 60%',
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(220,220,225,0.03) 55%, transparent 75%)'
                      }}
                    />
                  </div>

                  {/* EMBLEM IMAGE ASSET LAYER */}
                  <div 
                    className="relative h-16 w-16 mb-4 z-10 transition-all duration-700 transform group-hover:scale-105"
                    style={{
                      filter: `drop-shadow(0 6px 12px rgba(0,0,0,0.95)) drop-shadow(0 0 15px rgba(255,255,255,0.15))`
                    }}
                  >
                    <Image src={imagePath} alt={name} fill unoptimized sizes="64px" className="object-contain" />
                  </div>

                  {/* CARD TITLE LABEL */}
                  <h3 className="text-xs md:text-sm font-bold tracking-wide text-zinc-400 group-hover:text-white transition-colors duration-500 uppercase line-clamp-2 z-10">
                    {name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LORE */}
      <section id="lore" className="bg-zinc-900 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">The World&apos;s Traditions</h2>

          <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Intro */}
            <div className="mb-10 border-b border-white/10 pb-8">
              <h3 className="text-3xl font-black text-yellow-400 uppercase tracking-tight mb-4">The Pyric Tradition: The Silver Eclipse</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                In the world of Throne of the Ascendant, the Pyric Tradition is rarely a chaotic, roaring inferno. For those who truly master it, fire is elegant, precise, and devoid of smoke. It is the blinding, silver-white heat of a dying star set against a pitch-black sky. To walk this path is to learn the art of total consumption—burning away one&apos;s own hesitations, flaws, and worldly attachments until only pure, focused intent remains.
              </p>
            </div>

            {/* Bloodlines */}
            <div className="mb-12">
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.25em] mb-6">The Bloodlines of Flame</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-950/50 p-6 rounded-xl border border-white/5">
                  <h5 className="text-xl font-bold text-white mb-3">The Scholars of Aaran <span className="text-yellow-500/80 text-sm block md:inline md:ml-2">(The Silver Flame)</span></h5>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    In the deep, shadowed foundries of Aaran, fire is treated as a severe science. The Initiates here are taught to weave Arcanic geometry into their flames, binding raw, destructive heat into razor-sharp edges and focused points.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    <strong className="text-zinc-200">The Ascent of Trok:</strong> We see this philosophy perfectly realized in the journey of Trok of Aaran. In his youth, his flame is an unruly spark—raw and aggressive, but ultimately undisciplined. As he endures the trials of the realm and sheds his reckless nature, he reaches the absolute pinnacle of Ascendant mastery. In this final state, he no longer swings a blade of heavy steel. Instead, he wields a concentrated, blinding arc of thermal energy. A single, silent strike from Trok can sever the thickest iron armor of an enemy warlord, leaving no ash behind, only a glowing silver seam.
                  </p>
                </div>

                <div className="bg-zinc-950/50 p-6 rounded-xl border border-white/5">
                  <h5 className="text-xl font-bold text-white mb-3">The Hearthguard of Noren <span className="text-orange-500/80 text-sm block md:inline md:ml-2">(The Iron Resolve)</span></h5>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    If Aaran represents the cutting edge of the flame, Noren represents its enduring, unyielding warmth. The defenders of Noren use the Pyric Tradition not just to destroy, but to fuel their indomitable spirit, standing as living bulwarks against the creeping dark.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    <strong className="text-zinc-200">The Crucible of Vaan:</strong> Vaan of Noren does not cast fire outward; he contains it. His heavy, blackened armor serves as a walking furnace. The overwhelming, god-like physical might he brings to the battlefield comes from an internal, terrifying heat that pushes his mortal body far beyond its natural limits. When Vaan speaks in the dead of night, his voice carries the comforting, commanding crackle of a hearth, capable of incinerating fear and igniting absolute loyalty in the hearts of routing soldiers.
                  </p>
                </div>
              </div>
            </div>

            {/* Apex Threat */}
            <div className="mb-12">
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.25em] mb-4">The Apex Threat</h4>
              <h5 className="text-2xl font-bold text-red-500 mb-3">The Corrupted Ash</h5>
              <p className="text-zinc-300 leading-relaxed mb-4">
                The ultimate test for any Pyric master is confronting the twisted, god-like entities of their own element. The lesser Dominators, Galaath and Sofaldart, are devastating forces of nature, but the true nightmare of the realm is <strong>Aspholghert</strong>.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Aspholghert represents an apocalyptic, world-ending heat. This Dominator does not glow; it is an entity of suffocating, oily black cinder that consumes light itself. When Aspholghert marches, the ambient temperature rises so drastically that rivers instantly boil into steam and stone fortresses run like wax. To survive Aspholghert, defeat it, and claim its crystallized Heart is to prove that a Warband&apos;s inner flame is pure enough to incinerate corruption itself.
              </p>
            </div>

            {/* Relics */}
            <div>
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.25em] mb-6">Relics of the Forge</h4>
              <p className="text-zinc-400 mb-4 text-sm">To equip these masters, the vaults of the world hold artifacts that reflect this deadly elegance:</p>
              <ul className="space-y-4">
                <li className="bg-black/50 p-5 rounded-lg border border-white/5 text-zinc-300">
                  <strong className="text-yellow-400 text-lg block mb-1">The Silver Ignis</strong> 
                  A minimalist longsword devoid of a crossguard, featuring a sleek obsidian hilt. It does not burst into ostentatious, roaring flames. Instead, the silver blade hums softly, heating to a microscopic, white-hot degree that allows it to slide through iron and bone as if they were silk.
                </li>
                <li className="bg-black/50 p-5 rounded-lg border border-white/5 text-zinc-300">
                  <strong className="text-yellow-400 text-lg block mb-1">Mantle of the White Ember</strong> 
                  A dark, flowing cloak woven from the conceptual threads of absolute combustion. It protects its wearer not with physical weight or armor plating, but by instantly converting the kinetic energy of any incoming physical strike into a harmless, dissipating flash of heat.
                </li>
              </ul>
            </div>
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