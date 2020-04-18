import React, { Component } from 'react'
class Message extends Component {
    constructor () {
        super()
        this.state = {
            message: "Peter"
        }
    }

    changeMessage () {
        console.log ('ChangeMessage Before => this.state.message: ', this.state.message)
        this.setState ({
            message: "Thanks for Subscribing."
        })
        console.log ('ChangeMessage After => this.state.message: ', this.state.message)
    }

    render () {
        console.log ('render(): => this.state.message: ', this.state.message) 
        return (
            <div>
                <h1>Welcome Visitor: { this.state.message } </h1>
                <button onClick = { () => this.changeMessage() } >Subscribe</button>
            </div>     
        )   
    }
}

export default Message