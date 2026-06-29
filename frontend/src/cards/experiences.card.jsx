// React Hooks
import { useState, useEffect } from "react";

// MUI Components
import { Box, Chip, Divider, Grid, Skeleton, Typography } from "@mui/material";

// Markdown
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// NextAPI (The API inside NextJs)
import { NextAPI } from "@/api";

// Card for Experience
const ExperiencesCard = () => {
  // Define variables
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get data function
  const getExperiences = async () => {
    try {
      const {
        data: { experiences },
      } = await NextAPI.get("experience");

      setLoading(false);
      setExperiences(experiences);
    } catch (error) {
      setError(true);
    }
  };

  // Where we call get data function
  useEffect(() => {
    getExperiences();
  }, []);

  // Having error
  if (error) {
    return (
      <Box>
        <Typography color="error">Error fetching experiences</Typography>
      </Box>
    );
  }

  // If loading data
  if (loading) {
    return (
      <Box>
        {[...Array(2)].map((_, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Skeleton variant="text" width="60%" height={32} />
            <Skeleton variant="text" width="40%" height={24} />
            <Skeleton variant="text" width="30%" height={20} />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={60}
              sx={{ mb: 1 }}
            />
            <Grid container spacing={1}>
              {[...Array(3)].map((_, i) => (
                <Grid item key={i}>
                  <Skeleton variant="rounded" width={80} height={32} />
                </Grid>
              ))}
            </Grid>
            {index < 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
      </Box>
    );
  }

  // If no data
  if (experiences.length === 0) {
    return <Typography>No experiences found</Typography>;
  }

  // No loading, no errors, having data
  return (
    <Box>
      {experiences.map((experience, index) => (
        <Box key={experience._id} sx={{ mb: 3 }}>
          <Typography variant="h6" color="text.primary" fontWeight={600}>
            {experience.position}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {experience.companyName} • {experience.location}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {experience.startDate} – {experience.endDate}
          </Typography>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <Typography variant="body2" color="text.primary" paragraph>
                  {children}
                </Typography>
              ),
              ul: ({ children }) => (
                <Box component="ul" sx={{ pl: 2, my: 1 }}>
                  {children}
                </Box>
              ),
              li: ({ children }) => (
                <Typography component="li" variant="body2" color="text.primary">
                  {children}
                </Typography>
              ),
            }}
          >
            {experience.duties}
          </ReactMarkdown>
          <Grid container spacing={1}>
            {experience.skills.split(",").map((skill, i) => (
              <Grid item key={i}>
                <Chip
                  label={skill.trim()}
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ fontSize: "0.8125rem" }}
                />
              </Grid>
            ))}
          </Grid>
          {index < experiences.length - 1 && (
            <Divider
              sx={{
                my: 2,
                borderColor: (theme) => theme.palette.primary.main,
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ExperiencesCard;
