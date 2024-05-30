
import { Link, json } from "react-router-dom";
import { CDN_URL, FILTER_API } from "../utils/constants";
import { useState, useEffect } from "react";

const displayAllRelated = (e) => {
    let url = e.target.src;
    let parts = url.split('/');
    let lastPart = parts.pop();
    let fileNameParts = lastPart.split('.')[0].split('_');
    let fileName = fileNameParts.join('');

    const fetchFilteredData = async () => {
        const data = await fetch(FILTER_API+fileName+`&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        const json = await data.json();
        // Next Step is to try to find a way to display the data in REPLACING BODY component
        
        // Approach 1: Using Local Storage
        // Approach 2: Replace everything in the body component with the new data.
    }
    fetchFilteredData();
}
const displayBoard = (props)  => {
    return props.data.map((element) => (
                        <div className="h-auto w-auto inline space-between rounded-full border-spacing-3">
                            <img alt="Hello" src={CDN_URL+element.imageId} onClick={(e) =>displayAllRelated(e, props.data)}/>
                        </div>
                    ))
                }

export default displayBoard;
