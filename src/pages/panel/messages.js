import { Typography, Box, Grid, Card, CardContent } from "@mui/material";

import { AdminLayout } from "@/layout";
import { withAuth } from "@/middlewares";
import { Table } from "@/components";
import { API } from "@/api";

export const getServerSideProps = async () => {
  try {
    const data = await API.get("messages");

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.response.data,
      },
    };
  }
};

export default function Messages({ data, error }) {
  return (
    <withAuth>
      <AdminLayout>
        {error ? (
          <Typography>{error.message}</Typography>
        ) : (
          <Grid container spacing={2}>
            <Grid md={8} width="100%" item>
              <Box>
                <Table data={data} table="socials" />
              </Box>
            </Grid>
            <Grid md={4} width="100%" s item>
              <Box>
                <Card>
                  <CardContent></CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        )}
      </AdminLayout>
    </withAuth>
  );
}
