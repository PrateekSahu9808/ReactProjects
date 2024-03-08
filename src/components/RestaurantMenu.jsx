import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu.js";
import RestaurantCategory from "./RestaurantCategory.jsx";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);
  const[showIndex,setShowIndex]=useState(null)

  if (resInfo === null) return <Shimmer />;
  const restaurantInfo = resInfo?.cards[0]?.card?.card?.info;

  if (!restaurantInfo) {
    return <p>No restaurant information available.</p>;
  }
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  //  console.log(categories);
   
  const { name, cuisines, costForTwoMessage } = restaurantInfo;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="text-center">
      <h1 className="my-10 text-5xl font-bold text-fuchsia-800">{name}</h1>
      <h2 className="text-lg font-bold">{cuisines.join(" ,")}</h2>
      <p className="font-serif">{costForTwoMessage}</p>
            
{/* accordiant */}
{/* controlled components */}
     {
      categories.map((category,index)=>
      <RestaurantCategory key={category?.card?.card.title}  data={category?.card?.card} showItems={index===showIndex ? true :false} setShowIndex={()=>setShowIndex(index)}/>)
     }
      
      {/* <h1>MENU</h1>
      <ul>
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name}- &#8377;{item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
