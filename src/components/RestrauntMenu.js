import { useEffect, useState } from 'react';
import { Shimmer } from './Shimmer';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]); // resInfo is an array of objects, each object contains information about a restaurant.
    useEffect(() => {
        fetchMenu();
    }, []); // i do not intend to run this effect again, so i have passed an empty array as a second argument.
    
    async function fetchMenu() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1972649&lng=72.61658609999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setResInfo(json.data);
    }
    if (resInfo === null) return <Shimmer/>;

    const resData = resInfo.length !== 0 && resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    return (
            <div className='menu'>
                <h1>{resData[0].info.name}</h1>
                <h1>Menu</h1>
                <ul>
                    <li>Pizza</li>
                    <li>Burger</li>
                    <li>Pasta</li>
                </ul>
            </div>
        )
};

export default RestaurantMenu;