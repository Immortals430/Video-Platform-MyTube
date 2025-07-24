import axios from "axios";
const YOUTUBE_APIKEY = process.env.YOUTUBE_APIKEY || "";

export const fetchYoutubeVideos = async (searchQuery: string) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${YOUTUBE_APIKEY}&type=video`
  );

  return response.data.items
};
