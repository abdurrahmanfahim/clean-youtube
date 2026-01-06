import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import usePlaylist from "./hooks/usePlaylist";
import PlaylistCardItem from "./components/playlist-card-item";
import { Container, Grid, Typography } from "@mui/material";

const HomePage = ({playlistArray}) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems={"stretch"}>
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2}>
              <PlaylistCardItem
                key={item.id}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const NotFound = () => {
  return (
    <Container maxWidth={'lg'} sx={{my: 16}}>
      <Typography variant="h2" >404 | Page not found</Typography>
    </Container>
  )
}

function App() {
  const { playlists, error, getPlaylistById } = usePlaylist();

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
