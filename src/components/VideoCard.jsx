/** @format */

import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <div className="pb-4 m-2 space-y-2 w-60">
        <div className="w-60">
          <img
            src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
          />
        </div>
        <div className="flex px-1 space-x-2">
          <h5 className="text-xs text-white">{snippet?.title}</h5>
        </div>
        <div className="text-xs text-gray-500 ">
          <span className="block">{snippet?.channelTitle}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
