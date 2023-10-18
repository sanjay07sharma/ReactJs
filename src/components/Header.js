import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react"

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    // if no dependency array is passed, useEffect will be called on every re-render
    // if empty dependency array is passed, useEffect will be called only once
    // if dependency is [btnName], useEffect will be called only when btnName changes
    useEffect(() => {
        console.log("useEffect called");
    }, [btnName]);

    return (
        <div className="header">
        <div className="logo">
            <img className="res-img" src= {LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li> Contact Us</li>
                <li>Cart</li>
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