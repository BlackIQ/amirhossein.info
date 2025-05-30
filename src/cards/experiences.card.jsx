import { Box, Typography, Grid, Divider, Chip } from "@mui/material";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { API } from "@/api";

import { Loading } from "../components";
import { useEffect, useState } from "react";

const ExperiencesCard = () => {
  const [loading, setLoading] = useState(true);
  const [experiences, setExperiences] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("experiences");

      setExperiences(data);
    } catch (error) {
      alert("Error fetching experiences");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return !loading ? (
    <Box>
      {experiences.map((experience, index) => (
        <Box key={experience._id}>
          <Typography variant="h5">{experience.position}</Typography>
          <Typography variant="body1">
            {experience.companyName} - {experience.location}
          </Typography>
          <Typography variant="body1" fontSize={15} color="text.secondary">
            {experience.startDate} - {experience.endDate}
          </Typography>

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {experience.duties}
          </ReactMarkdown>

          <Grid spacing={1} container>
            {experience.skills.split(",").map((skill) => (
              <Grid key={skill._id} item>
                <Chip
                  label={skill}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />
              </Grid>
            ))}
          </Grid>

          {experiences.length - 1 !== index && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  ) : (
    <Loading />
  );
};

export default ExperiencesCard;
