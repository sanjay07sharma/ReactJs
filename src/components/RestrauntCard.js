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
  } = resData;

  const [order, updateOrder] = useState([]); // Try to store value of selected item and use it for card.
      // Todo: add item to plate and update on card
  return (
    <div className="res-card m-4 p-4 w-[250px] l-[450px] rounded-lg bg-gray-100 hover:w-[300px]">
      <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higher Order Components
