"use client";

import { Box, Container, Grid } from "@mui/material";

import {
  BusinessCenter,
  Download,
  Email,
  Handyman,
  Person,
  Tag,
} from "@mui/icons-material";

import { AppCard } from "@/components/card/card.component";
import { useLanguage } from "@/context/language.context";

import AboutMeCard from "@/cards/about.card";
import ExperiencesCard from "@/cards/experiences.card";
import MainCard from "@/cards/main.card";
import SkillsCard from "@/cards/skills.card";
import MessageCard from "@/cards/message.card";
import ResumeCard from "@/cards/resume.card";
import SocialCard from "@/cards/social.card";

export const HomeContent = () => {
  const { t } = useLanguage();

  const mainCards = [
    {
      component: <AboutMeCard />,
      title: t("about.title"),
      subtitle: t("about.subtitle"),
      icon: <Person sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <ExperiencesCard />,
      title: t("experiences.title"),
      subtitle: t("experiences.subtitle"),
      icon: <BusinessCenter sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  const sideCards = [
    {
      component: <MessageCard />,
      title: t("message.title"),
      subtitle: t("message.subtitle"),
      icon: <Email sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <SkillsCard />,
      title: t("skills.title"),
      subtitle: t("skills.subtitle"),
      icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <SocialCard />,
      title: t("social.title"),
      subtitle: t("social.subtitle"),
      icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <ResumeCard />,
      title: t("resume.title"),
      subtitle: t("resume.subtitle"),
      icon: <Download sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg" sx={{ my: 4, position: "relative", zIndex: 1 }}>
        <Grid container spacing={3}>
          <Grid size={{ md: 8, xs: 12 }}>
            <MainCard />
            <Box sx={{ mb: 3 }} />
            {mainCards.map(
              (card) =>
                !card.hide && (
                  <AppCard
                    key={card.title}
                    title={card.title}
                    subtitle={card.subtitle}
                    icon={card.icon}
                    sx={{ mb: 3 }}
                    header={true}
                  >
                    {card.component}
                  </AppCard>
                ),
            )}
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Box sx={{ position: "sticky", top: 80 }}>
              {sideCards.map(
                (card) =>
                  !card.hide && (
                    <AppCard
                      key={card.title}
                      title={card.title}
                      subtitle={card.subtitle}
                      icon={card.icon}
                      sx={{ mb: 3 }}
                      header={true}
                    >
                      {card.component}
                    </AppCard>
                  ),
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
