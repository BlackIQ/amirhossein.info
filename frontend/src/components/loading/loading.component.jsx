import { Box, CircularProgress } from "@mui/material";

const LoadingComponent = () => {
  return (
    <Box
      sx={{
        py: 10,
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingComponent;
