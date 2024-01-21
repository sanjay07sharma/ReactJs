import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link, useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import {RestrauntMenuCategory} from './RestrauntMenuCategory';


const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const [resInfo, RestroMenuItemCards] = useRestrauntMenu(resId);
  
  if (resInfo === null) {
    return <Shimmer/>;
  }
    
  const {name, areaName, avgRating, locality, costForTwo, cuisines } =  resInfo;
  const itemCards = RestroMenuItemCards;

  return (
    <div className='menu text-center font-bold'>
      <h1>{name || 'No restaurant found'}</h1>
      <h3>{("Address: "+areaName+"-"+locality) || 'No restaurant found'}</h3>
      <h3>{("Average Rating: "+avgRating) || 'No restaurant found'}</h3>
      <h3>{("costForTwo: "+costForTwo/100) || 'No restaurant found'}</h3>
      <h2>{("Cuisines: " + cuisines.toString()) || 'Nothing to display'}</h2>
      <h1>Menu</h1>
      {
        <Link><RestrauntMenuCategory menu={itemCards}/></Link>
      }
    </div>
  );
};

export default RestaurantMenu;
