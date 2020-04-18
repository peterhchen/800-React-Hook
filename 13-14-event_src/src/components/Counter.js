import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    increment () {
        // console.log ('increment():')
        // this.state.count = this.state.count + 1
        // console.log ('increment() => this.state.count = ', this.state.count)
        this.setState (
            this.state = {
                count: this.state.count + 1
            },
            () => {
                console.log ('callback value = ', this.state.count)
            }
        )
        console.log ('increment() => this.state.count = ', this.state.count)
    }
    incrementPrevState () {
        this.setState (prevState => ({
        count: prevState.count + 1
        }))
        console.log ('increment() => this.state.count = ', this.state.count)
    }
    incrementFive () {
        this.increment ()
        this.increment ()
        this.increment ()
        this.increment ()
        this.increment ()
        // this.incrementPrevState ()
        // this.incrementPrevState ()
        // this.incrementPrevState ()
        // this.incrementPrevState ()
        // this.incrementPrevState ()
        console.log ('increment() => this.state.count = ', this.state.count)
    }
    render() {
        return (
            <div>
                <p>count = { this.state.count } </p>
                {/* <button onClick = { () => this.increment () } > Increment </button>  */}
                <button onClick = { () => this.incrementFive () } > Increment </button> 
            </div>
        )
    }
}

export default Counter
