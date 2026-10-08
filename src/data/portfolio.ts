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
  institution: string;
  location: string;
  period: string;
}

export interface CertificationCategory {
  title: string;
  items: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "BHARGAVI A",
    title: "FULL STACK DEVELOPER",
    location: "Arakkonam, Tamil Nadu, India",
    degree: "B.E. Computer Science and Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    summary:
      "Full stack developer and final-year B.E. Computer Science (AI & ML) student with hands-on experience in React.js, Next.js, Node.js, Supabase, and Kotlin. Built and delivered a youth activity booking platform, an event booking platform, and an Android billing application during an App & Website Development internship. Experienced in authentication, database design, payment integration, and workflow automation. Seeking an entry-level Software Developer role to contribute to production-grade web and mobile applications.",
    email: "bhargavianandhan@gmail.com",
    phone: "+91-9629391035",
    linkedin: "https://www.linkedin.com/in/bhargavi-anand-6ab9b7292",
    github: "https://github.com/BhargaviAnand23",
  },

  projects: [
    {
      id: "kidspire",
      number: "01",
      title: "Kidspire – Youth Activity Booking Platform (Web and Android)",
      tagline: "Youth Activity Booking Platform",
      category: "Internship Project",
      year: "2026",
      role: "Full Stack Developer",
      description:
        "Built a full-stack platform where organizations list events, competitions, courses, and webinars for children aged 3–18, with Sports and Talents category hierarchies.",
      technologies: ["Next.js 14", "Tailwind CSS", "Supabase", "Capacitor", "Vercel", "Resend", "Google Antigravity"],
      features: [
        "Implemented Supabase authentication, Row Level Security policies, a seat-booking database function, custom SMTP email templates, and QR-code ticket emails.",
        "Added event galleries, rate-limited forms, a first-time user walkthrough, and payout tracking; configured Android release signing with Gradle and GitHub Actions.",
        "Engineered youth sports and talents category hierarchies with accessible, mobile-first booking flows.",
      ],
      githubUrl: "https://github.com/BhargaviAnand23",
    },
    {
      id: "lumen",
      number: "02",
      title: "Lumen – Event Booking Platform",
      tagline: "Event Booking & Online Payments",
      category: "Internship Project",
      year: "2026",
      role: "Frontend / Full Stack Developer",
      description:
        "Developed an event booking platform with user authentication, event listings, and online payments.",
      technologies: ["React", "TanStack Router", "Supabase", "Razorpay", "Lovable", "Google Antigravity"],
      features: [
        "Fixed authentication flows, migrated the Supabase schema to a new project, and integrated Razorpay payments.",
        "Iterated on multiple UI redesigns to improve usability and visual consistency.",
        "Built dynamic event search, secure payment verification, and seamless checkout flows.",
      ],
      githubUrl: "https://github.com/BhargaviAnand23",
    },
    {
      id: "bs-rocks-creations",
      number: "03",
      title: "Android ERP and Billing App – BS Rocks Creations",
      tagline: "Enterprise Billing & POS Mobile Solution",
      category: "Internship Project",
      year: "2026",
      role: "Mobile Application Developer",
      description:
        "Built an Android billing management app with 8 modules and 11 Room database entities, using MVVM architecture.",
      technologies: ["Kotlin", "Jetpack Compose", "Room (SQLite)", "MVVM", "Material 3", "Google Antigravity"],
      features: [
        "Implemented GST and discount calculations, a bill status workflow, amount-in-words conversion, PDF bill generation, and participant billing with numbered series.",
        "Applied company branding across the login screen, app bar, and PDF headers; delivered a signed release APK.",
        "Constructed 8 production modules and 11 Room entities with reliable offline-first persistence.",
      ],
      githubUrl: "https://github.com/BhargaviAnand23",
    },
    {
      id: "orbitra",
      number: "04",
      title: "Orbitra – Career Networking and Opportunity Platform",
      tagline: "Career Networking & Real-Time Messaging",
      category: "Personal Project",
      year: "2026",
      role: "Full Stack Developer",
      description:
        "Developed a full-stack platform for students and early professionals with skill-based profiles, opportunity feeds, project showcases, goal tracking, peer networking, and real-time messaging.",
      technologies: ["React.js", "Supabase", "Lovable", "Tailwind CSS"],
      features: [
        "Integrated authentication, database management, and CRUD operations with a responsive layout.",
        "Constructed skill-based profiles, peer connection feeds, and real-time user-to-user messaging.",
        "Implemented goal-tracking telemetry dashboards and student portfolio showcases.",
      ],
      githubUrl: "https://github.com/BhargaviAnand23",
    },
    {
      id: "google-sheets-automation",
      number: "05",
      title: "Google Sheets Workflow Automation",
      tagline: "Data Pipeline & Process Automation",
      category: "Workflow Automation",
      year: "Dec 2025",
      role: "Automation Developer",
      description:
        "Built an automated workflow with triggers and actions to streamline data processing and task management, reducing repetitive manual work.",
      technologies: ["Make.com", "Google Sheets", "Webhooks", "Automation Workflows"],
      features: [
        "Constructed automated workflows with event triggers and action chains to eliminate manual data entry.",
        "Streamlined data processing pipelines and repetitive operational reporting tasks.",
      ],
      githubUrl: "https://github.com/BhargaviAnand23",
    },
  ] as ProjectItem[],

  skills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "SQL", "Kotlin"],
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "Flexbox"],
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "REST APIs", "Supabase (PostgreSQL, Row Level Security)", "SQLite", "Room"],
    },
    {
      category: "Mobile Solutions",
      skills: ["Capacitor (Android)", "Kotlin (MVVM, Jetpack Compose)", "React Native (Expo)"],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Vercel",
        "Razorpay",
        "Make.com",
        "Automation Anywhere",
        "Lovable",
        "Google Antigravity",
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: "exp-bsrocks",
      role: "App & Website Development Intern",
      organization: "BS Rocks Creations",
      period: "June 2026 – August 2026",
      location: "Chennai, Tamil Nadu",
      responsibilities: [
        "Built three production applications: Kidspire (youth activity booking platform), Lumen (event booking platform), and an Android ERP and billing app.",
        "Developed responsive web and mobile interfaces, integrated authentication, databases, and payment gateways, and applied UI/UX feedback from the client.",
        "Tested and debugged applications, resolved database and deployment issues, and delivered a signed Android release build for client handoff.",
        "Maintained technical documentation and used Git and GitHub for version control and release management.",
      ],
      tech: [
        "Next.js 14",
        "React.js",
        "Supabase",
        "Kotlin",
        "Jetpack Compose",
        "Room (SQLite)",
        "Capacitor",
        "Razorpay",
        "Git",
        "GitHub Actions",
        "Vercel",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Sriram Engineering College",
      location: "Chennai, Tamil Nadu",
      period: "June 2023 – Expected June 2027",
    },
    {
      degree: "Intermediate (MPC)",
      specialization: "Mathematics, Physics, Chemistry",
      institution: "Vignan Junior College",
      location: "Chittoor, Andhra Pradesh",
      period: "June 2021 – June 2023",
    },
  ] as EducationItem[],

  certifications: {
    nxtwave: [
      "Node.js",
      "React JS – Getting Started",
      "JavaScript Essentials",
      "Responsive Web Design using Flexbox",
      "Build Your Own Dynamic Web Application",
      "Build Your Own Responsive Website",
      "Build Your Own Static Website",
      "Programming Foundations with Python",
      "Developer Foundations",
      "Artificial Intelligence Fundamentals",
      "XPM 4.0 Fundamentals",
      "Setting Priorities",
    ],
    workshops: [
      "Build and Launch Your MVP (Lovable, Supabase)",
      "AI and Robotic Process Automation (Automation Anywhere)",
      "AI Workflows and Automation using Make.com",
    ],
    webinars: [
      'International Webinar on "IoT and Its Applications" by Dr. Bose, Former Dean, Department of CSE, CEG Campus, Anna University – October 2023 (International Scientific Research and Publications)',
    ],
    industrialExposure: [
      "Industrial Visit, Retech Lasers Private Limited – January 2025",
      "In-plant Training, Engine Factory Avadi (Defence)",
    ],
    awards: [
      "Junior Grade Typewriting English – First Class with Distinction",
    ],
  },
};

