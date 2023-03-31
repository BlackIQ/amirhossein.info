import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography fontSize={40} fontFamily="Boogaloo">
        What u are looking for!? 404 page :)
      </Typography>
    </Box>
  );
}
