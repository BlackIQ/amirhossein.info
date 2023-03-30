import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";

import { useEffect, useState } from "react";

import { API } from "../api";
import { Loading } from "../components";

const ExperiencesCard = () => {
  const [experiences, setExperiences] = useState([]);

  const getSkills = async () => {
    try {
      const data = await API.get("experiences");

      setExperiences(data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return experiences.length > 0 ? (
    <Box>
      {experiences.map((experience) => (
        <Box key={experience._id}>
          <Typography variant="h6" fontWeight="bold">
            {experience.position}
          </Typography>
          <Typography fontWeight="bold" variant="body2">
            {experience.company_name} - {experience.location}
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="text.secondary">
            {experience.start_date} - {experience.end_date}
          </Typography>
          <List>
            {experience.duties.map((duty) => (
              <ListItem key={duty._id} disablePadding>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">- {duty.name}</Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Grid spacing={2} container>
            {experience.skills.map((skill) => (
              <Grid key={skill._id} item>
                <Chip
                  label={skill.name}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  sx={{
                    fontWeight: "bold",
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 2 }} />
        </Box>
      ))}
    </Box>
  ) : (
    <Loading />
  );
};

export default ExperiencesCard;
