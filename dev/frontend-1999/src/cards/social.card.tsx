"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/context/language.context";

import { API } from "@/api";
import { Social } from "@/types/social.type";

const SocialCard = () => {
  const { t } = useLanguage();

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
        <h2 className="section-heading">{t("social.title")}</h2>
        <p>{t("social.loading")}</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="social" className="site-section">
        <h2 className="section-heading">{t("social.title")}</h2>
        <p>
          <strong>{t("common.error")}:</strong> {t("social.error")}
        </p>
      </section>
    );
  }

  if (socials.length === 0) {
    return (
      <section id="social" className="site-section">
        <h2 className="section-heading">{t("social.title")}</h2>
        <p>No social links found.</p>
        <p>{t("social.empty")}</p>
      </section>
    );
  }

  return (
    <section id="social" className="site-section">
      <h2 className="section-heading">{t("social.title")}</h2>

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
