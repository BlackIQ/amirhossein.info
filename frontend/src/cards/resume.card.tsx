// React Hooks
import { useState, useEffect } from "react";

// MUI Components
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

// Flags
import Flag from "react-world-flags";

// NextAPI (The API inside NextJs)
import { NextAPI } from "@/api";

// Card for Resume
const ResumeCard = () => {
  // Define variables
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get data function
  const getResumes = async () => {
    try {
      const {
        data: { resumes },
      } = await NextAPI.get("resume");

      setLoading(false);
      setResumes(resumes);
    } catch (error) {
      setError(true);
    }
  };

  // Where we call get data function
  useEffect(() => {
    getResumes();
  }, []);

  // Having error
  if (error) {
    return (
      <Box>
        <Typography color="error">Error fetching resumes</Typography>
      </Box>
    );
  }

  // If loading data
  if (loading) {
    return (
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
    );
  }

  // If no data
  if (resumes.length === 0) {
    return <Typography>No resumes found</Typography>;
  }

  // No loading, no errors, having data
  return (
    <Box>
      <List>
        {resumes.map((resume) => (
          <ListItem key={resume._id} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                py: 1,
              }}
              onClick={() => window.open(resume.url, "_blank")}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Flag code={resume.value} style={{ width: 24, height: 16 }} />
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
    </Box>
  );
};

export default ResumeCard;
