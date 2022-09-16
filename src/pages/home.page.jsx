import {
    Box,
    Grid,
} from "@mui/material";

import {
    Person,
    BusinessCenter,
    Handyman,
    Email,
    Tag,
    Download,
} from "@mui/icons-material";

import { AppCard } from "../components/card.component";

import AboutMeCard from "../cards/about.card";
import MainCard from "../cards/main.card";

const mainCards = [
    {
        component: <AboutMeCard />,
        title: "About me",
        subtitle: "Read about this guy",
        icon: <Person sx={{ color: "white", fontSize: 30 }} />,
    },
    {
        component: <AboutMeCard />,
        title: "Experiences",
        subtitle: "Companies I worked",
        icon: <BusinessCenter sx={{ color: "white", fontSize: 30 }} />,
    },
    {
        component: <AboutMeCard />,
        title: "Skills",
        subtitle: "Technologies or stuff I can work with",
        icon: <Handyman sx={{ color: "white", fontSize: 30 }} />,
    },
];

const sideCards = [
    {
        component: <AboutMeCard />,
        title: "Send a message",
        subtitle: "Talk to me!",
        icon: <Email sx={{ color: "white", fontSize: 30 }} />,
    },
    {
        component: <AboutMeCard />,
        title: "Social media",
        subtitle: "Let's contact in social media",
        icon: <Tag sx={{ color: "white", fontSize: 30 }} />,
    },
    {
        component: <AboutMeCard />,
        title: "Download resume",
        subtitle: "Download my resume in PDF",
        icon: <Download sx={{ color: "white", fontSize: 30 }} />,
    },
];

const HomePage = () => {
    return (
        <Box sx={{ mx: 2, mt: 2 }}>
            <Grid
                spacing={2}
                container
            >
                <Grid
                    md={8}
                    item
                >
                    <MainCard />
                    {
                        mainCards.map((card) => (
                            <AppCard
                                title={card.title}
                                subtitle={card.subtitle}
                                icon={card.icon}
                            >
                                { card.component }
                            </AppCard>
                        ))
                    }
                </Grid>
                <Grid
                    md={4}
                    item
                >
                    {
                        sideCards.map((card) => (
                            <AppCard
                                title={card.title}
                                subtitle={card.subtitle}
                                icon={card.icon}
                            >
                                { card.component }
                            </AppCard>
                        ))
                    }
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;