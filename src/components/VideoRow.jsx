/** @format */

import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const VideoRow = ({ videos }) => {
  return (
    <div className="flex flex-wrap justify-start">
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default VideoRow;
