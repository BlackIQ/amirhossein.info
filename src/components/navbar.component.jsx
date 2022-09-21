import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
} from "@mui/material";

import MakeSnackbar from "./snackbar.component";

import { unsetSession } from "../redux/session/action";
import { unsetUserToken } from "../redux/user/action";

const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const session = useSelector(state => state.session);

    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const logout = () => {
        dispatch(unsetSession());
        dispatch(unsetUserToken());
    }

    const login = () => history.push("/authentication");

    const hireMe = () => {
        setSnackMessage("Please leave a message in the send message form 🙏🏻");
        setSnackOpen(true);
    }

    return (
        <Box>
            <AppBar elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h5"
                            fontFamily="Boogaloo"
                            onClick={() => history.push("/")}
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
                            onClick={hireMe}
                            sx={{
                                fontWeight: "bold"
                            }}
                        >
                            Hire me
                        </Button>
                        <Button
                            color="inherit"
                            variant="text"
                            onClick={() => session ? logout() : login()}
                            sx={{
                                fontWeight: "bold"
                            }}
                        >
                            { session ? "Logout" : "Login" }
                        </Button>
                        {
                            session
                            &&
                            <Button
                                color="inherit"
                                variant="text"
                                onClick={() => history.push("/panel")}
                                sx={{
                                    fontWeight: "bold"
                                }}
                            >
                                Panel
                            </Button>
                        }
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
}

export default Navbar;