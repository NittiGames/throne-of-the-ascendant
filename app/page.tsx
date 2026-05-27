'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SEQUENCES = [
  {
    id: 'pars',
    region: 'Pars',
    bg: '/images/sprites/Pars-Background.png',
    leftHero: {
      name: 'Sofen of Pars',
      src: '/images/sprites/Sofen of Pars (2).png',
      glow:
        'drop-shadow(0 0 35px rgba(234,179,8,0.6)) drop-shadow(0 0 60px rgba(249,115,22,0.3)) brightness(200%)',
    },
    rightHero: {
      name: 'Hais of Pars',
      src: '/images/sprites/Hais of Pars (3).png',
      glow:
        'drop-shadow(0 0 35px rgba(147,51,234,0.6)) drop-shadow(0 0 60px rgba(59,130,246,0.3)) brightness(200%)',
    },
  },
  {
    id: 'aklas',
    region: 'Aklas',
    bg: '/images/sprites/Aklas-Background.png',
    leftHero: {
      name: 'Vecta of Aklas',
      src: '/images/sprites/Vecta of Aklas (3).png',
      glow:
        'drop-shadow(0 0 35px rgba(239,68,68,0.6)) drop-shadow(0 0 60px rgba(22,163,74,0.4)) brightness(200%)',
    },
    rightHero: {
      name: 'Fiena of Aklas',
      src: '/images/sprites/Fiena of Aklas (3).png',
      glow:
        'drop-shadow(0 0 35px rgba(20,184,166,0.6)) drop-shadow(0 0 60px rgba(13,148,136,0.4)) brightness(200%)',
    },
  },
  {
    id: 'aaran',
    region: 'Aaran',
    bg: '/images/sprites/Aaran-Background.png',
    leftHero: {
      name: 'Seib of Aaran',
      src: '/images/sprites/Seib of Aaran (3).png',
      glow:
        'drop-shadow(0 0 35px rgba(34,197,94,0.6)) drop-shadow(0 0 60px rgba(22,163,74,0.4)) brightness(200%)',
    },
    rightHero: {
      name: 'Trok of Aaran',
      src: '/images/sprites/Trok of Aaran (3).png',
      glow:
        'drop-shadow(0 0 35px rgba(249,115,22,0.6)) drop-shadow(0 0 60px rgba(234,88,12,0.4)) brightness(200%)',
    },
  },
];

