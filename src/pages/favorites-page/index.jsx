import CommonListLayout from "../../components/common-list-layout";
import { usePlaylistContext } from "../../hooks/usePlaylistContext";

const FavoritesPage = () => {
  const { favorites } = usePlaylistContext();
  const playlistArray = Object.values(favorites);

  return (
    <CommonListLayout 
      items={playlistArray} 
      isPlaylist={true} 
    />
  );
};

export default FavoritesPage;
