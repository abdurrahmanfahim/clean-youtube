import { Container, Grid } from "@mui/material";
import ListCardItem from "../list-card-item";
import EmptyState from "../empty-state";

const CommonListLayout = ({ items, onAddPlaylist, isPlaylist = true, playlistId }) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {items.length > 0 ? (
        <Grid container justifyContent={'center'} alignItems={"stretch"}>
          {items.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2} key={item.playlistId || item.contentDetails?.videoId}>
              <ListCardItem
                thumbnail={isPlaylist ? item.playlistThumbnail : item.thumbnails}
                title={isPlaylist ? item.playlistTitle : item.title}
                channelTitle={item.channelTitle}
                playlistId={isPlaylist ? item.playlistId : playlistId}
                videoId={!isPlaylist ? item.contentDetails?.videoId : undefined}
                isPlaylist={isPlaylist}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        onAddPlaylist && <EmptyState onAddPlaylist={onAddPlaylist} />
      )}
    </Container>
  );
};

export default CommonListLayout;