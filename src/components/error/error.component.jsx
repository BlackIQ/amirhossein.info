import { Box, Typography } from "@mui/material";

const ErrorComponent = ({ message }) => {
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
      <Typography variant="body1" color="error">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
