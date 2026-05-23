"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const QUESTS = [
  {
    id: "q1",
    title: "GAME DIRECTOR",
    org: "Game Heist Studio",
    type: "MAIN QUEST",
    status: "ACTIVE",
    color: "#a855f7",
    icon: "🎮",
    tasks: [
      "Led full game development cycles from concept to launch",
      "Directed creative and technical teams on multiple projects",
      "Shaped game vision, mechanics, and player experience",
    ],
  },
  {
    id: "q2",
    title: "RESEARCH INTERN · IEEE PUBLISHED",
    org: "Zewail City",
    type: "LEGENDARY QUEST",
    status: "COMPLETED",
    color: "#f59e0b",
    icon: "📚",
    tasks: [
      "Simulated NPCs with AI behavior models and emotional systems",
      "Applied reinforcement learning for intelligent NPC decision-making",
      'Published: "Evaluating Emotion-Adaptive Non-Player Characters: Player Perception, Immersion, and Systemic Challenges in Sentiment-Driven Interaction"',
    ],
    link: "https://ieeexplore.ieee.org/document/11519974",
  },
  {
    id: "q3",
    title: "BACKEND INTERN",
    org: "Waad Company",
    type: "SIDE QUEST",
    status: "COMPLETED",
    color: "#06b6d4",
    icon: "⚙",
    tasks: [
      "Built backend APIs and integrated PostgreSQL databases",
      "Used Flask and Docker in agile team workflows",
      "Collaborated with frontend and DevOps teams",
    ],
  },
  {
    id: "q4",
    title: "PROJECT MANAGER",
    org: "House of Life",
    type: "SIDE QUEST",
    status: "COMPLETED",
    color: "#10b981",
    icon: "🏗",
    tasks: [
      "Designed and managed an AI-themed online educational camp",
      "Focused on gamification and interactive learning",
    ],
  },
  {
    id: "q5",
    title: "PROGRAMMING INSTRUCTOR",
    org: "iSchool Platform",
    type: "SIDE QUEST",
    status: "COMPLETED",
    color: "#ec4899",
    icon: "🧑‍🏫",
    tasks: [
      "Taught programming logic and game development to children aged 9–15",
    ],
  },
];

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "#10b981",
  COMPLETED: "#a855f7",
};

const TYPE_COLORS: Record<string, string> = {
  "MAIN QUEST":      "#a855f7",
  "LEGENDARY QUEST": "#f59e0b",
  "SIDE QUEST":      "#06b6d4",
};

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string | null>("q1");

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">// QUEST LOG</div>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-purple-cyan">EXPERIENCE</h2>
          <p className="text-slate-500 text-sm terminal-text mt-3">
            &gt; Missions completed and currently active
          </p>
        </motion.div>

        {/* Quest list */}
        <div className="space-y-4">
          {QUESTS.map((quest, i) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Quest header (clickable) */}
              <button
                onClick={() => setExpanded(expanded === quest.id ? null : quest.id)}
                className="w-full text-left"
              >
                <div
                  className="hud-corner p-4 bg-[#0a0a1f]/80 border transition-all duration-200 hover:bg-[#0e0e2a]/80 group"
                  style={{
                    borderColor: expanded === quest.id ? `${quest.color}60` : `${quest.color}20`,
                    boxShadow: expanded === quest.id ? `0 0 15px ${quest.color}15` : "none",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{quest.icon}</span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-black text-sm text-white">{quest.title}</span>
                          <span
                            className="terminal-text text-xs px-2 py-0.5 border"
                            style={{ color: TYPE_COLORS[quest.type], borderColor: `${TYPE_COLORS[quest.type]}40`, backgroundColor: `${TYPE_COLORS[quest.type]}10` }}
                          >
                            {quest.type}
                          </span>
                        </div>
                        <div className="terminal-text text-xs text-slate-500 mt-0.5" style={{ color: quest.color }}>
                          {quest.org}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        className="terminal-text text-xs px-2 py-1 border hidden sm:block"
                        style={{ color: STATUS_COLORS[quest.status], borderColor: `${STATUS_COLORS[quest.status]}40`, backgroundColor: `${STATUS_COLORS[quest.status]}10` }}
                      >
                        ● {quest.status}
                      </span>
                      <span
                        className="text-slate-400 transition-transform duration-200 text-xs"
                        style={{ transform: expanded === quest.id ? "rotate(90deg)" : "rotate(0deg)" }}
                      >
                        ▶
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{ height: expanded === quest.id ? "auto" : 0, opacity: expanded === quest.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="border border-t-0 p-5 bg-[#060618]/80"
                  style={{ borderColor: `${quest.color}20` }}
                >
                  <div className="section-label mb-3">// OBJECTIVES COMPLETED</div>
                  <ul className="space-y-2">
                    {quest.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                        <span style={{ color: quest.color }} className="mt-0.5 flex-shrink-0">✓</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                  {quest.link && (
                    <a
                      href={quest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-xs terminal-text text-yellow-400 hover:text-yellow-300 border border-yellow-500/30 px-3 py-1.5 hover:border-yellow-400/50 transition-colors"
                    >
                      🔗 VIEW IEEE PUBLICATION →
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
