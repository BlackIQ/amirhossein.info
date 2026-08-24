const aboutItems = [
  { text: "NarenjCloud", title: "Company" },
  { text: "Tehran, Iran", title: "Location" },
  { text: "Nov 20, 2003", title: "Birthdate" },
  { text: "+98 919 268 0633", title: "Number" },
  { text: "hi@amirhossein.info", title: "Email" },
];

const MainCard = () => {
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
