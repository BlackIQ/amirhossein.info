import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

const experiences = [
  {
    role: "Software developer",
    company: {
      name: "SBB Iran",
      location: "Iran, Tehran",
      range: "Aug 2022, Present",
    },
    jobs: [
      "Back-End development. Design and run API services with ExpressJS.",
      "Front-End development with ReactJs library.",
      "SDK development. Creating some SDKs for JavaScript.",
      "Setup Git server.",
      "Setup GitLab and GitWeb interface for Git server",
      "Admin and manager of web servers, dns and cloud computing,",
    ],
    skills: [
      "Nginx",
      "Git",
      "GitLab",
      "MongoDB",
      "ExpressJs",
      "ReactJs",
      "NodeJs",
    ],
  },
  {
    role: "Software Developer",
    company: {
      name: "Narbon Technologies",
      location: "Iran, Tehran",
      range: "Nov 2021, Aug 2022",
    },
    jobs: [
      "Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality.",
      "Developed software for both desktop and mobile operating systems.",
      "Collaborated on stages of systems development lifecycle from requirement gathering to production releases.",
      "Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.",
    ],
    skills: [
      "Laravel",
      "ReactJs",
      "Flutter",
      "PostgreSQL",
      "Heroku",
      "Cloudflare",
    ],
  },
  {
    role: "Back-End Developer",
    company: {
      name: "Narbon",
      location: "Iran, Tehran",
      range: "Apr 2019, Nov 2021",
    },
    jobs: [
      "Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.",
      "Provided front-end website development using WordPress and other editing software.",
      "Coded websites using HTML, CSS, JavaScript and jQuery languages.",
      "Conducted testing and review of website design for responsiveness, clarity and effectiveness.",
      "Built and styled new mobile-friendly websites, transitioning legacy presentations to simultaneous easy-to-use versions.",
      "Oversaw back-end development using PHP to maintain website integrity, security and efficiency.",
      "Pulled from PHP, SQL, JavaScript and other back-end library knowledge to bolster programming resources.",
    ],
    skills: [
      "Php ( Pure )",
      "MariaDB",
      "SQL",
      "Js",
      "jQuery",
      "Bootstrap",
      "Css",
      "Sass",
    ],
  },
];

const ExperiencesCard = () => {
  return (
    <Box>
      {experiences.map((experience) => (
        <Box key={experience.role}>
          <Typography variant="h6" fontWeight="bold">
            {experience.role}
          </Typography>
          <Typography fontWeight="bold" variant="body2">
            {experience.company.name} - {experience.company.location}
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="text.secondary">
            {experience.company.range}
          </Typography>
          <List>
            {experience.jobs.map((job) => (
              <ListItem key={job} disablePadding>
                <ListItemText
                  primary={<Typography variant="subtitle2">- {job}</Typography>}
                />
              </ListItem>
            ))}
          </List>
          <Grid spacing={2} container>
            {experience.skills.map((skill) => (
              <Grid key={skill} item>
                <Button
                  variant="outlined"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {skill}
                </Button>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 2 }} />
        </Box>
      ))}
    </Box>
  );
};

export default ExperiencesCard;
