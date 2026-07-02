"use client";

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
import { useTheme } from "@/context/theme.context";

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { mode, toggleTheme } = useTheme();

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
                fontFamily: "Caveat",
                fontWeight: 700,
              }}
            >
              Be the best you can be
            </Typography>

            <IconButton onClick={toggleTheme} sx={{ mr: 2 }}>
              {mode === "dark" ? (
                <LightMode sx={{ color: "primary.main" }} />
              ) : (
                <DarkMode sx={{ color: "primary.main" }} />
              )}
            </IconButton>

            <Button
              variant="contained"
              // onClick={() => router.push("/")}
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
