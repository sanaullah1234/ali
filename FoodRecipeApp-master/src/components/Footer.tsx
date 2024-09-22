import React from "react";
import Rectangle48 from "../assets/images/Rectangle48.png";
import Logo1 from "../assets/images/Logo1.png";



const Footer: React.FC = () => {
  return (
    <>
      <div
        className="w-[100%] flex text-white items-center justify-center lg:justify-start h-[200px]"
        style={{ backgroundImage: `url(${Rectangle48})`,
        backgroundSize:'cover'
       
     }}
      >
        <div className="w-[100%] flex flex-col items-center md:items-start
         md:ml-[100px]">
        <img src={Logo1} className="w-40"  />
        <p>All Rights Reserved </p>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
