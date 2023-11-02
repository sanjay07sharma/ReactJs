import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const API_URL = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1989115&lng=72.63803080000001&restaurantId=158851&catalog_qa=undefined&submitAction=ENTER';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setResInfo(json?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Shimmer/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const {name, areaName, avgRating, locality, costForTwo, id, cuisines } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
  resInfo && console.log(resInfo?.cards);
  return (
    <div className='menu'>
      <h1>{name || 'No restaurant found'}</h1>
      <h2>{areaName || 'No restaurant found'}</h2>
      <h2>{avgRating || 'No restaurant found'}</h2>
      <h2>{locality || 'No restaurant found'}</h2>
      <h2>{costForTwo || 'No restaurant found'}</h2>
      <h1>{id || 'No restaurant found'}</h1>
      <h1>Cuisines</h1>
      <ul>
        <li>{cuisines.toString() || 'Nothing to display'}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
