import { Grid, Box, Typography, Button } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const skills = [
  {
    title: "Back-End Development",
    items: [
      {
        name: "ExpresJs",
        star: true,
      },
      {
        name: "NodeJs",
        star: true,
      },
      {
        name: "Laravel",
        star: false,
      },
      {
        name: "Restful API",
        star: true,
      },
      {
        name: "Ruby on Rails",
        star: false,
      },
    ],
  },
  {
    title: "Front-End Development",
    items: [
      {
        name: "ReactJs",
        star: true,
      },
      {
        name: "ReduxJs",
        star: true,
      },
      {
        name: "MUI",
        star: true,
      },
      {
        name: "SASS",
        star: true,
      },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      {
        name: "Flutter",
        star: true,
      },
      {
        name: "Material UI",
        star: true,
      },
      {
        name: "Swift UI",
        star: false,
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        star: true,
      },
      {
        name: "MariaDB",
        star: true,
      },
      {
        name: "SQL Server",
        star: true,
      },
      {
        name: "Firestore",
        star: false,
      },
      {
        name: "PostgreSQL",
        star: true,
      },
    ],
  },
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        star: true,
      },
      {
        name: "Php",
        star: true,
      },
      {
        name: "Dart",
        star: true,
      },
      {
        name: "Python",
        star: true,
      },
      {
        name: "Ruby",
        star: false,
      },
    ],
  },
];

const SkillsCard = () => {
  return skills.map((skill) => (
    <Box
      key={skill.title}
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
        {skill.title}
      </Typography>
      <Grid spacing={2} container>
        {skill.items.map((item) => (
          <Grid key={item} item>
            <Button
              variant="contained"
              disableElevation
              size="small"
              startIcon={item.star ? <Star /> : <StarBorder />}
              sx={{
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  ));
};

export default SkillsCard;
