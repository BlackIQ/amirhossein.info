"use client";

import { useEffect, useState } from "react";

import { API } from "@/api";
import { Skill } from "@/types/skill.type";

const SkillsCard = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const { data: skills } = await API.get("skills");

        setSkills(skills);
        setError(false);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="site-section">
        <h2 className="section-heading">Skills</h2>
        <p>Loading skills...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="site-section">
        <h2 className="section-heading">Skills</h2>
        <p>
          <strong>Error:</strong> Unable to load skills.
        </p>
      </section>
    );
  }

  if (skills.length === 0) {
    return (
      <section id="skills" className="site-section">
        <h2 className="section-heading">Skills</h2>
        <p>No skills found.</p>
      </section>
    );
  }

  const aggregatedData = skills.reduce<Record<string, Skill[]>>(
    (result, skill) => {
      if (!result[skill.category]) {
        result[skill.category] = [];
      }

      result[skill.category].push(skill);

      return result;
    },
    {},
  );

  return (
    <section id="skills" className="site-section">
      <h2 className="section-heading">Skills</h2>

      {Object.entries(aggregatedData).map(([category, categorySkills]) => (
        <div className="skill-group" key={category}>
          <h3 className="skill-category">{category}</h3>

          <p>{categorySkills.map((skill) => skill.label).join(", ")}</p>
        </div>
      ))}
    </section>
  );
};

export default SkillsCard;
