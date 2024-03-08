import React, { useState } from "react";
import Button from "./Button";
const list=["All","Game","Songs","Soccers","Crickets","News","Cookings","valentines","Chess","Dj"]
const ButtonList = () => {
  return (
    <div className="flex gap-1">

      {
        list.map((name, i)=>{
          return <Button key={i} name={name} />
        })
      }
     
 
    </div>
  );
};

export default ButtonList;
