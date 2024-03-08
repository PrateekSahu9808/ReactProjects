
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addNowPlayingMovies, addPopularMovies } from '../utils/moviesSlice';

const usePopularMOvies=()=>{
    const dispatch= useDispatch()

const popularMovies= useSelector(store=>store.movies.popularMovies)
  useEffect(()=>{
  !popularMovies && getPopularMovie()
  },[])

  const getPopularMovie=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS)
    const json= await data.json();
    // console.log(json?.results);
    dispatch(addPopularMovies(json?.results))
   
  }
}
export default usePopularMOvies;