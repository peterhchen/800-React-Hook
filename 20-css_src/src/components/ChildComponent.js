import React from 'react'

// rfce: React Function Component Extension
function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick = { props.greetHandler }> Greet Parent </button> */}
            <button onClick = { () => props.greetHandler ('Child') }> Greet Parent </button>
        </div>
    )
}

export default ChildComponent
