import { useState } from 'react';
import { CDN_URL, FILTER_API } from "../utils/constants";

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

    const displayBoard = () => {
        return props.data.map((element) => (
            <div className="h-auto w-52 space-between rounded-full border-spacing-3 inline-block">
                <img alt="" src={CDN_URL+element.imageId} onClick={(e) => displayAllRelated(e)}/>
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
