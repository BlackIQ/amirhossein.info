import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { useRouter } from "next/router";

import { Table, Forms } from "@/components";
import { withAuth } from "@/middlewares";
import { AdminLayout } from "@/layout";
import { API } from "@/api";

export const getServerSideProps = async () => {
  try {
    const data = await API.get("duties");

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

export default function Duties({ data, error }) {
  const router = useRouter();

  const addData = async (callback) => {
    try {
      await API.post("duties", callback);

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <withAuth>
      <AdminLayout>
        {error ? (
          <Typography>{error.message}</Typography>
        ) : (
          <Grid container spacing={2}>
            <Grid md={8} width="100%" item>
              <Box>
                <Table
                  data={data}
                  table="duties"
                  // change={(item) => setUpdating(item)}
                />
              </Box>
            </Grid>
            <Grid md={4} width="100%" s item>
              <Box>
                <Card>
                  <CardContent>
                    <Forms
                      name="duties"
                      callback={addData}
                      button="Add duty"
                      def={{}}
                      btnStyle={{
                        fullWidth: true,
                        disabled: false,
                      }}
                    />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        )}
      </AdminLayout>
    </withAuth>
  );
}
