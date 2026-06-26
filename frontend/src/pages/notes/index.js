import {useEffect, useState} from "react";
import Head from "next/head";
import Link from "next/link";
import {Box, Container, Grid, Typography} from "@mui/material";
import {CalendarToday} from "@mui/icons-material";
import {AppLayout} from "@/layout";
import Navbar from "@/components/navbar/navbar.component";
import {AppCard} from "@/components/card/card.component";
import {API} from "@/api";
import {Snackbar} from "@/components";

export default function Notes({notes, error}) {
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const formatDate = (dateString) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(dateString));
    };

    useEffect(() => {
        if (error) {
            setSnackMessage("Error fetching notes");
            setSnackOpen(true);
        }
    }, [error]);

    return (
        <>
            <Head>
                <title>Notes - Amirhossein Mohammadi</title>
                <meta name="description" content="Technical notes, guides, and thoughts"/>
            </Head>

            <AppLayout>
                <Navbar/>

                <Container maxWidth="lg" sx={{my: 6, position: "relative", zIndex: 1}}>
                    <Box sx={{mb: 2}}>
                        <Typography variant="h3" fontWeight={700} gutterBottom sx={{mb: 1}}>
                            Notes
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{mb: 6}}>
                            Technical deep dives, guides, and reflections
                        </Typography>
                    </Box>


                    {notes.length === 0 ?
                        <Box sx={{
                            height: "100vh",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Typography>No notes found at this moment</Typography>
                        </Box> : <Grid container spacing={4}>
                            {notes.map((note) => (
                                <Grid item xs={12} md={6} lg={4} key={note._id}>
                                    <Link href={`/notes/${note._id}`} passHref style={{textDecoration: 'none'}}>
                                        <AppCard
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                cursor: "pointer",
                                            }}
                                            header={false}
                                        >
                                            <Box
                                                component="img"
                                                src={note.thumbnail}
                                                alt={note.title}
                                                sx={{
                                                    width: "100%",
                                                    height: 220,
                                                    objectFit: "cover",
                                                    borderRadius: "12px 12px 0 0",
                                                }}
                                            />

                                            <Box sx={{p: 3, flexGrow: 1, display: "flex", flexDirection: "column"}}>
                                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                                    {note.title}
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary"
                                                            sx={{mb: 2, flexGrow: 1}}>
                                                    {note.details}
                                                </Typography>

                                                <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                                                    <CalendarToday sx={{fontSize: 18, color: "text.secondary"}}/>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {formatDate(note.createdAt)}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </AppCard>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>}

                </Container>
            </AppLayout>

            <Snackbar
                open={snackOpen}
                close={() => setSnackOpen(false)}
                message={snackMessage}
            />
        </>
    );
}

export async function getServerSideProps() {
    try {
        const notesRes = await API.get("notes");

        return {
            props: {
                notes: notesRes.data,
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                notes: [],
                error: "Error fetching data",
            },
        };
    }
}