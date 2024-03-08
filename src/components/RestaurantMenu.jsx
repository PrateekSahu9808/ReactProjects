import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestrauntMenu from "../utils/useRestrauntMenu.js";
const RestaurantMenu = () => {
    const{resId}=useParams()
    const resInfo =useRestrauntMenu(resId)
        
     
      if(resInfo=== null) return <Shimmer/>  
    const restaurantInfo = resInfo?.cards[0]?.card?.card?.info;
    
    if (!restaurantInfo) {
        return <p>No restaurant information available.</p>;
    }

    const { name, cuisines,
      costForTwoMessage } = restaurantInfo;
    const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
  return (
    <div className="menu">
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
