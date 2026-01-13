import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/navbar";
import PlayerPage from "./pages/player-page";
import NotFound from "./pages/not-found";
import HomePage from "./pages/home-page";
import PlaylistItemPage from "./pages/playlist-items-page";
import FavoritesPage from "./pages/favorites-page";
import { CustomThemeProvider } from "./contexts/ThemeContext";

function App() {
  const navbarRef = useRef();

  const handleAddPlaylist = () => {
    navbarRef.current?.openModal();
  };

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        <Navbar ref={navbarRef} />
        <Routes>
          <Route
            path="/"
            element={<HomePage onAddPlaylist={handleAddPlaylist} />}
          />
          <Route path="/playlist/:playlistId" element={<PlaylistItemPage />} />
          <Route path="/player/:playlistId/:videoId" element={<PlayerPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
