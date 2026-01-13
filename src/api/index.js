import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;
const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `/api/youtube/v3/playlistItems?key=${key}&part=contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `/api/youtube/v3/playlists?key=${key}&part=snippet&id=${playlistId}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);

  const {
    channelId,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items?.[0]?.snippet || {};

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnails: medium,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.medium,
    channelId,
    channelTitle,
    playlistItems,
  };
};

export default getPlaylist;
