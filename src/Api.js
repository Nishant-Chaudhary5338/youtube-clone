/** @format */
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "6aa46a3947msh16ef00bcf3c4794p1701f5jsn486f8e3b84fb",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getVideos = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const videos = response.data;
    return videos;
  } catch {
    console.log("fetching failed");
  }
};
