import { CDN_URL } from "../utils/constants";
export const RestrauntMenuCategory = (menu) => {
    
  return ([...(menu.menu)].map((item, index) => {
    if (item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
      return (
        <div key={index} className="flex flex-wrap justify-center">
          {
            <div className="font-bold text-xl mb-2 item-category p-4">{item.card.card.title}
                <div className="flex flex-wrap p-4">
                    {
                        item.card.card.itemCards.map((itemCard, index) => {
                        return (
                            <div key={index} className="m-4 p-4 bg-white rounded shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                                    <p className="text-gray-700 text-base">{itemCard.card.info.description}</p>
                                    <img className="w-full" src={CDN_URL + itemCard.card.info.imageId} alt={itemCard.card.info.name} />
                                    <p className="text-gray-700 text-base">{itemCard.card.info.name}</p>
                                    <p className="font-bold text-xl">Price: Rs. {itemCard.card.info.price / 100}</p>
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
