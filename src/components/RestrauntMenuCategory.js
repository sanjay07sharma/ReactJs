import { useState } from "react";
import ItemList from "./ItemList";
export const RestrauntMenuCategory = ({menu}) => {
  const [showItem, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItem);
  }
  
  return (
    <div>
        {/* Accordian Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray p-4 border border-solid rounderd shadow-lg">
          <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="text-lg font-bold">{menu?.card?.card?.title}({menu?.card?.card?.itemCards?.length})</span>
            <span>⬇️</span>
          </div>
          {showItem && <ItemList item={menu.card.card.itemCards} />}
        </div>
    </div>
  );

};
