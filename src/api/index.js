import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;
const isDev = import.meta.env.DEV;

const ALLOWED_HOSTS = ['www.googleapis.com'];
const YOUTUBE_PLAYLIST_ID_REGEX = /^[a-zA-Z0-9_-]{10,50}$/;
const YOUTUBE_PAGE_TOKEN_REGEX = /^[a-zA-Z0-9_-]*$/;

const validatePlaylistId = (playlistId) => {
  if (!playlistId || typeof playlistId !== 'string' || !YOUTUBE_PLAYLIST_ID_REGEX.test(playlistId)) {
    throw new Error('Invalid playlist ID format');
  }
};

const validatePageToken = (pageToken) => {
  if (pageToken && !YOUTUBE_PAGE_TOKEN_REGEX.test(pageToken)) {
    throw new Error('Invalid page token format');
  }
};

const buildSecureUrl = (endpoint, params) => {
  if (isDev) {
    const baseUrl = new URL('https://www.googleapis.com/youtube/v3/' + endpoint);
    baseUrl.searchParams.set('key', key);
    Object.entries(params).forEach(([key, value]) => {
      if (value) baseUrl.searchParams.set(key, value);
    });
    return baseUrl.toString();
  }
  
  const netlifyUrl = new URL('/.netlify/functions/youtube-api', window.location.origin);
  netlifyUrl.searchParams.set('endpoint', endpoint);
  Object.entries(params).forEach(([key, value]) => {
    if (value) netlifyUrl.searchParams.set(key, value);
  });
  return netlifyUrl.toString();
};

const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  validatePlaylistId(playlistId);
  validatePageToken(pageToken);
  
  const URL = buildSecureUrl('playlistItems', {
    part: 'contentDetails,snippet',
    maxResults: '50',
    playlistId,
    pageToken
  });

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playlistId) => {
  validatePlaylistId(playlistId);
  
  const URL = buildSecureUrl('playlists', {
    part: 'snippet',
    id: playlistId
  });

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
    playlistItems
  }
};

export default getPlaylist;
