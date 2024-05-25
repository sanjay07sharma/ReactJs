import { RestrauntCard, withPromtedLabel } from "./RestrauntCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Body = () => {

    //state variable
    const [searchText, setSearchText] = useState('');
    const [restrauntList, setRestrauntList] = useBodyData();
    // const [filteredRestrauntList, setFilteredRestrauntList] = useState([]);
    const online = useOnlineStatus();
    const {setUserName, loggedInUser} = useContext(UserContext);
    
    return restrauntList?.length === 0 ? ( <Shimmer/> ) : ( !online ? (<h1>Offline</h1>) :
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input className="m-4 p-4 w-80 border-solid border-black py-2" type="text" placeholder="what are you craving for?"
                    value={searchText}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const filteredRestrauntList = restrauntList?.filter((res) => {
                                return res.info.cuisines.some(element => element.toLowerCase() === searchText.toLowerCase());
                            });
                            setRestrauntList(filteredRestrauntList?.length ? filteredRestrauntList : restrauntList);
                        }
                    }}
                    onChange={
                        (e) => setSearchText(e.target.value)
                    }/>

                    <button className="search-btn bg-green-100 m-4 px-4 py-2 rounded-lg"
                    onClick={ () => {
                        const filteredRestrauntList = restrauntList?.filter((res) => {
                            return res.info.cuisines.some(element => element.toLowerCase() === searchText.toLowerCase());
                        });
                        setRestrauntList(filteredRestrauntList?.length ? filteredRestrauntList : restrauntList);
                    }}>Search</button>

                    <button className="filter-btn bg-gray-100 m-4 px-4 py-2 rounded-lg"
                    onClick={() => {
                        const filteredRestrauntList = restrauntList?.filter((list) => {
                            return list.info.avgRating > 4.4;   
                        });
                        setRestrauntList(filteredRestrauntList?.length ? filteredRestrauntList : restrauntList);
                    }}>Looking for the best of the best ?</button>

                    <label className="text-lg font-bold p-2">UserName</label>
                    <input className="border border-black p-2 m-4" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}>
                    </input>
                </div>
            </div>
            
            <div className="res-container flex flex-wrap">
                {
                    restrauntList?.length === 0 ? <h1>No restraunts found</h1> : restrauntList?.map((res) => {
                        return <RestrauntCard resData={res.info}/>
                    })
                }
            </div>
        </div>
    )
}
