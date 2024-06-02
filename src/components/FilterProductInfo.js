import { CDN_URL } from "../utils/constants";

const FilterProductInfo = ({ filterProductInfo }) => {
    const { count, description, imageId, title } = filterProductInfo;

    return (
        <div>
            <h2>{title}</h2>
            <img src={CDN_URL+imageId} alt={title} />
            <p>{description}</p>
            <p>{count}</p>
        </div>
    ); 
};

export default FilterProductInfo;
