import { useState } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DarkMode, LightMode, Translate } from "@mui/icons-material";
import { useThemeContext } from "@/context/ThemeContext";
import Snackbar from "@/components/snackbar/snackbar.component";

const Navbar = () => {
  const router = useRouter();
  const { mode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage] = useState("Please use the message card to contact me");

  // Language Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang) => {
    console.log(`Language selected: ${lang}`);
    handleLanguageClose();
  };

  const handleHireMe = () => {
    setSnackOpen(true);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(15, 23, 42, 0.85)" // Deep navy glass
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
              fontWeight={700}
              fontFamily="Caveat"
              onClick={() => router.push("/")}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                color: "primary.main",
              }}
            >
              Be the best you can be
            </Typography>

            {/* Language Selector */}
            <IconButton
              onClick={handleLanguageClick}
              sx={{ mr: 2 }}
              color="inherit"
            >
              <Translate sx={{ color: "primary.main" }} />
            </IconButton>

            {/* Theme Toggle */}
            <IconButton onClick={toggleTheme} sx={{ mr: 2 }}>
              {mode === "light" ? (
                <DarkMode sx={{ color: "primary.main" }} />
              ) : (
                <LightMode sx={{ color: "primary.main" }} />
              )}
            </IconButton>

            {/* <Button
                            variant="text"
                            size={isMobile ? "small" : "medium"}
                            onClick={() => router.push("/notes")}
                            disableElevation

                        >
                            Notes
                        </Button> */}
            <Button
              variant="contained"
              onClick={handleHireMe}
              size={isMobile ? "small" : "medium"}
              disableElevation
              sx={{ ml: 2 }}
            >
              Hire Me
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Language Menu - Enhanced */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleLanguageClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(30, 41, 59, 0.95)"
                : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 3,
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 20px 25px -5px rgb(0 0 0 / 0.5)"
                : "0 20px 25px -5px rgb(0 0 0 / 0.15)",
            minWidth: 180,
          },
          "& .MuiMenuItem-root": {
            py: 1.5,
            px: 3,
            fontSize: "1.02rem",
            "&:hover": {
              bgcolor: "action.hover",
            },
          },
        }}
      >
        <MenuItem onClick={() => handleLanguageSelect("en")}>
          🇬🇧 English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect("ru")}>
          🇷🇺 Русский
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect("de")}>
          🇩🇪 Deutsch
        </MenuItem>
      </Menu>

      <Snackbar
        open={snackOpen}
        close={() => setSnackOpen(false)}
        message={snackMessage}
      />
    </>
  );
};

export default Navbar;
