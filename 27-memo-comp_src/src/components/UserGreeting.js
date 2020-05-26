import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin: true
        }
    }
    
    render() {
        // Fourth Approach: Short Circuit Operator
        return (this.state.isLogin && <div>Welcome Peter</div>)
        
        // Third Approach: Ternary
        // return (
        //     this.state.isLogin ? 
        //     <div>Welcome Peter</div> : 
        //     <div>Welcome Guest</div>
        // )


        // Second Approach: mesage
        // let message
        // if (this.state.isLogin) {
        //     message =<div>Welcome Peter</div>
        // } else {
        //     message =<div>Welcome Guest</div>
        // }
        // return message
        
        // First Approach: if/else
        // if (this.state.isLogin) {
        //     return <div>Welcome Peter</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <p>Welcome Peter</p>
        //         <p>Welcome Guests</p>
        //     </div>
        // )
    }
}

export default UserGreeting
