import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72">
      <img src={thumbnails.medium.url} alt="" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-slate-500">{channelTitle}</li>
        <li className="text-slate-500">Views: {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
