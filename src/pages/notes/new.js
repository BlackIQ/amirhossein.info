import { Container, Grid, Toolbar, CardContent, Card } from "@mui/material";

import ReactMarkdown from "react-markdown";

import Head from "next/head";
import { useRouter } from "next/router";

import { API } from "@/api";
import { Forms, Navbar } from "@/components";

import { useState } from "react";
import { AppLayout } from "@/layout";

const New = () => {
  const history = useRouter();

  const [content, setContent] = useState("");

  const addBlog = async (callback) => {
    try {
      const { data } = await API.post("notes", callback);

      history.push(`/notes/${data._id}`);
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
        <Navbar />
        <Container maxWidth="xl">
          <Toolbar />
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
                sx={{ mt: "1rem", border: "none", borderRadius: 5 }}
              >
                <CardContent>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AppLayout>
    </>
  );
};

export default New;
