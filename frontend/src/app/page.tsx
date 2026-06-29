import Head from "next/head";
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
import Navbar from "@/components/navbar/navbar.component";

import AboutMeCard from "@/cards/about.card";
import ExperiencesCard from "@/cards/experiences.card";
import MainCard from "@/cards/main.card";
import SkillsCard from "@/cards/skills.card";
import MessageCard from "@/cards/message.card";
import ResumeCard from "@/cards/resume.card";
import SocialCard from "@/cards/social.card";

export default function Home() {
  const mainCards = [
    {
      component: <AboutMeCard />,
      title: "About Me",
      subtitle: "A bit about who I am",
      icon: <Person sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <ExperiencesCard />,
      title: "Experiences",
      subtitle: "My professional journey",
      icon: <BusinessCenter sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  const sideCards = [
    {
      component: <MessageCard />,
      title: "Send a Message",
      subtitle: "Get in touch!",
      icon: <Email sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <SkillsCard />,
      title: "Skills",
      subtitle: "Technologies I work with",
      icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <SocialCard />,
      title: "Social Media",
      subtitle: "Connect with me online",
      icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <ResumeCard />,
      title: "Download Resume",
      subtitle: "Grab my resume in PDF",
      icon: <Download sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Amirhossein Mohammadi</title>
        <meta
          name="description"
          content="Personal portfolio of Amirhossein Mohammadi"
        />
      </Head>
      <Box>
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{ my: 4, position: "relative", zIndex: 1 }}
        >
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
    </>
  );
}
