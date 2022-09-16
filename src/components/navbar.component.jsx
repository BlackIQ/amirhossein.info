import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
} from "@mui/material";

const Navbar = () => {
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
                        sx={{
                            fontWeight: "bold"
                        }}
                    >
                        Hire me
                    </Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default Navbar;