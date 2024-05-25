import { useState } from 'react';
import { RESTRAUNT_LIST_API } from '../utils/constants';

const useBodyData = () => {
    const [restrauntList, setRestrauntList] = useState([]); // resList or data from an API
    
    fetchData = async () => {
        const data = await fetch(RESTRAUNT_LIST_API);
        const json = await data.json();
        let restrauntCard;
        for (let i=0; i<json?.data?.cards.length; i++) {
            if (json?.data?.cards[i]?.card?.card?.gridElements) {
                restrauntCard = json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants;
            }
        }
        setRestrauntList(restrauntCard);
    }
    fetchData();

    return [restrauntList, setRestrauntList];
}

export default useBodyData;
