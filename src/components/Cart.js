import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
/*
    Modify each div to display the following:
    1. Order Details here
    2. Payment Details
    
*/

const cartItems = useSelector(store => store.cart.items);
console.log(cartItems);
return (
    <div className="text-center m-4 p-4">
        <h1 className="text-lg font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            {/* re-use item card component here*/}
        </div>
    </div>
)
}

export default Cart;
