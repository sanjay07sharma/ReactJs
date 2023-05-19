import React from "react";
import ReactDOM  from "react-dom";

/*
Componenets required":

1 Header
    - Logo
    - Nav braces
2 Body
    - Search
    - Restraunt container 
        - Restraunt cards // when there is cnace of code repating build separate component\
            - image
            - name of rest
            - star rating
            - cusinies
            - estimate time 
3 Footer
    - Copyright
    - Links
    - Adress
    - Contacts
*/
const Header = () => {
    return (
        <div className="header">
        <div className="logo">
            <img className="res-img" src="https://i.pinimg.com/736x/69/00/4b/69004bd4fa18768aa5611defc0f50dcf.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li> Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}

/*

inline style in react 


way 1: 
const css = {
    backgroundColor : '#f0f0f0',
    width: '200px',
    height:' 300px',
    border: '1px solid black',
}; && pass css to style={}

way 2 : give js object to style={({css})}
*/

const RestrauntCard = (props) => {
    // can also use destructuring 
    const {resName, cuisines, stars, deliveryTime} = props; // what props here ctually is {resName:"Sanjay Foods", cuisines:"Dosa, South Indian, Asia", stars:"4.4 stars", deliveryTime:"38 minutes delivery time"} for res casrd 1.
    return(
        <div className="res-card">
            <img
            className="res-logo"
            src="https://images.alphacoders.com/862/thumb-1920-862639.jpg"
            />
            <h3>{resName || props.resName}</h3>
            <h4>{cuisines || props.cuisines}</h4>
            <h4>{props.stars}</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search
                <input></input>
            </div>
            <div className="res-constainer">
                <RestrauntCard resName="Sanjay Foods" cuisines="Dosa, South Indian, Asia" stars="4.4 stars" deliveryTime="38 minutes delivery time"/>
                <RestrauntCard resName="KFC" cuisines="Burger, Fastfoods, Drinks" stars="4.4 stars" deliveryTime="38 minutes delivery time"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>); //we cant render directly