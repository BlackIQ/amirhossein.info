import { useState, useEffect } from "react";

import { Box, Grid, Toolbar } from "@mui/material";

import {
  Person,
  BusinessCenter,
  Handyman,
  Email,
  Tag,
  Download,
} from "@mui/icons-material";

import { Snackbar, Card } from "../../components";

import ExperiencesCard from "../../cards/experiences.card";
import DownloadCard from "../../cards/download.card";
import MessageCard from "../../cards/message.card";
import AboutMeCard from "../../cards/about.card";
import SkillsCard from "../../cards/skills.card";
import SocialCard from "../../cards/social.card";
import MainCard from "../../cards/main.card";

const mainCards = [
  {
    component: <AboutMeCard />,
    title: "About me",
    subtitle: "Read about this guy",
    icon: <Person sx={{ color: "white", fontSize: 30 }} />,
  },
  {
    component: <ExperiencesCard />,
    title: "Experiences",
    subtitle: "Companies I worked",
    icon: <BusinessCenter sx={{ color: "white", fontSize: 30 }} />,
  },
  {
    component: <SkillsCard />,
    title: "Skills",
    subtitle: "Technologies or stuff I can work with",
    icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
  },
];

const sideCards = [
  {
    component: <MessageCard />,
    title: "Send a message",
    subtitle: "Talk to me!",
    icon: <Email sx={{ color: "white", fontSize: 30 }} />,
  },
  {
    component: <SocialCard />,
    title: "Social media",
    subtitle: "Let's contact in social media",
    icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
  },
  {
    component: <DownloadCard />,
    title: "Download resume",
    subtitle: "Download my resume in PDF",
    icon: <Download sx={{ color: "white", fontSize: 30 }} />,
  },
];

const HomePage = () => {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  useEffect(() => {
    setSnackMessage("Welcome 🎉");
    setSnackOpen(true);
  }, []);

  return (
    <Box sx={{ mx: 2, mt: 2 }}>
      <Toolbar />
      <Grid spacing={2} container>
        <Grid md={8} item>
          <MainCard />
          {mainCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
            >
              {card.component}
            </Card>
          ))}
        </Grid>
        <Grid md={4} item>
          {sideCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
            >
              {card.component}
            </Card>
          ))}
        </Grid>
      </Grid>

      <Snackbar
        open={snackOpen}
        close={() => setSnackOpen(false)}
        message={snackMessage}
      />
    </Box>
  );
};

export default HomePage;