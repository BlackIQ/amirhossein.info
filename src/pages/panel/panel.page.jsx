import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Box,
  Grid,
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

import { Snackbar } from "../../components";
import { MessageServices } from "../../services";

const PanelPage = () => {
  const history = useHistory();

  const session = useSelector((state) => state.session);
  if (!session) history.push("/authentication");

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [messages, setMessages] = useState("");

  const getData = async () => {
    try {
      const data = await MessageServices.readAll();
      setMessages(data.messages.reverse());
    } catch (error) {
      setSnackOpen(true);
      setSnackMessage(error.response.data.error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ mx: 2, mt: 2 }}>
      <Toolbar />
      <Grid spacing={2} container>
        <Grid md={6} item>
          <Card variant="outlined">
            <CardHeader title="Messages" />
            <CardContent>
              {messages !== "" ? (
                <List>
                  {messages.map((message) => (
                    <ListItem key={message._id} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={message.message} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <CircularProgress />
              )}
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid md={6} item>
          <Card variant="outlined">
            <CardHeader title="Views" />
            <CardContent>
              {views !== "" ? (
                <Typography>Total views: {views.length}</Typography>
              ) : (
                <CircularProgress />
              )}
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>

      <Snackbar
        open={snackOpen}
        close={() => setSnackOpen(false)}
        message={snackMessage}
      />
    </Box>
  );
};

export default PanelPage;
