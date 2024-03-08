import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);

  const dispatch = useDispatch();
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const searchCache = useSelector(store=>store.search)
  useEffect(() => {
    //make an api call after every key press
    //but if the difference between 2 api calls is less <200ms i should decline the ap call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2  shadow-md">
      <div className="flex col-span-1 gap-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="burger"
        />

        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="logoimg"
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-600 p-2 
        rounded-l-full"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-500 py-2 px-4 rounded-r-full bg-slate-200">
            search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[38rem] rounded-lg shadow-lg border-gray-200">
            <ul>
              {suggestion.map(s => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          src="https://cdn-icons-png.freepik.com/256/3033/3033143.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
