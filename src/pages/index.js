import { useState, useEffect } from "react";

import Head from "next/head";

import { Box, Grid, Toolbar } from "@mui/material";

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
import * as Cards from "@/cards";

export default function Home() {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const mainCards = [
    {
      component: <Cards.AboutMeCard />,
      title: "About me",
      subtitle: "Read about this guy",
      icon: <Person sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <Cards.ExperiencesCard />,
      title: "Experiences",
      subtitle: "Companies I worked",
      icon: <BusinessCenter sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  const sideCards = [
    {
      component: <Cards.MessageCard />,
      title: "Send a message",
      subtitle: "Talk to me!",
      icon: <Email sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <Cards.SocialCard />,
      title: "Social media",
      subtitle: "Let's contact in social media",
      icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      // component: <Cards.SkillsCard skills={data ? data.skills : []} />,
      title: "Skills",
      subtitle: "Technologies or stuff I can work with",
      icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <Cards.ResumeCard />,
      title: "Download resume",
      subtitle: "Download my resume in PDF",
      icon: <Download sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  useEffect(() => {
    setSnackMessage("Welcome 🎉");
    setSnackOpen(true);
  }, []);

  return (
    <>
      <Head>
        <title>Amirhossein Mohammadi</title>
      </Head>

      <AppLayout>
        <Navbar />

        <Box sx={{ mx: 2, mt: 2 }}>
          <Toolbar />
          <Grid spacing={2} container>
            <Grid md={8} width="100%" item>
              <Cards.MainCard />
              {mainCards.map(
                (card) =>
                  !card.hide && (
                    <Card.AppCard
                      key={card.title}
                      title={card.title}
                      subtitle={card.subtitle}
                      icon={card.icon}
                    >
                      {card.component}
                    </Card.AppCard>
                  )
              )}
            </Grid>
            <Grid md={4} width="100%" item>
              {sideCards.map(
                (card) =>
                  !card.hide && (
                    <Card.AppCard
                      key={card.title}
                      title={card.title}
                      subtitle={card.subtitle}
                      icon={card.icon}
                    >
                      {card.component}
                    </Card.AppCard>
                  )
              )}
            </Grid>
          </Grid>

          <Snackbar
            open={snackOpen}
            close={() => setSnackOpen(false)}
            message={snackMessage}
          />
        </Box>
      </AppLayout>
    </>
  );
}
