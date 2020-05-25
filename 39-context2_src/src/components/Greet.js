import React from 'react';

// First way: destruct at the passing argument
// const Greet = ({name, heroName}) => {
//     console.log (name, heroName)
//     return <h1>Hello, { name }, Heroname: { heroName }  </h1>
// }

// The second way: destruct inside the function body.
const Greet = (props) => {
    // extract name and heroName from props
    const {name, heroName} = props 
    console.log (name, heroName)
    return <h1>Hello, { name }, Heroname: { heroName }</h1>
}

export default Greet;