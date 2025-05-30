// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Grid, Container } from "@mui/material";
import {
  Person,
  Handyman,
  Email,
  Tag,
  Download,
  BusinessCenter,
} from "@mui/icons-material";
import { Snackbar, Card, Navbar } from "@/components";
import { AppLayout } from "@/layout";
import { API } from "@/api";

import AboutMeCard from "@/cards/about.card";
import ExperiencesCard from "@/cards/experiences.card";
import MainCard from "@/cards/main.card";
import SkillsCard from "@/cards/skills.card";
import MessageCard from "@/cards/message.card";
import ResumeCard from "@/cards/resume.card";
import SocialCard from "@/cards/social.card";

export default function Home({
  experiences,
  resumes,
  skillGroups,
  socials,
  error,
}) {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const mainCards = [
    {
      component: <AboutMeCard />,
      title: "About me",
      subtitle: "Read about this guy",
      icon: <Person sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <ExperiencesCard experiences={experiences} error={error} />,
      title: "Experiences",
      subtitle: "Companies I worked",
      icon: <BusinessCenter sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  const sideCards = [
    {
      component: <MessageCard />,
      title: "Send a message",
      subtitle: "Talk to me!",
      icon: <Email sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <SocialCard socials={socials} error={error} />,
      title: "Social media",
      subtitle: "Let's contact in social media",
      icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <SkillsCard skillGroups={skillGroups} error={error} />,
      title: "Skills",
      subtitle: "Technologies or stuff I can work with",
      icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <ResumeCard resumes={resumes} error={error} />,
      title: "Download resume",
      subtitle: "Download my resume in PDF",
      icon: <Download sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  useEffect(() => {
    setSnackMessage(error ? "Error fetching data" : "Welcome 🎉");
    setSnackOpen(true);
  }, [error]);

  return (
    <>
      <Head>
        <title>Amirhossein Mohammadi</title>
      </Head>

      <AppLayout>
        <Navbar sx={{ position: "sticky", top: 0, zIndex: 1100 }} />
        <Container maxWidth="lg" sx={{ my: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <MainCard />
              {mainCards.map(
                (card) =>
                  !card.hide && (
                    <Card.AppCard
                      key={card.title}
                      title={card.title}
                      subtitle={card.subtitle}
                      icon={card.icon}
                      sx={{ mb: 3 }}
                    >
                      {card.component}
                    </Card.AppCard>
                  )
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ position: "sticky", top: 80 }}>
                {sideCards.map(
                  (card) =>
                    !card.hide && (
                      <Card.AppCard
                        key={card.title}
                        title={card.title}
                        subtitle={card.subtitle}
                        icon={card.icon}
                        sx={{ mb: 3 }}
                      >
                        {card.component}
                      </Card.AppCard>
                    )
                )}
              </Box>
            </Grid>
          </Grid>
          <Snackbar
            open={snackOpen}
            close={() => setSnackOpen(false)}
            message={snackMessage}
          />
        </Container>
      </AppLayout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch all data in parallel
    const [experiencesRes, resumesRes, skillsRes, socialsRes] =
      await Promise.all([
        API.get("experiences"),
        API.get("resumes"),
        API.get("skills"),
        API.get("socials"),
      ]);

    return {
      props: {
        experiences: experiencesRes.data,
        resumes: resumesRes.data,
        skillGroups: skillsRes.data,
        socials: socialsRes.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        experiences: [],
        resumes: [],
        skillGroups: [],
        socials: [],
        error: "Error fetching data",
      },
    };
  }
}
