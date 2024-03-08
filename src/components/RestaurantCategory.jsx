import React, { useState } from "react";
import ItemListOfAccordiant from "./ItemListOfAccordiant";


const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  const handleClick =()=>{
    setShowIndex()
  }
  return <div>
    <div className="w-6/12 p-4 m-auto my-2 bg-gray-200 shadow-lg ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="font-bold">{data.title}({data.itemCards.length})</span>
        <span>⬇️</span>
      </div>
        <div>
            {
                showItems &&<ItemListOfAccordiant items={data.itemCards}/>
            }
        
        </div>
    </div>

  </div>;
};

export default RestaurantCategory;
