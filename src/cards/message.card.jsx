import { useState } from "react";

import {
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import MakeSnackbar from "../components/snackbar.component";

const MessageCard = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const sendMessage = () => {
        const sent = false;

        if (sent) {
            setSnackMessage("Message sent! Thanks for your message 👍🏻");
            setSnackOpen(true);
        } else {
            setSnackMessage("Sorry there is an error occurred. Can you ty again!? 😢");
            setSnackOpen(true);
        }
    }

    return (
        <Box>
            <Typography
                variant="body1"
                sx={{
                    mb: 1,
                }}
                gutterButton
            >
                If you want to contact directly, you can send a message here.
            </Typography>
            <Box>
                <TextField
                    variant="outlined"
                    color="primary"
                    label="Name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        mb: 2,
                    }}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    color="primary"
                    label="Message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                        mb: 2,
                    }}
                    rows={5}
                    multiline
                    fullWidth
                />
                <Button
                    variant="contained"
                    size="large"
                    onClick={sendMessage}
                    sx={{
                        fontWeight: "bold",
                    }}
                    disableElevation
                    fullWidth
                >
                    Send message
                </Button>
            </Box>

            <MakeSnackbar
                open={snackOpen}
                close={() => setSnackOpen(false)}
                message={snackMessage}
            />
        </Box>
    );
}

export default MessageCard;