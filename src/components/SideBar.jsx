/** @format */

import React from "react";
import { videoCategories } from "../utils/constants";

const SideBar = () => {
  return (
    <div className="hidden w-40 border-r-2 border-gray-800 sm:block">
      {videoCategories.map((v) => (
        <div className="px-4 py-2 space-x-4 hover:bg-gray-800">
          <button className="flex items-center space-x-4">
            <span>{v.icon}</span>
            <span className="text-sm font-semibold text-white">{v.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
