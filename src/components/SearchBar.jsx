/** @format */

import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center px-1 space-x-1 border border-gray-800 rounded-sm">
      <input
        className="rounded-lg "
        type="text"
        value={value}
        onChange={onChange}
      />
      <span className="p-2 bg-gray-800 border border-black">
        <BsSearch color="red" />
      </span>
    </div>
  );
};

export default SearchBar;
