// src/components/navbar/navbar.component.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import MakeSnackbar from "@/components/snackbar/snackbar.component";
import { useThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const router = useRouter();
  const { mode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleHireMe = () => {
    setSnackMessage("Please use the Social Media card to send an email 🙏");
    setSnackOpen(true);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          color: "primary.main",
          borderBottom: (theme) => `1px solid ${theme.palette.neonGlow.main}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              fontWeight={600}
              onClick={() => router.push("/")}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                color: "primary.main",
                "&:hover": { opacity: 0.8 },
              }}
            >
              Amirhossein
            </Typography>
            <IconButton
              onClick={toggleTheme}
              sx={{ borderRadius: 1, mr: 1 }}
              size={isMobile ? "small" : "medium"}
            >
              {mode === "light" ? (
                <DarkMode color="primary" />
              ) : (
                <LightMode color="secondary" />
              )}
            </IconButton>
            <Button
              color="primary"
              variant="contained"
              size={isMobile ? "small" : "large"}
              onClick={handleHireMe}
              sx={{
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "primary.dark",
                  boxShadow: (theme) =>
                    `0 0 12px ${theme.palette.neonGlow.intense}`,
                },
              }}
            >
              Hire Me
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <MakeSnackbar
        open={snackOpen}
        close={() => setSnackOpen(false)}
        message={snackMessage}
      />
    </>
  );
};

export default Navbar;
