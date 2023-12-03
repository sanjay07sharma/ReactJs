import { useState, useEffect } from 'react';
import { RESTRAUNT_LIST_API } from '../utils/constants';

const useBodyData = () => {
    const [restrauntList, setRestrauntList] = useState([]); // resList or data from an API
    const [filteredRestrauntList, setFilteredRestrauntList] = useState([]);
    
    useEffect(() => {
        fetchData();
    })
    
    fetchData = async () => {
        const data = await fetch(RESTRAUNT_LIST_API);
        const json = await data.json();
        // Swggr API has a bug, it is not returning the correct data.
        let restrauntCard;
        for (let i=0; i<json?.data?.cards.length; i++) {
            if (json?.data?.cards[i]?.card?.card?.gridElements) {
                restrauntCard = json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants;
            }
        }
        setRestrauntList(restrauntCard);
        setFilteredRestrauntList(restrauntCard);
    }
    
    
    return [restrauntList, setRestrauntList, filteredRestrauntList, setFilteredRestrauntList];
}

export default useBodyData;
