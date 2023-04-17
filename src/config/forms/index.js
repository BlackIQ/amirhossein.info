const forms = [
  {
    name: "login",
    fields: {
      username: {
        type: "text",
        label: "Username",
        placeholder: "Enter username",
        secure: false,
      },
      password: {
        type: "text",
        label: "Password",
        placeholder: "Enter password",
        secure: true,
      },
    },
  },
  {
    name: "socials",
    fields: {
      label: {
        type: "text",
        label: "Name",
        placeholder: "Social media name",
        secure: false,
      },
      url: {
        type: "text",
        label: "URL",
        placeholder: "Social media url",
        secure: false,
      },
    },
  },
  {
    name: "skills",
    fields: {
      name: {
        type: "text",
        label: "Name",
        placeholder: "Skill name",
        secure: false,
      },
      url: {
        type: "resumes",
        label: "Parent",
        placeholder: "Skill parent",
        secure: false,
      },
    },
  },
  {
    name: "resumes",
    fields: {
      name: {
        type: "text",
        label: "Name",
        placeholder: "Resume name",
        secure: false,
      },
      url: {
        type: "text",
        label: "URL",
        placeholder: "Social media url",
        secure: false,
      },
    },
  },
  {
    name: "duties",
    fields: {
      name: {
        type: "text",
        label: "Name",
        placeholder: "Duty name",
        secure: false,
      },
    },
  },
];

export { forms };
