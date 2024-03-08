import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredResturant,setFilteredRestaurants]=useState([])
  const[searchText,setSearchText]=useState("");

  
  useEffect(()=>{
   fetchData()
    
  },[])
 const fetchData=async ()=>{
  const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json= await data.json()
       setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
      restaurants)
      setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
        restaurants)
 
 }
 const onlineStatus=useOnlineStatus()
 if(onlineStatus ===false) return <h1>chek your internet</h1>
 

  return !listOfRestaurants || listOfRestaurants.length === 0 ? <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e)=>setSearchText(e.target.value) }/>
       
          <button onClick={()=>{
            const filteredRestaurant= listOfRestaurants.filter(res=>
              
                   
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                  
             )
             console.log(filteredRestaurant);
             setFilteredRestaurants(filteredRestaurant) ;
             
             
       
 
            
          }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = listOfRestaurants.filter(
              
              res => res.info.avgRating > 4.5 
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map(restaurant => (
   
          
                  // <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
                  <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
                  <RestaurantCard  resData={restaurant.info} />
                  </Link>
        ))}
      </div>
    </div>
  )
        }
export default Body;
