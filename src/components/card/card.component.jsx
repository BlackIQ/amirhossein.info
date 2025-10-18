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
        borderRadius: 5,
        borderColor: (theme) => theme.palette.neonGlow.main,
        mb: 3,
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            fontWeight={600}
            color="primary.contrastText"
          >
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="primary.contrastText">
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
          bgcolor: (theme) => theme.palette.primary.main,
          borderBottom: (theme) => `1px solid ${theme.palette.neonGlow.main}`,
        }}
      />
      <CardContent sx={{ pt: 2, color: "primary.contrastText" }}>
        {children}
      </CardContent>
    </Card>
  );
};

export const AboutCard = ({ children }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 5,
        borderColor: (theme) => theme.palette.neonGlow.main,
        mb: 3,
      }}
    >
      <CardContent sx={{ pt: 2, color: "primary.contrastText" }}>
        {children}
      </CardContent>
    </Card>
  );
};
