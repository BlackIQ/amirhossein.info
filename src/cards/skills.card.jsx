import { Grid, Box, Typography, Chip } from "@mui/material";

import { useEffect, useState } from "react";

import { API } from "../api";
import { Loading } from "../components";

const SkillsCard = () => {
  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    try {
      const data = await API.get("skills");

      setSkills(data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return skills.length > 0 ? (
    skills.map((skill) => (
      <Box
        key={skill._id}
        sx={{
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary.main"
          gutterBottom
        >
          {skill.name}
        </Typography>
        <Grid spacing={2} container>
          {skill.children.map((item) => (
            <Grid key={item} item>
              <Chip
                label={item.name}
                color="primary"
                size="medium"
                sx={{
                  fontWeight: "bold",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    ))
  ) : (
    <Loading />
  );
};

export default SkillsCard;
