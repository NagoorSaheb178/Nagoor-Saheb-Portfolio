"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, LockKeyhole, Maximize2, Power, X } from "lucide-react";

type Project = {
  name: string;
  code: string;
  label: string;
  description: string;
  live: string;
  github: string;
  stack: string[];
  features: string[];
  accent: string;
};

const projects: Project[] = [
  {
    name: "Workflow Builder Lite",
    code: "WB-178",
    label: "FULL STACK TOOL",
    description: "Visual workflow automation builder for creating and managing task flows",
    live: "https://workflow-builder-lite-olive.vercel.app/",
    github: "https://github.com/NagoorSaheb178/Workflow-Builder-Lite",
    stack: ["Next.js", "React Flow", "TypeScript", "Tailwind"],
    features: ["Drag-and-drop workflow canvas", "Task flow state management", "Node linking and execution mapping"],
    accent: "#00f5ff"
  },
  {
    name: "Second Brain App",
    code: "SB-404",
    label: "AI SYSTEM",
    description: "AI-powered knowledge management system with semantic search and structured insights",
    live: "https://build-second-brain-app.vercel.app/",
    github: "https://github.com/NagoorSaheb178/Build-Second-Brain-App",
    stack: ["Next.js", "AI SDK", "Vector Search", "PostgreSQL"],
    features: ["Semantic search across saved knowledge", "AI generated insights", "Structured personal knowledge vault"],
    accent: "#b8ff3d"
  },
  {
    name: "Healthcare Doctor-Patient Translation System",
    code: "MD-721",
    label: "MODULE ACTIVE",
    description: "AI-based communication platform for real-time translation between doctors and patients",
    live: "https://healthcare-doctor-patient-translati-silk.vercel.app/",
    github: "https://github.com/NagoorSaheb178/Healthcare-Doctor-Patient-Translation-Web-Application",
    stack: ["React", "Speech AI", "Translation API", "Tailwind"],
    features: ["Real-time medical conversation bridge", "Doctor-patient language support", "Accessible clinical communication flow"],
    accent: "#ff2bd6"
  },
  {
    name: "AI Note Taking App",
    code: "NT-092",
    label: "AI SYSTEM",
    description: "Smart note-taking system with AI summarization and organization",
    live: "https://ai-note-taking-app-eight.vercel.app/",
    github: "https://github.com/NagoorSaheb178/ai-note-taking-app",
    stack: ["Next.js", "OpenAI", "TypeScript", "Storage"],
    features: ["AI note summarization", "Automatic organization helpers", "Clean capture and review workflow"],
    accent: "#ff7a18"
  }
];

const bootLines = ["ACCESSING PROJECT DATABASE...", "LOADING MODULES...", "PROJECT DATABASE LOADED"];

