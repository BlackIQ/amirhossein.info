"use client";

/* ── Ventures (built by me) ── */

const VENTURES = [
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
    linkedin: null,
    github: "https://github.com/openhubble",
  },
  {
    name: "Rachel Agent",
    status: "In development",
    description:
      "AI-powered smart home assistant. Voice and context-aware control of home devices and systems.",
    website: null,
    linkedin: null,
    github: "https://github.com/BlackIQ/rachel-agent",
  },
  {
    name: "TFAsoft",
    status: "Archived",
    description:
      "Telegram-based multi-factor authentication platform. Full API, SDKs, dashboard and bot. No longer maintained.",
    website: null,
    linkedin: null,
    github: "https://github.com/tfasoft",
  },
];

/* ── Employment (from database, ordered by priority) ── */

const EXPERIENCES = [
  {
    id: "f157b7bc",
    position: "Network Infrastructure Lead",
    companyName: "Asan Cycle Pishtaz",
    location: "Tehran, Iran",
    startDate: "Oct 2025",
    endDate: "May 2026",
    duties:
      "Led the design, administration and continuous improvement of the organization's enterprise network and IT infrastructure. Managed Windows Server infrastructure including Active Directory, DNS, DHCP, Group Policy and Microsoft services.",
    skills: "Network Engineering, Cisco, MikroTik, VMware ESXi, Windows Server",
  },
  {
    id: "ee03c275",
    position: "Senior Software Engineer",
    companyName: "Asan Cycle Pishtaz",
    location: "Tehran, Iran",
    startDate: "Apr 2025",
    endDate: "May 2026",
    duties:
      "Designed and developed enterprise backend services using Express.js and FastAPI. Built modern web applications with Next.js, React, Redux and Material UI. Designed scalable RESTful APIs and led product and team efforts.",
    skills: "FastAPI, PostgreSQL, Express.js, Next.js, React, Redis, MongoDB",
  },
  {
    id: "d048078f",
    position: "DevOps Engineer",
    companyName: "Hamnavard Group",
    location: "Tehran, Iran",
    startDate: "Apr 2024",
    endDate: "Mar 2025",
    duties:
      "Designed and managed CI/CD pipelines using GitLab CI and multiple runners. Deployed and administered a private Docker Registry. Built monitoring with Zabbix, Prometheus and Grafana.",
    skills: "Docker, GitLab CI, CI/CD, Prometheus, Grafana, Zabbix, Python",
  },
  {
    id: "7475093b",
    position: "Network Infrastructure Engineer",
    companyName: "Rahpoo Sanat Pishro",
    location: "Tehran, Iran",
    startDate: "Apr 2024",
    endDate: "Mar 2025",
    duties:
      "Managed and maintained enterprise network infrastructure across multiple office locations and warehouses. Configured and administered Cisco switches and MikroTik routers for high availability.",
    skills: "Network Engineering, Cisco, MikroTik, VMware ESXi",
  },
  {
    id: "d4f106e6",
    position: "Senior Backend Engineer",
    companyName: "Banks Pension Fund",
    location: "Tehran, Iran",
    startDate: "Aug 2022",
    endDate: "May 2024",
    duties:
      "Designed and developed enterprise backend services using Express.js and Node.js for large-scale business applications. Built high-performance RESTful APIs integrated with governmental GSB services.",
    skills: "Express.js, Node.js, MongoDB, SQL Server, Nginx, CI/CD",
  },
  {
    id: "851feeca",
    position: "Software Engineer",
    companyName: "Shahab Khodro Co",
    location: "Tehran, Iran",
    startDate: "Sep 2022",
    endDate: "Jun 2023",
    duties:
      "Sole software engineer responsible for designing, developing and maintaining the company's internal software systems. Built scalable RESTful APIs and modern web applications.",
    skills: "Node.js, Express.js, React, Next.js, Redux, MongoDB, Material UI",
  },
  {
    id: "cc3cdfdf",
    position: "Software Developer",
    companyName: "Narbon",
    location: "Tehran, Iran",
    startDate: "Nov 2021",
    endDate: "Aug 2022",
    duties:
      "Developed full-stack web applications using React and Flask. Designed and implemented RESTful APIs. Built responsive interfaces with React, Bootstrap and Material UI.",
    skills: "React, Node.js, Express.js, MongoDB, Material UI",
  },
  {
    id: "f0f11193",
    position: "Backend Developer",
    companyName: "Narbon",
    location: "Tehran, Iran",
    startDate: "Apr 2019",
    endDate: "Nov 2021",
    duties:
      "Developed and maintained backend applications using PHP. Built responsive interfaces with Bootstrap. Designed and customized WordPress sites including custom themes and plugins.",
    skills: "PHP, MariaDB, Bootstrap, WordPress",
  },
];

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/BlackIQ", handle: "@BlackIQ" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amirhosseinmohammadi",
    handle: "amirhosseinmohammadi",
  },
  {
    name: "Email",
    url: "mailto:hi@amirhossein.info",
    handle: "hi@amirhossein.info",
  },
  { name: "Resume", url: "/resume.pdf", handle: "Download PDF" },
];

