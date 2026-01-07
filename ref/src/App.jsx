import { Container, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlaylistCardItem from "./components/list-card-item";
import Navbar from "./components/navbar";
import usePlaylist from "./hooks/usePlaylist";
import NotFound from "./pages/not-found";
import PlayerPage from "./pages/player-page";

const HomePage = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems={"stretch"}>
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2} key={item.playlistId}>
              <PlaylistCardItem
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
                playlistId={item.playlistId}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

function App() {
  const { playlists, error, getPlaylistById } = usePlaylist();

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
