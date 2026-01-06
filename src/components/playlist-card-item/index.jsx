import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { PlayCircle } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ListCardItem = ({ thumbnail, title, channelTitle, id, isPlaylist }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <CardMedia component="img" image={thumbnail.url} alt={title} />
      <CardContent>
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          {title.length > 65 ? title.substr(0, 65) + "..." : title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteOutlined />
        </IconButton> */}

        <Button to={`/player/${id}`} component={Link}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircle color="primary" />
            <Typography variant="body2" color="primary" fontWeight={600}>
              {isPlaylist ? "Start Playlist" : "Start Tutorial"}
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ListCardItem;
