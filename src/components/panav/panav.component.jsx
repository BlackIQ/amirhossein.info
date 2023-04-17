import { useState } from "react";
import { useRouter } from "next/router";
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

import { LightMode, DarkMode, GitHub } from "@mui/icons-material";

import MakeSnackbar from "@/components/snackbar/snackbar.component";

import { setTheme } from "@/redux/actions/theme";

const Panav = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const changeTheme = () => {
    dispatch(setTheme(mode === "light" ? "dark" : "light"));
  };

  const pages = [
    {
      path: "/panel/socials",
      label: "Socials",
    },
    {
      path: "/panel/duties",
      label: "Duties",
    },
    {
      path: "/panel/messages",
      label: "Messages",
    },
    {
      path: "/panel/resumes",
      label: "Resumes",
    },
    {
      path: "/panel/skills",
      label: "Skills",
    },
  ];

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
              onClick={() => router.push("/panel")}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              amirhossein Panel
            </Typography>
            {pages.map((page) => (
              <Button
                color="inherit"
                key={page.label}
                variant="text"
                size="large"
                onClick={() => router.push(page.path)}
                sx={{
                  fontWeight: "bold",
                }}
              >
                {page.label}
              </Button>
            ))}
            <IconButton
              color="inherit"
              onClick={() =>
                window.open("https://github.com/BlackIQ/amirhossein.info")
              }
            >
              <GitHub />
            </IconButton>
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

export default Panav;
