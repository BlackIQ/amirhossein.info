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
    name: "message",
    fields: {
      name: {
        type: "text",
        label: "Name",
        placeholder: "Enter your name",
        secure: false,
      },
      email: {
        type: "text",
        label: "Email",
        placeholder: "Enter your email",
        secure: false,
      },
      message: {
        type: "textarea",
        label: "Message",
        placeholder: "Can not wait for your message",
        secure: false,
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
  {
    name: "newBlog",
    fields: {
      title: {
        type: "text",
        label: "Title",
        placeholder: "Enter title",
        secure: false,
      },
      details: {
        type: "text",
        label: "Short details",
        placeholder: "Enter some details",
        secure: false,
      },
      thumbnail: {
        type: "text",
        label: "Thumbnail details",
        placeholder: "Enter Thumbnail",
        secure: false,
      },
      content: {
        type: "textarea",
        label: "content",
        placeholder: "Enter content in Markdown!",
        secure: false,
      },
      private: {
        type: "checkbox",
        label: "This is a private note",
        placeholder: "This is a private note",
        secure: false,
      },
    },
  },
];

export { forms };
