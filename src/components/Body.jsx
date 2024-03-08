import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredResturant,setFilteredRestaurants]=useState([])
  const[searchText,setSearchText]=useState("");

  
 

  
  //!every key press whole components re render
  //!whenever state variable update,react triggers a reconcilation cycle(re render the components)

 
  
  useEffect(()=>{
   fetchData()
    
  },[])
 const fetchData=async ()=>{
  const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json= await data.json()
    console.log(json);
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
    restaurants);
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
      restaurants)
      setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
        restaurants)
    //  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
    // restaurants)
    // setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
    // restaurants)
  // setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.
  //   restaurants)
  
 }
//  if(listOfRestaurants.length=== 0){
//   return <Shimmer></Shimmer>
//  }

  return !listOfRestaurants || listOfRestaurants.length === 0 ? <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e)=>setSearchText(e.target.value) }/>
       
          <button onClick={()=>{
            const filteredRestaurant= listOfRestaurants.filter(res=>
              
                   
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    //  res.info.name.toLowerCase().includes(searchText)|| res.info.name.toUpperCase().includes(searchText)
                   
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
              res => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map(restaurant => (
   
          
                  // <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
                  <RestaurantCard key={restaurant.info.id}  resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
