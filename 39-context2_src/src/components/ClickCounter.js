import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    render() {
        const { name, count, incrementCount }= this.props // destruction of state structure.
        return (
            <button onClick = { incrementCount }> 
            { name } 
            Clicked { count } times</button>
        )
    }

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }
    
    // incrementCount = () => {
    //     this.setState (prevState => {
    //         return { count: prevState.count + 1}
    //     })
    // }

    // render() {
    //     console.log ('count:', this.state.count)
    //     // const { count } = this.state  // assign the value to new variable.
    //     const { count }= this.state // destruction of state structure.
    //     return <button onClick = { this.incrementCount }> 
    //     { this.props.name } Clicked { count } times</button>
    // }
}

export default UpdatedComponent (ClickCounter)
// export default ClickCounter
