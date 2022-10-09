/** @format */

import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const VideoRow = ({ videos }) => {
  return (
    <div>
      {videos.map((item, idx) => (
        <div className="flex flex-wrap justify-start" key={idx}>
          {item.videoId && <VideoCard video={item} />}
          {item.channelId && <ChannelCard ChannelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default VideoRow;
