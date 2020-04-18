import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      // First Step: Create the inputRef.
      this.inputRef = React.createRef ();
    }
    componentDidMount () {
        // Third Step: 1) Set focus. 
        this.inputRef.current.focus()
        console.log (this.inputRef)
    }
    clickHandler = () => {
        alert (this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        {/* Second Step: Attach the reference to the input element. */}
        <input type="text" ref={ this.inputRef } /> 
        {/* Third Step: 2) Add element handler for reference. */}
        <button onClick={ this.clickHandler}>Click </button>
      </div>
    )
  }
}

export default RefsDemo