"use client";

import { useLanguage } from "@/context/language.context";

const AboutMeCard = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="site-section">
      <h2 className="section-heading">About Me</h2>

      <p>{t("about.bio")}</p>
    </section>
  );
};

export default AboutMeCard;