const TRADITIONS = [
  'Pyric Tradition',
  'Tidal Tradition',
  'Terran Tradition',
  'Aerial Tradition',
  'Glacial Tradition',
  'Voltanic Tradition',
  'Ferric Tradition',
  'Verdant Tradition',
  'Arcanic Tradition',
  'Luminous Tradition',
  'Umbral Tradition',
  'Ethereal Tradition',
  'Astral Tradition',
  'Demonic Tradition',
  'Runic Tradition',
  'Psionic Tradition',
  'Cosmic Tradition',
  'Ancestral Tradition',
  'Draconic Tradition',
  'Martial Tradition',
  'Venomous Tradition',
  'Radiant Core Tradition',
  'Rehma Tradition',
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);

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

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTradition]);

  const nextSequence = () => {
    setActiveIndex((prev) => (prev + 1) % SEQUENCES.length);
  };

  const prevSequence = () => {
    setActiveIndex((prev) => (prev - 1 + SEQUENCES.length) % SEQUENCES.length);
  };

  const renderTraditionLore = (name: string) => {
    if (name === 'Pyric Tradition') {
      return (
        <>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
              Mythos & Archives
            </span>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
              {name}
            </h2>

            <h3 className="text-xl md:text-2xl font-medium text-yellow-500 tracking-wide">
              The Silver Eclipse
            </h3>
          </div>

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            <p>
              In the world of Throne of the Ascendant, the Pyric Tradition is
              not mere fire. It is disciplined annihilation. Silver-white heat
              capable of slicing through steel without smoke or ash.
            </p>

            <div className="bg-zinc-900/40 border border-yellow-500/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-4">
                The Ascent of Trok
              </h4>

              <p>
                Trok of Aaran evolves from a reckless flame-wielder into a
                master of concentrated thermal arcs capable of severing iron
                armor with silent precision.
              </p>
            </div>
          </div>
        </>
      );
    }

    if (name === 'Tidal Tradition') {
      return (
        <>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
              Mythos & Archives
            </span>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
              {name}
            </h2>

            <h3 className="text-xl md:text-2xl font-medium text-blue-500 tracking-wide">
              The Inescapable Undertow
            </h3>
          </div>

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            <p>
              Masters of the Tidal Tradition manipulate pressure, momentum, and
              fluid dynamics. Fighting them feels like drowning on dry land.
            </p>

            <div className="bg-zinc-900/40 border border-blue-500/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-blue-400 mb-4">
                The Command of Meda
              </h4>

              <p>
                Meda of Riels bends humid air and atmospheric pressure to
                suffocate enemies before striking with surgical precision.
              </p>
            </div>
          </div>
        </>
      );
    }

    if (name === 'Terran Tradition') {
      return (
        <>
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
              Mythos & Archives
            </span>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
              {name}
            </h2>

            <h3 className="text-xl md:text-2xl font-medium text-amber-500 tracking-wide">
              The Weight of the World
            </h3>
          </div>

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            <p>
              Terran masters command tectonic force and gravitational density.
              They do not evade attacks. They endure them like mountains.
            </p>

            <div className="bg-zinc-900/40 border border-amber-500/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-amber-400 mb-4">
                The Endurance of Galts
              </h4>

              <p>
                Galts of Maers becomes a living fortress capable of anchoring
                entire battlefields with overwhelming defensive presence.
              </p>
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="relative h-24 w-24 mb-6 opacity-30">
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

        <p className="text-zinc-500 max-w-md">
          The sacred texts of the{' '}
          <span className="text-zinc-300 font-semibold">{name}</span> have not
          yet been unearthed.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans select-none relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes smoke-rise-thin {
              0% {
                transform: translate(-50%,20px) scale(0.5) rotate(0deg);
                opacity: 0;
                filter: blur(8px);
              }

              15% {
                opacity: 0.65;
              }

              50% {
                transform: translate(-35%,-15px) scale(1.3) rotate(80deg);
                opacity: 0.45;
              }

              100% {
                transform: translate(-15%,-45px) scale(1.8) rotate(190deg);
                opacity: 0;
                filter: blur(28px);
              }
            }

            .vfx-smoke-plume {
              animation: smoke-rise-thin 6s infinite ease-in-out;
            }
          `,
        }}
      />

      <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-36 w-36 rounded-3xl overflow-hidden border border-yellow-400/20">
              <Image
                src="/images/sprites/TotA Symbol 1.png"
                alt="Logo"
                fill
                sizes="144px"
                loading="eager"
                className="object-contain"
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
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a
              href="#traditions"
              className="hover:text-white transition text-yellow-500"
            >
              Traditions
            </a>

            <a href="#gallery" className="hover:text-white transition">
              Gallery
            </a>

            <a href="#community" className="hover:text-white transition">
              Community
            </a>
          </nav>
        </div>
      </header>

      <section className="relative h-[650px] w-full overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={active.bg}
              alt={active.region}
              fill
              priority
              unoptimized
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

            <div className="absolute bottom-0 left-[-6%] w-[58%] h-full">
              <Image
                src={active.leftHero.src}
                alt={active.leftHero.name}
                fill
                sizes="50vw"
                className="object-contain object-bottom"
                style={{
                  filter: active.leftHero.glow,
                }}
              />
            </div>

            <div className="absolute bottom-0 right-[-6%] w-[58%] h-full">
              <Image
                src={active.rightHero.src}
                alt={active.rightHero.name}
                fill
                sizes="50vw"
                className="object-contain object-bottom"
                style={{
                  filter: active.rightHero.glow,
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-8 z-30 flex items-center justify-between px-8">
          <button
            onClick={prevSequence}
            className="px-4 py-2 rounded-xl bg-black/60 border border-white/10"
          >
            ← Prev Region
          </button>

          <div className="flex gap-2">
            {SEQUENCES.map((seq, idx) => (
              <button
                key={seq.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-8 bg-yellow-400'
                    : 'w-2.5 bg-white/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSequence}
            className="px-4 py-2 rounded-xl bg-black/60 border border-white/10"
          >
            Next Region →
          </button>
        </div>
      </section>

      <section
        id="traditions"
        className="bg-zinc-950 border-y border-white/5 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-2">
              Strategic Masteries
            </span>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Combat Traditions
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {TRADITIONS.map((name) => {
              const fileName = name.replace(/\s+/g, '-');
              const imagePath = `/images/sprites/${fileName}.png`;

              return (
                <div
                  key={name}
                  onClick={() => setSelectedTradition(name)}
                  className="group relative flex flex-col items-center bg-zinc-900/30 border border-white/5 hover:border-yellow-500/30 rounded-2xl p-5 text-center transition-all duration-500 overflow-hidden cursor-pointer hover:bg-zinc-900/60"
                >
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                    <div
                      className="absolute bottom-6 left-1/2 w-12 h-44 mix-blend-screen vfx-smoke-plume"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(255,255,255,0.4), transparent)',
                      }}
                    />
                  </div>

                  <div className="relative h-16 w-16 mb-4 z-10">
                    <Image
                      src={imagePath}
                      alt={name}
                      fill
                      unoptimized
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xs md:text-sm font-bold tracking-wide text-zinc-400 group-hover:text-yellow-400 transition-colors duration-500 uppercase line-clamp-2 z-10">
                    {name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black uppercase">About the Game</h2>

        <p className="mt-6 text-zinc-400 max-w-2xl text-lg leading-relaxed">
          Throne of the Ascendant brings next-generation dark tactical fantasy
          to your browser.
        </p>
      </section>

      <AnimatePresence>
        {selectedTradition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-12"
            onClick={() => setSelectedTradition(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-6xl max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-y-auto shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 right-0 w-full flex justify-end p-6 z-10">
                <button
                  onClick={() => setSelectedTradition(null)}
                  className="bg-black/60 hover:bg-white/20 border border-white/10 text-zinc-400 hover:text-white rounded-full p-3 transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="px-8 pb-12 md:px-16 md:pb-16 -mt-4">
                {renderTraditionLore(selectedTradition)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}