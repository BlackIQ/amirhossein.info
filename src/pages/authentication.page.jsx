import { useState, useEffect } from "react";

import {
    Box,
    Container,
    Card,
    CardHeader,
    CardContent,
    TextField,
    Button,
} from "@mui/material";

import MakeSnackbar from "../components/snackbar.component";

import Axios from "axios";

const env = process.env;
const baseUrl = env.REACT_APP_API_URL;

const AuthenticationPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const authenticationUser = () => {
        setLoading(true);
        setError(false);

        const sendingData = {
            username,
            password
        };

        Axios.post(`${baseUrl}/authentication/login`, sendingData)
            .then((result) => {
                setLoading(false);

                setUsername("");
                setPassword("");

                setSnackMessage("Welcome Amir 👍🏻");
                setSnackOpen(true);
            })
            .catch((error) => {
                const errorMessage = error.response.data.error;

                setLoading(false);
                setError(true);

                setSnackMessage(`${errorMessage} 😢`);
                setSnackOpen(true);
            });
    }

    useEffect(() => {
        setSnackMessage("Welcome 🎉");
        setSnackOpen(true);
    }, []);

    return (
        <Box>
            <Container
                maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Card variant="outlined">
                    <CardHeader
                        title="Welcome back Amir!"
                    />
                    <CardContent>
                        <TextField
                            variant="outlined"
                            color="primary"
                            label="Username"
                            placeholder="Your username"
                            value={username}
                            error={error}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{
                                mb: 2,
                            }}
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            color="primary"
                            label="Password"
                            placeholder="Your password"
                            type="password"
                            value={password}
                            error={error}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                mb: 2,
                            }}
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            size="large"
                            onClick={authenticationUser}
                            sx={{
                                fontWeight: "bold",
                            }}
                            disabled={loading}
                            disableElevation
                            fullWidth
                        >
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </Container>

            <MakeSnackbar
                open={snackOpen}
                close={() => setSnackOpen(false)}
                message={snackMessage}
            />
        </Box>
    );
}

export default AuthenticationPage;