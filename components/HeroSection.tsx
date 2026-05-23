"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Phone, ChevronDown } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          style={{ animation: "scan-line 4s linear infinite", top: 0 }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 sm:left-8 terminal-text text-purple-500/40 text-xs leading-relaxed hidden sm:block">
        <div>SYS_VER: 2.5.1</div>
        <div>PLAYER: <span className="text-purple-400">LEILA_G</span></div>
        <div>STATUS: <span className="text-green-400 animate-blink">ONLINE</span></div>
        <div>XP: 9999</div>
      </div>

      <div className="absolute top-20 right-4 sm:right-8 terminal-text text-cyan-500/40 text-xs leading-relaxed text-right hidden sm:block">
        <div>LAT: 30.0444° N</div>
        <div>LON: 31.2357° E</div>
        <div>REGION: CAIRO_EG</div>
        <div>PING: 12ms</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-green-500/40 bg-green-500/10 terminal-text text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 tracking-widest">PLAYER ONLINE · READY TO DEPLOY</span>
        </motion.div>

        {/* Name with glitch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-4"
        >
          <h1
            className="glitch-text text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight gradient-text-purple-cyan"
            data-text="LEILA"
          >
            LEILA
          </h1>
          <h1
            className="glitch-text text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white"
            data-text="ALSHARKAWY"
          >
            ALSHARKAWY
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg sm:text-2xl font-bold terminal-text mb-8 h-8"
        >
          <span className="text-slate-400">$ </span>
          <TypeAnimation
            sequence={[
              "Game Designer & Developer",
              2000,
              "AI Researcher · IEEE Published",
              2000,
              "Physics Engine Architect",
              2000,
              "3D Rendering Engineer",
              2000,
              "Builder of Worlds",
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />
          <span className="animate-blink text-cyan-400">_</span>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { label: "LEVEL", value: "4", color: "purple" },
            { label: "PLAYS",  value: "60K+", color: "cyan" },
            { label: "REDEEMS", value: "35K+", color: "green" },
            { label: "PAPERS", value: "IEEE", color: "yellow" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`hud-corner px-5 py-3 bg-[#0a0a1f]/80 border border-${stat.color}-500/30 text-center min-w-[90px]`}
            >
              <div className={`text-xl font-black text-${stat.color}-400`}>{stat.value}</div>
              <div className="terminal-text text-xs text-slate-500 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href="https://github.com/leilagamal322"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-purple-600/20 border border-purple-500/50 text-purple-300 terminal-text text-sm font-bold tracking-widest hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-200"
          >
            <GithubIcon size={16} />
            GITHUB
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-6 py-3 bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 terminal-text text-sm font-bold tracking-widest hover:bg-cyan-600/40 hover:border-cyan-400 transition-all duration-200"
          >
            <Mail size={16} />
            CONTACT
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col items-center gap-1 text-slate-600"
        >
          <span className="terminal-text text-xs tracking-widest">SCROLL DOWN</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
}
