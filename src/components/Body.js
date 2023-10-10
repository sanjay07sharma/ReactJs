import { RestrauntCard } from "./RestrauntCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import shimmer from "./Shimmer";

export const Body = () => {

    //state variable
    let [restrauntList, setRestrauntList] = useState([]); // resList or data from an API

    useEffect(() => {
        console.log('useffect at work');
        fetchData();
    }, []);

    fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1972649&lng=72.61658609999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // setRestrauntList(json.data.cards[2].data.data.cards)// Bad way
        setRestrauntList(json?.data?.cards[2]?.data?.data?.cards);// Good way is optional chaining
    }

    if (restrauntList.length === 0) {
        return <shimmer/>;
    }

    console.log('i am rendered before useEffect');

    // Normal js varible
    // let restrauntList = resList;
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() =>{
                    filteredRestrauntList = restrauntList.filter( (list) => list.data.avgRating > 4 )
                    setRestrauntList(filteredRestrauntList);
                }}>Top Rated Restraunts</button>
            </div>
            <div className="res-container">
            {
                restrauntList.map((restro) => {
                    return <RestrauntCard key={restro.data.id} resData={restro}/>
                })
            }
            </div>
        </div>
    )
}
