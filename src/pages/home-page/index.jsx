import CommonListLayout from "../../components/common-list-layout";

const HomePage = ({ playlistArray, onAddPlaylist }) => {
  return (
    <CommonListLayout 
      items={playlistArray} 
      onAddPlaylist={onAddPlaylist} 
      isPlaylist={true} 
    />
  );
};

export default HomePage;
