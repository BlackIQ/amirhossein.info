import { Grid, Box, Typography, Chip } from "@mui/material";

import { Loading, Error } from "../components";

const SkillsCard = ({ skills }) => {
  return skills.error ? (
    <Error message={skills.error.message} />
  ) : skills.data ? (
    skills.data.map((skill) => (
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
        <Grid spacing={1} container>
          {skill.children.map((item) => (
            <Grid key={item} item>
              <Chip label={item.name} color="primary" size="medium" />
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
