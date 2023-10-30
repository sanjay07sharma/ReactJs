import { useEffect, useState } from 'react';
import { shimmer } from './Shimmer';

const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1972649&lng=72.61658609999999&page_type=DESKTOP_WEB_LISTING';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setResInfo(data?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <shimmer />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const {name, id, cuisines, } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

  return (
    <div className='menu'>
      <h1>{name || 'No restaurant found'}</h1>
      <h1>Menu</h1>
      <ul>
        <li>{cuisines.split(',') || 'Nothing to display'}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
