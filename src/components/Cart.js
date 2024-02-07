import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
/*
    Modify each div to display the following:
    1. Order Details here
    2. Payment Details
    
*/
const dispatch = useDispatch();
const handleClearCart = () => {
    dispatch(clearCart());
} 
/* 
Always subscribe to a small portion of the store not to thw whole store

example this can also be done as:
const store = useSelector((store) => store);
cont cartItem = store.cart.item.
here i am subscribed to whole store. Any random changes in our store well affect this.
*/
const cartItems = useSelector(store => store.cart.items);
return (
    <div className="text-center m-4 p-4">
        <h1 className="text-lg font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 mm-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
            {cartItems.length === 0 && <EmptyCart/>}
            <ItemList item={cartItems}/>
        </div>
    </div>
)
}

export default Cart;
