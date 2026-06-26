const forms = [
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
];

export { forms };
