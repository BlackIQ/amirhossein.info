import { useState, useEffect } from "react";

import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  CardMedia,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";

import { AppLayout } from "@/layout";

import { API } from "@/api";

import Head from "next/head";
import { Navbar } from "@/components";
import { Masonry } from "@mui/lab";

import { useRouter } from "next/navigation";

export const getServerSideProps = async () => {
  try {
    const notes = await API.get("notes");

    return {
      props: {
        data: notes.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: { message: error.response.data },
      },
    };
  }
};

export default function Notes({ data, error }) {
  const history = useRouter();

  function randNum() {
    return "auto";
    // return Math.floor(Math.random() * 60) + 100;
  }

  const [notes, setNotes] = useState(data);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    doFilter();
  }, [filter]);

  const doFilter = () => {
    const founds = data.filter((item) =>
      (item.title.toLowerCase() + item.details.toLowerCase()).includes(
        filter.toLowerCase()
      )
    );

    setNotes(founds);
  };

  const getDateInFormat = (ts) => {
    const d = new Date(ts);

    return `${d.getFullYear()}/${d.getMonth()}/${d.getDay()} ${d.getHours()}:${d.getMinutes()}`;
  };

  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>

      {error ? (
        <Box>
          <Typography>{error.message}</Typography>
        </Box>
      ) : (
        <AppLayout>
          <Navbar />
          <Toolbar />
          <Container sx={{ py: 3 }}>
            <Box
              sx={{
                display: "flex",
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" fontFamily="Boogaloo">
                Lets take some notes!
              </Typography>
              <TextField
                label="Search"
                variant="outlined"
                color="primary"
                placeholder="Search for what you are looking for"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Box>
            <br />
            <br />
            <Masonry columns={3} spacing={3}>
              {notes.map((note) => (
                <Card key={note._id} elevation={10}>
                  <CardMedia
                    component="img"
                    height={randNum()}
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {note.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {note.details}
                    </Typography>
                    <br />
                    <Typography variant="caption" color="text.secondary">
                      Posted at {getDateInFormat(note.createdAt)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => history.push(`/notes/${note._id}`)}
                      color="primary"
                      disabled={note.private}
                    >
                      Read
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Masonry>
          </Container>
        </AppLayout>
      )}
    </>
  );
}
