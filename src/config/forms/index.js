const forms = [
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
