import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import { API } from "@/api";
import {
  GitHub,
  LinkedIn,
  Telegram,
  ViewInAr,
  Javascript,
  Warning,
} from "@mui/icons-material";
import { colors } from "@mui/material";

const SocialCard = ({ socials, error }) => {
  const icons = {
    github: <GitHub sx={{ color: colors.grey[900] }} />,
    telegram: <Telegram sx={{ color: colors.blue[600] }} />,
    linkedin: <LinkedIn sx={{ color: colors.blue[800] }} />,
    docker: <ViewInAr sx={{ color: colors.blue[600] }} />,
    npmjs: <Javascript sx={{ color: colors.yellow[800] }} />,
    pypi: <Warning color="warning" />,
  };

  if (error) {
    return (
      <Box>
        <Typography color="error">Error fetching socials</Typography>
      </Box>
    );
  }

  if (!socials || socials.length === 0) {
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

  return (
    <Box>
      <List>
        {socials.map((social) => (
          <ListItem key={social._id} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                py: 1,
                "&:hover": { bgcolor: "grey.100" },
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

export async function getServerSideProps() {
  try {
    const { data } = await API.get("socials");
    return {
      props: {
        socials: data,
      },
    };
  } catch (error) {
    console.error("Error fetching socials:", error);
    return {
      props: {
        error: "Error fetching socials",
      },
    };
  }
}

export default SocialCard;
