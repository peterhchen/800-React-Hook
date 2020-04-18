import React from 'react'
// import Person from './Person'

function NameList() {
    const names = ['Peter', 'Jason', 'Jonathan', 'Peter', 'Jason', 'Jonathan']
    const nameList = names.map ((name, index) => <h2 key = { index } > {index}: {name}</h2>)
    //console.log ('nameList:', nameList)
    return (<div>{ nameList }</div>)
}

export default NameList
