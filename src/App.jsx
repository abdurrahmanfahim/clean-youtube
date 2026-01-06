import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/navbar";
import usePlaylist from "./hooks/usePlaylist";
import PlayerPage from "./pages/player-page";
import NotFound from "./pages/not-found";
import HomePage from "./pages/home-page";


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
