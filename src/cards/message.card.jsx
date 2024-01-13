import { useState } from "react";

import { Box, Typography } from "@mui/material";

import { API } from "../api";
import { Snackbar, Forms } from "../components";

const MessageCard = () => {
  const [loading, setLoading] = useState(false);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const sendMessage = async (data) => {
    setLoading(true);

    try {
      const response = await API.post("messages", data);

      setSnackMessage(response.data.message);
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
        <Forms
          name="message"
          button={loading ? "Wait" : "Send message"}
          btnStyle={{ fullWidth: true, disabled: loading }}
          callback={sendMessage}
          def={{}}
        />
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
