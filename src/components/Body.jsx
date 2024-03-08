import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"; 
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //local State variable 
  let[listOfRestaurants,setListOfRestaurants]=useState(resList)
 
  //!nomal js variable
//  let listOfRestaurants =null
  //  let list =[]
  //    list=["fghj"]
  //    const list =[]
  //    list.push("fgh")
  //arry destructuring
  // const arr = useState()
  // const[listOfRestaurants,setListOfRestaurants]=arr
  // const listOfRestaurants =arr[0]  
  // const setListOfRestaurants =arr[1]

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic     
            const filteredList=listOfRestaurants.filter(res=>res.data.avgRating >3.5);
            setListOfRestaurants(filteredList)
            
            
          }}
        >
          Top Rated Restaurants
        </button>
        <button onClick={()=>setListOfRestaurants(resList)}>return:::</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
