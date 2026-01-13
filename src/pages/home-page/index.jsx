import { useStoreState } from "easy-peasy";
import CommonListLayout from "../../components/common-list-layout";

const HomePage = ({ onAddPlaylist }) => {
  const { data } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(data);

  return (
    <CommonListLayout
      items={playlistArray}
      onAddPlaylist={onAddPlaylist}
      isPlaylist={true}
    />
  );
};

export default HomePage;
