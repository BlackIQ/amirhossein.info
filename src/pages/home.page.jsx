import {
    Box,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import {
    Person,
    BusinessCenter,
    Handyman,
    Email,
    Tag,
    Download,
    Work,
    Public,
    Cake,
    Apartment,
} from "@mui/icons-material";

import { AppCard, AboutCard } from "../components/card.component";

const aboutItems = [
    {
        text: "Software developer",
        icon: <Work />
    },
    {
        text: "SBB Iran",
        icon: <Apartment />
    },
    {
        text: "Iran, Tehran",
        icon: <Public />
    },
    {
        text: "Nov 20, 2003",
        icon: <Cake />
    }
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
                    <AboutCard>
                        <Grid
                            spacing={2}
                            container
                            sx={{
                                p: 0,
                                m: 0,
                            }}
                        >
                            <Grid
                                md={3}
                                item
                            >
                                <Box
                                    src="https://avatars.githubusercontent.com/u/55284339?v=4"
                                    alt="Profile photo"
                                    component="img"
                                    sx={{
                                        width: "100%",
                                        borderRadius: 50,
                                        p: 0,
                                        m: 0,
                                    }}
                                />
                            </Grid>
                            <Grid
                                md={9}
                                item
                            >
                                <Box sx={{ pl: 2 }}>
                                    <Typography
                                        variant="h2"
                                        fontFamily="Meow Script"
                                    >
                                        hello
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        fontFamily="Boogaloo"
                                        gutterBottom
                                    >
                                        I'm Amirhossein Mohammadi
                                    </Typography>
                                    <List>
                                        {
                                            aboutItems.map((item) => (
                                                <ListItem key={item} disablePadding>
                                                    <ListItemIcon
                                                        sx={{
                                                            color: "primary.main",
                                                        }}
                                                    >
                                                        { item.icon }
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.text}
                                                    />
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    </AboutCard>
                    
                    <AppCard
                        title="About me"
                        subtitle="Read about thi guy"
                        icon={<Person sx={{ color: "white", fontSize: 30 }} />}
                    >
                        <Typography>
                            Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce exceptional final products.
                        </Typography>
                    </AppCard>

                    <AppCard
                        title="Experiences"
                        subtitle="Companies I worked"
                        icon={<BusinessCenter sx={{ color: "white", fontSize: 30 }} />}
                    >
                        <Typography>
                            Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce exceptional final products.
                        </Typography>
                    </AppCard>
                    
                    <AppCard
                        title="Skills"
                        subtitle="Technologies or stuff I can work with"
                        icon={<Handyman sx={{ color: "white", fontSize: 30 }} />}
                    >
                        <Typography>
                            Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce exceptional final products.
                        </Typography>
                    </AppCard>
                </Grid>
                <Grid
                    md={4}
                    item
                >
                    <AppCard
                        title="Send a message"
                        subtitle="Talk to me!"
                        icon={<Email sx={{ color: "white", fontSize: 30 }} />}
                    >
                        <Typography>
                            Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce exceptional final products.
                        </Typography>
                    </AppCard>

                    <AppCard
                        title="Social media"
                        subtitle="Let's contact in social media"
                        icon={<Tag sx={{ color: "white", fontSize: 30 }} />}
                    >
                        <Typography>
                            Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce exceptional final products.
                        </Typography>
                    </AppCard>
                    
                    <AppCard
                        title="Download resume"
                        subtitle="Download my resume in PDF"
                        icon={<Download sx={{ color: "white", fontSize: 30 }} />}
                    >
                        <Typography>
                            Software Developer talented at translating customer requirements into testable engineering plans. Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce exceptional final products.
                        </Typography>
                    </AppCard>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;