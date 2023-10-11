import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import { Loading, Error } from "../components";

const SocialCard = ({ socials }) => {
  return (
    <Box>
      <Typography variant="body1" gutterButton>
        Lets have a connection in social medias!
      </Typography>
      {socials.error ? (
        <Error message={socials.error.message} />
      ) : socials.data ? (
        <List>
          {socials.data.map((media) => (
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
