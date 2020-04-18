import React, { Component } from 'react'

class ClassClick extends Component {
    classHandler () {
        console.log ('Class Clicked')
    }
    render() {
        return (
            <div>
                <button onClick = { this.classHandler } > Class CLick </button>
            </div>
        )
    }
}

export default ClassClick
