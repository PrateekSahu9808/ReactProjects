import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import {toggleGptSearchView} from "../utils/gptSlice" 
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
const navigate= useNavigate()
const dispatch= useDispatch()
  const user= useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
 const handleSignOut=()=>{
  signOut(auth).then(() => {
  }).catch((error) => {
     navigate("/error")
  });
 }  

//  useEffect(()=>{
//   const unsubscribe=onAuthStateChanged(auth, (user) => {
//     if (user) {
//        const{uid,email,displayName,photoURL}=user
//        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
//       navigate("/browse")
//     } else {
//       // User is signed out
//       dispatch(removeUser())
//        navigate("/")
//     }
//   }) 
//   return ()=> unsubscribe()
// },[])
  const handleGptSearchClick=(e)=>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
     
  }
  return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between  ">
    <img 
    className="w-44 md:mx-0 mx-auto"
    src={LOGO} alt="logo" />
    {
      // user &&   
      <div className="flex p-2">
     {showGptSearch &&(   <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange}>
          {
            SUPPORTED_LANGUAGE.map((lang,i)=>
          <option key={i} value={lang.identifier}>{lang.name}</option>
          )
          }
        
        </select>)}
        <button className="py-2 px-4 m-2 bg-purple-700  rounded-md"
        onClick={handleGptSearchClick} 
        >{!showGptSearch ? "GPT SEARCH" :"Home"}   </button>
       
      <img src= {user?.photoURL} alt="useIcon"  className="w-12 h-12 "/>

      <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
    </div>
    }
  
  </div>
};

export default Header;
