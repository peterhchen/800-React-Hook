import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState (0)

    // const tick = () => {
    //     setCount (count + 1)
    // }
    const tick = () => {
        setCount (prevCount => prevCount + 1)
    }
    useEffect (() => {
        console.log ('useEffect called')
        const interval = setInterval (tick, 1000)
        // ComponentWillUnmount()
        return () => {
            clearInterval (interval)
        }
    // }, [count]) // []: interval setup once, count is dependency
    }, []) // []: use prevCount instead of count array

    return (
        <div>
            <h1> Hook Counter: { count } </h1>
        </div>
    )
}

export default IntervalHookCounter
