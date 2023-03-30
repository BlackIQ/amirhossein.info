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

const DownloadCard = () => {
  const [resumes, setResums] = useState([]);

  const getSkills = async () => {
    try {
      const data = await API.get("resumes");

      setResums(data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <Box>
      <Typography variant="body1" gutterButton>
        You can download my resume in different languages.
      </Typography>
      {resumes.length > 0 ? (
        <List>
          {resumes.map((resume) => (
            <ListItem key={resume._id} disablePadding divider>
              <ListItemButton onClick={() => window.open(resume.url)}>
                <ListItemText primary={resume.name} />
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

export default DownloadCard;
