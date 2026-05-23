"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const TERMINAL_LINES = [
  { delay: 0,    text: "> Initializing secure channel...",  color: "#10b981" },
  { delay: 0.4,  text: "> Encrypting payload...",           color: "#a855f7" },
  { delay: 0.8,  text: "> Establishing connection...",      color: "#06b6d4" },
  { delay: 1.2,  text: "> Connection established ✓",       color: "#10b981" },
  { delay: 1.6,  text: "> Awaiting your message...",        color: "#f59e0b" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:leilagamal217@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">// COMMS TERMINAL</div>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text-purple-cyan">CONTACT</h2>
          <p className="text-slate-500 text-sm terminal-text mt-3">
            &gt; Send a transmission to player LEILA_G
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Terminal boot sequence */}
            <div className="hud-border hud-corner p-6 font-mono text-sm bg-[#030308]/90">
              <div className="section-label mb-4">// COMMS_BOOT.LOG</div>
              {TERMINAL_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: line.delay + 0.3 }}
                  className="terminal-text text-xs mb-1.5"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.div>
              ))}
              <div className="flex items-center gap-1 mt-2 terminal-text text-xs text-cyan-400">
                <span>$</span>
                <span className="animate-blink">█</span>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {[
                {
                  icon: <Mail size={18} />,
                  label: "EMAIL",
                  value: "leilagamal217@gmail.com",
                  href: "mailto:leilagamal217@gmail.com",
                  color: "#a855f7",
                },
                {
                  icon: <Phone size={18} />,
                  label: "PHONE",
                  value: "+20 1067119956",
                  href: "tel:+201067119956",
                  color: "#06b6d4",
                },
                {
                  icon: <GithubIcon size={18} />,
                  label: "GITHUB",
                  value: "github.com/leilagamal322",
                  href: "https://github.com/leilagamal322",
                  color: "#10b981",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "GITHUB" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hud-corner border bg-[#0a0a1f]/80 group card-hover transition-all duration-200"
                  style={{ borderColor: `${contact.color}25` }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                    style={{ color: contact.color, borderColor: `${contact.color}40`, backgroundColor: `${contact.color}10` }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div className="terminal-text text-xs text-slate-500 tracking-widest">{contact.label}</div>
                    <div className="text-sm font-bold" style={{ color: contact.color }}>
                      {contact.value}
                    </div>
                  </div>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">→</span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="hud-border p-4 terminal-text text-xs text-slate-500">
              <span className="text-purple-400">📍 LOCATION:</span> Cairo, Egypt · Available Remote
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="hud-border hud-corner p-6 bg-[#0a0a1f]/80">
              <div className="section-label mb-6">// SEND TRANSMISSION</div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="terminal-text text-xs text-slate-500 tracking-widest block mb-2">
                    PLAYER NAME
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name..."
                    className="w-full bg-[#060618] border border-purple-500/30 px-4 py-3 text-sm text-slate-200 terminal-text placeholder:text-slate-700 focus:outline-none focus:border-purple-400/60 focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all"
                  />
                </div>
                <div>
                  <label className="terminal-text text-xs text-slate-500 tracking-widest block mb-2">
                    COMM CHANNEL (EMAIL)
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#060618] border border-purple-500/30 px-4 py-3 text-sm text-slate-200 terminal-text placeholder:text-slate-700 focus:outline-none focus:border-purple-400/60 focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all"
                  />
                </div>
                <div>
                  <label className="terminal-text text-xs text-slate-500 tracking-widest block mb-2">
                    MESSAGE PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full bg-[#060618] border border-purple-500/30 px-4 py-3 text-sm text-slate-200 terminal-text placeholder:text-slate-700 focus:outline-none focus:border-purple-400/60 focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 terminal-text text-sm font-black tracking-widest transition-all duration-300 ${
                    sent
                      ? "bg-green-600/30 border border-green-400/60 text-green-300"
                      : "bg-purple-600/20 border border-purple-500/60 text-purple-300 hover:bg-purple-600/40 hover:border-purple-400"
                  }`}
                >
                  {sent ? "✓ TRANSMISSION SENT!" : "⚡ SEND TRANSMISSION"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="mt-20 text-center border-t border-purple-500/10 pt-8"
      >
        <div className="terminal-text text-xs text-slate-600">
          <span className="text-purple-500/60">&lt;</span>
          Built by{" "}
          <span className="text-purple-400">Leila Alsharkawy</span>
          {" · "}
          Game Designer · AI Researcher · CS Student
          <span className="text-purple-500/60"> /&gt;</span>
        </div>
        <div className="terminal-text text-xs text-slate-700 mt-2">
          ZEWAIL_CITY · CAIRO_EG · {new Date().getFullYear()}
        </div>
      </motion.div>
    </section>
  );
}
