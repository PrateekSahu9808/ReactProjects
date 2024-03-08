import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery =lazy(()=>import("./components/Grocery"))
const About =lazy(()=>import("./components/About"))

//authentication 
const AppLayout = () => {
  const [userName,setUserName]=useState();
  useEffect(()=>{
 //make a api call and send username and password 
 const data={name:"prateek"}
 setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
     <Outlet/>
    </div>
    </UserContext.Provider>
  );
};
const appRouter=createBrowserRouter(
[
  {
    path:"/",
    element:<AppLayout/>,
      errorElement:<Error/>,
    children:[
          {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1> About is loading</h1>}><About/></Suspense>
      },{
        path:'/contact',
        element:<Contact/>
      },{
        path:'/grocery',
        element:<Suspense fallback={<h1> grocery is loading</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ]
  }
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
