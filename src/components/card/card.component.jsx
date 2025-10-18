// src/components/card/card.component.jsx
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
        borderColor: (theme) => theme.palette.neonGlow.main,
        bgcolor: (theme) => theme.palette.background.paper,
        mb: 3,
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600} color="primary.main">
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
              bgcolor: "secondary.main",
              boxShadow: (theme) => `0 0 8px ${theme.palette.neonGlow.main}`,
            }}
          >
            {icon}
          </Avatar>
        }
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          borderBottom: (theme) => `1px solid ${theme.palette.neonGlow.main}`,
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
        borderColor: (theme) => theme.palette.neonGlow.main,
        bgcolor: (theme) => theme.palette.background.paper,
        mb: 3,
      }}
    >
      <CardContent sx={{ pt: 2 }}>{children}</CardContent>
    </Card>
  );
};
