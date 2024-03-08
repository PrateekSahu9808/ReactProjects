import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const[onlineSatus,setOnlineStatus]=useState(true);
      useEffect(()=>{
        window.addEventListener("offline",()=>{
          setOnlineStatus(false)
        })  
         window.addEventListener("online",()=>{
          setOnlineStatus(true)
        })
      },[])


    //boolean value
    return onlineSatus;


}
export default useOnlineStatus;