import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
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