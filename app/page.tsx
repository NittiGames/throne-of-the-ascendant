'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HOW_TO_PLAY_DATA } from './data/how-to-play';
import { BUY_IT_NOW_DATA } from './data/buy-it-now';
import { RULEBOOK_DATA } from './data/rulebook';
import { TRADITIONS_DATA } from './data/traditions';
import { REGIONS_DATA } from './data/regions';
import { ABOUT_US_DATA } from './data/about-us';

const SEQUENCES = [
  {
    id: 'pars',
    region: 'Pars',
    bg: '/images/sprites/Pars-Background.png',
    leftHero: {
      name: 'Sofen of Pars',
      src: '/images/sprites/Sofen-of-Pars-2.png',
      glow: 'drop-shadow(0 0 35px rgba(18, 143, 28, 0.6))'
    },
    rightHero: {
      name: 'Hais of Pars',
      src: '/images/sprites/Hais-of-Pars-3.png',
      glow: 'drop-shadow(0 0 35px rgba(55, 182, 241, 0.6))'
    }
  },
  {
    id: 'aklas',
    region: 'Aklas',
    bg: '/images/sprites/Aklas-Background.png',
    leftHero: {
      name: 'Vecta of Aklas',
      src: '/images/sprites/vecta-of-aklas-3.png',
      glow: 'drop-shadow(0 0 35px rgba(122, 231, 245, 0.6))'
    },
    rightHero: {
      name: 'Fiena of Aklas',
      src: '/images/sprites/fiena-of-aklas-3.png',
      glow: 'drop-shadow(0 0 35px rgba(20, 184, 166, 0.6))'
    }
  },
  {
    id: 'aaran',
    region: 'Aaran',
    bg: '/images/sprites/Aaran-Background.png',
    leftHero: {
      name: 'Seib of Aaran',
      src: '/images/sprites/seib-of-aaran-3.png',
      glow: 'drop-shadow(0 0 35px rgba(207, 117, 235, 0.6))'
    },
    rightHero: {
      name: 'Trok of Aaran',
      src: '/images/sprites/trok-of-aaran-3.png',
      glow: 'drop-shadow(0 0 35px rgba(248, 96, 69, 0.6))'
    }
  }
];

