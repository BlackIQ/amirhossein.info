import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

import { API } from "../api";
import { Loading } from "../components";

const SocialCard = () => {
  const [medias, setMedias] = useState([]);

  const getSocials = async () => {
    try {
      const data = await API.get("socials");

      setMedias(data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getSocials();
  }, []);

  return (
    <Box>
      <Typography variant="body1" gutterButton>
        Let's have a connection in social medias!
      </Typography>
      {medias.length > 0 ? (
        <List>
          {medias.map((media) => (
            <ListItem key={media._id} disablePadding divider>
              <ListItemButton onClick={() => window.open(media.url)}>
                <ListItemText primary={media.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default SocialCard;
