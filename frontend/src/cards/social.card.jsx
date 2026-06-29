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

// Define icons
const icons = {
  github: <GitHub sx={{ color: colors.grey[900] }} />,
  telegram: <Telegram sx={{ color: colors.blue[600] }} />,
  linkedin: <LinkedIn sx={{ color: colors.blue[800] }} />,
  docker: <ViewInAr sx={{ color: colors.blue[600] }} />,
  npmjs: <Javascript sx={{ color: colors.yellow[800] }} />,
  pypi: <Warning color="warning" />,
};

// Card for Resume
const SocialCard = () => {
  // Define variables
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get data function
  const getSocials = async () => {
    try {
      const {
        data: { socials },
      } = await NextAPI.get("social");

      setLoading(false);
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
                {icons[social.value] || <Warning color="warning" />}
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
