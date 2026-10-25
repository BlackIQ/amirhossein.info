interface SkillInterface {
  id: string;
  name: string;
}

interface VentureInterface {
  name: string;
  status: string;
  description: string;
  website: string | null;
  linkedin: string | null;
  github: string | null;
}

interface ExperienceInterface {
  id: string;
  position: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  duties: string;
  skills: SkillInterface[];
}

interface SocialInterface {
  name: string;
  url: string;
  handle: string;
}

export const VENTURES: VentureInterface[] = [
  {
    name: "Aban Technologies",
    status: "Building",
    description: "Parent company. Holding brand for Fidoonet and Narenj Cloud.",
    website: null,
    linkedin: null,
    github: null,
  },
  {
    name: "Fidoonet",
    status: "Building",
    description:
      "Enterprise network services, managed contracts and on-site helpdesk solutions.",
    website: "https://fidoo.net",
    linkedin: null,
    github: null,
  },
  {
    name: "Narenj Cloud",
    status: "Building",
    description: "Cloud infrastructure and platform solutions for businesses.",
    website: "https://narenj.cloud",
    linkedin: null,
    github: null,
  },
  {
    name: "OpenHubble",
    status: "Active",
    description:
      "Open-source metrics and observability platform. Lightweight agent, real-time dashboard and TimescaleDB backend.",
    website: "https://openhubble.com",
    linkedin: "https://linkedin.com/company/openhubble",
    github: "https://github.com/openhubble",
  },
  {
    name: "Rachel Agent",
    status: "In development",
    description:
      "AI-powered smart home assistant. Voice and context-aware control of home devices and systems.",
    website: "https://rachel.amirhossein.info",
    linkedin: null,
    github: "https://github.com/BlackIQ/Rachel",
  },
  {
    name: "TFAsoft",
    status: "Archived",
    description:
      "Telegram-based multi-factor authentication platform. Full API, SDKs, dashboard and bot. No longer maintained.",
    website: "https://tfasoft.com",
    linkedin: "https://linkedin.com/company/tfasoft",
    github: "https://github.com/tfasoft",
  },
];

export const EXPERIENCES: ExperienceInterface[] = [
  {
    id: "ee03",
    position: "Senior Software Lead",
    companyName: "Asan Cycle Pishtaz",
    location: "Tehran, Iran",
    startDate: "Apr 2025",
    endDate: "May 2026",
    duties:
      "Designed and developed enterprise backend services using Express.js and FastAPI. Built modern web applications with Next.js, React, Redux and Material UI. Designed scalable RESTful APIs and led product and team efforts.",
    skills: [
      { id: "ee03_01", name: "FastAPI" },
      { id: "ee03_02", name: "PostgreSQL" },
      { id: "ee03_03", name: "Express.js" },
      { id: "ee03_04", name: "MongoDB" },
      { id: "ee03_05", name: "Redis" },
      { id: "ee03_06", name: "Next.js" },
      { id: "ee03_07", name: "React.js" },
    ],
  },
  {
    id: "d048",
    position: "DevOps Engineer",
    companyName: "Hamnavard Group",
    location: "Tehran, Iran",
    startDate: "Apr 2024",
    endDate: "Mar 2025",
    duties:
      "Designed and managed CI/CD pipelines using GitLab CI and multiple runners. Deployed and administered a private Docker Registry. Built monitoring with Zabbix, Prometheus and Grafana.",
    skills: [
      { id: "d048_01", name: "Docker" },
      { id: "d048_02", name: "GitLab" },
      { id: "d048_03", name: "GitLab CI" },
      { id: "d048_04", name: "Docker Registry" },
      { id: "d048_05", name: "CI/CD" },
      { id: "d048_06", name: "Python" },
      { id: "d048_07", name: "Bash" },
      { id: "d048_08", name: "Zabbix" },
    ],
  },
  {
    id: "d4f1",
    position: "Senior Backend Engineer",
    companyName: "Banks Pension Fund",
    location: "Tehran, Iran",
    startDate: "Aug 2022",
    endDate: "May 2024",
    duties:
      "Designed and developed enterprise backend services using Express.js and Node.js for large-scale business applications. Built high-performance RESTful APIs integrated with governmental GSB services.",
    skills: [
      { id: "d4f1_01", name: "Express.js" },
      { id: "d4f1_02", name: "MongoDB" },
      { id: "d4f1_03", name: "SQL Server" },
      { id: "d4f1_04", name: "React.js" },
      { id: "d4f1_05", name: "Nginx" },
      { id: "d4f1_06", name: "CI/CD" },
    ],
  },
  {
    id: "851f",
    position: "Software Developer",
    companyName: "Shahab Khodro Co",
    location: "Tehran, Iran",
    startDate: "Sep 2022",
    endDate: "Jun 2023",
    duties:
      "Sole software engineer responsible for designing, developing and maintaining the company's internal software systems. Built scalable RESTful APIs and modern web applications.",
    skills: [
      { id: "851f_01", name: "Express.js" },
      { id: "851f_02", name: "MongoDB" },
      { id: "851f_03", name: "React.js" },
      { id: "851f_04", name: "Material UI" },
    ],
  },
  {
    id: "cc3c",
    position: "Software Developer",
    companyName: "Narbon",
    location: "Tehran, Iran",
    startDate: "Nov 2021",
    endDate: "Aug 2022",
    duties:
      "Developed full-stack web applications using React and Flask. Designed and implemented RESTful APIs. Built responsive interfaces with React, Bootstrap and Material UI.",
    skills: [
      { id: "cc3c_01", name: "Laravel" },
      { id: "cc3c_01", name: "Flask" },
      { id: "cc3c_02", name: "MariaDB" },
      { id: "cc3c_03", name: "React.js" },
      { id: "cc3c_04", name: "Material UI" },
    ],
  },
  {
    id: "f0f1",
    position: "Backend Developer",
    companyName: "Narbon",
    location: "Tehran, Iran",
    startDate: "Apr 2019",
    endDate: "Nov 2021",
    duties:
      "Developed and maintained backend applications using PHP. Built responsive interfaces with Bootstrap. Designed and customized WordPress sites including custom themes and plugins.",
    skills: [
      { id: "f0f1_01", name: "PHP" },
      { id: "f0f1_02", name: "MariaDB" },
      { id: "f0f1_03", name: "Bootstrap" },
      { id: "f0f1_04", name: "Apache" },
    ],
  },
];

export const SOCIALS: SocialInterface[] = [
  {
    name: "GitHub",
    url: "https://github.com/BlackIQ",
    handle: "@BlackIQ",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/amirhosseinmohammadi",
    handle: "amirhosseinmohammadi",
  },
  {
    name: "Email",
    url: "mailto:hi@amirhossein.info",
    handle: "hi@amirhossein.info",
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    handle: "Download PDF",
  },
];
