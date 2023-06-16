import { RestrauntCard } from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {

    //state variable
    let [restrauntList, setRestrauntList] = useState(resList);

    // Normal js varible
    // let restrauntList = resList;
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() =>{
                    filteredRestrauntList = restrauntList.filter( (list) => list.data.avgRating > 4 )
                    setRestrauntList(filteredRestrauntList)
                    console.log(restrauntList)
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
