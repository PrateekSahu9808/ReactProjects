import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";

import { useContext, useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredResturant,setFilteredRestaurants]=useState([])
  const[searchText,setSearchText]=useState("");
  const RestaurantCardPromoted =withPromtedLabel(RestaurantCard)
 console.log(listOfRestaurants);
 const{setUserName,loggedInUser}=useContext(UserContext)
  
  useEffect(()=>{
   fetchData()
    
  },[])
 const fetchData=async ()=>{
  const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json= await data.json()
       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
      restaurants)
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
        restaurants)
 
 }
 const onlineStatus=useOnlineStatus()
 if(onlineStatus ===false) return <h1>chek your internet</h1>
 

  return !listOfRestaurants || listOfRestaurants.length === 0 ? <Shimmer/> :(
    <div className="body">
      <div className="flex items-center ">
        <div  className="p-4 m-4">
          <input type="text" className="border border-black " value={searchText} 
          onChange={(e)=>setSearchText(e.target.value) }/>
           </div>
          <div  className="p-4 m-4 ">
          <button className="p-4 px-4 py-1 my-2 bg-green-200 rounded-sm"
           onClick={()=>{
            const filteredRestaurant= listOfRestaurants.filter(res=>
              
                   
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                  
             )
             console.log(filteredRestaurant);
             setFilteredRestaurants(filteredRestaurant) ;
             
             
       
 
            
          }}>search</button>
          </div>
         
       
         <div>
         <button
          className="items-center px-4 py-2 rounded-lg bg-slate-400"
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
         <div className="p-1 m-4">
          <label htmlFor="">User name:</label>
          <input type="text" className="border border-black " value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
         </div>
      </div>
      <div className="flex flex-wrap justify-center align-middle">
        {filteredResturant.map(restaurant => (
   
          
                  // <RestaurantCard key={restaurant.info.id}  resData={restaurant} />

                
                  <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
                      {
                    restaurant?.info?.isOpen

                ? <RestaurantCardPromoted resData={restaurant.info}/>:<RestaurantCard  resData={restaurant.info} />
                  }
                  
                  </Link>
        ))}
      </div>
    </div>
  )
        }
export default Body;
