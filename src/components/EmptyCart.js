import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-gray-800">Your cart is empty :(</h1>
        <p className="text-gray-600">
          You can go to the home page to view more restaurants.
        <br />
        <div className="m-4 p-4 ">
           <Link to="/" className="m-4 p-4 bg-gray-300 rounded-md ">SEE RESTAURANTS NEAR YOU</Link> 
        </div>
        </p>
      </div>
    );
};
  
export default EmptyCart;
