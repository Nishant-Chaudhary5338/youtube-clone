/** @format */

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI, getVideos } from "../utils/Api";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const token = getVideos(`channels?part=snippet&id=${id}`);
    token.then((v) => {
      setChannelDetail(v);
      console.log(v);
    });
    const video = fetchFromAPI(
      `search?channelID=${id}&part=snippet&order=date`
    );
    video.then((v) => {
      setVideos(v);
      console.log(v);
    });
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div className="z-10 bg-yellow-500 h-72"></div>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