export default function ProjectsHud() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 23) % 100}%`,
        top: `${(index * 37) % 100}%`,
        delay: (index % 9) * 0.28,
        size: 2 + (index % 3)
      })),
    []
  );

  return (
    <section
      id="projects"
      className="hud-shell relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x, y });
        mx.set(x);
        my.set(y);
      }}
    >
      <motion.div className="hud-grid" style={{ y: gridY }} />
      <div className="hud-vignette" />
      <div className="scanline" />
      <div className="data-rain data-rain-a" />
      <div className="data-rain data-rain-b" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div
          className="mb-10 grid gap-8 lg:grid-cols-[1fr_420px]"
          variants={{
            hidden: { opacity: 0, y: 34 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-plasma/80">Project Database Loaded</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-black uppercase leading-tight text-white sm:text-6xl">
              Project Database
            </h2>
            <p className="mt-5 max-w-2xl font-mono text-base text-cyan-100/70 sm:text-lg">
              Four deployed system modules are queued for activation. Each file unlocks with telemetry, stack data, and launch access.
            </p>
          </div>

          <div className="terminal-panel">
            {bootLines.map((line, index) => (
              <motion.p
                key={line}
                className="boot-line"
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  show: {
                    width: "100%",
                    opacity: 1,
                    transition: { delay: 0.35 + index * 0.72, duration: 0.64, ease: "steps(24)" }
                  }
                }}
              >
                {line}
              </motion.p>
            ))}
            <motion.div
              className="mt-5 space-y-2"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 2.3, duration: 0.4 } }
              }}
            >
              {[91, 76, 100].map((value, index) => (
                <div key={value} className="loading-track">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.45 + index * 0.14, duration: 0.7, ease: "easeOut" }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="relative" style={{ y: cardsY }}>
          <div className="hud-orbit hud-orbit-left" />
          <div className="hud-orbit hud-orbit-right" />
          <NetworkLines />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                tilt={tilt}
                onSelect={() => setSelected(project)}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selected ? <ProjectModal project={selected} onClose={() => setSelected(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  tilt,
  onSelect
}: {
  project: Project;
  index: number;
  tilt: { x: number; y: number };
  onSelect: () => void;
}) {
  return (
    <motion.article
      className="project-card group"
      style={{
        "--accent": project.accent,
        rotateX: `${tilt.y * -5}deg`,
        rotateY: `${tilt.x * 5}deg`
      } as React.CSSProperties}
      variants={{
        hidden: { opacity: 0, y: 44, scale: 0.96, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: [44, -8, 0],
          scale: 1,
          filter: "blur(0px)",
          transition: { delay: 2.7 + index * 0.24, duration: 0.72, ease: [0.2, 0.9, 0.2, 1] }
        }
      }}
      onClick={onSelect}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="card-sweep" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{project.code}</p>
          <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-white">{project.name}</h3>
        </div>
        <div className="status-chip">
          <Power size={14} />
          {project.label}
        </div>
      </div>

      <div className="preview-window mt-6">
        <div className="preview-core" />
        <div className="preview-bars">
          <span />
          <span />
          <span />
        </div>
        <LockKeyhole className="preview-lock" size={34} />
      </div>

      <p className="mt-6 min-h-[88px] font-mono text-sm leading-6 text-cyan-50/74">{project.description}</p>

      <div className="button-dock">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="launch-button"
          aria-label={`Launch ${project.name}`}
          data-tooltip="Launch Application"
          onClick={(event) => event.stopPropagation()}
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="repo-button"
          aria-label={`${project.name} GitHub repository`}
          onClick={(event) => event.stopPropagation()}
        >
          <Github size={16} />
          GitHub
        </a>
      </div>

      <button className="expand-cue" type="button" aria-label={`Open ${project.name} module details`}>
        <Maximize2 size={16} />
      </button>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/78 p-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-panel"
        style={{ "--accent": project.accent } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0.62, rotateX: 18, filter: "blur(18px)" }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.72, filter: "blur(12px)" }}
        transition={{ type: "spring", stiffness: 170, damping: 20 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close module details">
          <X size={20} />
        </button>

        <div className="modal-preview">
          <div className="modal-reticle" />
          <p>{project.code} / SYSTEM ZOOM-IN</p>
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-[var(--accent)]">{project.label}</p>
          <h3 className="mt-4 font-display text-3xl font-black uppercase text-white sm:text-5xl">{project.name}</h3>
          <p className="mt-4 max-w-3xl font-mono text-base leading-7 text-cyan-50/76">{project.description}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="hud-heading">Features</h4>
              <ul className="mt-3 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="modal-list-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="hud-heading">Tech Stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="stack-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={project.live} target="_blank" rel="noreferrer" className="launch-button modal-action">
              <ExternalLink size={17} />
              Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="repo-button modal-action">
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NetworkLines() {
  return (
    <svg className="network-lines" aria-hidden="true" viewBox="0 0 1200 420" preserveAspectRatio="none">
      <motion.path
        d="M90 96 C260 38 360 170 510 122 S790 34 1110 92"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M110 310 C270 236 420 358 600 276 S910 214 1090 316"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.54 }}
        viewport={{ once: true }}
        transition={{ delay: 3.25, duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
