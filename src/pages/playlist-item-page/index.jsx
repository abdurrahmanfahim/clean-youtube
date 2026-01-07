import { Container, Grid } from "@mui/material";
import ListCardItem from "../../components/list-card-item";

const PlaylistItemPage = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems={"stretch"}>
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2} key={item.playlistId}>
              <ListCardItem
                thumbnail={item.playlistThumbnail}
                title={item.playlistTitle}
                channelTitle={item.channelTitle}
                id={item.playlistId}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PlaylistItemPage;
