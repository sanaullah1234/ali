import React, { useState } from "react";
import { MdLogin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isHamburger, setIsHamburger] = useState<boolean>(true);
  const hambrugerHandler = () => {
    setIsHamburger(!isHamburger);
  };
  return (
    <div
      className="w-[100%] sticky top-0 z-20 bg-black text-xl font-semibold text-white
     p-[16px]  shadow-xl"
    
    >
      <div className="block lg:hidden">
        {isHamburger && (
          <GiHamburgerMenu
            onClick={hambrugerHandler}
            className="text-2xl w-[40px] h-[40px]"
          />
        )}
      </div>

      <div className="hidden lg:flex justify-between w-full">
        <nav>
          <ul className="lg:flex lg:space-x-8">
            <li>Community</li>
            <li>Books</li>
            <li>Recipe Index</li>
            <li>Popular</li>
          </ul>
        </nav>
        <div className="lg:space-x-8 lg:flex">
          <a href="#" className="flex items-center gap-1">
            <MdLogin className="text-[#509E2F]" /> Register
          </a>
          <a href="#" className="flex items-center gap-1">
            <IoPerson className="text-[#509E2F]" /> Login
          </a>
        </div>
      </div>

      {!isHamburger && (
        <div className="lg:hidden sticky z-50 bg-black w-[100%] flex flex-col space-y-4 mt-4">
          <nav className="flex flex-col space-y-4">
            <RxCross1 onClick={hambrugerHandler} className="w-10 h-10 ml-auto" />
            <NavLink to="/Home">Community</NavLink>
            <NavLink to="/Home">Books</NavLink>
            <NavLink to="/Home">Recipe Index</NavLink>
            <NavLink to="/Home">Popular</NavLink>
          </nav>
          <div className="lg:flex lg:space-x-8 space-y-2">
            <a href="#" className="flex items-center gap-1">
              <MdLogin className="text-[#698a5b]" /> Register
            </a>
            <a href="#" className="flex items-center gap-1">
              <IoPerson className="text-[#509E2F]" /> Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
