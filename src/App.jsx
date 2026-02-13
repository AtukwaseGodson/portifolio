import myPhoto from './assets/godson.jpg';
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Globe, ExternalLink, Moon, Sun, ArrowRight, Download } from "lucide-react";

// ————————————————————————————————————————————
// 🧩 HOW TO USE
// 1) Drop this component into a React app (Create React App, Vite, Next.js, etc.).
// 2) Ensure TailwindCSS is configured. Add `className="scroll-smooth"` to <html> or body.
// 3) Replace PROFILE + PROJECTS + EXPERIENCE data below with your info.
// 4) Hook the contact form to Formspree/EmailJS or a server endpoint as desired.
// 5) Deploy to your domain (Vercel/Netlify/Render/GitHub Pages).
// ————————————————————————————————————————————

// 🎯 THEME & LAYOUT
const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return { dark, setDark };
};

// 🧾 SITE-WIDE DATA ——— Edit freely
const PROFILE = {
  name: "Atukwase Godson",
  role: "Software Engineer | Problem Solver | Innovator | Developer| software analyst",
  location: "Mbarara-Uganda",
  summary:
    "Third-year Software Engineering student at MUST, passionate about impactful systems for Uganda. I build robust web apps, distributed systems, and data-driven solutions with clean code and thoughtful UX.",
  email: "atukwasegodson@gmail.com",
  phone: "+256 703 713737",
  github: "https://github.com/atukwasegodson",
  linkedin: "https://www.linkedin.com/in/atukwasegodson/",
  website: "https://atukwasegodson.me",
  headshot: myPhoto, // display photo
  resumeUrl: "#", // link to your CV PDF if available
};

const SKILLS = [
  {
    group: "Programming",
    items: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "HTML", "CSS", "C", "C#"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Next.js", "Django", "Flask", "Bootstrap", "TailwindCSS", "Node.js", "Express"],
  },
  {
    group: "Data & ML",
    items: ["Pandas", "scikit-learn", "XGBoost", "Streamlit", "numPy", "matplotlib"],
  },
  {
    group: "Cloud & GIS",
    items: ["Google Earth Engine", "namecheap", "Amazon Web Services", "Vercel", "Netlify"],
  },
  {
    group: "Databases and database servers",
    items: ["MySQL", "PostgreSQL", "Xampp and wamp servers"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Linux", "Figma", "balsamiq", "photoshop", " "],
  },
];
<div className="flex flex-wrap gap-2">
  {["Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "HTML", "CSS", "C", "C#"].map(skill => (
    <span
      key={skill}
      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full shadow-sm hover:bg-blue-700 transition"
    >
      {skill}
    </span>
  ))}
</div>

