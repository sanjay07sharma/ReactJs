import { RestrauntCard } from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


export const Body = () => {

    //state variable
    const [restrauntList, setRestrauntList] = useState([]); // resList or data from an API
    const [searchText, setSearchText] = useState('');
    const [filteredRestrauntList, setFilteredRestrauntList] = useState([]);

    // whenver there is change in state variable, react triggers reconcilliation cycle, the component will re-render.
    useEffect(() => {
        fetchData();
    }, []);

    fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0311463&lng=72.587026&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // setRestrauntList(json.data.cards[2].data.data.cards)// Bad way
        setRestrauntList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);// Good way is optional chaining
        setFilteredRestrauntList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    // Normal js varible
    // conditional rendering
    return restrauntList?.length === 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search for restraunts" value={searchText} onChange={ (e) => setSearchText(e.target.value) }/>
                    <button className="search-btn" onClick={ () => {
                        const searchResult = restrauntList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestrauntList(searchResult.length ? searchResult : setFilteredRestrauntList(''));
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() =>{
                    const filteredRestrauntList = restrauntList.filter( (list) => list.info.avgRating > 4 );
                    setRestrauntList(filteredRestrauntList.length ? filteredRestrauntList : restrauntList);
                }}>Top Rated Restraunts</button>
            </div>
            <div className="res-container">
            {
                filteredRestrauntList?.map((restro) => {
                    // Keey should always be at the parent JSX element
                    return <Link key={restro.info.id} to={"/resInfo/" + restro.info.id} > <RestrauntCard resData={restro}/></Link>;
                })
            }
            </div>
        </div>
    )
}
