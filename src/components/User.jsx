import {useEffect, useState} from "react"
const User=(props)=>{
    const[count ,setCount] =useState(0)
    const[count2 ,setCount2] =useState(1)
    useEffect(()=>{
  const timer=setInterval(()=>{
    console.log("useEffect react ");
    },1000)
    return()=>{
        clearInterval(timer)
        console.log("use effect return");
        
    }
    },[])
    
    //[count])  useEffect(()=>{

    // },[count2])
    return(
        <>
         <div className="user-card">
            <h1>Function based</h1>
            <h1> count:{count}</h1>
            <h1> count2:{count2}</h1>
            <h2 >Name:{props.name}</h2>
            <h3>Location</h3>
            <h4>Contact</h4>
            </div>        
        </>
    )
}
export default User;