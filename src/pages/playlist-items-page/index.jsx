import { useStoreActions, useStoreState } from "easy-peasy";
import CommonListLayout from "../../components/common-list-layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PlaylistItemPage = () => {
  const { playlistId } = useParams();

  const { getPlaylist } = useStoreActions((actions) => actions.playlists);
  const { data, error, isLoading } = useStoreState((state) => state.playlists);

  const current = data[playlistId];

  useEffect(() => {
    if (!current) {
      getPlaylist(playlistId);
    }
  }, [playlistId, current, getPlaylist]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isLoading) {
    return <h1>{error}</h1>;
  }

  if (!current) {
    return <h1>Loading</h1>;
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
