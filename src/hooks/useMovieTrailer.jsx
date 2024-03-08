import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  console.log(movieId);
    
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
  //fetch trailer video && updating the store with trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US"
        ,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    
    // console.log(json.results[9]);
    const filterData = json.results.filter(video => video.type === "Trailer");
    //  console.log(filterData[0]);


    // // setTrailerId(trailer[0].key);
    dispatch(addTrailerVideo(filterData[0]));
  };
};

export default useMovieTrailer;