// 🧰 FEATURED PROJECTS ——— Pull from your real work (edit links & text)
const PROJECTS = [
  {
    title: "Hospital Management System",
    blurb:
      "A desktop + DB project with 15+ relational tables, secure login, admissions, appointments, billing, and PDF reports.",
    tech: ["Java", "Swing", "MySQL", "JasperReports"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/atukwasegodson/hospital-management",
    demo: "#",
  },
  {
    title: "NanaAgricFarm Web Platform",
    blurb:
      "contributor to an End-to-end agricultural marketplace with product management, bookings, and dashboards for the Software Metrics course.",
    tech: ["PHP", "MySQL", "Bootstrap", "JS"],
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/kihagama/team10/",
    demo: "#",
  },
  {
    title: "Deforestation Detection (SDG 13)",
    blurb:
      "PCA-based change detection using satellite imagery with Google Earth Engine, integrated into a Django web app.",
    tech: ["GEE", "Django", "NumPy", "Pandas"],
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/yourhandle/deforestation-detection",
    demo: "#",
  },
  {
    title: "Community Emergency Alerts (Distributed)",
    blurb:
      "Java socket-based distributed system across 6 machines with vector clocks, replication, and fault tolerance.",
    tech: ["Java", "Sockets", "Vector Clocks", "Concurrency"],
    image:
      "https://images.unsplash.com/photo-1512426853931-1ffc1f5d9b0f?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/yourhandle/emergency-alerts",
    demo: "#",
  },
  {
    title: "Customer Churn Predictor",
    blurb:
      "An ML pipeline exploring multiple algorithms (LogReg, XGBoost, RF) to predict churn with explainable insights.",
    tech: ["Python", "scikit-learn", "XGBoost", "Streamlit"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/maryadeke/keep_your_customer",
    demo: "#"//"https://github.com/maryadeke-keep-your-customer-app-mary-2pmt76.streamlit.app/",
  },
  {
    title: "University Hostel Booking",
    blurb:
      "Secure housing platform for university students with role-based access and payments-ready architecture.",
    tech: ["React", "Node", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/yourhandle/hostel-booking",
    demo: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    org: "Kreative Campus (Innovation Village, Rwebikoona)",
    period: "Jul 2025 – Present",
    bullets: [
      "Developed ML demos (SVM on digits dataset: 98.6% accuracy) and integrated external image testing.",
      "Explored Streamlit dashboards and data pipelines for student projects.",
    ],
  },
  {
    role: "Student Developer",
    org: "Mbarara University of Science and Technology (MUST)",
    period: "2023 – Present",
    bullets: [
      "Team projects in distributed systems, GIS, and web engineering.",
      "Built full-stack apps aligned to SDGs for local context.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Mbarara University of Science and Technology (MUST)",
    credential: "B.Sc. in Software Engineering",
    period: "2023 – Present",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Godson writes clean, well-structured code and communicates trade-offs clearly. He ships.",
    name: "Mentor / Lecturer",
  },
];

// Small helpers
const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-sm border-gray-200 bg-white/70 text-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-300">
    {children}
  </span>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 text-sm font-medium text-gray-700 dark:text-gray-200"
  >
    {children}
  </a>
);

export default function PortfolioLandingPage() {
  const { dark, setDark } = useDarkMode();

  // For SSR safety
  const year = useMemo(() => new Date().getFullYear(), []);

  // Smooth scroll handler for SPA-like nav (works even if global scroll-smooth not set)
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 dark:from-gray-950 dark:to-gray-900 dark:text-gray-100">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="font-bold text-lg tracking-tight">
            {PROFILE.name.split(" ")[0]}
          </a>
          <nav className="hidden sm:flex items-center gap-1">
            <NavLink href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
              About
            </NavLink>
            <NavLink href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")}>
              Skills
            </NavLink>
            <NavLink href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}>
              Projects
            </NavLink>
            <NavLink href="#experience" onClick={(e) => handleSmoothScroll(e, "#experience")}>
              Experience
            </NavLink>
            <NavLink href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            {PROFILE.resumeUrl && PROFILE.resumeUrl !== "#" && (
              <a
                href={PROFILE.resumeUrl}
                className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm font-medium hover:shadow-sm"
              >
                <Download size={16} /> CV
              </a>
            )}
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-sm"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {PROFILE.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                {PROFILE.role}
              </p>
              <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                {PROFILE.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-3 text-sm font-semibold hover:opacity-90"
                >
                  Contact Me <ArrowRight size={16} />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-3 text-sm font-semibold hover:shadow-sm"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-3 text-sm font-semibold hover:shadow-sm"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="inline-flex items-center gap-2"><MapPin size={16}/> {PROFILE.location}</span>
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 hover:underline"><Mail size={16}/> {PROFILE.email}</a>
                <span className="inline-flex items-center gap-2"><Phone size={16}/> {PROFILE.phone}</span>
                <a href={PROFILE.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Globe size={16}/> {PROFILE.website.replace("https://", "")}</a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="relative mx-auto aspect-square w-64 sm:w-72 overflow-hidden rounded-3xl shadow-xl border border-gray-200 dark:border-white/10">
                <img src={PROFILE.headshot} alt="Headshot" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            I design and build practical software for real problems—healthcare systems, geospatial analysis, and
            platforms that serve students and communities. I enjoy requirements engineering, clean architecture, and
            translating complex ideas into simple interfaces.
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 shadow-sm"
            >
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {p.demo && p.demo !== "#" && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Experience & Education */}
      <Section id="experience" title="Experience & Education">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {EXPERIENCE.map((e) => (
              <motion.div
                key={e.role + e.org}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{e.role} · {e.org}</h3>
                  <span className="text-sm text-gray-500">{e.period}</span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="space-y-4">
            {EDUCATION.map((ed) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 shadow-sm"
              >
                <h3 className="font-semibold">{ed.school}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{ed.credential}</p>
                <span className="text-sm text-gray-500">{ed.period}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials (optional) */}
      {TESTIMONIALS.length > 0 && (
        <Section id="testimonials" title="Testimonials">
          <div className="grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm"
              >
                <blockquote className="text-gray-800 dark:text-gray-200">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-gray-500">— {t.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </Section>
      )}

      {/* Contact */}
      <Section id="contact" title="Contact Me">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form));
                // TODO: Replace with your email service (Formspree/EmailJS) or API endpoint
                alert("Thanks! This demo form is not wired up yet. Replace alert with API call.\n" + JSON.stringify(data, null, 2));
                form.reset();
              }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-300">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"/>
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-gray-600 dark:text-gray-300">Message</label>
                  <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"/>
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-3 text-sm font-semibold hover:opacity-90">
                <Mail size={16}/> Send Message
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm">
              <h3 className="font-semibold">Direct Contacts</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail size={16}/> <a className="hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
                <li className="flex items-center gap-2"><Phone size={16}/> {PROFILE.phone}</li>
                <li className="flex items-center gap-2"><MapPin size={16}/> {PROFILE.location}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm">
              <h3 className="font-semibold">Socials</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Github size={16}/> GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Linkedin size={16}/> LinkedIn</a>
                <a href={PROFILE.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Globe size={16}/> Website</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {year} {PROFILE.name}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-2 text-sm">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:underline">About</a>
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="hover:underline">Projects</a>
            <a href="#experience" onClick={(e) => handleSmoothScroll(e, "#experience")} className="hover:underline">Experience</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
