import React from 'react';


export default class UserGreeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render() { 
        if (this.state.isLoggedIn) {
            return (
                <div>Welcome Neil</div>
            )
        } else {
            return (
                <div>Welcome Guest</div>
            )
        }
    }
}