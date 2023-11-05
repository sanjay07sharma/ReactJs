import User from './User';
import { UserClass } from './UserClass';

export const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is the react about page.</h2>
            {/* {this is an example of how to pass props in functional and class based Component in react} */}
            <User name={"Sanjay Sharma (function)"}/>
            {/* Loading a class based Component means i am creating an instance of that class*/}
            <UserClass name={"Sanjay Sharma (class)"}/>
        </div>
    );
}
