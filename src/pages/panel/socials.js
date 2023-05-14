import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { useRouter } from "next/router";

import { Table, Forms } from "@/components";
import { AdminLayout } from "@/layout";
import { API } from "@/api";

export const getServerSideProps = async () => {
  try {
    const data = await API.get("socials");

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

const Socials = ({ data, error }) => {
  const router = useRouter();

  const addData = async (callback) => {
    try {
      await API.post("socials", callback);

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                <CardContent>
                  <Forms
                    name="socials"
                    callback={addData}
                    def={{}}
                    button="Add social"
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
  );
};

export default Socials;
