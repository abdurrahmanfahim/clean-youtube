import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { FavoriteOutlined, PlayCircle } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
}) => {
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
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          {playlistTitle.length > 65
            ? playlistTitle.substr(0, 65) + "..."
            : playlistTitle}
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

        <Button>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircle color="primary" />
            <Typography variant="body2" color="primary" fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
