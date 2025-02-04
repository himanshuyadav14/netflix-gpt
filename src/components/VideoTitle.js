import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 px-20 absolute text-white bg-gradient-to-tr from-black aspect-video w-screen">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-8 text-xl rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-8 text-xl rounded-md bg-opacity-50 hover:bg-opacity-25">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
