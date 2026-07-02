"use client";

// MUI Components
import { Typography } from "@mui/material";
import { useLanguage } from "@/context/language.context";

// About Card
const AboutMeCard = () => {
  const { t } = useLanguage();

  return (
    <Typography variant="body1" color="text.primary">
      {t("about.bio")}
    </Typography>
  );
};

export default AboutMeCard;
