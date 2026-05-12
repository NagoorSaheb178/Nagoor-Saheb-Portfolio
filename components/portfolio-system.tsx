"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Download,
  Music,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Globe,
  Cpu,
  Layers,
  Send,
  Server
} from "lucide-react";
import { useState, useEffect } from "react";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function PortfolioSystem() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 selection:bg-blue-500/20">
      <div className="mesh-bg opacity-40"></div>

      {/* Navigation / Header could go here, keeping it minimal */}
      <div className="fixed top-0 left-0 w-full h-16 bg-[#050505]/40 backdrop-blur-md z-50 border-b border-white/5 flex items-center px-6 md:px-12 justify-between">
        <div className="font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
          NAGOOR.
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24 space-y-32">
        <HeroSection />
        <InfoGrid />
        <AboutSection />
        <SocialLinks />
        <TechStack />
        <GithubSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      <footer className="py-8 text-center text-sm text-slate-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} Shaik Nagoor Saheb. All rights reserved.</p>
      </footer>
    </main>
  );
}

// --- SECTIONS ---

function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Building intelligent systems and scalable web experiences.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial="hidden" animate="show" variants={staggerContainer}
      className="relative flex flex-col items-center pt-8"
    >
      {/* Banner */}
      <motion.div variants={fadeUp} className="w-full h-48 md:h-64 rounded-3xl overflow-hidden relative glass border border-white/10 group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black group-hover:scale-105 transition-transform duration-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.crio.do/blog/content/images/2021/04/Full-stack-web-developer.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </motion.div>

      {/* Profile Info Overlay */}
      <div className="relative -mt-20 flex flex-col md:flex-row items-center md:items-end justify-between w-full px-6 md:px-12 gap-6">
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
          <div className="w-32 h-32 rounded-full border-4 border-[#050505] bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl relative group">
            <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center overflow-hidden">
              <img src="https://github.com/NagoorSaheb178.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
          <div className="mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Shaik Nagoor Saheb</h1>
            <p className="text-blue-400 font-medium text-lg mt-1 glow-text">Full Stack & AI Developer</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex gap-4">
          <button className="glass-card px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/10 transition-colors">
            <Download size={16} /> Resume
          </button>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="w-full px-6 md:px-12 mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-slate-400 font-mono text-sm min-h-[1.5rem]">
          <span className="text-blue-400">&gt;</span> {text}<span className="animate-pulse">_</span>
        </div>

        {/* Status Card */}
        <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 text-xs md:text-sm">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Music size={14} className="text-blue-400" />
          </div>
          <div>
            <p className="text-white font-medium">Currently building</p>
            <p className="text-slate-400">Intelligent Systems</p>
          </div>
          <div className="ml-2 flex gap-1 h-3 items-end">
            <motion.div animate={{ height: ["4px", "12px", "4px"] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-blue-400 rounded-full"></motion.div>
            <motion.div animate={{ height: ["10px", "4px", "10px"] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1 bg-blue-400 rounded-full"></motion.div>
            <motion.div animate={{ height: ["6px", "10px", "6px"] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-blue-400 rounded-full"></motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function InfoGrid() {
  const items = [
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Phone, label: "Phone", value: "+91 7330637796" },
    { icon: Mail, label: "Email", value: "nagoorsaheb718@gmail.com" },
    { icon: GraduationCap, label: "Education", value: "B.Tech IT (CGPA: 8.08)" },
    { icon: Briefcase, label: "Experience", value: "1.5 Years Full-Stack" },
  ];

  return (
    <motion.section
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      className="flex flex-wrap justify-center md:justify-start gap-4"
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={fadeUp} className="bg-[#09090b] border border-white/5 p-5 md:p-6 rounded-[1.5rem] flex flex-col items-start gap-6 group hover:border-white/10 transition-colors flex-1 min-w-[200px]">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#18181b] text-slate-300 border border-white/5 group-hover:scale-105 transition-transform shadow-inner">
            <item.icon size={20} />
          </div>
          <div className="w-full">
            <p className="text-sm text-slate-400 font-medium mb-1">{item.label}</p>
            <p className="text-white font-semibold text-sm sm:text-base truncate">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

function AboutSection() {
  return (
    <motion.section
      id="about" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
    >
      <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-6 h-1 rounded-full bg-blue-500"></span>
        About Me
      </motion.h2>

      <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 space-y-6 text-slate-300 leading-relaxed text-lg">
          <motion.p variants={fadeUp}>
            I am <span className="text-white font-medium">Shaik Nagoor Saheb</span>, a final-year B.Tech student in Information Technology with approximately 1.5 years of hands-on experience in full-stack development.
          </motion.p>
          <motion.p variants={fadeUp}>
            I enjoy building comprehensive, end-to-end systems and focusing on logic, workflows, and reliability.
          </motion.p>
          <motion.p variants={fadeUp}>
            My interests include <span className="text-blue-300 glow-text font-medium">AI-powered systems</span>, scalable backend architecture, interactive frontend experiences, and intelligent workflow automation.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
          {["Full Stack Development", "AI Systems", "Workflow Automation", "REST APIs", "Intelligent Applications"].map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 pt-6 border-t border-white/5">
          <div className="font-['Brush_Script_MT',cursive] text-4xl text-slate-500/50 -rotate-2">
            Shaik Nagoor Saheb
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SocialLinks() {
  const links = [
    { icon: Github, label: "GitHub", href: "https://github.com/NagoorSaheb178" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter/X", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:nagoorsaheb718@gmail.com" },
  ];

  return (
    <motion.section
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      className="flex flex-wrap justify-center gap-4"
    >
      {links.map((link, i) => (
        <motion.a
          key={i} variants={fadeUp} href={link.href} target="_blank" rel="noreferrer"
          className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.15)] transition-all duration-300 group"
        >
          <link.icon size={24} className="group-hover:scale-110 transition-transform" />
        </motion.a>
      ))}
    </motion.section>
  );
}

function TechStack() {
  const techs = [
    { name: "JavaScript", icon: Code2 },
    { name: "TypeScript", icon: Terminal },
    { name: "React", icon: Globe },
    { name: "Next.js", icon: Layers },
    { name: "Node.js", icon: Cpu },
    { name: "Express.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Python", icon: Code2 },
    { name: "Tailwind CSS", icon: Layers },
    { name: "Git", icon: Github },
  ];

  return (
    <motion.section
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
    >
      <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-6 h-1 rounded-full bg-blue-500"></span>
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {techs.map((tech, i) => (
          <motion.div
            key={i} variants={fadeUp}
            className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square hover:-translate-y-1 transition-all group"
          >
            <tech.icon size={28} className="text-slate-400 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-xs font-medium text-slate-300">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function GithubSection() {
  return (
    <motion.section
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      className="relative"
    >
      <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-2 flex items-center gap-2">
        <span className="w-6 h-1 rounded-full bg-blue-500"></span>
        GitHub Activity
      </motion.h2>
      <motion.p variants={fadeUp} className="text-slate-400 mb-8 ml-8">
        Consistent building. Continuous learning.
      </motion.p>

      <motion.div variants={fadeUp} className="relative group rounded-[2rem] overflow-hidden bg-[#050505] border border-white/5 p-6 md:p-10 shadow-2xl hover:border-white/10 transition-colors duration-500">
        {/* Background Gradients & Particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-[#050505] pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700"></div>

        {/* Header Info */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-500">
              <Github size={32} className="text-white" />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-wider text-blue-400 font-semibold shadow-[0_0_10px_rgba(59,130,246,0.1)]">AI Developer</span>
                <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] uppercase tracking-wider text-purple-400 font-semibold shadow-[0_0_10px_rgba(168,85,247,0.1)]">Full Stack</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">NagoorSaheb178</h3>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex flex-col items-end">
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">500+</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold mt-1">Contributions</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-start">
              <p className="text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">80+</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold mt-1">Repositories</p>
            </div>
            <a href="https://github.com/NagoorSaheb178" target="_blank" rel="noreferrer" className="hidden md:flex ml-4 items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Contribution Graph Image */}
        <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-4 flex justify-center items-center min-h-[160px] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group-hover:border-white/10 transition-all duration-500">
          <img
            src="https://ghchart.rshah.org/3b82f6/NagoorSaheb178"
            alt="GitHub Contributions"
            className="max-w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.2)" }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      name: "Workflow Builder Lite",
      desc: "Visual workflow automation builder for managing task flows.",
      tech: ["React", "TypeScript", "Tailwind"],
      live: "https://workflow-builder-lite-olive.vercel.app/",
      github: "https://github.com/NagoorSaheb178/Workflow-Builder-Lite",
      status: "Completed"
    },
    {
      name: "Second Brain App",
      desc: "AI-powered knowledge management platform with semantic search.",
      tech: ["Next.js", "AI", "Vector DB"],
      live: "https://build-second-brain-app.vercel.app/",
      github: "https://github.com/NagoorSaheb178/Build-Second-Brain-App",
      status: "Active"
    },
    {
      name: "Healthcare Translation App",
      desc: "AI-based multilingual communication system for doctors and patients.",
      tech: ["Python", "AI", "WebRTC"],
      live: "https://healthcare-doctor-patient-translati-silk.vercel.app/",
      github: "https://github.com/NagoorSaheb178/Healthcare-Doctor-Patient-Translation-Web-Application",
      status: "Completed"
    },
    {
      name: "AI Note Taking App",
      desc: "AI-powered smart notes with summarization and organization.",
      tech: ["React", "Node.js", "OpenAI API"],
      live: "https://ai-note-taking-app-eight.vercel.app/",
      github: "https://github.com/NagoorSaheb178/ai-note-taking-app",
      status: "Active"
    }
  ];

  return (
    <motion.section
      id="projects" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
    >
      <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-6 h-1 rounded-full bg-blue-500"></span>
        Featured Projects
      </motion.h2>

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div key={i} variants={fadeUp} className="glass-card p-6 md:p-8 rounded-3xl group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

            <div className="flex-1 space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Terminal size={18} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{project.name}</h3>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider text-slate-400">
                  {project.status}
                </span>
              </div>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10 mt-4 md:mt-0">
              <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github size={18} />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all group/btn shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <span className="font-medium text-sm">Live Demo</span>
                <ExternalLink size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceSection() {
  const exp = [
    {
      role: "Frontend Developer Intern",
      company: "Next24tech Technology and Services LLP",
      date: "Mar 2025 - May 2025",
      location: "Vijayawada, A.P",
      points: [
        "Built responsive, mobile-first UI components using HTML, CSS, and JavaScript, enhancing usability across devices.",
        "Performed UI testing across browsers to ensure responsiveness and consistency.",
        "Tested API integrations to ensure correct data rendering on frontend.",
        "Integrated frontend modules with REST APIs, ensuring smooth data flow and end-to-end application functionality."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Primo Fiscal",
      date: "Jun 2025 - Aug 2025",
      location: "Vijayawada, A.P",
      points: [
        "Built an AI-powered platform (GitGrade) to analyze GitHub repositories and evaluate code quality, maintainability, and best practices.",
        "Integrated Google Gemini API to process repository data and generate structured insights, summaries, and improvement suggestions.",
        "Designed interactive dashboards to visualize metrics and provide actionable developer insights.",
        "Optimized prompt design and data filtering to improve consistency and relevance of AI-generated outputs.",
        "Tested and validated AI responses to ensure accuracy, reliability, and usability across different repositories."
      ]
    }
  ];

  return (
    <motion.section
      id="experience" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
    >
      <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="w-6 h-1 rounded-full bg-blue-500"></span>
        Experience
      </motion.h2>

      <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12 ml-2 md:ml-4">
        {exp.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="relative group">
            <div className="absolute w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-500 left-[-32px] md:left-[-40px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>

            <div className="glass-card p-5 md:p-8 rounded-3xl inline-block w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{item.role}</h3>
                  <p className="text-slate-300 font-medium text-xs md:text-sm mt-1">{item.company} &bull; {item.location}</p>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 w-max">{item.date}</span>
              </div>

              <ul className="space-y-2 mt-4">
                {item.points.map((point, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">&gt;</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function CertificationsSection() {
  const certs = [
    "Google Cloud Certified Associate Cloud Engineer",
    "AWS Certified Cloud Practitioner",
    "CCNA: Switching, Routing, Wireless Essentials",
    "IBM AI Fundamentals",
    "1st Place in Frontend Development Quiz",
    "Research presentation at IIT Roorkee",
    "Semi-Finalist in the ET-AI Hackathon 2026 conducted by The Economic Times",
    "selected as a Contributor for Social Summer of Code (SSOC) Season 5"
  ];

  return (
    <motion.section
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
    >
      <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-6 h-1 rounded-full bg-blue-500"></span>
        Certifications & Achievements
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div key={i} variants={fadeUp} className="glass-card p-5 rounded-2xl flex items-start gap-4">
            <div className="mt-0.5 text-blue-400">
              <ShieldCheckIcon />
            </div>
            <p className="text-sm font-medium text-slate-300">{cert}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ShieldCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ContactSection() {
  return (
    <motion.section
      id="contact" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      className="relative py-20 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none">
        <span className="text-[15vw] font-black tracking-tighter text-white">NAGOOR</span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-2xl">
        <div className="text-center mb-10">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Let&apos;s build together.</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg">
            Open to internships, freelance projects, and collaboration opportunities.
          </motion.p>
        </div>

        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const name = (form.elements[0] as HTMLInputElement).value || 'Visitor';
          const message = (form.elements[2] as HTMLTextAreaElement).value || 'I want to connect!';
          const text = `Hello Nagoor, my name is ${name}. ${message}`;
          const url = `https://wa.me/917330637796?text=${encodeURIComponent(text)}`;
          window.open(url, '_blank');
        }}>
          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 pl-1">Name</label>
              <input type="text" placeholder="John Doe" required className="w-full bg-[#050505]/50 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-white outline-none transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 pl-1">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-[#050505]/50 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-white outline-none transition-colors" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400 pl-1">Message</label>
            <textarea rows={4} placeholder="Hello Nagoor..." required className="w-full bg-[#050505]/50 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-white outline-none transition-colors resize-none"></textarea>
          </motion.div>

          <motion.button type="submit" variants={fadeUp} className="w-full bg-[#25D366] text-white hover:bg-[#1ebd5a] font-bold text-sm py-4 rounded-xl mt-4 flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]">
            Chat on WhatsApp <Send size={16} />
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
