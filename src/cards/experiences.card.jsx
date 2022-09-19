import {
    Box,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

const experiences = [
    {
        company: {
            name: "SBB Iran",
            location: "Iran, Tehran",
            range: "Nov 2021, Aug 2022",
        },
        jobs: [
            "Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality.",
            "Developed software for both desktop and mobile operating systems.",
            "Collaborated on stages of systems development lifecycle from requirement gathering to production releases.",
            "Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.",
        ],
        skills: [
            "Php", "Laravel", "Flutter",
        ],
    }
];

const ExperiencesCard = () => {
    return (
        <Box>
            {
                experiences.map((experience) => (
                    <Grid
                        spacing={2}
                        container
                        key={experience.company.name}
                    >
                        <Grid
                            md={3}
                            item
                        >
                            <Box sx={{ p: 1 }}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    {experience.company.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    {experience.company.location}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    {experience.company.range}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            md={9}
                            item
                        >
                            <Box>
                                <List>
                                    {
                                        experience.jobs.map((job) => (
                                            <ListItem disablePadding>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="body1">
                                                            { job }
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                                <br />
                                <Grid
                                    spacing={2}
                                    container
                                >
                                    {
                                        experience.skills.map((skill) => (
                                            <Grid item>
                                                <Box
                                                    sx={{
                                                        bgcolor: "primary.main",
                                                        p: 1,
                                                        borderRadius: 2,
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        fontWeight="bold"
                                                        sx={{
                                                            color: "white"
                                                        }}
                                                    >
                                                        { skill }
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                ))
            }
        </Box>
    );
}

export default ExperiencesCard;