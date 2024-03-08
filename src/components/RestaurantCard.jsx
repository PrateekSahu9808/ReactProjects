import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

  
    // const { resData } = props;
    //const {cloudinaryImageId,name,cuisines,avgRating,sla,availability,badges}=resData;.info
  const {cloudinaryImageId,name,cuisines,avgRating,sla,availability,badges,costForTwo}=resData;
  
    
   
    return (
      <>
            
         
        <div className="res-card">
              <img
                className="res-logo"
                src={CDN_URL
                   +
                    cloudinaryImageId
                }
                alt=""
              />
  
              <h3>{name}</h3>
               <h4>cuisines:{cuisines.join(" , ")}</h4>
              <h4>Rating:⭐{avgRating}</h4>
              <h4>Delivery time:{sla.deliveryTime} mins</h4> 
              <h4>{costForTwo}</h4>
              <h4>Next closing time :{availability.nextCloseTime}</h4>
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

  export default RestaurantCard;