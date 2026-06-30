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
import { Warning } from "@mui/icons-material";

// NextAPI (The API inside NextJs)
import { NextAPI } from "@/api";

// Type
import { Social } from "@/types/social.type";

// React Icons
import {
  FaDocker,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { SiPypi, SiNpm } from "react-icons/si";

// Define icons
const getIcons = (name: string) => {
  switch (name) {
    case "github":
      return <FaGithub color="#181717" size={24} />;
    case "gitlab":
      return <FaGitlab color="#FC6D26" size={24} />;
    case "telegram":
      return <FaTelegram color="#26A5E4" size={24} />;
    case "linkedin":
      return <FaLinkedin color="#0A66C2" size={24} />;
    case "docker":
      return <FaDocker color="#2496ED" size={24} />;
    case "npmjs":
      return <SiNpm color="#CB3837" size={24} />;
    case "pypi":
      return <SiPypi color="#3776AB" size={24} />;
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
