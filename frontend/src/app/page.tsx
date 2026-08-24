import Navbar from "@/components/navbar.component";

import AboutMeCard from "@/cards/about.card";
import ExperiencesCard from "@/cards/experiences.card";
import MainCard from "@/cards/main.card";
import MessageCard from "@/cards/message.card";
import ResumeCard from "@/cards/resume.card";
import SkillsCard from "@/cards/skills.card";
import SocialCard from "@/cards/social.card";

export default function Home() {
  return (
    <div className="site">
      <Navbar />

      <main className="page-grid">
        <div className="main-column">
          <MainCard />
          <AboutMeCard />
          <ExperiencesCard />
        </div>

        <aside className="side-column">
          <SkillsCard />
          <ResumeCard />
          <SocialCard />
          <MessageCard />
        </aside>
      </main>

      <footer className="site-footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <div>Last updated: August 24, 2026</div>

        <div>© 2026 Amirhossein Mohammadi</div>
      </footer>
    </div>
  );
}
