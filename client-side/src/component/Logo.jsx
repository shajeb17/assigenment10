import React from "react";
import Hlogo from "./Hlogo";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 select-none">
     <Hlogo></Hlogo>
      <h1 className="text-3xl font-extrabold tracking-wide bg-linear-to-r from-purple-500 to-[#00a9ff] bg-clip-text text-transparent">
        HabitTrack
      </h1>
    </div>
  );
};

export default Logo;
