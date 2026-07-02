"use client";

import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLanguage } from "@/context/language.context";
import { API } from "@/api";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error";
}

const MessageCard = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim())
      newErrors.name = t("message.validation.nameRequired");
    if (!formData.email.trim())
      newErrors.email = t("message.validation.emailRequired");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t("message.validation.emailInvalid");
    if (!formData.message.trim())
      newErrors.message = t("message.validation.messageRequired");
    return newErrors;
  };

  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
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

      showSnackbar(t("message.success"), "success");

      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error sending message:", error);
      showSnackbar(
        error instanceof Error ? error.message : t("message.error"),
        "error",
      );
    } finally {
      setLoading(false);
    }
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
        {t("message.description")}
      </Typography>
      <Box component="form" noValidate>
        <TextField
          fullWidth
          label={t("message.form.name")}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
          size="small"
          disabled={loading}
        />
        <TextField
          fullWidth
          label={t("message.form.email")}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          size="small"
          disabled={loading}
        />
        <TextField
          fullWidth
          label={t("message.form.message")}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          error={!!errors.message}
          helperText={errors.message}
          margin="normal"
          multiline
          rows={4}
          size="small"
          disabled={loading}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={sendMessage}
          disabled={loading}
          sx={{ mt: 2 }}
          disableElevation
        >
          {loading ? t("message.form.sending") : t("message.form.send")}
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MessageCard;
