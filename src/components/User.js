import { useEffect, useState } from 'react';

const User = (props) => {
    const [info , setinfo] = useState(''); // for functinal comoonent we use useState hook like this.
    // to use multiple state variables we can use multiple useState hooks.

    useEffect(async () => {
        await userInfo();
    }, [])

    async function userInfo() {
        const response = await fetch("https://api.github.com/users/sanjay07sharma");
        const data = await response.json();
        debugger
        setinfo(data);
    }
    const { name , location , avatar_url } = this.info;
    return(
            <div class="user-card">
                <img src={avatar_url}/>
                <h3>Name: {name} </h3>
                <h3>Location: {location}</h3>
            </div>
        );
    }

export default User;
