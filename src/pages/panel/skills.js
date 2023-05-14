import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { useRouter } from "next/router";

import { Table, Forms } from "@/components";
import { withAuth } from "@/middlewares";
import { AdminLayout } from "@/layout";
import { API } from "@/api";

export const getServerSideProps = async () => {
  try {
    const data = await API.get("skills");

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

export default function Skills({ data, error }) {
  const router = useRouter();

  const addData = async (callback) => {
    try {
      await API.post("skills", callback);

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
            <Grid md={8} item>
              <Box>
                <Table data={data} table="skills" />
              </Box>
            </Grid>
            <Grid md={4} item>
              <Box>
                <Card>
                  <CardContent>
                    <Forms
                      name="skills"
                      callback={addData}
                      button="Add skill"
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
