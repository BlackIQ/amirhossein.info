import { useState } from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
} from "@mui/material";

import MakeSnackbar from "./snackbar.component";

const Navbar = () => {
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const hireMe = () => {
        setSnackMessage("Please leave a message in the send message form 🙏🏻");
        setSnackOpen(true);
    }

    return (
        <Box>
            <AppBar elevation={0} sx={{ px: 10 }}>
                <Toolbar>
                    <Typography
                        variant="h5"
                        fontFamily="Boogaloo"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        amirhossein
                    </Typography>
                    <Button
                        color="inherit"
                        variant="text"
                        onClick={hireMe}
                        sx={{
                            fontWeight: "bold"
                        }}
                    >
                        Hire me
                    </Button>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <MakeSnackbar
                open={snackOpen}
                close={() => setSnackOpen(false)}
                message={snackMessage}
            />
        </Box>
    );
}

export default Navbar;