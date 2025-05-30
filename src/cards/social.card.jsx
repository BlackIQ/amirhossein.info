import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  colors,
} from "@mui/material";

import { API } from "@/api";

import { Loading } from "../components";
import { useEffect, useState } from "react";
import {
  GitHub,
  Javascript,
  LinkedIn,
  Telegram,
  ViewInAr,
  Warning,
} from "@mui/icons-material";

const SocialCard = () => {
  const [loading, setLoading] = useState(true);
  const [socials, setSocials] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("socials");

      setSocials(data);
    } catch (error) {
      alert("Error fetching socials");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const icons = {
    github: <GitHub sx={{ color: colors.common.black }} />,
    telegram: <Telegram sx={{ color: colors.blue[500] }} />,
    linkedin: <LinkedIn sx={{ color: colors.blue[900] }} />,
    docker: <ViewInAr sx={{ color: colors.blue[500] }} />,
    npmjs: <Javascript sx={{ color: colors.orange[500] }} />,
    pypi: null,
  };

  return !loading ? (
    <Box>
      <List>
        {socials.map((social) => (
          <ListItem key={social._id} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
              }}
              onClick={() => window.open(social.url)}
            >
              <ListItemIcon>
                {icons[social.value] || <Warning color="warning" />}
              </ListItemIcon>
              <ListItemText primary={social.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  ) : (
    <Loading />
  );
};

export default SocialCard;
