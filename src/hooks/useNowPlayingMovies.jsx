import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const NowPlayingMovies = useSelector(store => store.movies.NowPlayingMovies);

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    // if(!NowPlayingMovies) getNowPlayingMovie()
    !NowPlayingMovies && getNowPlayingMovie();
  }, []);
};
export default useNowPlayingMovies;
