import React from 'react';

// A class based conponentis nothing but a normal class which extends React.Component
// It has a render method which returns a piece of JSX
export class UserClass extends React.Component {
    // it will render this piece of JSX
    constructor(props) {
        super(props);

        // using state in class component
        this.state = {
            userInfo :{
                name: "Dummy",
                location: "Dummy",
                avatar_url: "http://placekitten.com/g/64/64",
            }
        };

        /* not to repeat it two times like we do in functional component.
            this.state = {
            count2 : 2,
        };
        */
    }

    async componentDidMount() {
        // this is the place where we can make API calls
        // this is the place where we can do DOM manipulation
        // this is the place where we can do event listeners
        // this is the place where we can do subscriptions
        // this is the place where we can do setIntervals
        const response = await fetch("https://api.github.com/users/sanjay07sharma");
        const data = await response.json();

        this.setState({
            userInfo: data,
        });
    }


    render() {
        const { name , location , avatar_url } = this.state.userInfo;
        return(
            <div class="user-card">
                <img src={avatar_url}/>
                <h3>Name: {name} </h3>
                <h3>Location: {location}</h3>
                </div>
        );
    }
}
