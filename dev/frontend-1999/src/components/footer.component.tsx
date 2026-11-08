"use client";

import { useLanguage } from "@/context/language.context";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="/">{t("footer.home")}</a>
        <a href="#about">{t("footer.about")}</a>
        <a href="#experience">{t("footer.experience")}</a>
        <a href="#skills">{t("footer.skills")}</a>
        <a href="#resume">{t("footer.resume")}</a>
        <a href="#contact">{t("footer.contact")}</a>
      </div>

      <div>{t("footer.lastUpdated")}: August 24, 2026</div>

      <div>{t("footer.copyright")}</div>
    </footer>
  );
};

export default Footer;
