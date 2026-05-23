"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILL_CATEGORIES = [
  {
    category: "GAME DEV",
    color: "#a855f7",
    icon: "🎮",
    skills: [
      { name: "Unity", level: 5 },
      { name: "Game Design", level: 5 },
      { name: "Physics Engines", level: 5 },
      { name: "3D Modeling", level: 4 },
      { name: "OpenGL", level: 4 },
    ],
  },
  {
    category: "AI / ML",
    color: "#06b6d4",
    icon: "🤖",
    skills: [
      { name: "NPC Behavior AI", level: 5 },
      { name: "Reinforcement Learning", level: 4 },
      { name: "Emotional Models", level: 5 },
      { name: "Computer Graphics AI", level: 4 },
      { name: "Research Methods", level: 5 },
    ],
  },
  {
    category: "LANGUAGES",
    color: "#10b981",
    icon: "💻",
    skills: [
      { name: "Python", level: 5 },
      { name: "C++", level: 5 },
      { name: "C#", level: 4 },
      { name: "Java", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "SQL / Bash / PHP", level: 3 },
    ],
  },
  {
    category: "ENGINEERING",
    color: "#f59e0b",
    icon: "⚙",
    skills: [
      { name: "Algorithms & DSA", level: 5 },
      { name: "OOP & Design Patterns", level: 5 },
      { name: "RESTful APIs", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Full-Stack Web", level: 4 },
      { name: "Git / Version Control", level: 5 },
    ],
  },
];

const TECH_BADGES = [
  "Python", "C++", "C#", "Java", "JavaScript", "HTML/CSS",
  "Unity", "OpenGL", "Flask", "Docker", "PostgreSQL", "MySQL",
  "Git", "Bash", "PHP", "Bootstrap", "React",
];

function SkillDots({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-2 h-2 border"
          style={{
            backgroundColor: i <= level ? color : "transparent",
            borderColor: i <= level ? color : "#334155",
            boxShadow: i <= level ? `0 0 4px ${color}` : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-4 bg-[#030308]/60">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">// SKILL TREE</div>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-purple-cyan">ABILITIES</h2>
          <p className="text-slate-500 text-sm terminal-text mt-3">
            &gt; Unlocked through years of grinding and questing
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="relative hud-corner p-5 bg-[#0a0a1f]/80 border card-hover group overflow-hidden"
              style={{ borderColor: `${cat.color}30` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: `${cat.color}30` }}>
                <span className="text-xl">{cat.icon}</span>
                <span className="terminal-text text-xs font-black tracking-widest" style={{ color: cat.color }}>
                  {cat.category}
                </span>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.1 + i * 0.05 + 0.3 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-slate-400 terminal-text">{skill.name}</span>
                    <SkillDots level={skill.level} color={cat.color} />
                  </motion.div>
                ))}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: `inset 0 0 20px ${cat.color}10` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="section-label mb-4 text-center">// INVENTORY · TECHNOLOGIES</div>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_BADGES.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                className="px-3 py-1.5 terminal-text text-xs border border-purple-500/30 bg-purple-500/10 text-purple-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-purple-200 transition-all duration-200 cursor-default"
                style={{ boxShadow: "0 0 8px rgba(168,85,247,0.1)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
