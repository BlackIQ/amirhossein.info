import { useState } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
  // IconButton,
} from "@mui/material";
// import { DarkMode, LightMode } from "@mui/icons-material";
import MakeSnackbar from "@/components/snackbar/snackbar.component";

const Navbar = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        elevation={2}
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? "white"
              : theme.palette.background.paper, // Use paper (#1e1e1e) in dark mode
          color: "primary.main", // Theme-aware primary color (blue[700] or blue[400])
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 2px 4px rgba(0,0,0,0.1)"
              : "0 2px 4px rgba(0,0,0,0.3)", // Stronger shadow in dark mode
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
                color: "primary.main", // Theme-aware primary color
                "&:hover": { opacity: 0.8 },
              }}
            >
              Amirhossein
            </Typography>
            {/* <IconButton
              sx={{ borderRadius: 1, mr: 1 }}
              size={isMobile ? "small" : "medium"}
            >
              <LightMode color="primary" />
            </IconButton> */}
            <Button
              color="primary"
              variant="contained"
              size={isMobile ? "small" : "large"}
              onClick={handleHireMe}
              sx={{
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "primary.dark",
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
