import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
} from "@mui/material";

import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const medias = [
  {
    icon: <GitHub />,
    text: "GitHub",
    path: "https://github.com/BlackIQ",
  },
  {
    icon: <LinkedIn />,
    text: "LinkedIn",
    path: "https://linkedin.com/in/amirhosseinmohammadi",
  },
  {
    icon: <Email />,
    text: "Email",
    path: "mailto:hi@amirhossein.info",
  },
];

const SocialCard = () => {
  return (
    <Box>
      <Typography variant="body1" gutterButton>
        Let's have a connection in social medias!
      </Typography>
      <List>
        {medias.map((media) => (
          <ListItem key={media.text} disablePadding divider>
            <ListItemButton onClick={() => window.location.replace(media.path)}>
              <ListItemIcon sx={{ color: "primary.main" }}>
                {media.icon}
              </ListItemIcon>
              <ListItemText primary={media.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SocialCard;
