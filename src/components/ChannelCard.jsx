/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  return (
    <Link
      to={
        channel.channelId
          ? `channel/${channel.channelId}`
          : "https://www.youtube.com"
      }
    >
      <div className="pb-4 m-2 space-y-2">
        <div className="w-60">
          <img
            className="w-32 mx-auto rounded-full"
            src={channel?.thumbnail[0]?.url}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-center text-white">
            {channel.channelTitle}
          </h4>
          <div className="space-x-2 text-xs font-semibold text-center text-gray-500">
            <span>{channel.subscriberCount}</span>
            <span>.</span>
            <span>{channel.videoCount} videos</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
