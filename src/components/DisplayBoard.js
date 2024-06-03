import { useState } from 'react';
import { CDN_URL, FILTER_API } from "../utils/constants";
import { RestrauntCard } from "./RestrauntCard";
import FilterProductInfo from "./FilterProductInfo";

const DisplayBoard = (props) => {
    const [searchText, setSearchText] = useState('');

    const displayAllRelated = async (e) => {
        let url = e.target.src;
        let parts = url.split('/');
        let lastPart = parts.pop();
        let fileNameParts = lastPart.split('.')[0].split('_');
        const fileName = fileNameParts.join('');
        setSearchText(fileName);
    }

    const displayBoard = async () => {
        const data = await fetch(FILTER_API+searchText+`&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        const json = await data.json();
        return props.data.map((element) => (
            <div className="h-auto w-auto inline space-between rounded-full border-spacing-3">
                <img alt="Hello" src={CDN_URL+element.imageId} onClick={(e) =>displayAllRelated(e)}/>
                <div className="res-container flex flex-wrap">
                    <FilterProductInfo data={json.data.cards[0].card.card}/>
                    {json.data.cards.map(element => {
                        if (element.card.card.info) {
                            return <RestrauntCard resData={element.card.card.info}/>
                        }
                        return null;
                    })}
                </div>
            </div>
        ))
    }

    return (
        <div>
            {displayBoard()}
        </div>
    );
}

export default DisplayBoard;
