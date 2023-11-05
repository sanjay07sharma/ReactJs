import User from './User';
import { UserClass } from './UserClass';
import React from 'react';

// export const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is the react about page.</h2>
//             {/* {this is an example of how to pass props in functional and class based Component in react} */}
//             <User name={"Sanjay Sharma (function)"}/>
//             {/* Loading a class based Component means i am creating an instance of that class*/}
//             <UserClass name={"Sanjay Sharma (class)"}/>
//         </div>
//     );
// }


// This is the test code just to understand the lifecycle of a class based component
export class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("parent Component is mounted");
    }

    render() {
        console.log("parent render");
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
}
