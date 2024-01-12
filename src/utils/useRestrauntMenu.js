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
            let components = json.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            if (components) {
                // TODO : FIXME // the components here are not as expected, invetigate data inconsistency.
            }
        }
    }
    
    return [resInfo, itemCards]
}

export default useRestrauntMenu;
