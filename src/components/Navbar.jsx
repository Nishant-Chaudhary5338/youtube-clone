/** @format */

import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      className="p-2 sticky top-0 justify-between bg-black"
    >
      <Link className="flex items-center" to="/">
        <img className="h-10" src={logo} alt="" />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
};

export default Navbar;
