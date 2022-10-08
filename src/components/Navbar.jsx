/** @format */

import React from "react";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between h-16 p-2 bg-black">
      <Link to="/" className="flex space-x-1">
        <BsYoutube color="red" size={30} />
        <h1 className="hidden text-xl font-bold text-white sm:block">
          YouTube
        </h1>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
