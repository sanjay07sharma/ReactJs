import { CDN_URL, FILTER_API } from "../utils/constants";
import { RestrauntCard } from "./RestrauntCard";
import FilterProductInfo from "./FilterProductInfo";

const displayAllRelated = (e) => {
    let url = e.target.src;
    let parts = url.split('/');
    let lastPart = parts.pop();
    let fileNameParts = lastPart.split('.')[0].split('_');
    const fileName = fileNameParts.join('');

    const fetchFilteredData = async (fileName) => {
        const data = await fetch(FILTER_API+fileName+`&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        const json = await data.json();
        // Inestigate the data not getting displayed.
        <FilterProductInfo data={json.data.cards[0].card.card}/>
        json.data.cards.forEach(element => {
            if (element.card.card.info) {
                <RestrauntCard resData={element.card.card.info}/>;
            }
        });
    }
    fetchFilteredData(fileName);
}
const displayBoard = (props)  => {
    return props.data.map((element) => (
                        <div className="h-auto w-auto inline space-between rounded-full border-spacing-3">
                            <img alt="Hello" src={CDN_URL+element.imageId} onClick={(e) =>displayAllRelated(e)}/>
                        </div>
                    ))
                }

export default displayBoard;
