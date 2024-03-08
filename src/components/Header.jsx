import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  // const[btnName,setBtnNAme]=useState(true)
   const[btnNameReact,setBtnNameReact]=useState("login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="food"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
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