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
import { useTheme } from "../../hooks/useTheme";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStoreActions, useStoreState } from "easy-peasy";

const ListCardItem = ({
  thumbnail,
  title,
  channelTitle,
  playlistId,
  videoId,
  isPlaylist,
}) => {
  const { darkMode } = useTheme();

  const { items } = useStoreState((state) => state.favorites);
  const { addToFavorite, removeFromFavorite } = useStoreActions(
    (actions) => actions.favorites
  );
  const { removePlaylist } = useStoreActions(
    (actions) => actions.playlists
  );

  console.log(playlistId)

  const handleDelete = (id) => {
    removePlaylist(id)
    removeFromFavorite(id)
  }

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
        },
      }}
    >
      <CardMedia component="img" image={thumbnail?.url} alt={title} />
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
              sx={{
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
                onClick={() => handleDelete(playlistId)}
                color="primary"
              />
            </IconButton>
          )}

          {isPlaylist && (
            <IconButton aria-label="add to favorites">
              {items.includes(playlistId) ? (
                <FavoriteIcon
                  onClick={() => removeFromFavorite(playlistId)}
                  
                  color="error"
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => {
                    console.log(playlistId);
                    addToFavorite(playlistId);
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
