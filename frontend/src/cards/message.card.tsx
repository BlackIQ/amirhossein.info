"use client";

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { API } from "@/api";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const MessageCard = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const sendMessage = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setLoading(true);
    try {
      await API.post("messages", formData);

      alert("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      alert("Failed to send message");
    }
    setLoading(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <Box>
      <Typography variant="body1" color="text.primary" gutterBottom>
        Contact me directly by sending a message below.
      </Typography>
      <Box component="form" noValidate>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
          size="small"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          size="small"
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          error={!!errors.message}
          helperText={errors.message}
          margin="normal"
          multiline
          rows={4}
          size="small"
        />

        <Button
          fullWidth
          variant="contained"
          onClick={sendMessage}
          disabled={loading}
          sx={{ mt: 2 }}
          disableElevation
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </Box>
  );
};

export default MessageCard;
