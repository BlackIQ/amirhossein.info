"use client";

import { useLanguage } from "@/context/language.context";
import { languages, type Language } from "@/config/languages";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="site-header">
      <div className="site-title">
        <a href="/">AMIRHOSSEIN.INFO</a>
      </div>

      <div className="site-description">
        Amirhossein Mohammadi&apos;s personal homepage
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#writing">Writing</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="language-nav">
        Language:{" "}
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
