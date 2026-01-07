import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { PlayCircle } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../hooks/usePlaylistContext";
import { useTheme } from "../../hooks/useTheme";
import DeleteIcon from "@mui/icons-material/Delete";

const ListCardItem = ({
  thumbnail,
  title,
  channelTitle,
  playlistId,
  videoId,
  isPlaylist,
}) => {
  const { addToFavorites, removeFromFavorites, favorites, removePlaylist } =
    usePlaylistContext();
  const { darkMode } = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
        position: "relative",
        "&:hover": {
          backgroundColor: darkMode ? "#1a1a1aff" : "#f5f5f5",
          "& .delete-btn": {
            display: "block",
          },
        },
      }}
    >
      <CardMedia component="img" image={thumbnail.url} alt={title} />
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "text.primary",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between" }}
        disableSpacing
      >
        <Button
          component={Link}
          to={
            isPlaylist
              ? `/playlist/${playlistId}`
              : `/player/${playlistId}/${videoId}`
          }
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircle color="primary" />
            <Typography variant="body2" color="primary" fontWeight={600}>
              {isPlaylist ? "Start Playlist" : "Start Tutorial"}
            </Typography>
          </Stack>
        </Button>

        <Stack direction={"row"}>
          {isPlaylist && (
            <IconButton
              className="delete-btn"
              sx={{
                display: "none",
                height: 40,
                "&:hover": {
                  "& .delete-icon": {
                    color: "red",
                  },
                },
              }}
              aria-label="remove playlist"
            >
              <DeleteIcon
                className="delete-icon"
                onClick={() => removePlaylist(playlistId)}
                color="primary"
              />
            </IconButton>
          )}

          {isPlaylist && (
            <IconButton aria-label="add to favorites">
              {favorites.some((fav) => fav?.playlistId === playlistId) ? (
                <FavoriteIcon
                  onClick={() => removeFromFavorites(playlistId)}
                  color="error"
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => {
                    addToFavorites(playlistId);
                    console.log(playlistId);
                  }}
                />
              )}
            </IconButton>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ListCardItem;
