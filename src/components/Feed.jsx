/** @format */

import { Box, Stack } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
        <h4 className="font-semibold text-white">Videos</h4>
      </Box>
    </Stack>
  );
};

export default Feed;
