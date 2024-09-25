import { useState } from "react";
import { CDN_URL } from "../utils/constants";

export const RestrauntCard = ({ resData }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = resData;

  const [order, updateOrder] = useState([]);

  return (
    <div className="res-card m-4 p-4 w-[250px] l-[450px] rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <img className="res-logo rounded-lg w-full h-40 object-cover" src={CDN_URL + cloudinaryImageId} alt={name} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <h4 className="text-gray-600 mb-2">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center">
          <h4 className="text-yellow-500 font-semibold">{avgRating} ★</h4>
          <h4 className="text-gray-800">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};