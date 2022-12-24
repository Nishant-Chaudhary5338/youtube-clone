/** @format */

import { Category } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((c) => (
        <button
          onClick={() => setselectedCategory(c.name)}
          style={{ background: c.name === selectedCategory && "#FC1503" }}
          className="text-white space-x-4 my-1 mx-4  flex items-center rounded-2xl p-2 hover:bg-[#FC1503]"
          key={c.name}
        >
          <span
            className=""
            style={{ color: c.name === selectedCategory ? "white" : "red" }}
          >
            {c.icon}
          </span>
          <span style={{ opacity: c.name === selectedCategory ? "1" : "0.8" }}>
            {c.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
