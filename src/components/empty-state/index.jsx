import { Box, Typography, Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";

const EmptyState = ({ onAddPlaylist }) => {
  return (
    <Box
      onClick={onAddPlaylist}
      sx={{
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "3px dashed",
        borderColor: "divider",
        borderRadius: 2,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "primary.main",
          backgroundColor: "action.hover",
        },
      }}
    >
      <PlaylistAdd sx={{ fontSize: 80, color: "text.secondary", mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        No Playlists Yet
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Click here to add your first YouTube playlist
      </Typography>
      <Button variant="contained" size="large">
        Add Playlist
      </Button>
    </Box>
  );
};

export default EmptyState;