import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const online = useOnlineStatus();
    const [mode, setThemeMode] = useState("Day"); // [stateVariable, setStateVariable

    // if no dependency array is passed, useEffect will be called on every re-render
    // if empty dependency array is passed, useEffect will be called only once
    // if dependency is [btnName], useEffect will be called only when btnName changes
    useEffect(() => {
    }, [btnName]);
    
    toggleDarkMode = (bool) => {
        document.documentElement.classList.toggle('dark', bool);
    }

    return (
        <div className="flex justify-between bg-orange-50 shadow-lg">
        <div className="logo w-56">
            <img className="res-img" src= {LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul class="flex justify-between p-4 m-4">
                <li className="px-4">Online Status : { online ? "🟢" : "🔴" }</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"> <Link to="/cart">Cart</Link></li>
                <li>
                    <button 
                        className="login-btn px-4"
                        onClick={() => {
                            // btnName="Logout"; // cant directly change state variable
                            btnName === 'Login' ?
                            setBtnName("Logout") : setBtnName("Login");
                        }}>
                        {btnName}
                    </button>    
                </li>
                <li>
                    <button className="dark-mode-btn px-4" 
                        onClick={() => {
                                mode === "Day" ? setThemeMode("Night") && toggleDarkMode(true) : setThemeMode("Day") && toggleDarkMode(false);
                            }}>
                        {mode}
                    </button>
                </li>
            </ul>
        </div>
    </div>)
}
