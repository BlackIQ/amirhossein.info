"use client";

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
} from "@mui/icons-material";

// Components
import { AboutCard } from "@/components/card/card.component";

const aboutItems = [
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
        <Grid size={{ md: 4, xs: 12 }}>
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
        <Grid size={{ xs: 12, md: 8 }}>
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
              color="primary"
              sx={{
                fontFamily: "Caveat",
                fontWeight: 900,
              }}
              gutterBottom
            >
              Amirhossein Mohammadi
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Platform & Infrastructure Engineer
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
