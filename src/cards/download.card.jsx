import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Typography,
} from "@mui/material";

import ReactCountryFlag from "react-country-flag"

const resumes = [
    {
        flag: <ReactCountryFlag countryCode="US" />,
        language: "English",
        path: "https://amirhossein.info/cv/en",
    },
    {
        flag: <ReactCountryFlag countryCode="DE" />,
        language: "Dutch",
        path: "https://amirhossein.info/cv/de",
    },
    {
        flag: <ReactCountryFlag countryCode="IR" />,
        language: "Persian",
        path: "https://amirhossein.info/cv/fa",
    },
];

const DownloadCard = () => {
    return (
        <Box>
            <Typography
                variant="body1"
                gutterButton
            >
                You can download my resume in English, Dutch and Persian.
            </Typography>
            <List>
                {
                    resumes.map((resume) => (
                        <ListItem key={resume.language} disablePadding divider>
                            <ListItemButton onClick={() => window.location.replace(resume.path)}>
                                <ListItemIcon sx={{ color: "primary.main" }}>
                                    { resume.flag }
                                </ListItemIcon>
                                <ListItemText primary={resume.language} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}

export default DownloadCard;