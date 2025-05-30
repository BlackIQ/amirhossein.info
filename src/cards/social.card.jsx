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
import { useEffect, useState } from "react";
import {
  GitHub,
  LinkedIn,
  Telegram,
  ViewInAr,
  Javascript,
  Warning,
} from "@mui/icons-material";
import { colors } from "@mui/material";

const SocialCard = () => {
  const [loading, setLoading] = useState(true);
  const [socials, setSocials] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("socials");
      setSocials(data);
    } catch (error) {
      console.error("Error fetching socials:", error);
      alert("Error fetching socials");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const icons = {
    github: <GitHub sx={{ color: colors.grey[900] }} />,
    telegram: <Telegram sx={{ color: colors.blue[600] }} />,
    linkedin: <LinkedIn sx={{ color: colors.blue[800] }} />,
    docker: <ViewInAr sx={{ color: colors.blue[600] }} />,
    npmjs: <Javascript sx={{ color: colors.yellow[800] }} />,
    pypi: <Warning color="warning" />,
  };

  return (
    <Box>
      {loading ? (
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
      ) : (
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
      )}
    </Box>
  );
};

export default SocialCard;
