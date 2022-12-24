/** @format */

import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getVideos } from "../utils/Api";
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
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
        <h4 className="font-semibold text-white">{selectedCategory}</h4>
        <VideoRow videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
