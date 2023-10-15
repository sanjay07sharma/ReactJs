import { RestrauntCard } from "./RestrauntCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {

    //state variable
    const [restrauntList, setRestrauntList] = useState([]); // resList or data from an API
    const [searchText, setSearchText] = useState('');

    // whenver there is change in state variable, react triggers reconcilliation cycle, the component will re-render.
    useEffect(() => {
        fetchData();
    }, []);

    fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0311463&lng=72.587026&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // setRestrauntList(json.data.cards[2].data.data.cards)// Bad way
        setRestrauntList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);// Good way is optional chaining
    }
    
    // Normal js varible
    // conditional rendering
    return restrauntList?.length === 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search for restraunts" value={searchText} onChange={ (e) => setSearchText(e.target.value) }/>
                    <button className="search-btn" onClick={ () => {
                        const filteredRestrauntList = restrauntList.filter((res) => res.info.name.toLowerCase().includes(searchText))
                        setRestrauntList(filteredRestrauntList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() =>{
                    const filteredRestrauntList = restrauntList.filter( (list) => list.info.avgRating > 4 )
                    setRestrauntList(filteredRestrauntList.length ? filteredRestrauntList : restrauntList);
                }}>Top Rated Restraunts</button>
            </div>
            <div className="res-container">
            {
                restrauntList?.map((restro) => {
                    return <RestrauntCard key={restro.id} resData={restro}/>;
                })
            }
            </div>
        </div>
    )
}
