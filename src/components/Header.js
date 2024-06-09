import { LOGO_URL } from "../utils/constants"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Login from "./Login";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const online = useOnlineStatus();
    const {  defaultUser } = useContext(UserContext);

    // if no dependency array is passed, useEffect will be called on every re-render
    // if empty dependency array is passed, useEffect will be called only once
    // if dependency is [btnName], useEffect will be called only when btnName changes
    useEffect(() => {
    }, [btnName]);
    
    // Subscribing to the store using selector
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div className="header flex justify-between bg-orange-50 shadow-lg">
        <div className="logo w-56">
            <a href={`${window.location.href}`}>
                <img className="res-img" src= {LOGO_URL}/>
            </a>
        </div>
        <div className="flex items-center">
            <ul className="flex justify-between p-4 m-4">
                <li className="px-4">Online Status : { online ? "🟢" : "🔴" }</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="checkout-card px-4 font-bold"> <Link to="/cart">Cart- </Link> ({cartItems.length} items) </li>
                <li>
                <a
                className="login-btn"
                href="/login"
                >
                {btnName}
                </a>
                </li>
                <li className="px-4 font-bold">{defaultUser}</li>
            </ul>
        </div>
    </div>)
}
