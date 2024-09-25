import { Link } from "react-router-dom";
import { RestrauntCard } from "./RestrauntCard";
import { useState, useContext, useEffect, useMemo } from "react";
import Shimmer from "./Shimmer";
import useBodyData from "../utils/useBodyData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import DisplayBoard from "./DisplayBoard";

export const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [restrauntList, setRestrauntList, displayList, setDisplayList] = useBodyData();
    const [filteredRestrauntList, setFilteredRestrauntList] = useState([]);
    const online = useOnlineStatus();
    const { setUserName, loggedInUser } = useContext(UserContext);

    const filterRestaurants = (list, text) => {
        return list?.filter((res) => res.info.cuisines.some(element => element.toLowerCase() === text.toLowerCase()));
    };

    useEffect(() => {
        setFilteredRestrauntList(searchText ? filterRestaurants(restrauntList, searchText) : restrauntList);
    }, [searchText, restrauntList]);

    const handleSearch = () => {
        setFilteredRestrauntList(filterRestaurants(restrauntList, searchText));
    };

    const handleBestFilter = () => {
        const bestRestaurants = restrauntList?.filter((list) => list.info.avgRating > 4.4);
        setFilteredRestrauntList(bestRestaurants?.length ? bestRestaurants : restrauntList);
    };

    const filteredList = useMemo(() => {
        return filteredRestrauntList?.length ? filteredRestrauntList : restrauntList;
    }, [filteredRestrauntList, restrauntList]);

    if (restrauntList?.length === 0) return <Shimmer />;
    if (!online) return <h1>Offline</h1>;

    return (
        <div className="body overflow-hidden">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        className="m-4 p-4 w-80 border-solid border-black py-2"
                        type="text"
                        placeholder="what are you craving for?"
                        value={searchText}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            document.querySelector('.cross-button').style.display = e.target.value ? 'inline' : 'none';
                        }}
                    />
                    <button
                        className="cross-button bg-white m-1 p-1 hidden rounded-lg"
                        onClick={() => {
                            setSearchText('');
                            document.querySelector('.cross-button').style.display = 'none';
                            setFilteredRestrauntList([]);
                        }}
                    >
                        ❌
                    </button>
                    <button
                        className="search-btn bg-green-100 m-4 px-4 py-2 rounded-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                    <button
                        className="filter-btn bg-gray-100 m-4 px-4 py-2 rounded-lg"
                        onClick={handleBestFilter}
                    >
                        Looking for the best of the best?
                    </button>
                    <label className="text-lg font-bold p-2">UserName</label>
                    <input
                        className="border border-black p-2 m-4"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex overflow-x-scroll">
                {displayList?.map((element) => (
                    <DisplayBoard key={element.id} data={element} />
                ))}
            </div>
            <div className="res-container flex flex-wrap w-screen">
                {filteredList?.length > 0 ? (
                    filteredList.map((res) => (
                        <Link key={res.info.id} to={`/resInfo/${res.info.id}`}>
                            <RestrauntCard resData={res.info} />
                        </Link>
                    ))
                ) : (
                    <h1>No restaurants found</h1>
                )}
            </div>
        </div>
    );
};