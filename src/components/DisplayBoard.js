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

    return  (
        <div className=" w-auto flex overflow-hidden">
            <img className="cursor-pointer" alt="" src={CDN_URL+props.data.imageId} onClick={(e) => displayAllRelated(e)}/>
        </div>
    )

}

export default DisplayBoard;
