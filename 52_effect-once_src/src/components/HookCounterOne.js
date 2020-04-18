import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0) // destructuring
    const [name, setName] = useState ('')
    useEffect (() => {
        console.log ('useEffect: Updating doucment title')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <label>Name: </label>
            <input type='text' value={name} 
                onChange ={e=>setName(e.target.value)}>
            </input>
            <br></br>
            <button onClick = {() => setCount (count + 1)} >
            Hook Counter { count } times
            </button>
        </div>
    )
}

export default HookCounterOne
