import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Chip, Container, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { AppLayout } from "@/layout";
import Navbar from "@/components/navbar/navbar.component";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import { API } from "@/api";
import { useEffect, useState } from "react";
import { Loading } from "../../components";

export default function NotePost() {
  const router = useRouter();
  const { id } = router.query;

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  };

  const getNote = async (id) => {
    try {
      const noteRes = await API.get(`notes/${id}`);

      setNote(noteRes.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getNote(id);
  }, [id]);

  if (!note) {
    return <Typography>Note not found</Typography>;
  }

  return (
    <>
      <Head>
        <title>
          {loading ? "Loading" : note.title} - Amirhossein Mohammadi
        </title>
      </Head>

      <AppLayout>
        <Navbar />

        <Container
          maxWidth="md"
          sx={{ my: 6, position: "relative", zIndex: 1 }}
        >
          <IconButton onClick={() => router.push("/notes")} sx={{ mb: 3 }}>
            <ArrowBack />
          </IconButton>

          {!loading ? (
            <>
              <Box
                component="img"
                src={note.thumbnail}
                alt={note.title}
                sx={{
                  width: "100%",
                  height: { xs: 280, md: 420 },
                  objectFit: "cover",
                  borderRadius: 4,
                  mb: 4,
                }}
              />

              <Typography variant="h3" fontWeight={700} gutterBottom>
                {note.title}
              </Typography>
              <Typography variant="caption" gutterBottom>
                {note.details}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mt: 2, mb: 5 }}>
                <Chip label={formatDate(note.createdAt)} variant="outlined" />
              </Box>

              <Box>
                <MarkdownRenderer content={note.content} />
              </Box>
            </>
          ) : (
            <Loading />
          )}
        </Container>
      </AppLayout>
    </>
  );
}
