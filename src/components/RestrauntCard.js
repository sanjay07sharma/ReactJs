import { CDN_URL } from "../utils/constants";

export const RestrauntCard = (props) => {
    // can also use destructuring 
    const {resData} = props; // what props here actually is {resName:"Sanjay Foods", cuisines:"Dosa, South Indian, Asia", stars:"4.4 stars", deliveryTime:"38 minutes delivery time"} for res casrd 1.
    const {id, name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData.data;
    return(
        <div className="res-card">
            <img
            className="res-logo"
            src={CDN_URL + cloudinaryImageId}
            />
            <h3>{ name }</h3>
            <h4 class='cuisines'>{ cuisines.join(',') }</h4>
            <h4>{ avgRating }</h4>
            <h4>{'Rs: '+ costForTwo/100 + ' for Two' }</h4>
            <h4>{ deliveryTime+' minutes' }</h4>
        </div>
    )
}