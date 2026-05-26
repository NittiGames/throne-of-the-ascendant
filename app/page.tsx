import Image from 'next/image';
import * as motion from 'framer-motion/client';

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

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/Pars Background.png"
            alt="Pars Background"
            fill
            className="object-cover"
          />
        </div>

        {/* CHARACTERS */}
        <div className="absolute inset-0 z-10 pointer-events-none">

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
                filter: 'drop-shadow(0 0 35px rgba(234, 179, 8,