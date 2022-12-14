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
import * as Cards from "../../cards";

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
    hide: true,
  },
  {
    component: <Cards.SocialCard />,
    title: "Social media",
    subtitle: "Let's contact in social media",
    icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
    hide: false,
  },
  {
    component: <Cards.SkillsCard />,
    title: "Skills",
    subtitle: "Technologies or stuff I can work with",
    icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
    hide: false,
  },
  {
    component: <Cards.DownloadCard />,
    title: "Download resume",
    subtitle: "Download my resume in PDF",
    icon: <Download sx={{ color: "white", fontSize: 30 }} />,
    hide: true,
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
        <Grid md={4} item>
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
  );
};

export default HomePage;
