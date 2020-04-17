import React, { Component } from 'react'
class Welcome extends Component {
    render () {
        console.log (this.props) 
        return (
            <div>
                <h1>Class Component: Welcome {this.props.name}, Hero-Name: {this.props.heroName}</h1>
            </div>     
        )   
    }
}

export default Welcome