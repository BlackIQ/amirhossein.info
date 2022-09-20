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
    Work,
    Public,
    Cake,
    Apartment,
} from "@mui/icons-material";

import { AboutCard } from "../components/card.component";

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

const MainCard = () => {
    return (
        <AboutCard>
            <Grid
                spacing={2}
                container
                sx={{
                    p: 0,
                    m: 0,
                    height: "1000",
                }}
            >
                <Grid
                    md={4}
                    item
                >
                    <Box
                        sx={{
                            display: "flex",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            src="https://avatars.githubusercontent.com/u/55284339?v=4"
                            alt="Profile photo"
                            component="img"
                            sx={{
                                width: "90%",
                                borderRadius: 50,
                                
                            }}
                        />
                    </Box>
                </Grid>
                <Grid
                    md={8}
                    item
                >
                    <Box>
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
    );
}

export default MainCard;