import {useEffect, useState} from "react";
import Head from "next/head";
import {Box, Container, Grid} from "@mui/material";
import {BusinessCenter, Download, Email, Handyman, Person, Tag,} from "@mui/icons-material";
import {Card, Snackbar} from "@/components";
import {AppLayout} from "@/layout";
import {API} from "@/api";
import Navbar from "@/components/navbar/navbar.component";

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
            component: <AboutMeCard/>,
            title: "About Me",
            subtitle: "A bit about who I am",
            icon: <Person sx={{color: "white", fontSize: 30}}/>,
            hide: false,
        },
        {
            component: <ExperiencesCard experiences={experiences} error={error}/>,
            title: "Experiences",
            subtitle: "My professional journey",
            icon: <BusinessCenter sx={{color: "white", fontSize: 30}}/>,
            hide: false,
        },
    ];

    const sideCards = [
        {
            component: <MessageCard/>,
            title: "Send a Message",
            subtitle: "Get in touch!",
            icon: <Email sx={{color: "white", fontSize: 30}}/>,
            hide: false,
        },
        {
            component: <SocialCard socials={socials} error={error}/>,
            title: "Social Media",
            subtitle: "Connect with me online",
            icon: <Tag sx={{color: "white", fontSize: 30}}/>,
            hide: false,
        },
        {
            component: <SkillsCard skillGroups={skillGroups} error={error}/>,
            title: "Skills",
            subtitle: "Technologies I work with",
            icon: <Handyman sx={{color: "white", fontSize: 30}}/>,
            hide: false,
        },
        {
            component: <ResumeCard resumes={resumes} error={error}/>,
            title: "Download Resume",
            subtitle: "Grab my resume in PDF",
            icon: <Download sx={{color: "white", fontSize: 30}}/>,
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
                <meta
                    name="description"
                    content="Personal portfolio of Amirhossein Mohammadi"
                />
            </Head>
            <AppLayout>
                <Navbar sx={{position: "sticky", top: 0, zIndex: 1100}}/>
                <Container maxWidth="lg" sx={{my: 4, position: "relative", zIndex: 1}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <MainCard/>
                            <Box sx={{mb: 3}}/>
                            {mainCards.map(
                                (card) =>
                                    !card.hide && (
                                        <Card.AppCard
                                            key={card.title}
                                            title={card.title}
                                            subtitle={card.subtitle}
                                            icon={card.icon}
                                            sx={{mb: 3}}
                                            header={true}
                                        >
                                            {card.component}
                                        </Card.AppCard>
                                    )
                            )}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{position: "sticky", top: 80}}>
                                {sideCards.map(
                                    (card) =>
                                        !card.hide && (
                                            <Card.AppCard
                                                key={card.title}
                                                title={card.title}
                                                subtitle={card.subtitle}
                                                icon={card.icon}
                                                sx={{mb: 3}}
                                                header={true}
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
