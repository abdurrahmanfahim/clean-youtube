import { useStoreState } from "easy-peasy";
import CommonListLayout from "../../components/common-list-layout";
import { Box, Typography, Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);

  const favoritePlaylistsArray = items
    .map((playlistId) => data[playlistId])
    .filter((playlist) => playlist);

  if (favoritePlaylistsArray.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 16,
        }}
      >
        <Favorite sx={{ fontSize: 80, color: "text.secondary", mb: 2 }} />
        <Typography variant="h5" gutterBottom>
          No Favorites Yet
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Add some playlists to favorites to see them here
        </Typography>
        <Button component={Link} to="/" variant="contained" size="large">
          Go to Home
        </Button>
      </Box>
    );
  }

  return <CommonListLayout items={favoritePlaylistsArray} isPlaylist={true} />;
};

export default FavoritesPage;
