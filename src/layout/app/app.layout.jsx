import { Box } from "@mui/material";

import { Navbar } from "../../components";

const AppLayout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default AppLayout;
