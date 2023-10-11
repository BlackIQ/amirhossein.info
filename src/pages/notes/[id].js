import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Box, Container, Toolbar, Typography, Divider } from "@mui/material";

import { AppLayout } from "@/layout";

import { API } from "@/api";

import Head from "next/head";
import { Navbar, Loading } from "@/components";
import { useEffect, useState } from "react";

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
  return {
    props: {
      params,
    },
  };
};

export default function Notes({ params }) {
  const getDateInFormat = (ts) => {
    const d = new Date(ts);

    return `${d.getFullYear()}/${d.getMonth()}/${d.getDay()} ${d.getHours()}:${d.getMinutes()}`;
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const note = await API.get(`notes/${params.id}`);

      setData(note.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>{data ? data.title : "Error"}</title>
      </Head>

      {!data ? (
        <Box>
          <Loading />
        </Box>
      ) : (
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
          </Container>
        </AppLayout>
      )}
    </>
  );
}
