import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

import { setSession } from "../../redux/session/action";
import { setUserToken } from "../../redux/user/action";

import { Snackbar } from "../../components";
import { AuthServices } from "../../services";

const AuthenticationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  if (session) history.push("/panel");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const authenticationUser = async () => {
    setLoading(true);
    setError(false);

    const sendingData = {
      username,
      password,
    };

    try {
      const data = await AuthServices.login(sendingData);

      if (data.id) {
        const { id } = data;

        setUsername("");
        setPassword("");

        dispatch(setSession());
        dispatch(setUserToken(id));

        setSnackMessage("Welcome Amir 👍🏻");
        setSnackOpen(true);
      } else {
        setError(true);
        setLoading(false);

        setSnackMessage(`${data.response.data.error} 😢`);
        setSnackOpen(true);
      }

      console.log(data.id ? true : data.response.status);
    } catch (error) {
      // setLoading(false);
      // setError(true);
      // setSnackMessage(`${error} 😢`);
      // setSnackOpen(true);
    }
  };

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
          <CardHeader title="Welcome back Amir!" />
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

      <Snackbar
        open={snackOpen}
        close={() => setSnackOpen(false)}
        message={snackMessage}
      />
    </Box>
  );
};

export default AuthenticationPage;
