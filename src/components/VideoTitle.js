import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-20 text-white 
                    bg-gradient-to-t from-black via-black/50 to-transparent z-10"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center max-w-3xl">
        {title}
      </h1>

      {/* Overview */}
      <p className="text-center py-4 text-sm sm:text-lg max-w-lg sm:max-w-2xl">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4 justify-center">
        <button
          className="bg-white text-black py-2 px-6 sm:px-8 text-base sm:text-xl rounded-md 
                           hover:bg-opacity-80 transition"
        >
          Play
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-6 sm:px-8 text-base sm:text-xl rounded-md 
                           bg-opacity-50 hover:bg-opacity-25 transition"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
