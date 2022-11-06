import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Work, Public, Cake, Apartment } from "@mui/icons-material";

import { Card } from "../components";

const aboutItems = [
  {
    text: "Software developer",
    icon: <Work />,
  },
  {
    text: "SBB Iran",
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
];

const MainCard = () => {
  return (
    <Card>
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
                I'm Amirhossein Mohammadi
              </Typography>
              <List>
                {aboutItems.map((item) => (
                  <ListItem key={item} disablePadding>
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
    </Card>
  );
};

export default MainCard;
