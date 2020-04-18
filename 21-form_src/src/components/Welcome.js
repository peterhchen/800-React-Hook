import React, { Component } from 'react'
class Welcome extends Component {
    render () {
        const { name, heroName } = this.props
        // const { state1, state2 } = this.state
        console.log (name, heroName) 
        return (
            <div>
                <h1>Class Component: Welcome { name }, Hero-Name: { heroName }</h1>
            </div>     
        )   
    }
    // render () {
    //     console.log (this.props) 
    //     return (
    //         <div>
    //             <h1>Class Component: Welcome {this.props.name}, Hero-Name: {this.props.heroName}</h1>
    //         </div>     
    //     )   
    // }
}

export default Welcome