"use client";

// import { useState } from "react";
// import { useRouter } from "next/router";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
// import { useThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  // const router = useRouter();
  // const { mode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mode = useMediaQuery((theme) => theme.palette.mode);

  console.log(`Theme is: ${mode}`);

  // const [snackOpen, setSnackOpen] = useState(false);
  // const [snackMessage] = useState("Please use the message card to contact me");

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(15, 23, 42, 0.85)"
              : "rgba(248, 250, 252, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          boxShadow: "none",
          // position: "sticky",
          // top: 0,
          // zIndex: 1100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              onClick={() => {}}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                color: "primary.main",
                // fontFamily: "Caveat",
                // fontWeight: 700,
              }}
            >
              Be the best you can be
            </Typography>

            <IconButton onClick={() => {}} sx={{ mr: 2 }}>
              {mode ? (
                <DarkMode sx={{ color: "primary.main" }} />
              ) : (
                <LightMode sx={{ color: "primary.main" }} />
              )}
            </IconButton>

            <Button
              variant="contained"
              onClick={() => {}}
              size={isMobile ? "small" : "medium"}
              disableElevation
              sx={{ ml: 2 }}
            >
              Hire Me
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
