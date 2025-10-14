import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

export const AppCard = ({ children, icon, title, subtitle }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: (theme) =>
          theme.palette.mode === "light" ? "grey.300" : "grey.800", // Darker border in dark mode
        mb: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 4px 12px rgba(0,0,0,0.15)"
              : "0 4px 12px rgba(0,0,0,0.4)", // Stronger shadow in dark mode
        },
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        }
        avatar={
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: "primary.main", // Theme-aware primary color
            }}
          >
            {icon}
          </Avatar>
        }
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "light" ? "grey.100" : "grey.900", // Darker header background
          borderBottom: 1,
          borderColor: (theme) =>
            theme.palette.mode === "light" ? "grey.200" : "grey.800", // Theme-aware border
        }}
      />
      <CardContent sx={{ pt: 2 }}>{children}</CardContent>
    </Card>
  );
};

export const AboutCard = ({ children }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: (theme) =>
          theme.palette.mode === "light" ? "grey.300" : "grey.800", // Darker border in dark mode
        mb: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 4px 12px rgba(0,0,0,0.15)"
              : "0 4px 12px rgba(0,0,0,0.4)", // Stronger shadow in dark mode
        },
      }}
    >
      <CardContent sx={{ pt: 2 }}>{children}</CardContent>
    </Card>
  );
};
