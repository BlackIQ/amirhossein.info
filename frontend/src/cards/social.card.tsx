"use client";

import { useEffect, useState } from "react";

import { API } from "@/api";
import { Social } from "@/types/social.type";

const SocialCard = () => {
  const [socials, setSocials] = useState<Social[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSocials = async () => {
      try {
        const { data: socials } = await API.get("socials");

        setSocials(socials);
        setError(false);
      } catch (error) {
        console.error("Error fetching socials:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getSocials();
  }, []);

  if (loading) {
    return (
      <section id="social" className="site-section">
        <h2 className="section-heading">Elsewhere</h2>
        <p>Loading links...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="social" className="site-section">
        <h2 className="section-heading">Elsewhere</h2>
        <p>
          <strong>Error:</strong> Unable to load social links.
        </p>
      </section>
    );
  }

  if (socials.length === 0) {
    return (
      <section id="social" className="site-section">
        <h2 className="section-heading">Elsewhere</h2>
        <p>No social links found.</p>
      </section>
    );
  }

  return (
    <section id="social" className="site-section">
      <h2 className="section-heading">Elsewhere</h2>

      <ul className="plain-list">
        {socials.map((social) => (
          <li key={social.id}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialCard;
