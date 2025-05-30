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
} from "@mui/material";
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
          bgcolor: "white",
          color: "primary.main",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Subtle shadow like LinkedIn
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
            <Button
              color="primary"
              variant="text"
              size={isMobile ? "small" : "large"}
              onClick={() =>
                window.open("https://blog.amirhossein.info", "_blank")
              }
              sx={{
                fontWeight: 500,
                mx: 1,
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              Notes
            </Button>
            <Button
              color="primary"
              variant="contained"
              size={isMobile ? "small" : "large"}
              onClick={handleHireMe}
              sx={{
                fontWeight: 500,
                "&:hover": { bgcolor: "primary.dark" },
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
