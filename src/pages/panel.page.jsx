import { useState, useEffect } from "react";

import {
    Box,
    Grid,
    Typography,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    CircularProgress,
} from "@mui/material";

import MakeSnackbar from "../components/snackbar.component";

import Axios from "axios";

const env = process.env;
const baseUrl = env.REACT_APP_API_URL;

const PanelPage = () => {
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const [messages, setMessages] = useState("");
    const [views, setViews] = useState("");

    useEffect(() => {
        Axios.get(`${baseUrl}/message`)
            .then((result) => {
                const { messages } = result.data;
                setMessages(messages.reverse());
            })
            .catch((error) => {
                console.log(error.response.data.error);
            });

        Axios.get(`${baseUrl}/view`)
            .then((result) => {
                const { views } = result.data;
                setViews(views.reverse());
            })
            .catch((error) => {
                console.log(error.response.data.error);
            });
    }, []);

    return (
        <Box sx={{ mx: 2, mt: 2 }}>
            <Toolbar />
            <Grid
                spacing={2}
                container
            >
                <Grid
                    md={6}
                    item
                >
                    <Card variant="outlined">
                        <CardHeader
                            title="Messages"
                        />
                        <CardContent>
                            {
                                messages !== ""
                                ?
                                <List>
                                    {
                                        messages.map((message) => (
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText
                                                        primary={`${message.message.slice(0, 10)} ....`}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                                :
                                <CircularProgress />
                            }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    md={6}
                    item
                >
                    <Card variant="outlined">
                        <CardHeader
                            title="Views"
                        />
                        <CardContent>
                            {
                                views !== ""
                                ?
                                <Typography>
                                    Total views: { views.length }
                                </Typography>
                                :
                                <CircularProgress />
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <MakeSnackbar
                open={snackOpen}
                close={() => setSnackOpen(false)}
                message={snackMessage}
            />
        </Box>
    );
}

export default PanelPage;