/** @format */

import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link
      to={video.videoId ? `video/${video.videoId}` : "https://www.youtube.com"}
    >
      <div className="pb-4 m-2 space-y-2 w-60">
        <div className="w-60">
          <img src={video?.thumbnail[0]?.url} alt="" />
        </div>
        <div className="flex px-1 space-x-2">
          <h5 className="text-xs text-white">{video?.title}</h5>
        </div>
        <div className="space-x-2 text-xs text-gray-500">
          <span>{video.channelTitle}</span>
          <span>.</span>
          <span>
            {video.viewCount && video.viewCount} views {video.publishedText}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
