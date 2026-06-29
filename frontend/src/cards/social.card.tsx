"use client";

// React Hooks
import { useState, useEffect } from "react";

// MUI Components
import {
  Box,
  colors,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";

// MUI Icons
import {
  GitHub,
  Javascript,
  LinkedIn,
  Telegram,
  ViewInAr,
  Warning,
} from "@mui/icons-material";

// NextAPI (The API inside NextJs)
import { NextAPI } from "@/api";

// Type
import { Social } from "@/types/social.type";

// Define icons
const getIcons = (name: string) => {
  switch (name) {
    case "github":
      return <GitHub sx={{ color: colors.grey[900] }} />;
    case "telegram":
      return <Telegram sx={{ color: colors.grey[900] }} />;
    case "linkedin":
      return <LinkedIn sx={{ color: colors.grey[900] }} />;
    case "docker":
      return <ViewInAr sx={{ color: colors.grey[900] }} />;
    case "npmjs":
      return <Javascript sx={{ color: colors.grey[900] }} />;
    default:
      return <Warning color="warning" />;
  }
};

// Card for Resume
const SocialCard = () => {
  // Define variables
  const [socials, setSocials] = useState<Social[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  // Get data function
  const getSocials = async () => {
    try {
      const {
        data: { socials },
      } = await NextAPI.get("social");

      setLoading(false);
      setError(false);
      setSocials(socials);
    } catch (error) {
      setError(true);
    }
  };

  // Where we call get data function
  useEffect(() => {
    getSocials();
  }, []);

  // Having error
  if (error) {
    return (
      <Box>
        <Typography color="error">Error fetching socials</Typography>
      </Box>
    );
  }

  // If loading data
  if (loading) {
    return (
      <List>
        {[...Array(3)].map((_, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ borderRadius: 3, py: 1 }}>
              <ListItemIcon>
                <Skeleton variant="circular" width={24} height={24} />
              </ListItemIcon>
              <Skeleton variant="text" width="60%" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }

  // If no data
  if (socials.length === 0) {
    return <Typography>No socials found</Typography>;
  }

  // No loading, no errors, having data
  return (
    <Box>
      <List>
        {socials.map((social) => (
          <ListItem key={social._id} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                py: 1,
              }}
              onClick={() => window.open(social.url, "_blank")}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {getIcons(social.value)}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.primary">
                    {social.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SocialCard;
