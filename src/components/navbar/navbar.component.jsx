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

import { unsetSession } from "../../redux/session/action";
import { unsetUserToken } from "../../redux/user/action";
import { setTheme } from "../../redux/theme/action";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  const mode = useSelector((state) => state.theme);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const logout = () => {
    dispatch(unsetSession());
    dispatch(unsetUserToken());
  };

  const changeTheme = () => {
    dispatch(setTheme(mode === "light" ? "dark" : "light"));
  };

  const login = () => history.push("/authentication");

  const hireMe = () => {
    setSnackMessage("Please leave a message in the send message form 🙏🏻");
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
              onClick={hireMe}
              sx={{
                fontWeight: "bold",
              }}
            >
              Hire me
            </Button>
            <Button
              color="inherit"
              variant="text"
              onClick={() => (session ? logout() : login())}
              sx={{
                fontWeight: "bold",
              }}
            >
              {session ? "Logout" : "Login"}
            </Button>
            {session && (
              <Button
                color="inherit"
                variant="text"
                onClick={() => history.push("/panel")}
                sx={{
                  fontWeight: "bold",
                }}
              >
                Panel
              </Button>
            )}
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
