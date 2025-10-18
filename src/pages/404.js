// src/pages/404.js
import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      <Typography
        variant="h1"
        fontWeight={700}
        sx={{
          color: "primary.main",
          // textShadow: (theme) => `0 0 16px ${theme.palette.neonGlow.intense}`,
          fontSize: { xs: "2rem", md: "4rem" },
        }}
      >
        404 - Page Not Found!
      </Typography>
    </Box>
  );
}
