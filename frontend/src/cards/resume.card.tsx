"use client";

import { useEffect, useState } from "react";

import { API } from "@/api";
import { Resume } from "@/types/resume.type";

const ResumeCard = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getResumes = async () => {
      try {
        const { data: resumes } = await API.get("resumes");

        setResumes(resumes);
        setError(false);
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getResumes();
  }, []);

  if (loading) {
    return (
      <section id="resume" className="site-section">
        <h2 className="section-heading">Resume</h2>
        <p>Loading resumes...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="resume" className="site-section">
        <h2 className="section-heading">Resume</h2>
        <p>
          <strong>Error:</strong> Unable to load resumes.
        </p>
      </section>
    );
  }

  if (resumes.length === 0) {
    return (
      <section id="resume" className="site-section">
        <h2 className="section-heading">Resume</h2>
        <p>No resumes found.</p>
      </section>
    );
  }

  return (
    <section id="resume" className="site-section">
      <h2 className="section-heading">Resume</h2>

      <ul className="plain-list">
        {resumes.map((resume) => (
          <li key={resume.id}>
            <a href={resume.url} target="_blank" rel="noreferrer">
              {resume.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResumeCard;
