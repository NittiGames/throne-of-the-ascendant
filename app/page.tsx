'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TRADITIONS_DATA } from './data/traditions';

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
            <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-yellow-400/10">
              <Image
                src="/images/sprites/TotA Symbol 1.png"
                alt="Logo"
                fill
                sizes="64px"
                priority
                className="object-contain"
              />
            </div>

            <div>
              <div className="font-black tracking-widest text-base md:text-lg">
                THRONE OF THE ASCENDANT
              </div>

              <div className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mt-0.5">
                By Nitti Games
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a href="#traditions" className="hover:text-white transition">
              Traditions
            </a>

            <a href="#world" className="hover:text-white transition">
              World
            </a>

            <a href="#releases" className="hover:text-white transition">
              Sets
            </a>

            <a href="#play" className="hover:text-white transition">
              How to Play
            </a>

            <a href="#community" className="hover:text-white transition">
              Community
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[550px] w-full overflow-hidden bg-black">

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

          <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-4">
            Tactical Physical Card Game
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight max-w-5xl leading-none">
            Ascend.
            <br />
            Conquer.
            <br />
            Dominate.
          </h1>

          <p className="mt-6 max-w-2xl text-sm md:text-base text-zinc-400 leading-relaxed">
            Build your Warband. Master ancient Traditions.
            Crush rival factions in a dark fantasy battlefield where positioning,
            tempo and tactical sequencing decide the fate of empires.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">

            <a
              href="#traditions"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-black uppercase tracking-wider text-xs hover:bg-yellow-400 transition"
            >
              Explore Traditions
            </a>

            <button
              className="px-6 py-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur text-white font-black uppercase tracking-wider text-xs hover:bg-white hover:text-black transition"
            >
              Starter Set
            </button>

          </div>
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
    </div>
  );
}