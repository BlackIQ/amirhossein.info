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
        borderRadius: 1,
        borderColor: "primary.main",
        mb: 2,
      }}
    >
      <CardHeader
        title={<Typography fontWeight="bold">{title}</Typography>}
        subheader={<Typography>{subtitle}</Typography>}
        avatar={<Avatar sx={{ bgcolor: "primary.main" }}>{icon}</Avatar>}
        sx={{
          bgcolor: "primary.main",
          color: "white",
        }}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export const AboutCard = (props) => {
  const { children } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 1,
        borderColor: "primary.main",
        mb: 2,
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};
