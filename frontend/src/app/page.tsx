"use client";

import { VENTURES, EXPERIENCES, SOCIALS } from "@/data";

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
          <a href="#experience">Experience</a>
          <a href="#ventures">Ventures</a>
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
            <p className="experience-skills">
              {exp.skills.map((skill, index) => (
                <span key={skill.id}>
                  {skill.name}
                  {exp.skills.length === index + 1 ? "." : ", "}
                </span>
              ))}
            </p>
          </article>
        ))}
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
          <a href="#experience">Experience</a>
          <a href="#ventures">Ventures</a>
          <a href="#connect">Connect</a>
        </div>
      </footer>
    </div>
  );
}
