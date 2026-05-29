"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const PROJECTS = [
  {
    id: "thndr",
    title: "THNDR",
    subtitle: "Game Designer & Developer · In Progress",
    client: "Thndr",
    category: "GAME",
    rarity: "LEGENDARY",
    icon: "📈",
    color: "#22c55e",
    description:
      "Currently building a new game for Thndr — designing gameplay systems, player experience, and development from the ground up.",
    tags: ["Game Design", "In Progress", "Mobile", "Unity"],
    highlight: true,
  },
  {
    id: "gamebank",
    title: "GAME BANK",
    subtitle: "Nostalgic Games Reimagined",
    category: "GAME",
    rarity: "EPIC",
    icon: "🕹",
    color: "#eab308",
    description:
      "A collection of classic games rebuilt with a modern touch — recreating nostalgic favorites like Tetris and Tower Bloxx with updated visuals, feel, and polish.",
    tags: ["Game Design", "Tetris", "Tower Bloxx", "Unity", "Retro"],
    highlight: true,
  },
  {
    id: "cilantro",
    title: "CILANTRO HEIST",
    subtitle: "Game Designer & Developer",
    client: "Cilantro Coffee Shop",
    category: "GAME",
    rarity: "LEGENDARY",
    icon: "☕",
    color: "#f59e0b",
    stats: { plays: "60K", redeems: "35K", time: "2 weeks", timeLabel: "CAMPAIGN" },
    description:
      "Built a full universe — a game, original music, comics, and viral reels. Ran a two-week launch campaign that hit 60K plays and 35K redeems. Designed all gameplay systems and led development end-to-end.",
    tags: ["Game Design", "Music", "Comics", "Marketing", "Unity"],
    highlight: true,
  },
  {
    id: "physics",
    title: "PHYSICS ENGINE",
    subtitle: "for Games (Python)",
    category: "ENGINE",
    rarity: "EPIC",
    icon: "⚛",
    color: "#a855f7",
    description:
      "Built from scratch — rigid body dynamics, gravity, friction, and collision detection. Designed for 3D game environments with full scene hierarchy.",
    tags: ["Python", "Physics", "3D Math", "Collision Detection"],
  },
  {
    id: "maze3d",
    title: "3D MAZE ENGINE",
    subtitle: "OpenGL Simulation",
    category: "ENGINE",
    rarity: "EPIC",
    icon: "🌐",
    color: "#06b6d4",
    description:
      "3D rendering engine with shaders, textures, and a modular rendering pipeline. Dynamic scene loading, free camera movement, and hierarchical entity transforms.",
    tags: ["OpenGL", "GLSL", "3D Rendering", "Shaders"],
  },
  {
    id: "boardroom",
    title: "BOARDROOM SHOWDOWN",
    subtitle: "Business Simulation Card Game",
    category: "GAME",
    rarity: "RARE",
    icon: "🃏",
    color: "#10b981",
    description:
      "Role-based business simulation game focused on strategy, teamwork, and decision-making. Includes realistic scenarios and performance metrics.",
    tags: ["Game Design", "Card Game", "Business Sim"],
  },
  {
    id: "locally",
    title: "LOCALLY",
    subtitle: "Bazaar Discovery App",
    category: "APP",
    rarity: "RARE",
    icon: "📍",
    color: "#ec4899",
    description:
      "Full-stack mobile app to discover nearby bazaars by budget, location, and date. User-friendly for both vendors and visitors.",
    tags: ["Full-Stack", "Mobile", "React Native", "Maps"],
  },
  {
    id: "wordopt",
    title: "WORD SEARCH OPTIMIZER",
    subtitle: "C++ / Trie Structures",
    category: "ENGINE",
    rarity: "RARE",
    icon: "🔍",
    color: "#8b5cf6",
    description:
      "Single, multiple, partial, wildcard, and fuzzy search using Trie data structures. Highly optimized search algorithms.",
    tags: ["C++", "Algorithms", "Trie", "Search"],
  },
  {
    id: "library",
    title: "LIBRARY AUTOMATION",
    subtitle: "Java · OOP & Design Patterns",
    category: "APP",
    rarity: "UNCOMMON",
    icon: "📚",
    color: "#f97316",
    description:
      "Modules for lending, returns, and user management following OOAD principles and OWASP security standards.",
    tags: ["Java", "OOP", "Design Patterns", "OWASP"],
  },
  {
    id: "fft",
    title: "IMAGE COMPRESSION FFT",
    subtitle: "Python Signal Processing",
    category: "RESEARCH",
    rarity: "UNCOMMON",
    icon: "🌊",
    color: "#06b6d4",
    description:
      "Image compression via Fast Fourier Transform for efficient storage and reconstruction.",
    tags: ["Python", "FFT", "Signal Processing", "Compression"],
  },
  {
    id: "jazz",
    title: "JAZZ CLUB SYSTEM",
    subtitle: "Full-Stack · MySQL",
    category: "APP",
    rarity: "UNCOMMON",
    icon: "🎷",
    color: "#a855f7",
    description:
      "Reservations, daily schedules, and events management with dynamic frontend and database backend.",
    tags: ["Full-Stack", "MySQL", "JavaScript", "PHP"],
  },
];

