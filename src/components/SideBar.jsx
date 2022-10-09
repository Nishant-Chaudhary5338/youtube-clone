/** @format */

import React from "react";
import { videoCategories } from "../utils/constants";

const SideBar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <div className="hidden w-40 border-r-2 border-gray-800 sm:block">
      {videoCategories.map((v) => (
        <div
          key={v.name}
          onClick={() => setselectedCategory(v.name)}
          style={{ background: v.name === selectedCategory && "#FC1503" }}
          className="px-4 py-2 space-x-4 rounded-2xl hover:bg-gray-800"
        >
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
