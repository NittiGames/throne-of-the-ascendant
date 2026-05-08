"use client";
import { motion } from 'framer-motion'
import { Crown, ScrollText, Swords, Users, Sparkles, ShoppingBag, BookOpen, Shield } from 'lucide-react'

const traditions = [
  {
    name: 'Fire',
    desc: 'Aggressive combat specialists focused on overwhelming pressure and destructive power.',
  },
  {
    name: 'Water',
    desc: 'Adaptive tacticians who manipulate tempo, control, and battlefield flow.',
  },
  {
    name: 'Earth',
    desc: 'Defensive warriors with unmatched resilience and battlefield presence.',
  },
  {
    name: 'Arcane',
    desc: 'Masters of mystical energy and unpredictable magical interactions.',
  },
  {
    name: 'Shadow',
    desc: 'Stealthy manipulators who specialize in deception and disruption.',
  },
  {
    name: 'Light',
    desc: 'Holy guardians focused on protection, healing, and strategic balance.',
  },
  {
    name: 'Rune',
    desc: 'Ancient scholars channeling powerful sigils and crafted enchantments.',
  },
  {
    name: 'Astral',
    desc: 'Cosmic entities capable of bending reality and transcending mortal limits.',
  },
]

const features = [
  {
    title: 'Competitive Strategy',
    desc: 'Master tactical decisions, manage resources, and outplay your rivals.',
    icon: Swords,
  },
  {
    title: 'Unique Warbands',
    desc: 'Lead powerful factions with distinct playstyles and battlefield identities.',
    icon: Shield,
  },
  {
    title: 'Living World',
    desc: 'Discover a growing universe filled with lore, expansions, and new conflicts.',
    icon: BookOpen,
  },
]

export default function ThroneOfTheAscendantWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
              <Crown className="text-yellow-400" />
            </div>

            <div>
              <div className="font-black text-lg tracking-wide">
                THRONE OF THE ASCENDANT
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.25em]">
                By Nitti Games
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#traditions" className="hover:text-yellow-400 transition-colors">Traditions</a>
            <a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
            <a href="#lore" className="hover:text-yellow-400 transition-colors">Lore</a>
            <a href="#community" className="hover:text-yellow-400 transition-colors">Community</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-300 mb-6">
              <Sparkles size={16} />
              Tactical Fantasy Card Game
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
              THRONE OF THE
              <span className="block text-yellow-400">ASCENDANT</span>
            </h1>

            <p className="mt-8 text-xl text-zinc-300 leading-relaxed max-w-2xl">
              Command mighty Warbands, dominate dangerous quests, forge unstable alliances, and ascend above your rivals in an epic strategy card game built for competitive and narrative play.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-yellow-400 text-black px-7 py-4 font-black hover:scale-105 transition-transform shadow-2xl">
                Join Discord
              </button>

              <button className="rounded-2xl border border-white/20 px-7 py-4 font-bold hover:bg-white/10 transition-colors">
                Download Rulebook
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
              {[
                ['2–4', 'Players'],
                ['45–90', 'Minutes'],
                ['14+', 'Age'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <div className="text-3xl font-black text-yellow-400">{value}</div>
                  <div className="text-sm text-zinc-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 blur-3xl bg-yellow-500/20 rounded-full" />

            <div className="relative rounded-[2.5rem] border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-[0_0_80px_rgba(250,204,21,0.12)]">
              <div className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-zinc-950 flex items-center justify-center text-center p-10">
                <div>
                  <div className="text-yellow-400 uppercase tracking-[0.35em] text-sm">
                    Official Key Art
                  </div>

                  <div className="mt-5 text-5xl font-black leading-tight">
                    Throne of the Ascendant
                  </div>

                  <p className="mt-6 text-zinc-500 leading-relaxed">
                    Replace this section with your official box render, promotional artwork, or cinematic visual.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-yellow-400 uppercase tracking-[0.35em] text-sm font-bold">
            About the Game
          </div>

          <h2 className="mt-5 text-5xl font-black leading-tight">
            A New Era of Competitive Fantasy Gaming
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Throne of the Ascendant combines tactical gameplay, asymmetric factions, strategic deckbuilding, and immersive lore into a high-skill competitive experience.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                whileHover={{ y: -6 }}
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="h-14 w-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <Icon className="text-yellow-400" />
                </div>

                <div className="mt-6 text-2xl font-black">
                  {feature.title}
                </div>

                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* TRADITIONS */}
      <section id="traditions" className="border-y border-white/10 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="text-yellow-400 uppercase tracking-[0.35em] text-sm font-bold">
                Traditions
              </div>

              <h2 className="mt-4 text-5xl font-black">
                Forge Your Destiny
              </h2>
            </div>

            <p className="max-w-2xl text-zinc-400 leading-relaxed text-lg">
              Explore powerful traditions and create devastating combinations through unique playstyles, elemental affinities, and strategic mastery.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditions.map((tradition) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={tradition.name}
                className="rounded-3xl border border-white/10 bg-black/40 p-7 hover:border-yellow-400/40 transition-colors"
              >
                <div className="h-16 w-16 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-2xl font-black">
                  {tradition.name.charAt(0)}
                </div>

                <div className="mt-6 text-3xl font-black">
                  {tradition.name}
                </div>

                <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
                  {tradition.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-yellow-400 uppercase tracking-[0.35em] text-sm font-bold">
              Gallery
            </div>

            <h2 className="mt-4 text-5xl font-black">
              Enter the Realm
            </h2>
          </div>

          <button className="rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
            <ScrollText size={18} />
            View Full Lore
          </button>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={item}
              className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-zinc-900 flex items-center justify-center text-zinc-500 text-center p-6"
            >
              Replace with Card Art / Character Illustration / Gameplay Screenshot #{item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* LORE */}
      <section id="lore" className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-zinc-950 to-black">
        <div className="absolute inset-0 bg-yellow-500/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-yellow-300 text-sm mb-6">
            <BookOpen size={16} />
            Lore & Worldbuilding
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            The Realm Stands on the Edge of Ascension
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Ancient kingdoms crumble beneath rising powers as Warbands compete for influence, relics, and domination. Across shattered lands and forgotten civilizations, only one force will claim the Throne of the Ascendant.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="rounded-2xl bg-yellow-400 text-black px-7 py-4 font-black hover:scale-105 transition-transform">
              Read the Lore
            </button>

            <button className="rounded-2xl border border-white/20 px-7 py-4 font-bold hover:bg-white/10 transition-colors">
              Explore Factions
            </button>
          </div>
        </div>
      </section>

      {/* STORE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-yellow-400 uppercase tracking-[0.35em] text-sm font-bold">
            Coming Soon
          </div>

          <h2 className="mt-4 text-5xl font-black">
            Prepare for Launch
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            The first edition of Throne of the Ascendant is approaching. Join the community and be the first to receive updates, previews, and early access opportunities.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            'Core Set',
            'Founders Edition',
            'Future Expansions',
          ].map((item) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <div className="h-16 w-16 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 flex items-center justify-center mx-auto">
                <ShoppingBag className="text-yellow-400" />
              </div>

              <div className="mt-6 text-2xl font-black">
                {item}
              </div>

              <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
                Placeholder content for future products, editions, and collectible releases.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-yellow-300 text-sm mb-6">
            <Users size={16} />
            Community
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Join the Ascendants
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Become part of the growing community through playtests, tournaments, development updates, and competitive events.
          </p>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <button className="rounded-2xl bg-yellow-400 text-black px-7 py-4 font-black hover:scale-105 transition-transform">
              Discord
            </button>

            <button className="rounded-2xl border border-white/20 px-7 py-4 font-bold hover:bg-white/10 transition-colors">
              Instagram
            </button>

            <button className="rounded-2xl border border-white/20 px-7 py-4 font-bold hover:bg-white/10 transition-colors">
              YouTube
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-zinc-500 text-sm bg-black">
        <div className="font-bold tracking-wide text-white">
          THRONE OF THE ASCENDANT
        </div>

        <div className="mt-3">
          © 2026 Nitti Games. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
