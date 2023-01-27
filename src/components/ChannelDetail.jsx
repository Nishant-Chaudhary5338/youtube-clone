/** @format */

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI, getVideos } from "../utils/Api";
import ChannelCard from "./ChannelCard";
import VideoRow from "./VideoRow";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const token = fetchFromAPI(`channels?part=snippet&id=${id}`);
    token.then((v) => {
      setChannelDetail(v?.items[0]);
      console.log(v?.items[0]);
    });
    const video = fetchFromAPI(
      `search?channelID=${id}&part=snippet&order=date`
    );
    video.then((v) => {
      setVideos(v?.items);
      console.log(v?.items);
    });
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div className="z-10 bg-yellow-500 h-72">
          <ChannelCard channelDetail={ChannelDetail} />
        </div>
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }}></Box>
        <VideoRow videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