type TraditionKey = keyof typeof TRADITIONS_DATA;

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const active = SEQUENCES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedTradition ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTradition]);

  const traditionsList = Object.keys(TRADITIONS_DATA);

  const currentLore : any =
    selectedTradition
      ? TRADITIONS_DATA[selectedTradition as TraditionKey]
      : null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans select-none relative">

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes smoke-rise-thin {
              0% {
                transform: translate(-50%, 20px) scaleX(0.5) scaleY(0.5) rotate(0deg);
                opacity: 0;
                filter: blur(8px);
              }
              15% {
                opacity: 0.65;
                filter: blur(10px);
              }
              50% {
                transform: translate(-35%, -15px) scaleX(1.1) scaleY(1.3) rotate(80deg);
                opacity: 0.45;
                filter: blur(16px);
              }
              100% {
                transform: translate(-15%, -45px) scaleX(1.6) scaleY(1.8) rotate(190deg);
                opacity: 0;
                filter: blur(28px);
              }
            }

            .vfx-smoke-plume {
              animation: smoke-rise-thin 6s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
          `
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="relative h-40 w-40 rounded-2xl overflow-hidden border border-yellow-400/10">
              <Image
                src="/images/sprites/TotA Symbol 1.png"
                alt="Logo"
                fill
                sizes="1080px"
                priority
                className="object-contain"
              />
            </div>

            <div>
              <div className="font-black tracking-widest text-base md:text-lg">
                THRONE OF THE ASCENDANT
              </div>

              <div className="text-[14px] text-zinc-500 uppercase tracking-[0.3em] mt-0.5">
                By Nitti Games
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="relative">

  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="px-4 py-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition"
  >
    ☰ Menu
  </button>

  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden shadow-2xl"
      >

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-4 hover:bg-white/5 transition"
        >
          Home
        </a>

        <a
          href="#rulebook"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-4 hover:bg-white/5 transition"
        >
          Rulebook
        </a>

        <a
          href="#traditions"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-4 hover:bg-white/5 transition"
        >
          Traditions
        </a>

        <a
          href="#regions"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-4 hover:bg-white/5 transition"
        >
          Regions
        </a>

        <a
          href="#about-us"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-4 hover:bg-white/5 transition"
        >
          About Us
        </a>

      </motion.div>
    )}
  </AnimatePresence>

</div>
        </div>
      </header>

      {/* HERO */}
<section
  id="home"
  className="relative h-[700px] w-full overflow-hidden bg-black"
>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >

            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src={active.bg}
                alt={active.region}
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
            </div>

            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">

              <motion.div
                animate={{ x: [-8, 8, -8] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 left-[-4%] w-[54%] h-full"
              >
                <Image
                  src={active.leftHero.src}
                  alt={active.leftHero.name}
                  fill
                  sizes="50vw"
                  priority
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    filter: active.leftHero.glow
                  }}
                />
              </motion.div>

              <motion.div
                animate={{ x: [8, -8, 8] }}
                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 right-[-4%] w-[54%] h-full"
              >
                <Image
                  src={active.rightHero.src}
                  alt={active.rightHero.name}
                  fill
                  sizes="50vw"
                  priority
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    filter: active.rightHero.glow
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* HERO TEXT */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6">

          <div className="text-[16px] font-bold uppercase tracking-[0.4em] text-violet-500 mb-4">
            Epic Fantasy Strategy Card Game
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight max-w-5xl leading-none">
            Forge
            <br />
            Evolve
            <br />
            Dominate
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-base text-amber-300 leading-relaxed">
            Build your Warband. Master ancient Traditions.
            Crush rival factions in a dark fantasy battlefield where positioning,
            tempo and tactical sequencing decide the fate of empires.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">

            <a
              href="#how-to-play"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-black uppercase tracking-wider text-xs hover:bg-yellow-400 transition"
            >
              How to Play
            </a>

            <a
              href="#buy-it-now"
              className="px-6 py-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur text-white font-black uppercase tracking-wider text-xs hover:bg-white hover:text-black transition"
            >
              Buy it Now
            </a>

          </div>
        </div>
      </section>

<section
  id="how-to-play"
  className="bg-zinc-950 py-20"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-black uppercase mb-8">
      {HOW_TO_PLAY_DATA.title}
    </h2>

    <p className="text-zinc-300 leading-relaxed">
      {HOW_TO_PLAY_DATA.description}
    </p>

  </div>
</section>

<section
  id="buy-it-now"
  className="bg-black py-20 border-t border-white/10"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-black uppercase mb-8">
      {BUY_IT_NOW_DATA.title}
    </h2>

    <p className="text-zinc-300 mb-8">
      {BUY_IT_NOW_DATA.description}
    </p>

  </div>
</section>

<section
  id="rulebook"
  className="bg-zinc-950 py-20 border-t border-white/10"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-black uppercase mb-8">
      {RULEBOOK_DATA.title}
    </h2>

    <p className="text-zinc-300">
      {RULEBOOK_DATA.description}
    </p>

  </div>
</section>

      {/* TRADITIONS */}
      <section
        id="traditions"
        className="bg-zinc-950 border-y border-white/5 py-20"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="border-b border-white/10 pb-6 mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-1">
              Strategic Masteries
            </span>

            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Combat Traditions
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

            {traditionsList.map((name) => (
              <div
                key={name}
                onClick={() => setSelectedTradition(name)}
                className="group relative flex flex-col items-center bg-zinc-900/20 border border-white/5 hover:border-zinc-500/30 rounded-xl p-5 text-center transition-all duration-500 overflow-hidden cursor-pointer hover:bg-zinc-900/50"
              >

                <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                  <div
                    className="absolute bottom-4 left-1/2 w-10 h-36 mix-blend-screen vfx-smoke-plume"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 100%)'
                    }}
                  />
                </div>

                <div className="relative h-14 w-14 mb-3 z-10 transition-transform duration-500 transform group-hover:scale-105">
                  <Image
                    src={`/images/sprites/${name.replace(/\s+/g, '-')}.png`}
                    alt={name}
                    fill
                    unoptimized
                    sizes="56px"
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xs font-bold tracking-wide text-zinc-400 group-hover:text-zinc-200 transition-colors duration-500 uppercase line-clamp-2 z-10">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

<section
  id="regions"
  className="bg-zinc-950 py-20 border-t border-white/10"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-black uppercase mb-8">
      {REGIONS_DATA.title}
    </h2>

    <p className="text-zinc-300">
      {REGIONS_DATA.description}
    </p>

  </div>
</section>

<section
  id="about-us"
  className="bg-black py-20 border-t border-white/10"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-black uppercase mb-8">
      {ABOUT_US_DATA.title}
    </h2>

    <p className="text-zinc-300">
      {ABOUT_US_DATA.description}
    </p>

  </div>
</section>

      {/* POPUP */}
      <AnimatePresence>

        {selectedTradition && currentLore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedTradition(null)}
          >

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-5xl bg-[#09090b] border border-zinc-800/80 rounded-2xl p-6 md:p-12 my-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedTradition(null)}
                className="absolute top-6 right-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white rounded-full p-2.5 transition-all"
              >
                ✕
              </button>

              {/* SEALED */}
              {currentLore.sealed ? (

                <div className="flex flex-col items-center justify-center py-16 text-center">

                  <div className="relative h-20 w-20 mb-6 opacity-20 grayscale">
                    <Image
                      src={`/images/sprites/${selectedTradition.replace(/\s+/g, '-')}.png`}
                      alt={selectedTradition}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    Archives Sealed
                  </h3>

                  <p className="text-zinc-600 max-w-sm text-xs md:text-sm leading-relaxed">
                    The sacred masteries of the{' '}
                    <span className="text-zinc-400 font-semibold">
                      {selectedTradition}
                    </span>{' '}
                    have not yet been unearthed.
                  </p>

                </div>

              ) : (

                <div className="space-y-12">

                  {/* HEADER */}
                  <div className="flex flex-col items-center text-center border-b border-zinc-800 pb-8">

                    <div className="relative h-24 w-24 mb-4">
                      <Image
                        src={`/images/sprites/${selectedTradition.replace(/\s+/g, '-')}.png`}
                        alt={selectedTradition}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-zinc-100">
                      {selectedTradition}
                    </h2>

                    <div className="text-xs font-black tracking-[0.3em] text-zinc-400 uppercase mt-1.5">
                      {currentLore.subtitle}
                    </div>

                    <div className="text-sm text-zinc-400 font-light leading-relaxed max-w-3xl mt-6 italic whitespace-pre-line">
                      “{currentLore.summary}”
                    </div>

                  </div>

                  {/* BLOODLINES */}
                  {currentLore.bloodlines && (

                    <div className="space-y-6">

                      <h3 className="text-xs font-black tracking-[0.2em] text-zinc-500 uppercase">
                        {currentLore.bloodlineTitle || 'Core Bloodlines'}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {currentLore.bloodlines.map((bl: any, idx: number) => (
                          <div
                            key={idx}
                            className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6"
                          >

                            <div className="flex items-baseline justify-between gap-2 mb-2">
                              <h4 className="text-sm font-black tracking-wide text-zinc-200 uppercase">
                                {bl.faction}
                              </h4>

                              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                                {bl.epithet}
                              </span>
                            </div>

                            <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                              {bl.description}
                            </p>

                            <div className="bg-black/40 border border-zinc-800/40 rounded-lg p-4">
                              <span className="text-[10px] font-bold tracking-wider text-yellow-500/80 uppercase block mb-1">
                                {bl.showcaseTitle}
                              </span>

                              <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                                {bl.showcaseDesc}
                              </p>
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* THREAT */}
                  {'threat' in currentLore && currentLore.threat && (

                    <div className="space-y-4">

                      <h3 className="text-xs font-black tracking-[0.2em] text-zinc-500 uppercase">
                        Threat Analysis
                      </h3>

                      <div className="bg-gradient-to-br from-zinc-950 to-[#0e0e11] border border-zinc-800 rounded-xl p-6 md:p-8">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                          <div className="md:col-span-2">

                            <h4 className="text-base font-black text-zinc-200 uppercase tracking-wide mb-1">
                              {currentLore.threat?.title}
                            </h4>

                            <p className="text-xs text-zinc-400 font-light mb-6 leading-relaxed">
                              {currentLore.threat?.summary}
                            </p>

                            <div className="border-l-2 border-zinc-700 pl-4">
                              <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest block">
                                {currentLore.threat?.bossName}
                              </span>

                              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                {currentLore.threat.bossDesc}
                              </p>
                            </div>

                          </div>

                          {currentLore.threat?.bossImage && (
                            <div className="relative h-56 w-full rounded-lg border border-zinc-800 bg-black/40 p-2 overflow-hidden flex items-center justify-center">

                              <Image
                                src={currentLore.threat.bossImage}
                                alt={currentLore.threat.bossName}
                                fill
                                sizes="300px"
                                className="object-contain"
                              />

                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  )}

                  {/* RELICS */}
                  {currentLore.relics && (

                    <div className="space-y-4">

                      <h3 className="text-xs font-black tracking-[0.2em] text-zinc-500 uppercase">
                        Relics of the Forge
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {currentLore.relics.map((relic: any, idx: number) => (
                          <div
                            key={idx}
                            className="p-5 rounded-xl bg-zinc-900/20 border border-zinc-800/60"
                          >

                            <div className="flex items-baseline justify-between gap-2 mb-1.5">

                              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wide">
                                {relic.name}
                              </span>

                              <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">
                                {relic.type}
                              </span>

                            </div>

                            <p className="text-xs text-zinc-400 font-light leading-relaxed">
                              {relic.description}
                            </p>

                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* FOOTER */}
<footer className="border-t border-white/10 bg-black py-12 mt-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <div className="text-lg font-black tracking-widest text-white">
      NITTI GAMES
    </div>

    <p className="mt-3 text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
  Independent publisher of premium strategy card games and fantasy worlds.
</p>

<p className="mt-2 text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
  Creator of <span className="text-amber-300 font-semibold">Throne of the Ascendant™</span>.
</p>

    <div className="mt-6 text-xs text-zinc-500 uppercase tracking-[0.25em]">
      Chile
    </div>
    <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-400">
      <a
        href="mailto:contact@nittigames.com"
        className="hover:text-amber-300 transition-colors"
      >

      </a>
    </div>

    <div className="mt-8 text-xs text-zinc-600">
      © {new Date().getFullYear()} Nitti Games. All rights reserved.
    </div>

  </div>
</footer>
    </div>
  );
}