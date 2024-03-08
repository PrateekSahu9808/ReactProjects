import React from "react";
import { CDN_URL } from "../utils/constants";
import {useDispatch} from 'react-redux'
import { addItem } from "../utils/cartSlice";

const ItemListOfAccordiant = ({ items }) => {
  // console.log(items);
  const dispatch=useDispatch()
  const handleAddItem=(item)=>{
    //dispatch an action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map(item => (
        <div data-testid='foodItems'
          key={item.card.info.id}
          className="flex justify-between p-2 m-2 text-left border-b-2 border-black"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span className="font-serif">{item.card.info.name}</span>
              <span> &#8377;{item.card.info.price}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
           
          <div className="absolute ">
          <button className="p-2 mt-16 ml-0 text-white bg-black rounded-lg shadow-lg" onClick={()=>handleAddItem(item)}>
              Add +
            </button>
          </div>
          <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListOfAccordiant;
