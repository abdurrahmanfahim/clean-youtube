import CommonListLayout from "../../components/common-list-layout";
import { useParams } from "react-router-dom";

const PlaylistItemPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const current = playlists[playlistId];

  if (!current) {
    return null;
  }

  return (
    <CommonListLayout 
      items={current.playlistItems} 
      isPlaylist={false} 
      playlistId={playlistId} 
    />
  );
};

export default PlaylistItemPage;
