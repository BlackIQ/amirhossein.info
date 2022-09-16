import {
    Grid,
    Box,
    Typography,
} from "@mui/material";

const skills = [
    {
        title: "Front-End Development",
        items: [
            "ReactJs",
            "ReduxJs",
            "MUI",
            "SASS",
        ],
    },
    {
        title: "Back-End Development",
        items: [
            "ExpresJs",
            "NodeJs",
            "Laravel",
            "Restful API",
            "Ruby on Rails",
        ],
    },
    {
        title: "Mobile Development",
        items: [
            "Flutter",
            "React Native",
            "Material UI",
            "Swift UI",
        ],
    },
    {
        title: "Database",
        items: [
            "MongoDB",
            "MariaDB",
            "Firestore",
            "PostgreSQL",
            "LowDB",
        ],
    },
    {
        title: "Languages",
        items: [
            "JavaScript",
            "Php",
            "Dart",
            "Python",
            "Ruby",
        ],
    }
];

const SkillsCard = () => {
    return (
        skills.map((skill) => (
            <Box
                sx={{
                    mb: 2,
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary.main"
                    gutterBottom
                >
                    { skill.title }
                </Typography>
                <Grid
                    spacing={2}
                    container
                >
                    {
                        skill.items.map((item) => (
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
                                        { item }
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        ))
    );
}

export default SkillsCard;