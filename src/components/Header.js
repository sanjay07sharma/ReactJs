import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const online = useOnlineStatus();

    // if no dependency array is passed, useEffect will be called on every re-render
    // if empty dependency array is passed, useEffect will be called only once
    // if dependency is [btnName], useEffect will be called only when btnName changes
    useEffect(() => {
    }, [btnName]);

    return (
        <div className="header">
        <div className="logo">
            <img className="res-img" src= {LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status : { online ? "🟢" : "🔴" }</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li> <Link to="/cart">Cart</Link></li>
                <button 
                className="login-btn"
                onClick={() => {
                    // btnName="Logout"; // cant directly change state variable
                    btnName === 'Login' ?
                    setBtnName("Logout") : setBtnName("Login");
                }}
                >
                    {btnName}
                </button>
            </ul>
        </div>
    </div>)
}
