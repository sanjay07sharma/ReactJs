import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const User = () => {
    const [info , setinfo] = useState([]); // for functinal comoonent we use useState hook like this.
    // to use multiple state variables we can use multiple useState hooks.

    useEffect(() => {
        // cant make useEffect async directly because useEffect returns a cleanup function which is not async.
        const fetchUserInfo = async () => {
            await userInfo();
        };
        fetchUserInfo();
    }, []);

    async function userInfo() {
        const response = await fetch("https://api.github.com/users/sanjay07sharma");
        const data = await response.json();
        setinfo(data);
    }
    const { name , location , avatar_url } = info;
    
    return (
        info?.length ? 
          <Shimmer /> :
          <div className="user-card">
            <img src={avatar_url || "Logo.png"}/>
            <h3>Name: {name || "Sanjay"} </h3>
            <h3>Location: {location || "Gandhinagar"}</h3>
          </div>
      );
    }

export default User;
