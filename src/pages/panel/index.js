import { Card, CardContent, Container } from "@mui/material";
import { useDispatch } from "react-redux";

import { hasAuth } from "@/middlewares";
import { AdminLayout } from "@/layout";
import { Forms } from "@/components";
import { API } from "@/api";

import { setToken } from "@/redux/actions/token";

const Authentication = () => {
  const dispatch = useDispatch();

  const login = async (callback) => {
    try {
      const { data } = await API.post("authentication/login", callback);

      dispatch(setToken(data.token));
    } catch (error) {}
  };

  return (
    <hasAuth>
      <AdminLayout>
        <Container sx={{ py: 10 }} maxWidth="sm">
          <Card>
            <CardContent>
              <Forms
                name="login"
                callback={login}
                def={{}}
                btnStyle={{ fullWidth: true, disabled: false }}
                button="Login"
              />
            </CardContent>
          </Card>
        </Container>
      </AdminLayout>
    </hasAuth>
  );
};

export default Authentication;
