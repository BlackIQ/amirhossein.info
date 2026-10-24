"use client";

import { useLanguage } from "@/context/language.context";
import { languages, type Language } from "@/config/languages";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="site-header">
      <div className="site-title">
        <a href="/">AMIRHOSSEIN.INFO</a>
      </div>

      <div className="site-description">{t("navbar.description")}</div>

      <nav className="site-nav" aria-label={t("navbar.navigation")}>
        <a href="/">{t("navbar.home")}</a>
        <a href="#about">{t("navbar.about")}</a>
        <a href="#experience">{t("experiences.title")}</a>
        <a href="#skills">{t("skills.title")}</a>
        <a href="#contact">{t("navbar.contact")}</a>
      </nav>

      <div className="language-nav">
        {t("navbar.language")}:{" "}
        {(Object.entries(languages) as [Language, string][]).map(
          ([langCode, langName], index) => (
            <span key={langCode}>
              {index > 0 && " · "}
              {language === langCode ? (
                <strong>{langName}</strong>
              ) : (
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    handleLanguageChange(langCode);
                  }}
                >
                  {langName}
                </a>
              )}
            </span>
          ),
        )}
      </div>
    </header>
  );
};

export default Navbar;
