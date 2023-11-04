import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants'


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    try {
      const response = await fetch( MENU_API + resId );
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
  const {name, areaName, avgRating, locality, costForTwo, cuisines } =  resInfo?.cards[0]?.card?.card?.info;
  const itemCards = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  
  return (
    <div className='menu'>
      <h1>{name || 'No restaurant found'}</h1>
      <h3>{("Address: "+areaName+"-"+locality) || 'No restaurant found'}</h3>
      <h3>{("Average Rating: "+avgRating) || 'No restaurant found'}</h3>
      <h3>{("costForTwo: "+costForTwo/100) || 'No restaurant found'}</h3>
      <h2>{("Cuisines: " + cuisines.toString()) || 'Nothing to display'}</h2>
      <h1>Menu</h1>
      {itemCards.map((item, index) => {
        if (item.card.card.itemCards) {
          return (
            <div class="itemCardContainer">
              <div class='itemCardName'>
                <h1>{item.card.card.title || ""}</h1>
              </div>
              <div key={index}>
                {item.card.card.itemCards.map((item, index) => {
                  return (
                    <div class="itemCards" key={index}>
                      <h3>{item.card.info.name}</h3>
                      <h4>{item.card.info.defaultPrice ? "Rs. "+item.card.info.defaultPrice/100 : "Rs. "+item.card.info.price/100}</h4>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      })}
    </div>
  );
};

export default RestaurantMenu;
