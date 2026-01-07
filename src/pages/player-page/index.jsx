import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ListCardItem from "../../components/playlist-card-item";

const PlayerPage = ({ playlists }) => {
  const { videoId, playlistId } = useParams();
  console.log(videoId, playlists);

  const current = playlists[playlistId].playlistItems.filter(
    (item) => item.contentDetails.videoId === videoId
  );

  const { contentDetails, description, thumbnails, title } = current[0];

  console.log("obj", title);
  console.log("current -->", current);
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Card sx={{ margin: "0 auto" }}>
        <Box
          sx={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            marginBottom: '24px'
          }}
        >
          <CardMedia
            component="iframe"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Card>

      <Typography variant="h5">{title}</Typography>
      <Typography variant="caption" color="info">
        {contentDetails.videoPublishedAt}
      </Typography>
      <Typography variant="body2" color="textDisabled">
        {description}
      </Typography>
    </Container>
  );
};

export default PlayerPage;
