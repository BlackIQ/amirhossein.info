import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Work, Public, Cake, Apartment, Phone, Email, Smartphone } from "@mui/icons-material";

import { Card } from "../components";

const aboutItems = [
  {
    text: "Software developer, DevOps, Network",
    icon: <Work />,
  },
  {
    text: "KMC (Kerman Motor Company)",
    icon: <Apartment />,
  },
  {
    text: "Iran, Tehran",
    icon: <Public />,
  },
  {
    text: "Nov 20, 2003",
    icon: <Cake />,
  },
  {
    text: "+98 919 268 0633",
    icon: <Smartphone />,
  },
  {
    text: "amirhosseinmohammadi1380@yahoo.com",
    icon: <Email />,
  },
];

const MainCard = () => {
  return (
    <Card.AboutCard>
      <Grid
        spacing={2}
        container
        sx={{
          p: 0,
          m: 0,
          height: "100%",
        }}
      >
        <Grid md={4} item>
          <Box
            sx={{
              alignItems: "center",
              height: "100%",
              display: "flex",
            }}
          >
            <Box
              src="https://avatars.githubusercontent.com/u/55284339?v=4"
              alt="Profile photo"
              component="img"
              sx={{
                width: "90%",
                borderRadius: "100%",
              }}
            />
          </Box>
        </Grid>
        <Grid md={8} item>
          <Box
            sx={{
              alignItems: "center",
              height: "100%",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h2" fontFamily="Meow Script">
                hello
              </Typography>
              <Typography variant="h4" fontFamily="Boogaloo" gutterBottom>
                I am Amirhossein Mohammadi
              </Typography>
              <List>
                {aboutItems.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemIcon
                      sx={{
                        color: "primary.main",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card.AboutCard>
  );
};

export default MainCard;
