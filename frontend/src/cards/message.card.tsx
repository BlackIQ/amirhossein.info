"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useLanguage } from "@/context/language.context";
import { API } from "@/api";
import { Message } from "@/types/message.type";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const MessageCard = () => {
  const { t } = useLanguage();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<Message>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("message.validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("message.validation.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("message.validation.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("message.validation.messageRequired");
    }

    return newErrors;
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setStatus("idle");
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      await API.post("messages", formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
      setStatus("success");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="site-section">
      <h2 className="section-heading">Contact</h2>

      <p>{t("message.description")}</p>

      <form className="contact-form" onSubmit={sendMessage}>
        <div className="form-field">
          <label htmlFor="name">{t("message.form.name")}</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            disabled={loading}
          />

          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">{t("message.form.email")}</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
          />

          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="message">{t("message.form.message")}</label>

          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            disabled={loading}
          />

          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>

        <button className="form-submit" type="submit" disabled={loading}>
          {loading ? t("message.form.sending") : t("message.form.send")}
        </button>

        {status === "success" && (
          <p className="form-success">{t("message.success")}</p>
        )}

        {status === "error" && (
          <p className="form-error">{t("message.error")}</p>
        )}
      </form>
    </section>
  );
};

export default MessageCard;
