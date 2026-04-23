import myPhoto from "./assets/godson.jpg";

export const PROFILE = {
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
  headshot: myPhoto,
  resumeUrl: "#",
};

export const SKILLS = [
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
    items: ["Git", "GitHub", "Linux", "Figma", "balsamiq", "photoshop"],
  },
];

export const PROJECTS = [
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
      "Contributor to an end-to-end agricultural marketplace with product management, bookings, and dashboards for the Software Metrics course.",
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
    demo: "#",
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

export const EXPERIENCE = [
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

export const EDUCATION = [
  {
    school: "Mbarara University of Science and Technology (MUST)",
    credential: "B.Sc. in Software Engineering",
    period: "2023 – Present",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Godson writes clean, well-structured code and communicates trade-offs clearly. He ships.",
    name: "Mentor / Lecturer",
  },
];
