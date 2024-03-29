import { getPlayer } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getPlayer();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (!song.is_playing) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  let device;

  if (song.device.name === 'iPhone') {
    device = 'Sarthak\'s AirPods Pro'
  } else {
    device = song.device.name
  }

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    device,
    isPlaying,
    songUrl,
    title
  });
};