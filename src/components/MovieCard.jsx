import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return <div className="w-60 pr-4 ">
    <img src={IMG_CDN_URL+posterPath} alt="card image" />
  </div>;
};

export default MovieCard;
