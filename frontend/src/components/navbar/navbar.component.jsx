import {useState} from "react";
import {useRouter} from "next/router";
import {AppBar, Button, Container, IconButton, Toolbar, Typography, useMediaQuery} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useThemeContext} from "@/context/ThemeContext";
import Snackbar from "@/components/snackbar/snackbar.component";

const Navbar = () => {
    const router = useRouter();
    const {mode, toggleTheme} = useThemeContext();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage] = useState("Please use the message card to contact me");

    const handleHireMe = () => {
        setSnackOpen(true);
    };

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: "background.paper",
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography
                            variant={isMobile ? "h5" : "h4"}
                            fontWeight={700}
                            fontFamily="Caveat"
                            onClick={() => router.push("/")}
                            sx={{flexGrow: 1, cursor: "pointer", color: "primary.main"}}
                        >
                            Amirhossein
                        </Typography>

                        <IconButton onClick={toggleTheme} sx={{mr: 2}}>
                            {mode === "light" ? <DarkMode sx={{color: "primary.main"}}/> :
                                <LightMode sx={{color: "primary.main"}}/>}
                        </IconButton>

                        <Button
                            variant="contained"
                            onClick={handleHireMe}
                            size={isMobile ? "small" : "medium"}
                            disableElevation
                        >
                            Hire Me
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <Snackbar
                open={snackOpen}
                close={() => setSnackOpen(false)}
                message={snackMessage}
            />
        </>
    );
};

export default Navbar;