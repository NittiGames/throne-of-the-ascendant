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
    leftHero: { name: 'Sofen of Pars', src: '/images/sprites/Sofen-of-Pars-2.png', glow: 'drop-shadow(0 0 35px rgba(18, 143, 28, 0.6))' },
    rightHero: { name: 'Hais of Pars', src: '/images/sprites/Hais-of-Pars-3.png', glow: 'drop-shadow(0 0 35px rgba(55, 182, 241, 0.6))' }
  },
  {
    id: 'aklas',
    region: 'Aklas',
    bg: '/images/sprites/Aklas-Background.png',
    leftHero: { name: 'Vecta of Aklas', src: '/images/sprites/vecta-of-aklas-3.png', glow: 'drop-shadow(0 0 35px rgba(122, 231, 245, 0.6))' },
    rightHero: { name: 'Fiena of Aklas', src: '/images/sprites/fiena-of-aklas-3.png', glow: 'drop-shadow(0 0 35px rgba(20, 184, 166, 0.6))' }
  },
  {
    id: 'aaran',
    region: 'Aaran',
    bg: '/images/sprites/Aaran-Background.png',
    leftHero: { name: 'Seib of Aaran', src: '/images/sprites/seib-of-aaran-3.png', glow: 'drop-shadow(0 0 35px rgba(207, 117, 235, 0.6))' },
    rightHero: { name: 'Trok of Aaran', src: '/images/sprites/trok-of-aaran-3.png', glow: 'drop-shadow(0 0 35px rgba(248, 96, 69, 0.6))' }
  }
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const active = SEQUENCES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => { setActiveIndex((prev) => (prev + 1) % SEQUENCES.length); }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedTradition ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTradition]);

  const traditionsList = Object.keys(TRADITIONS_DATA);
  const currentLore = selectedTradition
  ? TRADITIONS_DATA[selectedTradition as keyof typeof TRADITIONS_DATA]
  : null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans select-none relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smoke-rise-thin { 0% { transform: translate(-50%, 20px) scaleX(0.5) scaleY(0.5) rotate(0deg); opacity: 0; filter: blur(8px); } 15% { opacity: 0.65; filter: blur(10px); } 50% { transform: translate(-35%, -15px) scaleX(1.1) scaleY(1.3) rotate(80deg); opacity: 0.45; filter: blur(16px); } 100% { transform: translate(-15%, -45px) scaleX(1.6) scaleY(1.8) rotate(190deg); opacity: 0; filter: blur(28px); } }
        @keyframes smoke-drift-shear { 0% { transform: translate(-45%, 10px) scaleX(0.7) scaleY(0.7) rotate(180deg); opacity: 0; filter: blur(12px); } 25% { opacity: 0.55; filter: blur(14px); } 70% { transform: translate(-60%, -25px) scaleX(1.4) scaleY(1.5) rotate(270deg); opacity: 0.3; filter: blur(22px); } 100% { transform: translate(-75%, -55px) scaleX(2.1) scaleY(1.9) rotate(360deg); opacity: 0; filter: blur(36px); } }
        @keyframes smoke-plume-base { 0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; } 50% { transform: scale(1.15) rotate(180deg); opacity: 0.45; } }
        .vfx-smoke-plume { animation: smoke-rise-thin 6s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .vfx-smoke-shear { animation: smoke-drift-shear 8s infinite cubic-bezier(0.39, 0.575, 0.565, 1); }
        .vfx-smoke-base { animation: smoke-plume-base 10s infinite linear; }
      `}} />

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-24 w-24 rounded-2xl overflow-hidden border border-yellow-400/10">
              <Image src="/images/sprites/TotA Symbol 1.png" alt="Logo" fill sizes="96px" priority className="object-contain" />
            </div>
            <div>
              <div className="font-black tracking-widest text-base md:text-lg">THRONE OF THE ASCENDANT</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mt-0.5">By Nitti Games</div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[550px] w-full overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image src={active.bg} alt={active.region} fill priority unoptimized className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
            </div>
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <motion.div animate={{ x: [-8, 8, -8] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-[-4%] w-[54%] h-full">
                <Image src={active.leftHero.src} alt={active.leftHero.name} fill sizes="50vw" priority style={{ objectFit: 'contain', objectPosition: 'bottom', filter: active.leftHero.glow }} />
              </motion.div>
              <motion.div animate={{ x: [8, -8, 8] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 right-[-4%] w-[54%] h-full">
                <Image src={active.rightHero.src} alt={active.rightHero.name} fill sizes="50vw" priority style={{ objectFit: 'contain', objectPosition: 'bottom', filter: active.rightHero.glow }} />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-6 z-30 flex items-center justify-between px-8">
          <button onClick={() => setActiveIndex((prev) => (prev - 1 + SEQUENCES.length) % SEQUENCES.length)} className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-xs font-bold hover:bg-white hover:text-black transition uppercase">← Prev</button>
          <div className="flex gap-2">
            {SEQUENCES.map((seq, idx) => (
              <button key={seq.id} onClick={() => setActiveIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-yellow-500' : 'w-1.5 bg-white/20'}`} />
            ))}
          </div>
          <button onClick={() => setActiveIndex((prev) => (prev + 1) % SEQUENCES.length)} className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur text-xs font-bold hover:bg-white hover:text-black transition uppercase">Next →</button>
        </div>
      </section>

      {/* TRADITIONS GRID */}
      <section id="traditions" className="bg-zinc-950 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-b border-white/10 pb-6 mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-1">Strategic Masteries</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Combat Traditions</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {traditionsList.map((name) => (
              <div key={name} onClick={() => setSelectedTradition(name)} className="group relative flex flex-col items-center bg-zinc-900/20 border border-white/5 hover:border-zinc-500/30 rounded-xl p-5 text-center transition-all duration-500 overflow-hidden cursor-pointer hover:bg-zinc-900/50">
                <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="absolute bottom-4 left-1/2 w-10 h-36 mix-blend-screen vfx-smoke-plume" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 100%)' }} />
                </div>
                <div className="relative h-14 w-14 mb-3 z-10 transition-transform duration-500 transform group-hover:scale-105">
                  <Image src={`/images/sprites/${name.replace(/\s+/g, '-')}.png`} alt={name} fill unoptimized sizes="56px" className="object-contain" />
                </div>
                <h3 className="text-xs font-bold tracking-wide text-zinc-400 group-hover:text-zinc-200 transition-colors duration-500 uppercase line-clamp-2 z-10">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CODEX PREMIUM POPUP OVERLAY */}
      <AnimatePresence>
        {selectedTradition && currentLore && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 md:p-8 overflow-y-auto" onClick={() => setSelectedTradition(null)}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: 'spring', damping: 25 }} className="relative w-full max-w-5xl bg-[#09090b] border border-zinc-800/80 rounded-2xl p-6 md:p-12 my-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button onClick={() => setSelectedTradition(null)} className="absolute top-6 right-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white rounded-full p-2.5 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              {currentLore.sealed ? (
                /* SEALED TEXT LAYOUT */
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="relative h-20 w-20 mb-6 opacity-20 grayscale filter blur-[0.5px]">
                    <Image src={`/images/sprites/${selectedTradition.replace(/\s+/g, '-')}.png`} alt={selectedTradition} fill sizes="80px" className="object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-widest mb-2">Archives Sealed</h3>
                  <p className="text-zinc-600 max-w-sm text-xs md:text-sm leading-relaxed">
                    The sacred masteries of the <span className="text-zinc-400 font-semibold">{selectedTradition}</span> have not yet been unearthed. Check back soon.
                  </p>
                </div>
              ) : (
                /* ACTIVE DYNAMIC CODEX LAYOUT */
                <div className="space-y-12">
                  
                  {/* HEADER AREA */}
                  <div className="flex flex-col items-center text-center border-b border-zinc-800 pb-8">
                    <div className="relative h-24 w-24 mb-4">
                      <Image src={`/images/sprites/${selectedTradition.replace(/\s+/g, '-')}.png`} alt={selectedTradition} fill sizes="96px" className="object-contain" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-zinc-100">{selectedTradition}</h2>
                    <div className="text-xs font-black tracking-[0.3em] text-zinc-400 uppercase mt-1.5 flex items-center gap-2">
                      <span className="h-1 w-6 bg-zinc-600 rounded" />
                      {currentLore.subtitle}
                      <span className="h-1 w-6 bg-zinc-600 rounded" />
                    </div>
                    <div className="text-sm text-zinc-400 font-light leading-relaxed max-w-3xl mt-6 italic text-center whitespace-pre-line">
  &ldquo;{currentLore.summary}&rdquo;
</div>
                  </div>

                  {/* BLOODLINES SECTION */}
                  {currentLore.bloodlines && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xs font-black tracking-[0.2em] text-zinc-500 uppercase">
                          {currentLore.bloodlineTitle || "Core Bloodlines"}
                        </h3>
                        <div className="h-[1px] flex-1 bg-zinc-800/60" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentLore.bloodlines.map((bl, idx) => (
                          <div key={idx} className="flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-900/50 transition-colors">
                            <div>
                              <div className="flex items-baseline justify-between gap-2 mb-2">
                                <h4 className="text-sm font-black tracking-wide text-zinc-200 uppercase">{bl.faction}</h4>
                                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{bl.epithet}</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">{bl.description}</p>
                            </div>
                            <div className="bg-black/40 border border-zinc-800/40 rounded-lg p-4 relative overflow-hidden">
                              <span className="text-[10px] font-bold tracking-wider text-yellow-500/80 uppercase block mb-1">{bl.showcaseTitle}</span>
                              <p className="text-[11px] text-zinc-400 leading-relaxed font-light">{bl.showcaseDesc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* APEX THREAT SECTION */}
                  {currentLore.threat && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xs font-black tracking-[0.2em] text-zinc-500 uppercase">Threat Analysis</h3>
                        <div className="h-[1px] flex-1 bg-zinc-800/60" />
                      </div>
                      <div className="bg-gradient-to-br from-zinc-950 to-[#0e0e11] border border-zinc-800 rounded-xl p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                          <div className="md:col-span-2 max-w-3xl">
                            <h4 className="text-base font-black text-zinc-200 uppercase tracking-wide mb-1">{currentLore.threat.title}</h4>
                            <p className="text-xs text-zinc-400 font-light mb-6 leading-relaxed">{currentLore.threat.summary}</p>
                            
                            <div className="border-l-2 border-zinc-700 pl-4 space-y-1">
                              <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest block">{currentLore.threat.bossName}</span>
                              <p className="text-xs text-zinc-400 font-light leading-relaxed">{currentLore.threat.bossDesc}</p>
                            </div>
                          </div>
                          
                          {/* DYNAMIC DOMINATOR PORTRAIT SLOT */}
                          {currentLore.threat.bossImage && (
                            <div className="relative h-56 w-full rounded-lg border border-zinc-800 bg-black/40 p-2 overflow-hidden flex items-center justify-center">
                              <Image 
                                src={currentLore.threat.bossImage} 
                                alt={currentLore.threat.bossName} 
                                fill 
                                sizes="(max-w-7xl) 33vw, 250px"
                                className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.03)] transition-transform duration-500 hover:scale-105" 
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RELICS SECTION */}
                  {currentLore.relics && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xs font-black tracking-[0.2em] text-zinc-500 uppercase">Relics of the Forge</h3>
                        <div className="h-[1px] flex-1 bg-zinc-800/60" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentLore.relics.map((relic, idx) => (
                          <div key={idx} className="p-5 rounded-xl bg-zinc-900/20 border border-zinc-800/60 flex flex-col justify-center">
                            <div className="flex items-baseline justify-between gap-2 mb-1.5">
                              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wide">{relic.name}</span>
                              <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">{relic.type}</span>
                            </div>
                            <p className="text-xs text-zinc-400 font-light leading-relaxed">{relic.description}</p>
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