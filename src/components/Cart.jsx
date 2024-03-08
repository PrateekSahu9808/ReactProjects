import {useSelector,useDispatch} from 'react-redux'
import React from "react";
import ItemListOfAccordiant from './ItemListOfAccordiant';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems= useSelector((store)=>store.cart.items)
    console.log(cartItems);
    const dispatch=useDispatch()
    let handleClearCart=()=>{
        dispatch(clearCart())
    }
  return <div className="p-4 m-4 text-center ">
    <h1 className="text-2xl font-bold">Cart</h1>
     <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 text-white bg-black rounded-lg' onClick={handleClearCart}>Clear cart</button>
        {cartItems.length===0  && <h1>no items Here...</h1>}
        <ItemListOfAccordiant items={cartItems} />
     </div>
  </div>;
};

export default Cart;
