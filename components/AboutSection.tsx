"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { label: "HP",  value: 100, color: "#10b981", icon: "❤" },
  { label: "INT", value: 97,  color: "#a855f7", icon: "🧠" },
  { label: "CRT", value: 95,  color: "#06b6d4", icon: "🎨" },
  { label: "AGI", value: 88,  color: "#f59e0b", icon: "⚡" },
  { label: "STR", value: 85,  color: "#ec4899", icon: "💪" },
  { label: "LDR", value: 92,  color: "#8b5cf6", icon: "👑" },
];

function StatBar({ label, value, color, icon, delay }: { label: string; value: number; color: string; icon: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="terminal-text text-xs text-slate-400 tracking-widest">
          <span className="mr-1">{icon}</span>{label}
        </span>
        <span className="terminal-text text-xs font-bold" style={{ color }}>{value}/100</span>
      </div>
      <div className="h-2 bg-slate-800/80 relative overflow-hidden">
        <motion.div
          className="h-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.2) 9px)"
        }} />
      </div>
    </div>
  );
}

const ACHIEVEMENTS = [
  { icon: "🏆", title: "IEEE Publisher",   desc: "Published research on emotion-adaptive NPCs" },
  { icon: "🎮", title: "60K Plays",         desc: "Cilantro Heist — viral game launch" },
  { icon: "🌐", title: "Full-Stack Dev",    desc: "From hardware to frontend and everything between" },
  { icon: "🎓", title: "Zewail Scholar",   desc: "CS & AI · Gaming & Graphics concentration" },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">// CHARACTER PROFILE</div>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-purple-cyan">PLAYER STATS</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Bio card */}
            <div className="hud-border hud-corner p-6 mb-8">
              <div className="section-label mb-4">// BIO.TXT</div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Passionate game designer and computer science student at{" "}
                <span className="text-purple-400 font-bold">Zewail City University</span> with
                hands-on experience in 3D rendering, gameplay mechanics, and AI-based systems.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mt-3">
                Strong background in building{" "}
                <span className="text-cyan-400 font-bold">physics engines</span>, developing
                interactive simulations, and conducting academic research on emotional models and
                NPC behaviors.{" "}
                <span className="text-green-400 font-bold">IEEE published researcher</span>.
                Experienced in teaching, managing projects, and delivering user-centered game
                experiences.
              </p>

              <div className="mt-4 pt-4 border-t border-purple-500/20 grid grid-cols-2 gap-3 terminal-text text-xs">
                <div><span className="text-slate-500">CLASS:</span> <span className="text-purple-400">Game Designer</span></div>
                <div><span className="text-slate-500">SPEC:</span> <span className="text-cyan-400">AI / Graphics</span></div>
                <div><span className="text-slate-500">GUILD:</span> <span className="text-green-400">Game Heist Studio</span></div>
                <div><span className="text-slate-500">RANK:</span> <span className="text-yellow-400">Game Director</span></div>
              </div>
            </div>

            {/* Stat bars */}
            <div className="hud-border hud-corner p-6 space-y-4">
              <div className="section-label mb-4">// CHARACTER STATS</div>
              {STATS.map((stat, i) => (
                <StatBar key={stat.label} {...stat} delay={0.3 + i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Right — achievements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            {/* XP bar */}
            <div className="hud-border hud-corner p-6">
              <div className="section-label mb-4">// EXPERIENCE POINTS</div>
              <div className="space-y-3">
                {[
                  { label: "Game Development",    xp: 95 },
                  { label: "AI / ML Research",    xp: 88 },
                  { label: "3D Graphics / OpenGL", xp: 85 },
                  { label: "Full-Stack Dev",       xp: 78 },
                  { label: "Teaching / Mentoring", xp: 90 },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between terminal-text text-xs mb-1">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-yellow-400">{item.xp} XP</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 relative overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.xp}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="section-label mb-2">// ACHIEVEMENTS UNLOCKED</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                  className="hud-corner p-4 bg-[#0d0d25]/80 border border-purple-500/20 card-hover cursor-default group"
                >
                  <div className="text-2xl mb-2">{ach.icon}</div>
                  <div className="terminal-text text-xs font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                    {ach.title}
                  </div>
                  <div className="terminal-text text-xs text-slate-500 mt-1">{ach.desc}</div>
                  <div className="mt-2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="hud-border hud-corner p-6 bg-[#0a0a1f]/80">
              <div className="section-label mb-4">// EDUCATION LOG</div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-purple-500/50 flex items-center justify-center text-lg flex-shrink-0 bg-purple-500/10">
                  🎓
                </div>
                <div>
                  <div className="font-bold text-white text-sm">BSc. Computer Science & AI</div>
                  <div className="text-purple-400 text-xs terminal-text mt-0.5">Zewail City University of Science and Technology</div>
                  <div className="text-cyan-400 text-xs terminal-text mt-0.5">Concentration: Gaming & Computer Graphics</div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs terminal-text">CS</span>
                    <span className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs terminal-text">AI</span>
                    <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/30 text-green-300 text-xs terminal-text">GAMING</span>
                    <span className="px-2 py-0.5 bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs terminal-text">3D GRAPHICS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