const RARITY_COLORS: Record<string, string> = {
  LEGENDARY: "#f59e0b",
  EPIC:       "#a855f7",
  RARE:       "#06b6d4",
  UNCOMMON:   "#10b981",
};

const CATEGORIES = ["ALL", "GAME", "ENGINE", "APP", "RESEARCH"];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = PROJECTS.filter(
    (p) => selectedCategory === "ALL" || p.category === selectedCategory
  );

  return (
    <section id="projects" className="relative py-24 px-4 bg-[#030308]/60">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">// LEVEL SELECT</div>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-purple-cyan">PROJECTS</h2>
          <p className="text-slate-500 text-sm terminal-text mt-3">
            &gt; Select a level to begin
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`terminal-text text-xs px-4 py-2 border transition-all duration-200 tracking-widest font-bold ${
                selectedCategory === cat
                  ? "border-purple-400 bg-purple-500/20 text-purple-300"
                  : "border-slate-700 text-slate-500 hover:border-purple-500/50 hover:text-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative hud-corner p-5 bg-[#0a0a1f]/80 border card-hover cursor-default ${
                  project.highlight ? "lg:col-span-2" : ""
                }`}
                style={{
                  borderColor: hovered === project.id ? `${project.color}60` : `${project.color}20`,
                  boxShadow: hovered === project.id ? `0 0 20px ${project.color}20` : "none",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Rarity banner */}
                <div
                  className="absolute top-0 right-0 terminal-text text-xs px-3 py-1 font-black tracking-widest"
                  style={{
                    backgroundColor: `${RARITY_COLORS[project.rarity]}20`,
                    color: RARITY_COLORS[project.rarity],
                    borderLeft: `1px solid ${RARITY_COLORS[project.rarity]}30`,
                    borderBottom: `1px solid ${RARITY_COLORS[project.rarity]}30`,
                  }}
                >
                  {project.rarity}
                </div>

                {/* Content */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0 border"
                    style={{
                      backgroundColor: `${project.color}15`,
                      borderColor: `${project.color}40`,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <div className="font-black text-white text-sm pr-20">{project.title}</div>
                    <div className="terminal-text text-xs mt-0.5" style={{ color: project.color }}>
                      {project.subtitle}
                    </div>
                    {project.client && (
                      <div className="terminal-text text-xs text-slate-500">
                        CLIENT: {project.client}
                      </div>
                    )}
                  </div>
                </div>

                {/* Stats (Cilantro Heist) */}
                {project.stats && (
                  <div className="flex gap-4 mb-3 p-2 bg-yellow-500/10 border border-yellow-500/20">
                    <div className="text-center">
                      <div className="text-yellow-400 font-black text-sm">{project.stats.plays}</div>
                      <div className="terminal-text text-xs text-slate-500">PLAYS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-black text-sm">{project.stats.redeems}</div>
                      <div className="terminal-text text-xs text-slate-500">REDEEMS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-black text-sm">{project.stats.time}</div>
                      <div className="terminal-text text-xs text-slate-500">
                        {project.stats.timeLabel ?? "DEV TIME"}
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-slate-400 text-xs leading-relaxed mb-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="terminal-text text-xs px-2 py-0.5"
                      style={{
                        color: `${project.color}cc`,
                        backgroundColor: `${project.color}10`,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom neon line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-300 origin-left"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                    transform: hovered === project.id ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
