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
        setRestrauntList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestrauntList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
    return [restrauntList, setRestrauntList, filteredRestrauntList, setFilteredRestrauntList];
}

export default useBodyData;
