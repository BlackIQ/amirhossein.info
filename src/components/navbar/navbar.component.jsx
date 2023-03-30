import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
} from "@mui/material";

import { LightMode, DarkMode } from "@mui/icons-material";

import MakeSnackbar from "../snackbar/snackbar.component";

import { setTheme } from "../../redux/theme/action";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const changeTheme = () => {
    dispatch(setTheme(mode === "light" ? "dark" : "light"));
  };

  const hireMe = () => {
    setSnackMessage("Please use Social media card and send an Email 🙏🏻");
    setSnackOpen(true);
  };

  const modeIcons = {
    light: {
      icon: <DarkMode />,
    },
    dark: {
      icon: <LightMode />,
    },
  };

  return (
    <Box>
      <AppBar elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h5"
              fontFamily="Boogaloo"
              onClick={() => history.push("/")}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              amirhossein
            </Typography>
            <Button
              color="inherit"
              variant="text"
              onClick={() => window.open("https://api.amirhossein.info")}
              sx={{
                fontWeight: "bold",
              }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              variant="text"
              onClick={hireMe}
              sx={{
                fontWeight: "bold",
              }}
            >
              Hire me
            </Button>
            <IconButton color="inherit" onClick={changeTheme}>
              {modeIcons[mode].icon}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <MakeSnackbar
        open={snackOpen}
        close={() => setSnackOpen(false)}
        message={snackMessage}
      />
    </Box>
  );
};

export default Navbar;
