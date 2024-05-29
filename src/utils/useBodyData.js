import { useState, useEffect } from 'react';
import { RESTRAUNT_LIST_API } from '../utils/constants';

const useBodyData = () => {
    const [restrauntList, setRestrauntList] = useState([]); // resList or data from an API
    const [displayList, setDisplayList] = useState([]); // resList or data from an API
    
    useEffect(() => {
        fetchData();
    },[]);

    fetchData = async () => {
        const data = await fetch(RESTRAUNT_LIST_API);
        const json = await data.json();
        let restrauntCard, displayCard;
        for (let i=0; i<json?.data?.cards.length; i++) {
            if (json?.data?.cards[i]?.card?.card?.imageGridCards) {
                displayCard = json.data.cards[i].card.card.imageGridCards.info;
            }
            if (json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                restrauntCard = json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants;
            }
        }
        setDisplayList(displayCard);
        setRestrauntList(restrauntCard);
    }

    return [restrauntList, setRestrauntList, displayList, setDisplayList];
}

export default useBodyData;
