import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import Flag from "react-world-flags";
import { API } from "@/api";
import { Warning } from "@mui/icons-material";

const ResumeCard = ({ resumes, error }) => {
  const icons = {
    us: <Flag code="us" style={{ width: 24, height: 16 }} />,
    ir: <Flag code="ir" style={{ width: 24, height: 16 }} />,
    de: <Flag code="de" style={{ width: 24, height: 16 }} />,
  };

  if (error) {
    return (
      <Box>
        <Typography color="error">Error fetching resumes</Typography>
      </Box>
    );
  }

  if (!resumes || resumes.length === 0) {
    return (
      <List>
        {[...Array(2)].map((_, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ borderRadius: 3, py: 1 }}>
              <ListItemIcon>
                <Skeleton variant="rectangular" width={24} height={16} />
              </ListItemIcon>
              <Skeleton variant="text" width="60%" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <Box>
      <List>
        {resumes.map((resume) => (
          <ListItem key={resume._id} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                py: 1,
                "&:hover": { bgcolor: "grey.100" },
              }}
              onClick={() => window.open(resume.url, "_blank")}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {icons[resume.value] || <Warning color="warning" />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.primary">
                    {resume.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await API.get("resumes");
    return {
      props: {
        resumes: data,
      },
    };
  } catch (error) {
    console.error("Error fetching resumes:", error);
    return {
      props: {
        error: "Error fetching resumes",
      },
    };
  }
}

export default ResumeCard;
