import { useState, useEffect } from 'react'
import { MENU_API } from '../utils/constants'

const useRestrauntMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [itemCards, setItemCards] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    })
    
    fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // TODO : FIXME // need to return 
        for (let i=0; i<json.data?.cards?.length; i++) {
            if (json.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
                for (let j = 0; j < json.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length; j++) {
                    if (json.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[j]?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant") {
                        setResInfo(json.data?.cards[i]?.groupedCard.cardGroupMap.REGULAR.card.card.info);
                    }
                    if (json.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[j]?.groupedCard) {
                        for (let k = 0; k < json.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards[j]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length; k++) {
                            if (json.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards[j].groupedCard.cardGroupMap.REGULAR.cards[k]?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                                setItemCards(json.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards[j].groupedCard.cardGroupMap.REGULAR.cards[k].card.card.itemCards);
                            }
                        }
                    }
                }
            }
        }
    }
    
    return [resInfo, itemCards]
}

export default useRestrauntMenu;
