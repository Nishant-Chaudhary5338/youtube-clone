/** @format */

import React, { useEffect, useState } from "react";
import { getVideos } from "../Api";
import SideBar from "./SideBar";
import VideoRow from "./VideoRow";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const token = getVideos(`search?query=${selectedCategory}`);
    token.then((v) => {
      setVideos(v);
      console.log(v);
    });
  }, [selectedCategory]);

  return (
    <div className="flex h-screen bg-black border-t-2 border-gray-800">
      <SideBar
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />
      <div>
        <h4 className="pl-2 text-2xl font-bold text-white">
          {selectedCategory}
        </h4>
        <VideoRow videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
