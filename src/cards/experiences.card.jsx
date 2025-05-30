import { Box, Typography, Grid, Divider, Chip, Skeleton } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { API } from "@/api";

const ExperiencesCard = ({ experiences, error }) => {
  if (error) {
    return (
      <Box>
        <Typography color="error">Error fetching experiences</Typography>
      </Box>
    );
  }

  if (!experiences || experiences.length === 0) {
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

  return (
    <Box>
      {experiences.map((experience, index) => (
        <Box key={experience._id} sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight={600}>
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
          {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await API.get("experiences");
    return {
      props: {
        experiences: data,
      },
    };
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return {
      props: {
        error: "Error fetching experiences",
      },
    };
  }
}

export default ExperiencesCard;
