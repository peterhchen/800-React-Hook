import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        // Third Approach: React Recommend approach
        // this.EventHandler = this.EventHandler.bind (this)
    }

    // Third Approach: React Recommend approach
    // EventHandler () {
    //     this.setState ({ 
    //         message: "Good Bye"
    //     })
    //     console.log(this)
    // }
    
    EventHandler = () => {
        this.setState ({
            message: "Good Bye"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <p>{ this.state.message }</p>
                {/* first approach: bind 'this' keyword */}
                {/* <button onClick = { this.EventHandler.bind(this) } >EventBind</button> */}
                {/* Second approach: Use Arrow function EventHandler() */}
                {/* <button onClick = { () => this.EventHandler () } >EventBind</button> */}
                {/* Third Approach: React Recommend approach */}
                {/* <button onClick = { this.EventHandler }>EventBind</button> */}
                {/* Fourth Approach */}
                <button onClick = { this.EventHandler } >EventBind</button>
            </div>
        )
    }
}

export default EventBind
