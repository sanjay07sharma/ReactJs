import { CDN_URL } from "../utils/constants";
export const RestrauntMenuCategory = (menu) => {
    
  return ([...(menu.menu)].map((item, index) => {
    if (item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
      return (
        <div key={index} className="flex flex-wrap justify-center">
          {
            <div className="font-bold text-xl mb-2 item-category p-4">
              <div className="border border-solid rounderd shadow-sm">{item.card.card.title}</div>
                <div className="flex flex-wrap p-4">
                    {
                        item.card.card.itemCards.map((itemCard, index) => {
                        return (
                            <div key={index} className="m-4 p-4 bg-white rounded shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-gray-300">
                                    <p className="text-gray-700 text-base p-4">{itemCard.card.info.description}</p>
                                    <img className="w-full p-4" src={CDN_URL + itemCard.card.info.imageId} alt={itemCard.card.info.name} />
                                    <p className="text-gray-700 text-base p-2">{itemCard.card.info.name}</p>
                                    <p className="font-bold text-xl">Price: Rs. {itemCard.card.info.price / 100}</p>
                                    <button className="m-4 p-2 border-spacing-1 rounded-lg bg-green-300" onClick={ () => console.log("add item to plate and update on card")}>Add to Plate</button>

                            </div>
                        );
                    })
                    }
                </div>
            </div>
          }
        </div>
      );
    }
  }));

};
