import { useRouteError } from "react-router-dom";
// userRouteError is a hook that returns the error object for the current route.
// it explains why the route failed to render.
// having useRouteError in our page makes understanding and debugging errors easier.


const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <h1>Oops! Something went wrong.</h1>
            <p>Please try again later.</p>
            <h3> {err.status} : {err.statusText} </h3>
            <h2> {err.error.message} </h2>
        </div>
    );
};


export default ErrorPage;
