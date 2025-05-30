import { Box, Grid, Chip, Skeleton, Typography } from "@mui/material";
import { API } from "@/api";
import { useEffect, useState } from "react";

const SkillsCard = () => {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("skills");
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
      alert("Error fetching skills");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {loading ? (
        <Grid container spacing={1}>
          {[...Array(6)].map((_, index) => (
            <Grid item key={index}>
              <Skeleton variant="rounded" width={80} height={32} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Technologies and tools I work with
          </Typography>
          <Grid container spacing={1}>
            {skills.map((skill) => (
              <Grid item key={skill._id || skill.name}>
                <Chip
                  label={skill.name}
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ fontSize: "0.8125rem" }}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default SkillsCard;
