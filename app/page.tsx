"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll event listener for scrollspy & back-to-top
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // ScrollSpy logic
      const sections = document.querySelectorAll('section[id], footer[id]');
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
          setIsMobileMenuOpen(false); // Close mobile menu on click
        }
      });
    });

    // Simple Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Top Navigation Anchor */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-margin-mobile md:px-margin-desktop ${isScrolled ? 'py-3 bg-primary shadow-lg' : 'py-5 bg-primary'}`}>
        <div className="font-headline-md text-headline-md text-on-primary uppercase tracking-wider relative z-50">SHAIK NAGOOR SAHEB</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 relative z-50">
          {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-on-primary font-bold transition-all duration-300 capitalize ${activeSection === section ? 'border-b-2 border-on-primary opacity-100' : 'opacity-70 hover:opacity-100'}`}
            >
              {section}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-on-primary relative z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </header>

      {/* Mobile Nav Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-primary z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-8 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-on-primary font-headline-lg text-4xl capitalize transition-all duration-300 ${activeSection === section ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-100'}`}
          >
            {section}
          </a>
        ))}
      </div>
      {/* Header Wave Aesthetic */}
      <div className="h-48 md:h-64 bg-primary-container relative w-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}></div>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop -mt-24 relative z-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mb-24" id="home">
          <div className="md:col-span-7 pt-12">
            <div className="relative inline-block mb-6">
              <h1 className="font-display-lg text-display-lg uppercase leading-none">Portofolio</h1>
              <div className="h-4 w-full bg-primary-container absolute bottom-4 -z-10 -rotate-1"></div>
            </div>
            <p className="font-body-lg text-body-lg max-w-xl text-on-surface-variant leading-relaxed">
              Hello creative everyone! I am Shaik Nagoor Saheb, a passionate Full Stack Developer focused on building high-performance AI-driven applications. My journey in the digital world is fueled by a constant desire to learn and innovate, bridging the gap between complex backend logic and seamless frontend experiences.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="mailto:nagoorsaheb718@gmail.com" className="bg-on-background text-on-primary px-8 py-3 font-label-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-background transition-colors hard-shadow-sm inline-block">Hire Me</a>
              <a href="https://drive.google.com/file/d/1WDiSrqO2hqUTQcHACS-qEvLILk-iWhmW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="border-2 border-on-background px-8 py-3 font-label-bold uppercase tracking-widest hover:bg-on-background hover:text-on-primary transition-all inline-block">Resume</a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end relative">
            {/* Profile Image with Editorial Frame */}
            <div className="relative bg-white p-4 hard-shadow rotate-3 hover:rotate-0 transition-transform duration-500">
              <img alt="Shaik Nagoor Saheb" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLuRiA-CuhgotQQlah5OlJfXBz-K5V6Hl-ShwB7QEez12Y4Cdv9_fGLvBI5skRHh81noAb_cuN3znlKhkZvVPNX6_DKf9Gu37T4bluHzy3C7LeplLDwHW60LJ0SMHetzoMyqSl3ZoJDdcv5La8DcBY1aqZV9VcUrG6ZwMJvsWslLcP-N2JTAJ_0xTtGPit6y_SzrDteMjDkjJ_rP6FBvNOuuWQtT4CX28aVigPFoOzq9m2LIRkDbQbdWNR2qWhFPIXNvevqp9B_lM" />
              <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="font-label-bold text-[12px]">nagoorsaheb718@gmail.com</span>
                </div>
                <span className="material-symbols-outlined text-primary">brush</span>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/nagoor-saheb-shaik-b01926291/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-on-background text-on-primary flex items-center justify-center rounded-full hover:bg-primary-container hover:text-on-background transition-colors hard-shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/NagoorSaheb178" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-on-background text-on-primary flex items-center justify-center rounded-full hover:bg-primary-container hover:text-on-background transition-colors hard-shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 md:block hidden">
              <span className="material-symbols-outlined text-display-lg text-primary-container opacity-50">format_quote</span>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="mb-24 border-y-2 border-outline/20 py-16 flex flex-col md:flex-row justify-between items-center gap-12" id="about">
          <div className="text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-2">About Me</h2>
            <span className="font-label-bold text-primary uppercase tracking-[0.2em]">Full Stack Developer</span>
          </div>
          <div className="max-w-2xl">
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Experienced in building scalable web applications using the MERN stack and Next.js. I specialize in integrating AI personas and mentor systems that provide real-world value. My approach combines technical rigor with a keen eye for user-centric design, ensuring that every project is not just functional, but delightful to use.
            </p>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="mb-24 flex flex-col md:flex-row gap-16" id="experience">
          {/* Work Experience */}
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-12 relative inline-block">
              <span className="relative z-10">Work Experiences</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#facc15] -z-10 -rotate-1"></span>
            </h2>
            <div className="relative border-l-2 border-dashed border-outline-variant pl-8 ml-4 flex flex-col gap-12">

              {/* Experience 1 */}
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full border-2 border-outline-variant bg-white -left-[41px] top-1"></div>
                <div className="font-label-bold text-secondary mb-2 flex items-center gap-2">
                  <span>Jun 2025 - Aug 2025</span>
                  <span>·</span>
                  <span>3 mos</span>
                </div>
                <h3 className="font-headline-md text-2xl uppercase mb-1">Full Stack Developer Intern</h3>
                <div className="font-body-md text-on-surface mb-3 flex items-center flex-wrap gap-2">
                  <span>Primo Fiscal</span>
                  <span>·</span>
                  <span className="bg-[#86efac] text-black px-2 py-0.5 text-sm font-bold -rotate-1">Internship</span>
                </div>
                <div className="text-sm text-secondary mb-4">Vijayawada, AP | Next.js · Gemini API · React.js · REST APIs</div>
                <ul className="list-disc list-outside ml-4 font-body-md text-secondary space-y-2">
                  <li>Architected GitGrade, an AI-powered GitHub analytics platform to evaluate code quality and best practices across repositories.</li>
                  <li>Integrated Google Gemini API with optimized prompt engineering to auto-generate repository summaries and developer improvement suggestions.</li>
                  <li>Validated and stress-tested AI outputs across repositories, logging defects with detailed incident reports to ensure production reliability.</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full border-2 border-outline-variant bg-white -left-[41px] top-1"></div>
                <div className="font-label-bold text-secondary mb-2 flex items-center gap-2">
                  <span>Mar 2025 - May 2025</span>
                  <span>·</span>
                  <span>3 mos</span>
                </div>
                <h3 className="font-headline-md text-2xl uppercase mb-1">Frontend Developer Intern</h3>
                <div className="font-body-md text-on-surface mb-3 flex items-center flex-wrap gap-2">
                  <span>Next24tech</span>
                  <span>·</span>
                  <span className="bg-[#86efac] text-black px-2 py-0.5 text-sm font-bold rotate-1">Internship</span>
                </div>
                <div className="text-sm text-secondary mb-4">Vijayawada, AP | HTML · CSS · JavaScript · REST APIs</div>
                <ul className="list-disc list-outside ml-4 font-body-md text-secondary space-y-2">
                  <li>Engineered responsive, mobile-first UI components using HTML, CSS, and JavaScript ensuring cross-browser consistency.</li>
                  <li>Integrated frontend modules with REST APIs for smooth bidirectional data flow and end-to-end application functionality.</li>
                  <li>Conducted structured UI testing across browsers; logged and tracked defects to ensure timely resolution.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education */}
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-12 relative inline-block">
              <span className="relative z-10">Education</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#facc15] -z-10 rotate-1"></span>
            </h2>
            <div className="relative border-l-2 border-dashed border-outline-variant pl-8 ml-4 flex flex-col gap-12">

              {/* Education 1 */}
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full border-2 border-outline-variant bg-white -left-[41px] top-1"></div>
                <div className="font-label-bold text-secondary mb-2">Aug 2023 - Jun 2026</div>
                <h3 className="font-headline-md text-2xl uppercase mb-1">VR Siddhartha Engineering College</h3>
                <div className="font-body-md text-on-surface mb-1 flex flex-wrap items-center gap-2">
                  <span>B.Tech in Information Technology</span>
                  <span>·</span>
                  <span className="bg-[#86efac] text-black px-2 py-0.5 text-sm font-bold rotate-1">CGPA: 8.08</span>
                </div>
                <div className="text-sm text-secondary">Vijayawada, AP</div>
              </div>

            </div>
          </div>
        </section>
        {/* Software / Tech Stack Section */}
        <section className="mb-24" id="skills">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="font-headline-md text-headline-md uppercase whitespace-nowrap">Skills :</h3>
            <div className="h-[2px] w-full bg-outline-variant"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#3776AB] rounded-lg flex items-center justify-center text-white font-bold text-xl">Py</div>
              <span className="font-label-bold text-[10px] uppercase">Python</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#F7DF1E] rounded-lg flex items-center justify-center text-black font-bold text-xl">Js</div>
              <span className="font-label-bold text-[10px] uppercase">JavaScript</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#3178C6] rounded-lg flex items-center justify-center text-white font-bold text-xl">Ts</div>
              <span className="font-label-bold text-[10px] uppercase">TypeScript</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#61DAFB] rounded-lg flex items-center justify-center text-black font-bold text-xl">Re</div>
              <span className="font-label-bold text-[10px] uppercase">React</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm">Next</div>
              <span className="font-label-bold text-[10px] uppercase">Next.js</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#339933] rounded-lg flex items-center justify-center text-white font-bold text-xl">No</div>
              <span className="font-label-bold text-[10px] uppercase">Node.js</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#4169E1] rounded-lg flex items-center justify-center text-white font-bold text-xl">Pg</div>
              <span className="font-label-bold text-[10px] uppercase">PostgreSQL</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#47A248] rounded-lg flex items-center justify-center text-white font-bold text-xl">Mg</div>
              <span className="font-label-bold text-[10px] uppercase">MongoDB</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#181717] rounded-lg flex items-center justify-center text-white font-bold text-xl">Git</div>
              <span className="font-label-bold text-[10px] uppercase">GitHub</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#8E75B2] rounded-lg flex items-center justify-center text-white font-bold text-xl">AI</div>
              <span className="font-label-bold text-[10px] uppercase">Gemini & LLMs</span>
            </div>
            <div className="bg-white border-2 border-outline-variant p-4 flex flex-col items-center gap-3 min-w-[100px] hard-shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#FF9900] rounded-lg flex items-center justify-center text-black font-bold text-[12px]">Cld</div>
              <span className="font-label-bold text-[10px] uppercase">AWS / GCP</span>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className="mb-24" id="projects">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="font-headline-md text-headline-md uppercase whitespace-nowrap">My Projects :</h3>
            <div className="h-[2px] w-full bg-outline-variant"></div>
          </div>
          <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto pb-32">

            {/* Project 1 */}
            <a
              href="https://nagoor-s-ai-persona-chatbot.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '10vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="AI Persona" src="/chatbot.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">AI Persona Chatbot</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">AI Chat Interface</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    An interactive, RAG-powered AI chatbot acting as the professional persona of Shaik Nagoor Saheb. The assistant can answer questions about Nagoor's skills, experience, and projects, as well as seamlessly schedule meetings via Cal.com
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://mentor-ashy-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '12vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Mentor AI" src="/mentor.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">Mentor AI</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">Mock Interview Platform</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    A full-stack AI-powered mock interview platform where candidates have a real, dynamic voice conversation with an AI interviewer. Built with Next.js, PostgreSQL, and Vapi.
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 3 */}
            <a
              href="https://ai-hallucination-citation-verificat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '14vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Citation Verifier" src="/citation.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">Citation Verifier</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">AI Hallucination Checker</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    An AI system that verifies factual claims and citations in AI-generated academic content. It detects hallucinations, fake studies, broken links, and exaggerated claims by cross-checking trusted sources, and presents results using clear visual indicators and a trust score.
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 4 */}
            <a
              href="https://healthcare-doctor-patient-translati-silk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '16vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Healthcare Translator" src="/medi.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">Healthcare Translator</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">Doctor-Patient Translation</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    The Healthcare Doctor–Patient Translation Web Application is a full-stack, AI-powered communication platform designed to help doctors and patients who speak different languages communicate effectively in real time.
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 5 */}
            <a
              href="https://build-second-brain-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '18vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Second Brain" src="/brain.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">Second Brain</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">AI Knowledge Management</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    Second Brain is a sophisticated, high-end "Second Brain" application designed to help you capture, organize, and synthesize knowledge using the power of Artificial Intelligence.
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 6 */}
            <a
              href="https://ai-csv-importer-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '20vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="CSV Importer" src="/csv.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">CSV Importer</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">AI-powered Data Import</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    I really wanted to build something that feels seamless, so I put together this AI-powered CSV importer. It takes messy CSV files from pretty much any source and intelligently maps them directly to the GrowEasy CRM schema.
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 7 */}
            <a
              href="https://school-management-system-tau-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '22vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="School Management" src="/lms.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">School System</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">Education Management</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    A modern, full-stack School Management System built with Next.js (App Router), Prisma, MongoDB, and Tailwind CSS. It features dedicated dashboards for Admins, Teachers, and Students to streamline school operations, academic tracking, and communication.
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 8 */}
            <a
              href="https://app-graph-builder-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky group block w-full bg-white border-2 border-outline-variant transition-transform duration-300 hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ top: '24vh' }}
            >
              <div className="flex flex-col sm:flex-row h-auto sm:h-[320px]">
                <div className="sm:w-5/12 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-outline-variant bg-gray-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="App Graph Builder" src="/app.png" />
                </div>
                <div className="p-8 sm:p-10 sm:w-7/12 flex flex-col justify-center bg-white">
                  <h4 className="font-headline-md text-2xl uppercase mb-2">Graph Builder</h4>
                  <p className="font-label-bold text-primary/70 uppercase text-xs mb-4 tracking-widest">Interactive Node Graph</p>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed line-clamp-3">
                    A responsive "App Graph Builder" UI that visualises service topology graphs with interactive ReactFlow nodes, a service node inspector, TanStack Query data fetching, and Zustand state management.
                  </p>
                  <div className="flex items-center text-primary font-label-bold text-sm mt-auto group-hover:translate-x-3 transition-transform">
                    View Live <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </section>
      </main>
      {/* Footer Wave Aesthetic */}
      <div className="h-24 bg-primary relative w-full" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)" }}></div>
      {/* Main Footer */}
      <footer className="bg-primary text-on-primary py-20 px-margin-mobile md:px-margin-desktop" id="contact">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="font-headline-lg text-headline-lg mb-4"> SHAIK NAGOOR SAHEB</div>
            <p className="font-body-md opacity-80 max-w-xs">Building the future of interaction with AI-driven full-stack solutions. Let's create something remarkable together.</p>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-label-bold text-[18px] uppercase border-b border-on-primary/30 pb-2">Connect</h5>
            <div className="flex flex-col gap-4">
              <a className="flex items-center gap-3 hover:translate-x-2 transition-transform" href="tel:+917330637796">
                <span className="material-symbols-outlined">call</span>
                <span className="font-body-md">+91 7330637796</span>
              </a>
              <a className="flex items-center gap-3 hover:translate-x-2 transition-transform" href="mailto:nagoorsaheb718@gmail.com">
                <span className="material-symbols-outlined">mail</span>
                <span className="font-body-md">nagoorsaheb718@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-on-primary/20 text-center font-label-bold opacity-60 text-[12px] uppercase tracking-widest">
          © 2026 Shaik Nagoor Saheb. All rights reserved.
        </div>
      </footer>
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-white text-primary rounded-full hard-shadow transition-all duration-500 flex items-center justify-center hover:-translate-y-2 ${isScrolled ? 'opacity-100 translate-y-0 cursor-pointer' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </>
  );
}
