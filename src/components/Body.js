import { RestrauntCard } from "./RestrauntCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {

    //state variable
    let [restrauntList, setRestrauntList] = useState([]); // resList or data from an API
    useEffect(() => {
        fetchData();
        document.getElementsByClassName("login-btn")
    }, []);

    fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0311463&lng=72.587026&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // setRestrauntList(json.data.cards[2].data.data.cards)// Bad way
        setRestrauntList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);// Good way is optional chaining
    }

    
    console.log('i am rendered before useEffect');
    
    // Normal js varible
    // let restrauntList = resList;
    // conditional rendering
    return restrauntList?.length === 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() =>{
                    filteredRestrauntList = restrauntList.filter( (list) => list.info.avgRating > 4 )
                    setRestrauntList(filteredRestrauntList);
                }}>Top Rated Restraunts</button>
            </div>
            <div className="res-container">
            {
                restrauntList.map((restro) => {
                    return <RestrauntCard key={restro.id} resData={restro}/>;
                })
            }
            </div>
        </div>
    )
}
