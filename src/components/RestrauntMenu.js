import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import { CDN_URL } from '../utils/constants';


const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);
  
  if (resInfo === null) {
    return <Shimmer/>;
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
                <h1 className='font-bold'>{item.card.card.title || ""}</h1>
              </div>
              <div key={index} className='flex flex-wrap'>
                {item.card.card.itemCards.map((item, index) => {
                  return (
                    <div class="itemCards m-4 p-4  w-[250px] l-[450px] rounded-lg bg-gray-100 hover:w-[300px]" key={index}>
                      <img className="res-logo rounded-lg" src={CDN_URL + item.card.info.imageId} />
                      <h3 className='font-bold'>{item.card.info.name}</h3>
                      <h4>{item.card.info.defaultPrice ? "Rs. "+item.card.info.defaultPrice/100 : "Rs. "+item.card.info.price/100}</h4>
                      <button className='add_to_cart m-4 px-4 py-2 rounded-lg bg-green-300' onClick={
                        (ev) => {
                          console.log("add item to plate and update on card");
                          console.log(item.card.info.name);
                          console.log(item.card.info.defaultPrice ? "Rs. "+item.card.info.defaultPrice/100 : "Rs. "+item.card.info.price/100);
                          const cart = documet.getElementsByClassName('checkout-card');
                          /*
                            Idea is to add count to the cart name denoting items has been added to cart.
                            need to update the header component to show the count of items in cart.
                          */
                        }
                      }>Add item to plate</button>
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
