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
            if (card?.card?.card?.info) {
                setResInfo(card.card.card.info);
            }
            if (card.groupedCard?.cardGroupMap?.REGULAR?.cards) {
                setItemCards(card.groupedCard.cardGroupMap.REGULAR.cards);
            }
        }); 
    }
    return [resInfo, itemCards]
}

export default useRestrauntMenu;
