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
        borderColor: "grey.300",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        mb: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
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
              bgcolor: "primary.main",
            }}
          >
            {icon}
          </Avatar>
        }
        sx={{
          bgcolor: "grey.100",
          borderBottom: 1,
          borderColor: "grey.200",
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
        borderColor: "grey.300",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        mb: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardContent sx={{ pt: 2 }}>{children}</CardContent>
    </Card>
  );
};
