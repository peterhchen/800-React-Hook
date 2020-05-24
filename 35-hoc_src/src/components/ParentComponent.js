import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind (this)
    }

    // greetParent () {
    //     alert (`Hello ${this.state.parentName}`)
    // }
    
    greetParent (childName) {
        //alert ('Hello ' +  this.state.parentName)
        // ES6 uses template literals inside the backstrok (``) 
        // [key stroke under <ESC> key] 
        alert (`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                {/* Pass the reference of the parent, Not function ()  */}
                <ChildComponent greetHandler = { this.greetParent } />              
            </div>
        )
    }
}

export default ParentComponent
