import { Snackbar, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const MakeSnackbar = ({ open, close, message }) => {
  return (
    <Snackbar
      open={open}
      onClose={close}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      message={
        <Typography variant="body2" color="inherit" fontWeight={500}>
          {message}
        </Typography>
      }
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={close}
        >
          <Close fontSize="small" />
        </IconButton>
      }
      sx={{
        "& .MuiSnackbarContent-root": {
          bgcolor: "grey.900",
          color: "white",
          borderRadius: 1,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        },
      }}
    />
  );
};

export default MakeSnackbar;
