import React from 'react';

// A class based conponentis nothing but a normal class which extends React.Component
// It has a render method which returns a piece of JSX
export class UserClass extends React.Component {
    // it will render this piece of JSX
    constructor(props) {
        super(props);

        // using state in class component 
        this.state = {
            count : 0,
            count2 : 2, // this is how we do in class based component
        };

        /* not to repeat it two times like we do in functional component.
            this.state = {
            count2 : 2,
        };
        */
        console.log("child constructor")
    }

    componentDidMount() {
        // this is the place where we can make API calls
        // this is the place where we can do DOM manipulation
        // this is the place where we can do event listeners
        // this is the place where we can do subscriptions
        // this is the place where we can do setIntervals

        console.log("child Component is mounted");
    }

    render() {
        console.log("child render")
        const {name} = this.props;

        return(
            <div class="user-card">
                <h2>count: {this.state.count}</h2>
                <button onClick={
                    /* initial approach 
                    this.state.count = this.state.count + 1
                    count: this.state.count + 1 

                    Remember never ever mutate the state directly in react.
                    */

                    () => this.setState({
                        count: this.state.count + 1,
                    } // this.setState is similar to setCount in functional component, it takes an object
                    
                    )}>Increment</button>
                <h3>Name: {name} </h3>
                <h3>Location: Gandhinagr</h3>
                <h4>Contact : @sanjay07sharma</h4>
            </div>
        );
    }
}