import React, { useEffect } from "react";
import Header from "./Header";

import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMOvies from "../hooks/usePopularMOvies";
import Main from "./Main";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGptSearch= useSelector(store=>store?.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMOvies()
  return <div>
    <Header/>
   {
    showGptSearch ? (<GPTSearch/>) :(<><Main/>
    <SecondaryConatiner/></>)
   } 
    
  </div>;
};

export default Browse;
