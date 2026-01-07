import React, { createContext } from 'react';
import usePlaylist from '../hooks/usePlaylist';

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const playlistData = usePlaylist();
  
  return (
    <PlaylistContext.Provider value={playlistData}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContext;