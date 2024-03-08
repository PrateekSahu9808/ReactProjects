import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector(store => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async movie => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for thr query" +
      searchText.current.value +
      "only give the name of five movies,comma separated like the example result given ahead . example Result:Gadar,Shole,Don,Golmaal,Koi Mil Gaya";
    const gptREsult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptREsult.choices?.[0]?.message?.content);
    const gptMovies = gptREsult.choices?.[0]?.message?.content.split(" ,");
    const data = gptMovies.map(movie => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(data);
    console.log(tmdbResult);
    dispatch(addGptMovieResult({movieName:gptMovies,movieResult:tmdbResult}));
     searchText.current.value = "";
  };
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={e => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[languageKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
