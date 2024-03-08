import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  // const gpt=useSelector(store=>store.gpt);
  // const{movieResults,movieNames}=gpt
  const { movieResults, movieNames } = useSelector(store => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="m-4 p-4 bg-black text-white bg-opacity-70">
      {movieNames.map((movieName,index) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
