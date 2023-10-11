import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import { Loading, Error } from "@/components";

const ResumeCard = ({ resumes }) => {
  return (
    <Box>
      <Typography variant="body1" gutterButton>
        You can download my resume in different languages.
      </Typography>
      {resumes.error ? (
        <Error message={resumes.error.message} />
      ) : resumes.data ? (
        <List>
          {resumes.data.map((resume) => (
            <ListItem key={resume._id} disablePadding divider>
              <ListItemButton onClick={() => window.open(resume.url)}>
                <ListItemText primary={resume.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default ResumeCard;
