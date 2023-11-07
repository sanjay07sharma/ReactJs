import { useState } from 'react';

const User = (props) => {
    const [count , setCount] = useState(0); // for functinal comoonent we use useState hook like this.
    // to use multiple state variables we can use multiple useState hooks.
    const [count2] = useState(2);

    useState(() => {

    }, [])

    async function userInfo() {
        const response = await fetch("https://api.github.com/users/sanjay07sharma");
        const data = await response.json();
    }

    return(
            <div class="user-card">
                <h3>Count: {count} </h3>
                <h3>Count2: {count2} </h3>
                <h3>Name: {props.name} </h3>
                <h3>Location: Gandhinagr</h3>
                <h4>Contact : @sanjay07sharma</h4>
            </div>
        );
    }

export default User;