function VentureLink({ label, url }: { label: string; url: string | null }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="project-link">
        {label}
      </a>
    );
  }
  return <span className="project-link project-link--disabled">{label}</span>;
}

export default function Home() {
  return (
    <div className="site">
      {/* Header */}
      <header className="header">
        <a href="/" className="logo">
          Amirhossein
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#ventures">Ventures</a>
          <a href="#experience">Experience</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      {/* Profile */}
      <section className="profile">
        <img
          className="profile-photo"
          src="https://avatars.githubusercontent.com/u/55284339?v=4"
          alt="Amirhossein Mohammadi"
          width={72}
          height={72}
        />
        <div>
          <h1 className="profile-name">Amirhossein Mohammadi</h1>
          <p className="profile-role">Platform &amp; Infrastructure Engineer</p>
          <p className="profile-tagline">Building what comes next.</p>
          <ul className="profile-details">
            <li>
              <span className="profile-label">Company</span>
              Aban Technologies
            </li>
            <li>
              <span className="profile-label">Location</span>
              Tehran, Iran
            </li>
            <li>
              <span className="profile-label">Email</span>
              <a href="mailto:hi@amirhossein.info">hi@amirhossein.info</a>
            </li>
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <p>
          I build platforms and infrastructure from the ground up. Over the past
          years I have founded multiple companies and led technical work across
          network infrastructure, backend systems and cloud platforms. I
          currently serve as founder and board member at Aban Technologies while
          continuing to develop OpenHubble and Rachel Agent.
        </p>
      </section>

      {/* Ventures */}
      <section id="ventures" className="section">
        <h2 className="section-title">Ventures</h2>
        <div className="projects">
          {VENTURES.map((v) => (
            <article key={v.name} className="project">
              <div className="project-header">
                <h3 className="project-name">{v.name}</h3>
                <span className="project-status">{v.status}</span>
              </div>
              <p className="project-description">{v.description}</p>
              <div className="project-links">
                <VentureLink label="Website" url={v.website} />
                <VentureLink label="LinkedIn" url={v.linkedin} />
                <VentureLink label="GitHub" url={v.github} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        {EXPERIENCES.map((exp) => (
          <article key={exp.id} className="experience">
            <div className="experience-header">
              <h3 className="experience-title">{exp.position}</h3>
              <span className="experience-date">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <div className="experience-company">
              {exp.companyName} · {exp.location}
            </div>
            <p className="experience-duties">{exp.duties}</p>
            <p className="experience-skills">{exp.skills}</p>
          </article>
        ))}
      </section>

      {/* Connect */}
      <section id="connect" className="section">
        <h2 className="section-title">Connect</h2>
        <ul className="social-list">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {s.name} <span>{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-copy">© 2026 Amirhossein Mohammadi</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#ventures">Ventures</a>
          <a href="#experience">Experience</a>
        </div>
      </footer>
    </div>
  );
}
