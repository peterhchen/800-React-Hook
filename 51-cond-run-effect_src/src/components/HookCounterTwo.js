import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState (initialCount)
    const incrementFive = () => {
        //setCount (count + 5)  //OK
        for (let i = 0; i < 5; i++) {
            // setCount (count + 1)
            // passed in value (prevCount) => { prevCount + 1}
            setCount (prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            count : { count } <br></br>
            <button onClick = { 
                () => setCount (initialCount) 
            }>Reset</button>
            <button onClick = { 
                // () => setCount (count + 1)
                () => setCount ((prevCount) => prevCount + 1)
            }> Increment</button>
            <button onClick = {
                //() => setCount (count -1)    
                () => setCount (prevCount => prevCount -1)            
            }>Decrement </button>
            <br></br>
            <button onClick = { 
                incrementFive
            }> Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
