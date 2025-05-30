import { useState } from "react";
import { useRouter } from "next/router";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

import MakeSnackbar from "@/components/snackbar/snackbar.component";

const Navbar = () => {
  const router = useRouter();

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const hireMe = () => {
    setSnackMessage("Please use Social media card and send an Email 🙏🏻");
    setSnackOpen(true);
  };

  return (
    <Box>
      <AppBar elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h5"
              fontFamily="Boogaloo"
              onClick={() => router.push("/")}
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
              size="large"
              onClick={() => window.open("https://blog.amirhossein.info")}
              sx={{
                fontWeight: "bold",
              }}
            >
              Notes
            </Button>
            <Button
              color="inherit"
              variant="text"
              size="large"
              onClick={hireMe}
              sx={{
                fontWeight: "bold",
              }}
            >
              Hire me
            </Button>
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
