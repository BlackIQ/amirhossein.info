import { useState } from "react";

import { Box, Typography, TextField, Button } from "@mui/material";

import { API } from "../api";
import { Snackbar } from "../components";

const MessageCard = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const sendMessage = async () => {
    setLoading(true);
    setError(false);

    const sendingData = {
      name,
      message,
    };

    try {
      const data = await API.post("messages", sendingData);

      setSnackMessage(data.data.message);
      setSnackOpen(true);

      setLoading(false);
    } catch (error) {
      setSnackMessage(error.response.data.message);
      setSnackOpen(true);

      setLoading(false);
    }
  };

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
          error={error}
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
          error={error}
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
          disabled={loading}
          disableElevation
          fullWidth
        >
          Send message
        </Button>
      </Box>

      <Snackbar
        open={snackOpen}
        close={() => setSnackOpen(false)}
        message={snackMessage}
      />
    </Box>
  );
};

export default MessageCard;
