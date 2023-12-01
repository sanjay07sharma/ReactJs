import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import RestrauntCategory from './RestrauntCategory';


const RestaurantMenu = () => {
  
  const [cartCount, setCartCount] = useState(0);
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);
  
  if (resInfo === null) {
    return <Shimmer/>;
  }
    
  const {name, areaName, avgRating, locality, costForTwo, cuisines } =  resInfo?.cards[0]?.card?.card?.info;
  const itemCards = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  
  
  return (
    <div className='menu text-center font-bold'>
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
                <h1 className='font-bold'>{item.card.card.title || ""}</h1>
              </div>
              <div key={index} className='flex flex-wrap'>
                {item.card.card.itemCards.map((item, index) => {
                  <RestrauntCategory data={item.card.info} key={index}/>
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
