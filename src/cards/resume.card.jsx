import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  colors,
} from "@mui/material";

import Flag from "react-world-flags";

import { API } from "@/api";

import { Loading } from "../components";
import { useEffect, useState } from "react";
import { Warning } from "@mui/icons-material";

const ResumeCard = () => {
  const [loading, setLoading] = useState(true);
  const [resumes, setResumes] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("resumes");

      setResumes(data);
    } catch (error) {
      alert("Error fetching resumes");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const icons = {
    us: <Flag code="us" style={{ width: 24, height: 16 }} />,
    ir: <Flag code="ir" style={{ width: 24, height: 16 }} />,
    de: <Flag code="de" style={{ width: 24, height: 16 }} />,
  };

  return !loading ? (
    <Box>
      <List>
        {resumes.map((resume) => (
          <ListItem key={resume._id} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
              }}
              onClick={() => window.open(resume.url)}
            >
              <ListItemIcon>
                {icons[resume.value] || <Warning color="warning" />}
              </ListItemIcon>
              <ListItemText primary={resume.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  ) : (
    <Loading />
  );
};

export default ResumeCard;
