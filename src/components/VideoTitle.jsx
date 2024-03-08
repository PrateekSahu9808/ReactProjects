import React from "react";

const VideoTitle = ({title,overview}) => {
  return <div className=" px-36 absolute pt-[20%]  text-white bg-gradient-to-r from-black w-screen aspect-video">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div >
    <button className="border bg-gray-300 p-4 px-12 text-lg rounded-md bg-opacity-20 hover:bg-opacity-50">▶️ Play</button>
    <button className="border bg-gray-300 p-4 px-12 text-lg rounded-md bg-opacity-20 hover:bg-opacity-50 mx-7">ℹ️ MoreInfo</button>
    </div>
  </div>;
};

export default VideoTitle;
