// MUI Components
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// NextJs Image
import Image from "next/image";

// MUI Icons
import {
  Apartment,
  Cake,
  Email,
  Public,
  Smartphone,
  Work,
} from "@mui/icons-material";

// Components
import { AboutCard } from "@/components/card/card.component";

const aboutItems = [
  { text: "Software Developer, DevOps, Network", icon: <Work /> },
  { text: "NarenjCloud", icon: <Apartment /> },
  { text: "Tehran, Iran", icon: <Public /> },
  { text: "Nov 20, 2003", icon: <Cake /> },
  { text: "+98 919 268 0633", icon: <Smartphone /> },
  { text: "hi@amirhossein.info", icon: <Email /> },
];

// Main Card
const MainCard = () => {
  return (
    <AboutCard>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/55284339?v=4"
              alt="Profile photo"
              width={200}
              height={200}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              priority
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h4"
              color="primary.main"
              fontFamily="Caveat"
              fontWeight={900}
              gutterBottom
            >
              Amirhossein Mohammadi
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Software Engineer & DevOps Specialist
            </Typography>
            <List dense>
              {aboutItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2" color="text.primary">
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </AboutCard>
  );
};

export default MainCard;
