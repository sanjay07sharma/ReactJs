import { useState, useEffect } from 'react'
import { MENU_API } from '../utils/constants'

const useRestrauntMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [itemCards, setItemCards] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    },[])
    
    fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        json.data?.cards.map((card) => {
            if (card?.card?.info) {
                setResInfo(card.card.info);
            }
           card.groupedCard?.cardGroupMap?.REGULAR?.cards.map((item) => {
                if (item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                    setItemCards(item.card.card.itemCards);
                }
           })
        });
    }
    
    return [resInfo, itemCards]
}

export default useRestrauntMenu;
