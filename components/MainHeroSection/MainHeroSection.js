import { useEffect, useState } from "react";

const MainHeroSection = () => {
  return (
    <div className="w-[100vw] h-[50vh] md:h-[80vh] lg:h-[100vh] bg-black absolute top-0 text-white">
      <div className="absolute pt-[90px] top-1/2 translate-y-[-50%] p-7 w-[100%] sm:w-[80%] max-w-[1200px] sm:left-1/2 sm:translate-x-[-50%]">
        <p className="montserrat font-400 text-[13px] sm:text-[15px] text-[#c6d9d8]">
          WELCOME TO MY WORLD
        </p>
        <h1 className="montserrat flex flex-col  text-[28px] sm:text-[35px] md:text-[45px] lg:text-[75px] font-bold">
          Hi, I'm Vishal Lohar
          <br />
          <div className="text-red-500 flex flex-col h-[45px] sm:h-[52px] md:h-[67px] lg:h-[112px] sm:text-[35px] md:text-[45px] lg:text-[75px] skills overflow-hidden">
            <span>Full Stack Developer</span>
            <span>WordPress Developer</span>
          </div>
        </h1>
        <h2 className="poppins text-[28px] sm:text-[35px] md:text-[45px] lg:text-[75px]">
          based in India.
        </h2>
      </div>
    </div>
  );
};

export default MainHeroSection;
