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
import Flag from "react-world-flags";
import { API } from "@/api";
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
      console.error("Error fetching resumes:", error);
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

  return (
    <Box>
      {loading ? (
        <List>
          {[...Array(2)].map((_, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ borderRadius: 3, py: 1 }}>
                <ListItemIcon>
                  <Skeleton variant="rectangular" width={24} height={16} />
                </ListItemIcon>
                <Skeleton variant="text" width="60%" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {resumes.map((resume) => (
            <ListItem key={resume._id} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 3,
                  py: 1,
                  "&:hover": { bgcolor: "grey.100" },
                }}
                onClick={() => window.open(resume.url, "_blank")}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {icons[resume.value] || <Warning color="warning" />}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" color="text.primary">
                      {resume.label}
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

export default ResumeCard;
