import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt=""
          style={{ width: "100%" }}
          className="h-[150vh] "
        />
      </div>
      <div className="md:pt-[30%]" >  <GptSearchBar />
      <GptMovieSuggestions /></div>
     
    </div>
  );
};

export default GPTSearch;
