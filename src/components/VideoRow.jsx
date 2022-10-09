/** @format */

import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const VideoRow = ({ videos }) => {
  return (
    <div className="flex flex-wrap justify-start">
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.type === "video" && <VideoCard video={item} />}
          {item.type === "channel" && <ChannelCard channel={item} />}
        </div>
      ))}
    </div>
  );
};

export default VideoRow;
