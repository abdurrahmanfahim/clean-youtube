import { useContext } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';

export const usePlaylistContext = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylistContext must be used within PlaylistProvider');
  }
  return context;
};