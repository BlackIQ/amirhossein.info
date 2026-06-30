"use client";

// React Hooks
import { useState, useEffect } from "react";

// MUI Components
import { Box, Chip, Grid, Skeleton, Typography } from "@mui/material";

// NextAPI (The API inside NextJs)
import { NextAPI } from "@/api";

// Type
import { Skill } from "@/types/skill.type";

// Card for Skill
const SkillsCard = () => {
  // Define variables
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const [aggrigatedData, setAggrigatedData] = useState<{
    [key: string]: Skill[];
  }>({});

  const aggriateData = (skills: Skill[]) => {
    const data: { [key: string]: Skill[] } = {};

    skills.forEach((skill) => {
      (data[skill.category] ??= []).push(skill);
    });

    setAggrigatedData(data);
  };

  // Get data function
  const getSkills = async () => {
    try {
      const {
        data: { skills },
      } = await NextAPI.get("skill");

      setLoading(false);
      setError(false);
      setSkills(skills);

      aggriateData(skills);
    } catch (error) {
      setError(true);
    }
  };

  // Where we call get data function
  useEffect(() => {
    getSkills();
  }, []);

  // Having error
  if (!loading && error) {
    return (
      <Box>
        <Typography color="error">Error fetching skills</Typography>
      </Box>
    );
  }

  // If loading data
  if (loading) {
    return (
      <Box>
        <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
          Technologies and tools I work with
        </Typography>
        {[...Array(2)].map((_, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Skeleton variant="text" width="40%" height={24} sx={{ mb: 1 }} />
            <Grid container spacing={1}>
              {[...Array(3)].map((_, i) => (
                <Grid key={i}>
                  <Skeleton variant="rounded" width={80} height={32} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    );
  }

  // If no data
  if (skills.length === 0) {
    return <Typography>No skills found</Typography>;
  }

  // No loading, no errors, having data
  return (
    <Box>
      {Object.keys(aggrigatedData).map((key, index) => (
        <Box
          key={key}
          sx={{ mb: Object.keys(skills).length === index + 1 ? 0 : 2 }}
        >
          <Typography
            variant="h6"
            color="text.primary"
            // fontWeight={600}
            sx={{ mb: 1 }}
          >
            {key}
          </Typography>
          <Grid container spacing={1}>
            {aggrigatedData[key].map((skill: Skill) => (
              <Grid key={skill._id}>
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
      ))}
    </Box>
  );
};

export default SkillsCard;
