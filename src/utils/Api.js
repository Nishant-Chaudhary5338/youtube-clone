/** @format */

import axios from "axios";
const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  params: { geo: "US", lang: "en" },
  headers: {
    "X-RapidAPI-Key": "6aa46a3947msh16ef00bcf3c4794p1701f5jsn486f8e3b84fb",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const getVideos = async (q) => {
  try {
    const response = await axios.get(`${BASE_URL}/${q}`, options);
    const videos = response.data.data;
    return videos;
  } catch {
    console.log("fetching failed");
  }
};

const BASE_URL_2 = "https://youtube-v31.p.rapidapi.com";
const options2 = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "6aa46a3947msh16ef00bcf3c4794p1701f5jsn486f8e3b84fb",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL_2}/${url}`, options2);

  return data;
};
