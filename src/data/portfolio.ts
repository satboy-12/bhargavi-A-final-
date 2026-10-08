export interface ProjectItem {
  id: string;
  title: string;
  number: string;
  tagline: string;
  category: string;
  year?: string;
  role: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  responsibilities: string[];
  tech: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution?: string;
  location: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "BHARGAVI A",
    title: "FULL STACK DEVELOPER",
    location: "Arakkonam, Tamil Nadu",
    degree: "B.E. Computer Science and Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    summary:
      "Full Stack Developer specializing in React, TypeScript, Node.js, and Android application development. Experienced in building responsive web applications, robust backends, enterprise Android ERP and billing solutions, and automated workflow pipelines.",
    email: "bhargavianandhan@gmail.com",
    phone: "+91-9629391035",
    linkedin: "https://linkedin.com/in/bhargavi-anand-6ab9b729",
    github: "https://github.com/BhargaviAnand23",
  },

  projects: [
    {
      id: "kidspire",
      number: "01",
      title: "Kidspire",
      tagline: "Interactive Educational Platform",
      category: "Full Stack Web Application",
      role: "Full Stack Developer",
      description:
        "An interactive educational platform designed for children, featuring multimedia learning modules, gamified quizzes, progress monitoring, and an accessible, intuitive user interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "REST APIs"],
      features: [
        "Interactive learning modules with multimedia questions and quizzes",
        "Progress tracking and learner performance monitoring",
        "Child-friendly responsive user interface architecture",
        "REST API services delivering educational content and scoring",
      ],
      githubUrl: "https://github.com/BhargaviAnand23/kidspire",
    },
    {
      id: "lumen",
      number: "02",
      title: "Lumen",
      tagline: "Modern High-Performance Web Platform",
      category: "Web Application",
      role: "Frontend / Full Stack Developer",
      description:
        "A modern web application built with component-driven architecture, featuring structured TypeScript typing, fluid UI states, dynamic state handling, and seamless API integration.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST APIs"],
      features: [
        "Modular component system with strict TypeScript type safety",
        "Responsive, fluid animations and state transitions",
        "Dynamic theme styling and data state management",
        "Optimized client-side rendering and API communication",
      ],
      githubUrl: "https://github.com/BhargaviAnand23/lumen",
    },
    {
      id: "bs-rocks-creations",
      number: "03",
      title: "BS Rocks Creations Android ERP and Billing App",
      tagline: "Enterprise Resource Planning & Point-of-Sale Mobile Solution",
      category: "Android Application",
      role: "Mobile Application Developer",
      description:
        "A production Android application developed for BS Rocks Creations to manage commercial operations, stock inventory, client billing, itemized invoice generation, and transaction histories.",
      technologies: ["Android", "Kotlin / Java", "SQLite", "Firebase", "Android Studio"],
      features: [
        "Point-of-sale itemized billing with automated tax calculations",
        "Real-time stock inventory tracking and low-inventory alerts",
        "Client and vendor ledger records with complete payment histories",
        "Printable and exportable invoice document generation",
        "Offline-first mobile database persistence with synchronization",
      ],
      githubUrl: "https://github.com/BhargaviAnand23",
    },
    {
      id: "orbitra",
      number: "04",
      title: "Orbitra",
      tagline: "Real-Time Telemetry & Workflow Dashboard",
      category: "Web Application",
      role: "Full Stack Developer",
      description:
        "A real-time data visualization and operational dashboard platform providing centralized metrics, live status monitoring, and workflow orchestration tools.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js"],
      features: [
        "Interactive analytics dashboard cards with live metric tracking",
        "Configurable telemetry panels and workflow controls",
        "Fast initial page loads and optimized bundling with Vite",
        "Responsive cross-device layouts with accessible controls",
      ],
      githubUrl: "https://github.com/BhargaviAnand23/orbitra",
    },
    {
      id: "google-sheets-automation",
      number: "05",
      title: "Google Sheets Workflow Automation",
      tagline: "Workflow Automation Pipeline",
      category: "Workflow Automation",
      role: "Automation Developer",
      description:
        "An automated workflow solution utilizing Google Apps Script and Google Sheets APIs to automate data synchronization, webhook ingestion, data integrity validations, and periodic reporting.",
      technologies: ["Google Apps Script", "JavaScript", "Google Sheets API", "Webhooks", "REST APIs"],
      features: [
        "Event-driven trigger scripts executing automated data transformations",
        "Automated scheduled email and PDF report distribution",
        "Webhook integration connecting external forms to spreadsheet records",
        "Data validation routines and automated audit logging",
      ],
      githubUrl: "https://github.com/BhargaviAnand23",
    },
  ] as ProjectItem[],

  skills: [
    {
      category: "Frontend Engineering",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Framer Motion"],
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "Express", "REST APIs", "SQLite", "Firebase", "MongoDB", "Google Apps Script"],
    },
    {
      category: "Mobile & Tools",
      skills: ["Android Development", "Android Studio", "Git", "GitHub", "Postman", "VS Code"],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      organization: "Software Engineering & Client Projects",
      period: "Present",
      location: "Arakkonam, Tamil Nadu",
      responsibilities: [
        "Developing responsive web applications using React, TypeScript, and modern component systems.",
        "Built and deployed the Android ERP and Billing application for BS Rocks Creations handling billing, inventory, and invoice generation.",
        "Engineered automated workflow pipelines using Google Apps Script and Google Sheets APIs.",
        "Implemented RESTful API endpoints with structured request validation and database persistence.",
      ],
      tech: ["React", "TypeScript", "Node.js", "Express", "Android", "Tailwind CSS", "Google Apps Script", "SQLite"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      location: "Arakkonam, Tamil Nadu",
    },
  ] as EducationItem[],
};
