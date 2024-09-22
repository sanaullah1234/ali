import React from "react";
import Logo1 from "../assets/images/Logo1.png";

const Logo: React.FC = () => {
  return (
    <>
      <div className="w-[30%] ml-[20px] flex justify-center">
        <img src={Logo1} className="w-[160px] h-[55px] " />
      </div>
    </>
  );
};

export default Logo;
