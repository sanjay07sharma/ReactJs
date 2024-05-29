
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const displayAllRelated = (e, data) => {
    // update <Body> component with all the data that is related to e.target data
}
const displayBoard = (props)  => {
    return props.data.map((element) => (
                        <div className="h-auto w-auto inline space-between rounded-full border-spacing-3">
                            <img alt="Hello" src={CDN_URL+element.imageId} onClick={(e) =>displayAllRelated(e, props.data)}/>
                        </div>
                    ))
                }

export default displayBoard;
