import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"
const Header = () => {
  // const[btnName,setBtnNAme]=useState(true)
   const[btnNameReact,setBtnNameReact]=useState("login")
const onlineStatus=useOnlineStatus()
const {loggedInUser}= useContext(UserContext)
//Subscribing to the store by using store
const cartItems =useSelector((store)=>store.cart.items)
// console.log(cartItems);

    return (
      <div className="flex justify-between px-3 border shadow-md border-black-700">
        <div className="logo-container">
          <img
            className="w-24"
            src={LOGO_URL}
            alt="food"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4 ">
            <li>
              online status:{onlineStatus ? "✅" :"❌"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
            <Link to="/contact">Contact us</Link>
              
            </li>
            <li>
            <Link to="/grocery" className="font-serif font-bold">{loggedInUser}</Link>
              
            </li>
            <li className="text-xl font-bold">
              <Link to="/cart">Cart ({cartItems.length} items)</Link></li>

            
            {/* <button className="login" onClick={()=>{setBtnNAme(!btnName)}}>{btnName ? "Login" :"Logout"}</button> */}
            <button onClick={()=>{
              btnNameReact ==="login"? setBtnNameReact("Logout") :setBtnNameReact("login")
            }}>{btnNameReact}</button>
            
          </ul>
        </div>
      </div>
    );
  };
export default Header;