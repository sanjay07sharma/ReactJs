import ItemList from "./ItemList";
export const RestrauntMenuCategory = (menu) => {
    
  return ([...(menu.menu)].map((item, index) => {
    if (item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
      return (
        <div>
            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray p-4 border border-solid rounderd shadow-lg">
              <div className=" flex justify-between">
                <span className="text-lg font-bold">{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</span>
                <span>⬇️</span>
              </div>
            <ItemList item={item?.card?.card?.itemCards} />
            </div>
            {/* Accordian Body Here*/}
        </div>
      );
    }
  }));

};
