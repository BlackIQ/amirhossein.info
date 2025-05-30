import { Box, Grid, Chip, Skeleton, Typography } from "@mui/material";
import { API } from "@/api";
import { useEffect, useState } from "react";

const SkillsCard = () => {
  const [loading, setLoading] = useState(true);
  const [skillGroups, setSkillGroups] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("skills");
      setSkillGroups(data);
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
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Technologies and tools I work with
      </Typography>
      {loading ? (
        <Box>
          {[...Array(2)].map((_, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Skeleton variant="text" width="40%" height={24} sx={{ mb: 1 }} />
              <Grid container spacing={1}>
                {[...Array(3)].map((_, i) => (
                  <Grid item key={i}>
                    <Skeleton variant="rounded" width={80} height={32} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      ) : (
        skillGroups
          .filter((group) => group.parent !== null) // Only include groups with a parent
          .map((group) => (
            <Box key={group.parent._id} sx={{ mb: 3 }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                {group.parent.label}
              </Typography>
              <Grid container spacing={1}>
                {group.children.map((skill) => (
                  <Grid item key={skill._id}>
                    <Chip
                      label={skill.label}
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ fontSize: "0.8125rem" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))
      )}
    </Box>
  );
};

export default SkillsCard;
