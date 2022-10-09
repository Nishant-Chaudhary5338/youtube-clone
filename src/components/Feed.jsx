/** @format */

import React, { useEffect, useState } from "react";
import { getVideos } from "../Api";
import SideBar from "./SideBar";
import VideoRow from "./VideoRow";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("Trending");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const token = getVideos(`search?query=${selectedCategory}`);
    token.then((v) => {
      setVideos(v);
      console.log(v);
    });
  }, [selectedCategory]);

  return (
    <div className="flex bg-black border-t-2 border-gray-800 h-100vh">
      <SideBar
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />
      <div>
        <h4 className="pl-2 text-2xl font-bold text-white">
          {selectedCategory}
        </h4>
        <div className="mx-10">
          <VideoRow videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
