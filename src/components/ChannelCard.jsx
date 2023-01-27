/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <div>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="pb-4 m-2 space-y-2">
          <div className="w-60">
            <img
              className="w-32 mx-auto rounded-full"
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-center text-white">
              {channelDetail?.snippet?.title}
            </h4>
            <div className="space-x-2 text-xs font-semibold text-center text-gray-500">
              <span>{channelDetail?.statistics?.subscriberCount}</span>
              <span>.</span>
              <span>{channelDetail?.statistics?.videoCount} videos</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
