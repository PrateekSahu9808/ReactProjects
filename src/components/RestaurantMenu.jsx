import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import {MENU_URL} from "../utils/constants.js"
const RestaurantMenu = () => {
    const [resInfo,setResInfo]=useState(null);
    const{resId}=useParams()
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu=async()=>{
        const data= await fetch (MENU_URL+resId)
        const json = await  data.json()
        // console.log(json);
        console.log(json.data);
        
        setResInfo(json.data)
    }
    //for showing the menu list
    //  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards[0]?.card?.info?.name)
       
     
      if(resInfo=== null) return <Shimmer/>  
    const restaurantInfo = resInfo?.cards[0]?.card?.card?.info;
    
    if (!restaurantInfo) {
        return <p>No restaurant information available.</p>;
    }

    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = restaurantInfo;
    const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
    //  const {name,cuisines,cloudinaryImageId,costForTwoMessage}=  resInfo?.cards[0]?.card?.card?.info;
  return (
    <div className="menu">
    {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> */}
       <h1>{name}</h1> 
     <h2>{cuisines.join(" ,")}</h2>
    <p>{costForTwoMessage}</p> 
    <h1>MENU</h1>
    <ul>
              {
            itemCards.map(item=>
              
                    <li key={item.card.info.id}>{item.card.info.name}- 
                     &#8377;{item.card.info.price/100}</li>
                
                 
            )
        }
    </ul>
  </div>
  )
};

export default RestaurantMenu;
