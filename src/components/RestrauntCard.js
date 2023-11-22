import { useState } from "react";
import { CDN_URL } from "../utils/constants";

export const RestrauntCard = (props) => {
  // can also use destructuring
  const { resData } = props; // what props here actually is {resName:"Sanjay Foods", cuisines:"Dosa, South Indian, Asia", stars:"4.4 stars", deliveryTime:"38 minutes delivery time"} for res casrd 1.
  const {
    id,
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = resData.info;

  const [order, updateOrder] = useState([]); // Try to store value of selected item and use it for card.
      // Todo: add item to plate and update on card

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-100">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 class="cuisines">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <button className="add_to_cart" onClick={ () => console.log("add item to plate and update on card")}>Add to Plate</button>
    </div>
  );
};
