import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video p-28 absolute inset-0 flex flex-col justify-center items-center 
                 text-white bg-gradient-to-t from-black via-black/50 to-transparent z-10 px-4 sm:px-6"
    >
      {/* Title */}
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-3xl">
        {title}
      </h1>

      {/* Overview */}
      <p className="text-center py-2 hidden sm:block sm:py-4 text-xs xs:text-sm sm:text-lg max-w-xs sm:max-w-2xl">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 mt-2 sm:mt-4">
        <button
          className="bg-white text-black py-1 xs:py-2 px-4 xs:px-6 sm:px-8 text-sm xs:text-base sm:text-lg rounded-md 
                     hover:bg-opacity-80 transition"
        >
          <div className="flex justify-center items-center gap-2">
            <FaPlay />
            <div>Play</div>
          </div>
        </button>
        <button
          className="bg-gray-500 text-white py-1 xs:py-2 px-4 xs:px-6 sm:px-8 text-sm xs:text-base sm:text-lg rounded-md 
                     bg-opacity-50 hover:bg-opacity-25 transition"
        >
          <div className="flex justify-center items-center gap-2">
            <CiCircleInfo />
            <div>More Info</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
