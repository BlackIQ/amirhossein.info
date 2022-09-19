import { useState } from "react";

import {
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";

const MessageCard = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(name, message);
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
            <form onSubmit={sendMessage}>
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
            </form>
        </Box>
    );
}

export default MessageCard;