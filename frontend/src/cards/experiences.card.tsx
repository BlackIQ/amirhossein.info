"use client";

import { useEffect, useState } from "react";

import { API } from "@/api";
import { Experience } from "@/types/experience.type";

const ExperiencesCard = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const { data: experiences } = await API.get("experiences");

        setExperiences(experiences);
        setError(false);
      } catch (error) {
        console.error("Error fetching experiences:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getExperiences();
  }, []);

  if (loading) {
    return (
      <section id="experience" className="site-section">
        <h2 className="section-heading">Experience</h2>
        <p>Loading experiences...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experience" className="site-section">
        <h2 className="section-heading">Experience</h2>
        <p>
          <strong>Error:</strong> Unable to load experiences.
        </p>
      </section>
    );
  }

  if (experiences.length === 0) {
    return (
      <section id="experience" className="site-section">
        <h2 className="section-heading">Experience</h2>
        <p>No experiences found.</p>
      </section>
    );
  }

  return (
    <section id="experience" className="site-section">
      <h2 className="section-heading">Experience</h2>

      {experiences.map((experience, index) => (
        <article className="experience" key={experience.id}>
          <h3 className="experience-title">{experience.position}</h3>

          <div className="experience-company">
            {experience.companyName}
            {" · "}
            {experience.location}
          </div>

          <div className="experience-date">
            {experience.startDate} – {experience.endDate}
          </div>

          {experience.duties && (
            <div className="experience-duties">{experience.duties}</div>
          )}

          {experience.skills && (
            <p className="experience-skills">
              <strong>Technologies:</strong>{" "}
              {experience.skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
                .join(", ")}
            </p>
          )}

          {experience.url && (
            <p>
              <a href={experience.url} target="_blank" rel="noreferrer">
                Visit company website
              </a>
            </p>
          )}

          {index < experiences.length - 1 && <hr />}
        </article>
      ))}
    </section>
  );
};

export default ExperiencesCard;
