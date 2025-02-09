import {
  Container,
  Grid,
  Toolbar,
  CardContent,
  Card,
  Box,
  Typography,
} from "@mui/material";

import ReactMarkdown from "react-markdown";

import Head from "next/head";
import { useRouter } from "next/router";

import { API } from "@/api";
import { Forms, Navbar } from "@/components";

import { useState } from "react";
import { AppLayout } from "@/layout";

const New = () => {
  const history = useRouter();

  const [session, setSession] = useState(false);
  const [content, setContent] = useState("");

  const addBlog = async (callback) => {
    try {
      const { data } = await API.post("notes", callback);

      history.push(`/notes/${data._id}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const login = async (callback) => {
    try {
      const { data } = await API.post("authentication/login", callback);

      const { token } = data;

      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setSession(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const changeToParse = (changed) => {
    setContent(changed);
  };

  return (
    <>
      <Head>
        <title>New note</title>
      </Head>

      <AppLayout>
        <Box sx={{ py: 3 }}>
          {session ? (
            <>
              <Navbar />
              <Toolbar />

              <Container maxWidth="xl">
                <Grid spacing={3} container>
                  <Grid md={6} item>
                    <Forms
                      name="newBlog"
                      button="Add note"
                      btnStyle={{ fullWidth: true, disabled: false }}
                      callback={addBlog}
                      def={{}}
                      change={changeToParse}
                    />
                  </Grid>
                  <Grid md={6} item>
                    <Card
                      variant="outlined"
                      sx={{
                        mt: "1rem",
                        border: "none",
                        borderRadius: 5,
                      }}
                    >
                      <CardContent>
                        <Box
                          className="markdown"
                          sx={{
                            height: "100vh",
                            overflow: "scroll",
                          }}
                        >
                          <ReactMarkdown>{content}</ReactMarkdown>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </>
          ) : (
            <Container maxWidth="xs">
              <Box
                sx={{
                  textAlign: "center",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backdropFilter: "blur(15px)",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    p: 4,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    color="primary.main"
                    fontWeight="500"
                    fontSize={30}
                    gutterBottom
                  >
                    Login
                  </Typography>
                  <Forms
                    name="login"
                    button="Login"
                    btnStyle={{ fullWidth: true, disabled: false }}
                    callback={login}
                    def={{}}
                  />
                </Box>
              </Box>
            </Container>
          )}
        </Box>
      </AppLayout>
    </>
  );
};

export default New;
