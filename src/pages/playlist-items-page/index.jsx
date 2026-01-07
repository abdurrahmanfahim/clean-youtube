import React from "react";
import { useParams } from "react-router-dom";
import { CardMedia, Container, Grid, Typography } from "@mui/material";
import ListCardItem from "../../components/playlist-card-item";

const PlaylistItemPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const current = playlists[playlistId];

  const playlistItemArray = current.playlistItems;

  if (!current) {
    return;
  }
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playlistItemArray.length > 0 && (
        <Grid container alignItems={"stretch"}>
          {playlistItemArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2} key={item.playlistId}>
              <ListCardItem
                thumbnail={item.thumbnails}
                title={item.title}
                channelTitle={item.channelTitle}
                playlistId={playlistId}
                videoId={item.contentDetails.videoId}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PlaylistItemPage;
