
import { CDN_URL } from '../utils/constants';

const RestrauntCategory = (props) => {
  
  //

console.log(props);
  return (
      <div class="itemCards m-4 p-4  w-[250px] l-[450px] rounded-lg bg-gray-100 hover:w-[300px]">
        {/* <img className="res-logo rounded-lg" src={CDN_URL + props.card.info.imageId} />
        <h3 className='font-bold'>{item.card.info.name}</h3>
        <h4>{item.card.info.defaultPrice ? "Rs. "+props.card.info.defaultPrice/100 : "Rs. "+props.card.info.price/100}</h4>
        <button className='add_to_cart m-4 px-4 py-2 rounded-lg bg-green-300' onClick={
          () => {
            const cart = document.getElementsByClassName('checkout-card');
            setCartCount(cartCount + 1);
            cart[0].lastChild.textContent = cartCount + 1;
            /*
              Idea is to add count to the cart name denoting items has been added to cart.
              need to update the header component to show the count of items in cart.
            */
          }
        {/* }>Add item to plate</button> */} */
      </div>
  );
};

export default RestrauntCategory;
