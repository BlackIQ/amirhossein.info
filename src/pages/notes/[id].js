import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Box, Container, Toolbar, Typography, Divider } from "@mui/material";

import { AppLayout } from "@/layout";

import { API } from "@/api";

import Head from "next/head";
import { Navbar } from "@/components";

export const getServerSidePaths = async () => {
  const paths = [];

  try {
    const data = await API.get("notes");

    data.data.map((dt) => paths.push({ params: { id: dt._id } }));
  } catch (error) {}

  return {
    paths,
    fallback: false,
  };
};

export const getServerSideProps = async ({ params }) => {
  try {
    const note = await API.get(`notes/${params.id}`);

    return {
      props: {
        data: note.data,
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

export default function Notes({ data }) {
  const getDateInFormat = (ts) => {
    const d = new Date(ts);

    return `${d.getFullYear()}/${d.getMonth()}/${d.getDay()} ${d.getHours()}:${d.getMinutes()}`;
  };

  if (error) {
    return (
      <Box>
        <Typography>{error.message}</Typography>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <AppLayout>
        <Navbar />
        <Toolbar />
        <Container sx={{ py: 3 }}>
          <Box className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data.content}
            </ReactMarkdown>
          </Box>

          <Divider sx={{ borderColor: "primary", my: 4 }}>
            Thanks for reading 🙏
          </Divider>

          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              border: "solid 1px",
              borderColor: "primary.main",
            }}
          >
            <Typography variant="body1" gutterBottom>
              In this note you read about <b>{data.details}</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Posted at {getDateInFormat(data.createdAt)}
            </Typography>

            <br />

            <Typography variant="body1">Amirhossein Mohammadi</Typography>
          </Box>

          {/* <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontFamily="Boogaloo">
              Let's take some notes!
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
                    Posted at: {new Date(note.createdAt).getFullYear()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" disabled={note.private}>
                    Read
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Masonry> */}
        </Container>
      </AppLayout>
    </>
  );
}
