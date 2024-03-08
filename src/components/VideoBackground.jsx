import React, { useEffect, useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {  
  
  
  // const [trailerId,setTrailerId]=useState(null)
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

  useMovieTrailer(movieId); 
  if (!trailerVideo) return
  return <div className="w-screen">
    <iframe  className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerVideo.key+"?&autoplay=1&mute=1"} 
     title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;  picture-in-picture; " ></iframe>
  </div>;
};

export default VideoBackground;
