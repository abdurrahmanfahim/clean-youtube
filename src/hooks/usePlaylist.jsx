import { useEffect, useState } from "react";
import getPlaylist from "../api";
import storage from "../utils/storage";

const STORAGE_KEY = "cy__playlist__state";

const INIT_STATE = {
  playlists: {},
  recentPlaylists: [],
  favorites: [],
};

const usePlaylist = () => {
  const [state, setState] = useState(INIT_STATE);

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);
    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    if (state !== INIT_STATE) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlaylistById = async (playlistsId, refresh = false) => {
    if (state.playlists[playlistsId] && !refresh) {
      return;
    }

    setLoading(true);

    try {
      const playlist = await getPlaylist(playlistsId);
      setError("");
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistsId]: playlist,
        },
      }));
    } catch (error) {
      setError(error.response?.data?.error?.message || "Something went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (playlistsId) => {
    setState((prev) => ({
      ...prev,
      favorites: [prev, playlistsId],
    }));
  };

  const addToRecent = (playlistsId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [prev, playlistsId],
    }));
  };

  const getPlaylistByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favorites: getPlaylistByIds(state.favorites),
    recentPlaylists: getPlaylistByIds(state.recentPlaylists),
    error,
    loading,
    getPlaylistById,
    addToRecent,
    addToFavorites,
  };
};

export default usePlaylist;
