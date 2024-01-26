import { useState } from "react";
import ItemList from "./ItemList";
export const RestrauntMenuCategory = (menu) => {
  const [showItem, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItem);
  }
    
  return ([...(menu.menu)].map((item, index) => {
    if (item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
      // FIXME: displays and closes the accordian at the same time.
      return (
        <div>
            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray p-4 border border-solid rounderd shadow-lg">
              <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-lg font-bold">{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</span>
                <span>⬇️</span>
              </div>
             {showItem && <ItemList item={item?.card?.card?.itemCards} />}
            </div>
        </div>
      );
    }
  }));

};
