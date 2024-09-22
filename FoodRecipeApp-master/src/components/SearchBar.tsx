import React from "react";
import searchIcon from "../assets/images/searchIcon.png";

const SearchBar: React.FC = () => {
  return (
    <nav
      className="w-[100%] p-4 flex items-center  
       "
    >
      <div className="flex md:flex-row flex-col md:space-x-4 w-full">
        <div className="md:w-[70%] text-md md:text-2xl font-semibold py-[10px]">
          <div className="w-[100%] bg-white h-[50px] flex border rounded-full md:space-x-8">
            <div className="w-fit text-nowrap flex items-center p-4 rounded-full border border-gray-300 bg-[#D0C5C5] md:w-[500px]">
              All Categories
            </div>

            <input
              type="text"
              className="p-2 w-full placeholder:font-semibold md:placeholder:text-2xl outline-none"
              placeholder="Search"
            />

            <button className="flex justify-center items-center bg-[#D0C5C5] text-white rounded-full w-[100px]">
              <img src={searchIcon} className="w-[26px] h-[26px]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
