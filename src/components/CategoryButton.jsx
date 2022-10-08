/** @format */

import React from "react";

const CategoryButton = ({ icon, name }) => {
  return (
    <div className="flex items-center px-2 py-2 space-x-4 hover:bg-gray-800">
      <span>{icon}</span>
      <button className="text-sm font-semibold text-white">{name}</button>
    </div>
  );
};

export default CategoryButton;
