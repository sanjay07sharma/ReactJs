import { RestrauntCard } from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";

export const Body = () => {

    //state variable
    const [searchText, setSearchText] = useState('');
    const [restrauntList, setRestrauntList, filteredRestrauntList, setFilteredRestrauntList] = useBodyData();

    return restrauntList?.length === 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search for restraunts" value={searchText} onChange={ (e) => setSearchText(e.target.value) }/>
                    <button className="search-btn" onClick={ () => {
                        const filteredRestrauntList = restrauntList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestrauntList(filteredRestrauntList.length ? filteredRestrauntList : setFilteredRestrauntList(''));
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
