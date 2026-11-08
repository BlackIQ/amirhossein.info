"use client";

import { useLanguage } from "@/context/language.context";

const MainCard = () => {
  const { t } = useLanguage();

  const aboutItems = [
    { text: "NarenjCloud", title: t("profile.company") },
    { text: "Tehran, Iran", title: t("profile.location") },
    { text: "Nov 20, 2003", title: t("profile.birthdate") },
    { text: "+98 919 268 0633", title: t("profile.phone") },
    { text: "hi@amirhossein.info", title: t("profile.email") },
  ];

  return (
    <section className="site-section">
      <div className="profile">
        <div>
          <img
            className="profile-photo"
            src="https://avatars.githubusercontent.com/u/55284339?v=4"
            alt="Amirhossein Mohammadi"
          />
        </div>

        <div>
          <h1 className="profile-name">Amirhossein Mohammadi</h1>

          <div className="profile-role">
            Platform &amp; Infrastructure Engineer
          </div>

          <ul className="profile-details">
            {aboutItems.map((item) => (
              <li key={item.title}>
                <span className="profile-label">{item.title}:</span> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainCard;
