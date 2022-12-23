/** @format */

import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
      }}
    >
      <input placeholder="Search" value="" onChange={() => {}} className="" />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search></Search>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
