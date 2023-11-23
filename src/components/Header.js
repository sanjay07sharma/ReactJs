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
                className="login-btn"
                onClick={() => {
                    // btnName="Logout"; // cant directly change state variable
                    btnName === 'Login' ?
                    setBtnName("Logout") : setBtnName("Login");
                }}
                >
                    {btnName}
                </button>    
                </li>
                // todo add dark mode.
                {/* <li>
                    <button class="relative inline-flex items-center m-4 p-4 py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600" id="headlessui-switch-:R1cjpb6:" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="">
                        <span class="sr-only">Disable dark mode</span>
                            <svg width="24" height="24" fill="none" aria-hidden="true" class="transform transition-transform scale-0 duration-500">
                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg><svg width="24" height="24" fill="none" aria-hidden="true" class="ml-3.5 transform transition-transform scale-100 duration-300">
                                    <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span class="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform"><svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none transition duration-500 transform text-cyan-500 opacity-100 scale-100">
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 scale-0">
                                    <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                </li> */}
            </ul>
        </div>
    </div>)
}
