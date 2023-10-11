import { useState, useEffect } from "react";

import Head from "next/head";

import { Box, Grid, Toolbar } from "@mui/material";

import {
  Person,
  BusinessCenter,
  Handyman,
  Email,
  Tag,
  Download,
  Settings,
} from "@mui/icons-material";

import { Snackbar, Card, Navbar } from "@/components";
import { AppLayout } from "@/layout";
import * as Cards from "@/cards";
import { API } from "@/api";

export default function Home() {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [data, setData] = useState(null);

  const getData = async () => {
    const data = {};

    try {
      const resumes = await API.get("resumes");

      data["resumes"] = { data: resumes.data };
    } catch (error) {
      data["resumes"] = { error: error.response.data };
    }

    try {
      const skills = await API.get("skills");

      data["skills"] = { data: skills.data };
    } catch (error) {
      data["skills"] = { error: error.response.data };
    }

    try {
      const socials = await API.get("socials");

      data["socials"] = { data: socials.data };
    } catch (error) {
      data["socials"] = { error: error.response.data };
    }

    try {
      const experiences = await API.get("experiences");

      data["experiences"] = { data: experiences.data };
    } catch (error) {
      data["experiences"] = { error: error.response.data };
    }

    setData(data);
  };

  const mainCards = [
    {
      component: <Cards.AboutMeCard />,
      title: "About me",
      subtitle: "Read about this guy",
      icon: <Person sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: (
        <Cards.ExperiencesCard experiences={data ? data.experiences : []} />
      ),
      title: "Experiences",
      subtitle: "Companies I worked",
      icon: <BusinessCenter sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <Cards.APICard />,
      title: "API",
      subtitle: "Services and APIs introduction",
      icon: <Settings sx={{ color: "white", fontSize: 30 }} />,
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
      component: <Cards.SocialCard socials={data ? data.socials : []} />,
      title: "Social media",
      subtitle: "Let's contact in social media",
      icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <Cards.SkillsCard skills={data ? data.skills : []} />,
      title: "Skills",
      subtitle: "Technologies or stuff I can work with",
      icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
    {
      component: <Cards.ResumeCard resumes={data ? data.resumes : []} />,
      title: "Download resume",
      subtitle: "Download my resume in PDF",
      icon: <Download sx={{ color: "white", fontSize: 30 }} />,
      hide: false,
    },
  ];

  useEffect(() => {
    getData();
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
