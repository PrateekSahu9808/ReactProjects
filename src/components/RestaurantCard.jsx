import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({resData}) => {
 console.log(resData);
 
  const {loggedInUser}=useContext(UserContext)
    // const { resData } = props;
    //const {cloudinaryImageId,name,cuisines,avgRating,sla,availability,badges}=resData;.info
  const {cloudinaryImageId,name,cuisines,avgRating,sla,availability,badges,costForTwo}=resData;
  
   
    
   
    return (
      <>
            
         
        <div data-testid='resCard' className="p-4 m-4 rounded-md w-60 bg-slate-100 hover:bg-red-100">
              <img
                className="rounded-lg"
                src={CDN_URL
                   +
                    cloudinaryImageId
                }
                alt=""
              />
  
              <h3 className="font-bold">{name}</h3>
               <h4>cuisines:{cuisines.join(" , ")}</h4>
              <h4>Rating:⭐{avgRating}</h4>
              <h4>Delivery time:{sla.deliveryTime} mins</h4> 
              <h4>{costForTwo}</h4>
              <h4>Next closing time :{availability.nextCloseTime}</h4>
              <h1>{loggedInUser}</h1>
              <h1>opened:{availability.opened && <p>YES</p> }</h1>
              {badges?.textExtendedBadges?.map((badge, index) => (
         <li key={index}>
         <img src={badge.iconId} alt={`Badge ${index}`} />
         <p>{badge.shortDescription}</p>
         <span style={{ color: badge.fontColor }}>jaldi aao khana khatam ho jayega</span>
       </li>
        ))}

            </div> 
  
     
      </>
    );
  };
  
  //!higher order components
  //& input-RestaurantCard->> promoted one

  export const withPromtedLabel=(RestaurantCard)=>{
         return(props)=>{
          return (
            <div>
              <label className="absolute p-2 m-2 text-white bg-black rounded-lg"> promoted</label>
              <RestaurantCard {...props}/>
            </div>
          )
         }
    
  }

  export default RestaurantCard;