import { RestrauntCard, withPromtedLabel } from "./RestrauntCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {

    //state variable
    const [searchText, setSearchText] = useState('');
    const [restrauntList, setRestrauntList, filteredRestrauntList, setFilteredRestrauntList] = useBodyData();
    const online = useOnlineStatus();
    const promotedRestrauntList = withPromtedLabel(filteredRestrauntList);
    
    return restrauntList?.length === 0 ? ( <Shimmer/> ) : ( !online ? (<h1>Offline</h1>) :
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input className="m-4 p-4 w-80 border-solid border-black py-2" type="text" placeholder="Search for restraunts" value={searchText} onChange={ (e) => setSearchText(e.target.value) }/>
                    <button className="search-btn bg-green-100 m-4 px-4 py-2 rounded-lg" onClick={ () => {
                        const filteredRestrauntList = restrauntList?.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestrauntList(filteredRestrauntList?.length ? filteredRestrauntList : setFilteredRestrauntList(''));
                    }}>Search</button>
                    <button className="filter-btn bg-gray-100 m-4 px-4 py-2 rounded-lg" onClick={() =>{
                        const filteredRestrauntList = restrauntList?.filter((list) => list.info.avgRating > 4 );
                        setRestrauntList(filteredRestrauntList?.length ? filteredRestrauntList : restrauntList);
                    }}>Top Rated Restraunts</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
            {
                filteredRestrauntList?.map((restro) => {
                // Keey should always be at the parent JSX element
                return <Link key={restro.info.id} to={"/resInfo/" + restro.info.id}> {
                    restro.info.isPromoted ? <promotedRestrauntList resData={restro}/> :  <RestrauntCard resData={restro}/>   
                }</Link>;
                })
            }
            </div>
        </div>
    )
}
