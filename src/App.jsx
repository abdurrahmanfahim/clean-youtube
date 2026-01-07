import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/navbar";
import PlayerPage from "./pages/player-page";
import NotFound from "./pages/not-found";
import HomePage from "./pages/home-page";
import PlaylistItemPage from "./pages/playlist-items-page";
import FavoritesPage from "./pages/favorites-page";
import { CustomThemeProvider } from './contexts/ThemeContext';
import { PlaylistProvider } from './contexts/PlaylistContext';
import { usePlaylistContext } from './hooks/usePlaylistContext';

function AppContent() {
  const { playlists, getPlaylistById } = usePlaylistContext();
  const playlistArray = Object.values(playlists);
  const navbarRef = useRef();

  const handleAddPlaylist = () => {
    navbarRef.current?.openModal();
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar ref={navbarRef} getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} onAddPlaylist={handleAddPlaylist} />} />
        <Route
          path="/playlist/:playlistId"
          element={<PlaylistItemPage playlists={playlists} />}
        />
        <Route
          path="/player/:playlistId/:videoId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const App = () => (
  <CustomThemeProvider>
    <PlaylistProvider>
      <AppContent />
    </PlaylistProvider>
  </CustomThemeProvider>
);

export default App;
